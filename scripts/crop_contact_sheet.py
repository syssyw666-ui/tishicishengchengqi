from __future__ import annotations

import runpy
import sys
from pathlib import Path


def main() -> None:
    canonical = Path(__file__).resolve().parents[1] / "skills" / "photo-pltb" / "scripts" / "crop_contact_sheet.py"
    arguments = sys.argv[1:]
    if arguments and not arguments[0].startswith("--"):
        if len(arguments) != 5:
            raise SystemExit("Legacy usage: source output_dir cols rows comma-separated-ids")
        source, output_dir, cols, rows, ids = arguments
        arguments = [
            "--source", source,
            "--output-dir", output_dir,
            "--cols", cols,
            "--rows", rows,
            "--ids", ids,
        ]
    sys.argv = [str(canonical), *arguments]
    runpy.run_path(str(canonical), run_name="__main__")


if __name__ == "__main__":
    main()
