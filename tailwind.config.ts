import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "z-navy": "#0D1B2A",
        "z-ink": "#111111",
        "z-cream": "#F7F5F2",
        "z-gold": "#C1A559",
        "z-silver": "#9FA6B2",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;


