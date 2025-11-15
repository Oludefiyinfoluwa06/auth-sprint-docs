# Auth Sprint Docs

Professional documentation landing page for the [Auth Sprint CLI](https://github.com/Oludefiyinfoluwa06/auth-sprint-cli) - a lightweight CLI tool that scaffolds authentication boilerplate in seconds.

## Overview

This is a [Next.js 15](https://nextjs.org) documentation site built with TypeScript, Tailwind CSS, and Lucide React icons. It provides a comprehensive guide to using the Auth Sprint CLI, including quick start instructions, command references, template documentation, and contribution guidelines.

## Features

- **Responsive Design** - Mobile-first, fully responsive layout that works seamlessly across all devices
- **Dark Mode Support** - Built-in light and dark mode with system preference detection
- **Component-Based Architecture** - Modular React components for maintainability and reusability
- **Interactive Code Blocks** - Copy-to-clipboard functionality for command examples
- **Lucide Icons** - Professional SVG icons for visual clarity and consistency
- **Fast Performance** - Optimized with Next.js Turbopack for rapid builds

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Runtime**: Node.js 18+

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout with dark mode support
│   └── globals.css           # Global styles & CSS variables
└── components/
    ├── Header.tsx            # Sticky navigation header
    ├── Hero.tsx              # Hero section with install guide
    ├── QuickStart.tsx        # 5-step quickstart guide
    ├── Commands.tsx          # CLI options reference
    ├── Templates.tsx         # Built-in template cards
    ├── Footer.tsx            # Multi-column footer
    └── CodeBlock.tsx         # Reusable code display component
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Installation

```bash
# Clone the repository
cd auth-sprint-docs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you make changes.

## Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack (default: port 3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Components

### Header

Sticky navigation header with Auth Sprint branding and quick links to main sections.

### Hero

Hero section with headline, value proposition, and installation instructions with copy-to-clipboard.

### QuickStart

Step-by-step guide to get started with the CLI, including environment variable setup.

### Commands

Reference for CLI options and flags (framework, strategy) with usage examples.

### Templates

Card-based gallery showcasing built-in authentication templates (Controller, Middleware, Routes).

### Footer

Multi-column footer with documentation links, community resources, and GitHub links.

### CodeBlock

Reusable component for displaying code with syntax highlighting and copy button functionality.

## Styling & Theme

The project uses CSS variables for theming with automatic dark mode support:

- **Light Mode**: Clean slate colors (900/50) with blue accents
- **Dark Mode**: Dark slate backgrounds (50/950) with blue accents
- **Accent Color**: Blue (600 light / 400 dark)

CSS variables are defined in `globals.css` and automatically apply based on `prefers-color-scheme` system preference.

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com), created by the Next.js team:

```bash
npm install -g vercel
vercel
```

### Other Platforms

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for guides on deploying to AWS, Netlify, Docker, and other platforms.

## Resources

- [Auth Sprint CLI](https://github.com/Oludefiyinfoluwa06/auth-sprint-cli)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

## License

This project is open source and available under the MIT License.

## Support

Found an issue or have a suggestion? [Open an issue](https://github.com/Oludefiyinfoluwa06/auth-sprint-cli/issues) on the main repository.
