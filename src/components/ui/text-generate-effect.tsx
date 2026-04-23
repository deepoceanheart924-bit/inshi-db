"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * 単語単位で1つずつブラーが取れながら現れるテキスト。
 * ヒーロータイトルに最適。日本語でもスペース区切り（または文字単位）で動く。
 */
export function TextGenerateEffect({
  words,
  className,
  duration = 0.4,
  stagger: staggerDelay = 0.06,
  splitBy = "word",
}: {
  words: string;
  className?: string;
  duration?: number;
  stagger?: number;
  /** "word" はスペース区切り、"char" は1文字ずつ。日本語なら "char" 推奨 */
  splitBy?: "word" | "char";
}) {
  const [scope, animate] = useAnimate();
  const tokens =
    splitBy === "char" ? Array.from(words) : words.split(" ");

  useEffect(() => {
    animate(
      "span.vt-token",
      { opacity: 1, filter: "blur(0px)" },
      { duration, delay: stagger(staggerDelay) },
    );
  }, [animate, duration, staggerDelay]);

  return (
    <motion.span ref={scope} className={cn("inline-block", className)}>
      {tokens.map((tok, i) => (
        <motion.span
          key={`${tok}-${i}`}
          className="vt-token inline-block"
          initial={{ opacity: 0, filter: "blur(8px)" }}
        >
          {tok}
          {splitBy === "word" && i < tokens.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
