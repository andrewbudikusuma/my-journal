/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    function ({addBase}) {
      addBase({
        'h1': {fontWeight: '700'},
        'h2': {fontWeight: '700'},
        'h3': {fontWeight: '700'},
        'h4': {fontWeight: '700'},
        'h5': {fontWeight: '700'},
        'h6': {fontWeight: '700'},
      });
    },
  ],
}

