import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BackLink } from '../components/BackLink';

const views = [
  {
    id: 'design',
    title: 'Design',
    body: 'Transitions tell the reader where they came from and where they are going.',
  },
  {
    id: 'build',
    title: 'Build',
    body: 'AnimatePresence keeps the outgoing view alive just long enough to animate it out.',
  },
  {
    id: 'ship',
    title: 'Ship',
    body: 'A shared element morphs between views, stitching the whole flow together.',
  },
];

export function Level5() {
  const [active, setActive] = useState(0);
  const view = views[active];

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-20">
      <BackLink />

      <section className="mt-16">
        <span className="font-mono text-sm text-accent">Level 05</span>
        <h1 className="mt-4 font-display text-5xl font-bold sm:text-6xl">
          Page transitions.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/60">
          Switch tabs below — the panel cross-fades and slides, and the accent
          pill morphs to the active tab with a shared-layout animation.
        </p>
      </section>

      <div className="mt-12 inline-flex gap-1 rounded-full border border-white/10 bg-white/5 p-1">
        {views.map((v, i) => (
          <button
            key={v.id}
            onClick={() => setActive(i)}
            className="relative rounded-full px-5 py-2 text-sm font-medium"
          >
            {active === i && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span
              className={`relative z-10 ${
                active === i ? 'text-ink' : 'text-white/70'
              }`}
            >
              {v.title}
            </span>
          </button>
        ))}
      </div>

      <div className="relative mt-8 h-56 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={view.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 className="font-display text-3xl font-bold">{view.title}</h2>
            <p className="mt-3 max-w-lg text-white/60">{view.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
