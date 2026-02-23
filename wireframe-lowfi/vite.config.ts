import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  // GitHub Pages is served from a sub-path like /<repo>/<app>/
  // We pass BASE_PATH in GitHub Actions so assets resolve correctly.
  base: process.env.BASE_PATH || '/',

  build: {
    target: 'esnext',
    outDir: 'build',
  },

  server: {
    port: 3000,
    open: true,
  },


  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
