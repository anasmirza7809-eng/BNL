import os
import re
import sys
import urllib.request
from pathlib import Path
from urllib.parse import urlparse

# Path to the built index.html (adjust if different)
INDEX_PATH = Path(__file__).parent / "dist" / "index.html"
ASSETS_DIR = Path(__file__).parent / "dist" / "assets"

if not INDEX_PATH.is_file():
    print(f"Error: {INDEX_PATH} does not exist. Build the project first (npm run build).", file=sys.stderr)
    sys.exit(1)

ASSETS_DIR.mkdir(parents=True, exist_ok=True)

# Read the HTML content
html = INDEX_PATH.read_text(encoding="utf-8")

# Find all src and href attributes that point to external URLs (http/https)
pattern = re.compile(r"(?:src|href)=\"(https?://[^\"]+)\"")
urls = pattern.findall(html)

if not urls:
    print("No external assets found.")
    sys.exit(0)

print(f"Found {len(urls)} external assets.")

for url in urls:
    try:
        parsed = urlparse(url)
        filename = os.path.basename(parsed.path)
        if not filename:
            # fallback if URL ends with slash
            filename = "index.html"
        local_path = ASSETS_DIR / filename
        # Download the file
        print(f"Downloading {url} -> {local_path}")
        urllib.request.urlretrieve(url, local_path)
        # Replace URL in HTML with relative path
        html = html.replace(url, f"assets/{filename}")
    except Exception as e:
        print(f"Failed to download {url}: {e}", file=sys.stderr)

# Write the updated HTML back
INDEX_PATH.write_text(html, encoding="utf-8")
print("Asset download and HTML update complete.")
