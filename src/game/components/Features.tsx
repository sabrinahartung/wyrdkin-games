import { asset, features } from "../content";
import SectionHeading from "./ui/SectionHeading";

export default function Features() {
  return (
    <section id="features" className="section-pad">
      <SectionHeading eyebrow="The Loop" glyph="◈" center>
        Fight. Loot. Upgrade. Die. Repeat.
      </SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="pixel-card flex flex-col p-6 transition-transform hover:-translate-y-1"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center border-2 border-dune bg-tomb">
              <img
                src={asset(f.icon)}
                alt=""
                aria-hidden
                className="h-9 w-9"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <h3 className="font-pixel text-sm leading-snug text-papyrus">
              {f.title}
            </h3>
            <p className="mt-3 font-retro text-lg leading-relaxed text-muted">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
