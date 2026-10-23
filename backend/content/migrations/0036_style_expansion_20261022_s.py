import json
from pathlib import Path

from django.db import migrations
from django.db.models import Max


REMOVED_PROP_IDS = [
    "prop-book",
    "prop-smartphone",
    "prop-laptop",
    "prop-camera",
    "prop-umbrella",
    "prop-flowers",
    "prop-suitcase",
    "prop-lantern",
    "prop-musical-instrument",
    "prop-sword",
    "prop-staff",
    "prop-map",
    "prop-cup",
    "prop-backpack",
    "prop-product-box",
    "prop-tool-kit",
]


def sync_style_expansion_s(apps, schema_editor):
    ParameterOption = apps.get_model("content", "ParameterOption")
    snapshot = Path(__file__).resolve().parents[1] / "data/style_expansion_20261022_s.json"
    payload = json.loads(snapshot.read_text(encoding="utf-8"))
    rows = ParameterOption.objects.using(schema_editor.connection.alias)

    for item in payload.get("parameters", []):
        group = item.get("styleGroup") or "all"
        existing = rows.filter(source_id=item["id"]).first()
        order = existing.order if existing else (
            rows.filter(category=item["category"], style_group=group).aggregate(value=Max("order"))["value"] or 0
        ) + 1
        rows.update_or_create(
            source_id=item["id"],
            defaults={
                "category": item["category"],
                "style_group": group,
                "zh_name": item["zhName"],
                "en_name": item["enName"],
                "image": item.get("image", ""),
                "zh_prompt": item["zhPrompt"],
                "en_prompt": item["enPrompt"],
                "negative": item.get("negative", []),
                "enabled": True,
                "order": order,
            },
        )

    rows.filter(source_id__in=REMOVED_PROP_IDS).delete()


class Migration(migrations.Migration):
    dependencies = [("content", "0035_style_expansion_20261022_r")]
    operations = [migrations.RunPython(sync_style_expansion_s, migrations.RunPython.noop)]
