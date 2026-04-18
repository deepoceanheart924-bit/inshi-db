import { Badge } from "@/components/ui/badge";
import { Difficulty, DIFFICULTY_LABELS } from "@/data/types";

const DIFFICULTY_CLASSES: Record<Difficulty, string> = {
  basic: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  standard: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
  advanced: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <Badge variant="outline" className={DIFFICULTY_CLASSES[difficulty]}>
      {DIFFICULTY_LABELS[difficulty]}
    </Badge>
  );
}
