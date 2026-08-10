/**
 * Theme derivation — turn a small set of *source* colors into the full set of
 * CSS variables, so related colors stay in harmony.
 *
 *   accent  → the primary (independent).
 *   base    → ONE secondary base. The whole background range (page bg, bands,
 *             cards, borders, light accent) is derived from its hue +
 *             saturation at fixed lightness steps, so the dark and light
 *             shades are always variations of each other and borders auto-fit.
 *
 * Edit a source here (or live in the Theme Lab panel) and everything downstream
 * follows. The panel band is intentionally the same as the page bg (see below).
 */

export interface ThemeSources {
  accent: string; // hex, e.g. "#4fe8b0"
  base: string; // hex — drives the whole background/border range
}

export const DEFAULT_SOURCES: ThemeSources = {
  accent: "#567b79", // sage teal, straight from the logo
  base: "#2a484a", // deep teal, straight from the logo
};

// Lightness (0–1) of each shade, darkest → lightest. Hue + saturation
// come from the `base` source; only lightness changes across the ramp.
const LIGHTNESS = {
  void: 0.075, // darkest — page background
  space: 0.12, // section band
  nebula: 0.185, // cards
  haze: 0.3, // borders
  grape: 0.7, // light accent (links, secondary borders)
} as const;

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

// Returns [hue 0–360, sat 0–1, light 0–1]
function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return [h * 60, s, l];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360;
  if (s === 0) {
    const v = Math.round(l * 255);
    return [v, v, v];
  }
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [
    Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    Math.round(hue2rgb(p, q, h) * 255),
    Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  ];
}

const triplet = ([r, g, b]: [number, number, number]) => `${r} ${g} ${b}`;

/** Derive every CSS theme variable (as "r g b" triplets) from the sources. */
export function deriveTheme(s: ThemeSources): Record<string, string> {
  const [h, sat] = rgbToHsl(...hexToRgb(s.base)); // base L is ignored
  const shade = (l: number) => triplet(hslToRgb(h, sat, l));
  const pageBg = shade(LIGHTNESS.void);
  return {
    "--accent": triplet(hexToRgb(s.accent)),
    "--void": pageBg,
    "--space": shade(LIGHTNESS.space),
    "--nebula": shade(LIGHTNESS.nebula),
    // Panel (the band the cards sit on) reuses the page bg — its own control is
    // commented out in the Theme Lab. Flip this to its own `shade(...)` to split.
    "--panel": pageBg,
    "--haze": shade(LIGHTNESS.haze),
    "--grape": shade(LIGHTNESS.grape),
  };
}
