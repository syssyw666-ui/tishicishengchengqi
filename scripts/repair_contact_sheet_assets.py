from __future__ import annotations

import argparse
import importlib.util
import json
import math
import sys
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
CROPPER_PATH = ROOT / "skills" / "photo-pltb" / "scripts" / "crop_contact_sheet.py"
MANUAL_GRIDS = {
    "layout-background-a.png": (4, 4),
}


@dataclass(frozen=True)
class Feature:
    difference_hash: int
    colors: tuple[int, ...]


@dataclass(frozen=True)
class Cell:
    sheet: Path
    index: int
    bounds: tuple[int, int, int, int]
    feature: Feature


@dataclass(frozen=True)
class Asset:
    path: Path
    feature: Feature


def load_cropper():
    spec = importlib.util.spec_from_file_location("photo_pltb_cropper", CROPPER_PATH)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Unable to load {CROPPER_PATH}")
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


def center_crop(image: Image.Image, fraction: float = 0.82) -> Image.Image:
    width, height = image.size
    inner_width = max(1, round(width * fraction))
    inner_height = max(1, round(height * fraction))
    return image.crop(
        (
            (width - inner_width) // 2,
            (height - inner_height) // 2,
            (width + inner_width) // 2,
            (height + inner_height) // 2,
        )
    )


def image_feature(image: Image.Image) -> Feature:
    sampled = ImageOps.fit(center_crop(image.convert("RGB")), (17, 12), Image.Resampling.LANCZOS)
    grayscale = list(sampled.convert("L").get_flattened_data())
    difference_hash = 0
    for row in range(12):
        for column in range(16):
            difference_hash = (difference_hash << 1) | (
                grayscale[row * 17 + column] > grayscale[row * 17 + column + 1]
            )
    colors = tuple(
        channel
        for pixel in sampled.resize((4, 3), Image.Resampling.BOX).get_flattened_data()
        for channel in pixel
    )
    return Feature(difference_hash, colors)


def feature_distance(first: Feature, second: Feature) -> float:
    hash_distance = (first.difference_hash ^ second.difference_hash).bit_count() / 192
    color_distance = sum(
        abs(left - right) for left, right in zip(first.colors, second.colors, strict=True)
    ) / (len(first.colors) * 255)
    return hash_distance + color_distance


def sheet_paths() -> list[Path]:
    public_sheets = sorted((ROOT / "public/assets/sheets").glob("*.png"))
    recent_sheets = sorted((ROOT / "tmp").glob("*-sheet-*.png"))
    return public_sheets + recent_sheets


def load_cells(cropper) -> tuple[list[Cell], list[dict[str, object]]]:
    cells: list[Cell] = []
    sheets: list[dict[str, object]] = []
    for sheet in sheet_paths():
        with Image.open(sheet) as source:
            image = source.convert("RGB")
            if sheet.name in MANUAL_GRIDS:
                columns, rows = MANUAL_GRIDS[sheet.name]
                bounds = cropper.equal_grid_bounds(image.width, image.height, columns, rows)
                method = "reviewed-manual-grid"
            else:
                bounds, columns, rows = cropper.detect_grid_bounds(image)
                method = "visible-divider-frame"
            if len(bounds) <= 1:
                sheets.append({"sheet": str(sheet.relative_to(ROOT)), "status": "no-grid-detected"})
                continue
            sheets.append(
                {
                    "sheet": str(sheet.relative_to(ROOT)),
                    "status": "detected",
                    "method": method,
                    "columns": columns,
                    "rows": rows,
                    "cells": len(bounds),
                }
            )
            for index, raw_bounds in enumerate(bounds):
                bounds_tuple = tuple(raw_bounds)
                cells.append(Cell(sheet, index, bounds_tuple, image_feature(image.crop(bounds_tuple))))
    return cells, sheets


def load_assets() -> list[Asset]:
    assets: list[Asset] = []
    for path in sorted((ROOT / "public/assets/parameters").iterdir()):
        if not path.is_file() or path.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
            continue
        try:
            with Image.open(path) as image:
                assets.append(Asset(path, image_feature(image)))
        except OSError:
            continue
    return assets


def select_matches(
    cells: list[Cell],
    assets: list[Asset],
    maximum_distance: float,
    minimum_margin: float,
) -> tuple[list[dict[str, object]], list[dict[str, object]]]:
    proposals: list[tuple[float, float, Cell, Asset, float]] = []
    rejected: list[dict[str, object]] = []
    for cell in cells:
        ranked = sorted(
            ((feature_distance(cell.feature, asset.feature), asset) for asset in assets),
            key=lambda item: (item[0], item[1].path.name),
        )
        best_distance, best_asset = ranked[0]
        second_distance = ranked[1][0]
        margin = second_distance - best_distance
        record = {
            "sheet": str(cell.sheet.relative_to(ROOT)),
            "cell": cell.index,
            "bestAsset": best_asset.path.name,
            "distance": round(best_distance, 5),
            "margin": round(margin, 5),
        }
        if best_distance <= maximum_distance and margin >= minimum_margin:
            proposals.append((best_distance, -margin, cell, best_asset, second_distance))
        else:
            rejected.append(record)

    selected: list[dict[str, object]] = []
    used_assets: set[Path] = set()
    used_cells: set[tuple[Path, int]] = set()
    for distance, negative_margin, cell, asset, second_distance in sorted(proposals):
        cell_key = (cell.sheet, cell.index)
        if asset.path in used_assets or cell_key in used_cells:
            continue
        used_assets.add(asset.path)
        used_cells.add(cell_key)
        selected.append(
            {
                "sheet": str(cell.sheet.relative_to(ROOT)),
                "cell": cell.index,
                "bounds": list(cell.bounds),
                "asset": asset.path.name,
                "distance": round(distance, 5),
                "margin": round(-negative_margin, 5),
                "secondDistance": round(second_distance, 5),
            }
        )
    return selected, rejected


