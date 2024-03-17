import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  resolve: {
    alias: {
      '@app': '/src/app/',
      '@shared': '/src/shared/',
      '@pages': '/src/pages/',
      '@features': '/src/features/',
      '@entities': '/src/entities/',
    },
  },
});
