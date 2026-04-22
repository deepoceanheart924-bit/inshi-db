import Link from "next/link";
import { notFound } from "next/navigation";
import { books, BOOK_FIELD_LABELS, BookField } from "@/data/books";
import { BookCard } from "@/components/BookCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { BOOKS_ENABLED } from "@/lib/features";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "おすすめ参考書",
  description:
    "物理学・数学の院試対策に役立つ参考書を分野別に厳選。定番から最新まで、用途別のおすすめを初学者向けに解説。",
  alternates: { canonical: "/books" },
  openGraph: {
    title: "おすすめ参考書",
    description: "物理学・数学の院試対策に役立つ参考書を分野別に厳選。",
    url: "/books",
    type: "website",
    locale: "ja_JP",
    siteName: "院試DB",
  },
  twitter: { card: "summary_large_image", title: "おすすめ参考書", description: "物理学・数学の院試対策参考書。" },
  robots: BOOKS_ENABLED ? undefined : { index: false, follow: false },
};

type ChapterMeta = {
  field: BookField;
  label: string;
  english: string;
  caption: string;
};

const CHAPTERS: ChapterMeta[] = [
  {
    field: "exam",
    label: "院試対策",
    english: "For the exam's eve",
    caption: "本番に向けて、最後に頼る一冊を。",
  },
  {
    field: "mechanics",
    label: "力学",
    english: "Of motion and matter",
    caption: "運動方程式から解析力学まで、古典の骨格を。",
  },
  {
    field: "electromagnetism",
    label: "電磁気学",
    english: "Fields and radiation",
    caption: "見えない場をどう捉え、どう書くか。",
  },
  {
    field: "quantum",
    label: "量子力学",
    english: "Where waves become particles",
    caption: "直観に反する世界を、言葉と式で少しずつ。",
  },
  {
    field: "statistical",
    label: "統計力学",
    english: "Order from randomness",
    caption: "無数の粒子の向こうに現れる、静かな秩序。",
  },
  {
    field: "thermodynamics",
    label: "熱力学",
    english: "The arrow of time",
    caption: "戻らないものを、どう記述するか。",
  },
  {
    field: "math",
    label: "数学",
    english: "The language of physics",
    caption: "物理を語るための、より澄んだ言葉として。",
  },
  {
    field: "general",
    label: "全般・副読本",
    english: "Beyond boundaries",
    caption: "境界を越えて、物理の全景を眺めるために。",
  },
];

