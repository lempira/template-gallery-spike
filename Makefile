clean-examples:
	find examples/ -mindepth 1 -type d -exec rm -rf {} +

copy-templates:
	./scripts/copy_templates.sh
