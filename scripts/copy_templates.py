import yaml
from pathlib import Path
from copier import run_copy


def load_templates_config():
    file_path = Path(__file__).parent.parent / "templates" / "templates.yaml"
    with open(file_path, "r") as f:
        return yaml.safe_load(f)


def create_example(template_config):
    source = Path(template_config["source"]).absolute()
    destination = Path(template_config["destination"]).absolute()

    # Ensure the examples directory exists
    destination.parent.mkdir(parents=True, exist_ok=True)

    # Remove destination if it exists
    if destination.exists():
        import shutil

        shutil.rmtree(destination)

    # Copy the template
    run_copy(
        src_path=str(source),
        dst_path=str(destination),
        data=template_config["data"],
        unsafe=True,
        quiet=False,
    )


def main():
    config = load_templates_config()

    for template in config["templates"]:
        print(f"\nProcessing template: {template['name']}")
        create_example(template)
        print(f"Completed: {template['name']}")


if __name__ == "__main__":
    main()
