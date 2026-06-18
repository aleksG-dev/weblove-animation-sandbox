export type Level = {
  number: number;
  slug: string;
  title: string;
  blurb: string;
};

export const levels: Level[] = [
  {
    number: 1,
    slug: 'level1',
    title: 'Reveal & Counters',
    blurb: 'Letter-by-letter headline reveals and rolling-number metrics.',
  },
  {
    number: 2,
    slug: 'level2',
    title: 'Scroll Storytelling',
    blurb: 'Lenis smooth scroll with scroll-triggered reveals.',
  },
  {
    number: 3,
    slug: 'level3',
    title: 'Micro-interactions',
    blurb: 'Hover, magnetic buttons, and springy UI feedback.',
  },
  {
    number: 4,
    slug: 'level4',
    title: 'GSAP Timelines',
    blurb: 'Sequenced, choreographed multi-element animations.',
  },
  {
    number: 5,
    slug: 'level5',
    title: 'Page Transitions',
    blurb: 'Animated route changes and shared-element motion.',
  },
  {
    number: 6,
    slug: 'level6',
    title: '3D with R3F',
    blurb: 'React Three Fiber scenes reacting to scroll and pointer.',
  },
  {
    number: 7,
    slug: 'level7',
    title: 'The Showcase',
    blurb: 'Everything combined into one polished, shippable site.',
  },
];
