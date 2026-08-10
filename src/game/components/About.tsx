import { game } from "../content";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <SectionHeading eyebrow="What is it" glyph="◈">
          A roguelite
          <br />
          with claws
        </SectionHeading>
        <div>
          {game.pitch.map((para, i) => (
            <p key={i} className={i > 0 ? "lead mt-4" : "lead"}>
              {para}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            {["Survivors-like", "Roguelite", "Bullet Heaven", "Cats", "Pixel Art"].map(
              (tag) => (
                <span
                  key={tag}
                  className="border-2 border-dune bg-night px-3 py-1 font-pixel text-[9px] uppercase tracking-wider text-muted"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
