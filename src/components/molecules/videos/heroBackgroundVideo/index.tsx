'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

/** Hero background video that dynamically switches based on the current theme of the site. */
export default function HeroBackgroundVideo() {
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();
  const src = `/videos/hero${theme === 'dark' ? '-dark' : ''}.mp4`;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence mode='sync'>
      <motion.video
        key={src}
        src={src}
        className='absolute z-10 h-full w-full translate-y-20 scale-125 object-cover'
        autoPlay
        muted
        loop
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </AnimatePresence>
  );
}
