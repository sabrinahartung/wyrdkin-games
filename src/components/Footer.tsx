import { useState } from "react";
import { studio, socials, signoffs, credit } from "../content";
import PixelButton from "./ui/PixelButton";

export default function Footer() {
  // Pick one sign-off at random per page load (stable for this render).
  const [signoff] = useState(
    () => signoffs[Math.floor(Math.random() * signoffs.length)],
  );

  return (
    <footer id="community" className="relative mt-10 border-t-2 border-haze">
      <div className="section-pad text-center">
        <h2 className="mx-auto max-w-3xl font-pixel text-2xl leading-relaxed text-grape sm:text-4xl">
          {signoff}
        </h2>

        <p className="mt-8 font-pixel text-sm text-ink">
          Join the {studio.name} {studio.nameLine2} community.
        </p>
        <p className="mx-auto mt-4 max-w-md font-retro text-xl text-muted">
          Follow along, playtest early builds, and hang out while we make games.
        </p>

        <div className="mt-8">
          <PixelButton href="#" variant="primary">
            Join the Discord
          </PixelButton>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="font-pixel text-[10px] uppercase tracking-wide text-muted transition-colors hover:text-cyan"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="mt-10 font-retro text-lg text-muted/70">
          © {studio.name} {studio.nameLine2} — built in our spare time.
        </p>
        <p className="mt-2 font-retro text-base text-muted/60">{credit}</p>
      </div>
    </footer>
  );
}
