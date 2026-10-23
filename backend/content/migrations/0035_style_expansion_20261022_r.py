import json
from pathlib import Path

from django.db import migrations
from django.db.models import Max


DUPLICATE_SOURCE_IDS = [
    "craft-woodblock-new-year-print",
    "artist-block-print-ajrak",
    "artist-mezzotint",
    "artist-risograph-two-color",
    "artist-halftone-screenprint",
    "artist-etching-aquatint",
    "artist-linocut-poster",
    "style-rough-charcoal",
]


def sync_style_expansion_r(apps, schema_editor):
    ParameterOption = apps.get_model("content", "ParameterOption")
    snapshot = Path(__file__).resolve().parents[1] / "data/style_expansion_20261022_r.json"
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

    rows.filter(source_id__in=DUPLICATE_SOURCE_IDS).delete()


class Migration(migrations.Migration):
    dependencies = [("content", "0034_style_expansion_20261022_q")]
    operations = [migrations.RunPython(sync_style_expansion_r, migrations.RunPython.noop)]
