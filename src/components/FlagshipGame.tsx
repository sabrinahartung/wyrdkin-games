import { useState } from "react";
import { asset, flagship } from "../content";
import PixelButton from "./ui/PixelButton";
import Lightbox from "./ui/Lightbox";

/**
 * The homepage centerpiece: one game, shown big.
 * Full-bleed screenshot backdrop with the studio's teal wash over it, the game
 * wordmark as the headline, and two exits — Steam, or the game's own subpage.
 */
// The hero shot plus the thumbnail strip, as one set for the lightbox.
const shots = [flagship.backdrop, ...flagship.shots];

export default function FlagshipGame() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="game" className="relative overflow-hidden border-y-2 border-haze">
      {/* Screenshot backdrop, dimmed hard so text stays readable */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${asset(flagship.backdrop)})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-void/95 via-void/70 to-void/95"
        aria-hidden
      />
      {/* Teal wash keeps the desert screenshot inside the studio palette */}
      <div className="absolute inset-0 bg-space/45" aria-hidden />

      <div className="section-pad relative">
      
        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          {/* ── Left: the pitch ─────────────────────────────────────── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              src={asset(flagship.logo)}
              alt={flagship.title}
              className="pixel-art w-full max-w-md drop-shadow-[4px_4px_0_rgba(0,0,0,0.6)]"
            />

            <span className="mt-4 inline-block animate-pulse border-2 border-gold bg-gold/15 px-3 py-1.5 font-pixel text-[9px] uppercase tracking-widest text-gold">
              ● {flagship.status}
            </span>

            <p className="mt-6 max-w-xl font-retro text-2xl leading-relaxed text-ink">
              {flagship.hook}
            </p>
            <p className="mt-4 max-w-xl font-retro text-xl leading-relaxed text-muted">
              {flagship.blurb}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {flagship.tags.map((tag) => (
                <span
                  key={tag}
                  className="border-2 border-haze bg-nebula px-3 py-1 font-pixel text-[8px] uppercase tracking-wider text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <PixelButton href={flagship.pageUrl} variant="primary">
                Explore the Game →
              </PixelButton>
              <PixelButton href={flagship.steamUrl} variant="secondary" external>
                ▶ Play the Demo
              </PixelButton>
            </div>

            <p className="mt-5 font-retro text-lg text-muted">
              {flagship.releaseLine}
            </p>
          </div>

          {/* ── Right: art stack ────────────────────────────────────── */}
          {/* These open the lightbox rather than the subpage — a screenshot
              that navigates away reads as a broken promise. "Explore the
              Game" is the one route to the subpage. */}
          <div className="grid gap-4">
            <button
              onClick={() => setActive(0)}
              aria-label={`Enlarge ${flagship.title} screenshot 1`}
              className="group relative block overflow-hidden border-2 border-haze shadow-pixel-lg transition-transform hover:-translate-y-1"
            >
              <img
                src={asset(shots[0])}
                alt={`${flagship.title} gameplay`}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="border-2 border-haze bg-void/85 px-2 py-1 font-pixel text-[8px] uppercase tracking-wider text-ink">
                  ⛶ Enlarge
                </span>
              </span>
            </button>

            <div className="grid grid-cols-3 gap-4">
              {shots.slice(1).map((shot, i) => (
                <button
                  key={shot}
                  onClick={() => setActive(i + 1)}
                  aria-label={`Enlarge ${flagship.title} screenshot ${i + 2}`}
                  className="group block overflow-hidden border-2 border-haze shadow-pixel transition-transform hover:-translate-y-1"
                >
                  <img
                    src={asset(shot)}
                    alt={`${flagship.title} screenshot ${i + 2}`}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {flagship.facts.map((fact) => (
                <div key={fact.label} className="pixel-card p-4 text-center">
                  <div className="font-pixel text-lg text-gold">
                    {fact.value}
                  </div>
                  <div className="mt-2 font-retro text-lg leading-snug text-muted">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        images={shots.map(asset)}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
        altPrefix={`${flagship.title} screenshot`}
      />
    </section>
  );
}
