import json
from pathlib import Path

from django.db import migrations
from django.db.models import Max


PARAMETER_IDS = {
    "style-mono-ink-editorial",
    "style-retro-crt-interface",
    "style-roughcast-early-3d",
    "style-jrpg-npc-interface",
    "style-photo-perler-charm",
    "style-textile-toy-portrait",
}

FEATURED_IDS = {
    "img2img-mono-ink-editorial",
    "img2img-retro-crt-interface",
    "img2img-roughcast-early-3d",
    "img2img-boarding-pass-memory",
    "img2img-jrpg-npc-profile",
    "img2img-live-photo-nine-grid",
    "img2img-home-screen-memory",
    "img2img-ui-doodle-overlay",
    "img2img-thermal-receipt-memory",
    "img2img-crayon-motion-overlay",
    "img2img-silhouette-editorial",
    "img2img-pocket-picturebook",
    "img2img-photo-perler-charm",
    "img2img-textile-toy-portrait",
    "img2img-iridescent-long-exposure",
    "img2img-pixel-slice-stretch",
    "img2img-paper-portrait-cd",
    "img2img-visual-identity-expander",
}


def sync_featured_skill_batch(apps, schema_editor):
    ParameterOption = apps.get_model("content", "ParameterOption")
    FeaturedPrompt = apps.get_model("content", "FeaturedPrompt")
    catalog_path = Path(__file__).resolve().parents[2] / "catalog_seed.json"
    catalog = json.loads(catalog_path.read_text(encoding="utf-8"))

    parameter_rows = ParameterOption.objects.using(schema_editor.connection.alias)
    for item in catalog["parameters"]:
        if item["id"] not in PARAMETER_IDS:
            continue
        group = item.get("styleGroup") or "all"
        existing = parameter_rows.filter(source_id=item["id"]).first()
        order = existing.order if existing else (
            parameter_rows.filter(category=item["category"], style_group=group)
            .aggregate(value=Max("order"))["value"]
            or 0
        ) + 1
        parameter_rows.update_or_create(
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

    featured_rows = FeaturedPrompt.objects.using(schema_editor.connection.alias)
    for item in catalog["featuredPrompts"]:
        if item["id"] not in FEATURED_IDS:
            continue
        group = item.get("group") or "all"
        existing = featured_rows.filter(source_id=item["id"]).first()
        order = existing.order if existing else (
            featured_rows.filter(category=item["category"], group=group)
            .aggregate(value=Max("order"))["value"]
            or 0
        ) + 1
        featured_rows.update_or_create(
            source_id=item["id"],
            defaults={
                "category": item["category"],
                "group": group,
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
    dependencies = [("content", "0084_fix_architecture_infographic_source")]
    operations = [migrations.RunPython(sync_featured_skill_batch, migrations.RunPython.noop)]
