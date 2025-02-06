import type { MetadataRoute } from 'next';

import { BASE_SITE_URL } from '@/constants';

const routes: string[] = [''];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return routes.map((route) => ({
    url: `${BASE_SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
