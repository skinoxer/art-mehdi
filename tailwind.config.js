/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito"],
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("tailwindcss-debug-screens"), require("flowbite/plugin")],
};
