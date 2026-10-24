from __future__ import annotations

import argparse
import json
import math
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import urlsplit

from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "backend" / "catalog_seed.json"
IMAGE_FIELDS = ("image", "originalImage", "resultImage")


@dataclass(frozen=True)
class AssetReference:
    owner: str
    field: str
    url: str
    path: Path


def local_asset_path(url: str) -> Path | None:
    path = urlsplit(url).path
    if not path.startswith("/assets/"):
        return None
    return ROOT / "public" / path.removeprefix("/")


def catalog_references() -> list[AssetReference]:
    payload = json.loads(CATALOG.read_text(encoding="utf-8"))
    references: list[AssetReference] = []
    for collection in ("parameters", "featuredPrompts"):
        for item in payload.get(collection, []):
            owner = f"{collection}:{item['id']}"
            for field in IMAGE_FIELDS:
                url = item.get(field)
                if not isinstance(url, str) or not url:
                    continue
                path = local_asset_path(url)
                if path is not None:
                    references.append(AssetReference(owner, field, url, path))
    return references


def neutral_divider_runs(image: Image.Image, axis: str) -> list[tuple[int, int, float]]:
    sampled = image.resize((min(image.width, 320), min(image.height, 180)), Image.Resampling.LANCZOS)
    width, height = sampled.size
    length = width if axis == "column" else height
    grayscale = sampled.convert("L")
    saturation = sampled.convert("HSV").getchannel("S")
    extreme = grayscale.point(lambda value: 255 if value >= 238 or value <= 18 else 0)
    neutral = saturation.point(lambda value: 255 if value <= 18 else 0)
    mask = ImageChops.multiply(extreme, neutral)
    profile = (
        mask.resize((width, 1), Image.Resampling.BOX)
        if axis == "column"
        else mask.resize((1, height), Image.Resampling.BOX)
    )
    candidates: list[tuple[int, float]] = []
    for position, value in enumerate(profile.get_flattened_data()):
        coverage = value / 255
        if coverage >= 0.90:
            candidates.append((position, coverage))

    runs: list[list[tuple[int, float]]] = []
    for position, coverage in candidates:
        if not runs or position > runs[-1][-1][0] + 1:
            runs.append([])
        runs[-1].append((position, coverage))

    result: list[tuple[int, int, float]] = []
    for run in runs:
        start, end = run[0][0], run[-1][0]
        center = (start + end) / 2
        if 0.03 * length < center < 0.97 * length and end - start + 1 <= max(18, round(length * 0.08)):
            result.append((start, end, max(value for _, value in run)))
    return result


