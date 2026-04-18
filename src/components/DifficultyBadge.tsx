import { Difficulty, DIFFICULTY_LABELS } from "@/data/types";

const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  basic: "bg-emerald-100 text-emerald-700",
  standard: "bg-yellow-100 text-yellow-700",
  advanced: "bg-red-100 text-red-700",
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${DIFFICULTY_STYLES[difficulty]}`}
    >
      {DIFFICULTY_LABELS[difficulty]}
    </span>
  );
}
