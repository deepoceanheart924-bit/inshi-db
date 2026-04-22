"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { universities } from "@/data/universities";
import { problems } from "@/data/problems";
import { FIELD_LABELS, Field } from "@/data/types";
import { topics, CATEGORY_LABELS } from "@/data/topics";
import { books, BOOK_FIELD_LABELS } from "@/data/books";
import { BOOKS_ENABLED } from "@/lib/features";
import { cn } from "@/lib/utils";

type Item = {
  id: string;
  label: string;
  subtitle?: string;
  href: string;
  kind: "uni" | "problem" | "field" | "page" | "topic" | "book";
};

function buildIndex(): Item[] {
  const items: Item[] = [];

  items.push(
    { id: "home", label: "ホーム", href: "/", kind: "page", subtitle: "トップページ" },
    { id: "all", label: "すべての問題", href: "/fields/all", kind: "page" },
    { id: "topics-list", label: "物理解説一覧", href: "/topics", kind: "page", subtitle: "基本概念・定理・躓きポイント" },
    ...(BOOKS_ENABLED
      ? [{ id: "books-list", label: "おすすめ参考書", href: "/books", kind: "page" as const, subtitle: "分野別の参考書紹介" }]
      : []),
    { id: "about", label: "運営について", href: "/about", kind: "page" },
    { id: "contact", label: "お問い合わせ", href: "/contact", kind: "page" },
    { id: "privacy", label: "プライバシーポリシー", href: "/privacy", kind: "page" },
    { id: "takedown", label: "削除依頼・著作権", href: "/takedown", kind: "page" }
  );

  if (BOOKS_ENABLED) {
    for (const b of books) {
      items.push({
        id: `book-${b.id}`,
        label: b.title,
        subtitle: `${b.author}（${BOOK_FIELD_LABELS[b.field]}・${b.level}）`,
        href: `/books/${b.field}#${b.id}`,
        kind: "book",
      });
    }
  }

  for (const t of topics) {
    items.push({
      id: `topic-${t.id}`,
      label: t.title,
      subtitle: `解説: ${CATEGORY_LABELS[t.category]}`,
      href: `/topics/${t.id}`,
      kind: "topic",
    });
  }

  for (const u of universities) {
    items.push({
      id: `uni-${u.slug}`,
      label: u.name,
      subtitle: u.department,
      href: `/universities/${u.slug}`,
      kind: "uni",
    });
  }

  for (const [key, label] of Object.entries(FIELD_LABELS) as [Field, string][]) {
    items.push({
      id: `field-${key}`,
      label,
      subtitle: "分野",
      href: `/fields/${key}`,
      kind: "field",
    });
  }

  for (const p of problems) {
    const uni = universities.find((u) => u.slug === p.universitySlug);
    items.push({
      id: `pro-${p.id}`,
      label: p.title,
      subtitle: `${uni?.shortName} ${p.year}年度 · ${p.subject} 問${p.problemNumber}`,
      href: `/problems/${p.id}`,
      kind: "problem",
    });
  }

  return items;
}

const KIND_LABEL: Record<Item["kind"], string> = {
  uni: "大学",
  problem: "問題",
  field: "分野",
  page: "ページ",
  topic: "解説",
  book: "参考書",
};

const KIND_COLOR: Record<Item["kind"], string> = {
  uni: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  problem: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
  field: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  page: "bg-muted text-muted-foreground",
  topic: "bg-rose-500/10 text-rose-700 dark:text-rose-400",
  book: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const items = useMemo(() => buildIndex(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.slice(0, 40);
    const scored = items
      .map((it) => {
        const hay = `${it.label} ${it.subtitle || ""}`.toLowerCase();
        if (!hay.includes(q)) return { it, score: -1 };
        const idx = hay.indexOf(q);
        return { it, score: 1000 - idx };
      })
      .filter((x) => x.score >= 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30)
      .map((x) => x.it);
    return scored;
  }, [items, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      } else if (open) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setCursor((c) => Math.min(filtered.length - 1, c + 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setCursor((c) => Math.max(0, c - 1));
        } else if (e.key === "Enter") {
          e.preventDefault();
          const sel = filtered[cursor];
          if (sel) {
            router.push(sel.href);
            setOpen(false);
            setQuery("");
          }
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, filtered, cursor, router]);

  useEffect(() => {
    setCursor(0);
  }, [query]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-start justify-center pt-[12vh] px-4"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Palette */}
      <div
        className="relative w-full max-w-xl rounded-2xl border bg-popover shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 border-b px-4 py-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="大学・分野・問題を検索..."
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
          />
          <kbd className="text-[10px] text-muted-foreground border rounded px-1.5 py-0.5 bg-muted">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <div className="px-4 py-12 text-center text-sm text-muted-foreground">
              該当する結果が見つかりません
            </div>
          ) : (
            filtered.map((it, i) => (
              <button
                key={it.id}
                onMouseEnter={() => setCursor(i)}
                onClick={() => {
                  router.push(it.href);
                  setOpen(false);
                  setQuery("");
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors",
                  cursor === i ? "bg-accent" : "hover:bg-muted/50"
                )}
              >
                <span
                  className={cn(
                    "text-[9px] font-semibold uppercase tracking-widest px-1.5 py-0.5 rounded shrink-0",
                    KIND_COLOR[it.kind]
                  )}
                >
                  {KIND_LABEL[it.kind]}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{it.label}</div>
                  {it.subtitle && (
                    <div className="text-[11px] text-muted-foreground truncate">
                      {it.subtitle}
                    </div>
                  )}
                </div>
                {cursor === i && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted-foreground shrink-0"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                )}
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-2 flex items-center justify-between text-[10px] text-muted-foreground">
          <div className="flex gap-3">
            <span className="flex items-center gap-1">
              <kbd className="border rounded px-1 py-0.5 bg-muted">↑↓</kbd> 移動
            </span>
            <span className="flex items-center gap-1">
              <kbd className="border rounded px-1 py-0.5 bg-muted">Enter</kbd> 開く
            </span>
          </div>
          <span>
            {filtered.length} 件
          </span>
        </div>
      </div>
    </div>
  );
}
