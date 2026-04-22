import { Book, getAmazonUrl } from "@/data/books";
import { cn } from "@/lib/utils";

/**
 * Compact book reference list for problem / topic pages.
 * Shows 1-3 books with inline CTA.
 */
export function RelatedBooks({ books }: { books: Book[] }) {
  if (books.length === 0) return null;

  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="size-6 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
        </div>
        <h3 className="text-sm font-bold">さらに学ぶための参考書</h3>
      </div>

      <ul className="space-y-2.5">
        {books.map((b) => (
          <li key={b.id} className="flex items-start gap-3 text-xs">
            <span
              className={cn(
                "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium",
                b.level === "入門" && "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
                b.level === "標準" && "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
                b.level === "上級" && "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20"
              )}
            >
              {b.level}
            </span>
            <div className="flex-1 min-w-0">
              <a
                href={getAmazonUrl(b)}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                <span>{b.title}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                </svg>
              </a>
              <p className="text-muted-foreground mt-0.5 text-[11px]">
                {b.author} / {b.publisher}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-[10px] text-muted-foreground/60">
        ※ 本項のリンクはアフィリエイトリンクです
      </p>
    </div>
  );
}
