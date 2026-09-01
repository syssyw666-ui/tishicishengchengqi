import json
from pathlib import Path

from django.db import migrations
from django.db.models import Max


def add_photo_purposes(apps, schema_editor):
    model = apps.get_model("content", "ParameterOption")
    rows = model.objects.using(schema_editor.connection.alias)
    # Fresh installations receive the complete catalog through seed_catalog.
    # Existing installations must not overwrite any administrator-edited fields.
    if not rows.exists():
        return
    snapshot = Path(__file__).resolve().parents[1] / "data/photo_purposes_20260831.json"
    additions = json.loads(snapshot.read_text(encoding="utf-8"))
    names = {
        name.strip().casefold()
        for pair in rows.filter(category="purpose").values_list("zh_name", "en_name")
        for name in pair if name
    }
    order = rows.filter(category="purpose", style_group="photography").aggregate(value=Max("order"))["value"] or 0
    for item in additions:
        if rows.filter(source_id=item["id"]).exists():
            continue
        if item["zhName"].strip().casefold() in names or item["enName"].strip().casefold() in names:
            continue
        order += 1
        rows.get_or_create(source_id=item["id"], defaults={
            "category": "purpose", "style_group": "photography",
            "zh_name": item["zhName"], "en_name": item["enName"],
            "image": item["image"], "zh_prompt": item["zhPrompt"],
            "en_prompt": item["enPrompt"], "negative": item.get("negative", []),
            "enabled": True, "order": order,
        })
        names.update((item["zhName"].strip().casefold(), item["enName"].strip().casefold()))
    for source_id, previous_group in (("purpose-portrait", "commercial"), ("purpose-id-photo", "social")):
        order += 1
        rows.filter(source_id=source_id, category="purpose", style_group=previous_group).update(
            style_group="photography", order=order,
        )


class Migration(migrations.Migration):
    dependencies = [("content", "0010_deploymentsettings_emailjs_private_key")]
    operations = [migrations.RunPython(add_photo_purposes, migrations.RunPython.noop)]
