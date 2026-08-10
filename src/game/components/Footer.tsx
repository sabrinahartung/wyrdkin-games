import { asset, credit, homeUrl, socials, studio } from "../content";

export default function Footer() {
  return (
    <footer className="bg-tomb">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 sm:px-8">
        <img
          src={asset("art/logo.png")}
          alt="Whiskers In The Sand"
          width={250}
          height={250}
          className="h-[250px] w-[250px] max-w-full drop-shadow-[3px_3px_0_rgba(0,0,0,0.6)]"
          style={{ imageRendering: "pixelated" }}
        />

        <nav className="flex flex-wrap justify-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              {...(s.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="font-pixel text-[10px] uppercase tracking-wider text-muted transition-colors hover:text-gold"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <p className="text-center font-retro text-lg text-muted">
          {credit.line}
        </p>

        {/* Ties the game page back to the studio it came from */}
        <a
          href={homeUrl}
          className="flex items-center gap-3 border-2 border-dune bg-night px-4 py-3 transition-colors hover:border-gold"
        >
          <img
            src={asset("wyrdkin_mark_light.png")}
            alt=""
            aria-hidden
            className="h-7 w-7"
          />
          <span className="font-pixel text-[9px] uppercase leading-relaxed tracking-wider text-muted">
            A game by {studio.name} {studio.nameLine2} →
          </span>
        </a>

        <p className="font-retro text-base text-dune">
          © {new Date().getFullYear()} {studio.name} {studio.nameLine2}
        </p>
      </div>
    </footer>
  );
}
