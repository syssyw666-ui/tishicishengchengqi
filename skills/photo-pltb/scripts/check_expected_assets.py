from __future__ import annotations

import argparse
import re
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser(description="Check parameter IDs in a data file have matching asset files.")
    parser.add_argument("--data-file", required=True)
    parser.add_argument("--asset-dir", required=True)
    parser.add_argument("--prefix", required=True)
    parser.add_argument("--ext", default=".png")
    args = parser.parse_args()

    text = Path(args.data_file).read_text(encoding="utf-8")
    ids = re.findall(r'id:\s*"(' + re.escape(args.prefix) + r'[^"]+)"', text)
    duplicate_ids = sorted({item for item in ids if ids.count(item) > 1})
    asset_dir = Path(args.asset_dir)
    missing = [item for item in ids if not (asset_dir / f"{item}{args.ext}").exists()]

    print(f"ids={len(ids)}")
    print(f"present={len(ids) - len(missing)}")
    print(f"missing={len(missing)}")
    if duplicate_ids:
        print("duplicate_ids=" + ",".join(duplicate_ids))
    if missing:
        print("missing_ids=" + ",".join(missing))
        raise SystemExit(1)
    if duplicate_ids:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
