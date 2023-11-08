import { defineConfig } from 'vite'
import { resolve } from 'path'
import Inspect from 'vite-plugin-inspect'
import injectHTML from 'vite-plugin-html-inject'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig(() => {
    return {
        base: 'js-vite-template-starter',
        plugins: [
            Inspect(),
            injectHTML(),
            ViteImageOptimizer({
                png: {
                    quality: 70,
                },
                jpeg: {
                    quality: 70,
                },
                jpg: {
                    quality: 70,
                },
            }),
        ],
        resolve: {
            alias: {
                // 'symbol': resolve(__dirname, './src/folder...')
            },
        },
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                },
            },
        },
    }
})
