import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://jtiks.com', // Update with your actual domain
  output: 'server',
  adapter: undefined, // For Hostinger shared hosting, you may need a Node.js adapter
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@data': path.resolve(__dirname, './src/data'),
      },
    },
  },
});

