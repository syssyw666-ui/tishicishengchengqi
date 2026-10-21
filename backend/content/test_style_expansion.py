import json
from collections import Counter
from pathlib import Path

from django.test import SimpleTestCase
from PIL import Image


ROOT = Path(__file__).resolve().parents[2]
SEED_PATH = ROOT / "backend" / "catalog_seed.json"
SNAPSHOT_PATH = ROOT / "backend" / "content" / "data" / "style_expansion_20261021.json"


class StyleExpansionTests(SimpleTestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.seed = json.loads(SEED_PATH.read_text(encoding="utf-8"))
        cls.snapshot = json.loads(SNAPSHOT_PATH.read_text(encoding="utf-8"))
        cls.parameters = cls.seed["parameters"]

    def test_parameter_ids_and_names_are_unique(self):
        for field in ("id", "zhName", "enName"):
            duplicates = [value for value, count in Counter(row[field] for row in self.parameters).items() if count > 1]
            self.assertEqual(duplicates, [], f"Duplicate {field}: {duplicates}")

    def test_all_style_items_have_a_subcategory(self):
        style_categories = {"style", "artist-style", "ethnic-style", "render", "visual-effect", "color-grading"}
        missing = [row["id"] for row in self.parameters if row["category"] in style_categories and not row.get("styleGroup")]
        self.assertEqual(missing, [])

    def test_duplicate_hologram_effect_was_removed(self):
        ids = {row["id"] for row in self.parameters}
        self.assertIn("render-holographic-projection", ids)
        self.assertNotIn("effect-hologram", ids)

    def test_new_style_assets_are_unique_widescreen_images(self):
        new_rows = [row for row in self.snapshot["parameters"] if "20261021-style-expansion" in row["image"]]
        hashes = set()
        for row in new_rows:
            asset = ROOT / "public" / row["image"].split("?", 1)[0].lstrip("/")
            self.assertTrue(asset.is_file(), row["id"])
            with Image.open(asset) as image:
                self.assertEqual(image.size, (960, 540), row["id"])
            digest = __import__("hashlib").sha256(asset.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes, row["id"])
            hashes.add(digest)

    def test_new_prompts_describe_visual_evidence(self):
        new_rows = [row for row in self.snapshot["parameters"] if "20261021-style-expansion" in row["image"]]
        for row in new_rows:
            self.assertGreaterEqual(len(row["zhPrompt"]), 24, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 45, row["id"])
