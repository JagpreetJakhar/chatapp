import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extend: {
    fontFamily: {
      meslo: ['MesloLGMDZNerdFontMono', 'monospace'], // Custom font
    },
    colors: {
      dark: {
        background: "var(--dark-theme-background)",
        color: "var(--dark-theme-color)",
        border: "var(--dark-theme-border)",
        accentPrimary: "var(--dark-theme-accent-primary)",
        accentSecondary: "var(--dark-theme-accent-secondary)",
        highlight: "var(--dark-theme-highlight)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
