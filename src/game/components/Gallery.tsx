import { useState } from "react";
import { asset, screenshots } from "../content";
import SectionHeading from "./ui/SectionHeading";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-pad">
      <SectionHeading eyebrow="Screenshots" glyph="◈" center>
        Straight from the arena
      </SectionHeading>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className="group overflow-hidden border-2 border-dune shadow-pixel transition-transform hover:-translate-y-1"
            aria-label={`Open screenshot ${i + 1}`}
          >
            <img
              src={asset(src)}
              alt={`Whiskers In The Sand screenshot ${i + 1}`}
              loading="lazy"
              className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ imageRendering: "auto" }}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-tomb/90 p-4 backdrop-blur"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={asset(screenshots[active])}
            alt={`Whiskers In The Sand screenshot ${active + 1}`}
            className="max-h-[85vh] max-w-6xl border-2 border-gold shadow-pixel-lg"
            style={{ imageRendering: "auto" }}
          />
          <button
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 border-2 border-gold bg-sand px-3 py-2 font-pixel text-[10px] uppercase text-gold hover:bg-dune"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
