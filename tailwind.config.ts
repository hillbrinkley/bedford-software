/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'bedford-blue': '#2079CB'
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans Variable", ...defaultTheme.fontFamily.sans],
        serif: ["Inria Serif", ...defaultTheme.fontFamily.serif]
      },

      backgroundImage: {
        'custom-image': 'url("/background.svg")',
      },


    },
  },
  plugins: [],
};
