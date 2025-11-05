#!/usr/bin/env python3
import re
import sys
from pathlib import Path

def replace_captioned_images(file_path: str):
    path = Path(file_path)
    if not path.exists():
        print(f"Error: File not found: {file_path}")
        sys.exit(1)
    
    content = path.read_text()
    
    pattern = r'<CaptionedImage.*?src="([^"]+)".*?alt="([^"]+)".*?/>'
    
    def replace_match(match):
        src = match.group(1)
        alt = match.group(2)
        url = f"https://www.shuttle.dev{src}"
        return f"![{alt}]({url})"
    
    new_content = re.sub(pattern, replace_match, content, flags=re.MULTILINE | re.DOTALL)
    
    if new_content != content:
        path.write_text(new_content)
        print(f"Replaced CaptionedImage components in {file_path}")
    else:
        print(f"No CaptionedImage components found in {file_path}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python replace-captioned-images.py <file_path>")
        sys.exit(1)
    
    replace_captioned_images(sys.argv[1])

