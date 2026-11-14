import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'shardreel';
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');
export const siteTagline = 'AI Gameplay Clipper for Mac and Linux: Turn Long Videos into Shorts, Reels and TikToks';
export const siteDescription =
  'shardreel is a free, local video clipping tool for Apple Silicon Macs, Linux and Windows (WSL2). It finds the best moments in long gameplay recordings and cuts captioned 9:16 clips for YouTube Shorts, Instagram Reels and TikTok. Open source (MIT), private, no cloud, no subscription.';
export const siteKeywords = [
  'video clipping tool',
  'AI video clipper',
  'gameplay clipper',
  'gameplay highlights generator',
  'long video to shorts',
  'YouTube Shorts maker',
  'TikTok clip maker',
  'Instagram Reels maker',
  '9:16 vertical video',
  'auto captions',
  'Whisper transcription',
  'Apple Silicon video editor',
  'Mac video clipper',
  'Linux video clipper',
  'WSL2 video clipper',
  'MIT open source video tool',
  'OpusClip alternative',
  'local video clipper',
  'open source clipper',
  'shardreel',
];
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}

export const githubOwner = 'shardreel';
export const githubRepo = 'clipforge';
export const githubUrl = `https://github.com/${githubOwner}/${githubRepo}`;
export const docsRepo = 'shardreel-ui-and-docs';
export const docsBranch = 'main';

export function getEditUrl(pagePath: string) {
  return `https://github.com/${githubOwner}/${docsRepo}/edit/${docsBranch}/content/docs/${pagePath}`;
}
