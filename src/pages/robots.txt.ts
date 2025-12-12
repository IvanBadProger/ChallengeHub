import { INTERNAL_LINKS } from '@/data/config';
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const challengesPath = INTERNAL_LINKS.CHALLENGES;

  const content = `
User-agent: *
Allow: /

Disallow: /api
Disallow: /admin
Disallow: ${challengesPath}?*
Disallow: /*?utm_
Disallow: /*?ref=

User-agent: Yandex
Allow: /
Disallow: /api
Disallow: /admin
Disallow: ${challengesPath}?*
# Важно: путь в Clean-param должен совпадать с challengesPath
Clean-param: category&difficulty&page&tech&utm_source&utm_medium&utm_campaign ${challengesPath}
Clean-param: ref&source&campaign /

User-agent: Googlebot
Allow: /
Disallow: /api
Disallow: /admin
Disallow: ${challengesPath}?*

User-agent: Bingbot
Allow: /
Disallow: /api
Disallow: /admin
Disallow: ${challengesPath}?*
`.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};