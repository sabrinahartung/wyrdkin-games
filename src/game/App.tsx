import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import ItemShowcase from "./components/ItemShowcase";
import Characters from "./components/Characters";
import TrailerBand from "./components/TrailerBand";
import Gallery from "./components/Gallery";
import WishlistBand from "./components/WishlistBand";
import Footer from "./components/Footer";
import PixelSlant from "../components/ui/PixelSlant";

// Band colors as raw values — the slant paints SVG fills, so it needs the
// color itself, not a Tailwind class. Mirrors the desert palette in
// tailwind.config.js; `--gold` is the desert gold here (see `.theme-desert`).
const TOMB = "#212123";
const NIGHT = "#2a484a";
const GOLD = "rgb(var(--gold))";

export default function App() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main>
        <Hero />

        {/* Alternating tomb / night bands, cut apart by pixel slants. Each one
            hangs over the section below it (`overlap`) instead of sitting in
            its own row, so the staircase bites into the next band. */}
        <PixelSlant to={TOMB} accent={GOLD} rise />
        <div className="bg-tomb">
          <About />
          <TrailerBand />
        </div>

        <PixelSlant from={TOMB} accent={GOLD} overlap />
        <div className="bg-night">
          <Features />
        </div>

        <PixelSlant from={NIGHT} accent={GOLD} flip overlap />
        <div className="bg-tomb">
          <ItemShowcase />
        </div>

        <PixelSlant from={TOMB} accent={GOLD} overlap />
        <div className="bg-night">
          <Characters />
        </div>

        <WishlistBand />

        <PixelSlant from={NIGHT} accent={GOLD} flip overlap />
        <div className="bg-tomb">
          <Gallery />
        </div>
      </main>

      {/* Gallery and the footer are both tomb, so this one is pure accent —
          a gold staircase signing off the page. */}
      <PixelSlant accent={GOLD} height={48} />
      <Footer />
    </>
  );
}
