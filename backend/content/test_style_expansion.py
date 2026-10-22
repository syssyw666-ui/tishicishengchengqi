import json
from collections import Counter
from pathlib import Path

from django.test import SimpleTestCase
from PIL import Image


BACKEND_ROOT = Path(__file__).resolve().parents[1]
PROJECT_ROOT = BACKEND_ROOT.parent if BACKEND_ROOT.name == "backend" else BACKEND_ROOT
SEED_PATH = BACKEND_ROOT / "catalog_seed.json"
SNAPSHOT_PATH = BACKEND_ROOT / "content" / "data" / "style_expansion_20261021.json"
SNAPSHOT_PATH_B = BACKEND_ROOT / "content" / "data" / "style_expansion_20261021_b.json"
SNAPSHOT_PATH_C = BACKEND_ROOT / "content" / "data" / "style_expansion_20261021_c.json"
SNAPSHOT_PATH_D = BACKEND_ROOT / "content" / "data" / "style_expansion_20261021_d.json"
SNAPSHOT_PATH_E = BACKEND_ROOT / "content" / "data" / "style_expansion_20261021_e.json"
SNAPSHOT_PATH_F = BACKEND_ROOT / "content" / "data" / "style_expansion_20261021_f.json"
SNAPSHOT_PATH_G = BACKEND_ROOT / "content" / "data" / "style_expansion_20261021_g.json"
SNAPSHOT_PATH_H = BACKEND_ROOT / "content" / "data" / "style_expansion_20261021_h.json"
SNAPSHOT_PATH_I = BACKEND_ROOT / "content" / "data" / "style_expansion_20261021_i.json"
SNAPSHOT_PATH_J = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_j.json"
SNAPSHOT_PATH_K = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_k.json"
SNAPSHOT_PATH_L = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_l.json"
SNAPSHOT_PATH_M = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_m.json"


