'use client';

import { motion, Variants } from 'framer-motion';

import { YouTubeEmbed } from '@/components/molecules';

const motionVariants: Variants = {
  onscreen: {
    transition: {
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  }, // The magic happens here
};

const liMotionVariants: Variants = {
  offscreen: { y: 25, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { duration: 1 } }, // The magic happens here
};

export default function YoutubeEmbedCardList() {
  return (
    <motion.ul
      variants={motionVariants}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      className='flex flex-wrap gap-10'
    >
      <motion.li
        variants={liMotionVariants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
      >
        <YouTubeEmbed embedId='bBJj3zCAfBw?si=y-c1rupdElfAN2f2' />
      </motion.li>
      <motion.li
        variants={liMotionVariants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
      >
        <YouTubeEmbed embedId='zofBinqC2F4?si=fsJ_7FB6ik2aNDM4' />
      </motion.li>
      <motion.li
        variants={liMotionVariants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
      >
        <YouTubeEmbed embedId='6tYrzUmLnu8?si=UdWEO9KY29aAjk7a' />
      </motion.li>
      <motion.li
        variants={liMotionVariants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
      >
        <YouTubeEmbed embedId='bBJj3zCAfBw?si=y-c1rupdElfAN2f2' />
      </motion.li>
      <motion.li
        variants={liMotionVariants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
      >
        <YouTubeEmbed embedId='zofBinqC2F4?si=fsJ_7FB6ik2aNDM4' />
      </motion.li>
      <motion.li
        variants={liMotionVariants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
      >
        <YouTubeEmbed embedId='6tYrzUmLnu8?si=UdWEO9KY29aAjk7a' />
      </motion.li>
    </motion.ul>
  );
}
