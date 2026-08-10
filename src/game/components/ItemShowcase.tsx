import { asset, items } from "../content";
import SectionHeading from "./ui/SectionHeading";

// Exact colors from the game's rarity ladder (CustomColors.gd).
const rarityColor: Record<string, string> = {
  Common: "text-[#868188]", // grey
  Uncommon: "text-[#8AB060]", // green
  Rare: "text-[#4B80CA]", // blue
  Mythical: "text-[#B45252]", // red
  Legendary: "text-[#D3A068]", // orange
  Cursed: "text-[#CF8ACB]", // pink
};

export default function ItemShowcase() {
  return (
    <section id="loot" className="section-pad">
      <SectionHeading eyebrow="The Loot" glyph="◈" center>
        Relics with opinions
      </SectionHeading>
      <p className="lead mx-auto -mt-6 mb-12 max-w-2xl text-center">
        Every item shifts your build — and most have something to say about it.
        Here's a taste of what you'll dig out of the sand.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="pixel-card group flex flex-col items-center p-6 text-center transition-transform hover:-translate-y-1"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center border-2 border-dune bg-tomb">
              <img
                src={asset(item.icon)}
                alt={item.name}
                className="h-12 w-12 transition-transform group-hover:scale-110"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <p
              className={`font-pixel text-[9px] uppercase tracking-wider ${
                rarityColor[item.rarity] ?? "text-muted"
              }`}
            >
              {item.rarity}
            </p>
            <h3 className="mt-2 font-pixel text-[11px] leading-snug text-papyrus">
              {item.name}
            </h3>
            <p className="mt-3 font-retro text-lg italic leading-snug text-muted">
              &ldquo;{item.flavor}&rdquo;
            </p>
          </div>
        ))}
      </div>

      <p className="lead mx-auto mt-10 max-w-2xl text-center">
        …and 200+ more relics across six rarities — from common trinkets to
        run-warping <span className="text-[#D3A068]">legendaries</span> and
        double-edged <span className="text-[#CF8ACB]">curses</span>.
      </p>
    </section>
  );
}
