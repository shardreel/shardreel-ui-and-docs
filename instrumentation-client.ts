import posthog from 'posthog-js';

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

// Analytics is off unless a project key is set, so local dev and forks stay quiet.
if (key && typeof window !== 'undefined') {
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',
    defaults: '2025-05-24', // SPA pageviews via history changes, autocapture on
    person_profiles: 'identified_only', // no person profiles for anonymous visitors
    respect_dnt: true,
    capture_pageleave: true,
  });
}
