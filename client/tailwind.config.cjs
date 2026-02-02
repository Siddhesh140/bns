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
                'muted-gray': '#C3C3C3',
                'charcoal': '#151515',
            },
            fontFamily: {
                'bebas': ['Bebas Neue', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            fontSize: {
                // Headings
                'heading-xl': ['88px', { lineHeight: '88%' }],
                'heading-xl-mobile': ['52px', { lineHeight: '88%' }],
                'heading-lg': ['56px', { lineHeight: '88%' }],
                'heading-lg-mobile': ['40px', { lineHeight: '100%' }],
                'heading-md': ['64px', { lineHeight: '77px' }],
                // Body text
                'body-xl': ['1.75rem', { lineHeight: '2.125rem' }],
                'body-lg': ['1.5rem', { lineHeight: '1.8125rem' }],
            },
            spacing: {
                'icon': '15px',       // Icon-to-text gap
                'section': '30px',    // Section content gap
                'nav': '60px',        // Navbar link gap
            },
            maxWidth: {
                'container': '1440px',
                'container-sm': '400px',
                'content': '687px',
                'content-sm': '360px',
                'sidebar': '402px',
                'footer-text': '417px',
            },
            minHeight: {
                'hero': '800px',
                'hero-mobile': '600px',
                'section': '720px',
                'section-mobile': '962px',
                'who-section': '954px',
                'who-section-mobile': '800px',
                'card-content': '220px',
                'card-content-mobile': '210px',
            },
        },
    },
    plugins: [],
}
