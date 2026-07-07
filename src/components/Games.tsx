import { games } from "../content";
import SectionHeading from "./ui/SectionHeading";
import Placeholder from "./ui/Placeholder";

export default function Games() {
  return (
    <section id="games" className="section-pad">
      <SectionHeading accent="Our Games">Collect</SectionHeading>
      <p className="mx-auto mt-4 max-w-lg text-center font-retro text-xl text-muted">
        Everything we're building.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3">
        {games.map((game) => (
          <div key={game.id} className="group">
            <div className="pixel-card overflow-hidden transition-transform group-hover:-translate-y-1">
              <Placeholder
                label={game.title}
                color={game.color}
                image={game.image}
                aspect="aspect-[3/4]"
                className="!border-0"
              />
              <div className="flex items-center justify-between gap-2 border-t-2 border-haze bg-nebula p-3">
                <span className="font-pixel text-[9px] text-ink">
                  {game.title}
                </span>
                <span className="font-pixel text-[7px] uppercase text-cyan">
                  {game.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
