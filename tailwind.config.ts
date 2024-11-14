import type { Config } from "tailwindcss";
import  { Oswald, Kelly_Slab } from 'next/font/google';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        kelly: ['Kelly Slab', 'cursive'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        "black-800": "#121618",
        "gray-500": "#857878",
        brand: "#0796EF",
        "white-400": "#BBBBBB",
        "black-700": "#161616"
      },
    },
  },
  plugins: [],
} satisfies Config;
