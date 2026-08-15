/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a2e",
        "dark-card": "#1e1e32",
        accent: "#4a7c8f",
        "accent-light": "#5a8c9f",
        "bg-light": "#f5f5f7",
        "bg-card": "#f0f0f5",
        success: "#22c55e",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};