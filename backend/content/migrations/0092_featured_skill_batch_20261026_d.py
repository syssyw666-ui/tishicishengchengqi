import json
from pathlib import Path

from django.db import migrations
from django.db.models import Max


PARAMETER_IDS = {
    "effect-pixel-dissolve-paper",
    "style-sculptural-impasto-miniature",
    "style-rounded-modular-isometric",
    "style-kraft-stencil-print",
    "style-charcoal-fading-memory",
    "style-clean-ink-stipple-memory",
}

FEATURED_IDS = {
    "img2img-pixel-dissolve-memory",
    "img2img-sculptural-impasto-miniature",
    "img2img-rounded-isometric-blocks",
    "img2img-kraft-stencil-landmark",
    "img2img-paper-cutout-travel-people",
    "img2img-gouache-object-archive",
    "img2img-charcoal-fading-memory",
    "img2img-clean-ink-stipple-memory",
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
    dependencies = [("content", "0091_remove_featured_prompt_experiment_prefix")]
    operations = [migrations.RunPython(sync_featured_skill_batch, migrations.RunPython.noop)]