def abrupt_seams(image: Image.Image, axis: str) -> list[tuple[int, float, float]]:
    sampled = ImageOps.contain(image.convert("RGB"), (320, 180), Image.Resampling.LANCZOS)
    width, height = sampled.size
    length = width if axis == "column" else height
    edges = sampled.convert("L").filter(ImageFilter.FIND_EDGES)
    high_edges = edges.point(lambda value: 255 if value >= 45 else 0)
    mean_profile = (
        edges.resize((width, 1), Image.Resampling.BOX)
        if axis == "column"
        else edges.resize((1, height), Image.Resampling.BOX)
    )
    high_profile = (
        high_edges.resize((width, 1), Image.Resampling.BOX)
        if axis == "column"
        else high_edges.resize((1, height), Image.Resampling.BOX)
    )
    scores = [
        (position, float(mean), high / 255)
        for position, (mean, high) in enumerate(
            zip(mean_profile.get_flattened_data(), high_profile.get_flattened_data(), strict=True)
        )
        if 0 < position < length - 1
    ]

    means = sorted(score[1] for score in scores)
    baseline = means[len(means) // 2] if means else 0
    flagged: list[tuple[int, float, float]] = []
    for position, mean, high in scores:
        ratio = position / length
        near_edge = ratio <= 0.20 or ratio >= 0.80
        threshold = max(34 if near_edge else 44, baseline * (4.0 if near_edge else 5.0))
        if mean >= threshold and high >= (0.48 if near_edge else 0.62):
            flagged.append((position, round(mean, 2), round(high, 3)))
    return sorted(flagged, key=lambda item: item[1], reverse=True)[:3]


def render_pages(records: list[dict[str, object]], output_dir: Path, prefix: str, per_page: int = 60) -> list[str]:
    if not records:
        return []
    output_dir.mkdir(parents=True, exist_ok=True)
    columns, card_width, image_height, label_height = 4, 320, 180, 34
    font = ImageFont.load_default()
    pages: list[str] = []
    for page_index, start in enumerate(range(0, len(records), per_page), start=1):
        subset = records[start : start + per_page]
        rows = math.ceil(len(subset) / columns)
        page = Image.new("RGB", (columns * card_width, rows * (image_height + label_height)), "#17191d")
        draw = ImageDraw.Draw(page)
        for index, record in enumerate(subset):
            row, column = divmod(index, columns)
            x, y = column * card_width, row * (image_height + label_height)
            path = ROOT / str(record["path"])
            with Image.open(path) as source:
                preview = ImageOps.contain(source.convert("RGB"), (card_width, image_height), Image.Resampling.LANCZOS)
            page.paste(preview, (x + (card_width - preview.width) // 2, y))
            draw.text((x + 6, y + image_height + 4), path.name[:48], fill="white", font=font)
            reason = str(record.get("reason", ""))[:55]
            draw.text((x + 6, y + image_height + 18), reason, fill="#aeb4bd", font=font)
        destination = output_dir / f"{prefix}-{page_index:02d}.jpg"
        page.save(destination, quality=90, optimize=True)
        pages.append(str(destination.relative_to(ROOT)))
    return pages


def main() -> None:
    parser = argparse.ArgumentParser(description="Audit every catalog image for missing files and likely contact-sheet bleed.")
    parser.add_argument("--output-dir", type=Path, default=ROOT / "tmp" / "full-image-audit")
    parser.add_argument("--render-all", action="store_true", help="Also render overview pages for every unique asset.")
    args = parser.parse_args()

    references = catalog_references()
    unique_paths = sorted({reference.path for reference in references})
    missing = sorted(path for path in unique_paths if not path.exists())
    errors: list[dict[str, str]] = []
    suspicious: list[dict[str, object]] = []
    all_records: list[dict[str, object]] = []
    dimensions: dict[str, int] = {}

    for path in unique_paths:
        if path in missing:
            continue
        try:
            with Image.open(path) as source:
                image = source.convert("RGB")
                dimensions[f"{image.width}x{image.height}"] = dimensions.get(f"{image.width}x{image.height}", 0) + 1
                column_dividers = neutral_divider_runs(image, "column")
                row_dividers = neutral_divider_runs(image, "row")
                column_seams = abrupt_seams(image, "column")
                row_seams = abrupt_seams(image, "row")
        except OSError as error:
            errors.append({"path": str(path.relative_to(ROOT)), "error": str(error)})
            continue

        record: dict[str, object] = {"path": str(path.relative_to(ROOT)), "reason": "catalog asset"}
        all_records.append(record)
        reasons: list[str] = []
        if column_dividers:
            reasons.append(f"vertical divider {column_dividers}")
        if row_dividers:
            reasons.append(f"horizontal divider {row_dividers}")
        if column_seams:
            reasons.append(f"vertical seam {column_seams}")
        if row_seams:
            reasons.append(f"horizontal seam {row_seams}")
        if reasons:
            suspicious.append({"path": str(path.relative_to(ROOT)), "reason": "; ".join(reasons)})

    suspect_pages = render_pages(suspicious, args.output_dir, "suspicious")
    overview_pages = render_pages(all_records, args.output_dir, "overview", per_page=80) if args.render_all else []
    report = {
        "summary": {
            "catalogReferences": len(references),
            "uniqueAssets": len(unique_paths),
            "missing": len(missing),
            "decodeErrors": len(errors),
            "suspicious": len(suspicious),
        },
        "dimensions": dict(sorted(dimensions.items(), key=lambda item: (-item[1], item[0]))),
        "missing": [str(path.relative_to(ROOT)) for path in missing],
        "decodeErrors": errors,
        "suspicious": suspicious,
        "suspiciousPages": suspect_pages,
        "overviewPages": overview_pages,
    }
    args.output_dir.mkdir(parents=True, exist_ok=True)
    destination = args.output_dir / "report.json"
    destination.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report["summary"], ensure_ascii=False))
    print(f"Report: {destination}")


if __name__ == "__main__":
    main()
