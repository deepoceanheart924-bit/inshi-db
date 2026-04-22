import { Book, getAmazonUrl, BOOK_FIELD_LABELS } from "@/data/books";

/**
 * Editorial-style book card (glanta-glamping inspired).
 * Serif title, spine-like gradient stripe, generous whitespace.
 */

const FIELD_HUE: Record<string, number> = {
  mechanics: 40,
  electromagnetism: 60,
  quantum: 270,
  statistical: 150,
  thermodynamics: 20,
  math: 330,
  optics: 200,
  relativity: 290,
  exam: 10,
  general: 100,
};

const LEVEL_GLYPH: Record<Book["level"], string> = {
  入門: "I",
  標準: "II",
  上級: "III",
};

export function BookCard({ book, index }: { book: Book; index?: number }) {
  const href = getAmazonUrl(book);
  const hue = FIELD_HUE[book.field] ?? 60;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group block"
    >
      <article className="h-full flex flex-col">
        {/* Visual "book" element — decorative spine/cover gradient */}
        <div
          className="relative aspect-[4/5] overflow-hidden"
          style={{
            background: `linear-gradient(140deg, oklch(0.92 0.04 ${hue}) 0%, oklch(0.75 0.08 ${hue + 15}) 60%, oklch(0.55 0.12 ${hue + 30}) 100%)`,
          }}
        >
          {/* Spine stripe */}
          <div
            aria-hidden
            className="absolute left-0 top-0 bottom-0 w-6"
            style={{
              background: `linear-gradient(180deg, oklch(0.35 0.1 ${hue + 10}) 0%, oklch(0.22 0.08 ${hue}) 100%)`,
              boxShadow: "inset -2px 0 4px rgba(0,0,0,0.2)",
            }}
          />
          {/* Level glyph */}
          <div
            aria-hidden
            className="absolute top-5 right-5 font-serif-jp italic text-6xl leading-none opacity-25"
            style={{ color: `oklch(0.15 0.05 ${hue})` }}
          >
            {LEVEL_GLYPH[book.level]}
          </div>
          {/* Chapter index */}
          {index !== undefined && (
            <div
              className="absolute bottom-5 left-10 font-serif-jp text-[11px] tracking-[0.3em] uppercase"
              style={{ color: "oklch(0.15 0.08 " + hue + ")" }}
            >
              № {String(index + 1).padStart(2, "0")}
            </div>
          )}
          {/* Cover text */}
          <div className="absolute inset-0 flex items-center justify-center p-10 pl-14">
            <h3
              className="font-serif-jp text-center font-semibold leading-snug line-clamp-4"
              style={{
                color: `oklch(0.12 0.06 ${hue})`,
                fontSize: "clamp(1rem, 2vw, 1.4rem)",
              }}
            >
              {book.title.replace(/（.+?）/g, "")}
            </h3>
          </div>
          {/* Subtle hover glow */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(ellipse at center, oklch(1 0 0 / 0.15), transparent 70%)`,
            }}
          />
        </div>

        {/* Meta */}
        <div className="pt-5 pb-1 flex-1 flex flex-col">
          <p className="font-serif-jp text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: "var(--ink-warm-muted)" }}>
            {BOOK_FIELD_LABELS[book.field]} · {book.level}
          </p>

          <h4
            className="font-serif-jp text-lg leading-snug font-semibold mb-1 group-hover:opacity-70 transition-opacity"
            style={{ color: "var(--ink-warm)" }}
          >
            {book.title}
          </h4>

          <p className="text-xs mb-4" style={{ color: "var(--ink-warm-muted)" }}>
            {book.author} — {book.publisher}
          </p>

          <p
            className="text-[13px] leading-relaxed mb-5 line-clamp-3"
            style={{ color: "var(--ink-warm-muted)" }}
          >
            {book.description}
          </p>

          <div className="mt-auto flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--rule-line)" }}>
            <span
              className="font-serif-jp text-xs italic"
              style={{ color: "var(--accent-clay)" }}
            >
              Read more
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: "var(--ink-warm)" }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </a>
  );
}
