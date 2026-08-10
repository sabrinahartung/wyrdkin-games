import { STEAM_URL, STEAM_WIDGET_URL } from "../content";
import PixelButton from "./ui/PixelButton";

export default function WishlistBand() {
  return (
    // No rules top or bottom — the pixel slants in App.tsx divide the bands now.
    <section id="wishlist" className="bg-night">
      <div className="section-pad text-center">
        <p className="font-pixel text-[10px] uppercase tracking-widest text-ember">
          ◈ One click helps more than you'd think
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl font-pixel text-2xl leading-tight text-gold sm:text-3xl">
          Wishlist to summon the full release
        </h2>
        <p className="lead mx-auto mt-6 max-w-2xl">
          Wishlists are how Steam decides who sees us at launch. If the demo
          made you smile, hitting wishlist is the single best way to help this
          little cat go the distance.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <PixelButton href={STEAM_URL} external variant="primary">
            ♡ Wishlist on Steam
          </PixelButton>
          <PixelButton href={STEAM_URL} external variant="secondary">
            ▶ Play the Demo
          </PixelButton>
        </div>

        {/* Official Steam store widget */}
        <div className="mx-auto mt-12 max-w-2xl">
          <iframe
            src={STEAM_WIDGET_URL}
            title="Whiskers In The Sand on Steam"
            className="h-[190px] w-full border-2 border-dune"
            frameBorder="0"
          />
        </div>
      </div>
    </section>
  );
}
