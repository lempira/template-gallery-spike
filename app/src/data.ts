import yaml from "js-yaml";
import type { Example } from "./types/example";

export async function fetchExamplesYaml(): Promise<Example[]> {
  // Simulating API latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  const yamlContent = `examples:
  - id: "frontend-example-1-astro"
    author: "Algorand Foundation"
    title: "Frontend Example 1 - Astro"
    description: "A modern web application template built with Astro and TypeScript, featuring file-based routing and component-based architecture. This template provides a clean starting point for building fast, SEO-friendly static websites with excellent developer experience. Perfect for blogs, documentation sites, or any content-focused web application."
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    tags:
      - astro
      - typescript
    features:
      - "File-based routing"
      - "Component-based architecture"
      - "Basic Astro setup"
    links:
      demo: "https://example.com/demo/frontend-example-1-astro"
      source: "https://github.com/lempira/template-gallery/tree/main/examples/frontend-example-1-astro"
    templates:
      - source: "templates/astro-ts"
        data:
          project_name: "Frontend Example 1 - Astro"
          description: "A basic frontend example using Astro"
          author: ""
          git_init: false
          install_dependencies: false
      - source: "templates/frontend-example-1"
        data:
          framework_choice: "astro"

  - id: "frontend-example-1-react"
    author: "Algorand Foundation"
    title: "Frontend Example 1 - React"
    description: "A modern web application template built with React and TypeScript, featuring component-based architecture and CSS modules support. This template provides a solid foundation for building interactive user interfaces with excellent developer experience. Perfect for single-page applications, dynamic web apps, or any frontend project requiring robust state management and component reusability."
    image: "https://images.unsplash.com/photo-1481883814866-f6e972dd8916?q=80&w=2588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    tags:
      - react
      - typescript
    features:
      - "Component-based architecture"
      - "Basic React setup"
      - "CSS modules support"
    links:
      demo: "https://example.com/demo/frontend-example-1-react"
      source: "https://github.com/lempira/template-gallery/tree/main/examples/frontend-example-1-react"
    templates:
      - source: "templates/vite-react-ts"
        data:
          project_name: "Frontend Example 1 - React"
          description: "A basic frontend example using React"
          author: ""
          git_init: false
          install_dependencies: false
      - source: "templates/frontend-example-1"
        data:
          framework_choice: "react"
          project_name: "Frontend Example 1 - React"
          description: "A basic frontend example using React"

  - id: python-smart-contract
    author: "Algorand Foundation"
    title: "Python Smart Contract Example"
    description: "A comprehensive Python-based smart contract template for the Algorand blockchain. This template demonstrates how to create, test, and deploy smart contracts using PyTeal, featuring best practices for contract development, testing frameworks, and deployment scripts. Perfect for developers looking to build secure and efficient smart contracts on Algorand."
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    tags:
      - python
      - pyteal
      - smart-contract
    features:
      - "PyTeal contract implementation"
      - "Unit testing setup"
      - "Deployment scripts"
      - "Contract interaction examples"
    links:
      demo: "https://example.com/demo/python-smart-contract"
      source: "https://github.com/lempira/template-gallery/tree/main/examples/python-smart-contract"
    templates:
      - source: "templates/python-smart-contract"
        data:
          project_name: "Python Smart Contract Example"
          author_name: ""
          author_email: ""
          contract_name: "hello_world"
          preset_name: "starter"
          deployment_language: "python"
          use_workspace: false

  - id: typescript-smart-contract
    author: "Algorand Foundation"
    title: "TypeScript Smart Contract Example"
    description: "A modern TypeScript-based smart contract template for the Algorand blockchain. This template showcases how to develop, test, and deploy smart contracts using TEALScript, featuring type-safe contract development, automated testing, and deployment utilities. Ideal for developers who prefer TypeScript's strong typing and modern development features while building Algorand smart contracts."
    image: "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=2558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    tags:
      - typescript
      - tealscript
      - smart-contract
    features:
      - "TEALScript contract implementation"
      - "TypeScript-based testing framework"
      - "Automated deployment scripts"
      - "Type-safe contract interactions"
    links:
      demo: "https://example.com/demo/typescript-smart-contract"
      source: "https://github.com/lempira/template-gallery/tree/main/examples/typescript-smart-contract"
    templates:
      - source: "templates/typescript-smart-contract"
        data:
          project_name: "TypeScript Smart Contract Example"
          author_name: ""
          author_email: ""
          contract_name: "hello_world"
          preset_name: "starter"
          deployment_language: "typescript"
          use_workspace: false
`;

  try {
    const parsed = yaml.load(yamlContent) as { examples: Example[] };
    return parsed.examples;
  } catch (error) {
    console.error("Error parsing YAML:", error);
    return [];
  }
}
