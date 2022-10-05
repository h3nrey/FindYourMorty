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
    extend: {
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        shake: {
          '0%, 100%': {transform: 'rotate(0deg)'},
          '40%': {transfrom: "rotate(50deg) scaleX(0.5)" },
          "80%": {transform: "translate(-20px) scale(0.8)"},
          "95": {transform: "rotate(5deg)"}
        }
      },
      animation: {
        scale: "scale 1s infinite",
        shake: "shake 0.6s 1"
      }
    },
    screens: {
      'sm': '400px',
      "md": "700px",
      "lg": "1000px",
      "xl": "1350px",
    }
  },
  plugins: [],
}
