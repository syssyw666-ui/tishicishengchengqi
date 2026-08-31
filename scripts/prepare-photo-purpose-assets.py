"""Reproduce the reviewed photography-use crops from measured panel bounds."""

import argparse
import json
import shutil
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-dir", type=Path, required=True)
    parser.add_argument("--work-dir", type=Path, required=True)
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[1]
    manifest = json.loads((root / "docs/photo-purposes-20260831.json").read_text(encoding="utf-8"))
    args.work_dir.mkdir(parents=True, exist_ok=True)
    output = root / "public/assets/parameters"
    cells = []
    for sheet in manifest["sheets"]:
        source = args.source_dir / sheet["source"]
        preserved = args.work_dir / sheet["source"]
        if source.resolve() != preserved.resolve():
            shutil.copy2(source, preserved)
        bounds_file = args.work_dir / f"{source.stem}-bounds.json"
        bounds_file.write_text(json.dumps([cell["bounds"] for cell in sheet["cells"]]), encoding="utf-8")
        subprocess.run([
            sys.executable, str(root / "skills/photo-pltb/scripts/crop_contact_sheet.py"),
            "--source", str(preserved), "--output-dir", str(output),
            "--cols", "2", "--rows", "3", "--ext", ".jpg",
            "--ids", ",".join(cell["id"] for cell in sheet["cells"]),
            "--bounds-file", str(bounds_file), "--inset", str(manifest["inset"]),
            "--size", *map(str, manifest["size"]),
        ], check=True)
        cells.extend(sheet["cells"])
    audit = Image.new("RGB", (4 * 384, 6 * 246), "#202124")
    draw = ImageDraw.Draw(audit)
    font_path = Path("C:/Windows/Fonts/msyh.ttc")
    font = ImageFont.truetype(str(font_path), 17) if font_path.exists() else ImageFont.load_default()
    for index, cell in enumerate(cells):
        x, y = index % 4 * 384, index // 4 * 246
        with Image.open(output / f"{cell['id']}.jpg") as image:
            audit.paste(image.resize((384, 216)), (x, y))
        label = cell["name"] if font_path.exists() else cell["id"]
        draw.text((x + 8, y + 219), f"{index + 1:02d} {label}", font=font, fill="white")
    audit.save(args.work_dir / "audit.jpg", quality=95)
    print(f"Prepared {len(cells)} reference images; audit: {args.work_dir / 'audit.jpg'}")


if __name__ == "__main__":
    main()
