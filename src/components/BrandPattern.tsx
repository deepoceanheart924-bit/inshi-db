import { cn } from "@/lib/utils";

/**
 * Signature pattern for 院試DB: interlocking circles (physics orbits)
 * with subtle math notation. Used as brand moment.
 */
export function BrandPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn("absolute inset-0 h-full w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="brand" width="160" height="160" patternUnits="userSpaceOnUse">
          {/* Interlocking orbit circles */}
          <circle cx="80" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
          <circle cx="80" cy="80" r="25" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
          <circle cx="80" cy="80" r="10" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
          {/* Dots at cardinal points */}
          <circle cx="80" cy="40" r="1" fill="currentColor" opacity="0.7" />
          <circle cx="120" cy="80" r="1" fill="currentColor" opacity="0.7" />
          <circle cx="80" cy="120" r="1" fill="currentColor" opacity="0.7" />
          <circle cx="40" cy="80" r="1" fill="currentColor" opacity="0.7" />
          {/* Crosshair */}
          <line x1="80" y1="70" x2="80" y2="90" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
          <line x1="70" y1="80" x2="90" y2="80" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
          {/* Small math notation */}
          <text
            x="80"
            y="155"
            textAnchor="middle"
            fontSize="6"
            fill="currentColor"
            opacity="0.3"
            fontStyle="italic"
            fontFamily="serif"
          >
            ∮ · dℓ
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#brand)" />
    </svg>
  );
}
