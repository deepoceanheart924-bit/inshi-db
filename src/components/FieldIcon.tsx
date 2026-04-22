import { Field } from "@/data/types";

function Mechanics({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Pendulum */}
      <line x1="32" y1="8" x2="32" y2="14" />
      <circle cx="32" cy="8" r="1.5" fill="currentColor" />
      <line x1="32" y1="14" x2="48" y2="42" strokeDasharray="2 2" opacity="0.4" />
      <line x1="32" y1="14" x2="32" y2="42" />
      <circle cx="32" cy="46" r="6" fill="currentColor" fillOpacity="0.15" />
      <path d="M 18 46 A 14 14 0 0 1 46 46" strokeDasharray="2 3" opacity="0.5" />
      {/* arrow */}
      <path d="M 46 46 l -3 -2 m 3 2 l -2 3" />
    </svg>
  );
}

function Electromagnetism({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Magnetic field lines */}
      <ellipse cx="32" cy="32" rx="8" ry="20" />
      <ellipse cx="32" cy="32" rx="14" ry="22" opacity="0.6" />
      <ellipse cx="32" cy="32" rx="20" ry="24" opacity="0.3" />
      <line x1="32" y1="12" x2="32" y2="52" />
      <circle cx="32" cy="14" r="1.5" fill="currentColor" />
      <circle cx="32" cy="50" r="1.5" fill="currentColor" />
      <text x="30" y="20" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none">N</text>
      <text x="30" y="48" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none">S</text>
    </svg>
  );
}

function Quantum({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Atom orbits */}
      <circle cx="32" cy="32" r="3" fill="currentColor" />
      <ellipse cx="32" cy="32" rx="22" ry="8" />
      <ellipse cx="32" cy="32" rx="22" ry="8" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="22" ry="8" transform="rotate(-60 32 32)" />
      <circle cx="54" cy="32" r="1.5" fill="currentColor" />
      <circle cx="21" cy="13" r="1.5" fill="currentColor" />
      <circle cx="21" cy="51" r="1.5" fill="currentColor" />
    </svg>
  );
}

function Statistical({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Bell curve */}
      <path d="M 6 50 Q 22 50 28 32 Q 32 18 32 18 Q 32 18 36 32 Q 42 50 58 50" />
      <line x1="4" y1="54" x2="60" y2="54" />
      <line x1="32" y1="14" x2="32" y2="54" strokeDasharray="2 2" opacity="0.5" />
      <circle cx="32" cy="18" r="1.5" fill="currentColor" />
      {/* data points */}
      <circle cx="14" cy="48" r="1.2" fill="currentColor" opacity="0.6" />
      <circle cx="22" cy="42" r="1.2" fill="currentColor" opacity="0.6" />
      <circle cx="42" cy="42" r="1.2" fill="currentColor" opacity="0.6" />
      <circle cx="50" cy="48" r="1.2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function Math({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Integral symbol with grid */}
      <path d="M 38 14 Q 38 8 32 8 Q 26 8 26 14 L 26 50 Q 26 56 20 56 Q 14 56 14 50" strokeWidth="2" />
      {/* matrix dots */}
      <circle cx="46" cy="18" r="1.2" fill="currentColor" />
      <circle cx="54" cy="18" r="1.2" fill="currentColor" />
      <circle cx="46" cy="26" r="1.2" fill="currentColor" />
      <circle cx="54" cy="26" r="1.2" fill="currentColor" />
      <circle cx="46" cy="34" r="1.2" fill="currentColor" />
      <circle cx="54" cy="34" r="1.2" fill="currentColor" />
      <path d="M 43 14 L 43 38" />
      <path d="M 57 14 L 57 38" />
    </svg>
  );
}

function Optics({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Prism + light */}
      <path d="M 8 40 L 20 12 L 32 40 Z" fill="currentColor" fillOpacity="0.08" />
      <line x1="0" y1="26" x2="14" y2="26" />
      {/* rainbow */}
      <line x1="34" y1="22" x2="62" y2="16" stroke="#ef4444" />
      <line x1="34" y1="26" x2="62" y2="22" stroke="#f59e0b" />
      <line x1="34" y1="30" x2="62" y2="28" stroke="#eab308" />
      <line x1="34" y1="34" x2="62" y2="34" stroke="#22c55e" />
      <line x1="34" y1="38" x2="62" y2="40" stroke="#3b82f6" />
      <line x1="34" y1="42" x2="62" y2="46" stroke="#8b5cf6" />
    </svg>
  );
}

function Thermodynamics({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Thermometer */}
      <rect x="28" y="8" width="8" height="36" rx="4" />
      <circle cx="32" cy="50" r="8" />
      <circle cx="32" cy="50" r="5" fill="currentColor" />
      <line x1="32" y1="42" x2="32" y2="50" strokeWidth="4" />
      {/* tick marks */}
      <line x1="38" y1="14" x2="42" y2="14" />
      <line x1="38" y1="22" x2="42" y2="22" />
      <line x1="38" y1="30" x2="42" y2="30" />
      <line x1="38" y1="38" x2="42" y2="38" />
      {/* heat waves */}
      <path d="M 14 18 Q 18 14 22 18 Q 18 22 14 18" opacity="0.5" />
      <path d="M 14 28 Q 18 24 22 28 Q 18 32 14 28" opacity="0.4" />
    </svg>
  );
}

function Relativity({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Spacetime curvature grid */}
      <ellipse cx="32" cy="32" rx="26" ry="8" />
      <ellipse cx="32" cy="32" rx="18" ry="5" opacity="0.7" />
      <ellipse cx="32" cy="32" rx="10" ry="3" opacity="0.5" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      <line x1="6" y1="32" x2="58" y2="32" strokeDasharray="1 3" opacity="0.3" />
      <line x1="32" y1="6" x2="32" y2="58" strokeDasharray="1 3" opacity="0.3" />
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

export function FieldIcon({ field, className = "size-12" }: { field: Field; className?: string }) {
  const Component = ICONS[field];
  return <Component className={className} />;
}
