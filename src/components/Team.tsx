import { useEffect, useState } from "react";
import { team } from "../content";
import SectionHeading from "./ui/SectionHeading";
import Placeholder from "./ui/Placeholder";

const INTERVAL = 5000; // ms between auto-advances

export default function Team() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const member = team[index];
  const go = (i: number) => setIndex((i + team.length) % team.length);

  // Auto-advance every INTERVAL. Resets on manual nav (index dep) and pauses on
  // hover. Skips entirely if the visitor prefers reduced motion.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return;
    const id = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(id);
  }, [index, paused]);

  return (
    <section id="team" className="section-pad">
      <SectionHeading accent="Crew">Meet the</SectionHeading>
      <p className="mx-auto mt-4 max-w-lg text-center font-retro text-xl text-muted">
        Seven people, too many ideas.
      </p>

      <div
        className="mx-auto mt-12 max-w-md"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pixel-card p-6 text-center sm:p-8">
          {/* key remounts the card on change so the fade-in replays */}
          <div key={member.id} className="animate-fade">
            <div className="mx-auto max-w-[220px]">
              <Placeholder
                label={member.name}
                color={member.color}
                aspect="aspect-square"
                className="!border-0"
              />
            </div>
            <div className="mt-5 font-pixel text-sm text-ink">{member.name}</div>
            <div className="mt-2 font-pixel text-[8px] uppercase text-neon">
              {member.role}
            </div>
            <p className="mx-auto mt-4 max-w-xs font-retro text-lg text-muted">
              {member.blurb}
            </p>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous crew member"
              className="font-pixel text-xs text-muted transition-colors hover:text-neon"
            >
              ◀
            </button>
            <div className="flex gap-2">
              {team.map((m, i) => (
                <button
                  key={m.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${m.name}`}
                  className={`h-2.5 w-2.5 border-2 transition-colors ${
                    i === index
                      ? "border-neon bg-neon"
                      : "border-haze bg-transparent hover:border-grape"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(index + 1)}
              aria-label="Next crew member"
              className="font-pixel text-xs text-muted transition-colors hover:text-neon"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
