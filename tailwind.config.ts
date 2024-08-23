import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "834px",
      lg: "1440px",
      toSmOnly: { min: "374.98px", max: "833.98px" },
      smOnly: { max: "833.98px" },
      mdOnly: { min: "834px", max: "1439.98px" },
      notXl: { max: "1439.98px" }
    },
    container: {
      padding: {
        sm: "1rem",
        md: "2.5rem",
        lg: "7.5rem"
      }
    },
    extend: {
      colors: {
        blue: "#90BDDE",
        pink: "#FFB8CA",
        "primary-white": "#FFFEFE",
        "accent-pink": "#F57193",
        "accent-blue": "#4D88B2",
        yellow: "E8B888",
        rose: "#B26B7B",
        gray: "#AFADAD",
        black: "363636",
        "burger-bg": "#E7F5FF",
        gold: "#E8B888"
      }
    }
  },
  plugins: []
};

export default config;
