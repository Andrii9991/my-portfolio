/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        lightGrey: "#F1F1F3",
        title: "linear-gradient(37.87deg, #1D2F6F -11.03%, #8390FA 98.56%)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, rgba(29, 47, 111, 1), rgba(131, 144, 250, 1))",
      },
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        russoOne: ["Russo One", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
