import { asset, characters } from "../content";
import SectionHeading from "./ui/SectionHeading";

export default function Characters() {
  return (
    <section id="cats" className="section-pad">
      <SectionHeading eyebrow="The Cats" glyph="◈" center>
        Choose your fighter
      </SectionHeading>
      <p className="lead mx-auto -mt-6 mb-12 max-w-2xl text-center">
        Each cat plays differently and has its own signature weapons
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {characters.map((c) => (
          <div
            key={c.name}
            className="pixel-card relative flex flex-col items-center p-6 text-center transition-transform hover:-translate-y-1"
          >
            {c.demo ? (
              <span className="absolute right-2 top-2 border border-lapis bg-tomb px-2 py-0.5 font-pixel text-[7px] uppercase tracking-wider text-lapis">
                In Demo
              </span>
            ) : (
              <span className="absolute right-2 top-2 border border-dune bg-tomb px-2 py-0.5 font-pixel text-[7px] uppercase tracking-wider text-muted">
                Unlockable
              </span>
            )}
            <div className="mb-4 flex h-24 w-24 items-center justify-center border-2 border-dune bg-tomb">
              <img
                src={asset(c.portrait)}
                alt={c.name}
                className="h-16 w-16"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <h3 className="font-pixel text-[11px] leading-snug text-gold">
              {c.name}
            </h3>
            <p className="mt-3 font-retro text-lg leading-snug text-muted">
              {c.blurb}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
