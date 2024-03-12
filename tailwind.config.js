import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Diagramm', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                black: '#000000',
                white: '#FFFFFF',
                'off-black': '#141414',
                green: '#81A45E',
            },
        },        
    },

    plugins: [forms, typography],
};
