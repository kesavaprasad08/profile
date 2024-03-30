/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
    colors:{
      navGreen:'rgba(20, 28, 39, 255)',
      pageGreen:'rgba(9,16,26,255)',
    },
  },
  },
  plugins: [],
}