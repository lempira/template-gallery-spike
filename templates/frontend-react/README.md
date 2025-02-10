# Vite + React + TypeScript Template

A modern template combining Vite, React, and TypeScript for building fast, type-safe web applications.

## 🚀 Features

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://react.dev/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [SWC](https://swc.rs/) - Super-fast JavaScript/TypeScript compiler
- Hot Module Replacement (HMR)
- ESLint & TypeScript ESLint for code quality
- Strict TypeScript configuration
- Modern ESM bundling
- Optimized production builds

## 🛠️ Getting Started

1. Create a new project using this template:
```bash
npx create-vite@latest my-app --template react-ts
```

2. Navigate to the project directory:
```bash
cd my-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## 📦 Project Structure

```
my-app/
├── public/             # Static assets
├── src/
│   ├── assets/        # Project assets (images, etc.)
│   ├── components/    # React components
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── README.md         # Project documentation
```

## 🔧 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/learn)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [SWC Documentation](https://swc.rs/docs/getting-started)
