'use client';

import { motion } from 'framer-motion';

export type YouTubeEmbedProps = {
  /** Embed id found in the YouTube video iframe share code snippet */
  embedId: string;
};

export default function YouTubeEmbed({ embedId }: YouTubeEmbedProps) {
  return (
    <motion.iframe
      className='aspect-video h-48 rounded-xl bg-gray-500'
      src={`https://www.youtube.com/embed/${embedId}`}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
    />
  );
}
