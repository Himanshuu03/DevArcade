/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: { 
          "open": ['Open Sans', 'sans-serif'] 
      }, 
      backgroundImage:{
        "jumperbg": "url('/src/assets/bg.png')",
        "retrobg": "url('/src/assets/highway-road.png')",
        "birdbg":"url('/src/assets/bird.png')",
      }
  }, 
  },
  plugins: [],
}