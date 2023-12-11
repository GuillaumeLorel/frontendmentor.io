/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      "pale-navy": "#36384D",
      "dark-navy": "#242742",
      vermillion: "#FF6155",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      gridTemplateRows: {
        mobile: "auto 1fr",
      },
      gridTemplateColumns: {
        desktop: "1fr auto",
      },
      backgroundImage: {
        gradient: "linear-gradient(204deg, #FF6A3A 0%, #FF527B 100%)",
      },
      boxShadow: {
        button: "0px 16px 32px 0px rgba(255, 97, 85, 0.50);",
      },
      backgroundOpacity: {
        15: "0.1",
      },
    },
  },
  plugins: [],
};
