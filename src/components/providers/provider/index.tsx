'use client';

import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

export default function Provider({ children }: PropsWithChildren) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
