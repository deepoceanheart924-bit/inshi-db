import { Badge } from "@/components/ui/badge";
import { Field, FIELD_LABELS } from "@/data/types";

const FIELD_VARIANT_CLASSES: Record<Field, string> = {
  mechanics: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  electromagnetism: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
  quantum: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
  statistical: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  math: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20",
  optics: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20",
  thermodynamics: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
  relativity: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20",
};

export function FieldBadge({ field }: { field: Field }) {
  return (
    <Badge variant="outline" className={FIELD_VARIANT_CLASSES[field]}>
      {FIELD_LABELS[field]}
    </Badge>
  );
}
