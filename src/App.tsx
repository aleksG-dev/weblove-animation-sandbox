import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { LevelPage } from './pages/LevelPage';
import { levels } from './data/levels';

// Route-level code splitting: each level (and the heavy Three.js scenes it
// may pull in) ships as its own chunk, keeping the landing page lightweight.
const Level1 = lazy(() => import('./pages/Level1').then((m) => ({ default: m.Level1 })));
const Level2 = lazy(() => import('./pages/Level2').then((m) => ({ default: m.Level2 })));
const Level3 = lazy(() => import('./pages/Level3').then((m) => ({ default: m.Level3 })));
const Level4 = lazy(() => import('./pages/Level4').then((m) => ({ default: m.Level4 })));
const Level5 = lazy(() => import('./pages/Level5').then((m) => ({ default: m.Level5 })));
const Level6 = lazy(() => import('./pages/Level6').then((m) => ({ default: m.Level6 })));
const Level7 = lazy(() => import('./pages/Level7').then((m) => ({ default: m.Level7 })));

const customLevels = new Set([
  'level1',
  'level2',
  'level3',
  'level4',
  'level5',
  'level6',
  'level7',
]);

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <span className="font-mono text-sm text-white/40">loading…</span>
    </div>
  );
}

export function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level1" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
        <Route path="/level4" element={<Level4 />} />
        <Route path="/level5" element={<Level5 />} />
        <Route path="/level6" element={<Level6 />} />
        <Route path="/level7" element={<Level7 />} />
        {levels
          .filter((l) => !customLevels.has(l.slug))
          .map((l) => (
            <Route
              key={l.slug}
              path={`/${l.slug}`}
              element={<LevelPage level={l} />}
            />
          ))}
        <Route path="*" element={<LevelPage notFound />} />
      </Routes>
    </Suspense>
  );
}
