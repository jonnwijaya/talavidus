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
        obsidian: {
          DEFAULT: "#0A0A0A",
          deep: "#050505",
        },
        surface: {
          DEFAULT: "#0F0F0F",
          elevated: "#141414",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          light: "#2A2A2A",
        },
        platinum: {
          DEFAULT: "#B8B8B8",
          light: "#D4D4D4",
        },
        slate: {
          muted: "#6B6B6B",
          DEFAULT: "#888888",
        },
        void: "#000000",
        snow: "#FAFAFA",
        ash: "#CCCCCC",
        mist: "#EAEAEA",
        carbon: "#333333",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.2em",
        wide: "0.15em",
        section: "0.1em",
        body: "0.05em",
        tight: "-0.02em",
      },
      lineHeight: {
        hero: "1.1",
        body: "1.7",
      },
      maxWidth: {
        container: "72rem",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
