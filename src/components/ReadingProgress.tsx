"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollHeight, clientHeight } = document.documentElement;
      const scrolled = window.scrollY;
      const max = scrollHeight - clientHeight;
      if (max <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min(100, Math.max(0, (scrolled / max) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 h-[2px] z-40 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary to-purple-500 transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
