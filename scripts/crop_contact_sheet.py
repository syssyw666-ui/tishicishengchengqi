from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image


def main() -> None:
    parser = argparse.ArgumentParser(description="Crop an imagegen contact sheet into parameter-card assets.")
    parser.add_argument("source")
    parser.add_argument("output_dir")
    parser.add_argument("cols", type=int)
    parser.add_argument("rows", type=int)
    parser.add_argument("ids", help="Comma-separated output ids without extension.")
    args = parser.parse_args()

    source = Path(args.source)
    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    ids = [item.strip() for item in args.ids.split(",") if item.strip()]
    image = Image.open(source).convert("RGB")
    width, height = image.size
    cell_width = width // args.cols
    cell_height = height // args.rows

    for index, output_id in enumerate(ids):
        row = index // args.cols
        col = index % args.cols
        if row >= args.rows:
            raise ValueError(f"Too many ids for {args.cols}x{args.rows} grid: {output_id}")

        left = col * cell_width
        top = row * cell_height
        right = width if col == args.cols - 1 else (col + 1) * cell_width
        bottom = height if row == args.rows - 1 else (row + 1) * cell_height
        cropped = image.crop((left, top, right, bottom))
        cropped.save(output_dir / f"{output_id}.png", optimize=True)


if __name__ == "__main__":
    main()
