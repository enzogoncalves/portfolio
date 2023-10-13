/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xs': '325px'
      },
      height: {
        'header': '70px'
      },
      padding: {
        'header': '70px'
      },
      margin: {
        'header': '70px'
      },
      fontFamily : {
        'title': "'Josefin Sans', sans-serif",
        'default': "'Rubik', sans-serif"
      },
      spacing: {
        'header': '70px'
      },
      boxShadow: {
        'small': '0 0 4px rgba(0, 0, 0, 0.3)',
        'medium': '0 0 4px rgba(0, 0, 0, 0.6)'
      },
      keyframes: {
        infiniteScroll: {
          '0%': { left: 0},
          '100%': { left: '-100%'}
        }
      },
      animation: {
        'techs': 'infiniteScroll 16s linear infinite'
      }
    },
  },
  plugins: [],
}

