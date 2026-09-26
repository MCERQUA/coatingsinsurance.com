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

        // BRAND: warm umber/copper (coatings niche). Was industrial deep blue; Josh HARD NO on blue
        // gradients (USER.md L32), so the palette debt was paid 2026-09-26. Same ramp positions, and
        // DEFAULT keeps the old ~11:1 white-on-brand contrast.
        brand: {
          DEFAULT: "#5C3018",
          bright: "#9E582D",
          ink: "#3D200F",
          50:  "#FBF3EC",
          100: "#F4E1D0",
          200: "#E8C3A2",
          300: "#D89E72",
          400: "#C47A4A",
          500: "#9E582D",
          600: "#7E4523",
          700: "#5C3018",
          800: "#4E2914",
          900: "#3D200F",
        },

        // LEGACY ALIASES — map old class names → new palette
        "forest-green": {
          DEFAULT: "#5C3018",
          dark: "#4E2914",
          50: "#FBF3EC",
          light: "#9E582D",
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
        "card-hover": "0 4px 8px rgba(22,32,28,.06), 0 24px 48px -16px rgba(92,48,24,.20)",
        cta:          "0 12px 28px -8px rgba(232,130,26,.45)",
        float:        "0 24px 64px -24px rgba(22,32,28,.30)",
      },
    },
  },
  plugins: [],
};
export default config;
