import { useEffect } from "react";

interface Props {
  /** Fully resolved image URLs (run them through `asset()` first). */
  images: string[];
  /** Index of the open image, or null when the lightbox is closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  /** Used to build each image's alt text: "<altPrefix> screenshot 2". */
  altPrefix?: string;
}

/**
 * Full-screen image viewer. Closes on Esc or a click outside the image, and
 * steps through the set with the arrow keys.
 */
export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
  altPrefix = "Screenshot",
}: Props) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight")
        onNavigate((index! + 1) % images.length);
      if (event.key === "ArrowLeft")
        onNavigate((index! - 1 + images.length) % images.length);
    }

    document.addEventListener("keydown", handleKey);
    // Stop the page behind the overlay from scrolling.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, index, images.length, onClose, onNavigate]);

  if (!open) return null;

  const step = (delta: number) =>
    onNavigate((index! + delta + images.length) % images.length);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-void/95 p-4 backdrop-blur"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${altPrefix} viewer`}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 border-2 border-haze bg-nebula px-3 py-2 font-pixel text-[10px] text-ink transition-colors hover:border-neon hover:text-neon"
      >
        ✕
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 border-2 border-haze bg-nebula px-3 py-4 font-pixel text-[10px] text-ink transition-colors hover:border-neon hover:text-neon"
          >
            ◀
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 border-2 border-haze bg-nebula px-3 py-4 font-pixel text-[10px] text-ink transition-colors hover:border-neon hover:text-neon"
          >
            ▶
          </button>
        </>
      )}

      {/* Clicks on the image itself shouldn't close the viewer */}
      <figure onClick={(event) => event.stopPropagation()}>
        <img
          src={images[index!]}
          alt={`${altPrefix} ${index! + 1}`}
          className="max-h-[80vh] max-w-[90vw] border-2 border-haze shadow-pixel-lg"
        />
        {images.length > 1 && (
          <figcaption className="mt-4 text-center font-pixel text-[10px] uppercase tracking-wider text-muted">
            {index! + 1} / {images.length}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
