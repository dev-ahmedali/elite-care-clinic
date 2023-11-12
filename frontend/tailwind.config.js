/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimaryColor: "#0fbcf9",
        greenColor: "#0be881",
        purpleBlue: "#575fcf",
        textColor: "#8395a7",
        headingColor: "#222f3e",
        joustBlue: "#54a0ff"
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
      }
    },
  },
  plugins: [],
}

