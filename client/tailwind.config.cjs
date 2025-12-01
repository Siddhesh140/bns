/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'bebas': ['Bebas Neue', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
