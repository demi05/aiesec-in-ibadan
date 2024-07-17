/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      darkBlue: "rgba(86, 100, 245, 1)",
      white: "rgba(255, 255, 255, 1)",
      black: "rgba(0, 0, 0, 1)",
      lightPurple: " rgba(177, 185, 255, 1)",
      grey: "rgba(217, 217, 217, 1)",
      deeperBlack: "rgba(3, 0, 0, 1)",
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "laptop-lady": "url('/path/to/laptopLady.svg')",
        "gradient-rgba":
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(31, 22, 22, 0.7), rgba(255, 255, 255, 0.69))",
      },
    },
  },
  plugins: [],
};
