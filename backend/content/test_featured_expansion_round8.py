import json
from pathlib import Path

from django.test import SimpleTestCase


CATALOG_PATH = Path(__file__).resolve().parents[1] / "catalog_seed.json"
PARAMETER_IDS = {
    "effect-pixel-dissolve-paper",
    "style-sculptural-impasto-miniature",
    "style-rounded-modular-isometric",
    "style-kraft-stencil-print",
    "style-charcoal-fading-memory",
    "style-clean-ink-stipple-memory",
}
FEATURED_IDS = {
    "img2img-pixel-dissolve-memory",
    "img2img-sculptural-impasto-miniature",
    "img2img-rounded-isometric-blocks",
    "img2img-kraft-stencil-landmark",
    "img2img-paper-cutout-travel-people",
    "img2img-gouache-object-archive",
    "img2img-charcoal-fading-memory",
    "img2img-clean-ink-stipple-memory",
}


class FeaturedExpansionRound8Tests(SimpleTestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))

    def test_new_parameter_mechanisms_are_complete_and_distinct(self):
        rows = {row["id"]: row for row in self.catalog["parameters"] if row["id"] in PARAMETER_IDS}
        self.assertEqual(set(rows), PARAMETER_IDS)
        self.assertEqual(len({row["zhName"] for row in rows.values()}), len(PARAMETER_IDS))
        for row in rows.values():
            self.assertGreaterEqual(len(row["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1200, row["id"])

    def test_new_featured_prompts_have_valid_groups_and_assets(self):
        rows = {row["id"]: row for row in self.catalog["featuredPrompts"] if row["id"] in FEATURED_IDS}
        self.assertEqual(set(rows), FEATURED_IDS)
        self.assertEqual(len({row["zhTitle"] for row in rows.values()}), len(FEATURED_IDS))
        for row in rows.values():
            self.assertEqual(row["category"], "image-to-image")
            self.assertIn(row["group"], {"style-transfer", "poster-layout"})
            self.assertTrue(row["originalImage"].endswith("-original.jpg"), row["id"])
            self.assertTrue(row["resultImage"].endswith("-result.jpg"), row["id"])
            self.assertNotIn("实验提示词", row["prompt"])
            self.assertGreaterEqual(len(row["prompt"]), 280, row["id"])

    def test_new_featured_prompts_are_not_semantic_aliases(self):
        rows = {row["id"]: row for row in self.catalog["featuredPrompts"]}
        distinguishing_terms = {
            "img2img-pixel-dissolve-memory": "像素",
            "img2img-sculptural-impasto-miniature": "厚涂",
            "img2img-rounded-isometric-blocks": "模块",
            "img2img-kraft-stencil-landmark": "双色",
            "img2img-paper-cutout-travel-people": "纸片人物",
            "img2img-gouache-object-archive": "水粉",
            "img2img-charcoal-fading-memory": "炭笔",
            "img2img-clean-ink-stipple-memory": "点描",
        }
        for source_id, term in distinguishing_terms.items():
            self.assertIn(term, rows[source_id]["zhTitle"] + rows[source_id]["prompt"], source_id)
