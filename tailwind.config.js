/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontSize: {
        regular: ['12px'],
      },
    },
    colors: {
      'Dark-Gray': "hsl(0, 0%, 63%)",
      Black: "hsl(0, 0%, 0%)",
      White: "hsl(0, 0%, 100%)",
      'Very-Dark-Gray': "hsl(0, 0%, 27%)",
    },
    screens:{
      tablet: "375px",
      mobile: "1440px",
    }
  },
  plugins: [],
}
