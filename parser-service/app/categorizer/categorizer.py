import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
CONFIG_PATH = BASE_DIR / "config" / "categories.json"

with open(CONFIG_PATH, "r") as file:
    RULES = json.load(file)


def categorize(description: str) -> str:
    description = description.lower()

    for category, keywords in RULES.items():
        for keyword in keywords:
            if keyword in description:
                return category

    return "other"