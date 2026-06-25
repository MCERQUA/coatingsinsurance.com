import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CCA SHARED FOUNDATION
        canvas: "#FBF8F3",
        card: "#FFFFFF",
        panel: "#F3EEE6",
        ink: "#16201C",
        "ink-soft": "#3A4540",
        muted: "#5E6862",
        line: "#E7DFD3",
        "line-soft": "#F0EAE0",

        // CTA: amber (shared)
        cta: {
          DEFAULT: "#E8821A",
          dark: "#C2690B",
          soft: "#FCE7CF",
        },

        // BRAND: industrial deep blue (coatings niche)
        brand: {
          DEFAULT: "#1B3A6B",
          bright: "#3B6EA5",
          ink: "#112A50",
          50:  "#EEF3F8",
          100: "#D6E3F0",
          200: "#ADC7E0",
          300: "#7FA6CC",
          400: "#5485B5",
          500: "#3B6EA5",
          600: "#2D5687",
          700: "#1B3A6B",
          800: "#162F58",
          900: "#112A50",
        },

        // LEGACY ALIASES — map old class names → new palette
        "forest-green": {
          DEFAULT: "#1B3A6B",
          dark: "#162F58",
          50: "#EEF3F8",
          light: "#3B6EA5",
        },
        "ember-orange": {
          DEFAULT: "#E8821A",
          dark: "#C2690B",
          light: "#F0943A",
        },
        "warm-white": "#FBF8F3",
        bark: {
          DEFAULT: "#16201C",
          light: "#3A4540",
        },
        timber: {
          DEFAULT: "#3A4540",
          light: "#5E6862",
        },
        border: "#E7DFD3",
      },

      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },

      boxShadow: {
        soft:         "0 1px 2px rgba(22,32,28,.04)",
        card:         "0 1px 2px rgba(22,32,28,.04), 0 10px 30px -12px rgba(22,32,28,.12)",
        "card-hover": "0 4px 8px rgba(22,32,28,.06), 0 24px 48px -16px rgba(27,58,107,.20)",
        cta:          "0 12px 28px -8px rgba(232,130,26,.45)",
        float:        "0 24px 64px -24px rgba(22,32,28,.30)",
      },
    },
  },
  plugins: [],
};
export default config;
