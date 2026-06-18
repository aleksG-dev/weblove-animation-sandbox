# Project · Weblove Animation Sandbox

## What this is
One repo where every quest from the "Build Insane Websites with Claude" course lives,
organised by level. Each route (/level1 … /level7) is the canvas for that level's main
quest output. The homepage links to every level.

## Stack
- React 18, TypeScript, Vite, Tailwind
- React Router for routing
- GSAP for timeline animations
- Framer Motion for UI animations
- Lenis for smooth scroll
- React Three Fiber for 3D

## Performance budget
- Lighthouse Performance >= 90
- LCP < 2.5s, CLS < 0.1
- No animation should run when prefers-reduced-motion is set
- No layout-shifting properties (use transform and opacity)

## Folders
- /src/components — reusable UI
- /src/animations — animation hooks
- /src/scenes — 3D (R3F)
- /src/lib — utils
- /src/pages — route screens (Home + Level1..7)
- /src/data — static data (levels list)

## Conventions
- Named exports only
- Animation hooks live in /src/animations
- No inline keyframes, use Tailwind transitions or GSAP
- All copy in src/copy.ts when copy grows beyond a few strings
