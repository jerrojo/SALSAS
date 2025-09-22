import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-cream)",
        charcoal: "var(--color-charcoal)",
        red: {
          DEFAULT: "var(--color-red)",
          dark: "var(--color-red-dark)"
        },
        green: {
          DEFAULT: "var(--color-green)"
        }
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"]
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
export default config;


