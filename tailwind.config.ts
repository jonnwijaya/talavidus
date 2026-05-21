import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#f9f5ef",
          dark: "#ede9e3",
        },
        surface: {
          DEFAULT: "#ffffff",
          elevated: "#f4f0ea",
        },
        ink: {
          DEFAULT: "#0e0e0e",
          muted: "#3e3d3c",
          light: "#7d7b78",
          lighter: "#95938f",
        },
        border: {
          DEFAULT: "#e0dcd7",
          dark: "#c7c4bf",
        },
        snow: "#ffffff",
        mineral: {
          DEFAULT: "#2a4b41",
          light: "#3d6358",
          dark: "#1f3a32",
          muted: "#e8eeec",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.25em",
        wide: "0.15em",
        section: "0.1em",
        body: "0.05em",
        tight: "-0.02em",
      },
      lineHeight: {
        hero: "1.05",
        body: "1.7",
        heading: "1.2",
      },
      maxWidth: {
        container: "72rem",
        prose: "40rem",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        slow: "500ms",
        slower: "1000ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-out",
        expo: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
