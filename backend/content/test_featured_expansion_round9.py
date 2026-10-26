import hashlib
import json
from pathlib import Path

from django.test import SimpleTestCase
from PIL import Image


BACKEND_ROOT = Path(__file__).resolve().parents[1]
CATALOG_PATH = BACKEND_ROOT / "catalog_seed.json"
ASSET_ROOT = BACKEND_ROOT.parent / "public"
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


class FeaturedExpansionRound9Tests(SimpleTestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
        cls.rows = {
            row["id"]: row
            for row in cls.catalog["featuredPrompts"]
            if row["id"] in FEATURED_IDS
        }

    def test_workflows_are_complete_grouped_and_distinct(self):
        self.assertEqual(set(self.rows), FEATURED_IDS)
        self.assertEqual(len({row["zhTitle"] for row in self.rows.values()}), len(FEATURED_IDS))
        for row in self.rows.values():
            self.assertEqual(row["category"], "image-to-image")
            self.assertIn(row["group"], {"scene-compositing", "product-commercial", "product-structure"})
            self.assertNotIn("实验提示词", row["prompt"])
            self.assertGreaterEqual(len(row["prompt"]), 300, row["id"])

    def test_workflow_assets_are_unique_fixed_size_images(self):
        if not ASSET_ROOT.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        hashes = []
        for row in self.rows.values():
            for field, suffix in (("originalImage", "-original.jpg"), ("resultImage", "-result.jpg")):
                self.assertTrue(row[field].endswith(suffix), row["id"])
                path = ASSET_ROOT / row[field].removeprefix("/")
                self.assertTrue(path.is_file(), path)
                with Image.open(path) as image:
                    self.assertEqual(image.size, (960, 540), path.name)
                    image.verify()
                hashes.append(hashlib.sha256(path.read_bytes()).hexdigest())
        self.assertEqual(len(hashes), len(set(hashes)))

    def test_each_workflow_keeps_a_unique_operational_mechanism(self):
        distinguishing_terms = {
            "img2img-interior-style-redesign": "固定设施",
            "img2img-empty-room-virtual-staging": "虚拟布置",
            "img2img-floorplan-isometric-render": "等距",
            "img2img-sketch-photoreal-render": "草图",
            "img2img-group-photo-composite": "人物 1",
            "img2img-precise-object-replacement": "只把",
            "img2img-intelligent-outpainting": "新增画布",
            "img2img-product-lifestyle-scene": "SKU",
        }
        for source_id, term in distinguishing_terms.items():
            self.assertIn(term, self.rows[source_id]["prompt"], source_id)
