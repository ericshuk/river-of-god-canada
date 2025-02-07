'use client';

import { Button } from '@heroui/button';
import axios from 'axios';
import { motion, Variants } from 'framer-motion';
import { BsInstagram } from 'react-icons/bs';
import useSwr from 'swr';

import { InstagramEmbed } from '@/components/molecules/embeds';

type LoremPicsum = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

const variants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.2,
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
};

export default function InstagramEmbedCardList() {
  const { data } = useSwr<LoremPicsum[]>(
    'https://picsum.photos/v2/list?limit=6',
    (url: string) => axios.get(url).then((res) => res.data),
  );

  console.log(data);

  return (
    <div className='flex flex-col items-center gap-16'>
      <motion.div
        variants={variants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
        className='flex flex-wrap items-center justify-center gap-4 md:gap-12'
      >
        {data?.map((post) => (
          <InstagramEmbed key={post.id} src={post.download_url} alt={post.id} />
        ))}
      </motion.div>
      <Button
        variant='bordered'
        radius='full'
        size='lg'
        className='bg-gradient-to-tr from-purple-500 to-orange-500 text-white shadow-lg'
      >
        <BsInstagram />
        Follow us on Instagram
      </Button>
    </div>
  );
}
