import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { BackLink } from '../components/BackLink';
import { MagneticButton } from '../components/MagneticButton';

gsap.registerPlugin(useGSAP);

const bars = Array.from({ length: 7 }, (_, i) => i);

export function Level4() {
  const scope = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .from('.gsap-title', {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        })
        .from(
          '.gsap-bar',
          {
            scaleY: 0,
            transformOrigin: 'bottom',
            stagger: 0.08,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.2'
        )
        .from(
          '.gsap-cta',
          { opacity: 0, y: 20, duration: 0.4, ease: 'power2.out' },
          '-=0.1'
        );
    },
    { scope }
  );

  const replay = contextSafe(() => {
    tl.current?.restart();
  });

  return (
    <main ref={scope} className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <BackLink />

      <section className="mt-16">
        <span className="font-mono text-sm text-accent">Level 04</span>
        <h1 className="gsap-title mt-4 font-display text-5xl font-bold sm:text-6xl">
          GSAP timelines.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/60">
          One timeline, choreographed. Title, then bars stagger up, then the
          button arrives — sequenced down to the millisecond.
        </p>
      </section>

      <section className="mt-16 flex h-56 items-end gap-3">
        {bars.map((b) => (
          <div
            key={b}
            className="gsap-bar flex-1 rounded-t-lg bg-accent/80"
            style={{ height: `${40 + ((b * 37) % 60)}%` }}
          />
        ))}
      </section>

      <div className="gsap-cta mt-10">
        <MagneticButton
          onClick={replay}
          className="rounded-full border border-white/20 px-7 py-3 font-display font-semibold transition-colors hover:border-accent"
        >
          ▶ Replay timeline
        </MagneticButton>
      </div>
    </main>
  );
}
