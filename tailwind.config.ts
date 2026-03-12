import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5C358",
        secondary: "#21AC4B",
        neutral: {
          900: "#0F172A",
          700: "#334155",
          500: "#64748B",
          200: "#E2E8F0",
          50: "#F8FAFC"
        }
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px"
      },
      spacing: {
        0: "0rem",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem"
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"]
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem"
      },
      boxShadow: {
        card: "0 10px 25px -15px rgba(15, 23, 42, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
