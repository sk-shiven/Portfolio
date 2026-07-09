/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A2E",
        card: "#2D2D44",
        primary: "#6C63FF",
        secondary: "#00B4A6",
      },
    },
  },
  plugins: [],
}
