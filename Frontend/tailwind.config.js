/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6c2db4',
        secondary: '#f1c40f',
        danger: '#e74c3c',
        light:'#359eff',
        dark:'',
      },
    },
  },
  
  plugins: [
    require('daisyui'),
  ],
  // plugins: [],
}