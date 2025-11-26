/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a", // Slate 900
                secondary: "#1e293b", // Slate 800
                accent: "#38bdf8", // Sky 400
                "accent-glow": "#0ea5e9", // Sky 500
                text: "#f8fafc", // Slate 50
                "text-muted": "#94a3b8", // Slate 400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'gradient': 'gradient 8s ease infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                }
            }
        },
    },
    plugins: [],
}
