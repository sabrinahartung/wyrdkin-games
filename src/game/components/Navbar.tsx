import { STEAM_URL, asset, homeUrl, studio } from "../content";
import PixelButton from "./ui/PixelButton";

const links = [
  { label: "Game", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Loot", href: "#loot" },
  { label: "Cats", href: "#cats" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-dune bg-tomb/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-3 sm:px-8">
        {/* Studio mark — the way back out of the game page */}
        <a
          href={homeUrl}
          className="flex shrink-0 items-center gap-2 text-muted transition-colors hover:text-papyrus"
          aria-label={`Back to ${studio.name} ${studio.nameLine2}`}
        >
          <img
            src={asset("wyrdkin_mark_light.png")}
            alt=""
            aria-hidden
            className="h-8 w-8"
          />
          <span className="hidden font-pixel text-[9px] uppercase tracking-wider sm:block">
            ← Studio
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-retro text-lg uppercase tracking-wide text-muted transition-colors hover:text-papyrus"
            >
              {l.label}
            </a>
          ))}
        </div>

        <PixelButton
          href={STEAM_URL}
          external
          variant="primary"
          className="ml-auto"
        >
          ♡ Wishlist
        </PixelButton>
      </nav>
    </header>
  );
}
