import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { GithubInfo } from '@/components/github-info';
import { Wordmark } from '@/components/logo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Wordmark />,
    },
    links: [
      { text: 'Docs', url: '/docs', active: 'nested-url' },
      { text: 'Guides', url: '/docs/guides', active: 'nested-url' },
      { text: 'How it works', url: '/docs/concepts/how-it-works' },
      { text: 'Reference', url: '/docs/reference/options', active: 'nested-url' },
      { type: 'custom', children: <GithubInfo />, secondary: true },
    ],
  };
}
