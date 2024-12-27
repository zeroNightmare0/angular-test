const { addDynamicIconSelectors } = require('@iconify/tailwind')
const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': {
                    'DEFAULT': '#0062ff',
                    '50': '#edf8ff',
                    '100': '#d6eeff',
                    '200': '#b5e3ff',
                    '300': '#83d3ff',
                    '400': '#48b9ff',
                    '500': '#1e97ff',
                    '600': '#0676ff',
                    '700': '#0062ff',
                    '800': '#084bc5',
                    '900': '#0d439b',
                    '950': '#0e2a5d',
                },
            }
        },
    },
    plugins: [
        addDynamicIconSelectors()
    ],
}
