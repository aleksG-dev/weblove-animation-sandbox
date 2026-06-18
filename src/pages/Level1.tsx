import { motion } from 'framer-motion';
import { BackLink } from '../components/BackLink';
import { AnimatedHeadline } from '../components/AnimatedHeadline';
import { RollingNumber } from '../components/RollingNumber';

const stats = [
  { value: 98, suffix: '', label: 'Lighthouse score' },
  { value: 60, suffix: 'fps', label: 'Buttery animation' },
  { value: 7, suffix: '', label: 'Levels to master' },
];

export function Level1() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-20">
      <BackLink />

      <section className="mt-16">
        <span className="font-mono text-sm text-accent">Level 01</span>
        <div className="mt-4">
          <AnimatedHeadline text="Motion makes it feel alive." />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 max-w-xl text-lg text-white/60"
        >
          The headline above reveals letter by letter. The numbers below roll up
          on load. Both respect prefers-reduced-motion.
        </motion.p>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="text-4xl font-bold text-accent">
              <RollingNumber to={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm text-white/50">{stat.label}</p>
          </div>
        ))}
      </motion.section>
    </main>
  );
}
