/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '4rem',
        lg: '8rem',
        xl: '9rem',
        '2xl': '10rem',
      },
    },
    fontFamily: {
      'textFamily': ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        'bg': '#000',
        'textColor': '#fff',
        'grad1': '#e13690',
        'grad2': '#f97e83',
        'primary': '#E13690'
      },
    },
  },
  plugins: [],
}

