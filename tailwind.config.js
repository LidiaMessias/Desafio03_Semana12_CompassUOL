/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat-bold': ['Montserrat-bold', 'sans-serif'],
        'poppins-medium': ['Poppins-medium', 'sans-serif'],
        'poppins-regular': ['Poppins-regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

