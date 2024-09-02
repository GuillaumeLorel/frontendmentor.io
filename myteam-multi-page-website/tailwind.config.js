/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-midnight-green": "#014E56",
        "primary-light-coral": "#F67E7E",
        "secondary-rapture-blue": "#79C8C7",
        "secondary-police-blue": "#2C6269",
        "secondary-deep-jungle-green": "#004047",
        "secondary-sacramento-state-green": "#012F34",
        "secondary-dark-green": "#002529",
      },
      fontFamily: {
        'livvic': ['Livvic', 'sans-serif'],
      },
      fontSize: {
        "base": "15px",
        "h1": "100px",
        "h2": "48px",
        "h3": "18px",
      },
      lineHeight: {
        "base": "25px",
        "h1": "100px",
        "h2": "48px",
        "h3": "28px",
      },

    },
  },
  plugins: [],
}