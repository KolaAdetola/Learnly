/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d336fb",

          secondary: "#00e4e8",

          accent: "#e5e7eb",

          neutral: "#240706",

          "base-100": "#31200d",

          info: "#00a1bc",

          success: "#359EFF",

          warning: "#ffa000",

          error: "#e2001e",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
  // plugins: [],
};
