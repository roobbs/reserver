/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "1180p": { max: "1180px" },
      "850p": { max: "850px" },
      "755p": { max: "755px" },
      "720p": { max: "720px" },
      "650p": { max: "650px" },
      "550p": { max: "550px" },
      "500p": { max: "500px" },
    },
  },
  plugins: [],
};
