import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { Navbar, Providers } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://riverofgodcanada.dev'),
  title: { default: 'River of God Canada', template: '%s | Client Portal' },
  description: 'River of God Canada',
  applicationName: 'Eric Amshukov',
  authors: [
    { name: 'Eric Amshukov', url: 'https://github.com/riverofgodcanada' },
  ],
  creator: 'Eric Amshukov',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/images/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/images/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/images/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Seo /> */}

      <html lang='en'>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main>{children}</main>
          </Providers>
        </body>
      </html>
    </>
  );
}
