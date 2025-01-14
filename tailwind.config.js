/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        lightGrey: "#F1F1F3",
        button: "rgba(250, 199, 72, 1)",
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
      width: {
        "fit-content": "fit-content",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
