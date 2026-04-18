"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
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
              Graduate Exam Database
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
          <ThemeToggle />
          <Link
            href="#"
            className={cn(buttonVariants({ size: "sm" }), "text-xs ml-1")}
          >
            Premium
          </Link>
        </nav>
      </div>
    </header>
  );
}
