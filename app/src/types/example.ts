export interface Example {
  id: string;
  author: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  links: {
	source: string;
    demo?: string;
    codespaces?: string;
    codesandbox?: string;
  };
}

export interface Examples {
  examples: Example[];
}
