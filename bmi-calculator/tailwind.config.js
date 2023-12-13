/** @type {import('tailwindcss').Config} */
import font from "./src/assets/fonts/Inter-VariableFont_slnt,wght.ttf";

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {},
    colors: {
      blue: "#345FF6",
      gunmetal: "#253347",
      "dark-electric-blue": "#5E6E85",
      borders: "#D8E2E7",
      white: "#FFFFFF",
    },
    fontSize: {
      xs: "14px",
      s: "20px",
      m: "24px",
      l: "48px",
      xl: "64px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
    },
    backgroundImage: {
      "bmi-gradient": "linear-gradient(90deg, #345FF6 0%, #587DFF 100%)",
    },
  },
  plugins: [],
};
