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
      // Multiple entry points to enable separate icon bundle
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'index.client': resolve(__dirname, 'src/index.client.ts'),
        'index.server': resolve(__dirname, 'src/index.server.ts'),
        icons: resolve(__dirname, 'src/icons/index.ts'),
      },
      // the proper extensions will be added
      fileName: (_, entryName) => `${entryName}.js`,
      formats: ['es'],
      name: 'snapflow-ui-kit',
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(peerDependencies ?? {}),
      ],
      output: {
        banner: (chunk) => (chunk.name === 'index.client' ? "'use client';\n" : ''),
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith('.css') ? 'index.css' : 'assets/[name]-[hash][extname]',
      },
    },
    sourcemap: true,
    target: 'esnext',
  },
})
