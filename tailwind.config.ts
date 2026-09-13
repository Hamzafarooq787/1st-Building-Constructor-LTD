import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: "#8D0B30",
          maroonDark: "#6A0622",
          maroonLight: "#A31039",
          maroonHover: "#780727",
          dark: "#141416",
          charcoal: "#1E1E24",
          softBg: "#F8F9FA",
        },
        ink: {
          900: "#131b2e",
          700: "#584143",
          500: "#5a5f65",
          300: "#8b7072",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-montserrat)", "sans-serif"],
        display: ["var(--font-montserrat)", "var(--font-inter)", "sans-serif"],
        script: ["var(--font-dancing)", "cursive"],
        headline: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
        editorial: ["var(--font-newsreader)", "serif"],
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        gutter: "1.5rem",
        "gutter-lg": "2rem",
        margin: "1rem",
        "margin-md": "2rem",
        "margin-lg": "4rem",
      },
      maxWidth: {
        content: "1360px",
      },
    },
  },
  plugins: [],
};

export default config;
