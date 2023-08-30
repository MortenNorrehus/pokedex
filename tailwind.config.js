/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      'kanji': ['Kanji'],
      "Inter": ['Inter']
    },
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      },
      gridTemplateRows: {
        'layout': 'max-content auto'
      }
    },
  },
  plugins: [],
}

