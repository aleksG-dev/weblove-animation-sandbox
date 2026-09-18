# Weblove — React Animation Lab

A front-end learning project exploring web animation through seven separate routes.

## What is included

The current application routes to dedicated `Level1` through `Level7` components using lazy loading. These are no longer all placeholder canvases, despite the earlier README.

Topics are organised around headline reveals and counters, scroll storytelling, micro-interactions, timelines, page transitions, 3D and a combined showcase.

## Stack

React 18, TypeScript, Vite, Tailwind CSS, React Router, GSAP, Framer Motion, Lenis and React Three Fiber.

## Run locally

Install Node.js and npm compatible with Vite 5, then:

```bash
npm ci
npm run dev
```

Open the URL printed by Vite. The home page links to `/level1` through `/level7`.

```bash
npm run build
npm run preview
```

The build script runs TypeScript checking before the Vite build.

## Project layout

- `src/App.tsx` — lazy-loaded routes and fallback handling.
- `src/pages/` — home page and level implementations.
- `src/components/` — reusable animation and interface components.
- `src/animations/` — smooth-scroll hook.
- `src/scenes/` — 3D scene.
- `src/data/levels.ts` — level metadata.

## Status and limitations

This is a learning/demo project, not a client delivery. Numbers shown in demonstration UI, such as Lighthouse scores and frame rates, should not be treated as measured results. Browser behaviour, accessibility and performance still require testing before making portfolio claims.

A Vercel configuration is included; deployment availability has not been verified.
