import json
from pathlib import Path

from django.db import migrations
from django.db.models import Max


def sync_style_expansion_f(apps, schema_editor):
    ParameterOption = apps.get_model("content", "ParameterOption")
    snapshot = Path(__file__).resolve().parents[1] / "data/style_expansion_20261021_f.json"
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


class Migration(migrations.Migration):
    dependencies = [("content", "0022_style_expansion_20261021_e")]
    operations = [migrations.RunPython(sync_style_expansion_f, migrations.RunPython.noop)]
