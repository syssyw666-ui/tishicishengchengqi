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
SNAPSHOT_PATH_N = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_n.json"
SNAPSHOT_PATH_O = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_o.json"
SNAPSHOT_PATH_P = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_p.json"
SNAPSHOT_PATH_Q = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_q.json"
SNAPSHOT_PATH_R = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_r.json"
SNAPSHOT_PATH_S = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_s.json"
SNAPSHOT_PATH_T = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_t.json"
SNAPSHOT_PATH_U = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_u.json"
SNAPSHOT_PATH_V = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_v.json"
SNAPSHOT_PATH_W = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_w.json"
SNAPSHOT_PATH_X = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_x.json"
SNAPSHOT_PATH_Y = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_y.json"
SNAPSHOT_PATH_Z = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_z.json"
SNAPSHOT_PATH_AA = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_aa.json"
SNAPSHOT_PATH_AB = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_ab.json"
SNAPSHOT_PATH_AC = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_ac.json"
SNAPSHOT_PATH_AD = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_ad.json"
SNAPSHOT_PATH_AE = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_ae.json"
SNAPSHOT_PATH_AF = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_af.json"
SNAPSHOT_PATH_AG = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_ag.json"
SNAPSHOT_PATH_AH = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_ah.json"
SNAPSHOT_PATH_AI = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_ai.json"
SNAPSHOT_PATH_AJ = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_aj.json"
SNAPSHOT_PATH_AK = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_ak.json"
SNAPSHOT_PATH_AL = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_al.json"
SNAPSHOT_PATH_AM = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_am.json"
SNAPSHOT_PATH_AN = BACKEND_ROOT / "content" / "data" / "style_expansion_20261022_an.json"
SNAPSHOT_PATH_AO = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_ao.json"
SNAPSHOT_PATH_AP = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_ap.json"
SNAPSHOT_PATH_AQ = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_aq.json"
SNAPSHOT_PATH_AR = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_ar.json"
SNAPSHOT_PATH_AS = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_as.json"
SNAPSHOT_PATH_AT = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_at.json"
SNAPSHOT_PATH_AU = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_au.json"
SNAPSHOT_PATH_AV = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_av.json"
SNAPSHOT_PATH_AW = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_aw.json"
SNAPSHOT_PATH_AX = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_ax.json"
SNAPSHOT_PATH_AY = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_ay.json"
SNAPSHOT_PATH_AZ = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_az.json"
SNAPSHOT_PATH_BB = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_bb.json"
SNAPSHOT_PATH_BC = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_bc.json"
SNAPSHOT_PATH_BD = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_bd.json"
SNAPSHOT_PATH_BE = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_be.json"
SNAPSHOT_PATH_BF = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_bf.json"
SNAPSHOT_PATH_BG = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_bg.json"
SNAPSHOT_PATH_BH = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_bh.json"
SNAPSHOT_PATH_BI = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_bi.json"
SNAPSHOT_PATH_BJ = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_bj.json"
SNAPSHOT_PATH_BK = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_bk.json"
SNAPSHOT_PATH_BL = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_bl.json"
SNAPSHOT_PATH_BM = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_bm.json"
SNAPSHOT_PATH_BN = BACKEND_ROOT / "content" / "data" / "style_expansion_20261023_bn.json"


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
        cls.snapshot_n = json.loads(SNAPSHOT_PATH_N.read_text(encoding="utf-8"))
        cls.snapshot_o = json.loads(SNAPSHOT_PATH_O.read_text(encoding="utf-8"))
        cls.snapshot_p = json.loads(SNAPSHOT_PATH_P.read_text(encoding="utf-8"))
        cls.snapshot_q = json.loads(SNAPSHOT_PATH_Q.read_text(encoding="utf-8"))
        cls.snapshot_r = json.loads(SNAPSHOT_PATH_R.read_text(encoding="utf-8"))
        cls.snapshot_s = json.loads(SNAPSHOT_PATH_S.read_text(encoding="utf-8"))
        cls.snapshot_t = json.loads(SNAPSHOT_PATH_T.read_text(encoding="utf-8"))
        cls.snapshot_u = json.loads(SNAPSHOT_PATH_U.read_text(encoding="utf-8"))
        cls.snapshot_v = json.loads(SNAPSHOT_PATH_V.read_text(encoding="utf-8"))
        cls.snapshot_w = json.loads(SNAPSHOT_PATH_W.read_text(encoding="utf-8"))
        cls.snapshot_x = json.loads(SNAPSHOT_PATH_X.read_text(encoding="utf-8"))
        cls.snapshot_y = json.loads(SNAPSHOT_PATH_Y.read_text(encoding="utf-8"))
        cls.snapshot_z = json.loads(SNAPSHOT_PATH_Z.read_text(encoding="utf-8"))
        cls.snapshot_aa = json.loads(SNAPSHOT_PATH_AA.read_text(encoding="utf-8"))
        cls.snapshot_ab = json.loads(SNAPSHOT_PATH_AB.read_text(encoding="utf-8"))
        cls.snapshot_ac = json.loads(SNAPSHOT_PATH_AC.read_text(encoding="utf-8"))
        cls.snapshot_ad = json.loads(SNAPSHOT_PATH_AD.read_text(encoding="utf-8"))
        cls.snapshot_ae = json.loads(SNAPSHOT_PATH_AE.read_text(encoding="utf-8"))
        cls.snapshot_af = json.loads(SNAPSHOT_PATH_AF.read_text(encoding="utf-8"))
        cls.snapshot_ag = json.loads(SNAPSHOT_PATH_AG.read_text(encoding="utf-8"))
        cls.snapshot_ah = json.loads(SNAPSHOT_PATH_AH.read_text(encoding="utf-8"))
        cls.snapshot_ai = json.loads(SNAPSHOT_PATH_AI.read_text(encoding="utf-8"))
        cls.snapshot_aj = json.loads(SNAPSHOT_PATH_AJ.read_text(encoding="utf-8"))
        cls.snapshot_ak = json.loads(SNAPSHOT_PATH_AK.read_text(encoding="utf-8"))
        cls.snapshot_al = json.loads(SNAPSHOT_PATH_AL.read_text(encoding="utf-8"))
        cls.snapshot_am = json.loads(SNAPSHOT_PATH_AM.read_text(encoding="utf-8"))
        cls.snapshot_an = json.loads(SNAPSHOT_PATH_AN.read_text(encoding="utf-8"))
        cls.snapshot_ao = json.loads(SNAPSHOT_PATH_AO.read_text(encoding="utf-8"))
        cls.snapshot_ap = json.loads(SNAPSHOT_PATH_AP.read_text(encoding="utf-8"))
        cls.snapshot_aq = json.loads(SNAPSHOT_PATH_AQ.read_text(encoding="utf-8"))
        cls.snapshot_ar = json.loads(SNAPSHOT_PATH_AR.read_text(encoding="utf-8"))
        cls.snapshot_as = json.loads(SNAPSHOT_PATH_AS.read_text(encoding="utf-8"))
        cls.snapshot_at = json.loads(SNAPSHOT_PATH_AT.read_text(encoding="utf-8"))
        cls.snapshot_au = json.loads(SNAPSHOT_PATH_AU.read_text(encoding="utf-8"))
        cls.snapshot_av = json.loads(SNAPSHOT_PATH_AV.read_text(encoding="utf-8"))
        cls.snapshot_aw = json.loads(SNAPSHOT_PATH_AW.read_text(encoding="utf-8"))
        cls.snapshot_ax = json.loads(SNAPSHOT_PATH_AX.read_text(encoding="utf-8"))
        cls.snapshot_ay = json.loads(SNAPSHOT_PATH_AY.read_text(encoding="utf-8"))
        cls.snapshot_az = json.loads(SNAPSHOT_PATH_AZ.read_text(encoding="utf-8"))
        cls.snapshot_bb = json.loads(SNAPSHOT_PATH_BB.read_text(encoding="utf-8"))
        cls.snapshot_bc = json.loads(SNAPSHOT_PATH_BC.read_text(encoding="utf-8"))
        cls.snapshot_bd = json.loads(SNAPSHOT_PATH_BD.read_text(encoding="utf-8"))
        cls.snapshot_be = json.loads(SNAPSHOT_PATH_BE.read_text(encoding="utf-8"))
        cls.snapshot_bf = json.loads(SNAPSHOT_PATH_BF.read_text(encoding="utf-8"))
        cls.snapshot_bg = json.loads(SNAPSHOT_PATH_BG.read_text(encoding="utf-8"))
        cls.snapshot_bh = json.loads(SNAPSHOT_PATH_BH.read_text(encoding="utf-8"))
        cls.snapshot_bi = json.loads(SNAPSHOT_PATH_BI.read_text(encoding="utf-8"))
        cls.snapshot_bj = json.loads(SNAPSHOT_PATH_BJ.read_text(encoding="utf-8"))
        cls.snapshot_bk = json.loads(SNAPSHOT_PATH_BK.read_text(encoding="utf-8"))
        cls.snapshot_bl = json.loads(SNAPSHOT_PATH_BL.read_text(encoding="utf-8"))
        cls.snapshot_bm = json.loads(SNAPSHOT_PATH_BM.read_text(encoding="utf-8"))
        cls.snapshot_bn = json.loads(SNAPSHOT_PATH_BN.read_text(encoding="utf-8"))
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

    def test_fourteenth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_n["parameters"] if "20261022-style-expansion-n" in row["image"]]
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

    def test_fourteenth_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_n["parameters"]), 40)
        for row in self.snapshot_n["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 45, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 100, row["id"])

    def test_fifteenth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_o["parameters"] if "20261022-style-expansion-o" in row["image"]]
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

    def test_fifteenth_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_o["parameters"]), 40)
        for row in self.snapshot_o["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 45, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 100, row["id"])

    def test_sixteenth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_p["parameters"] if "20261022-style-expansion-p" in row["image"]]
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

    def test_sixteenth_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_p["parameters"]), 40)
        for row in self.snapshot_p["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 45, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 100, row["id"])

    def test_seventeenth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_q["parameters"] if "20261022-style-expansion-q" in row["image"]]
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

    def test_seventeenth_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_q["parameters"]), 40)
        for row in self.snapshot_q["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 45, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 100, row["id"])

    def test_eighteenth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_r["parameters"] if "20261022-style-expansion-r" in row["image"]]
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

    def test_eighteenth_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_r["parameters"]), 20)
        for row in self.snapshot_r["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 45, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 100, row["id"])

    def test_semantic_duplicate_print_entries_were_removed(self):
        ids = {row["id"] for row in self.parameters}
        removed = {
            "craft-woodblock-new-year-print",
            "artist-block-print-ajrak",
            "artist-mezzotint",
            "artist-risograph-two-color",
            "artist-halftone-screenprint",
            "artist-etching-aquatint",
            "artist-linocut-poster",
            "style-rough-charcoal",
        }
        retained = {
            "style-new-year-woodblock",
            "artist-ajrakh",
            "style-mezzotint-print",
            "style-risograph",
            "style-screenprint",
            "style-etching-print",
            "style-linocut",
            "style-charcoal-drawing",
        }
        self.assertTrue(removed.isdisjoint(ids))
        self.assertTrue(retained.issubset(ids))

    def test_nineteenth_expansion_assets_are_unique_widescreen_images(self):
        asset_root = PROJECT_ROOT / "public"
        if not asset_root.is_dir():
            self.skipTest("Frontend assets are not included in the standalone backend repository.")
        new_rows = [row for row in self.snapshot_s["parameters"] if "20261022-style-expansion-s" in row["image"]]
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

    def test_nineteenth_expansion_prompts_are_specific(self):
        self.assertEqual(len(self.snapshot_s["parameters"]), 40)
        for row in self.snapshot_s["parameters"]:
            self.assertGreaterEqual(len(row["zhPrompt"]), 45, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 100, row["id"])

    def test_every_parameter_uses_a_declared_category_group(self):
        groups = {
            category: {item["id"] for item in items}
            for category, items in self.seed["parameterGroups"].items()
        }
        invalid = [
            row["id"]
            for row in self.parameters
            if not row.get("styleGroup") or row.get("styleGroup") not in groups.get(row["category"], set())
        ]
        self.assertEqual(invalid, [])

    def test_only_declared_virtual_groups_may_be_empty(self):
        virtual_groups = {
            ("style", "artist-style"), ("style", "ethnic-style"), ("style", "render"),
            ("style", "color-grading"), ("style", "visual-effect"), ("style", "color-material"),
            ("scene", "era-world"), ("camera", "shot-size"), ("purpose", "layout-style"),
        }
        populated = {(row["category"], row.get("styleGroup")) for row in self.parameters}
        empty = {
            (category, group["id"])
            for category, groups in self.seed["parameterGroups"].items()
            for group in groups
            if group["id"] != "all" and (category, group["id"]) not in populated
        }
        self.assertEqual(empty, virtual_groups)

    def test_hard_natural_material_group_has_an_accurate_label(self):
        groups = {row["id"]: row["zhName"] for row in self.seed["parameterGroups"]["color-material"]}
        self.assertNotIn("base", groups)
        self.assertEqual(groups["stone"], "木石 / 陶瓷 / 珠玉")

    def test_removed_props_do_not_survive_as_orphaned_parameters(self):
        self.assertFalse(any(row["category"] == "props" or row["id"].startswith("prop-") for row in self.parameters))
        framing_rows = [row for row in self.parameters if row["category"] == "framing"]
        self.assertEqual(len(framing_rows), 6)
        self.assertTrue(all(row["styleGroup"] == "shot-size" for row in framing_rows))

    def test_twentieth_prompt_repairs_are_synced_and_clean(self):
        self.assertEqual(len(self.snapshot_t["parameters"]), 174)
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_t["parameters"]:
            current = seed_by_id[row["id"]]
            if row["category"] in {
                "style", "artist-style", "ethnic-style", "purpose", "render", "visual-effect", "camera",
                "lighting", "hair-makeup", "expression", "color-material",
            }:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertNotIn("综合色", row["zhPrompt"])

    def test_catalog_has_no_corrupted_composite_color_token(self):
        for row in self.parameters:
            self.assertNotIn("综合色", row["zhName"], row["id"])
            self.assertNotIn("综合色", row["zhPrompt"], row["id"])

    def test_twentieth_common_controls_have_actionable_prompts(self):
        optimized_ids = {
            "expression-neutral", "expression-slight-smile", "expression-bright-smile",
            "expression-serious", "expression-sad", "expression-crying", "expression-angry",
            "expression-surprised", "expression-proud", "hair-curly", "hair-bun",
            "hair-windblown", "makeup-natural", "camera-symmetrical", "purpose-id-photo",
            "purpose-poster-key-visual", "color-warm", "color-cool", "material-fabric",
            "material-ceramic",
        }
        selected = [row for row in self.parameters if row["id"] in optimized_ids]
        self.assertEqual(len(selected), len(optimized_ids))
        for row in selected:
            self.assertGreaterEqual(len(row["zhPrompt"]), 70, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 160, row["id"])

    def test_twenty_first_prompt_repairs_are_actionable(self):
        self.assertEqual(len(self.snapshot_u["parameters"]), 25)
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_u["parameters"]:
            current = seed_by_id[row["id"]]
            if row["category"] in {"style", "character", "ethnicity", "hair-makeup", "expression", "clothing", "pose", "color-material"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 70, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 160, row["id"])
            self.assertNotIn("综合色", current["zhPrompt"])

    def test_factory_generated_prompt_repairs_are_synced(self):
        self.assertEqual(len(self.snapshot_v["parameters"]), 25)
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_v["parameters"]:
            current = seed_by_id[row["id"]]
            if row["category"] in {"color-grading", "style", "render", "visual-effect"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertNotIn("综合色", current["zhName"])
            self.assertNotIn("综合色", current["zhPrompt"])

    def test_twenty_second_cross_category_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_w["parameters"]), 20)
        self.assertEqual(
            {row["category"] for row in self.snapshot_w["parameters"]},
            {"clothing", "scene", "camera"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_w["parameters"]:
            current = seed_by_id[row["id"]]
            if row["category"] in {"camera", "scene", "clothing"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 80, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 300, row["id"])
        self.assertEqual(seed_by_id["scene-desert-dunes"]["zhName"], "沙漠沙丘")

    def test_twenty_third_clothing_purpose_lighting_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_x["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_x["parameters"]},
            {"clothing", "purpose", "lighting"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_x["parameters"]:
            current = seed_by_id[row["id"]]
            if row["category"] in {"purpose", "lighting", "clothing"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 85, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 300, row["id"])

    def test_twenty_fourth_pose_scene_purpose_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_y["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_y["parameters"]},
            {"pose", "scene", "purpose"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_y["parameters"]:
            current = seed_by_id[row["id"]]
            if row["category"] in {"purpose", "scene", "pose"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 90, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 320, row["id"])

    def test_semantic_duplicate_aurora_scene_was_removed(self):
        ids = {row["id"] for row in self.parameters}
        self.assertNotIn("scene-aurora-night", ids)
        self.assertIn("scene-polar-aurora", ids)

    def test_twenty_fifth_character_camera_mood_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_z["parameters"]), 18)
        self.assertEqual(
            {row["category"] for row in self.snapshot_z["parameters"]},
            {"character", "camera", "mood"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_z["parameters"]:
            current = seed_by_id[row["id"]]
            if row["category"] in {"mood", "camera", "character", "ethnicity"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 90, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 330, row["id"])

    def test_semantic_duplicate_camera_and_papercraft_entries_were_removed(self):
        ids = {row["id"] for row in self.parameters}
        self.assertNotIn("camera-through-foreground", ids)
        self.assertIn("camera-foreground-obstruction", ids)
        self.assertNotIn("style-papercraft-diorama", ids)
        self.assertIn("render-paper-craft-3d", ids)

    def test_twenty_sixth_character_camera_mood_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_aa["parameters"]), 21)
        self.assertEqual(
            {row["category"] for row in self.snapshot_aa["parameters"]},
            {"character", "camera", "mood"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_aa["parameters"]:
            current = seed_by_id[row["id"]]
            if row["category"] in {"mood", "camera", "character", "ethnicity"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 100, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 380, row["id"])

    def test_twenty_seventh_clothing_and_scene_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_ab["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_ab["parameters"]},
            {"clothing", "scene"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_ab["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["zhName"], row["zhName"])
            self.assertEqual(current["enName"], row["enName"])
            if row["category"] in {"scene", "clothing"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 95, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 370, row["id"])

    def test_nearby_scene_concepts_have_distinct_names(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        expected = {
            "scene-modern-rooftop": "摩天楼观景露台",
            "scene-library": "现代公共图书馆",
            "scene-museum": "当代艺术画廊",
        }
        for source_id, zh_name in expected.items():
            self.assertEqual(seed_by_id[source_id]["zhName"], zh_name)

    def test_twenty_eighth_clothing_and_pose_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_ac["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_ac["parameters"]},
            {"clothing", "pose"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_ac["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
            self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 100, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 350, row["id"])

    def test_twenty_ninth_pose_and_scene_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_ad["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_ad["parameters"]},
            {"pose", "scene"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_ad["parameters"]:
            current = seed_by_id[row["id"]]
            if row["category"] in {"scene", "pose"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 100, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 370, row["id"])

    def test_generic_floating_islands_duplicate_was_removed(self):
        ids = {row["id"] for row in self.parameters}
        self.assertNotIn("scene-floating-islands", ids)
        self.assertIn("scene-floating-island-city", ids)

    def test_thirtieth_background_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_ae["parameters"]), 20)
        self.assertEqual(
            {row["category"] for row in self.snapshot_ae["parameters"]},
            {"background"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_ae["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
            self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 100, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 370, row["id"])

    def test_duplicate_parchment_and_walnut_backgrounds_were_removed(self):
        ids = {row["id"] for row in self.parameters}
        self.assertNotIn("layout-bg-parchment", ids)
        self.assertIn("bg-antique-parchment", ids)
        self.assertNotIn("layout-bg-walnut-wood", ids)
        self.assertIn("bg-dark-walnut", ids)

    def test_thirty_first_background_lighting_and_material_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_af["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_af["parameters"]},
            {"background", "lighting", "color-material"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_af["parameters"]:
            current = seed_by_id[row["id"]]
            if row["category"] in {"lighting", "background", "color-material"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 105, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 400, row["id"])

    def test_duplicate_projector_light_was_removed(self):
        ids = {row["id"] for row in self.parameters}
        self.assertNotIn("lighting-projector", ids)
        self.assertIn("lighting-projector-beam", ids)

    def test_thirty_second_material_and_purpose_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_ag["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_ag["parameters"]},
            {"color-material", "purpose"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_ag["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["zhName"], row["zhName"])
            self.assertEqual(current["enName"], row["enName"])
            if row["category"] in {"purpose", "color-material"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 110, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 410, row["id"])

    def test_duplicate_educational_infographic_was_removed(self):
        ids = {row["id"] for row in self.parameters}
        self.assertNotIn("purpose-educational-infographic", ids)
        self.assertIn("purpose-educational-diagram", ids)

    def test_rubber_materials_have_distinct_roles(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        self.assertEqual(seed_by_id["material-rubber"]["zhName"], "弹性橡胶")
        self.assertEqual(seed_by_id["material-matte-rubber"]["zhName"], "哑光软触橡胶")

    def test_thirty_third_layout_and_clothing_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_ah["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_ah["parameters"]},
            {"layout", "clothing"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_ah["parameters"]:
            current = seed_by_id[row["id"]]
            if row["category"] in {"layout", "clothing"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhName"], row["zhName"])
                self.assertEqual(current["enName"], row["enName"])
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 115, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 410, row["id"])

    def test_thirty_fourth_people_and_story_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_ai["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_ai["parameters"]},
            {"ethnicity", "expression", "hair-makeup", "story-action", "character"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_ai["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["zhName"], row["zhName"])
            self.assertEqual(current["enName"], row["enName"])
            if row["category"] in {"character", "ethnicity", "hair-makeup", "expression", "story-action"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 105, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 410, row["id"])

    def test_thirty_fifth_appearance_hair_and_story_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_aj["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_aj["parameters"]},
            {"ethnicity", "hair-makeup", "story-action"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_aj["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], row["category"])
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            if row["category"] in {"ethnicity", "hair-makeup", "story-action"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 115, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 425, row["id"])

    def test_natural_hair_textures_are_classified_under_hair_and_makeup(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        hair_texture_ids = {
            "hair-straight-natural",
            "hair-wavy-natural",
            "hair-curly-natural",
            "hair-coily-natural",
        }
        for source_id in hair_texture_ids:
            self.assertEqual(seed_by_id[source_id]["category"], "hair-makeup")
            self.assertEqual(seed_by_id[source_id]["styleGroup"], "hair-texture")

    def test_thirty_sixth_clothing_and_pose_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_ak["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_ak["parameters"]},
            {"clothing", "pose"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_ak["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["zhName"], row["zhName"])
            self.assertEqual(current["enName"], row["enName"])
            self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
            self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 115, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 405, row["id"])

    def test_bow_accessory_name_is_unambiguous(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        self.assertEqual(seed_by_id["clothing-bow"]["zhName"], "蝴蝶结配饰")
        self.assertEqual(seed_by_id["clothing-bow"]["enName"], "Bow Accessory")

    def test_thirty_seventh_camera_and_scene_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_al["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_al["parameters"]},
            {"camera", "scene"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_al["parameters"]:
            current = seed_by_id[row["id"]]
            if row["category"] == "camera":
                expected_group = "angle" if row["id"] in {
                    "camera-eye-level", "camera-shoulder-level", "camera-ground-level",
                    "camera-crane-high-angle", "camera-surveillance-high",
                } else row["styleGroup"]
                self.assertEqual(current["styleGroup"], expected_group)
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            elif row["category"] == "scene":
                self.assertEqual(current["styleGroup"], row["styleGroup"])
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["styleGroup"], row["styleGroup"])
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 120, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 440, row["id"])

    def test_thirty_eighth_camera_position_and_scene_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_am["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_am["parameters"]},
            {"camera", "scene"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_am["parameters"]:
            current = seed_by_id[row["id"]]
            if row["category"] == "camera":
                expected_group = "angle" if row["id"] in {
                    "camera-eye-level", "camera-shoulder-level", "camera-ground-level",
                    "camera-crane-high-angle", "camera-surveillance-high",
                } else row["styleGroup"]
                self.assertEqual(current["styleGroup"], expected_group)
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            elif row["category"] == "scene":
                self.assertEqual(current["styleGroup"], row["styleGroup"])
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["styleGroup"], row["styleGroup"])
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 125, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 455, row["id"])

    def test_thirty_ninth_core_visual_style_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_an["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_an["parameters"]},
            {"style", "render", "visual-effect", "color-grading"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_an["parameters"]:
            current = seed_by_id[row["id"]]
            if row["id"] in {
                "style-risograph",
                "style-screenprint",
                "style-linocut",
                "style-stained-glass",
                "style-child-crayon",
                "style-marker-rendering",
                "style-airbrush-illustration",
            }:
                self.assertEqual(current["styleGroup"], "craft-print")
            else:
                self.assertEqual(current["styleGroup"], row["styleGroup"])
            if row["category"] in {"color-grading", "style", "render", "visual-effect"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 120, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 560, row["id"])

    def test_fortieth_artist_craft_and_pattern_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_ao["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_ao["parameters"]},
            {"artist-style", "ethnic-style"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_ao["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            if row["category"] in {"artist-style", "ethnic-style"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 135, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 620, row["id"])

    def test_forty_first_classic_art_and_handcraft_prompts_are_actionable(self):
        self.assertEqual(len(self.snapshot_ap["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_ap["parameters"]},
            {"artist-style", "ethnic-style"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_ap["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            if row["category"] in {"artist-style", "ethnic-style"}:
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 135, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 600, row["id"])

    def test_forty_second_palette_prompts_define_roles_and_proportions(self):
        self.assertEqual(len(self.snapshot_aq["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_aq["parameters"]},
            {"palette"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_aq["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 135, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 570, row["id"])

    def test_forty_third_palette_prompts_preserve_context_and_material(self):
        self.assertEqual(len(self.snapshot_ar["parameters"]), 24)
        self.assertEqual(
            {row["category"] for row in self.snapshot_ar["parameters"]},
            {"palette"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_ar["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 130, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 545, row["id"])

    def test_forty_fourth_remaining_palettes_receive_group_guidance(self):
        self.assertEqual(len(self.snapshot_as["parameters"]), 30)
        self.assertEqual(
            {row["category"] for row in self.snapshot_as["parameters"]},
            {"palette"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_as["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 145, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 590, row["id"])

    def test_every_palette_has_actionable_prompt_depth(self):
        palettes = [row for row in self.parameters if row["category"] == "palette"]
        self.assertEqual(len(palettes), 78)
        for row in palettes:
            self.assertGreaterEqual(len(row["zhPrompt"]), 120, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 450, row["id"])

    def test_forty_fifth_era_prompts_enforce_world_consistency(self):
        self.assertEqual(len(self.snapshot_at["parameters"]), 33)
        self.assertEqual(
            {row["styleGroup"] for row in self.snapshot_at["parameters"]},
            {
                "ancient",
                "modern",
                "future",
                "ancient-china",
                "world-history",
                "apocalypse",
                "eastern-fantasy",
            },
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_at["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], "era")
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 140, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 500, row["id"])

    def test_every_era_prompt_has_actionable_worldbuilding_depth(self):
        eras = [row for row in self.parameters if row["category"] == "era"]
        self.assertEqual(len(eras), 33)
        for row in eras:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 120, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 450, row["id"])

    def test_forty_sixth_framing_prompts_define_crop_and_scale(self):
        self.assertEqual(len(self.snapshot_au["parameters"]), 6)
        self.assertEqual(
            {row["styleGroup"] for row in self.snapshot_au["parameters"]},
            {"shot-size"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_au["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], "framing")
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 250, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 1050, row["id"])

    def test_every_framing_prompt_has_actionable_crop_guidance(self):
        framing = [row for row in self.parameters if row["category"] == "framing"]
        self.assertEqual(len(framing), 6)
        for row in framing:
            self.assertEqual(row.get("styleGroup"), "shot-size", row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 240, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1000, row["id"])

    def test_forty_seventh_layout_style_prompts_define_real_systems(self):
        self.assertEqual(len(self.snapshot_av["parameters"]), 29)
        self.assertEqual(
            {row["styleGroup"] for row in self.snapshot_av["parameters"]},
            {
                "minimal",
                "grid",
                "editorial",
                "commercial",
                "digital",
                "experimental",
                "cultural",
                "print",
                "youth",
                "soft-ui",
                "catalog",
            },
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_av["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], "layout-style")
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 300, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 1200, row["id"])

    def test_every_layout_style_has_actionable_hierarchy_and_output_rules(self):
        layouts = [row for row in self.parameters if row["category"] == "layout-style"]
        self.assertEqual(len(layouts), 29)
        for row in layouts:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 290, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1150, row["id"])

    def test_forty_eighth_mood_prompts_use_observable_emotional_evidence(self):
        self.assertEqual(len(self.snapshot_aw["parameters"]), 32)
        self.assertEqual(
            {row["styleGroup"] for row in self.snapshot_aw["parameters"]},
            {"positive", "quiet", "dark", "dramatic", "romantic", "lonely", "surreal", "luxury"},
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_aw["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], "mood")
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 1200, row["id"])

    def test_every_mood_prompt_has_event_and_atmosphere_depth(self):
        moods = [row for row in self.parameters if row["category"] == "mood"]
        self.assertEqual(len(moods), 32)
        for row in moods:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 320, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1150, row["id"])

    def test_forty_ninth_color_grading_prompts_define_real_workflows(self):
        self.assertEqual(len(self.snapshot_ax["parameters"]), 102)
        self.assertEqual(
            {row["styleGroup"] for row in self.snapshot_ax["parameters"]},
            {
                "camera-look",
                "clean-bright",
                "film-vintage",
                "drone-aerial",
                "cinematic",
                "mood",
                "commercial",
                "skin-detail",
                "portrait-retouch",
            },
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_ax["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], "color-grading")
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 350, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 1280, row["id"])

    def test_every_color_grading_prompt_has_pipeline_or_retouch_depth(self):
        grading = [row for row in self.parameters if row["category"] == "color-grading"]
        self.assertEqual(len(grading), 102)
        for row in grading:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 340, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1250, row["id"])

    def test_fiftieth_visual_style_prompts_define_real_media(self):
        self.assertEqual(len(self.snapshot_ay["parameters"]), 217)
        self.assertEqual(
            Counter(row["styleGroup"] for row in self.snapshot_ay["parameters"]),
            Counter({"photo-film-3d": 47, "anime": 23, "design-retro": 31, "craft-print": 102, "eastern": 14}),
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_ay["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], "style")
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])
            self.assertGreaterEqual(len(current["zhPrompt"]), 400, row["id"])
            self.assertGreaterEqual(len(current["enPrompt"]), 1400, row["id"])

    def test_every_visual_style_has_actionable_medium_and_failure_rules(self):
        styles = [row for row in self.parameters if row["category"] == "style"]
        self.assertEqual(len(styles), 217)
        for row in styles:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 390, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1380, row["id"])

    def test_print_and_drawing_media_are_not_misclassified_as_design_trends(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        corrected_ids = {
            "style-risograph",
            "style-screenprint",
            "style-linocut",
            "style-stained-glass",
            "style-child-crayon",
            "style-marker-rendering",
            "style-airbrush-illustration",
        }
        for source_id in corrected_ids:
            self.assertEqual(seed_by_id[source_id]["styleGroup"], "craft-print")

    def test_fifty_first_artist_style_prompts_define_visual_mechanisms(self):
        self.assertEqual(len(self.snapshot_az["parameters"]), 339)
        artist_rows = [row for row in self.snapshot_az["parameters"] if row["category"] == "artist-style"]
        self.assertEqual(len(artist_rows), 337)
        self.assertEqual(
            {row["styleGroup"] for row in artist_rows},
            {
                "renaissance-baroque",
                "impression-post",
                "decorative-illustration",
                "modern-avantgarde",
                "surreal-symbolic",
                "east-asian",
                "american-pop",
                "international-illustration",
                "editorial-graphic",
                "childrens-picturebook",
                "folk-global",
                "poster-print",
                "comic-sequential",
            },
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_az["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], row["category"])
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            if row["category"] == "ethnic-style":
                self.assertTrue(current["zhPrompt"].startswith(row["zhPrompt"]), row["id"])
                self.assertTrue(current["enPrompt"].startswith(row["enPrompt"]), row["id"])
            else:
                self.assertEqual(current["zhPrompt"], row["zhPrompt"])
                self.assertEqual(current["enPrompt"], row["enPrompt"])

    def test_every_artist_style_has_actionable_form_and_context_rules(self):
        artists = [row for row in self.parameters if row["category"] == "artist-style"]
        self.assertEqual(len(artists), 337)
        for row in artists:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 360, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1300, row["id"])

    def test_ceramic_glazes_are_classified_as_heritage_craft(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        for source_id in {"artist-jian-tenmoku", "artist-jun-ware"}:
            self.assertEqual(seed_by_id[source_id]["category"], "ethnic-style")
            self.assertEqual(seed_by_id[source_id]["styleGroup"], "traditional-craft")
            self.assertGreaterEqual(len(seed_by_id[source_id]["zhPrompt"]), 200)
            self.assertGreaterEqual(len(seed_by_id[source_id]["enPrompt"]), 780)

    def test_fifty_second_ethnic_style_prompts_define_context_and_craft(self):
        self.assertEqual(len(self.snapshot_bb["parameters"]), 106)
        self.assertEqual(
            Counter(row["styleGroup"] for row in self.snapshot_bb["parameters"]),
            Counter(
                {
                    "traditional-craft": 32,
                    "major": 2,
                    "south": 10,
                    "southwest": 21,
                    "northwest": 14,
                    "northeast": 7,
                    "island": 2,
                    "pattern-craft": 18,
                }
            ),
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_bb["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], "ethnic-style")
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])

    def test_every_ethnic_style_has_actionable_context_and_material_rules(self):
        ethnic_rows = [row for row in self.parameters if row["category"] == "ethnic-style"]
        self.assertEqual(len(ethnic_rows), 106)
        for row in ethnic_rows:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1200, row["id"])

    def test_similar_heritage_entries_keep_distinct_responsibilities(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        pairs = (
            ("craft-cloisonne-enamel", "craft-jingtai-blue"),
            ("ethnic-tibetan", "craft-thangka-mineral-pigment"),
        )
        for general_id, specific_id in pairs:
            general = seed_by_id[general_id]
            specific = seed_by_id[specific_id]
            self.assertNotEqual(general["zhPrompt"], specific["zhPrompt"])
            self.assertNotEqual(general["enPrompt"], specific["enPrompt"])
        self.assertIn("不默认深蓝宫廷体系", seed_by_id["craft-cloisonne-enamel"]["zhPrompt"])
        self.assertIn("深宝蓝底", seed_by_id["craft-jingtai-blue"]["zhPrompt"])
        self.assertIn("材料和绘制纪律", seed_by_id["craft-thangka-mineral-pigment"]["zhPrompt"])

    def test_fifty_third_purpose_prompts_define_real_deliverables(self):
        self.assertEqual(len(self.snapshot_bc["parameters"]), 87)
        self.assertEqual(
            Counter(row["styleGroup"] for row in self.snapshot_bc["parameters"]),
            Counter({"photography": 26, "cover": 15, "commercial": 15, "design": 24, "social": 7}),
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_bc["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], "purpose")
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])

    def test_every_purpose_has_actionable_delivery_and_safety_rules(self):
        purpose_rows = [row for row in self.parameters if row["category"] == "purpose"]
        self.assertEqual(len(purpose_rows), 87)
        for row in purpose_rows:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1200, row["id"])

    def test_nearby_purpose_entries_keep_separate_output_roles(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        expected_groups = {
            "purpose-packaging": "commercial",
            "purpose-packaging-render": "commercial",
            "purpose-social-thumbnail": "social",
            "purpose-video-thumbnail": "cover",
            "purpose-realistic-photo": "photography",
            "purpose-event-documentation": "photography",
        }
        for source_id, group in expected_groups.items():
            self.assertEqual(seed_by_id[source_id]["styleGroup"], group)
        for first, second in (
            ("purpose-packaging", "purpose-packaging-render"),
            ("purpose-social-thumbnail", "purpose-video-thumbnail"),
            ("purpose-realistic-photo", "purpose-event-documentation"),
        ):
            self.assertNotEqual(seed_by_id[first]["zhPrompt"], seed_by_id[second]["zhPrompt"])

    def test_fifty_fourth_render_and_effect_prompts_define_real_mechanisms(self):
        self.assertEqual(len(self.snapshot_bd["parameters"]), 59)
        self.assertEqual(
            Counter((row["category"], row["styleGroup"]) for row in self.snapshot_bd["parameters"]),
            Counter(
                {
                    ("render", "realism"): 10,
                    ("render", "technical"): 11,
                    ("render", "stylized"): 11,
                    ("visual-effect", "dynamic"): 3,
                    ("visual-effect", "light-particle"): 8,
                    ("visual-effect", "surreal"): 6,
                    ("visual-effect", "digital"): 2,
                    ("visual-effect", "atmosphere"): 2,
                    ("visual-effect", "elemental"): 6,
                }
            ),
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_bd["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], row["category"])
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])

    def test_every_render_and_effect_has_actionable_physical_rules(self):
        rows = [row for row in self.parameters if row["category"] in {"render", "visual-effect"}]
        self.assertEqual(len(rows), 59)
        for row in rows:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1200, row["id"])

    def test_nearby_motion_and_light_effects_remain_distinct(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        for first, second in (
            ("effect-motion-afterimage", "effect-speed-ramp"),
            ("effect-speed-ramp", "effect-motion-blur"),
            ("effect-light-painting", "effect-light-streaks"),
            ("effect-light-streaks", "effect-particle-trails"),
        ):
            self.assertNotEqual(seed_by_id[first]["zhPrompt"], seed_by_id[second]["zhPrompt"])
        self.assertIn("离散姿态", seed_by_id["effect-motion-afterimage"]["zhPrompt"])
        self.assertIn("快门时间", seed_by_id["effect-motion-blur"]["zhPrompt"])
        self.assertIn("可见光源", seed_by_id["effect-light-painting"]["zhPrompt"])
        self.assertIn("离散粒子", seed_by_id["effect-particle-trails"]["zhPrompt"])

    def test_fifty_fifth_camera_prompts_separate_optics_position_and_composition(self):
        self.assertEqual(len(self.snapshot_be["parameters"]), 90)
        self.assertEqual(
            Counter(row["styleGroup"] for row in self.snapshot_be["parameters"]),
            Counter(
                {
                    "focal-length": 7,
                    "lens-effect": 7,
                    "angle": 15,
                    "composition": 7,
                    "motion": 6,
                    "composition-rule": 5,
                    "visual-guide": 4,
                    "depth": 4,
                    "camera-angle": 3,
                    "person-position": 16,
                    "group-relationship": 16,
                }
            ),
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_be["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], "camera")
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])

    def test_every_camera_prompt_has_actionable_optical_and_spatial_rules(self):
        rows = [row for row in self.parameters if row["category"] == "camera"]
        self.assertEqual(len(rows), 90)
        for row in rows:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1200, row["id"])

    def test_camera_height_and_subject_view_groups_are_cleanly_separated(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        for source_id in {
            "camera-eye-level",
            "camera-shoulder-level",
            "camera-ground-level",
            "camera-crane-high-angle",
            "camera-surveillance-high",
        }:
            self.assertEqual(seed_by_id[source_id]["styleGroup"], "angle")
        for source_id in {"camera-frontal-view", "camera-three-quarter-view", "camera-profile-view"}:
            self.assertEqual(seed_by_id[source_id]["styleGroup"], "camera-angle")
        labels = {row["id"]: row["zhName"] for row in self.seed["parameterGroups"]["camera"]}
        self.assertEqual(labels["angle"], "机位高度 / 视角")
        self.assertEqual(labels["camera-angle"], "主体观察角度")

    def test_fifty_sixth_lighting_prompts_define_sources_and_material_response(self):
        self.assertEqual(len(self.snapshot_bf["parameters"]), 36)
        self.assertEqual(
            Counter(row["styleGroup"] for row in self.snapshot_bf["parameters"]),
            Counter({"dramatic": 15, "natural": 8, "interior": 10, "sci-fi": 3}),
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_bf["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], "lighting")
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])

    def test_every_lighting_prompt_has_actionable_source_and_occlusion_rules(self):
        rows = [row for row in self.parameters if row["category"] == "lighting"]
        self.assertEqual(len(rows), 36)
        for row in rows:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1200, row["id"])

    def test_nearby_lighting_entries_keep_distinct_physical_roles(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        for first, second in (
            ("lighting-volumetric", "lighting-fog"),
            ("lighting-fluorescent-tube", "light-fluorescent-office"),
            ("lighting-laser-beams", "light-laser-scan"),
        ):
            self.assertNotEqual(seed_by_id[first]["zhPrompt"], seed_by_id[second]["zhPrompt"])
        self.assertIn("可见方向", seed_by_id["lighting-volumetric"]["zhPrompt"])
        self.assertIn("介质密度", seed_by_id["lighting-fog"]["zhPrompt"])
        self.assertIn("单支荧光灯", seed_by_id["lighting-fluorescent-tube"]["zhPrompt"])
        self.assertIn("成排顶灯", seed_by_id["light-fluorescent-office"]["zhPrompt"])
        self.assertIn("扫过位置", seed_by_id["light-laser-scan"]["zhPrompt"])

    def test_fifty_seventh_scene_prompts_define_inhabitable_environments(self):
        self.assertEqual(len(self.snapshot_bg["parameters"]), 84)
        self.assertEqual(
            Counter(row["styleGroup"] for row in self.snapshot_bg["parameters"]),
            Counter(
                {
                    "nature": 19,
                    "city": 11,
                    "interior": 16,
                    "culture": 5,
                    "ruins": 5,
                    "sci-fi": 5,
                    "fantasy": 7,
                    "weather": 16,
                }
            ),
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_bg["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], "scene")
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhName"], row["zhName"])
            self.assertEqual(current["enName"], row["enName"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])

    def test_every_scene_prompt_has_actionable_spatial_and_environmental_rules(self):
        rows = [row for row in self.parameters if row["category"] == "scene"]
        self.assertEqual(len(rows), 84)
        for row in rows:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1200, row["id"])

    def test_scene_misclassifications_and_ambiguous_names_are_corrected(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        self.assertEqual(seed_by_id["scene-space-station"]["styleGroup"], "sci-fi")
        for source_id in {"scene-underwater-ruins", "scene-apocalyptic-ruins"}:
            self.assertEqual(seed_by_id[source_id]["styleGroup"], "ruins")
        self.assertEqual(seed_by_id["scene-snowy-pine-forest"]["zhName"], "积雪针叶林")
        self.assertEqual(seed_by_id["scene-overcast-rooftops"]["zhName"], "阴天屋顶群")

    def test_nearby_scene_spaces_keep_distinct_functions(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        for group in (
            ("scene-modern-rooftop", "scene-rooftop-terrace", "scene-rooftop"),
            ("scene-library", "scene-grand-library", "scene-library-archive"),
            ("scene-night-market-alley", "scene-night-market"),
            ("scene-museum", "scene-museum-gallery"),
        ):
            prompts = {seed_by_id[source_id]["zhPrompt"] for source_id in group}
            self.assertEqual(len(prompts), len(group))

    def test_fifty_eighth_background_prompts_define_real_surfaces(self):
        self.assertEqual(len(self.snapshot_bh["parameters"]), 59)
        self.assertEqual(
            Counter(row["styleGroup"] for row in self.snapshot_bh["parameters"]),
            Counter({"color": 4, "fabric": 9, "paper": 10, "studio": 7, "material": 18, "special": 8, "nature": 3}),
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_bh["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], "background")
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhName"], row["zhName"])
            self.assertEqual(current["enName"], row["enName"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])

    def test_every_background_prompt_has_actionable_surface_and_scale_rules(self):
        rows = [row for row in self.parameters if row["category"] == "background"]
        self.assertEqual(len(rows), 59)
        for row in rows:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1200, row["id"])

    def test_holographic_digital_and_physical_backgrounds_are_distinct(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        digital = seed_by_id["layout-bg-holographic"]
        foil = seed_by_id["bg-holographic-foil"]
        self.assertEqual(digital["zhName"], "数码镭射渐变背景")
        self.assertEqual(digital["enName"], "Digital Holographic Gradient")
        self.assertNotEqual(digital["zhPrompt"], foil["zhPrompt"])
        self.assertIn("不出现真实褶皱", digital["zhPrompt"])
        self.assertIn("厚度、折痕", foil["zhPrompt"])

    def test_nearby_background_surfaces_keep_distinct_construction(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        for group in (
            ("layout-bg-xuan-paper", "bg-wrinkled-rice-paper"),
            ("bg-matte-warm-white", "layout-bg-warm-ivory-studio", "bg-warm-ivory-plaster"),
            ("bg-frosted-glass", "bg-ribbed-glass", "bg-rain-window-glass"),
        ):
            prompts = {seed_by_id[source_id]["zhPrompt"] for source_id in group}
            self.assertEqual(len(prompts), len(group))

    def test_fifty_ninth_character_and_ethnicity_prompts_preserve_individuality(self):
        self.assertEqual(len(self.snapshot_bi["parameters"]), 80)
        self.assertEqual(
            Counter((row["category"], row["styleGroup"]) for row in self.snapshot_bi["parameters"]),
            Counter(
                {
                    ("character", "profession"): 17,
                    ("character", "age-stage"): 5,
                    ("character", "body-type"): 3,
                    ("character", "social-role"): 13,
                    ("character", "fantasy"): 2,
                    ("character", "sci-fi"): 3,
                    ("ethnicity", "region"): 19,
                    ("ethnicity", "mixed"): 2,
                    ("ethnicity", "skin-tone"): 9,
                    ("ethnicity", "facial-feature"): 7,
                }
            ),
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_bi["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], row["category"])
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhName"], row["zhName"])
            self.assertEqual(current["enName"], row["enName"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])

    def test_every_character_and_ethnicity_prompt_has_actionable_respectful_rules(self):
        rows = [row for row in self.parameters if row["category"] in {"character", "ethnicity"}]
        self.assertEqual(len(rows), 80)
        for row in rows:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1200, row["id"])

    def test_character_group_labels_and_body_name_are_unambiguous(self):
        groups = {row["id"]: row["zhName"] for row in self.seed["parameterGroups"]["character"]}
        self.assertEqual(groups["social-role"], "社会角色 / 人物关系")
        seed_by_id = {row["id"]: row for row in self.parameters}
        self.assertEqual(seed_by_id["character-elegant-slender"]["zhName"], "修长体态")
        self.assertEqual(seed_by_id["character-elegant-slender"]["enName"], "Slender Proportions")

    def test_profession_body_and_ethnicity_controls_do_not_substitute_for_each_other(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        self.assertEqual(seed_by_id["character-athlete"]["styleGroup"], "profession")
        self.assertEqual(seed_by_id["character-athletic"]["styleGroup"], "body-type")
        self.assertNotEqual(seed_by_id["character-athlete"]["zhPrompt"], seed_by_id["character-athletic"]["zhPrompt"])
        for source_id in {"ethnicity-japanese", "ethnicity-korean", "ethnicity-han-chinese"}:
            prompt = seed_by_id[source_id]["zhPrompt"]
            self.assertIn("不以刻板脸型区分", prompt)
            self.assertIn("不得从外貌自动推断", prompt)

    def test_sixtieth_hair_makeup_and_expression_prompts_are_fully_synchronized(self):
        self.assertEqual(len(self.snapshot_bj["parameters"]), 52)
        self.assertEqual(
            Counter((row["category"], row["styleGroup"]) for row in self.snapshot_bj["parameters"]),
            Counter(
                {
                    ("hair-makeup", "hair-length"): 2,
                    ("hair-makeup", "hair-texture"): 4,
                    ("hair-makeup", "hair-shape"): 6,
                    ("hair-makeup", "hair-styling"): 8,
                    ("hair-makeup", "makeup-natural"): 3,
                    ("hair-makeup", "makeup-stylized"): 7,
                    ("expression", "calm"): 4,
                    ("expression", "positive"): 4,
                    ("expression", "negative"): 2,
                    ("expression", "dramatic"): 6,
                    ("expression", "personality"): 6,
                }
            ),
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_bj["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], row["category"])
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])

    def test_every_hair_makeup_and_expression_prompt_has_actionable_anatomical_rules(self):
        rows = [row for row in self.parameters if row["category"] in {"hair-makeup", "expression"}]
        self.assertEqual(len(rows), 52)
        for row in rows:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1200, row["id"])

    def test_hair_color_and_texture_controls_have_clear_group_boundaries(self):
        groups = {row["id"]: row["zhName"] for row in self.seed["parameterGroups"]["hair-makeup"]}
        self.assertEqual(groups["hair-styling"], "造型 / 发色")
        seed_by_id = {row["id"]: row for row in self.parameters}
        self.assertEqual(seed_by_id["hair-silver-gray"]["styleGroup"], "hair-styling")
        self.assertEqual(seed_by_id["hair-curly"]["styleGroup"], "hair-shape")
        self.assertEqual(seed_by_id["hair-curly-natural"]["styleGroup"], "hair-texture")
        self.assertNotEqual(seed_by_id["hair-curly"]["zhPrompt"], seed_by_id["hair-curly-natural"]["zhPrompt"])

    def test_nearby_makeup_and_expression_controls_remain_distinct(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        for group in (
            ("makeup-natural", "makeup-soft-matte", "makeup-dewy-skin"),
            ("expression-slight-smile", "expression-bright-smile", "expression-laughing"),
            ("expression-contained-anger", "expression-angry"),
            ("expression-sad", "expression-crying", "expression-teary-smile"),
        ):
            prompts = {seed_by_id[source_id]["zhPrompt"] for source_id in group}
            self.assertEqual(len(prompts), len(group))

    def test_sixty_first_layout_and_story_prompts_are_fully_synchronized(self):
        self.assertEqual(len(self.snapshot_bk["parameters"]), 65)
        self.assertEqual(
            Counter((row["category"], row["styleGroup"]) for row in self.snapshot_bk["parameters"]),
            Counter(
                {
                    ("layout", "subject-position"): 7,
                    ("layout", "negative-space"): 7,
                    ("layout", "safe-area"): 5,
                    ("layout", "split"): 5,
                    ("layout", "commercial"): 4,
                    ("layout", "info"): 3,
                    ("layout", "platform"): 4,
                    ("story-action", "daily"): 8,
                    ("story-action", "creation"): 3,
                    ("story-action", "work"): 7,
                    ("story-action", "adventure"): 3,
                    ("story-action", "relationship"): 5,
                    ("story-action", "dramatic"): 3,
                    ("story-action", "commercial"): 1,
                }
            ),
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_bk["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], row["category"])
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhName"], row["zhName"])
            self.assertEqual(current["enName"], row["enName"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])

    def test_every_layout_and_story_prompt_has_actionable_spatial_rules(self):
        rows = [row for row in self.parameters if row["category"] in {"layout", "story-action"}]
        self.assertEqual(len(rows), 65)
        for row in rows:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1200, row["id"])

    def test_similar_layout_controls_have_unambiguous_names_and_functions(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        expected_names = {
            "layout-split-panel": "图文左右分栏",
            "layout-circular-focal-window": "圆形蒙版窗口",
            "layout-circular-focus": "环形视觉动线",
            "layout-frame-within-frame": "内框安全区",
        }
        for source_id, zh_name in expected_names.items():
            self.assertEqual(seed_by_id[source_id]["zhName"], zh_name)
        for group in (
            ("layout-split-panel", "layout-vertical-split"),
            ("layout-circular-focal-window", "layout-circular-focus"),
        ):
            prompts = {seed_by_id[source_id]["zhPrompt"] for source_id in group}
            self.assertEqual(len(prompts), len(group))

    def test_story_actions_preserve_goal_contact_and_sequence(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        for source_id in {
            "story-assembling",
            "story-cooking",
            "story-equipment-calibration",
            "story-rescue",
            "story-presenting-product",
        }:
            prompt = seed_by_id[source_id]["zhPrompt"]
            self.assertIn("身体重心", prompt)
            self.assertIn("动作前后的物理状态连续", prompt)

    def test_sixty_second_clothing_and_pose_prompts_are_fully_synchronized(self):
        self.assertEqual(len(self.snapshot_bl["parameters"]), 139)
        self.assertEqual(
            Counter((row["category"], row["styleGroup"]) for row in self.snapshot_bl["parameters"]),
            Counter(
                {
                    ("clothing", "tops-sleeves"): 14,
                    ("clothing", "outerwear"): 10,
                    ("clothing", "pants"): 9,
                    ("clothing", "skirts-dresses"): 10,
                    ("clothing", "formal-uniform"): 9,
                    ("clothing", "traditional"): 9,
                    ("clothing", "fantasy-sci-fi"): 7,
                    ("clothing", "accessories-shoes"): 9,
                    ("clothing", "fit-material"): 8,
                    ("pose", "standing"): 8,
                    ("pose", "sitting"): 6,
                    ("pose", "lying"): 5,
                    ("pose", "motion"): 8,
                    ("pose", "dance"): 6,
                    ("pose", "action"): 8,
                    ("pose", "interaction"): 6,
                    ("pose", "emotion"): 5,
                    ("pose", "camera-ready"): 2,
                }
            ),
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_bl["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], row["category"])
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])

    def test_every_clothing_and_pose_prompt_has_actionable_construction_rules(self):
        rows = [row for row in self.parameters if row["category"] in {"clothing", "pose"}]
        self.assertEqual(len(rows), 139)
        for row in rows:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1200, row["id"])

    def test_pose_group_labels_cover_kneeling_and_gestures_accurately(self):
        groups = {row["id"]: row["zhName"] for row in self.seed["parameterGroups"]["pose"]}
        self.assertEqual(groups["sitting"], "坐姿 / 跪姿")
        self.assertEqual(groups["emotion"], "手势 / 情绪动作")
        seed_by_id = {row["id"]: row for row in self.parameters}
        self.assertEqual(seed_by_id["pose-kneeling"]["styleGroup"], "sitting")
        for source_id in {"pose-waving", "pose-pointing", "pose-holding-object"}:
            self.assertEqual(seed_by_id[source_id]["styleGroup"], "emotion")

    def test_clothing_and_pose_near_neighbors_keep_distinct_mechanics(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        for group in (
            ("clothing-sleeveless-top", "clothing-tank-top", "clothing-camisole"),
            ("clothing-cape", "clothing-cloak"),
            ("pose-sitting-chair", "pose-floor-sitting", "pose-kneeling"),
            ("pose-reaching", "pose-reaching-overhead"),
            ("pose-neutral-standing", "pose-id-photo-straight"),
        ):
            prompts = {seed_by_id[source_id]["zhPrompt"] for source_id in group}
            self.assertEqual(len(prompts), len(group))

    def test_sixty_third_color_material_prompts_are_fully_synchronized(self):
        self.assertEqual(len(self.snapshot_bm["parameters"]), 30)
        self.assertEqual(
            Counter(row["styleGroup"] for row in self.snapshot_bm["parameters"]),
            Counter({"palette": 9, "fabric": 3, "stone": 5, "industrial": 6, "translucent": 7}),
        )
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_bm["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], "color-material")
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhPrompt"], row["zhPrompt"])
            self.assertEqual(current["enPrompt"], row["enPrompt"])

    def test_every_color_material_prompt_has_actionable_physical_rules(self):
        rows = [row for row in self.parameters if row["category"] == "color-material"]
        self.assertEqual(len(rows), 30)
        for row in rows:
            self.assertTrue(row.get("styleGroup"), row["id"])
            self.assertGreaterEqual(len(row["zhPrompt"]), 330, row["id"])
            self.assertGreaterEqual(len(row["enPrompt"]), 1200, row["id"])

    def test_basic_color_controls_are_named_as_relationships_not_full_palettes(self):
        groups = {row["id"]: row["zhName"] for row in self.seed["parameterGroups"]["color-material"]}
        self.assertEqual(groups["palette"], "基础色彩关系")
        seed_by_id = {row["id"]: row for row in self.parameters}
        for source_id in {"color-warm", "color-cool", "color-duotone", "color-complementary", "color-analogous"}:
            self.assertEqual(seed_by_id[source_id]["styleGroup"], "palette")

    def test_nearby_material_controls_keep_distinct_optical_roles(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        for group in (
            ("material-metal", "material-brushed-metal"),
            ("material-glass", "material-frosted-glass", "material-acrylic", "material-translucent-resin"),
            ("material-matte-rubber", "material-rubber"),
            ("material-iridescent", "material-holographic-foil"),
        ):
            prompts = {seed_by_id[source_id]["zhPrompt"] for source_id in group}
            self.assertEqual(len(prompts), len(group))

    def test_sixty_fourth_nearby_entries_have_clear_user_facing_names(self):
        self.assertEqual(len(self.snapshot_bn["parameters"]), 6)
        seed_by_id = {row["id"]: row for row in self.parameters}
        for row in self.snapshot_bn["parameters"]:
            current = seed_by_id[row["id"]]
            self.assertEqual(current["category"], row["category"])
            self.assertEqual(current["styleGroup"], row["styleGroup"])
            self.assertEqual(current["zhName"], row["zhName"])
            self.assertEqual(current["enName"], row["enName"])

    def test_full_visual_entries_are_distinct_from_pattern_or_local_retouch_entries(self):
        seed_by_id = {row["id"]: row for row in self.parameters}
        pairs = (
            ("ethnic-sui", "ethnic-pattern-shui-horsetail-script"),
            ("ethnic-uyghur", "ethnic-pattern-uyghur-atlas-pomegranate"),
            ("ethnic-bai", "ethnic-pattern-bai-tie-dye-flower"),
            ("ethnic-hani", "ethnic-pattern-hani-terrace-line"),
            ("grading-beauty-retouch", "retouch-makeup-cleanup"),
        )
        for broad_id, detail_id in pairs:
            self.assertNotEqual(seed_by_id[broad_id]["zhName"], seed_by_id[detail_id]["zhName"])
            self.assertNotEqual(seed_by_id[broad_id]["styleGroup"], seed_by_id[detail_id]["styleGroup"])
