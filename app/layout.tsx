import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata, Viewport } from 'next';
import { appName, siteDescription, siteKeywords, siteTagline, siteUrl } from '@/lib/shared';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${appName}: ${siteTagline}`, template: `%s | ${appName}` },
  description: siteDescription,
  applicationName: appName,
  keywords: siteKeywords,
  authors: [{ name: appName }],
  creator: appName,
  publisher: appName,
  category: 'technology',
  alternates: { canonical: '/' },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    siteName: appName,
    locale: 'en_US',
    url: '/',
    title: `${appName}: ${siteTagline}`,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${appName}: ${siteTagline}`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: appName,
      description: siteDescription,
      inLanguage: 'en',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}/#software`,
      name: appName,
      url: siteUrl,
      description: siteDescription,
      applicationCategory: 'MultimediaApplication',
      applicationSubCategory: 'Video clipping and editing',
      operatingSystem: 'macOS (Apple Silicon)',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Detects peak moments in long gameplay recordings',
        'Word-by-word captions with Whisper on Apple GPU',
        'Renders 1080x1920 9:16 clips for Shorts, Reels and TikTok',
        'Optional AI ranking and titles',
        'Runs fully local, no cloud renderer',
      ],
    },
  ],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD built from constants
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <RootProvider theme={{ defaultTheme: 'dark' }}>{children}</RootProvider>
      </body>
    </html>
  );
}
