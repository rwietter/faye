/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111",
        secondary: "rgba(0,0,0,.5)",
      },
      fontFamily: {
        sans: ["Red Hat Display", "Inter", "sans-serif"],
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
