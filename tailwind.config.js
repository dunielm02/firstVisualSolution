const { urlencoded } = require('express');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        regular: ['12px'],
      },
      backgroundImage:{
        'desktop-image-hero-1': "url('../images/desktop-image-hero-1.jpg')",
        'desktop-image-hero-2': "url('../images/desktop-image-hero-2.jpg')",
        'desktop-image-hero-3': "url('../images/desktop-image-hero-3.jpg')",
        'mobile-image-hero-1': "url('../images/mobile-image-hero-1.jpg')",
        'mobile-image-hero-2': "url('../images/mobile-image-hero-2.jpg')",
        'mobile-image-hero-3': "url('../images/mobile-image-hero-3.jpg')"
      }
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
    },
    fontFamily:{
      sans: ['spartan-500', 'sans-serif'],
      heading: ['spartan-700', 'sans-serif']
    }
  },
  plugins: [],
}
