import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    ViteAliases({
      dir: 'src',
      prefix: '@',
    }),
  ],
});
