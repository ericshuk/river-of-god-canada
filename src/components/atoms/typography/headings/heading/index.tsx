'use client';

import { motion, Variants } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const heading = tv({
  base: 'text-3xl drop-shadow-xl',
  variants: {
    level: {
      1: 'text-8xl uppercase text-center',
      2: 'text-6xl uppercase text-center',
      3: 'text-4xl uppercase text-center',
      4: 'text-3xl uppercase text-center',
      5: 'text-2xl uppercase text-center',
      6: 'text-xl uppercase text-center',
    },
  },
});

export type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

const headingMotionVariants: Variants = {
  offscreen: {
    y: 25,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      bounce: 0.4,
      duration: 1,
    },
  },
};

/**
 * Heading component with animation capability
 *
 * @returns
 */
export default function Heading({
  children,
  level,
  className = '',
}: HeadingProps) {
  const HeadingTag = `h${level}` satisfies keyof JSX.IntrinsicElements;

  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      variants={headingMotionVariants}
    >
      <HeadingTag className={twMerge(heading({ level }), className)}>
        {children}
      </HeadingTag>
    </motion.div>
  );
}
