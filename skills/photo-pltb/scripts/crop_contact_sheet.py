from __future__ import annotations

import argparse
import json
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageFilter, ImageOps


@dataclass(frozen=True)
class DividerRun:
    start: int
    end: int
    coverage: float


def parse_ids(value: str) -> list[str]:
    return [item.strip() for item in value.split(",") if item.strip()]


def _is_divider_pixel(
    pixel: tuple[int, int, int],
    min_brightness: int,
    max_darkness: int,
    max_chroma: int,
) -> bool:
    neutral = max(pixel) - min(pixel) <= max_chroma
    return neutral and (min(pixel) >= min_brightness or max(pixel) <= max_darkness)


def _collapse_runs(samples: list[tuple[int, float]]) -> list[DividerRun]:
    groups: list[list[tuple[int, float]]] = []
    for position, coverage in samples:
        if not groups or position > groups[-1][-1][0] + 1:
            groups.append([])
        groups[-1].append((position, coverage))
    return [DividerRun(group[0][0], group[-1][0], max(value for _, value in group)) for group in groups]


def detect_divider_runs(
    image: Image.Image,
    axis: str,
    min_brightness: int = 205,
    max_darkness: int = 90,
    max_chroma: int = 60,
    min_coverage: float = 0.92,
) -> list[DividerRun]:
    """Return continuous near-white lines that span almost the whole sheet."""
    width, height = image.size
    positions = height if axis == "row" else width
    span = width if axis == "row" else height
    samples: list[tuple[int, float]] = []
    for position in range(positions):
        strip = (
            image.crop((0, position, width, position + 1))
            if axis == "row"
            else image.crop((position, 0, position + 1, height))
        )
        divider_pixels = sum(
            _is_divider_pixel(pixel, min_brightness, max_darkness, max_chroma)
            for pixel in strip.get_flattened_data()
        )
        coverage = divider_pixels / span
        if coverage >= min_coverage:
            samples.append((position, coverage))
    return _collapse_runs(samples)


def _axis_cells(length: int, runs: list[DividerRun], min_cell_size: int) -> list[tuple[int, int]]:
    edge_tolerance = max(4, round(length * 0.01))
    leading = next((run for run in runs if run.start <= edge_tolerance), None)
    trailing = next((run for run in reversed(runs) if run.end >= length - 1 - edge_tolerance), None)
    start = leading.end + 1 if leading else 0
    end = trailing.start if trailing and trailing is not leading else length
    internal = [run for run in runs if run.start > start and run.end < end]

    cells: list[tuple[int, int]] = []
    cursor = start
    for run in internal:
        if run.start - cursor >= min_cell_size:
            cells.append((cursor, run.start))
            cursor = run.end + 1
    if end - cursor >= min_cell_size:
        cells.append((cursor, end))
    return cells


def detect_grid_bounds(
    image: Image.Image,
    min_brightness: int = 205,
    max_darkness: int = 90,
    max_chroma: int = 60,
    min_coverage: float = 0.92,
    min_cell_size: int = 64,
) -> tuple[list[list[int]], int, int]:
    row_runs = detect_divider_runs(image, "row", min_brightness, max_darkness, max_chroma, min_coverage)
    col_runs = detect_divider_runs(image, "col", min_brightness, max_darkness, max_chroma, min_coverage)
    row_cells = _axis_cells(image.height, row_runs, min_cell_size)
    col_cells = _axis_cells(image.width, col_runs, min_cell_size)
    if not row_cells or not col_cells:
        raise ValueError("Could not detect a white-frame grid. Supply a measured --bounds-file; equal splitting is never automatic.")
    bounds = [
        [left, top, right, bottom]
        for top, bottom in row_cells
        for left, right in col_cells
    ]
    return bounds, len(col_cells), len(row_cells)


def equal_grid_bounds(width: int, height: int, cols: int, rows: int) -> list[list[int]]:
    cell_width = width // cols
    cell_height = height // rows
    return [
        [
            col * cell_width,
            row * cell_height,
            width if col == cols - 1 else (col + 1) * cell_width,
            height if row == rows - 1 else (row + 1) * cell_height,
        ]
        for row in range(rows)
        for col in range(cols)
    ]


