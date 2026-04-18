import { Field, FIELD_LABELS, FIELD_COLORS } from "@/data/types";

export function FieldBadge({ field }: { field: Field }) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${FIELD_COLORS[field]}`}
    >
      {FIELD_LABELS[field]}
    </span>
  );
}
