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
    screens: {
      'sm': '400px',
      "md": "700px",
      "lg": "1000px",
      "xl": "1400px",
    }
  },
  plugins: [],
}
