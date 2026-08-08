import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://amendoza180890.github.io',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Root `/` only redirects by language — keep content pages in the sitemap.
      filter: (page) => page !== 'https://amendoza180890.github.io/',
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
        },
      },
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === '/en/' || path === '/es/') {
          item.priority = 1.0;
        } else {
          item.priority = 0.8;
        }
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
});
