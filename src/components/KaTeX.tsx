"use client";

import { useEffect, useRef } from "react";
import katex from "katex";

function renderMathInElement(element: HTMLElement) {
  const html = element.innerHTML;

  // Replace display math ($$...$$)
  let result = html.replace(/\$\$([\s\S]*?)\$\$/g, (_, tex) => {
    try {
      return katex.renderToString(tex.trim(), {
        displayMode: true,
        throwOnError: false,
      });
    } catch {
      return `<span class="text-red-500">[Math Error]</span>`;
    }
  });

  // Replace inline math ($...$), but not $$
  result = result.replace(/\$([^\$]+?)\$/g, (_, tex) => {
    try {
      return katex.renderToString(tex.trim(), {
        displayMode: false,
        throwOnError: false,
      });
    } catch {
      return `<span class="text-red-500">[Math Error]</span>`;
    }
  });

  element.innerHTML = result;
}

export function MathContent({ content, className = "" }: { content: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      // Convert markdown-like formatting to HTML
      let html = content;

      // Headers
      html = html.replace(/^## (.+)$/gm, '<h3 class="text-lg font-bold mt-6 mb-3 text-gray-800">$1</h3>');

      // Bold
      html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

      // Line breaks to paragraphs
      html = html
        .split("\n\n")
        .map((p) => {
          if (p.startsWith("<h3") || p.startsWith("<strong")) return p;
          return `<p class="mb-3 leading-relaxed">${p}</p>`;
        })
        .join("");

      // Single line breaks within paragraphs
      html = html.replace(/(?<!>)\n(?!<)/g, "<br/>");

      ref.current.innerHTML = html;
      renderMathInElement(ref.current);
    }
  }, [content]);

  return <div ref={ref} className={`math-content ${className}`} />;
}
