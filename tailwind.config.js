/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep teal backdrop, dark -> light (driven by CSS vars in index.css)
        void: "rgb(var(--void) / <alpha-value>)",
        space: "rgb(var(--space) / <alpha-value>)",
        nebula: "rgb(var(--nebula) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        haze: "rgb(var(--haze) / <alpha-value>)",
        // Accents
        neon: "rgb(var(--accent) / <alpha-value>)", // driven by --accent in index.css
        grape: "rgb(var(--grape) / <alpha-value>)", // light teal / links (derived)
        cyan: "#79d4cf", // bright teal pop — eyebrow labels
        gold: "#ffd45f", // coin yellow — the one warm counter-accent
        // Text — teal-tinted, not lavender. Hierarchy: ink > grape > muted.
        // All ≥4.5:1 on both --void and --nebula.
        ink: "#e6f2f1",
        muted: "#8ea9a9",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        retro: ['"VT323"', "monospace"],
      },
      boxShadow: {
        // Chunky offset "pixel" shadow
        pixel: "4px 4px 0 0 rgba(0,0,0,0.45)",
        "pixel-lg": "6px 6px 0 0 rgba(0,0,0,0.45)",
        glow: "0 0 24px 0 rgb(var(--accent) / 0.45)",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fade: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        float: "float 4s ease-in-out infinite",
        blink: "blink 1.1s steps(1) infinite",
        fade: "fade 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
