export function ExtrusionProfileVisual() {
  return (
    <div className="bg-grid relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-surface">
      <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
        {/* axes */}
        <line x1="40" y1="30" x2="40" y2="170" stroke="var(--color-border-strong)" strokeWidth="1" />
        <line x1="40" y1="170" x2="370" y2="170" stroke="var(--color-border-strong)" strokeWidth="1" />

        {/* theoretical profile (dashed) */}
        <path
          d="M50 165 L75 165 L104 92 L158 90 L158 128 L180 128 L180 90 L250 90 L250 128 L272 128 L272 90 L328 92 L355 165"
          fill="none"
          stroke="var(--color-accent-secondary)"
          strokeWidth="1.6"
          strokeDasharray="4 3"
          strokeLinejoin="round"
        />

        {/* AI-predicted profile (solid, calibrated) */}
        <path
          d="M50 165 L77 165 L106 84 L156 82 L156 134 L182 134 L182 82 L248 82 L248 134 L274 134 L274 82 L326 84 L355 165"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {[
          [106, 84],
          [204, 82],
          [300, 84],
        ].map(([x, y]) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="3"
            fill="var(--color-background)"
            stroke="var(--color-accent)"
            strokeWidth="1.4"
          />
        ))}

        <text x="16" y="100" className="font-mono" fontSize="8" fill="var(--color-text-muted)" transform="rotate(-90 16 100)">
          THICKNESS
        </text>
        <text x="200" y="192" textAnchor="middle" className="font-mono" fontSize="8" fill="var(--color-text-muted)">
          WIDTH
        </text>

        {/* legend */}
        <line x1="70" y1="220" x2="94" y2="220" stroke="var(--color-accent-secondary)" strokeWidth="1.6" strokeDasharray="4 3" />
        <text x="100" y="223" className="font-mono" fontSize="8" fill="var(--color-text-muted)">
          THEORETICAL
        </text>
        <line x1="215" y1="220" x2="239" y2="220" stroke="var(--color-accent)" strokeWidth="2" />
        <text x="245" y="223" className="font-mono" fontSize="8" fill="var(--color-text-muted)">
          AI-PREDICTED (CALIBRATED)
        </text>
      </svg>
    </div>
  );
}
