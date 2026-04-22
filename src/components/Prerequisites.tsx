import { Field } from "@/data/types";
import { PREREQUISITES } from "@/data/prerequisites";
import { Card, CardContent } from "@/components/ui/card";

export function Prerequisites({ field }: { field: Field }) {
  const prereqs = PREREQUISITES[field] || [];
  if (prereqs.length === 0) return null;

  return (
    <Card className="overflow-hidden">
      <CardContent className="py-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="size-6 rounded-md bg-primary/10 text-primary flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <h2 className="text-sm font-bold">この問題を解くための前提知識</h2>
        </div>
        <ul className="space-y-2">
          {prereqs.map((p) => (
            <li
              key={p.term}
              className="flex items-start gap-3 text-sm py-2 border-b last:border-b-0 border-border/50"
            >
              <span className="mt-1 size-1.5 rounded-full bg-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="font-medium">{p.term}</span>
                <span className="text-muted-foreground ml-2 text-xs">— {p.desc}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[10px] text-muted-foreground">
          これらの道具が揃っていればこの問題の解答は追えるはずです。不安な項目があれば先に復習を。
        </p>
      </CardContent>
    </Card>
  );
}
