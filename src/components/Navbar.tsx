import { nav, studio, asset } from "../content";
import PixelButton from "./ui/PixelButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-haze bg-void/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={asset("wyrdkin_mark_light.png")}
            alt={`${studio.name} ${studio.nameLine2} logo`}
            className="h-9 w-9"
          />
          {/* <span className="hidden font-pixel text-[11px] tracking-wider text-ink sm:block">
            {studio.name} {studio.nameLine2}
          </span> */}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-pixel text-[10px] uppercase tracking-wide text-muted transition-colors hover:text-neon"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <PixelButton href="#community" className="!px-4 !py-2">
          Discord
        </PixelButton>
      </div>
    </header>
  );
}
