import { Field } from "@/data/types";

/* ============================================================
 *  Editorial linework field icons.
 *  Hairline 1.25, currentColor, no fills (except meaningful dots).
 *  Replace with restraint — these read like physics journal figures.
 * ============================================================ */

const baseAttrs = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Mechanics({ className }: { className?: string }) {
  // Simple pendulum: pivot, rod, bob, motion arc.
  return (
    <svg {...baseAttrs} className={className} aria-hidden>
      <line x1="14" y1="8" x2="50" y2="8" />
      <line x1="14" y1="6" x2="14" y2="10" />
      <line x1="50" y1="6" x2="50" y2="10" />
      <circle cx="32" cy="8" r="1.4" fill="currentColor" stroke="none" />
      <line x1="32" y1="8" x2="32" y2="46" />
      <circle cx="32" cy="50" r="6" />
      <path d="M 14 50 A 18 18 0 0 1 50 50" strokeDasharray="1.5 3" opacity="0.55" />
      <path d="M 50 50 l -2.5 -2 m 2.5 2 l -1.5 2.8" />
    </svg>
  );
}

function Electromagnetism({ className }: { className?: string }) {
  // Solenoid coil with field arrows.
  return (
    <svg {...baseAttrs} className={className} aria-hidden>
      <line x1="6" y1="32" x2="14" y2="32" />
      <line x1="50" y1="32" x2="58" y2="32" />
      {/* coil loops */}
      <path d="M 14 28 Q 18 24 22 28 T 30 28 T 38 28 T 46 28 T 50 28" />
      <path d="M 14 36 Q 18 40 22 36 T 30 36 T 38 36 T 46 36 T 50 36" />
      <line x1="14" y1="28" x2="14" y2="36" />
      <line x1="50" y1="28" x2="50" y2="36" />
      {/* field arrows */}
      <path d="M 22 18 l 6 -3 m -6 3 l 6 3" opacity="0.7" />
      <line x1="22" y1="18" x2="42" y2="18" opacity="0.7" />
      <path d="M 42 46 l -6 -3 m 6 3 l -6 3" opacity="0.7" />
      <line x1="42" y1="46" x2="22" y2="46" opacity="0.7" />
    </svg>
  );
}

