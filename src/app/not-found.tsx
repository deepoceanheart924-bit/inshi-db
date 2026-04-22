import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { MathSymbolsBackground } from "@/components/patterns";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <MathSymbolsBackground className="text-primary" />

      <div className="relative text-center px-6 max-w-md">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          Error 404
        </p>
        <h1 className="text-7xl font-bold tracking-tighter mb-4 bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-3">ページが見つかりません</h2>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          お探しのページは削除されたか、URLが変更された可能性があります。
        </p>

        <div className="flex justify-center gap-3">
          <Link href="/" className={cn(buttonVariants())}>
            ホームに戻る
          </Link>
          <Link href="/fields/all" className={cn(buttonVariants({ variant: "outline" }))}>
            問題を探す
          </Link>
        </div>
      </div>
    </div>
  );
}
