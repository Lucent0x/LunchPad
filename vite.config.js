import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  outDir: 'dist',
  plugins: [
    react(),
    nodePolyfills({
      global: true,
    }),
  ],
  define: {
    'process.env': {},
    global: 'globalThis', // Define global as globalThis
  },
});
