import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      spacing: {
        1: "0.5rem", // 8px
        2: "0.75rem", // 12px
        3: "1rem", // 16px
        4: "1.5rem", // 24px
        5: "2rem", // 32px
        6: "3rem", // 48px
        7: "5rem",
      },
      colors: {
        primary: "#fcf3e0",
        secondary: "#6b6b6b",
        accent: "#c00122",
        btn: " rgb(243, 227, 204)",
      },
      fontFamily: {
        playfair: "var(--font-playfair-display)", // font-playfair
        roboto: "var(--font-roboto)", // Roboto font-roboto
      },
      fontSize: {
        xs: "10px",
        s: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "30px",
        "3xl": "36px",
        "4xl": "42px",
      },
      boxShadow: {
        "inset-custom": "inset 0 0 3rem #f3e3cc",
      },
    },
  },

  plugins: [],
} satisfies Config;
