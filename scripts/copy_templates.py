import yaml
from pathlib import Path
from copier import run_copy


def load_examples_config():
    file_path = Path(__file__).parent.parent / "examples" / "examples.yml"
    with open(file_path, "r") as f:
        return yaml.safe_load(f)


def create_example(example):
    # Create destination path based on example id
    destination = Path("examples") / example["id"]
    destination = destination.absolute()

    # Ensure the examples directory exists
    destination.parent.mkdir(parents=True, exist_ok=True)

    # Remove destination if it exists
    if destination.exists():
        import shutil
        shutil.rmtree(destination)

    # Apply each template in sequence
    for template in example["templates"]:
        source = Path(template["source"]).absolute()
        
        # Copy the template
        run_copy(
            src_path=str(source),
            dst_path=str(destination),
            data=template["data"],
            unsafe=True,
            quiet=False,
            overwrite=True,
        )


def main():
    config = load_examples_config()

    for example in config["examples"]:
        print(f"\nProcessing example: {example['id']}")
        create_example(example)
        print(f"Completed: {example['id']}")


if __name__ == "__main__":
    main()
