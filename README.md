# React + TypeScript + Vite + Tailwind CSS

This project is set up with:

- ⚛️ **React 19** - A JavaScript library for building user interfaces
- 📘 **TypeScript** - JavaScript with syntax for types
- ⚡ **Vite** - Next generation frontend tooling
- 🎨 **Tailwind CSS** - A utility-first CSS framework
- 🚀 **Bun** - Fast all-in-one JavaScript runtime

## Getting Started

### Install Dependencies

```bash
bun install
```

### Run Development Server

```bash
bun dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## Project Structure

```
verti-stage-pop/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Tailwind CSS imports
├── public/              # Static assets
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies
```

## Tailwind CSS

Tailwind CSS is configured and ready to use. You can use utility classes directly in your JSX:

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">Hello, Tailwind!</div>
```

## Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Bun Documentation](https://bun.sh)
