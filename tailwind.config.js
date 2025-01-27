/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        Yekan: ["Yekan"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
