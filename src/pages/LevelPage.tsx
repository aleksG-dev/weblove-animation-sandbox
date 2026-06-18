import { motion } from 'framer-motion';
import { BackLink } from '../components/BackLink';
import type { Level } from '../data/levels';

type LevelPageProps = {
  level?: Level;
  notFound?: boolean;
};

export function LevelPage({ level, notFound }: LevelPageProps) {
  if (notFound || !level) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6">
        <BackLink />
        <h1 className="mt-8 font-display text-4xl font-bold">Lost in space</h1>
        <p className="mt-3 text-white/60">
          That route doesn't exist yet. Head back to pick a level.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-20">
      <BackLink />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="mt-10"
      >
        <span className="font-mono text-sm text-accent">
          Level {String(level.number).padStart(2, '0')}
        </span>
        <h1 className="mt-3 font-display text-5xl font-bold">{level.title}</h1>
        <p className="mt-4 max-w-xl text-lg text-white/60">{level.blurb}</p>

        <div className="mt-12 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center">
          <p className="font-mono text-sm text-white/40">
            This is your canvas for Level {level.number}.
          </p>
          <p className="mt-2 text-white/60">
            Build this level's main quest output right here.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
