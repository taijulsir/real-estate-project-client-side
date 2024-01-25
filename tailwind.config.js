/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'libreFranklin': ['Libre Franklin', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      keyframes: {
        upAndDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        
      },
      animation: {
        'up-and-down': 'upAndDown 5s infinite', 
      },
    },
  },
  plugins: [require("daisyui")],
}
