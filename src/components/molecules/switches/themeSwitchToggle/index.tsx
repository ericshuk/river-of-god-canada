'use client';

import { Button, Skeleton } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsMoonStarsFill, BsSun } from 'react-icons/bs';

export default function ThemeSwitchToggle() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton></Skeleton>;
  }

  return (
    <Button
      isIconOnly
      variant='flat'
      color={theme === 'light' ? 'default' : 'primary'}
      className='rounded-full'
      onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <BsSun className='h-6 w-6' /> : <BsMoonStarsFill />}
    </Button>
  );
}
