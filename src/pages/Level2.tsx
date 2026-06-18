import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useSmoothScroll } from '../animations/useSmoothScroll';
import { ScrollProgress } from '../components/ScrollProgress';
import { Reveal } from '../components/Reveal';
import { BackLink } from '../components/BackLink';

const chapters = [
  {
    kicker: 'Chapter 01',
    title: 'Scroll is the new click.',
    body: 'On a great site, scrolling is the story. Each scroll reveals the next beat — content arrives exactly when the reader is ready for it.',
  },
  {
    kicker: 'Chapter 02',
    title: 'Lenis smooths the ride.',
    body: 'Native scrolling is snappy but jittery. Lenis interpolates it into a buttery glide that makes every transition feel intentional and premium.',
  },
  {
    kicker: 'Chapter 03',
    title: 'Reveal on intersection.',
    body: 'Elements fade and rise the first time they enter the viewport. The page feels alive, responding to the reader instead of dumping everything at once.',
  },
  {
    kicker: 'Chapter 04',
    title: 'Respect the reader.',
    body: 'Smooth scroll and reveals switch off when prefers-reduced-motion is set. Delight should never cost accessibility.',
  },
];

export function Level2() {
  useSmoothScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="relative">
      <ScrollProgress />

      <div className="fixed left-6 top-6 z-40">
        <BackLink />
      </div>

      {/* Hero with a subtle parallax drift */}
      <section
        ref={heroRef}
        className="flex h-screen items-center justify-center overflow-hidden px-6"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="text-center"
        >
          <span className="font-mono text-sm text-accent">Level 02</span>
          <h1 className="mt-4 font-display text-6xl font-bold leading-[1.05] sm:text-8xl">
            Scroll
            <br />
            storytelling.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-white/50">
            Keep scrolling — each chapter reveals itself in turn.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-12 font-mono text-xs uppercase tracking-[0.3em] text-white/40"
          >
            scroll ↓
          </motion.div>
        </motion.div>
      </section>

      {/* Story chapters */}
      <div className="mx-auto max-w-3xl px-6">
        {chapters.map((c) => (
          <section
            key={c.kicker}
            className="flex min-h-screen flex-col justify-center"
          >
            <Reveal>
              <span className="font-mono text-sm text-accent">{c.kicker}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
                {c.title}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
                {c.body}
              </p>
            </Reveal>
          </section>
        ))}

        <section className="flex min-h-screen flex-col items-center justify-center text-center">
          <Reveal>
            <h2 className="font-display text-5xl font-bold sm:text-7xl">
              That's the loop.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-white/50">
              Prompt, generate, refine, ship. Four levels down, three to go.
            </p>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
