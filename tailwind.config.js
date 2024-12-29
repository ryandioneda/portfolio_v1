/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx}',
    './index.html',
  ],
  theme: {
    extend: {
      fontSize: {
        'mobile-large': '1.9rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],

      },
      colors: {
        ivory: 'rgb(255, 255, 240)',
        offblack: 'hsl(221, 20%, 11%)',
      }
    },
  },
  plugins: [],
}

