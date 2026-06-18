import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.15 },
  },
};

const letter = {
  hidden: { opacity: 0, y: '0.5em' },
  visible: {
    opacity: 1,
    y: '0em',
    transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
  },
};

export function AnimatedHeadline({ text }: { text: string }) {
  const words = text.split(' ');

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
      className="font-display text-5xl font-bold leading-[1.05] sm:text-7xl"
    >
      {words.map((word, wi) => (
        <span key={wi} className="mr-[0.25em] inline-block whitespace-nowrap">
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              variants={letter}
              aria-hidden
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
