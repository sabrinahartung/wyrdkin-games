import { roadmap } from "../content";
import SectionHeading from "./ui/SectionHeading";
import ComingSoon from "./ui/ComingSoon";

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-pad">
      <SectionHeading accent="Roadmap">The</SectionHeading>
      <p className="mx-auto mt-4 max-w-lg text-center font-retro text-xl text-muted">
        Where we are, and where we're headed.
      </p>
      <ComingSoon />

      {/* Parchment-style scroll panel, echoing the reference's roadmap block */}
      <div className="mt-12 border-2 border-gold bg-panel p-6 shadow-pixel-lg sm:p-10">
        <div className="grid gap-5 sm:grid-cols-4">
          {roadmap.map((step) => (
            <div
              key={step.quarter}
              className={`border-2 p-5 text-center ${
                step.done
                  ? "border-cyan bg-nebula"
                  : "border-haze bg-space opacity-80"
              }`}
            >
              <div className="font-pixel text-lg text-gold">{step.quarter}</div>
              <div className="mt-3 font-retro text-xl text-ink">
                {step.title}
              </div>
              <div
                className={`mt-3 font-pixel text-[8px] uppercase ${
                  step.done ? "text-cyan" : "text-muted"
                }`}
              >
                {step.done ? "✓ Done" : "Locked"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
