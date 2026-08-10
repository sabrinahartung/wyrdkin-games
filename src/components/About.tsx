import { studio, studioStats, asset } from "../content";
import SectionHeading from "./ui/SectionHeading";
import Placeholder from "./ui/Placeholder";

export default function About() {
  return (
    <section id="studio" className="section-pad">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeading accent="Are We?" align="left">
            Who
          </SectionHeading>
          <p className="mt-6 font-retro text-2xl leading-relaxed text-muted">
            {studio.blurb}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {studioStats.map((stat) => (
              <div key={stat.label} className="pixel-card p-4 text-center">
                <div className="font-pixel text-xl text-gold">{stat.value}</div>
                <div className="mt-2 font-retro text-lg text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Placeholder
          label={`${studio.name} ${studio.nameLine2} mascot`}
          image={asset("wyrdkin_games_logo_light.png")}
          aspect="aspect-square"
          fit="contain"
          className="shadow-pixel-lg"
        />
      </div>
    </section>
  );
}
