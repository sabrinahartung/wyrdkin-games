interface Props {
  /** Color of the section above. Omit for a transparent top (e.g. over the starfield). */
  from?: string;
  /** Color of the section below. Omit for a transparent bottom. */
  to?: string;
  /** Divider height in px. */
  height?: number;
  /** Number of pixel steps in the staircase. More = finer slant. */
  steps?: number;
  /** Mirror the slant direction. */
  flip?: boolean;
  /** Draws a chunky colored edge along the staircase (e.g. gold). */
  accent?: string;
  /** Thickness of that accent edge, in staircase steps. */
  accentSteps?: number;
  /**
   * Hang the slant OVER the section below it (negative bottom margin), so the
   * staircase bites into the next section instead of taking up its own row.
   * `true` = the slant's full height, or pass a number of px.
   * Pair it with a transparent `to` — otherwise the fill hides what it overlaps.
   */
  overlap?: number | boolean;
  /**
   * The same trick upwards: pull the slant OVER the section above it. Use it
   * with a transparent `from` to let a solid band climb into a hero/backdrop.
   */
  rise?: number | boolean;
}

/**
 * A slanted section transition rendered as a staircase of square pixels,
 * echoing the angled bands in the reference design. Self-contained: it
 * paints `from` above the staircase and `to` below it, so adjacent sections
 * just need matching solid backgrounds.
 *
 * With `overlap` / `rise` it stops being a separate row and lies on top of the
 * neighbouring section (negative margin + its own stacking layer).
 */
export default function PixelSlant({
  from,
  to,
  height = 80,
  steps = 14,
  flip = false,
  accent,
  accentSteps = 1,
  overlap,
  rise,
}: Props) {
  // `true` means "the whole divider"; a number is taken as raw px.
  const toPx = (v: number | boolean | undefined) =>
    v === true ? height : typeof v === "number" ? v : 0;
  const overlapPx = toPx(overlap);
  const risePx = toPx(rise);
  const lifted = overlapPx > 0 || risePx > 0;

  // Build the staircase edge from bottom-left up to top-right.
  const edge: Array<[number, number]> = [[0, steps]];
  for (let i = 0; i < steps; i++) {
    const y = steps - 1 - i; // steps-1 .. 0
    edge.push([i, y]); // step up
    edge.push([i + 1, y]); // run right
  }

  const toEdge = (pts: Array<[number, number]>) =>
    pts.map(([x, y]) => `${x},${y}`).join(" ");

  // Region below the staircase (the incoming section's color).
  const bottomPts = toEdge([...edge, [steps, steps]]);
  // Region above the staircase (the outgoing section's color).
  const topPts = toEdge([...edge, [steps, 0], [0, 0]]);
  // A band tracing the staircase, `accentSteps` thick — the edge out and back,
  // offset downwards. Drawn between the two fills so only the band shows.
  const accentPts = toEdge([
    ...edge,
    ...[...edge]
      .reverse()
      .map(([x, y]) => [x, y + accentSteps] as [number, number]),
  ]);

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${steps} ${steps}`}
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      // An overlapping slant needs its own layer, or the next section's
      // background paints straight over it.
      className={`block w-full ${lifted ? "relative z-10" : ""}`}
      style={{
        height,
        marginTop: risePx ? -risePx : undefined,
        marginBottom: overlapPx ? -overlapPx : undefined,
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    >
      {/* fill via style (not the `fill` attribute) so CSS var() colors resolve */}
      {to && <polygon points={bottomPts} style={{ fill: to }} />}
      {accent && <polygon points={accentPts} style={{ fill: accent }} />}
      {from && <polygon points={topPts} style={{ fill: from }} />}
    </svg>
  );
}
