/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#d336fb",

          secondary: "#00e4e8",

          accent: "#fe5821",

          neutral: "#240706",

          "base-100": "#ffffff",

          info: "#00a1bc",

          success: "#359EFF",

          warning: "#359eff",

          error: "#e2001e"
        },
      },
    ],
  },

  plugins: [require("daisyui")],
  // plugins: [],
};
