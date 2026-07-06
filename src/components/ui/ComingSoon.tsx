interface Props {
  label?: string;
}

/** Small pixel badge marking a section as work-in-progress. */
export default function ComingSoon({ label = "Coming soon!" }: Props) {
  return (
    <div className="mt-5 flex justify-center">
      <span className="inline-block border-2 border-gold bg-space px-3 py-1.5 font-pixel text-[9px] uppercase tracking-wider text-gold shadow-pixel">
        ★ {label} ★
      </span>
    </div>
  );
}
