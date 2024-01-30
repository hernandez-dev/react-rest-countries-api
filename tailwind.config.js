/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "hsl(207, 26%, 17%)",
        "light-bg": "hsl(0, 0%, 98%)",
        "dark-blue": "hsl(209, 23%, 22%)",
        "dark-gray": "hsl(0, 0%, 52%)"
      }
    },
  },
  plugins: [],
}

