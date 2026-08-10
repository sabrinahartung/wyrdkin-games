import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import About from "./components/About";
import FlagshipGame from "./components/FlagshipGame";
import Devlog from "./components/Devlog";
import Footer from "./components/Footer";
import PixelSlant from "./components/ui/PixelSlant";
import ThemeLab from "./components/ThemeLab";

// Solid band colors — read from the CSS theme vars so slants recolor live too.
const SPACE = "rgb(var(--space))";
const NEBULA = "rgb(var(--panel))"; // lighter `panel` shade for clearer slant contrast
const GOLD = "rgb(var(--gold))"; // accent edge on the pixel slants

export default function App() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main>
        {/* Hero sits on the transparent starfield */}
        <Hero />
        <PixelSlant from={NEBULA} accent={GOLD}  overlap />

        {/* The flagship game comes first — it brings its own backdrop, so it
            sits between the bands rather than inside one. */}

        <FlagshipGame />

        {/* `rise` pulls the staircase up over the game band instead of giving
            it its own row — the negative-margin overlap trick, as a prop. */}
        <PixelSlant to={SPACE} accent={GOLD} rise />
        <div className="bg-space">
          <About />
        </div>

        {/* <PixelSlant from={SPACE} to={NEBULA} flip />
        <div className="bg-panel">
          <Roadmap />
        </div>

        <PixelSlant from={NEBULA} to={SPACE} />
        <div className="bg-space">
          <Team />
        </div> */}

        <PixelSlant from={SPACE} to={NEBULA} flip />
        <div className="bg-panel">
          <Devlog />
        </div>
      </main>

      {/* Band fades back out to the starfield for the footer */}
      <PixelSlant from={NEBULA} flip />
      <Footer />

      <ThemeLab />
    </>
  );
}
