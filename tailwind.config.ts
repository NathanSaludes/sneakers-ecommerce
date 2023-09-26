import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: ["var(--default-text-size)", { lineHeight: "1.5rem" }],
      },
      fontFamily: {
        sans: ["var(--font-kumbh)"],
      },
      colors: {
        default: {
          foreground: "var(--default-foreground)",
          background: "var(--default-background)",
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
        },
        neutral: {
          dark: "var(--neutral-dark)",
          normal: "var(--neutral-normal)",
          light: "var(--neutral-light)",
          lighter: "var(--neutral-lighter)",
        },
        debug: "var(--debug)",
      },
    },
  },
  plugins: [],
}
export default config
