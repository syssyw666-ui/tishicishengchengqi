from __future__ import annotations

import argparse
import json
from pathlib import Path

from PIL import Image, ImageFilter, ImageOps


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
    parser.add_argument("--bounds-file", type=Path, help="JSON list of measured [left, top, right, bottom] cell bounds, in ID order.")
    parser.add_argument("--size", nargs=2, type=int, metavar=("WIDTH", "HEIGHT"), help="Contain each cell in this canvas with same-image blurred background.")
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
    if args.cols < 1 or args.rows < 1 or len(ids) != len(set(ids)):
        raise ValueError("Grid dimensions must be positive and output IDs unique.")
    bounds = json.loads(args.bounds_file.read_text(encoding="utf-8")) if args.bounds_file else None
    if bounds is not None and len(bounds) != len(ids):
        raise ValueError("Measured bounds must match the number of output IDs.")
    if args.size and min(args.size) < 1:
        raise ValueError("Output dimensions must be positive.")
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
        if bounds is not None:
            left, top, right, bottom = bounds[index]
        if not (0 <= left < right <= width and 0 <= top < bottom <= height):
            raise ValueError(f"Invalid cell bounds for {output_id}")

        inset = max(args.inset, 0)
        if inset == 0:
            raise ValueError("Zero inset is unsafe for generated contact sheets. Use a positive --inset value.")
        if right - left <= inset * 2 or bottom - top <= inset * 2:
            raise ValueError(f"Cell too small for safety inset: {output_id}")
        left += inset
        top += inset
        right -= inset
        bottom -= inset

        cropped = image.crop((left, top, right, bottom))
        if args.size:
            size = tuple(args.size)
            foreground = ImageOps.contain(cropped, size, Image.Resampling.LANCZOS)
            canvas = ImageOps.fit(cropped, size, Image.Resampling.LANCZOS).filter(
                ImageFilter.GaussianBlur(max(size) / 32)
            )
            canvas.paste(foreground, ((size[0] - foreground.width) // 2, (size[1] - foreground.height) // 2))
            cropped = canvas
        options = {"quality": 92} if args.ext.lower() in (".jpg", ".jpeg") else {}
        cropped.save(output_dir / f"{output_id}{args.ext}", optimize=True, **options)


if __name__ == "__main__":
    main()