export default function BooksPage() {
  if (!BOOKS_ENABLED) notFound();
  return (
    <div
      className="editorial min-h-[60vh]"
      style={{ background: "var(--bg-cream)", color: "var(--ink-warm)" }}
    >
      {/* ========= HERO ========= */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-14">
        <FadeIn>
          <nav
            className="mb-16 flex items-center gap-2 text-[11px] tracking-[0.2em]"
            style={{ color: "var(--ink-warm-muted)" }}
          >
            <Link href="/" className="uppercase hover:opacity-60 transition-opacity">
              Home
            </Link>
            <span>/</span>
            <span className="uppercase">Books</span>
          </nav>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="font-serif-jp text-[11px] tracking-[0.4em] uppercase mb-5"
            style={{ color: "var(--accent-clay)" }}
          >
            Recommended Readings
          </p>
          <h1
            className="font-serif-jp font-normal mb-8 leading-[1.15]"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
              color: "var(--ink-warm)",
            }}
          >
            書を通して、<br />
            世界を少しずつ。
          </h1>
          <p
            className="font-serif-jp italic text-lg mb-10"
            style={{ color: "var(--ink-warm-muted)" }}
          >
            A curated shelf for graduate school aspirants.
          </p>
          <div
            className="max-w-xl text-[15px] leading-[1.9]"
            style={{ color: "var(--ink-warm-muted)" }}
          >
            <p className="mb-4">
              院試対策は、良書との出会いから始まります。定番の名著から新しい視点の教科書まで、
              運営者が実際に手にとって価値があると感じた書物を、分野別に章立てで紹介します。
            </p>
            <p>
              背伸びせず、けれど最後まで伴走してくれる一冊を。全 {books.length} 冊。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            className="mt-16 flex items-center gap-4"
            style={{ color: "var(--ink-warm-muted)" }}
          >
            <div
              className="h-px flex-1"
              style={{ background: "var(--rule-line)" }}
            />
            <span className="font-serif-jp text-xs tracking-[0.3em] uppercase">
              Scroll
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </FadeIn>
      </section>

      {/* ========= CHAPTERS ========= */}
      {CHAPTERS.map((ch, chIndex) => {
        const list = books.filter((b) => b.field === ch.field);
        if (list.length === 0) return null;

        return (
          <section
            key={ch.field}
            id={ch.field}
            className="relative"
            style={{
              background: chIndex % 2 === 1 ? "var(--bg-cream-deep)" : "var(--bg-cream)",
            }}
          >
            <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
              <FadeIn>
                <div className="grid md:grid-cols-12 gap-8 mb-16">
                  <div className="md:col-span-2">
                    <div
                      className="font-serif-jp text-5xl leading-none"
                      style={{ color: "var(--accent-clay)" }}
                    >
                      {String(chIndex + 1).padStart(2, "0")}
                    </div>
                    <p
                      className="font-serif-jp text-[10px] tracking-[0.3em] uppercase mt-2"
                      style={{ color: "var(--ink-warm-muted)" }}
                    >
                      Chapter
                    </p>
                  </div>

                  <div className="md:col-span-7">
                    <p
                      className="font-serif-jp italic text-base mb-3"
                      style={{ color: "var(--accent-clay)" }}
                    >
                      {ch.english}
                    </p>
                    <h2
                      className="font-serif-jp font-normal leading-tight mb-5"
                      style={{
                        fontSize: "clamp(1.8rem, 4vw, 3rem)",
                        color: "var(--ink-warm)",
                      }}
                    >
                      {ch.label}
                    </h2>
                    <p
                      className="text-[14px] leading-[1.9] max-w-xl"
                      style={{ color: "var(--ink-warm-muted)" }}
                    >
                      {ch.caption}
                    </p>
                  </div>

                  <div className="md:col-span-3 md:text-right">
                    <p
                      className="font-serif-jp text-[11px] tracking-[0.25em] uppercase"
                      style={{ color: "var(--ink-warm-muted)" }}
                    >
                      {list.length} volumes
                    </p>
                    <div
                      className="hidden md:block w-12 h-px ml-auto mt-3"
                      style={{ background: "var(--rule-line)" }}
                    />
                  </div>
                </div>
              </FadeIn>

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
            </div>

            {/* Decorative section divider */}
            {chIndex < CHAPTERS.length - 1 && (
              <div className="max-w-6xl mx-auto px-6">
                <div
                  className="flex items-center justify-center gap-5 py-6"
                  style={{ color: "var(--ink-warm-muted)" }}
                >
                  <div className="h-px w-16" style={{ background: "var(--rule-line)" }} />
                  <div
                    className="size-1.5 rounded-full"
                    style={{ background: "var(--accent-clay)" }}
                  />
                  <div className="h-px w-16" style={{ background: "var(--rule-line)" }} />
                </div>
              </div>
            )}
          </section>
        );
      })}

      {/* ========= FOOTER NOTE ========= */}
      <section
        className="border-t"
        style={{
          background: "var(--bg-cream-deep)",
          borderColor: "var(--rule-line)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <FadeIn>
            <p
              className="font-serif-jp text-[10px] tracking-[0.4em] uppercase mb-5"
              style={{ color: "var(--accent-clay)" }}
            >
              Disclosure
            </p>
            <p
              className="font-serif-jp text-lg leading-[2] max-w-2xl mx-auto"
              style={{ color: "var(--ink-warm-muted)" }}
            >
              本ページで紹介する書籍の Amazon リンクはアフィリエイトリンクを含みます。
              お買い上げの際に当サイトへ紹介料が還元されますが、
              価格への影響はなく、紹介料の多寡が掲載判断に影響することもありません。
            </p>
            <div
              className="mt-10 w-16 h-px mx-auto"
              style={{ background: "var(--accent-clay)" }}
            />
            <p
              className="font-serif-jp italic mt-10"
              style={{ color: "var(--ink-warm-muted)" }}
            >
              読書は、問題集の次の一歩。
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
