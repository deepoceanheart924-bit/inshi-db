"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeSelector } from "@/components/ThemeSelector";
import { Wordmark } from "@/components/brand/Wordmark";
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
          ? "bg-background/85 backdrop-blur-xl border-b border-foreground/15"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Wordmark size="sm" />


        <nav className="flex items-center gap-0.5 sm:gap-1">
          <NavLink href="/">大学</NavLink>
          <NavLink href="/fields/all">分野</NavLink>
          <NavLink href="/courses">コース</NavLink>
          <NavLink href="/topics">解説</NavLink>
          {BOOKS_ENABLED && <NavLink href="/books">参考書</NavLink>}
          <span aria-hidden className="hidden sm:inline-block w-px h-4 bg-foreground/15 mx-2" />
          <SearchHint />
          <ThemeSelector />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        "font-serif-jp text-[13px] font-medium tracking-tight rounded-none hover:bg-transparent hover:underline underline-offset-[7px] decoration-1"
      )}
    >
      {children}
    </Link>
  );
}
