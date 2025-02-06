import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { Navbar, Providers } from '@/components';

import { BASE_SITE_URL, SITE_CONFIG } from '@/constants';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: SITE_CONFIG.themeColor,
};

export const metadata: Metadata = {
  authors: [{ name: SITE_CONFIG.author, url: 'https://github.com/ericshuk' }],
  applicationName: SITE_CONFIG.name,
  creator: SITE_CONFIG.author,
  description: SITE_CONFIG.name,
  keywords: [
    'non-denominational church',
    'Christian church in Canada',
    'River of God church',
    'Christian ministry',
    'spiritual ministry Canada',
    'Bible-based church',
    'community church Canada',
    'fellowship in Canada',
    'Christian fellowship',
    'church for all believers',
    'family-friendly church Canada',
    'spiritual growth Canada',
    'church ministry in Canada',
    'worship community Canada',
  ],
  manifest: '/manifest.json',
  metadataBase: new URL(BASE_SITE_URL),
  title: SITE_CONFIG.name,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
