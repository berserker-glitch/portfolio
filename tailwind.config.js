/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#030712', // Deep Space Navy
                foreground: '#f8fafc', // Soft White
                primary: '#38bdf8', // Sky Blue Accent
                muted: '#0f172a', // Slate Dark
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
