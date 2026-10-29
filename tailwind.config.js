/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        azul:   '#6d899a',
        verde:  '#5a8b37',
        morado: '#7d6969',
        dorado: '#f6af64',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

