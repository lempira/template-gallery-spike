import fire
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

    # Ensure the examples directory exists
    destination.parent.mkdir(parents=True, exist_ok=True)

    # Remove destination if it exists
    if destination.exists():
        import shutil
        shutil.rmtree(destination)

    # Apply each template in sequence
    for template in example["templates"]:
        source = Path(template["source"]).absolute()
        template_destination = (
            Path(template["destination"])
            if "destination" in template
            else destination
        )
        template_destination = template_destination.absolute()

        # Copy the template
        run_copy(
            src_path=str(source),
            dst_path=str(template_destination),
            data=template["data"] if "data" in template else {},
            unsafe=True,
            quiet=False,
            overwrite=True,
        )


def main(example_id=None):
    """
    Create examples from templates. If example_id is provided, only that example will be created.
    
    Args:
        example_id (str, optional): Specific example ID to process. If None, all examples will be processed.
    """
    config = load_examples_config()

    if example_id:
        # Process single example
        example = next((ex for ex in config["examples"] if ex["id"] == example_id), None)
        if not example:
            print(f"No example found with ID: {example_id}")
            return
        print(f"\nProcessing example: {example['id']}")
        create_example(example)
        print(f"Completed: {example['id']}")
    else:
        # Process all examples
        for example in config["examples"]:
            print(f"\nProcessing example: {example['id']}")
            create_example(example)
            print(f"Completed: {example['id']}")


if __name__ == "__main__":
    fire.Fire(main)
