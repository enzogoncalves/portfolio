/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      boxShadow: {
        'small': '0 0 4px rgba(0, 0, 0, 0.3)',
        'medium': '0 0 4px rgba(0, 0, 0, 0.6)'
      }
    },
  },
  plugins: [],
}

