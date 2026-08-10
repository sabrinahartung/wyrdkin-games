import { useRef, useState } from "react";
import { asset, trailer } from "../content";

export default function TrailerBand() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  async function handlePlay() {
    const video = videoRef.current;
    if (!video || started) return;
    setStarted(true);

    // Safari / iOS play HLS natively; everyone else needs hls.js (lazy-loaded
    // only now, on first play, so it never touches initial page load).
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = trailer.hls;
    } else {
      const { default: Hls } = await import("hls.js");
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(trailer.hls);
        hls.attachMedia(video);
      } else {
        // No HLS support at all — fall back to the Steam page.
        window.open(trailer.href, "_blank", "noopener");
        return;
      }
    }
    video.play().catch(() => {});
  }

  return (
    <section className="section-pad">
      <div className="relative mx-auto max-w-4xl overflow-hidden border-2 border-dune shadow-pixel-lg">
        <video
          ref={videoRef}
          poster={asset(trailer.poster)}
          controls={started}
          playsInline
          className="block w-full"
        />

        {!started && (
          <button
            onClick={handlePlay}
            aria-label="Play the gameplay trailer"
            className="group absolute inset-0 flex items-center justify-center bg-tomb/40 transition-colors hover:bg-tomb/20"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-gold bg-tomb/70 text-3xl text-gold transition-transform group-hover:scale-110">
              ▶
            </span>
            <span className="absolute bottom-3 left-0 right-0 text-center font-pixel text-[10px] uppercase tracking-widest text-gold drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
              Watch the Trailer
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
