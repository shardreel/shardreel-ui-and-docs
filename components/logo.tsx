/**
 * shardreel mark: a peak sliced on a diagonal, the top shard shifted up and right.
 * Drawn as two polygons with no clipPath ids, so duplicate renders (docs sidebar and
 * mobile header) cannot break each other.
 */
export function Logo({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <polygon points="6,56 58,56 47.735,37.05 12.707,43.617" />
      <polygon points="35.5,4.5 51.235,33.55 16.207,40.117" />
    </svg>
  );
}

export function Wordmark({ size = 20 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2 font-semibold tracking-tight">
      <Logo size={size} />
      <span>
        shard<span className="opacity-55">reel</span>
      </span>
    </span>
  );
}
