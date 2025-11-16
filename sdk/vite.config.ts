import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        react( {
            jsxRuntime: 'automatic'
        }),
        dts({ 
            include: ['src'],
            exclude: ['src/**/*.test.ts', 'src/**/*.stories.ts'],
            insertTypesEntry: true,
            rollupTypes: true
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'WebhookWeaver',
            fileName: 'index',
            formats: [ 'es', 'cjs']
        },
        rollupOptions: {
            external: [ 'react', 'react-dom'],
            output: {
                globals: {
                    react: 'React', 
                    'react-dom': 'ReactDom'

                }
            }
        }
    }
});