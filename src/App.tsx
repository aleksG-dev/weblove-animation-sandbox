import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Level1 } from './pages/Level1';
import { Level2 } from './pages/Level2';
import { LevelPage } from './pages/LevelPage';
import { levels } from './data/levels';

const customLevels = new Set(['level1', 'level2']);

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/level1" element={<Level1 />} />
      <Route path="/level2" element={<Level2 />} />
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
  );
}
