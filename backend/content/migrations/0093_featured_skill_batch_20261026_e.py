import json
from pathlib import Path

from django.db import migrations
from django.db.models import Max


FEATURED_IDS = {
    "img2img-interior-style-redesign",
    "img2img-empty-room-virtual-staging",
    "img2img-floorplan-isometric-render",
    "img2img-sketch-photoreal-render",
    "img2img-group-photo-composite",
    "img2img-precise-object-replacement",
    "img2img-intelligent-outpainting",
    "img2img-product-lifestyle-scene",
}


def sync_featured_skill_batch(apps, schema_editor):
    FeaturedPrompt = apps.get_model("content", "FeaturedPrompt")
    catalog_path = Path(__file__).resolve().parents[2] / "catalog_seed.json"
    catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
    alias = schema_editor.connection.alias
    rows = FeaturedPrompt.objects.using(alias)

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
    dependencies = [("content", "0092_featured_skill_batch_20261026_d")]
    operations = [migrations.RunPython(sync_featured_skill_batch, migrations.RunPython.noop)]
