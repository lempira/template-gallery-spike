import yaml from 'js-yaml';
import type { Example } from './types/example';

export async function fetchExamplesYaml(): Promise<Example[]> {
    // Simulating API latency
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const yamlContent = `examples:
    - id: astro-react-ts
      title: "Astro React TypeScript Example"
      description: "An example Astro project with React and TypeScript"
      image: "/examples/astro-react-ts/preview.png"
      tags:
        - astro
        - react
        - typescript
      features:
        - "Astro + React integration"
        - "TypeScript support"
        - "File-based routing"
        - "Component-based architecture"
      links:
        demo: "https://example.com/demo/astro-react-ts"
        source: "https://github.com/yourusername/template-gallery/tree/main/examples/astro-react-ts"
  
    - id: vite-react-ts
      title: "Vite React TypeScript Example"
      description: "An example Vite project with React and TypeScript"
      image: "/examples/vite-react-ts/preview.png"
      tags:
        - vite
        - react
        - typescript
      features:
        - "Fast HMR with Vite"
        - "React 19 support"
        - "TypeScript configuration"
        - "ESLint integration"
      links:
        demo: "https://example.com/demo/vite-react-ts"
        source: "https://github.com/yourusername/template-gallery/tree/main/examples/vite-react-ts"`;

    try {
        const parsed = yaml.load(yamlContent) as { examples: Example[] };
        return parsed.examples;
    } catch (error) {
        console.error('Error parsing YAML:', error);
        return [];
    }
}