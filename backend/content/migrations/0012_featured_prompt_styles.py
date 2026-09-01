import json
from pathlib import Path

from django.db import migrations
from django.db.models import Max


def _normalized_names(rows, model_field_pairs):
    names = set()
    for pair in rows.values_list(*model_field_pairs):
        for name in pair:
            if name:
                names.add(name.strip().casefold())
    return names


def add_featured_prompt_styles(apps, schema_editor):
    ParameterOption = apps.get_model("content", "ParameterOption")
    FeaturedPrompt = apps.get_model("content", "FeaturedPrompt")
    parameter_rows = ParameterOption.objects.using(schema_editor.connection.alias)
    featured_rows = FeaturedPrompt.objects.using(schema_editor.connection.alias)
    # Fresh installations receive the complete catalog through seed_catalog.
    if not parameter_rows.exists() and not featured_rows.exists():
        return

    snapshot = Path(__file__).resolve().parents[1] / "data/featured_prompt_styles_20260831.json"
    additions = json.loads(snapshot.read_text(encoding="utf-8"))

    parameter_names = _normalized_names(
        parameter_rows.filter(category="style"),
        ("zh_name", "en_name"),
    )
    parameter_orders = {}
    for item in additions.get("parameters", []):
        source_id = item["id"]
        if parameter_rows.filter(source_id=source_id).exists():
            continue
        if item["zhName"].strip().casefold() in parameter_names or item["enName"].strip().casefold() in parameter_names:
            continue
        key = (item["category"], item.get("styleGroup") or "all")
        if key not in parameter_orders:
            parameter_orders[key] = (
                parameter_rows
                .filter(category=key[0], style_group=key[1])
                .aggregate(value=Max("order"))["value"] or 0
            )
        parameter_orders[key] += 1
        parameter_rows.get_or_create(source_id=source_id, defaults={
            "category": item["category"],
            "style_group": item.get("styleGroup") or "all",
            "zh_name": item["zhName"],
            "en_name": item["enName"],
            "image": item.get("image", ""),
            "zh_prompt": item["zhPrompt"],
            "en_prompt": item["enPrompt"],
            "negative": item.get("negative", []),
            "enabled": True,
            "order": parameter_orders[key],
        })
        parameter_names.update((item["zhName"].strip().casefold(), item["enName"].strip().casefold()))

    featured_names = _normalized_names(featured_rows, ("zh_title", "en_title"))
    featured_orders = {}
    for item in additions.get("featuredPrompts", []):
        source_id = item["id"]
        if featured_rows.filter(source_id=source_id).exists():
            continue
        if item["zhTitle"].strip().casefold() in featured_names or item["enTitle"].strip().casefold() in featured_names:
            continue
        key = (item["category"], item.get("group") or "all")
        if key not in featured_orders:
            featured_orders[key] = (
                featured_rows
                .filter(category=key[0], group=key[1])
                .aggregate(value=Max("order"))["value"] or 0
            )
        featured_orders[key] += 1
        featured_rows.get_or_create(source_id=source_id, defaults={
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
            "order": featured_orders[key],
        })
        featured_names.update((item["zhTitle"].strip().casefold(), item["enTitle"].strip().casefold()))


class Migration(migrations.Migration):
    dependencies = [("content", "0011_photo_purposes")]
    operations = [migrations.RunPython(add_featured_prompt_styles, migrations.RunPython.noop)]
