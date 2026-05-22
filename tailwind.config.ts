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
          DEFAULT: "var(--color-background)",
          dark: "var(--color-background-dark)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          elevated: "var(--color-surface-elevated)",
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
          light: "var(--color-ink-light)",
          lighter: "var(--color-ink-lighter)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          dark: "var(--color-border-dark)",
        },
        snow: "var(--color-snow)",
        mineral: {
          DEFAULT: "#2a4b41",
          light: "#3d6358",
          dark: "#1f3a32",
          muted: "var(--color-mineral-muted)",
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
