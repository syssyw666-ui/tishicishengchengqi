import json
from pathlib import Path

from django.db import migrations
from django.db.models import Max


PARAMETER_IDS = {
    "style-scene-score-structural",
    "style-dark-woven-canvas",
    "style-paper-pulp-relief",
    "style-serpent-line-ink",
    "style-primary-hardlight",
    "style-cream-hollow-sketch",
}

FEATURED_IDS = {
    "img2img-scene-score-translation",
    "img2img-abstract-pixel-redraw",
    "img2img-dark-woven-canvas",
    "img2img-paper-pulp-relief-poster",
    "img2img-rainbow-ink-diptych",
    "img2img-soft-gradient-diptych",
    "img2img-electric-blue-halftone",
    "img2img-serpent-line-ink",
    "img2img-primary-hardlight-city",
    "img2img-cream-hollow-home-sketch",
    "img2img-childhood-giant-head-card",
    "img2img-teal-amber-fog-field",
}


def sync_featured_skill_batch(apps, schema_editor):
    ParameterOption = apps.get_model("content", "ParameterOption")
    FeaturedPrompt = apps.get_model("content", "FeaturedPrompt")
    catalog_path = Path(__file__).resolve().parents[2] / "catalog_seed.json"
    catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
    alias = schema_editor.connection.alias
    parameter_rows = ParameterOption.objects.using(alias)
    featured_rows = FeaturedPrompt.objects.using(alias)

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
    dependencies = [("content", "0087_featured_skill_batch_20261025_c")]
    operations = [migrations.RunPython(sync_featured_skill_batch, migrations.RunPython.noop)]
