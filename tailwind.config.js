const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.blueGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
