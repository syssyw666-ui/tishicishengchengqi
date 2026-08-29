import json
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError
from django.db import transaction

from content.catalog_labels import catalog_labels
from content.models import FeaturedPrompt, ParameterOption


class Command(BaseCommand):
    help = "Import the bundled parameter catalog and featured prompts into the database."

    def add_arguments(self, parser):
        parser.add_argument("--file", type=Path, help="Optional path to a catalog seed JSON file.")
        parser.add_argument("--prune", action="store_true", help="Disable database items missing from the seed file.")

    @staticmethod
    def _required_group(model, source_id, category, field_name, featured=False):
        existing = model.objects.filter(source_id=source_id).values_list(field_name, flat=True).first()
        if existing:
            return existing
        groups = catalog_labels()[3 if featured else 1].get(category, {})
        if not groups:
            raise CommandError(f"Category {category!r} has no configured subcategory.")
        return next(iter(groups))

    @transaction.atomic
    def handle(self, *args, **options):
        seed_path = options["file"] or Path(__file__).resolve().parents[3] / "catalog_seed.json"
        if not seed_path.exists():
            raise CommandError(f"Catalog seed file not found: {seed_path}")

        data = json.loads(seed_path.read_text(encoding="utf-8"))
        parameter_ids = set()
        featured_ids = set()

        for order, item in enumerate(data.get("parameters", [])):
            source_id = item["id"]
            parameter_ids.add(source_id)
            style_group = item.get("styleGroup") or self._required_group(
                ParameterOption, source_id, item["category"], "style_group"
            )
            ParameterOption.objects.update_or_create(
                source_id=source_id,
                defaults={
                    "category": item["category"],
                    "style_group": style_group,
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

        for order, item in enumerate(data.get("featuredPrompts", [])):
            source_id = item["id"]
            featured_ids.add(source_id)
            group = item.get("group") or self._required_group(
                FeaturedPrompt, source_id, item["category"], "group", featured=True
            )
            FeaturedPrompt.objects.update_or_create(
                source_id=source_id,
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

        if options["prune"]:
            ParameterOption.objects.exclude(source_id__in=parameter_ids).update(enabled=False)
            FeaturedPrompt.objects.exclude(source_id__in=featured_ids).update(enabled=False)

        self.stdout.write(self.style.SUCCESS(
            f"Imported {len(parameter_ids)} parameters and {len(featured_ids)} featured prompts."
        ))
