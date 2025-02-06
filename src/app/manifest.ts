import type { MetadataRoute } from 'next';

import { SITE_CONFIG, SITE_ICONS } from '@/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: SITE_CONFIG.themeColor,
    theme_color: SITE_CONFIG.themeColor,
    icons: SITE_ICONS,
  };
}
