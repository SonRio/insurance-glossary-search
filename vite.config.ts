import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works at any path: a GitHub Pages project
  // subpath (/insurance-glossary-search/), a host root (Vercel/Netlify), or
  // even file://. Deep links use ?term= query params, so no SPA rewrite needed.
  base: './',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test-setup.ts',
    css: false,
  },
});
