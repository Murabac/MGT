import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#FFFFFF",
        surface: "#F3F7FB",
        ink: "#122033",
        muted: "#526178",
        line: "#D7E2EE",
        blue: "#1776E9",
        deep: "#0B4CAD",
        green: "#1E9C34",
        yellow: "#FEDE02",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        condensed: ["var(--font-condensed)", "sans-serif"],
        arabic: [
          "var(--font-arabic)",
          "var(--font-sans)",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        page: "1240px",
      },
      borderRadius: {
        brand: "3px",
      },
      outlineOffset: {
        brand: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
