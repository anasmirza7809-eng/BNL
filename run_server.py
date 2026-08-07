import http.server
import socketserver
from pathlib import Path
import os

# Directory containing the built site (dist)
BASE_DIR = Path(__file__).parent / "dist"

if not BASE_DIR.is_dir():
    print(f"Error: {BASE_DIR} does not exist. Please run 'npm run build' first.")
    exit(1)

os.chdir(BASE_DIR)

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
