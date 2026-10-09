/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serifBrand: ['Playfair Display', 'serif'], // keep
        bodyBrand: ['Inter', 'sans-serif'],       // keep
        roundedBrand: ['Quicksand', 'sans-serif'], // NEW (this is the image font)
      },
    },
  },
  plugins: [],
}
