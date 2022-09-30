/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './index.html'
  ],
  theme: {
    colors: {
      purpleBg: "#30213E",
      darkPurple: "#241A2E",
      aqua: "#16BD91",
      yellow: "#FDDE8B",
      gray: "#DDDDDD",
      cream: "#FEFBD4"
    },
    fontFamily: {
      sans: ["Inter", 'sans-serif'],
      title: "Rock Salt",
      header: "Pangolin"
    },
    extend: {},
  },
  plugins: [],
}
