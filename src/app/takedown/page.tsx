import Link from "next/link";
import { FadeIn } from "@/components/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DotPattern } from "@/components/patterns";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "削除依頼・著作権に関するお問い合わせ — 院試DB",
  description: "院試DBの掲載内容に関する削除依頼・著作権照会の受付窓口",
};

export default function TakedownPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <FadeIn>
        <nav className="mb-10 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">ホーム</Link>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          <span className="text-foreground font-medium">削除依頼</span>
        </nav>

        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          Takedown Policy
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">削除依頼・著作権ポリシー</h1>
        <p className="text-xs text-muted-foreground mb-12">最終更新日：2026年4月19日</p>
      </FadeIn>

      {/* Basic stance */}
      <FadeIn delay={0.1}>
        <Card className="relative overflow-hidden mb-8">
          <DotPattern className="text-foreground/60" size={20} opacity={0.08} />
          <CardContent className="relative py-8">
            <Badge variant="secondary" className="mb-3">基本方針</Badge>
            <h2 className="text-xl font-bold mb-3">権利者の方からの削除依頼には誠実に対応します</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              当サイトは、大学・教員・著者等の権利者からの削除依頼・修正要請を受けた場合、
              内容を確認のうえ、原則として<strong className="text-foreground">3営業日以内</strong>に対応いたします。
            </p>
          </CardContent>
        </Card>
      </FadeIn>

      {/* How to request */}
      <FadeIn delay={0.15}>
        <h2 className="text-xl font-bold mb-4">削除依頼の手順</h2>
        <div className="space-y-3 mb-10">
          {[
            {
              step: "01",
              title: "メールで連絡",
              body: (
                <>
                  以下のメールアドレスまでご連絡ください。
                  <br />
                  <a
                    href="mailto:inshi.db.contact@gmail.com"
                    className="text-primary font-mono font-medium hover:underline mt-1 inline-block"
                  >
                    inshi.db.contact@gmail.com
                  </a>
                </>
              ),
            },
            {
              step: "02",
              title: "必要な情報",
              body: (
                <ul className="list-disc pl-5 space-y-1">
                  <li>削除を希望するページのURL</li>
                  <li>削除を希望する理由（著作権侵害・誤情報等）</li>
                  <li>権利者との関係性（ご本人・代理人・所属機関）</li>
                  <li>連絡先（返信用メールアドレス）</li>
                </ul>
              ),
            },
            {
              step: "03",
              title: "当サイトによる確認・対応",
              body: "内容を確認し、原則として3営業日以内に削除・修正・返信いずれかの対応を行います。明らかな権利侵害と判断される場合は、確認完了前に仮非公開化することがあります。",
            },
          ].map((s) => (
            <Card key={s.step}>
              <CardContent className="flex gap-4 py-5">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold shrink-0">
                  {s.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <div className="text-sm text-muted-foreground leading-relaxed">{s.body}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* Copyright stance */}
      <FadeIn delay={0.2}>
        <h2 className="text-xl font-bold mb-4">当サイトの著作権に関する基本方針</h2>
        <div className="space-y-3 mb-10">
          <Card>
            <CardContent className="py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="size-1.5 rounded-full bg-primary mt-2" />
                <h3 className="font-bold">問題文について</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                当サイトは、各大学の入試問題文をそのままの形では掲載していません。
                問題の設定は、著作権法のアイデア・表現二分論に基づき、当サイト独自の表現で再構成しています。
                正確な問題文は各大学の公式サイトへのリンクからご確認いただけます。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="size-1.5 rounded-full bg-emerald-500 mt-2" />
                <h3 className="font-bold">解答・解説について</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                解答・解説は当サイトのオリジナル創作物であり、当サイトに著作権が帰属します。
                無断での複製・転載・商用利用は禁じますが、個人の学習目的での閲覧・参照は自由です。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="size-1.5 rounded-full bg-amber-500 mt-2" />
                <h3 className="font-bold">問題の著作権について</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                各大学の入試問題の著作権は、それぞれの大学または作題者に帰属します。
                当サイトはこれらの権利を尊重し、問題文の直接掲載を避ける方針を取っています。
              </p>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* Contact box */}
      <FadeIn delay={0.25}>
        <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
          </div>
          <h3 className="text-lg font-bold mb-2">削除依頼・その他のお問い合わせ</h3>
          <a
            href="mailto:inshi.db.contact@gmail.com"
            className="text-primary font-mono text-sm font-medium hover:underline"
          >
            inshi.db.contact@gmail.com
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            大学関係者・著作権者の方からのご連絡は最優先で対応いたします
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
