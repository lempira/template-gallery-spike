export interface Example {
  id: string;
  author: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  links: {
    demo: string;
    source: string;
  };
}

export interface Examples {
  examples: Example[];
}
