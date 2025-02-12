import shutil
from pathlib import Path
import fire

def merge_dirs(
    source: str,
    destination: str,
    overwrite_files: bool = True,
    overwrite_dirs: bool = False
) -> None:
    """
    Merge contents from source directory to destination directory.
    
    Args:
        source: Path to source directory
        destination: Path to destination directory
        overwrite_files: If True, existing files in destination will be overwritten
        overwrite_dirs: If True, existing directories in destination will be overwritten
    """
    source_path = Path(source)
    dest_path = Path(destination)
    
    # Ensure source exists and is a directory
    if not source_path.exists():
        raise ValueError(f"Source directory '{source}' does not exist")
    if not source_path.is_dir():
        raise ValueError(f"Source path '{source}' is not a directory")
    
    # Create destination if it doesn't exist
    dest_path.mkdir(parents=True, exist_ok=True)
    
    for item in source_path.rglob('*'):
        # Get the relative path from source to create same structure in destination
        relative_path = item.relative_to(source_path)
        dest_item = dest_path / relative_path
        
        if item.is_dir():
            if dest_item.exists() and not overwrite_dirs:
                continue
            elif dest_item.exists() and overwrite_dirs:
                shutil.rmtree(dest_item)
            dest_item.mkdir(parents=True, exist_ok=True)
        else:  # is a file
            if not dest_item.parent.exists():
                dest_item.parent.mkdir(parents=True)
            if not dest_item.exists() or overwrite_files:
                shutil.copy2(item, dest_item)


if __name__ == "__main__":
    fire.Fire(merge_dirs)
