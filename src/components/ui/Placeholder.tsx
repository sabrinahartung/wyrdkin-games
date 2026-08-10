interface Props {
  label?: string;
  color?: string;
  image?: string; // optional cover image URL — overrides the color/label fallback
  className?: string;
  aspect?: string; // tailwind aspect class, e.g. "aspect-square"
  // "cover" fills the slot (right for cover art); "contain" fits the whole
  // image in without cropping (right for logos / wordmarks).
  fit?: "cover" | "contain";
}

/**
 * Swappable art slot. Give it an `image` URL to show real cover art, or leave
 * it out for the flat color block with a label and a dashed "drop art here" frame.
 */
export default function Placeholder({
  label = "PLACEHOLDER",
  // Follows the derived palette instead of a hardcoded shade, so art slots
  // stay in tune when the theme sources change.
  color = "rgb(var(--nebula))",
  image,
  className = "",
  aspect = "aspect-square",
  fit = "cover",
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
          className={`absolute inset-0 h-full w-full ${
            fit === "contain" ? "object-contain p-6" : "pixel-art object-cover"
          }`}
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
