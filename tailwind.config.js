/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: '"Nunito Sans", sans-serif'
      },
      maxWidth: {
        desktop: "2000px"
      },
      screens: {
        tablet: "1000px",
        "countries-desktop": "1400px",
        "countries-xl": "1800px",
        desktop: "2000px"
      },
      colors: {
        "primary-dark": "hsl(207, 26%, 17%)",
        "primary-light": "hsl(0, 0%, 98%)",
        "dark-blue": "hsl(209, 23%, 22%)",
        "dark-gray": "hsl(0, 0%, 52%)"
      }
    },
  },
  plugins: [],
}

