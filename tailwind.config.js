const colors = require('tailwindcss/colors');
//const custom = require('./libraries/tailwind');  // 이후 custom.colors.blue 처럼 이용


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
    },
    fontFamily: {
      sans: ['Noto Sans KR', 'sans-serif']
    },
    colors: {
      primary: colors.blue,
      secondary: colors.purple,
      neutral: colors.gray,
    },
    minHeight: {
      device: '20rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
