"use client";

import { useEffect, useRef } from "react";
import katex from "katex";
import { GLOSSARY, GLOSSARY_KEYS } from "@/data/glossary";

function escapeHTML(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderMathInElement(element: HTMLElement) {
  let html = element.innerHTML;

  html = html.replace(/\$\$([\s\S]*?)\$\$/g, (_, tex) => {
    try {
      return katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false });
    } catch {
      return `<span class="text-red-500">[Math Error]</span>`;
    }
  });

  html = html.replace(/\$([^\$]+?)\$/g, (_, tex) => {
    try {
      return katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return `<span class="text-red-500">[Math Error]</span>`;
    }
  });

  element.innerHTML = html;
}

/**
 * Wrap glossary terms in the given HTML string with tooltip-enabled spans.
 * We only process text content between tags (not inside tag attributes or math).
 * Strategy: split by HTML tags and math delimiters, apply to text chunks only.
 */
function annotateGlossary(html: string): string {
  // Split by tags, math, and already-annotated spans — we only match in raw text.
  // Use a single pass: find sections that are NOT inside $...$ or $$...$$ or HTML tags.
  // Simple approach: mark math with placeholders, apply annotation to remaining, restore.

  const mathChunks: string[] = [];
  // Stash display math
  let work = html.replace(/\$\$[\s\S]*?\$\$/g, (m) => {
    mathChunks.push(m);
    return `\u0000DM${mathChunks.length - 1}\u0000`;
  });
  // Stash inline math
  work = work.replace(/\$[^\$\n]+?\$/g, (m) => {
    mathChunks.push(m);
    return `\u0000IM${mathChunks.length - 1}\u0000`;
  });

  // Stash HTML tags (we don't want to match inside attributes)
  const tagChunks: string[] = [];
  work = work.replace(/<[^>]+>/g, (m) => {
    tagChunks.push(m);
    return `\u0000T${tagChunks.length - 1}\u0000`;
  });

  // Now apply glossary on remaining plain text
  for (const key of GLOSSARY_KEYS) {
    const def = GLOSSARY[key];
    const re = new RegExp(escapeRegex(key), "g");
    work = work.replace(re, (match) => {
      return `<span class="glossary-term" data-term="${escapeHTML(def)}">${match}</span>`;
    });
  }

  // Restore tags
  work = work.replace(/\u0000T(\d+)\u0000/g, (_, i) => tagChunks[Number(i)]);
  // Restore math (these will be rendered by KaTeX later)
  work = work.replace(/\u0000DM(\d+)\u0000/g, (_, i) => mathChunks[Number(i)]);
  work = work.replace(/\u0000IM(\d+)\u0000/g, (_, i) => mathChunks[Number(i)]);

  return work;
}

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function MathContent({ content, className = "" }: { content: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    let html = content;

    // Headers
    html = html.replace(/^## (.+)$/gm, '<h3 class="text-lg font-bold mt-8 mb-3">$1</h3>');

    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

    // Table support (simple markdown tables)
    html = html.replace(/((?:\|[^\n]+\|\n)+)/g, (m) => {
      const rows = m.trim().split("\n");
      const isSeparator = (row: string) => /^\|[\s\-:|]+\|$/.test(row.trim());
      const cells = rows.filter((r) => !isSeparator(r)).map((r) =>
        r.slice(1, -1).split("|").map((c) => c.trim())
      );
      if (cells.length < 2) return m;
      const [header, ...body] = cells;
      return (
        '<div class="my-4 overflow-x-auto"><table class="w-full text-xs border-collapse">' +
        "<thead><tr>" +
        header.map((h) => `<th class="px-3 py-2 text-left font-semibold border-b">${h}</th>`).join("") +
        "</tr></thead><tbody>" +
        body
          .map(
            (row) =>
              "<tr>" +
              row.map((c) => `<td class="px-3 py-2 border-b border-border/50">${c}</td>`).join("") +
              "</tr>"
          )
          .join("") +
        "</tbody></table></div>"
      );
    });

    // Paragraphs
    html = html
      .split("\n\n")
      .map((p) => {
        if (p.startsWith("<h3") || p.startsWith("<strong") || p.startsWith("<div") || p.startsWith("<table")) return p;
        return `<p class="mb-3 leading-relaxed">${p}</p>`;
      })
      .join("");

    // Single line breaks within paragraphs
    html = html.replace(/(?<!>)\n(?!<)/g, "<br/>");

    // Annotate glossary terms (after structure, before math)
    html = annotateGlossary(html);

    ref.current.innerHTML = html;
    renderMathInElement(ref.current);
  }, [content]);

  return <div ref={ref} className={`math-content ${className}`} />;
}
