/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"], // Tilføjer Helvetica her
      },
      colors: {
        "light-coral": "#f8b195", // Lys koralfarve
        "peach-puff": "#fcefe3", // Lys ferskenfarve
      },
      backgroundImage: {
        "gradient-light-coral": "linear-gradient(to right, #f8b195, #fcefe3)",
      },
      scale: {
        200: "2", // Skala 200%
        250: "2.5", // Skala 250%
        300: "3", // Skala 300%
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
