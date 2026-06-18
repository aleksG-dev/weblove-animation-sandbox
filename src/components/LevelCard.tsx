import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Level } from '../data/levels';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function LevelCard({ level }: { level: Level }) {
  return (
    <motion.div variants={cardVariants}>
      <Link
        to={`/${level.slug}`}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 ease-snap hover:border-accent/60 hover:bg-white/[0.06]"
      >
        <div className="flex items-start justify-between">
          <span className="font-mono text-sm text-accent">
            {String(level.number).padStart(2, '0')}
          </span>
          <ArrowUpRight
            size={20}
            className="text-white/40 transition-transform duration-300 ease-snap group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>

        <div className="mt-10">
          <h3 className="font-display text-xl font-semibold">{level.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            {level.blurb}
          </p>
        </div>

        <span
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
        />
      </Link>
    </motion.div>
  );
}
