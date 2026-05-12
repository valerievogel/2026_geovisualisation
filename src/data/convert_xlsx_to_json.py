"""
Convert database_projects.xlsx → projects.json

Usage:
    python convert_xlsx_to_json.py

Requirements:
    pip install openpyxl

The script reads the first sheet of the Excel file and maps each row to the
JSON schema used by the website. Adjust COLUMN_MAP if your Excel headers
differ from the defaults below.
"""

import json
import openpyxl
from pathlib import Path

INPUT_FILE  = Path(__file__).parent / "database_projects.xlsx"
OUTPUT_FILE = Path(__file__).parent / "projects.json"

# Map Excel column headers → JSON field names.
# Keys are the EXACT header names in your Excel file (case-sensitive).
# Values are the JSON field names used by the website.
COLUMN_MAP = {
    "id":                "id",
    "name":              "name",
    "organisation":      "organisation",
    "organisation_type": "organisation_type",
    "country":           "country",
    "region":            "region",
    "city":              "city",
    "latitude":          "latitude",
    "longitude":         "longitude",
    "topic":             "topic",
    "target_group":      "target_group",
    "sport":             "sport",
    "skills_required":   "skills_required",
    "language":          "language",
    "description":       "description",
    "website_url":       "website_url",
}

# Fields that contain a comma-separated list and should become JSON arrays.
ARRAY_FIELDS = {"topic", "target_group", "sport", "skills_required", "language"}


def parse_cell(value, field_name):
    if value is None:
        return [] if field_name in ARRAY_FIELDS else ""
    raw = str(value).strip()
    if field_name in ARRAY_FIELDS:
        return [v.strip() for v in raw.split(",") if v.strip()]
    if field_name in ("latitude", "longitude"):
        try:
            return float(raw)
        except ValueError:
            return 0.0
    return raw


def convert():
    if not INPUT_FILE.exists():
        print(f"ERROR: {INPUT_FILE} not found.")
        return

    wb = openpyxl.load_workbook(INPUT_FILE, read_only=True, data_only=True)
    ws = wb.active

    rows = list(ws.iter_rows(values_only=True))
    if not rows:
        print("ERROR: spreadsheet is empty.")
        return

    headers = [str(h).strip() if h is not None else "" for h in rows[0]]
    unmapped = [h for h in headers if h and h not in COLUMN_MAP]
    if unmapped:
        print(f"WARNING: these Excel columns are not in COLUMN_MAP and will be skipped: {unmapped}")

    projects = []
    for row in rows[1:]:
        if all(v is None for v in row):
            continue  # skip blank rows
        project = {}
        for col_index, header in enumerate(headers):
            json_field = COLUMN_MAP.get(header)
            if json_field is None:
                continue
            raw = row[col_index] if col_index < len(row) else None
            project[json_field] = parse_cell(raw, json_field)
        projects.append(project)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(projects, f, ensure_ascii=False, indent=2)

    print(f"Done — {len(projects)} projects written to {OUTPUT_FILE}")


if __name__ == "__main__":
    convert()
