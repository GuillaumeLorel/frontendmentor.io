/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-navy": "#313E51",
        navy: "#3B4D66",
        "grey-navy": "#626C7F",
        "light-grey": "#F4F6FA",
        white: "#ffffff",
        "light-bluish": "#ABC1E1",
        green: "#26D782",
        red: "#EE5454",
        purple: "#A729F5",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      fontSize: {
        xl: "100px",
        lg: "64px",
        md: "36px",
        sm: "28px",
        "body-m": "24px",
        "body-s": "20px",
      },
    },
  },
  plugins: [],
};
