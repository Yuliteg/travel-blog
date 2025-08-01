import lineClamp from "@tailwindcss/line-clamp";
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
        hero: "calc(100vh - var(--header-height))"
      },
      letterSpacing: {
        tighter: "0.03em"
      },
      colors: {
        "text-main": "#262522",
        "text-secondary": "#A0A0A0",
        "primary-2": "#1e1e1e",
        "primary-3": "#8DD3BB",
        customBorder: "#e0dbc9",
        customBg: "#f0ebe1",
        skeletonGray: "#e8e4db",

        stroke: "rgba(38, 37, 34, 0.24)"
      },
      backgroundImage: {
        "deep-blue-gradient":
          "linear-gradient(to right, rgba(15,32,39,0.7) 0%, rgba(26,47,55,0.7) 50%, rgba(35,63,78,0.7) 100%)"
      },
      boxShadow: {
        "inset-light-gray": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)"
      }
    }
  },
  plugins: [lineClamp]
};

export default config;
