function VisualFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-grid relative aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-md border border-border bg-surface">
      <svg viewBox="0 0 500 220" className="h-full w-full" aria-hidden="true">
        {children}
      </svg>
    </div>
  );
}

const label = {
  fontSize: 9,
  fill: "var(--color-text-muted)",
} as const;

export function BicycleModelVisual() {
  return (
    <VisualFrame>
      <line x1="80" y1="110" x2="80" y2="40" stroke="var(--color-text-muted)" strokeWidth="1" strokeDasharray="2 3" />
      <path d="M80 110 L340 60" stroke="var(--color-accent)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="80" cy="110" r="5" fill="var(--color-background)" stroke="var(--color-accent-secondary)" strokeWidth="1.6" />
      <circle cx="340" cy="60" r="5" fill="var(--color-background)" stroke="var(--color-accent-secondary)" strokeWidth="1.6" />
      <line x1="340" y1="60" x2="430" y2="40" stroke="var(--color-text-muted)" strokeWidth="1.4" strokeDasharray="4 3" />
      <path d="M340 60 L400 20" stroke="var(--color-accent-secondary)" strokeWidth="1.6" />
      <path d="M120 105 L200 90" stroke="var(--color-text-muted)" strokeWidth="1" strokeDasharray="1 3" />
      <text x="410" y="18" {...label}>WHEEL PLANE</text>
      <text x="435" y="42" {...label}>PATH</text>
      <text x="60" y="130" {...label}>REAR AXLE</text>
      <text x="345" y="52" {...label}>FRONT AXLE</text>
      <text x="150" y="118" {...label}>β SIDESLIP</text>
    </VisualFrame>
  );
}

export function SlipAngleForceVisual() {
  return (
    <VisualFrame>
      <line x1="50" y1="180" x2="50" y2="30" stroke="var(--color-border-strong)" strokeWidth="1" />
      <line x1="50" y1="180" x2="460" y2="180" stroke="var(--color-border-strong)" strokeWidth="1" />
      <path
        d="M50 180 C 110 90, 190 50, 300 42 C 350 40, 400 46, 440 55"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <line x1="50" y1="180" x2="130" y2="60" stroke="var(--color-accent-secondary)" strokeWidth="1.2" strokeDasharray="3 3" />
      <text x="135" y="58" {...label}>LINEAR REGION</text>
      <text x="300" y="30" {...label}>SATURATION</text>
      <text x="20" y="105" {...label} transform="rotate(-90 20 105)">FY</text>
      <text x="440" y="196" {...label}>SLIP ANGLE α</text>
    </VisualFrame>
  );
}

export function LoadTransferVisual() {
  return (
    <VisualFrame>
      <line x1="60" y1="180" x2="460" y2="180" stroke="var(--color-border-strong)" strokeWidth="1" />
      <line x1="60" y1="180" x2="60" y2="30" stroke="var(--color-border-strong)" strokeWidth="1" />
      <path
        d="M60 180 C 160 60, 280 30, 460 24"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {[
        [130, 118],
        [260, 55],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="var(--color-background)" stroke="var(--color-accent-secondary)" strokeWidth="1.4" />
      ))}
      <line x1="130" y1="118" x2="260" y2="55" stroke="var(--color-text-muted)" strokeWidth="1" strokeDasharray="2 3" />
      <text x="140" y="132" {...label}>INNER (−ΔFz)</text>
      <text x="255" y="42" {...label}>OUTER (+ΔFz)</text>
      <text x="20" y="105" {...label} transform="rotate(-90 20 105)">FY</text>
      <text x="440" y="196" {...label}>FZ</text>
    </VisualFrame>
  );
}

export function UndersteerOversteerVisual() {
  return (
    <VisualFrame>
      <line x1="50" y1="180" x2="50" y2="30" stroke="var(--color-border-strong)" strokeWidth="1" />
      <line x1="50" y1="180" x2="460" y2="180" stroke="var(--color-border-strong)" strokeWidth="1" />
      <path d="M50 140 L440 60" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 140 L440 140" fill="none" stroke="var(--color-text-muted)" strokeWidth="1.4" strokeDasharray="3 3" />
      <path d="M50 140 L440 200" fill="none" stroke="var(--color-accent-secondary)" strokeWidth="2" strokeLinecap="round" />
      <text x="380" y="55" {...label}>UNDERSTEER</text>
      <text x="380" y="132" {...label}>NEUTRAL</text>
      <text x="330" y="205" {...label}>OVERSTEER</text>
      <text x="20" y="105" {...label} transform="rotate(-90 20 105)">STEER δ</text>
      <text x="430" y="196" {...label}>AY</text>
    </VisualFrame>
  );
}

export function GgDiagramVisual() {
  return (
    <VisualFrame>
      <line x1="250" y1="20" x2="250" y2="200" stroke="var(--color-border-strong)" strokeWidth="1" />
      <line x1="80" y1="110" x2="420" y2="110" stroke="var(--color-border-strong)" strokeWidth="1" />
      <ellipse
        cx="250"
        cy="110"
        rx="150"
        ry="80"
        fill="var(--color-accent)"
        opacity="0.08"
        stroke="var(--color-accent)"
        strokeWidth="2"
      />
      <circle cx="330" cy="75" r="3.5" fill="var(--color-background)" stroke="var(--color-accent-secondary)" strokeWidth="1.4" />
      <text x="335" y="72" {...label}>COMBINED</text>
      <text x="250" y="16" {...label} textAnchor="middle">ACCELERATION</text>
      <text x="250" y="214" {...label} textAnchor="middle">BRAKING</text>
      <text x="410" y="125" {...label}>CORNERING</text>
    </VisualFrame>
  );
}
