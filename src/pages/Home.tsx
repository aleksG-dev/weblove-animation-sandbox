import { motion } from 'framer-motion';
import { LevelCard } from '../components/LevelCard';
import { levels } from '../data/levels';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const heading = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 py-20">
      <motion.header
        variants={container}
        initial="hidden"
        animate="visible"
        className="mb-16"
      >
        <motion.p
          variants={heading}
          className="font-mono text-sm uppercase tracking-[0.2em] text-accent"
        >
          Weblove · Animation Sandbox
        </motion.p>
        <motion.h1
          variants={heading}
          className="mt-4 font-display text-5xl font-bold leading-[1.05] sm:text-6xl"
        >
          Build insane websites,
          <br />
          one level at a time.
        </motion.h1>
        <motion.p
          variants={heading}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/60"
        >
          One repo, seven levels. Each card opens the canvas where that level's
          main quest gets built.
        </motion.p>
      </motion.header>

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {levels.map((level) => (
          <LevelCard key={level.slug} level={level} />
        ))}
      </motion.section>
    </main>
  );
}
