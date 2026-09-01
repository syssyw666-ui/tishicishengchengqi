import importlib
import json
from pathlib import Path
from types import SimpleNamespace

from django.apps import apps
from django.db import connection
from django.test import TestCase

from .catalog_labels import group_choices
from .models import ParameterOption


class PhotoPurposeMigrationTests(TestCase):
    def apply_additions(self):
        migration = importlib.import_module("content.migrations.0011_photo_purposes")
        migration.add_photo_purposes(apps, SimpleNamespace(connection=connection))

    def test_additions_preserve_existing_edits_and_are_idempotent(self):
        old = ParameterOption.objects.create(
            source_id="purpose-portrait", category="purpose", style_group="commercial",
            zh_name="定制写真", en_name="Custom portrait", zh_prompt="管理员修改的内容",
            en_prompt="Custom text", image="/custom.jpg", enabled=False, order=7,
        )
        self.apply_additions()
        self.assertEqual(ParameterOption.objects.filter(style_group="photography").count(), 25)
        old.refresh_from_db()
        self.assertEqual(old.style_group, "photography")
        self.assertEqual(old.zh_prompt, "管理员修改的内容")
        self.assertEqual(old.image, "/custom.jpg")
        self.assertFalse(old.enabled)
        added = ParameterOption.objects.get(source_id="purpose-realistic-photo")
        added.zh_prompt = "保留后续修改"
        added.order = 99
        added.save()
        self.apply_additions()
        added.refresh_from_db()
        self.assertEqual(added.zh_prompt, "保留后续修改")
        self.assertEqual(added.order, 99)
        photo_purpose_ids = json.loads(
            (Path(__file__).resolve().parent / "data/photo_purposes_20260831.json").read_text(encoding="utf-8")
        )
        self.assertEqual(
            ParameterOption.objects.filter(source_id__in=[row["id"] for row in photo_purpose_ids]).count(),
            24,
        )

    def test_does_not_duplicate_custom_same_name_or_move_custom_groups(self):
        ParameterOption.objects.create(
            source_id="custom-photo", category="purpose", style_group="photography",
            zh_name="写实照片", en_name="Custom photo", zh_prompt="custom", en_prompt="custom",
        )
        old = ParameterOption.objects.create(
            source_id="purpose-id-photo", category="purpose", style_group="custom-group",
            zh_name="证件照", en_name="ID", zh_prompt="custom", en_prompt="custom",
        )
        self.apply_additions()
        self.assertFalse(ParameterOption.objects.filter(source_id="purpose-realistic-photo").exists())
        old.refresh_from_db()
        self.assertEqual(old.style_group, "custom-group")

    def test_catalog_snapshot_and_chinese_subcategory_match(self):
        root = Path(__file__).resolve().parent
        snapshot = json.loads((root / "data/photo_purposes_20260831.json").read_text(encoding="utf-8"))
        seed = json.loads((root.parent / "catalog_seed.json").read_text(encoding="utf-8"))
        indexed = {item["id"]: item for item in seed["parameters"]}
        self.assertEqual(len(snapshot), 24)
        self.assertEqual(len({row["image"] for row in snapshot}), 24)
        for row in snapshot:
            self.assertEqual(indexed[row["id"]], row)
            self.assertEqual(row["styleGroup"], "photography")
            self.assertNotIn("defaultWeight", row)
        self.assertIn(("photography", "照片摄影"), group_choices("purpose"))
