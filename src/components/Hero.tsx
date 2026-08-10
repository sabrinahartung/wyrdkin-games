import { studio, asset } from "../content";
import PixelButton from "./ui/PixelButton";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="section-pad flex flex-col items-center text-center">

        {/* Wordmark, not a framed art slot: it needs an explicit width because
            the source PNG is transparent and 2:1, so no card/crop around it. */}
        <img
          src={asset("wyrdkin_games_logo_light.png")}
          alt={`${studio.name} ${studio.nameLine2} logo`}
          className="w-full max-w-lg"
        />

        <p className="mx-auto mt-6 max-w-xl font-retro text-2xl text-muted">
          {studio.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PixelButton href="#game" variant="primary">
            Meet Our Game
          </PixelButton>
          <PixelButton href="#community" variant="secondary">
            Join the Discord
          </PixelButton>
        </div>
      </div>
    </section>
  );
}
