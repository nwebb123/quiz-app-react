/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // Since Tailwind is mobile-first, the default minimum viewport will now be xs defined below.
      // Need to use spread operator to add the array of default responsive viewports.
      'xs': '370px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
