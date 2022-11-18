/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "black",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#15141F",
          "base-100": "#F4F5F6",
          "info": "#8FB6E5",
          "success": "#63E9D0",
          "warning": "#E09E06",
          "error": "#F08775",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
