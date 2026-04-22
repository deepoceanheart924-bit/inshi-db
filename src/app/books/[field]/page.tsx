import Link from "next/link";
import { notFound } from "next/navigation";
import { books, BOOK_FIELD_LABELS, BookField, getBooksByField } from "@/data/books";
import { BookCard } from "@/components/BookCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { BOOKS_ENABLED } from "@/lib/features";
import type { Metadata } from "next";

const VALID_FIELDS: BookField[] = [
  "mechanics",
  "electromagnetism",
  "quantum",
  "statistical",
  "thermodynamics",
  "math",
  "general",
  "exam",
  "optics",
  "relativity",
];

const FIELD_EN: Record<BookField, string> = {
  mechanics: "Of motion and matter",
  electromagnetism: "Fields and radiation",
  quantum: "Where waves become particles",
  statistical: "Order from randomness",
  thermodynamics: "The arrow of time",
  math: "The language of physics",
  general: "Beyond boundaries",
  exam: "For the exam's eve",
  optics: "Of light and interference",
  relativity: "Where time bends",
};

export function generateStaticParams() {
  if (!BOOKS_ENABLED) return [];
  return VALID_FIELDS.map((f) => ({ field: f }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ field: string }>;
}): Promise<Metadata> {
  const { field } = await params;
  if (!VALID_FIELDS.includes(field as BookField)) return { title: "Not Found" };
  const label = BOOK_FIELD_LABELS[field as BookField];
  return {
    title: `${label}のおすすめ参考書 — 院試DB`,
    description: `院試対策に役立つ${label}の参考書を厳選して紹介`,
    robots: BOOKS_ENABLED ? undefined : { index: false, follow: false },
  };
}

export default async function BooksByFieldPage({
  params,
}: {
  params: Promise<{ field: string }>;
}) {
  if (!BOOKS_ENABLED) notFound();
  const { field } = await params;
  if (!VALID_FIELDS.includes(field as BookField)) notFound();

  const bf = field as BookField;
  const list = getBooksByField(bf);

  return (
    <div
      className="editorial min-h-[60vh]"
      style={{ background: "var(--bg-cream)", color: "var(--ink-warm)" }}
    >
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <FadeIn>
          <nav
            className="mb-14 flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase flex-wrap"
            style={{ color: "var(--ink-warm-muted)" }}
          >
            <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <span>/</span>
            <Link href="/books" className="hover:opacity-60 transition-opacity">Books</Link>
            <span>/</span>
            <span>{BOOK_FIELD_LABELS[bf]}</span>
          </nav>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p
            className="font-serif-jp italic text-base mb-4"
            style={{ color: "var(--accent-clay)" }}
          >
            {FIELD_EN[bf]}
          </p>
          <h1
            className="font-serif-jp font-normal leading-[1.15] mb-8"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "var(--ink-warm)",
            }}
          >
            {BOOK_FIELD_LABELS[bf]}
          </h1>
          <div
            className="flex items-center gap-4"
            style={{ color: "var(--ink-warm-muted)" }}
          >
            <p className="font-serif-jp text-xs tracking-[0.25em] uppercase">
              {list.length} volumes
            </p>
            <div className="h-px flex-1" style={{ background: "var(--rule-line)" }} />
          </div>
        </FadeIn>
      </section>

      {/* Filter */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <FadeIn>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <Link
              href="/books"
              className="font-serif-jp text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
              style={{ color: "var(--ink-warm-muted)" }}
            >
              All
            </Link>
            {VALID_FIELDS.map((f) => {
              const count = books.filter((b) => b.field === f).length;
              if (count === 0) return null;
              const isActive = bf === f;
              return (
                <Link
                  key={f}
                  href={`/books/${f}`}
                  className="font-serif-jp text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
                  style={{
                    color: isActive ? "var(--accent-clay)" : "var(--ink-warm-muted)",
                    borderBottom: isActive ? "1px solid var(--accent-clay)" : "none",
                    paddingBottom: isActive ? "2px" : undefined,
                  }}
                >
                  {BOOK_FIELD_LABELS[f]}
                </Link>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* Books grid */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          stagger={0.05}
        >
          {list.map((book, i) => (
            <StaggerItem key={book.id}>
              <BookCard book={book} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {list.length === 0 && (
          <FadeIn>
            <div
              className="text-center py-20 font-serif-jp italic"
              style={{ color: "var(--ink-warm-muted)" }}
            >
              この分野の参考書はまだ選定中です。
            </div>
          </FadeIn>
        )}
      </section>

      {/* Disclosure */}
      <section
        className="border-t"
        style={{
          background: "var(--bg-cream-deep)",
          borderColor: "var(--rule-line)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 py-14 text-center">
          <p
            className="font-serif-jp text-[10px] tracking-[0.4em] uppercase mb-4"
            style={{ color: "var(--accent-clay)" }}
          >
            Disclosure
          </p>
          <p
            className="font-serif-jp text-sm leading-[2]"
            style={{ color: "var(--ink-warm-muted)" }}
          >
            本ページの Amazon リンクはアフィリエイトリンクを含みます。
            購入価格への影響はありません。
          </p>
        </div>
      </section>
    </div>
  );
}
