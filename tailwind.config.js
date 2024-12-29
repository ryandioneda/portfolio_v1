/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx}',
    './index.html',
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0, 0) scale(1) rotate(0deg)",
          },
          "20%": {
            transform: "translate(40px, 20px) scale(1.05) rotate(10deg)",
          },
          "40%": {
            transform: "translate(120px, 80px) scale(1.1) rotate(30deg)",
          },
          "60%": {
            transform: "translate(180px, 140px) scale(1.1) rotate(60deg)",
          },
          "80%": {
            transform: "translate(240px, 200px) scale(1.05) rotate(80deg)",
          },
          "100%": {
            transform: "translate(300px, 260px) scale(1.1) rotate(100deg)",
          },
        },
      },
      animation: {
        blob: "blob 15s cubic-bezier(0.25, 0.8, 0.25, 1) infinite",
        "blob-reverse": "blob 15s cubic-bezier(0.25, 0.8, 0.25, 1) infinite reverse",
      },
      fontSize: {
        'mobile-large': '1.9rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        ivory: 'rgb(255, 255, 240)',
        offblack: 'hsl(221, 20%, 11%)',
        slate: 'rgb(192, 194, 201)',
      }
    },
  },
  plugins: [],
}
