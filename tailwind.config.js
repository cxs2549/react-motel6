module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandRed: '#c32119',
        brandBlue: '#0B50AC'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
