/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(15% 0.02 250)",
        card: "oklch(20% 0.02 250)",
        primary: "oklch(65% 0.15 250)",
        secondary: "oklch(70% 0.15 160)",
        muted: "oklch(25% 0.01 250)",
      },
      fontFamily: {
        sans: ['"Geist Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
