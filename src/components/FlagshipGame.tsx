import { asset, flagship } from "../content";
import PixelButton from "./ui/PixelButton";

/**
 * The homepage centerpiece: one game, shown big.
 * Full-bleed screenshot backdrop with the studio's teal wash over it, the game
 * wordmark as the headline, and two exits — Steam, or the game's own subpage.
 */
export default function FlagshipGame() {
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
          <div className="grid gap-4">
            <a
              href={flagship.pageUrl}
              className="group block overflow-hidden border-2 border-haze shadow-pixel-lg transition-transform hover:-translate-y-1"
            >
              <img
                src={asset(flagship.backdrop)}
                alt={`${flagship.title} gameplay`}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <div className="grid grid-cols-3 gap-4">
              {flagship.shots.map((shot, i) => (
                <a
                  key={shot}
                  href={flagship.pageUrl}
                  className="group block overflow-hidden border-2 border-haze shadow-pixel transition-transform hover:-translate-y-1"
                >
                  <img
                    src={asset(shot)}
                    alt={`${flagship.title} screenshot ${i + 2}`}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
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
    </section>
  );
}
