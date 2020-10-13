const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./storage/framework/views/*.php', './resources/views/**/*.blade.php'],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: defaultTheme.colors.indigo,
                danger: defaultTheme.colors.red,
                success: defaultTheme.colors.green,
                warning: defaultTheme.colors.yellow,
                info: defaultTheme.colors.blue,
            }
        },
    },

    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true,
    },
    experimental: {
        applyComplexClasses: true,
    },
    plugins: [require('@tailwindcss/ui')],
};
