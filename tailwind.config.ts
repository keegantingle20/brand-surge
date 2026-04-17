// Types for `tailwindcss` resolve from devDependencies after `npm install`.
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"] as const,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-navy": "#013273",
        "brand-blue": "#45beef",
        "brand-teal": "#1dcfff",
        "brand-cyan": "#25dee3",
        "brand-frost": "#8deaff",
        "brand-white": "#fefefe",
        /** Semantic border token (matches --color-border) */
        "brand-border": "rgba(29, 207, 255, 0.15)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      lineHeight: {
        /** Slightly more open than default `relaxed` for marketing copy */
        relaxed: "1.72",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
