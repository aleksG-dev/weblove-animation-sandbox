import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Level1 } from './pages/Level1';
import { LevelPage } from './pages/LevelPage';
import { levels } from './data/levels';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/level1" element={<Level1 />} />
      {levels
        .filter((l) => l.slug !== 'level1')
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
