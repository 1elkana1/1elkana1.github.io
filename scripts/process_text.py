import json
import os
import sys

# Get the directory of this script
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
# Navigate up to the project root (where "data" and "scripts" folders live)
BASE_DIR = os.path.dirname(SCRIPT_DIR)
# Define data paths relative to the project root
DATA_DIR = os.path.join(BASE_DIR, "data")
TEXTS_DIR = os.path.join(DATA_DIR, "texts")

def load_keywords(data_type):
    """Load figures, places, or groups from JSON files"""
    path = os.path.join(DATA_DIR, f"{data_type}.json")
    with open(path, "r") as f:
        return json.load(f)

def find_matches(content, keyword_db):
    """Find keywords in the text"""
    matches = []
    for entry in keyword_db:
        if entry["name"].lower() in content.lower():
            matches.append(entry)
    return matches

def process_text(text_name):
    # Paths
    txt_path = os.path.join(TEXTS_DIR, f"{text_name}.txt")
    json_path = os.path.join(TEXTS_DIR, f"{text_name}.json")

    # Read input text
    with open(txt_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Load all keyword databases
    figures = load_keywords("figures")
    places = load_keywords("places")
    groups = load_keywords("groups")

    # Find matches
    keywords = {
        "figures": find_matches(content, figures),
        "places": find_matches(content, places),
        "groups": find_matches(content, groups)
    }

    # Create/update JSON file
    if os.path.exists(json_path):
        with open(json_path, "r") as f:
            existing_data = json.load(f)
    else:
        existing_data = {}

    existing_data["keywords"] = keywords

    with open(json_path, "w") as f:
        json.dump(existing_data, f, indent=2)

    print(f"Processed {text_name}! Updated {json_path}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python scripts/process_text.py <text_name>")
        sys.exit(1)
    
    text_name = sys.argv[1]
    process_text(text_name)