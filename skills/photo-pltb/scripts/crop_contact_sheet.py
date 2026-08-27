from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image


def parse_ids(value: str) -> list[str]:
    return [item.strip() for item in value.split(",") if item.strip()]


def main() -> None:
    parser = argparse.ArgumentParser(description="Crop a reference contact sheet into individual parameter assets.")
    parser.add_argument("--source", required=True, help="Contact sheet image path.")
    parser.add_argument("--output-dir", required=True, help="Directory for cropped assets.")
    parser.add_argument("--cols", required=True, type=int, help="Actual number of columns in the sheet.")
    parser.add_argument("--rows", required=True, type=int, help="Actual number of rows in the sheet.")
    parser.add_argument("--ids", required=True, help="Comma-separated output IDs without extension.")
    parser.add_argument("--ext", default=".png", help="Output extension, default .png.")
    parser.add_argument(
        "--inset",
        default=12,
        type=int,
        help="Safety pixels trimmed from every cell edge. Defaults to 12 to prevent neighboring-panel bleed.",
    )
    args = parser.parse_args()

    source = Path(args.source)
    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    ids = parse_ids(args.ids)
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

        inset = max(args.inset, 0)
        if inset == 0:
            raise ValueError("Zero inset is unsafe for generated contact sheets. Use a positive --inset value.")
        if right - left > inset * 2 and bottom - top > inset * 2:
            left += inset
            top += inset
            right -= inset
            bottom -= inset

        cropped = image.crop((left, top, right, bottom))
        cropped.save(output_dir / f"{output_id}{args.ext}", optimize=True)


if __name__ == "__main__":
    main()
