import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import Unfonts from 'unplugin-fonts/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
    plugins: [
        react(),
        svgr(),
        Unfonts({
            custom: {
                display: 'auto',
                families: [
                    {
                        name: 'SFProText',
                        src: './src/assets/fonts/SFProText*',
                        local: 'SFProText',
                        transform(font) {
                            if (font.basename === 'SFProText-Light') font.weight = 300;
                            if (font.basename === 'SFProText-Regular') font.weight = 400;
                            if (font.basename === 'SFProText-Medium') font.weight = 500;

                            return font;
                        },
                    },
                    {
                        name: 'Gilroy',
                        src: './src/assets/fonts/Gilroy*',
                        local: 'Gilroy',
                        transform(font) {
                            if (font.basename === 'Gilroy-Regular') font.weight = 400;
                            if (font.basename === 'Gilroy-Medium') font.weight = 500;

                            return font;
                        },
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
            api: `${path.resolve(__dirname, './src/api/')}`,
            assets: `${path.resolve(__dirname, './src/assets/')}`,
            interfaces: `${path.resolve(__dirname, './src/interfaces/')}`,
            hooks: `${path.resolve(__dirname, './src/hooks/')}`,
            components: `${path.resolve(__dirname, './src/components/')}`,
            helpers: `${path.resolve(__dirname, './src/helpers/')}`,
        },
    },
});
