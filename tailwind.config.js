/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#03DAC5",
        secondary: "#0160A8",
        customBlue: "#0087ED",
        primaryGreen: "#00CFBA",
        overlayBlue: "rgba(0, 135, 237, 0.7)",
        headerOverlay: "#01528D",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #FFFFFF 72.27%, #0087ED 136.26%)",
        "button-gradient": "linear-gradient(90deg, #00E8D1 0%, #00CBB7 100%)",
        "header-bg": "url('images/futbol-players.svg')",
        "header-overlay":
          "linear-gradient(rgba(1, 82, 141, 0.8), rgba(1, 82, 141, 0.8)), url('images/futbol-players.svg')",
        "footer-overlay":
          "linear-gradient(rgba(1, 82, 141, 0.8), rgba(1, 82, 141, 0.8)), url('images/couple-playing-tennis.svg')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        lexend: ["'Lexend Exa'", "sans-serif"],
      },
      keyframes: {
        "scale-up": {
          "0%": { transform: "scale(0)" },
          "60%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        check: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "scale-up": "scale-up 0.5s ease-out forwards",
        check: "check 0.5s ease-out forwards 0.5s",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
