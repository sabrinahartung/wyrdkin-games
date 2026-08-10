import { asset, game, STEAM_URL } from "../content";
import PixelButton from "./ui/PixelButton";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Screenshot backdrop, dimmed so the centered content stays legible */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 animate-flicker"
        style={{ backgroundImage: `url(${asset("screens/screen1.jpg")})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-tomb/70 via-tomb/60 to-tomb"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-28">
        {/* Logo as the H1 — alt text carries the name for SEO / screen readers */}
        <h1 className="animate-fade">
          <img
            src={asset("art/logo.png")}
            alt={`${game.title} ${game.titleLine2}`}
            width={450}
            height={450}
            className="h-[450px] w-[450px] max-w-full drop-shadow-[3px_3px_0_rgba(0,0,0,0.6)]"
            style={{ imageRendering: "pixelated" }}
          />
        </h1>

        <p className="lead mt-4 max-w-2xl">{game.hook}</p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <PixelButton href={STEAM_URL} external variant="primary">
            ▶ Play the Demo
          </PixelButton>
          <PixelButton href={STEAM_URL} external variant="steam">
            ♡ Wishlist on Steam
          </PixelButton>
        </div>

        <p className="mt-5 font-retro text-lg text-muted">{game.releaseLine}</p>
      </div>
    </section>
  );
}
