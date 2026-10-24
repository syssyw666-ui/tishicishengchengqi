import hashlib
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
CROPPER = ROOT / "skills/photo-pltb/scripts/crop_contact_sheet.py"


class PhotographyAssetsTests(unittest.TestCase):
    @staticmethod
    def _make_sheet(path: Path, cols: int, rows: int) -> list[tuple[int, int, int]]:
        cell_width = 91
        cell_height = 73
        divider = 5
        width = cols * cell_width + (cols - 1) * divider
        height = rows * cell_height + (rows - 1) * divider
        image = Image.new("RGB", (width, height), "white")
        draw = ImageDraw.Draw(image)
        colors = []
        for row in range(rows):
            for col in range(cols):
                index = row * cols + col
                color = ((index * 47 + 31) % 220, (index * 71 + 53) % 220, (index * 97 + 79) % 220)
                colors.append(color)
                left = col * (cell_width + divider)
                top = row * (cell_height + divider)
                draw.rectangle((left, top, left + cell_width - 1, top + cell_height - 1), fill=color)
        image.save(path)
        return colors

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

    def test_detects_actual_white_frame_when_requested_grid_changes(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            colors = self._make_sheet(directory / "sheet.png", cols=5, rows=2)
            ids = [f"cell-{index}" for index in range(10)]
            command = [
                sys.executable,
                str(CROPPER),
                "--source", str(directory / "sheet.png"),
                "--output-dir", str(directory / "result"),
                "--ids", ",".join(ids),
                "--inset", "3",
            ]
            completed = subprocess.run(command, check=True, capture_output=True, text=True)
            self.assertIn("Detected grid: 5x2", completed.stdout)
            for output_id, color in zip(ids, colors, strict=True):
                with Image.open(directory / "result" / f"{output_id}.png") as result:
                    self.assertEqual(result.getextrema(), tuple((channel, channel) for channel in color))

    def test_grid_mismatch_fails_before_writing_any_assets(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            self._make_sheet(directory / "sheet.png", cols=3, rows=2)
            output_dir = directory / "result"
            command = [
                sys.executable,
                str(CROPPER),
                "--source", str(directory / "sheet.png"),
                "--output-dir", str(output_dir),
                "--cols", "2",
                "--rows", "3",
                "--ids", ",".join(f"cell-{index}" for index in range(6)),
            ]
            completed = subprocess.run(command, capture_output=True, text=True)
            self.assertNotEqual(completed.returncode, 0)
            self.assertIn("Visible white frame is 3x2", completed.stderr)
            self.assertFalse(output_dir.exists())

    def test_missing_white_frame_never_silently_uses_equal_split(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            image = Image.new("RGB", (240, 160), (40, 70, 100))
            image.save(directory / "sheet.png")
            command = [
                sys.executable,
                str(CROPPER),
                "--source", str(directory / "sheet.png"),
                "--output-dir", str(directory / "result"),
                "--cols", "2",
                "--rows", "2",
                "--ids", "a,b,c,d",
            ]
            completed = subprocess.run(command, capture_output=True, text=True)
            self.assertNotEqual(completed.returncode, 0)
            self.assertIn("Visible white frame is 1x1", completed.stderr)
            self.assertFalse((directory / "result").exists())


if __name__ == "__main__":
    unittest.main()
