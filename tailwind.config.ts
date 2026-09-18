import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#08090A",
          secondary: "#101214",
          panel: "#15181B",
          card: "#121417",
        },
        border: {
          DEFAULT: "#24282D",
          subtle: "#1B1E22",
          danger: "#7D1515",
        },
        crimson: {
          DEFAULT: "#B82020",
          alert: "#E53935",
          dark: "#5A0E0E",
          glow: "rgba(229, 57, 53, 0.25)",
        },
        tactical: {
          green: "#2ECC71",
          amber: "#E67E22",
          gray: "#92989D",
          silver: "#D1D5DB",
        }
      },
      boxShadow: {
        tactical: "0 0 25px rgba(184, 32, 32, 0.15)",
        "tactical-lg": "0 0 50px rgba(184, 32, 32, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;