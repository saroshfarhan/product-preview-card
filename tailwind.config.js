/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
      serif: ["Fraunces"],
    },

    container: {
      center: true,
    },

    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        dark_cyan: {
          200: "hsl(158, 36%, 37%)",
          400: "hsl(158, 36%, 17%)",
        },
        cream: "hsl(30, 38%, 92%)",
        dark_blue: "hsl(212, 21%, 14%)",
        grayish_blue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