function Quantum({ className }: { className?: string }) {
  // Wavefunction psi with amplitude envelope.
  return (
    <svg {...baseAttrs} className={className} aria-hidden>
      {/* axis */}
      <line x1="6" y1="32" x2="58" y2="32" strokeDasharray="1.5 3" opacity="0.45" />
      {/* envelope */}
      <path d="M 8 32 Q 32 -2 56 32" opacity="0.4" />
      <path d="M 8 32 Q 32 66 56 32" opacity="0.4" />
      {/* wavefunction */}
      <path d="M 8 32 Q 14 14 20 32 T 32 32 T 44 32 T 56 32" />
      {/* fundamental dots */}
      <circle cx="8" cy="32" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="56" cy="32" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Statistical({ className }: { className?: string }) {
  // Bell curve with axis + sigma marks.
  return (
    <svg {...baseAttrs} className={className} aria-hidden>
      <path d="M 6 50 C 18 50 22 50 28 32 C 31 18 33 18 36 32 C 42 50 46 50 58 50" />
      <line x1="4" y1="52" x2="60" y2="52" />
      <line x1="32" y1="14" x2="32" y2="52" strokeDasharray="1.5 3" opacity="0.4" />
      {/* sigma ticks */}
      <line x1="22" y1="50" x2="22" y2="54" opacity="0.6" />
      <line x1="42" y1="50" x2="42" y2="54" opacity="0.6" />
      <line x1="32" y1="52" x2="32" y2="56" />
    </svg>
  );
}

function Math({ className }: { className?: string }) {
  // Integral symbol + bracketed matrix dots.
  return (
    <svg {...baseAttrs} className={className} aria-hidden>
      {/* integral */}
      <path
        d="M 22 12 Q 22 6 16 6 Q 12 6 12 12 L 12 52 Q 12 58 8 58 Q 4 58 4 52"
        strokeWidth="1.4"
      />
      {/* matrix brackets */}
      <path d="M 30 16 L 26 16 L 26 48 L 30 48" />
      <path d="M 56 16 L 60 16 L 60 48 L 56 48" />
      {/* matrix dots */}
      {[20, 32, 44].map((y) => (
        <g key={y}>
          <circle cx="34" cy={y} r="1.3" fill="currentColor" stroke="none" />
          <circle cx="43" cy={y} r="1.3" fill="currentColor" stroke="none" />
          <circle cx="52" cy={y} r="1.3" fill="currentColor" stroke="none" />
        </g>
      ))}
    </svg>
  );
}

function Optics({ className }: { className?: string }) {
  // Triangular prism with split rays.
  return (
    <svg {...baseAttrs} className={className} aria-hidden>
      <path d="M 22 14 L 42 32 L 22 50 Z" />
      <line x1="4" y1="32" x2="22" y2="32" />
      {/* split rays */}
      <line x1="42" y1="32" x2="60" y2="22" />
      <line x1="42" y1="32" x2="60" y2="28" opacity="0.7" />
      <line x1="42" y1="32" x2="60" y2="34" opacity="0.55" />
      <line x1="42" y1="32" x2="60" y2="40" opacity="0.4" />
      <line x1="42" y1="32" x2="60" y2="46" opacity="0.3" />
    </svg>
  );
}

function Thermodynamics({ className }: { className?: string }) {
  // P-V diagram with isotherm + adiabat curves and axis labels.
  return (
    <svg {...baseAttrs} className={className} aria-hidden>
      {/* axes */}
      <line x1="10" y1="54" x2="56" y2="54" />
      <line x1="10" y1="10" x2="10" y2="54" />
      {/* arrow tips */}
      <path d="M 10 10 l -2 3 m 2 -3 l 2 3" />
      <path d="M 56 54 l -3 -2 m 3 2 l -3 2" />
      {/* isotherm (dashed) */}
      <path d="M 16 50 C 22 22 30 16 50 14" strokeDasharray="2 2" opacity="0.6" />
      {/* adiabat (solid) */}
      <path d="M 14 48 C 22 36 30 26 50 22" />
      {/* tiny labels */}
      <text x="6" y="9" fontSize="6" fill="currentColor" stroke="none" fontFamily="monospace">P</text>
      <text x="56" y="61" fontSize="6" fill="currentColor" stroke="none" fontFamily="monospace">V</text>
    </svg>
  );
}

function Relativity({ className }: { className?: string }) {
  // Light cone (past/future) with worldline.
  return (
    <svg {...baseAttrs} className={className} aria-hidden>
      {/* axes */}
      <line x1="32" y1="6" x2="32" y2="58" strokeDasharray="1.5 3" opacity="0.35" />
      <line x1="6" y1="32" x2="58" y2="32" strokeDasharray="1.5 3" opacity="0.35" />
      {/* future cone */}
      <line x1="32" y1="32" x2="10" y2="8" />
      <line x1="32" y1="32" x2="54" y2="8" />
      <ellipse cx="32" cy="8" rx="22" ry="3" opacity="0.45" />
      {/* past cone */}
      <line x1="32" y1="32" x2="10" y2="56" />
      <line x1="32" y1="32" x2="54" y2="56" />
      <ellipse cx="32" cy="56" rx="22" ry="3" opacity="0.45" />
      {/* event */}
      <circle cx="32" cy="32" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ICONS: Record<Field, (p: { className?: string }) => React.ReactElement> = {
  mechanics: Mechanics,
  electromagnetism: Electromagnetism,
  quantum: Quantum,
  statistical: Statistical,
  math: Math,
  optics: Optics,
  thermodynamics: Thermodynamics,
  relativity: Relativity,
};

export function FieldIcon({
  field,
  className = "size-12",
}: {
  field: Field;
  className?: string;
}) {
  const Component = ICONS[field];
  return <Component className={className} />;
}
