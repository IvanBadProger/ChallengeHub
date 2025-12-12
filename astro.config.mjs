// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  trailingSlash: 'never',

  // Включаем SSR
  output: 'server',

  adapter: vercel(),

  redirects: {
    '/': '/home',
  },

  integrations: [react()],
});