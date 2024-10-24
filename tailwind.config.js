/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,css}",
    "./assets/css/tailwind.css",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        xl: "75px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        main: "#010003",
        secondary: "#121316",
        blue: {
          DEFAULT: "#1880E8",
        },
        grey: {
          DEFAULT: "#5E6368",
        },
        red: {
          DEFAULT: "#F91880",
        },
        title: "#FFFFFF",
        subtitle: "#5E6368",
      },
    },
  },
  plugins: [],
}

