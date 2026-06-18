import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * A thin progress bar pinned to the top of the viewport that tracks
 * how far down the page the user has scrolled.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-accent"
    />
  );
}
