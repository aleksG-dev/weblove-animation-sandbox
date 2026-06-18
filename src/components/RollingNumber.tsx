import { useEffect, useState } from 'react';
import { animate, useMotionValue } from 'framer-motion';

type RollingNumberProps = {
  to: number;
  duration?: number;
  suffix?: string;
};

export function RollingNumber({
  to,
  duration = 1.6,
  suffix = '',
}: RollingNumberProps) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      setDisplay(to);
      return;
    }

    const controls = animate(count, to, {
      duration,
      ease: [0.32, 0.72, 0, 1],
      onUpdate: (value) => setDisplay(Math.round(value)),
    });

    return () => controls.stop();
  }, [count, to, duration]);

  return (
    <span className="font-display tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
