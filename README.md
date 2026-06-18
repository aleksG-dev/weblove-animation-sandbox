# Weblove · Animation Sandbox

One repo where every quest from the course lives, organised by level.
Home page links to each level; routes `/level1` … `/level7` are the canvas for that
level's main quest output.

## Stack
React 18 · TypeScript · Vite · Tailwind · React Router · GSAP · Framer Motion · Lenis · React Three Fiber · lucide-react

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
```

## Build
```bash
npm run build
npm run preview
```

## Structure
```
src/
  animations/   animation hooks (useSmoothScroll)
  components/   reusable UI (LevelCard, AnimatedHeadline, RollingNumber, BackLink)
  data/         levels list
  pages/        Home + Level1 (animated hero) + LevelPage (generic level shell)
  scenes/       R3F 3D scenes (add as you reach Level 6)
  lib/          utils
```

## Levels
- **/level1** — Reveal & counters (letter-by-letter headline + rolling numbers)
- **/level2** — Scroll storytelling (Lenis)
- **/level3** — Micro-interactions
- **/level4** — GSAP timelines
- **/level5** — Page transitions
- **/level6** — 3D with React Three Fiber
- **/level7** — The showcase

Each `/levelN` route currently renders a placeholder canvas — replace it with that
level's quest output as you work through the course.
