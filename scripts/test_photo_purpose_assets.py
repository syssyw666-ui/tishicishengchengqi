import hashlib
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
CROPPER = ROOT / "skills/photo-pltb/scripts/crop_contact_sheet.py"


class PhotographyAssetsTests(unittest.TestCase):
    def test_catalog_assets_unique_and_complete(self):
        catalog = json.loads((ROOT / "backend/catalog_seed.json").read_text(encoding="utf-8"))["parameters"]
        manifest = json.loads((ROOT / "docs/photo-purposes-20260831.json").read_text(encoding="utf-8"))
        cells = [cell for sheet in manifest["sheets"] for cell in sheet["cells"]]
        self.assertEqual(len(cells), 24)
        hashes = set()
        for cell in cells:
            matches = [row for row in catalog if row["id"] == cell["id"]]
            self.assertEqual(len(matches), 1)
            row = matches[0]
            self.assertEqual(sum(p["zhName"] == row["zhName"] for p in catalog), 1)
            self.assertEqual(sum(p["enName"].casefold() == row["enName"].casefold() for p in catalog), 1)
            path = ROOT / "public" / row["image"].lstrip("/")
            with Image.open(path) as image:
                self.assertEqual(image.size, (960, 540))
            digest = hashlib.sha256(path.read_bytes()).hexdigest()
            self.assertNotIn(digest, hashes)
            hashes.add(digest)

    def test_measured_bounds_exclude_neighbor_and_fill_without_stretch(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            source = Image.new("RGB", (240, 170), "blue")
            source.paste("red", (25, 10, 100, 155))
            source.save(directory / "sheet.png")
            (directory / "bounds.json").write_text("[[25, 10, 100, 155]]", encoding="utf-8")
            command = [sys.executable, str(CROPPER), "--source", str(directory / "sheet.png"),
                       "--output-dir", str(directory), "--cols", "2", "--rows", "1", "--ids", "cell",
                       "--bounds-file", str(directory / "bounds.json"), "--size", "960", "540", "--inset", "12"]
            subprocess.run(command, check=True, capture_output=True)
            with Image.open(directory / "cell.png") as result:
                self.assertEqual(result.size, (960, 540))
                self.assertEqual(result.getextrema(), ((255, 255), (0, 0), (0, 0)))
            command[-1] = "0"
            result = subprocess.run(command, capture_output=True)
            self.assertNotEqual(result.returncode, 0)


if __name__ == "__main__":
    unittest.main()
