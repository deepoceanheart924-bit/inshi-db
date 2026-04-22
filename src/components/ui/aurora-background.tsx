import { cn } from "@/lib/utils";

export function AuroraBackground({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="pointer-events-none absolute -inset-[10%] opacity-50 dark:opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(at 27% 37%, oklch(0.65 0.2 260 / 0.3) 0, transparent 60%),
              radial-gradient(at 97% 21%, oklch(0.7 0.15 300 / 0.25) 0, transparent 55%),
              radial-gradient(at 52% 99%, oklch(0.65 0.2 200 / 0.2) 0, transparent 50%),
              radial-gradient(at 10% 29%, oklch(0.7 0.15 320 / 0.2) 0, transparent 50%),
              radial-gradient(at 97% 96%, oklch(0.6 0.18 260 / 0.25) 0, transparent 60%)
            `,
            animation: "aurora 20s ease-in-out infinite",
            filter: "blur(60px)",
          }}
        />
      </div>
      <style>{`
        @keyframes aurora {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-5%, 3%) scale(1.05);
          }
          50% {
            transform: translate(3%, -2%) scale(0.98);
          }
          75% {
            transform: translate(-2%, -3%) scale(1.03);
          }
        }
      `}</style>
      {children}
    </div>
  );
}
