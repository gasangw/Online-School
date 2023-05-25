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
        'primary': '#E13690',
        'card1grad1': '#fac948',
        'card1grad2': '#ead4d8',
        'card2grad1': '#b3a7b3',
        'card2grad2': '#fe64a2',
        'card3grad1': '#65d6dc',
        'card3grad2': '#ffb6a5',
        'cardTextColor': '#111111',
        'smallcards1gard1': '#f17970',
        'smallcards1gard2': '#fedad9',
        'smallcards2gard1': '#e5b1ef',
        'smallcards2gard2': '#f2953c',
        'smallcards3gard1': '#99bc43',
        'smallcards3gard2': '#f27861',
        'smallcards4gard1': '#fdc43c',
        'smallcards4gard2': '#ede06d',
      },
    },
  },
  plugins: [],
}

