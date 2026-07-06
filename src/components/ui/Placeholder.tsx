interface Props {
  label?: string;
  color?: string;
  image?: string; // optional cover image URL — overrides the color/label fallback
  className?: string;
  aspect?: string; // tailwind aspect class, e.g. "aspect-square"
}

/**
 * Swappable art slot. Give it an `image` URL to show real cover art, or leave
 * it out for the flat color block with a label and a dashed "drop art here" frame.
 */
export default function Placeholder({
  label = "PLACEHOLDER",
  color = "#3a2c6e",
  image,
  className = "",
  aspect = "aspect-square",
}: Props) {
  return (
    <div
      className={`${aspect} relative flex items-center justify-center overflow-hidden border-2 border-haze ${className}`}
      style={{ backgroundColor: color }}
    >
      {image ? (
        <img
          src={image}
          alt={label}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <div className="pointer-events-none absolute inset-1.5 border border-dashed border-black/30" />
          <span className="px-2 text-center font-pixel text-[8px] uppercase leading-relaxed text-black/60">
            {label}
          </span>
        </>
      )}
    </div>
  );
}
