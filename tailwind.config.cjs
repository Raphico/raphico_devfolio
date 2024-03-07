const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#151515",
        foreground: "#FFFFFF",
        border: "#403E3E",
        muted: "#b8b8b8",
        accent: "#4CC1D3",
      },
    },
    fontFamily: {
      sans: ["Roboto, sans-serif", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
