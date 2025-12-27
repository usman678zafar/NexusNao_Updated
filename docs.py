import os
from pathlib import Path
from datetime import datetime

# Configuration
PROJECT_ROOT = r"D:\Nexus Nao\COMPANY-WEB"
OUTPUT_FILE = r"D:\Nexus Nao\COMPANY-WEB\docs\project_documentation.md"

# File extensions to include
INCLUDE_EXTENSIONS = {
    '.tsx', '.ts', '.css', '.mjs', '.json', '.md'
}

# Specific files to skip
SKIP_FILES = {
    'package-lock.json',
    'next-env.d.ts',
    '.gitignore',
    '.gitattributes',
    'README.md',
    'project_documentation.md'  # Avoid including output file
}

# Folders to skip
SKIP_FOLDERS = {
    'node_modules',
    '.git',
    '.next',
    'public',
    '.vercel'
}

# Language mapping for syntax highlighting
LANG_MAP = {
    '.tsx': 'tsx',
    '.ts': 'typescript',
    '.css': 'css',
    '.mjs': 'javascript',
    '.json': 'json',
    '.md': 'markdown'
}

def should_include_file(file_path: Path) -> bool:
    """Check if file should be included in documentation."""
    # Check extension
    if file_path.suffix not in INCLUDE_EXTENSIONS:
        return False
    
    # Check if file is in skip list
    if file_path.name in SKIP_FILES:
        return False
    
    # Check if any parent folder is in skip list
    for part in file_path.parts:
        if part in SKIP_FOLDERS:
            return False
    
    return True

def get_language(file_path: Path) -> str:
    """Get syntax highlighting language for file."""
    return LANG_MAP.get(file_path.suffix, '')

def collect_files(root_path: Path) -> dict:
    """Collect all files organized by category."""
    categories = {
        'Configuration': [],
        'App Routes': [],
        'Components': [],
        'Library': [],
        'Documentation': [],
        'Styles': []
    }
    
    for file_path in root_path.rglob('*'):
        if not file_path.is_file():
            continue
        
        if not should_include_file(file_path):
            continue
        
        relative_path = file_path.relative_to(root_path)
        
        # Categorize files
        if relative_path.parts[0] == 'app':
            if file_path.suffix == '.css':
                categories['Styles'].append(file_path)
            else:
                categories['App Routes'].append(file_path)
        elif relative_path.parts[0] == 'components':
            categories['Components'].append(file_path)
        elif relative_path.parts[0] == 'lib':
            categories['Library'].append(file_path)
        elif relative_path.parts[0] == 'docs':
            categories['Documentation'].append(file_path)
        elif file_path.suffix in {'.json', '.mjs', '.ts'} and len(relative_path.parts) == 1:
            categories['Configuration'].append(file_path)
    
    return categories

def generate_markdown(categories: dict, root_path: Path) -> str:
    """Generate markdown content from categorized files."""
    lines = []
    
    # Header
    lines.append("# Project Documentation")
    lines.append(f"\n**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    lines.append(f"\n**Project:** COMPANY-WEB (Next.js)")
    lines.append("\n---\n")
    
    # Table of Contents
    lines.append("## Table of Contents\n")
    for category, files in categories.items():
        if files:
            lines.append(f"- [{category}](#{category.lower().replace(' ', '-')})")
    lines.append("\n---\n")
    
    # Content by category
    for category, files in categories.items():
        if not files:
            continue
        
        lines.append(f"## {category}\n")
        
        # Sort files for consistent output
        files.sort(key=lambda f: str(f.relative_to(root_path)))
        
        for file_path in files:
            relative_path = file_path.relative_to(root_path)
            lang = get_language(file_path)
            
            lines.append(f"### `{relative_path}`\n")
            
            try:
                content = file_path.read_text(encoding='utf-8')
                lines.append(f"```{lang}")
                lines.append(content)
                lines.append("```\n")
            except Exception as e:
                lines.append(f"*Error reading file: {e}*\n")
        
        lines.append("---\n")
    
    return '\n'.join(lines)

def main():
    """Main function to compile documentation."""
    root_path = Path(PROJECT_ROOT)
    output_path = Path(OUTPUT_FILE)
    
    # Ensure output directory exists
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    print(f"Scanning project: {root_path}")
    
    # Collect files
    categories = collect_files(root_path)
    
    # Count files
    total_files = sum(len(files) for files in categories.values())
    print(f"Found {total_files} files to document\n")
    
    for category, files in categories.items():
        if files:
            print(f"  {category}: {len(files)} files")
    
    # Generate markdown
    print(f"\nGenerating documentation...")
    markdown_content = generate_markdown(categories, root_path)
    
    # Write output
    output_path.write_text(markdown_content, encoding='utf-8')
    print(f"\n✅ Documentation saved to: {output_path}")
    print(f"   File size: {output_path.stat().st_size / 1024:.2f} KB")

if __name__ == "__main__":
    main()
