import { resolve } from 'path'

import { defineConfig } from 'vite'

import { dependencies, peerDependencies } from './package.json'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es'],
      name: 'snapflow-ui-kit',
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(peerDependencies ?? {}),
      ],
    },
    sourcemap: true,
    target: 'esnext',
  },
})
