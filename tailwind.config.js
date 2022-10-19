/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        orange: 'hsl(25, 97%, 53%)',
        lightGrey: 'hsl(217, 12%, 63%)',
        mediumGrey: 'hsl(216, 12%, 54%)',
        darkBlue: 'hsl(213, 19%, 18%)',
        veryDarkBlue: 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
        overpass: ['Overpass'],
      },
    },
  },
  plugins: [],
}
