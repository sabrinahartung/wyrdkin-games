import { useEffect, useState } from "react";
import { DEFAULT_SOURCES, deriveTheme, type ThemeSources } from "../theme";

/**
 * Live theme editor — tweak the *source* colors in the running site to settle
 * on a palette together, then Export to get the values to paste into index.css.
 *
 * Only two knobs: the primary accent, and one base color that the whole
 * background range derives from (see src/theme.ts). Move the base and every
 * shade + border shifts together, staying in harmony.
 *
 * Visible while developing: in dev, and on the GitHub Pages project site
 * (where the base path is `/wyrdkin-games/`). It auto-hides on the real launch —
 * i.e. once `base` is switched to `/` for a custom domain in vite.config.ts.
 */

interface Source {
  key: keyof ThemeSources;
  label: string;
}

const SOURCES: Source[] = [
  { key: "base", label: "Primary color" },
  { key: "accent", label: "Secondary color" },
  // Panel (the band the cards sit on) is intentionally linked to the page bg,
  // so it has no separate control. To split it out, give `--panel` its own
  // shade in src/theme.ts and add a source here, e.g.:
  // { key: "panel", label: "Panel · band" },
];

const STORAGE_KEY = "wyrdkin-theme-sources";

// Show in dev, and on any non-root deployment (the GitHub Pages project site).
// When `base` becomes "/" for the real custom domain, this turns off.
const themeEnabled = () =>
  import.meta.env.DEV || import.meta.env.BASE_URL !== "/";

export default function ThemeLab() {
  // Start collapsed to the 🎨 launcher so it never covers content.
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const [sources, setSources] = useState<ThemeSources>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return { ...DEFAULT_SOURCES, ...saved };
    } catch {
      return { ...DEFAULT_SOURCES };
    }
  });

  // Derive + apply to :root (runs even when closed, so tweaks persist on reload).
  useEffect(() => {
    const vars = deriveTheme(sources);
    for (const [name, value] of Object.entries(vars)) {
      document.documentElement.style.setProperty(name, value);
    }
    const changed =
      sources.accent !== DEFAULT_SOURCES.accent ||
      sources.base !== DEFAULT_SOURCES.base;
    if (changed) localStorage.setItem(STORAGE_KEY, JSON.stringify(sources));
    else localStorage.removeItem(STORAGE_KEY);
  }, [sources]);

  if (!themeEnabled()) return null;

  const update = (key: keyof ThemeSources, hex: string) =>
    setSources((s) => ({ ...s, [key]: hex }));

  const reset = () => setSources({ ...DEFAULT_SOURCES });

  const exportTheme = async () => {
    const vars = deriveTheme(sources);
    const lines = Object.entries(vars)
      .map(([name, value]) => `    ${name}: ${value};`)
      .join("\n");
    const snippet = `:root {\n${lines}\n}`;
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked — surface the snippet so it can be copied by hand.
      window.prompt("Copy your theme:", snippet);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Theme Lab"
        className="fixed bottom-4 right-4 z-[60] grid h-12 w-12 place-items-center border-2 border-grape bg-panel text-xl shadow-pixel transition-transform hover:-translate-y-0.5"
      >
        🎨
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60] w-64 border-2 border-grape bg-space shadow-pixel-lg">
      <div className="flex items-center justify-between border-b-2 border-haze bg-panel px-3 py-2">
        <span className="font-pixel text-[9px] uppercase text-neon">
          Theme Lab
        </span>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close Theme Lab"
          className="font-pixel text-[10px] text-muted hover:text-ink"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3 p-3">
        {SOURCES.map((s) => (
          <label key={s.key} className="flex items-center justify-between gap-2">
            <span className="font-retro text-base text-ink">{s.label}</span>
            <span className="flex items-center gap-2">
              <span className="font-retro text-sm uppercase text-muted">
                {sources[s.key]}
              </span>
              <input
                type="color"
                value={sources[s.key]}
                onChange={(e) => update(s.key, e.target.value)}
                className="h-7 w-9 cursor-pointer border-2 border-haze bg-transparent p-0"
              />
            </span>
          </label>
        ))}
        <p className="font-retro text-sm leading-snug text-muted">
          Primary drives the page bg, bands, cards & borders (all one hue).
          Secondary is the accent — highlights + key art.
        </p>
      </div>

      <div className="flex gap-2 border-t-2 border-haze p-3">
        <button
          onClick={exportTheme}
          className="flex-1 border-2 border-void bg-neon px-2 py-2 font-pixel text-[8px] uppercase text-void transition-transform hover:-translate-y-0.5"
        >
          {copied ? "Copied!" : "Export"}
        </button>
        <button
          onClick={reset}
          className="border-2 border-grape bg-panel px-2 py-2 font-pixel text-[8px] uppercase text-ink transition-transform hover:-translate-y-0.5"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
