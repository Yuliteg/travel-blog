import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "834px",
      lg: "1440px"
    },
    container: {
      padding: {
        sm: "1rem",
        md: "2.5rem",
        lg: "7.5rem"
      }
    },
    extend: {
      container: {
        center: true
      },
      height: {
        header: "var(--header-height)",
        hero: "calc(100vh - var(--header-height) - 1rem)"
      },
      letterSpacing: {
        tighter: "0.03em"
      },
      colors: {
        "text-main": "#262522",
        "text-secondary": "#A0A0A0",
        "primary-2": "#F29C33",
        "primary-3": "#EE6352",
        stroke: "rgba(38, 37, 34, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