def contain_with_blurred_background(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    foreground = ImageOps.contain(image, size, Image.Resampling.LANCZOS)
    background = ImageOps.fit(image, size, Image.Resampling.LANCZOS).filter(
        ImageFilter.GaussianBlur(max(size) / 32)
    )
    background.paste(foreground, ((size[0] - foreground.width) // 2, (size[1] - foreground.height) // 2))
    return background


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Crop a reference contact sheet using its visible white frame.")
    parser.add_argument("--source", required=True, help="Contact sheet image path.")
    parser.add_argument("--output-dir", required=True, help="Directory for cropped assets.")
    parser.add_argument("--cols", type=int, help="Expected columns. Used to validate auto-detection.")
    parser.add_argument("--rows", type=int, help="Expected rows. Used to validate auto-detection.")
    parser.add_argument("--ids", required=True, help="Comma-separated output IDs without extension.")
    parser.add_argument("--ext", default=".png", help="Output extension, default .png.")
    parser.add_argument("--bounds-file", type=Path, help="JSON list of measured [left, top, right, bottom] bounds.")
    parser.add_argument("--write-bounds", type=Path, help="Write detected pre-inset bounds as JSON for review.")
    parser.add_argument("--size", nargs=2, type=int, metavar=("WIDTH", "HEIGHT"), help="Contain each cell in this canvas with a same-image blurred background.")
    parser.add_argument("--inset", default=12, type=int, help="Safety pixels trimmed inside every detected cell. Defaults to 12.")
    parser.add_argument("--divider-min-brightness", default=205, type=int)
    parser.add_argument("--divider-max-darkness", default=90, type=int)
    parser.add_argument("--divider-max-chroma", default=60, type=int)
    parser.add_argument("--divider-coverage", default=0.92, type=float)
    parser.add_argument("--min-cell-size", default=64, type=int)
    parser.add_argument(
        "--grid-mode",
        choices=("white-frame", "equal"),
        default="white-frame",
        help="White-frame detection is the safe default. Equal splitting must be explicitly requested.",
    )
    return parser


def main() -> None:
    args = build_parser().parse_args()
    source = Path(args.source)
    output_dir = Path(args.output_dir)
    ids = parse_ids(args.ids)
    if not ids or len(ids) != len(set(ids)):
        raise ValueError("Output IDs must be present and unique.")
    if args.inset <= 0:
        raise ValueError("Zero inset is unsafe for generated contact sheets. Use a positive --inset value.")
    if (args.cols is None) != (args.rows is None):
        raise ValueError("Provide both --cols and --rows, or omit both and use detected dimensions.")
    if args.size and min(args.size) < 1:
        raise ValueError("Output dimensions must be positive.")

    image = Image.open(source).convert("RGB")
    width, height = image.size
    if args.bounds_file:
        bounds = json.loads(args.bounds_file.read_text(encoding="utf-8"))
        detected_cols = args.cols
        detected_rows = args.rows
    elif args.grid_mode == "equal":
        if args.cols is None or args.rows is None:
            raise ValueError("Explicit --cols and --rows are required for --grid-mode equal.")
        bounds = equal_grid_bounds(width, height, args.cols, args.rows)
        detected_cols, detected_rows = args.cols, args.rows
    else:
        bounds, detected_cols, detected_rows = detect_grid_bounds(
            image,
            min_brightness=args.divider_min_brightness,
            max_darkness=args.divider_max_darkness,
            max_chroma=args.divider_max_chroma,
            min_coverage=args.divider_coverage,
            min_cell_size=args.min_cell_size,
        )
        if args.cols is not None and (detected_cols, detected_rows) != (args.cols, args.rows):
            raise ValueError(
                f"Visible white frame is {detected_cols}x{detected_rows}, not requested {args.cols}x{args.rows}. "
                "Use the detected grid or a reviewed --bounds-file."
            )

    if len(bounds) != len(ids):
        shape = f"{detected_cols}x{detected_rows}" if detected_cols and detected_rows else "custom"
        raise ValueError(f"Detected {len(bounds)} cells ({shape}) but received {len(ids)} IDs. No files were written.")
    for output_id, (left, top, right, bottom) in zip(ids, bounds, strict=True):
        if not (0 <= left < right <= width and 0 <= top < bottom <= height):
            raise ValueError(f"Invalid cell bounds for {output_id}: {[left, top, right, bottom]}")
        if right - left <= args.inset * 2 or bottom - top <= args.inset * 2:
            raise ValueError(f"Cell too small for safety inset: {output_id}")

    if args.write_bounds:
        args.write_bounds.parent.mkdir(parents=True, exist_ok=True)
        args.write_bounds.write_text(json.dumps(bounds, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    output_dir.mkdir(parents=True, exist_ok=True)
    for output_id, (left, top, right, bottom) in zip(ids, bounds, strict=True):
        cropped = image.crop((left + args.inset, top + args.inset, right - args.inset, bottom - args.inset))
        if args.size:
            cropped = contain_with_blurred_background(cropped, tuple(args.size))
        options = {"quality": 92} if args.ext.lower() in (".jpg", ".jpeg") else {}
        cropped.save(output_dir / f"{output_id}{args.ext}", optimize=True, **options)

    print(f"Detected grid: {detected_cols or '?'}x{detected_rows or '?'}; wrote {len(ids)} assets.")


if __name__ == "__main__":
    main()
