/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
            "./nested/*.html",
            "./assets/js/*.js"],
  theme: {
    screens: {
      'sm': '479px',
      'md': '767px',
      'lg': '991px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {},
  },
  plugins: [],
}