def render_candidates(cropper, matches: list[dict[str, object]], output_dir: Path, inset: int) -> None:
    output_dir.mkdir(parents=True, exist_ok=True)
    open_sheets: dict[str, Image.Image] = {}
    try:
        for match in matches:
            sheet_name = str(match["sheet"])
            image = open_sheets.get(sheet_name)
            if image is None:
                image = Image.open(ROOT / sheet_name).convert("RGB")
                open_sheets[sheet_name] = image
            left, top, right, bottom = match["bounds"]
            cropped = image.crop((left + inset, top + inset, right - inset, bottom - inset))
            result = cropper.contain_with_blurred_background(cropped, (960, 540))
            asset_name = str(match["asset"])
            destination = output_dir / asset_name
            if destination.suffix.lower() in {".jpg", ".jpeg"}:
                result.save(destination, quality=92, optimize=True)
            else:
                result.save(destination, optimize=True)
    finally:
        for image in open_sheets.values():
            image.close()


def render_audits(matches: list[dict[str, object]], output_dir: Path, per_page: int = 60) -> list[str]:
    if not matches:
        return []
    columns = 4
    card_width = 320
    image_height = 180
    label_height = 34
    rows = math.ceil(min(per_page, len(matches)) / columns)
    audit_paths: list[str] = []
    font = ImageFont.load_default()
    for page_index, start in enumerate(range(0, len(matches), per_page), start=1):
        page_matches = matches[start:start + per_page]
        rows = math.ceil(len(page_matches) / columns)
        audit = Image.new("RGB", (columns * card_width, rows * (image_height + label_height)), "#17191d")
        draw = ImageDraw.Draw(audit)
        for index, match in enumerate(page_matches):
            row, column = divmod(index, columns)
            x = column * card_width
            y = row * (image_height + label_height)
            with Image.open(output_dir / str(match["asset"])) as image:
                preview = ImageOps.contain(image.convert("RGB"), (card_width, image_height), Image.Resampling.LANCZOS)
            audit.paste(preview, (x + (card_width - preview.width) // 2, y))
            draw.text((x + 6, y + image_height + 4), str(match["asset"])[:48], fill="white", font=font)
            draw.text(
                (x + 6, y + image_height + 18),
                f"d={match['distance']}  {Path(str(match['sheet'])).name}#{match['cell']}",
                fill="#aeb4bd",
                font=font,
            )
        audit_path = output_dir / f"audit-{page_index:02d}.jpg"
        audit.save(audit_path, quality=92, optimize=True)
        audit_paths.append(str(audit_path.relative_to(ROOT)))
    return audit_paths


def main() -> None:
    parser = argparse.ArgumentParser(description="Find and recrop high-confidence parameter assets from retained contact sheets.")
    parser.add_argument("--output-dir", type=Path, default=ROOT / "tmp/contact-sheet-repair-candidates")
    parser.add_argument("--maximum-distance", type=float, default=0.16)
    parser.add_argument("--minimum-margin", type=float, default=0.12)
    parser.add_argument("--inset", type=int, default=12)
    args = parser.parse_args()
    if args.inset <= 0:
        raise ValueError("A positive safety inset is required.")

    cropper = load_cropper()
    cells, sheets = load_cells(cropper)
    assets = load_assets()
    matches, rejected = select_matches(cells, assets, args.maximum_distance, args.minimum_margin)
    render_candidates(cropper, matches, args.output_dir, args.inset)
    audits = render_audits(matches, args.output_dir)
    manifest = {
        "rules": {
            "maximumDistance": args.maximum_distance,
            "minimumMargin": args.minimum_margin,
            "inset": args.inset,
            "outputSize": [960, 540],
        },
        "summary": {
            "sheets": len(sheets),
            "detectedCells": len(cells),
            "parameterAssets": len(assets),
            "highConfidenceMatches": len(matches),
            "unmatchedCells": len(rejected),
        },
        "sheets": sheets,
        "matches": matches,
        "unmatched": rejected,
        "audits": audits,
    }
    args.output_dir.mkdir(parents=True, exist_ok=True)
    manifest_path = args.output_dir / "repair-manifest.json"
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(manifest["summary"], ensure_ascii=False))
    print(f"Manifest: {manifest_path}")


if __name__ == "__main__":
    main()
