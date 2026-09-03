// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rustumman.github.io',
  base: '/igcse-islamiyat',
  build: {
    // Keep *.html URLs so existing bookmarks and content-tree paths still work.
    format: 'file',
  },
});
