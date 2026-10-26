import hashlib
import json
from pathlib import Path

from django.test import SimpleTestCase
from PIL import Image


BACKEND_ROOT = Path(__file__).resolve().parents[1]
CATALOG_PATH = BACKEND_ROOT / "catalog_seed.json"
ASSET_ROOT = BACKEND_ROOT.parent / "public"
PARAMETER_IDS = {
    "style-photo-marker-split-media",
    "style-ink-clay-transition",
    "style-bold-contour-pure-ink",
    "style-material-explainer",
    "style-three-color-corner-mascot",
}
FEATURED_IDS = {
    "img2img-tiled-detail-refinement",
    "img2img-photo-marker-environment",
    "img2img-ink-to-clay-transition",
    "img2img-rippled-glass-portrait",
    "img2img-bold-contour-ink-portrait",
    "text-material-explainer-illustration",
    "text-three-color-corner-mascot",
}


class FeaturedExpansionRound11Tests(SimpleTestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))

    def test_new_parameters_are_complete_and_distinct(self):
        rows = {row["id"]: row for row in self.catalog["parameters"] if row["id"] in PARAMETER_IDS}
        self.assertEqual(set(rows), PARAMETER_IDS)
        self.assertEqual(len({row["zhName"] for row in rows.values()}), len(PARAMETER_IDS))
        for row in rows.values():
            self.assertEqual(row["category"], "style")
            self.assertIn(row["styleGroup"], {"design-retro", "craft-print"})
            self.assertGreaterEqual(len(row["zhPrompt"]), 110, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 280, row["id"])

    def test_new_featured_prompts_are_grouped_and_copy_ready(self):
        rows = {row["id"]: row for row in self.catalog["featuredPrompts"] if row["id"] in FEATURED_IDS}
        self.assertEqual(set(rows), FEATURED_IDS)
        self.assertEqual(len({row["zhTitle"] for row in rows.values()}), len(FEATURED_IDS))
        for row in rows.values():
            self.assertNotIn("实验提示词", row["prompt"])
            self.assertGreaterEqual(len(row["prompt"]), 260, row["id"])
        image_rows = [row for row in rows.values() if row["category"] == "image-to-image"]
        text_rows = [row for row in rows.values() if row["category"] == "text-to-image"]
        self.assertEqual(len(image_rows), 5)
        self.assertEqual(len(text_rows), 2)
        self.assertTrue(all(row["group"] == "style-transfer" for row in image_rows))
        self.assertEqual({row["group"] for row in text_rows}, {"scene-map", "character-design"})

    def test_all_new_assets_are_unique_fixed_size_and_not_reused(self):
        if not ASSET_ROOT.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        parameter_rows = {row["id"]: row for row in self.catalog["parameters"] if row["id"] in PARAMETER_IDS}
        featured_rows = {row["id"]: row for row in self.catalog["featuredPrompts"] if row["id"] in FEATURED_IDS}
        new_paths = [ASSET_ROOT / row["image"].split("?", 1)[0].removeprefix("/") for row in parameter_rows.values()]
        for row in featured_rows.values():
            if row.get("image"):
                new_paths.append(ASSET_ROOT / row["image"].removeprefix("/"))
            else:
                new_paths.extend(
                    ASSET_ROOT / row[field].removeprefix("/")
                    for field in ("originalImage", "resultImage")
                )

        new_hashes = {}
        for path in new_paths:
            self.assertTrue(path.is_file(), path)
            with Image.open(path) as image:
                self.assertEqual(image.size, (960, 540), path.name)
                image.verify()
            digest = hashlib.sha256(path.read_bytes()).hexdigest()
            self.assertNotIn(digest, new_hashes, path.name)
            new_hashes[digest] = path

        historical_paths = set()
        for row in self.catalog["parameters"]:
            if row["id"] not in PARAMETER_IDS and row.get("image"):
                historical_paths.add(ASSET_ROOT / row["image"].split("?", 1)[0].removeprefix("/"))
        for row in self.catalog["featuredPrompts"]:
            if row["id"] in FEATURED_IDS:
                continue
            for field in ("image", "originalImage", "resultImage"):
                if row.get(field):
                    historical_paths.add(ASSET_ROOT / row[field].removeprefix("/"))
        historical_hashes = {
            hashlib.sha256(path.read_bytes()).hexdigest()
            for path in historical_paths
            if path.is_file()
        }
        self.assertTrue(set(new_hashes).isdisjoint(historical_hashes))

    def test_each_workflow_has_a_distinct_operational_mechanism(self):
        rows = {row["id"]: row for row in self.catalog["featuredPrompts"]}
        distinguishing_terms = {
            "img2img-tiled-detail-refinement": "重叠上下文",
            "img2img-photo-marker-environment": "单色马克笔环境",
            "img2img-ink-to-clay-transition": "低浮雕",
            "img2img-rippled-glass-portrait": "清晰光学视窗",
            "img2img-bold-contour-ink-portrait": "紧凑纯黑块",
            "text-material-explainer-illustration": "真实的先后",
            "text-three-color-corner-mascot": "三种语义色",
        }
        for source_id, term in distinguishing_terms.items():
            self.assertIn(term, rows[source_id]["prompt"], source_id)
