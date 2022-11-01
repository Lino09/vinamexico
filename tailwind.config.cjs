/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vina: {
          yellow: '#FFD52E',
          'second-yellow':'#FFDD00',
        }
      },
    },
  },
  plugins: [],
}