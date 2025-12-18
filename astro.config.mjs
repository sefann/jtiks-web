import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

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
});

