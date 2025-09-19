import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
    globalCss: {
        'html, body': {
            margin: 0,
            padding: 0,
        },
    },
    theme: {
        tokens: {
            colors: {
                primary: { value: '#272A5B' },
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);
