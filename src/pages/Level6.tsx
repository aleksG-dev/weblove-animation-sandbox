import { Suspense } from 'react';
import { BackLink } from '../components/BackLink';
import { BlobScene } from '../scenes/BlobScene';

export function Level6() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-20">
      <BackLink />

      <section className="mt-16">
        <span className="font-mono text-sm text-accent">Level 06</span>
        <h1 className="mt-4 font-display text-5xl font-bold sm:text-6xl">
          3D with React Three Fiber.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/60">
          A distorted, floating icosahedron rendered with WebGL. Drag it to
          orbit — it keeps spinning and morphing on its own.
        </p>
      </section>

      <div className="mt-10 h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
        <Suspense fallback={null}>
          <BlobScene />
        </Suspense>
      </div>

      <p className="mt-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-white/40">
        drag to orbit · auto-rotating
      </p>
    </main>
  );
}
