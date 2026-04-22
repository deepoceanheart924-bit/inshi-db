import { ExamRule } from "@/data/types";

type Props = {
  rule?: ExamRule;
  problemCount: number;
};

/**
 * 試験ページ上部に表示する受験ルールカード。
 * rule が未設定の場合でも、登録済み大問数だけは表示する。
 */
export function ExamRuleCard({ rule, problemCount }: Props) {
  const items: { label: string; value: string }[] = [];

  if (rule?.totalQuestions != null && rule?.requiredCount != null) {
    items.push({
      label: "出題形式",
      value: `${rule.totalQuestions}問から${rule.requiredCount}問選択`,
    });
  } else {
    items.push({
      label: "登録済み大問",
      value: `${problemCount}問`,
    });
  }

  if (rule?.durationMinutes != null) {
    items.push({
      label: "制限時間",
      value: `${rule.durationMinutes}分`,
    });
  }

  return (
    <div className="rounded-xl border bg-card/60 backdrop-blur-sm p-5">
      <div className="flex items-center gap-2 mb-3">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          Exam Rules
        </p>
      </div>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((it) => (
          <div key={it.label} className="flex items-baseline gap-3">
            <dt className="text-xs text-muted-foreground shrink-0 w-20">
              {it.label}
            </dt>
            <dd className="text-sm font-semibold">{it.value}</dd>
          </div>
        ))}
      </dl>

      {rule?.notes && (
        <p className="mt-3 pt-3 border-t border-dashed text-xs text-muted-foreground leading-relaxed">
          ※ {rule.notes}
        </p>
      )}
    </div>
  );
}
