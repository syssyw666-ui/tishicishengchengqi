import json
from pathlib import Path

from django.db import migrations
from django.db.models import Max


FEATURED_IDS = {
    "img2img-underground-audition",
    "img2img-heavy-fisheye-city",
    "img2img-glitch-pixel-collage",
    "img2img-retro-table-editorial",
    "img2img-framed-comic-panel",
    "img2img-paper-flat-vignette",
    "img2img-giant-head-mini-selfie",
    "img2img-blue-paper-manga-type",
    "img2img-fashion-sketch-observation",
    "img2img-pop-up-paper-landscape",
    "img2img-grotesque-soul-sketch",
    "img2img-ecommerce-campaign-lock",
}


def sync_featured_skill_batch(apps, schema_editor):
    FeaturedPrompt = apps.get_model("content", "FeaturedPrompt")
    catalog_path = Path(__file__).resolve().parents[2] / "catalog_seed.json"
    catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
    rows = FeaturedPrompt.objects.using(schema_editor.connection.alias)

    for item in catalog["featuredPrompts"]:
        if item["id"] not in FEATURED_IDS:
            continue
        group = item.get("group") or "all"
        existing = rows.filter(source_id=item["id"]).first()
        order = existing.order if existing else (
            rows.filter(category=item["category"], group=group)
            .aggregate(value=Max("order"))["value"]
            or 0
        ) + 1
        rows.update_or_create(
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
    dependencies = [("content", "0085_featured_skill_batch_20261025")]
    operations = [migrations.RunPython(sync_featured_skill_batch, migrations.RunPython.noop)]
