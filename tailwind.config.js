/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000', // Pure Black
                foreground: '#EDEDED', // Soft White
                primary: '#818CF8', // Indigo Accent
                muted: '#171717', // Neutral Dark
            },
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                serif: ['Instrument Serif', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
