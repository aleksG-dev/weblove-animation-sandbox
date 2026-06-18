import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Heart } from 'lucide-react';
import { BackLink } from '../components/BackLink';
import { MagneticButton } from '../components/MagneticButton';

function SpringyCard({ label, desc }: { label: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
    >
      <h3 className="font-display text-lg font-semibold">{label}</h3>
      <p className="mt-2 text-sm text-white/55">{desc}</p>
    </motion.div>
  );
}

function CopyChip() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      }}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-sm transition-colors hover:border-accent/60"
    >
      <motion.span
        key={copied ? 'check' : 'copy'}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="inline-flex"
      >
        {copied ? (
          <Check size={16} className="text-accent" />
        ) : (
          <Copy size={16} />
        )}
      </motion.span>
      {copied ? 'copied!' : 'npm run dev'}
    </button>
  );
}

function LikeToggle() {
  const [liked, setLiked] = useState(false);
  return (
    <motion.button
      onClick={() => setLiked((v) => !v)}
      whileTap={{ scale: 0.85 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm"
    >
      <motion.span
        animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <Heart
          size={16}
          className={liked ? 'fill-accent text-accent' : 'text-white/60'}
        />
      </motion.span>
      {liked ? 'loved' : 'like'}
    </motion.button>
  );
}

export function Level3() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <BackLink />

      <section className="mt-16">
        <span className="font-mono text-sm text-accent">Level 03</span>
        <h1 className="mt-4 font-display text-5xl font-bold sm:text-6xl">
          Micro-interactions.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/60">
          The tiny moments — a button that leans in, a card that springs, a tap
          that confirms. Hover and click everything below.
        </p>
      </section>

      <section className="mt-14 flex flex-wrap items-center gap-4">
        <MagneticButton className="rounded-full bg-accent px-7 py-3 font-display font-semibold text-ink">
          Magnetic button
        </MagneticButton>
        <CopyChip />
        <LikeToggle />
      </section>

      <section className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <SpringyCard label="Spring" desc="Lifts and scales with a natural spring on hover." />
        <SpringyCard label="Feedback" desc="Every action confirms itself instantly." />
        <SpringyCard label="Restraint" desc="Subtle beats flashy. Motion with purpose." />
      </section>
    </main>
  );
}
