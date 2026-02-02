import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
    plugins: [
        react(),
        imagetools()
    ],
    server: {
        port: 5173,
        open: true
    },
    build: {
        // Use esbuild for minification (default, no extra dependency)
        minify: 'esbuild',
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    'framer-motion': ['framer-motion'],
                    'react-vendor': ['react', 'react-dom', 'react-router-dom']
                }
            }
        }
    }
})
