/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0B0D0F',
                foreground: '#F1F4F2',
                primary: '#9BAF9F',
                muted: '#171B1C',
                'muted-foreground': '#98A19D',
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
