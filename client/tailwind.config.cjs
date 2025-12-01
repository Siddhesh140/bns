/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark': '#0F0F0F',
                'dark-secondary': '#191919',
                'dark-gray': '#1A1A1A',
                'light-gray': '#ADADAD',
                'brand-blue': '#3B82F6',
            },
            fontFamily: {
                'bebas': ['Bebas Neue', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
