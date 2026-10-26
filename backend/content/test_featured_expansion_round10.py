import hashlib
import json
from pathlib import Path

from django.test import SimpleTestCase
from PIL import Image


ROOT = Path(__file__).resolve().parents[2]
CATALOG_PATH = ROOT / "backend" / "catalog_seed.json"
PARAMETER_IDS = {
    "style-portrait-structural-surrealism",
    "style-ghost-line-zine",
    "style-dreamcore-archive-collage",
}
FEATURED_IDS = {
    "img2img-portrait-visual-metaphor",
    "img2img-ghost-line-extension",
    "img2img-dreamcore-archive-collage",
    "img2img-identity-locked-photo-pack",
    "img2img-transparent-shell-xray",
    "img2img-controlled-cutaway",
    "img2img-architecture-day-to-night",
    "img2img-exterior-facade-renovation",
}


class FeaturedExpansionRound10Tests(SimpleTestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))

    def test_style_parameters_are_complete_and_distinct(self):
        rows = {row["id"]: row for row in self.catalog["parameters"] if row["id"] in PARAMETER_IDS}
        self.assertEqual(set(rows), PARAMETER_IDS)
        self.assertEqual(len({row["zhName"] for row in rows.values()}), len(PARAMETER_IDS))
        for row in rows.values():
            self.assertEqual(row["category"], "style")
            self.assertIn(row["styleGroup"], {"design-retro", "craft-print"})
            self.assertGreaterEqual(len(row["zhPrompt"]), 180, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 500, row["id"])

    def test_workflows_are_complete_grouped_and_distinct(self):
        rows = {row["id"]: row for row in self.catalog["featuredPrompts"] if row["id"] in FEATURED_IDS}
        self.assertEqual(set(rows), FEATURED_IDS)
        self.assertEqual(len({row["zhTitle"] for row in rows.values()}), len(FEATURED_IDS))
        for row in rows.values():
            self.assertEqual(row["category"], "image-to-image")
            self.assertIn(row["group"], {"style-transfer", "poster-layout", "scene-compositing", "product-structure"})
            self.assertNotIn("实验提示词", row["prompt"])
            self.assertGreaterEqual(len(row["prompt"]), 300, row["id"])

    def test_all_new_assets_are_unique_fixed_size_images(self):
        parameter_rows = {row["id"]: row for row in self.catalog["parameters"] if row["id"] in PARAMETER_IDS}
        featured_rows = {row["id"]: row for row in self.catalog["featuredPrompts"] if row["id"] in FEATURED_IDS}
        asset_paths = [ROOT / "public" / row["image"].split("?", 1)[0].removeprefix("/") for row in parameter_rows.values()]
        for row in featured_rows.values():
            asset_paths.extend(
                ROOT / "public" / row[field].removeprefix("/")
                for field in ("originalImage", "resultImage")
            )
        hashes = []
        for path in asset_paths:
            self.assertTrue(path.is_file(), path)
            with Image.open(path) as image:
                self.assertEqual(image.size, (960, 540), path.name)
                image.verify()
            hashes.append(hashlib.sha256(path.read_bytes()).hexdigest())
        self.assertEqual(len(hashes), len(set(hashes)))

    def test_each_workflow_keeps_a_unique_operational_mechanism(self):
        rows = {row["id"]: row for row in self.catalog["featuredPrompts"]}
        distinguishing_terms = {
            "img2img-portrait-visual-metaphor": "双关",
            "img2img-ghost-line-extension": "截断",
            "img2img-dreamcore-archive-collage": "回声碎片",
            "img2img-identity-locked-photo-pack": "2×2",
            "img2img-transparent-shell-xray": "半透明",
            "img2img-controlled-cutaway": "剖切平面",
            "img2img-architecture-day-to-night": "蓝调时刻",
            "img2img-exterior-facade-renovation": "立面表层",
        }
        for source_id, term in distinguishing_terms.items():
            self.assertIn(term, rows[source_id]["prompt"], source_id)
