import { tickerItems } from "../content";

export default function Ticker() {
  // Duplicated once so the -50% keyframe loops seamlessly.
  const row = [...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden border-b-2 border-dune bg-night py-2">
      <div className="flex w-max animate-ticker gap-6 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="font-pixel text-[10px] uppercase tracking-wider text-gold/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
