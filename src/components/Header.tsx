"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeSelector } from "@/components/ThemeSelector";
import { cn } from "@/lib/utils";
import { BOOKS_ENABLED } from "@/lib/features";
import { useEffect, useState } from "react";

function SearchHint() {
  const [mod, setMod] = useState("⌘");
  useEffect(() => {
    const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/i.test(navigator.platform);
    setMod(isMac ? "⌘" : "Ctrl");
  }, []);
  const trigger = () => {
    const e = new KeyboardEvent("keydown", { key: "k", metaKey: true, ctrlKey: true });
    document.dispatchEvent(e);
  };
  return (
    <button
      onClick={trigger}
      className="hidden sm:flex items-center gap-2 h-7 px-2.5 rounded-md border text-xs text-muted-foreground hover:bg-muted transition-colors"
      aria-label="Open search"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <span className="hidden md:inline">検索</span>
      <kbd className="text-[10px] bg-muted border rounded px-1 py-0.5">{mod}K</kbd>
    </button>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm transition-transform duration-200 group-hover:scale-105">
            院
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-none tracking-tight">院試DB</span>
            <span className="text-[10px] text-muted-foreground leading-none mt-0.5 hidden sm:block">
              Physics &amp; Math Exam DB
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-xs")}
          >
            大学一覧
          </Link>
          <Link
            href="/fields/all"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-xs")}
          >
            分野別
          </Link>
          <Link
            href="/topics"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-xs")}
          >
            解説
          </Link>
          {BOOKS_ENABLED && (
            <Link
              href="/books"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-xs")}
            >
              参考書
            </Link>
          )}
          <SearchHint />
          <ThemeSelector />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
