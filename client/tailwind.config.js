/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple:"#b385d5",
        pink:"#ff0693",
        lightPink:"#d59bff",
        darkGreen:"#183837",
        red:"#e33054",
        lightYellow:"#fff8e9",
        green:"#308154",
        lightGreen:"#D4F0DA",
        textGray:"#666666",
        indigo:"#007cba",
        lightWhite:"#f4f8ff",
      },
      backgroundImage:{
        bgPurple:"url('./assets/bg/bg-purple.jpg')",
        bgWood:"url('./assets/bg/bg-wood.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        nutnitoSans: ["Nunito Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        grotesk: ["Space Grotesk", 'sans-serif'],
      },
    }
  },
  plugins: [],
});