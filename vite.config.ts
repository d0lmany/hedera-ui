import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [
        vue(),
        dts({
            outDir: './dist/types',
            copyDtsFiles: false,
            rollupTypes: true
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'hedera-ui',
            formats: [
                'es', 'umd'
            ]
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                exports: 'named'
            }
        }
    }
})
