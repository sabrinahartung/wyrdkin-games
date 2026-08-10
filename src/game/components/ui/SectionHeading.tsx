import type { ReactNode } from "react";

interface Props {
  glyph?: string;
  eyebrow?: string;
  children: ReactNode;
  center?: boolean;
}

export default function SectionHeading({
  glyph,
  eyebrow,
  children,
  center = false,
}: Props) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 font-pixel text-[10px] uppercase tracking-widest text-ember">
          {glyph && <span className="mr-2">{glyph}</span>}
          {eyebrow}
        </p>
      )}
      <h2 className="font-pixel text-2xl leading-tight text-gold sm:text-3xl">
        {children}
      </h2>
      <div
        className={`hiero-rule mt-5 w-40 ${center ? "mx-auto" : ""}`}
        aria-hidden
      />
    </div>
  );
}
