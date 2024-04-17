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
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue": "hsl(207, 26%, 17%)",
        "very-dark-blue-light-mode": "hsl(200, 15%, 8%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
