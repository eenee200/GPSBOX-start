# GPSBOX — Real-time Visibility Platform

A production-grade React + TypeScript landing page for GPSBOX, a Mongolian fleet tracking SaaS platform.

## Tech Stack

- **React 18** with TypeScript (TSX)
- **Vite** for fast development & bundling
- **CSS Modules** for scoped, component-level styles
- **No external UI libraries** — pure custom CSS

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── styles/
│   └── globals.css              # CSS variables, resets, utilities
├── types/
│   └── index.ts                 # Shared TypeScript interfaces
├── components/
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   ├── Navbar.module.css
│   │   └── index.ts
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── Hero.module.css
│   │   └── index.ts
│   ├── DashboardCard/
│   │   ├── DashboardCard.tsx
│   │   ├── DashboardCard.module.css
│   │   └── index.ts
│   ├── SectionHeader/
│   │   ├── SectionHeader.tsx
│   │   ├── SectionHeader.module.css
│   │   └── index.ts
│   ├── AboutSection/
│   │   ├── AboutSection.tsx
│   │   ├── AboutSection.module.css
│   │   └── index.ts
│   ├── FeaturesSection/
│   │   ├── FeaturesSection.tsx
│   │   ├── FeaturesSection.module.css
│   │   └── index.ts
│   ├── TechSection/
│   │   ├── TechSection.tsx
│   │   ├── TechSection.module.css
│   │   └── index.ts
│   ├── WhySection/
│   │   ├── WhySection.tsx
│   │   ├── WhySection.module.css
│   │   └── index.ts
│   ├── ContactForm/
│   │   ├── ContactForm.tsx
│   │   ├── ContactForm.module.css
│   │   └── index.ts
│   └── Footer/
│       ├── Footer.tsx
│       ├── Footer.module.css
│       └── index.ts
├── App.tsx                      # Root component, layout composition
└── main.tsx                     # ReactDOM entry point
```

## Design System

All design tokens are CSS custom properties defined in `globals.css`:

- **Colors**: `--color-blue-vivid`, `--color-accent`, `--color-text-*`
- **Spacing**: `--space-xs` through `--space-2xl`
- **Radius**: `--radius-sm` through `--radius-pill`
- **Shadows**: `--shadow-card`, `--shadow-lg`, `--shadow-xl`
- **Typography**: `--font-display` (Geologica), `--font-mono` (JetBrains Mono)
- **Transitions**: `--transition-fast`, `--transition-base`, `--transition-slow`

## Component Conventions

- Each component lives in its own folder with `ComponentName.tsx`, `ComponentName.module.css`, and `index.ts`
- Data/constants are defined at the top of each file
- TypeScript interfaces are in `src/types/index.ts`
- Shared UI primitives (e.g. `SectionHeader`) live in their own component folders
# GPSBOX-start
