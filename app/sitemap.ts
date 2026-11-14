import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { siteUrl } from '@/lib/shared';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const docs = source.getPages().map((page) => ({
    url: `${siteUrl}${page.url}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: page.slugs.length <= 1 ? 0.8 : 0.6,
  }));
  return [{ url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 }, ...docs];
}
