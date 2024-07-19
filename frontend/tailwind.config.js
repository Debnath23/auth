/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'popins': '["Poppins", sans-serif]'
      }
    },
  },
  plugins: [],
}