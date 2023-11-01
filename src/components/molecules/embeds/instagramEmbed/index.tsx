'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const variants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      bounce: 0.4,
      duration: 1,
      delay: 0.5,
    },
  },
};

export type InstagramEmbedProps = {
  src: string;
  alt: string;
};

export default function InstagramEmbed({ src, alt }: InstagramEmbedProps) {
  return (
    <motion.div
      variants={variants}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      className='relative h-24 w-24 cursor-pointer overflow-hidden rounded-xl md:h-36 md:w-36'
    >
      <Image src={src} alt={alt} fill className='object-cover' />
    </motion.div>
  );
}
