/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#196799",
          secondary: "#3069BA",
          tertiary: "#E3EEFB",
          teal: "#2AA5A8",
          ink: "#0B1B33",
        },
      },
      fontFamily: {
        heading: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
