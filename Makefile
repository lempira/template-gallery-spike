clean-examples:
	find examples/ -mindepth 1 -type d -exec rm -rf {} +

create-examples:
	python ./scripts/create_examples.py

validate-example-configuration:
	python ./scripts/validate_configuration.py
