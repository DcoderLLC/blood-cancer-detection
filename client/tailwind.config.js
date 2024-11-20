/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E70449', // Custom color for primary theme
        secondary: '#54A0FF', // Custom color for secondary theme
      },
    },
  },
  plugins: [],
}

