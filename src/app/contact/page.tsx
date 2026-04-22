import Link from "next/link";
import { FadeIn } from "@/components/animations";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "院試DBへのお問い合わせ・ご意見・誤り指摘等の窓口。",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "お問い合わせ",
    description: "院試DBへのお問い合わせ・ご意見・誤り指摘等の窓口。",
    url: "/contact",
    type: "website",
    locale: "ja_JP",
    siteName: "院試DB",
  },
  twitter: { card: "summary_large_image", title: "お問い合わせ", description: "院試DBへのお問い合わせ窓口。" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <FadeIn>
        <nav className="mb-10 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">ホーム</Link>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          <span className="text-foreground font-medium">お問い合わせ</span>
        </nav>

        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          Contact
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">お問い合わせ</h1>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          当サイトへのご意見・ご要望、解答の誤り指摘、著作権に関するお問い合わせ等は、以下のメールアドレスまでお願いいたします。
        </p>

        <Card className="mb-8">
          <CardContent className="py-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">メールアドレス</p>
                <a
                  href="mailto:inshi.db.contact@gmail.com"
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  inshi.db.contact@gmail.com
                </a>
              </div>
            </div>
            <div className="rounded-lg bg-muted/30 p-4 text-xs text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground mb-2">お問い合わせの際は以下をご記載ください：</p>
              <ul className="list-disc pl-5 space-y-0.5">
                <li>お名前（ハンドルネーム可）</li>
                <li>お問い合わせ内容</li>
                <li>対象の問題ページURL（誤り指摘の場合）</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-sm font-bold mb-2 flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              解答の誤り・誤植について
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              解答や解説に誤りを発見された場合、お手数ですが該当ページのURLとともにご指摘ください。
              確認の上、速やかに訂正いたします。
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-sm font-bold mb-2 flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-amber-500" />
              著作権・掲載に関する問い合わせ
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              当サイトでは各大学の問題文は掲載せず、公式PDFへのリンクのみを提供しています。
              万が一、著作権等に関する懸念があれば、速やかにご連絡ください。
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-sm font-bold mb-2 flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-emerald-500" />
              機能要望・ご意見
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              「こんな大学の過去問も欲しい」「こういう機能があれば便利」といったご要望も歓迎します。
              いただいたご意見は今後の改善に活用させていただきます。
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          ※ お問い合わせへの回答には数日お時間をいただく場合があります。ご了承ください。
        </p>
      </FadeIn>
    </div>
  );
}
