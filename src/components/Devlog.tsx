import { devlog } from "../content";
import SectionHeading from "./ui/SectionHeading";
import ComingSoon from "./ui/ComingSoon";

const tagColor: Record<string, string> = {
  DEVLOG: "text-neon",
  ART: "text-cyan",
  DESIGN: "text-gold",
  AUDIO: "text-grape",
};

export default function Devlog() {
  return (
    <section id="devlog" className="section-pad">
      <SectionHeading accent="Updates">Latest</SectionHeading>
      <p className="mx-auto mt-4 max-w-lg text-center font-retro text-xl text-muted">
        What we've been up to.
      </p>
      <ComingSoon />

      <div className="mx-auto mt-12 max-w-3xl divide-y-2 divide-haze border-2 border-haze bg-nebula shadow-pixel">
        {devlog.map((entry) => (
          <a
            key={entry.id}
            href="#"
            className="flex items-center gap-4 p-4 transition-colors hover:bg-panel sm:gap-6"
          >
            <span
              className={`w-16 shrink-0 font-pixel text-[8px] uppercase ${
                tagColor[entry.tag] ?? "text-ink"
              }`}
            >
              {entry.tag}
            </span>
            <span className="flex-1 font-retro text-xl text-ink">
              {entry.title}
            </span>
            <span className="hidden font-retro text-lg text-muted sm:block">
              {entry.author}
            </span>
            <span className="shrink-0 font-retro text-lg text-muted">
              {entry.date}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
