/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FDFDEA",
          100: "#FDF6B2",
          200: "#FCE96A ",
          300: "#FACA15",
          400: "#E3A008",
          500: "#C27803",
          600: "#9F580A",
          700: "#8E4B10",
          800: "#723B13",
          900: "#633112",
        },
      },
    },
  },
  plugins: [],
};
