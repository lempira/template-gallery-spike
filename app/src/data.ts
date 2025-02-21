import yaml from "js-yaml";
import type { Example } from "./types/example";

export async function fetchExamplesYaml(): Promise<Example[]> {
  // Simulating API latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  const yamlContent = `examples:
  - id: "frontend-example-1-astro"
    type: "frontend"
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
      demo: "https://lempira.github.io/template-gallery-spike/frontend-example-1-astro/"
      codesandbox: "https://githubbox.com/lempira/template-gallery-spike/tree/main/examples/frontend-example-1-astro"
      source: "https://github.com/lempira/template-gallery-spike/tree/main/examples/frontend-example-1-astro"
    templates:
      - source: "templates/base-templates/frontend-astro"
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
    type: "frontend"
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
      demo: "https://lempira.github.io/template-gallery-spike/frontend-example-1-react/"
      codesandbox: "https://githubbox.com/lempira/template-gallery-spike/tree/main/examples/frontend-example-1-react"
      source: "https://github.com/lempira/template-gallery-spike/tree/main/examples/frontend-example-1-react"
    templates:
      - source: "templates/base-templates/frontend-vite-react"
        data:
          project_name: "Frontend Example 1 - React"
          description: "A basic frontend example using React"
          author: ""
          git_init: false
          install_dependencies: false
      - source: "templates/frontend-example-1"
        data:
          framework_choice: "react"

  - id: tictactoe-smart-contract
    type: "smart-contract"
    author: "Algorand Foundation"
    title: "Tic Tac Toe Smart Contract Example"
    description: "A comprehensive Python-based smart contract template for the Algorand blockchain. This template demonstrates how to create, test, and deploy smart contracts using Algorand Python, featuring best practices for contract development, testing frameworks, and deployment scripts. Perfect for developers looking to build secure and efficient smart contracts on Algorand."
    image: "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    tags:
      - python
      - Algorand Python
      - smart-contract
    features:
      - "Algorand Python contract implementation"
      - "Unit testing setup"
      - "Deployment scripts"
      - "Contract interaction examples"
    links:
      source: "https://github.com/lempira/template-gallery-spike/tree/main/examples/tictactoe-smart-contract"
      codespaces: "https://codespaces.new/lempira/template-gallery-spike/tree/examples/tictactoe-smart-contract"
    templates:
      - source: "templates/base-templates/python-smart-contract"
        data:
          project_name: "Python Smart Contract Example"
          author_name: ""
          author_email: ""
          contract_name: "hello_world"
          preset_name: "starter"
          deployment_language: "python"
          use_workspace: false
      - source: "templates/smart-contract-example-tictactoe"
        data:
          framework_choice: "python"

  - id: voting-smart-contract
    type: "smart-contract"
    author: "Algorand Foundation"
    title: "Voting Smart Contract Example"
    description: "A modern TypeScript-based smart contract template for the Algorand blockchain. This template showcases how to develop, test, and deploy smart contracts using Algorand Typescript, featuring type-safe contract development, automated testing, and deployment utilities. Ideal for developers who prefer TypeScript's strong typing and modern development features while building Algorand smart contracts."
    image: "https://images.unsplash.com/photo-1527873722743-67759f0854aa?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    tags:
      - typescript
      - smart-contract
    features:
      - "Algorand Typescript contract implementation"
      - "TypeScript-based testing framework"
      - "Automated deployment scripts"
      - "Type-safe contract interactions"
    links:
      source: "https://github.com/lempira/template-gallery-spike/tree/main/examples/voting-smart-contract"
      codespaces: "https://codespaces.new/lempira/template-gallery-spike/tree/examples/voting-smart-contract"
    templates:
      - source: "templates/base-templates/typescript-smart-contract"
        data:
          project_name: "TypeScript Smart Contract Example"
          author_name: ""
          author_email: ""
          contract_name: "hello_world"
          preset_name: "starter"
          deployment_language: "typescript"
          use_workspace: false
      - source: "templates/smart-contract-example-voting"
        data:
          framework_choice: "typescript"

  - id: hello-world-python-smart-contract
    type: "smart-contract"
    author: "Algorand Foundation"
    title: "Hello World Smart Contract - Python"
    description: "A beginner-friendly Python smart contract template for the Algorand blockchain. This template provides a simple introduction to smart contract development using Algorand Python, with a basic 'Hello World' implementation. Perfect for developers getting started with Algorand smart contract development and looking to understand the fundamentals of Algorand Python."
    image: "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=2558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    tags:
      - python
      - smart-contract
      - beginner
    features:
      - "Basic Algorand Python contract structure"
      - "Simple state management"
      - "Contract deployment example"
      - "Basic testing setup"
    links:
      source: "https://github.com/lempira/template-gallery-spike/tree/main/examples/hello-world-python-smart-contract"
      codespaces: "https://codespaces.new/lempira/template-gallery-spike/tree/examples/hello-world-python-smart-contract"
    templates:
      - source: "templates/base-templates/python-smart-contract"
        data:
          project_name: "Hello World Python Smart Contract"
          author_name: ""
          author_email: ""
          contract_name: "hello_world"
          preset_name: "starter"
          deployment_language: "python"
          use_workspace: false
      - source: "templates/smart-contract-example-hello-world"
        data:
          framework_choice: "python"

  - id: hello-world-typescript-smart-contract
    type: "smart-contract"
    author: "Algorand Foundation"
    title: "Hello World Smart Contract - TypeScript"
    description: "A beginner-friendly TypeScript smart contract template for the Algorand blockchain. This template demonstrates the basics of smart contract development using Algorand Typescript through a simple 'Hello World' implementation. Ideal for developers who want to start building Algorand smart contracts with the benefits of TypeScript's type safety and modern development features."
    image: "https://images.unsplash.com/photo-1539192262370-c2e258ff1cf5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    tags:
      - typescript
      - smart-contract
      - beginner
    features:
      - "Basic Algorand Typescript contract structure"
      - "Type-safe state management"
      - "Contract deployment setup"
      - "TypeScript-based testing"
    links:
      source: "https://github.com/lempira/template-gallery-spike/tree/main/examples/hello-world-typescript-smart-contract"
      codespaces: "https://codespaces.new/lempira/template-gallery-spike/tree/examples/hello-world-typescript-smart-contract"
    templates:
      - source: "templates/base-templates/typescript-smart-contract"
        data:
          project_name: "Hello World TypeScript Smart Contract"
          author_name: ""
          author_email: ""
          contract_name: "hello_world"
          preset_name: "starter"
          deployment_language: "typescript"
          use_workspace: false
      - source: "templates/smart-contract-example-hello-world"
        data:
          framework_choice: "typescript"

  - id: "dapp-basic"
    type: "dapp"
    author: "Algorand Foundation"
    title: "Basic DApp"
    description: "A comprehensive fullstack template combining a Python smart contract with a React frontend. This template demonstrates how to build and integrate a simple counter smart contract with a modern React user interface. Perfect for developers looking to understand the full development cycle of a decentralized application on Algorand."
    image: "https://images.unsplash.com/photo-1539477857993-860599c2e840?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    tags:
      - python
      - react
      - typescript
      - fullstack
    features:
      - "Python smart contract implementation"
      - "React frontend with TypeScript"
      - "Contract interaction examples"
      - "Full integration setup"
    links:
      source: "https://github.com/lempira/template-gallery-spike/tree/main/examples/dapp-basic"
      codespaces: "https://codespaces.new/lempira/template-gallery-spike/tree/examples/dapp-basic"
    templates:
      - source: "templates/base-templates/dapp-template"
        data:
          project_name: "dApp-basic"
          author_name: ""
          author_email: ""
          contract_name: "counter"
          preset_name: "starter"
          deployment_language: "python"
          use_workspace: true
          contract_template: "python"
          python_path: ""
          ide_vscode: true
          ide_jetbrains: false
          use_github_actions: false
          cloud_provider: "none"
      - source: "templates/base-templates/python-smart-contract"
        destination: "examples/dapp-basic/projects/dApp-basic-contracts"
        data:
          project_name: "Python Smart Contract Example"
          author_name: ""
          author_email: ""
          contract_name: "hello_world"
          preset_name: "starter"
          deployment_language: "python"
          use_workspace: false
      - source: "templates/base-templates/frontend-vite-react"
        destination: "examples/dapp-basic/projects/dApp-basic-frontend"
        data:
          project_name: "Counter Frontend"
          description: "React frontend for the counter smart contract"
          author: ""
          git_init: false
          install_dependencies: false
`;

  try {
    const parsed = yaml.load(yamlContent) as { examples: Example[] };
    return parsed.examples;
  } catch (error) { 
    console.error("Error parsing YAML:", error);
    return [];
  }
}
