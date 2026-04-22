import Link from "next/link";
import { FadeIn } from "@/components/animations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー — 院試DB",
  description: "院試DBのプライバシーポリシー・個人情報の取扱いについて",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <FadeIn>
        <nav className="mb-10 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">ホーム</Link>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          <span className="text-foreground font-medium">プライバシーポリシー</span>
        </nav>

        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          Privacy Policy
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-2">プライバシーポリシー</h1>
        <p className="text-xs text-muted-foreground mb-12">最終更新日：2026年4月19日</p>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold mb-3">1. 基本方針</h2>
            <p className="text-muted-foreground">
              院試DB（以下「当サイト」）は、利用者のプライバシーを尊重し、個人情報の保護に関する法律（個人情報保護法）を遵守します。
              本ポリシーは、当サイトにおける個人情報の取扱いについて定めるものです。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">2. 取得する情報</h2>
            <p className="text-muted-foreground mb-3">
              当サイトでは、以下の情報を取得する場合があります：
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>アクセスログ（IPアドレス、ブラウザ種別、閲覧ページ等）</li>
              <li>Cookie および類似技術による情報</li>
              <li>お問い合わせ時にご提供いただく情報</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">3. アクセス解析ツールについて</h2>
            <p className="text-muted-foreground">
              当サイトは、サイト改善のためにGoogle Analytics（Google LLC提供）を利用する場合があります。
              Google Analyticsは、Cookieを利用してトラフィックデータを収集します。
              このデータは匿名で収集され、個人を特定するものではありません。
              Cookieの使用を無効にすることで、情報収集を拒否することが可能です。詳しくはブラウザの設定をご確認ください。
            </p>
            <p className="text-muted-foreground mt-2 text-xs">
              Google Analytics 利用規約：
              <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                https://marketingplatform.google.com/about/analytics/terms/jp/
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">4. 広告配信・アフィリエイトについて</h2>
            <p className="text-muted-foreground mb-3">
              当サイトは、<strong className="text-foreground">Amazon.co.jp を宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者</strong>です。
              「おすすめ参考書」ページ等に掲載する Amazon へのリンクはアフィリエイトリンクを含みます。
              リンクを経由して商品が購入された場合、当サイトに一定の紹介料が支払われますが、
              <strong className="text-foreground">購入価格に影響はありません</strong>。
            </p>
            <p className="text-muted-foreground mb-3">
              参考書等の選定は運営者の主観的評価に基づくものであり、紹介料の多寡ではなく教材としての有用性を最優先に選定しています。
            </p>
            <p className="text-muted-foreground">
              また、当サイトは将来的にGoogle AdSense等の第三者配信広告サービスを利用する可能性があります。
              これらの広告事業者は利用者の興味に応じた広告を表示するためにCookieを使用することがあります。
              Cookie無効化等については
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                広告 – ポリシーと規約 – Google
              </a>
              をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">5. 個人情報の利用目的</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>当サイトの運営・改善</li>
              <li>お問い合わせへの対応</li>
              <li>アクセス状況の分析</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">6. 個人情報の第三者提供</h2>
            <p className="text-muted-foreground">
              当サイトは、法令に基づく場合を除き、利用者の同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">7. 免責事項</h2>
            <p className="text-muted-foreground">
              当サイトに掲載する解答・解説については正確性を期しておりますが、内容の正確性・完全性を保証するものではありません。
              当サイトの情報を利用して生じた損害について、当サイトは一切の責任を負いかねます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">8. 著作権について</h2>
            <p className="text-muted-foreground">
              当サイトに掲載している解答・解説の著作権は運営者に帰属します。
              各大学の入試問題の著作権は、それぞれの大学に帰属します。
              問題文自体は当サイトに掲載しておらず、各大学の公式サイトへのリンクのみを提供しています。
              著作権に関する詳細および削除依頼の受付は
              <Link href="/takedown" className="text-primary hover:underline ml-1">削除依頼・著作権ページ</Link>
              をご覧ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">9. ポリシーの変更</h2>
            <p className="text-muted-foreground">
              本ポリシーの内容は、必要に応じて変更される場合があります。
              変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">10. お問い合わせ</h2>
            <p className="text-muted-foreground">
              本ポリシーに関するお問い合わせは、
              <Link href="/contact" className="text-primary hover:underline ml-1">お問い合わせページ</Link>
              よりお願いいたします。
            </p>
          </section>
        </div>
      </FadeIn>
    </div>
  );
}
