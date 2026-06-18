import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { useSmoothScroll } from '../animations/useSmoothScroll';
import { ScrollProgress } from '../components/ScrollProgress';
import { AnimatedHeadline } from '../components/AnimatedHeadline';
import { MagneticButton } from '../components/MagneticButton';
import { Reveal } from '../components/Reveal';
import { RollingNumber } from '../components/RollingNumber';
import { BackLink } from '../components/BackLink';
import { BlobScene } from '../scenes/BlobScene';
import { levels } from '../data/levels';

export function Level7() {
  useSmoothScroll();

  return (
    <div className="relative">
      <ScrollProgress />
      <div className="fixed left-6 top-6 z-40">
        <BackLink />
      </div>

      {/* Hero: 3D backdrop + animated headline + magnetic CTA */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <Suspense fallback={null}>
            <BlobScene />
          </Suspense>
        </div>
        <div className="relative z-10 text-center">
          <span className="font-mono text-sm text-accent">Level 07</span>
          <div className="mt-4">
            <AnimatedHeadline text="The showcase." />
          </div>
          <p className="mx-auto mt-6 max-w-md text-white/60">
            Everything combined — reveals, smooth scroll, micro-interactions,
            timelines and 3D, in one polished, shippable page.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/">
              <MagneticButton className="rounded-full bg-accent px-8 py-3 font-display font-semibold text-ink">
                Back to all levels
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats recap */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Seven levels, one stack.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { v: 7, s: '', label: 'Levels shipped' },
            { v: 6, s: '', label: 'Animation libraries' },
            { v: 100, s: '%', label: 'Reduced-motion safe' },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-4xl font-bold text-accent">
                  <RollingNumber to={stat.v} suffix={stat.s} />
                </div>
                <p className="mt-2 text-sm text-white/50">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Level recap grid */}
      <section className="mx-auto max-w-4xl px-6 pb-32">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {levels.map((l, i) => (
            <Reveal key={l.slug} delay={(i % 2) * 0.08}>
              <Link
                to={`/${l.slug}`}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors hover:border-accent/60"
              >
                <span className="font-display font-medium">{l.title}</span>
                <span className="font-mono text-sm text-accent">
                  {String(l.number).padStart(2, '0')}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
