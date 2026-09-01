import json
from pathlib import Path

from django.db import migrations
from django.db.models import Max


def add_featured_prompt_additions(apps, schema_editor):
    ParameterOption = apps.get_model("content", "ParameterOption")
    FeaturedPrompt = apps.get_model("content", "FeaturedPrompt")
    snapshot = Path(__file__).resolve().parents[1] / "data/featured_prompt_additions_20260901.json"
    additions = json.loads(snapshot.read_text(encoding="utf-8"))

    parameter_rows = ParameterOption.objects.using(schema_editor.connection.alias)
    for item in additions.get("parameters", []):
        key = (item["category"], item.get("styleGroup") or "all")
        order = (
            parameter_rows
            .filter(category=key[0], style_group=key[1])
            .aggregate(value=Max("order"))["value"] or 0
        ) + 1
        parameter_rows.update_or_create(
            source_id=item["id"],
            defaults={
                "category": item["category"],
                "style_group": item.get("styleGroup") or "all",
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

    featured_rows = FeaturedPrompt.objects.using(schema_editor.connection.alias)
    for item in additions.get("featuredPrompts", []):
        key = (item["category"], item.get("group") or "all")
        order = (
            featured_rows
            .filter(category=key[0], group=key[1])
            .aggregate(value=Max("order"))["value"] or 0
        ) + 1
        featured_rows.update_or_create(
            source_id=item["id"],
            defaults={
                "category": item["category"],
                "group": item.get("group") or "all",
                "zh_title": item["zhTitle"],
                "en_title": item["enTitle"],
                "zh_description": item.get("zhDescription", ""),
                "en_description": item.get("enDescription", ""),
                "prompt": item["prompt"],
                "image": item.get("image", ""),
                "original_image": item.get("originalImage", ""),
                "result_image": item.get("resultImage", ""),
                "enabled": True,
                "order": order,
            },
        )


class Migration(migrations.Migration):
    dependencies = [("content", "0013_reclassify_journal_logo_purposes")]
    operations = [migrations.RunPython(add_featured_prompt_additions, migrations.RunPython.noop)]
