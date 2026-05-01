import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DotPattern } from "@/components/patterns";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "運営について",
  description: "院試DBの運営方針・目的・特徴について。完全無料・著作権に配慮・丁寧な解説を掲げるオープンな過去問データベース。",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "運営について",
    description: "院試DBの運営方針・目的・特徴について。",
    url: "/about",
    type: "website",
    locale: "ja_JP",
    siteName: "院試DB",
  },
  twitter: { card: "summary_large_image", title: "運営について", description: "院試DBの運営方針・目的・特徴について。" },
};

const features = [
  {
    title: "完全無料で公開",
    description: "すべての解答・解説を無料で公開しています。会員登録も不要です。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-full">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "丁寧な解説",
    description: "途中計算を省略せず、大学院入試を目指す学部生の視点で解説しています。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-full">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
  },
  {
    title: "著作権に配慮",
    description: "問題文は掲載せず、公式PDFへのリンクを提供。オリジナルの解説のみを掲載しています。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-full">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "数式の美しい表示",
    description: "KaTeXを採用し、数式を美しく正確に表示。印刷にも耐える品質です。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-full">
        <path d="M4 7h16M4 17h16M9 3l-5 18M20 3l-5 18" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <FadeIn>
        <nav className="mb-10 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">ホーム</Link>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          <span className="text-foreground font-medium">運営について</span>
        </nav>

        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          About
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          院試対策を、
          <br />
          もっとオープンに。
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-16">
          院試DBは、物理系大学院（物理・応用物理・物性・地球惑星・天文ほか）の入試過去問の解答・解説を無料で公開するデータベースです。
          学部生が院試に向けて効率的に学習できる環境づくりを目指しています。
        </p>
      </FadeIn>

      {/* Mission Card */}
      <FadeIn delay={0.1}>
        <Card className="relative overflow-hidden mb-16">
          <DotPattern className="text-foreground/60" size={20} opacity={0.08} />
          <CardContent className="relative py-10 px-8">
            <Badge variant="secondary" className="mb-4">Mission</Badge>
            <h2 className="text-2xl font-bold tracking-tight mb-4">院試情報格差の解消</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              大学院入試の情報は、大学や研究室のつながりによって大きな格差があります。
              過去問は公開されていても、解答・解説は限られた学生しかアクセスできないのが現状です。
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              当サイトは、物理系大学院の入試過去問について、誰もがアクセスできる解説データベースを構築することで、
              この情報格差の解消を目指しています。
            </p>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Features */}
      <FadeIn>
        <h2 className="text-2xl font-bold tracking-tight mb-6">特徴</h2>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-16" stagger={0.06}>
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <Card className="h-full">
              <CardContent className="py-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 p-2.5">
                  {f.icon}
                </div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Operator */}
      <FadeIn>
        <Card className="mb-16">
          <CardContent className="py-8">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-gradient-to-br from-primary to-purple-500 shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground mb-1">運営者</p>
                <h3 className="font-bold mb-2">院試DB 編集部</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  物理学科の学生が個人で運営しています。
                  大学院入試を目指す学生の視点から、学習に役立つコンテンツを発信していきます。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* CTA */}
      <FadeIn className="text-center">
        <h2 className="text-xl font-bold mb-4">問題を探す</h2>
        <p className="text-sm text-muted-foreground mb-6">
          大学別・分野別に解答解説を見ることができます
        </p>
        <div className="flex justify-center gap-3">
          <Link href="/" className={cn(buttonVariants())}>
            大学一覧を見る
          </Link>
          <Link href="/fields/all" className={cn(buttonVariants({ variant: "outline" }))}>
            分野別で探す
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
