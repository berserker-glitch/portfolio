/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#040406', // Void Primary
                foreground: '#E8E6E1', // Ash Background
                primary: '#00F0FF', // Matrix Cyan Accent
                muted: '#0A0A0C', // Carbon Text/Dark
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