class StyleExpansionTests(SimpleTestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.seed = json.loads(SEED_PATH.read_text(encoding="utf-8"))
        cls.snapshot = json.loads(SNAPSHOT_PATH.read_text(encoding="utf-8"))
        cls.snapshot_b = json.loads(SNAPSHOT_PATH_B.read_text(encoding="utf-8"))
        cls.snapshot_c = json.loads(SNAPSHOT_PATH_C.read_text(encoding="utf-8"))
        cls.snapshot_d = json.loads(SNAPSHOT_PATH_D.read_text(encoding="utf-8"))
        cls.snapshot_e = json.loads(SNAPSHOT_PATH_E.read_text(encoding="utf-8"))
        cls.snapshot_f = json.loads(SNAPSHOT_PATH_F.read_text(encoding="utf-8"))
        cls.snapshot_g = json.loads(SNAPSHOT_PATH_G.read_text(encoding="utf-8"))
        cls.snapshot_h = json.loads(SNAPSHOT_PATH_H.read_text(encoding="utf-8"))
        cls.snapshot_i = json.loads(SNAPSHOT_PATH_I.read_text(encoding="utf-8"))
        cls.snapshot_j = json.loads(SNAPSHOT_PATH_J.read_text(encoding="utf-8"))
        cls.snapshot_k = json.loads(SNAPSHOT_PATH_K.read_text(encoding="utf-8"))
        cls.snapshot_l = json.loads(SNAPSHOT_PATH_L.read_text(encoding="utf-8"))
        cls.snapshot_m = json.loads(SNAPSHOT_PATH_M.read_text(encoding="utf-8"))
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
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot["parameters"] if "20261021-style-expansion" in row["image"]]
        hashes = set()
        for row in new_rows:
            asset = asset_root / row["image"].split("?", 1)[0].lstrip("/")
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

    def test_second_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_b["parameters"] if "20261021-style-expansion-b" in row["image"]]
        self.assertEqual(len(new_rows), 20)
        hashes = set()
        for row in new_rows:
            asset = asset_root / row["image"].split("?", 1)[0].lstrip("/")
            self.assertTrue(asset.is_file(), row["id"])
            with Image.open(asset) as image:
                self.assertEqual(image.size, (960, 540), row["id"])
            digest = __import__("hashlib").sha256(asset.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes, row["id"])
            hashes.add(digest)

    def test_second_expansion_prompts_are_specific(self):
        for row in self.snapshot_b["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 24, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 65, row["id"])

    def test_third_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_c["parameters"] if "20261021-style-expansion-c" in row["image"]]
        self.assertEqual(len(new_rows), 20)
        hashes = set()
        for row in new_rows:
            asset = asset_root / row["image"].split("?", 1)[0].lstrip("/")
            self.assertTrue(asset.is_file(), row["id"])
            with Image.open(asset) as image:
                self.assertEqual(image.size, (960, 540), row["id"])
            digest = __import__("hashlib").sha256(asset.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes, row["id"])
            hashes.add(digest)

    def test_third_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_c["parameters"]), 40)
        for row in self.snapshot_c["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 24, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 65, row["id"])

    def test_fourth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_d["parameters"] if "20261021-style-expansion-d" in row["image"]]
        self.assertEqual(len(new_rows), 22)
        hashes = set()
        for row in new_rows:
            asset = asset_root / row["image"].split("?", 1)[0].lstrip("/")
            self.assertTrue(asset.is_file(), row["id"])
            with Image.open(asset) as image:
                self.assertEqual(image.size, (960, 540), row["id"])
            digest = __import__("hashlib").sha256(asset.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes, row["id"])
            hashes.add(digest)

    def test_fourth_expansion_prompts_are_specific_and_duplicate_is_removed(self):
        self.assertEqual(len(self.snapshot_d["parameters"]), 41)
        self.assertEqual(self.snapshot_d["deleteSourceIds"], ["render-ray-traced"])
        ids = {row["id"] for row in self.parameters}
        self.assertNotIn("render-ray-traced", ids)
        self.assertIn("render-ray-traced-reflections", ids)
        for row in self.snapshot_d["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 24, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 65, row["id"])

    def test_fifth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_e["parameters"] if "20261021-style-expansion-e" in row["image"]]
        self.assertEqual(len(new_rows), 20)
        hashes = set()
        for row in new_rows:
            asset = asset_root / row["image"].split("?", 1)[0].lstrip("/")
            self.assertTrue(asset.is_file(), row["id"])
            with Image.open(asset) as image:
                self.assertEqual(image.size, (960, 540), row["id"])
            digest = __import__("hashlib").sha256(asset.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes, row["id"])
            hashes.add(digest)

    def test_fifth_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_e["parameters"]), 40)
        for row in self.snapshot_e["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 24, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 65, row["id"])

    def test_sixth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_f["parameters"] if "20261021-style-expansion-f" in row["image"]]
        self.assertEqual(len(new_rows), 20)
        hashes = set()
        for row in new_rows:
            asset = asset_root / row["image"].split("?", 1)[0].lstrip("/")
            self.assertTrue(asset.is_file(), row["id"])
            with Image.open(asset) as image:
                self.assertEqual(image.size, (960, 540), row["id"])
            digest = __import__("hashlib").sha256(asset.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes, row["id"])
            hashes.add(digest)

    def test_sixth_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_f["parameters"]), 20)
        for row in self.snapshot_f["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 24, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 65, row["id"])

    def test_seventh_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_g["parameters"] if "20261021-style-expansion-g" in row["image"]]
        self.assertEqual(len(new_rows), 20)
        hashes = set()
        for row in new_rows:
            asset = asset_root / row["image"].split("?", 1)[0].lstrip("/")
            self.assertTrue(asset.is_file(), row["id"])
            with Image.open(asset) as image:
                self.assertEqual(image.size, (960, 540), row["id"])
            digest = __import__("hashlib").sha256(asset.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes, row["id"])
            hashes.add(digest)

    def test_seventh_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_g["parameters"]), 40)
        for row in self.snapshot_g["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 45, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 100, row["id"])

    def test_eighth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_h["parameters"] if "20261021-style-expansion-h" in row["image"]]
        self.assertEqual(len(new_rows), 20)
        hashes = set()
        for row in new_rows:
            asset = asset_root / row["image"].split("?", 1)[0].lstrip("/")
            self.assertTrue(asset.is_file(), row["id"])
            with Image.open(asset) as image:
                self.assertEqual(image.size, (960, 540), row["id"])
            digest = __import__("hashlib").sha256(asset.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes, row["id"])
            hashes.add(digest)

    def test_eighth_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_h["parameters"]), 40)
        for row in self.snapshot_h["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 45, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 100, row["id"])

    def test_ninth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_i["parameters"] if "20261021-style-expansion-i" in row["image"]]
        self.assertEqual(len(new_rows), 20)
        hashes = set()
        for row in new_rows:
            asset = asset_root / row["image"].split("?", 1)[0].lstrip("/")
            self.assertTrue(asset.is_file(), row["id"])
            with Image.open(asset) as image:
                self.assertEqual(image.size, (960, 540), row["id"])
            digest = __import__("hashlib").sha256(asset.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes, row["id"])
            hashes.add(digest)

    def test_ninth_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_i["parameters"]), 20)
        for row in self.snapshot_i["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 45, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 100, row["id"])

    def test_tenth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_j["parameters"] if "20261022-style-expansion-j" in row["image"]]
        self.assertEqual(len(new_rows), 20)
        hashes = set()
        for row in new_rows:
            asset = asset_root / row["image"].split("?", 1)[0].lstrip("/")
            self.assertTrue(asset.is_file(), row["id"])
            with Image.open(asset) as image:
                self.assertEqual(image.size, (960, 540), row["id"])
            digest = __import__("hashlib").sha256(asset.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes, row["id"])
            hashes.add(digest)

    def test_tenth_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_j["parameters"]), 40)
        for row in self.snapshot_j["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 45, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 100, row["id"])

    def test_eleventh_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_k["parameters"] if "20261022-style-expansion-k" in row["image"]]
        self.assertEqual(len(new_rows), 20)
        hashes = set()
        for row in new_rows:
            asset = asset_root / row["image"].split("?", 1)[0].lstrip("/")
            self.assertTrue(asset.is_file(), row["id"])
            with Image.open(asset) as image:
                self.assertEqual(image.size, (960, 540), row["id"])
            digest = __import__("hashlib").sha256(asset.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes, row["id"])
            hashes.add(digest)

    def test_eleventh_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_k["parameters"]), 40)
        for row in self.snapshot_k["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 45, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 100, row["id"])

    def test_twelfth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_l["parameters"] if "20261022-style-expansion-l" in row["image"]]
        self.assertEqual(len(new_rows), 20)
        hashes = set()
        for row in new_rows:
            asset = asset_root / row["image"].split("?", 1)[0].lstrip("/")
            self.assertTrue(asset.is_file(), row["id"])
            with Image.open(asset) as image:
                self.assertEqual(image.size, (960, 540), row["id"])
            digest = __import__("hashlib").sha256(asset.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes, row["id"])
            hashes.add(digest)

    def test_twelfth_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_l["parameters"]), 40)
        for row in self.snapshot_l["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 45, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 100, row["id"])

    def test_thirteenth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_m["parameters"] if "20261022-style-expansion-m" in row["image"]]
        self.assertEqual(len(new_rows), 20)
        hashes = set()
        for row in new_rows:
            asset = asset_root / row["image"].split("?", 1)[0].lstrip("/")
            self.assertTrue(asset.is_file(), row["id"])
            with Image.open(asset) as image:
                self.assertEqual(image.size, (960, 540), row["id"])
            digest = __import__("hashlib").sha256(asset.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes, row["id"])
            hashes.add(digest)

    def test_thirteenth_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_m["parameters"]), 40)
        for row in self.snapshot_m["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 45, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 100, row["id"])
