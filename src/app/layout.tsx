import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_JP } from "next/font/google";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Analytics as GoogleAnalytics } from "@/components/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CommandPalette } from "@/components/CommandPalette";
import { GlossaryProvider } from "@/components/GlossaryProvider";
import { BOOKS_ENABLED } from "@/lib/features";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inshi-db.vercel.app"),
  title: {
    default: "物理数学大学院試験過去問データベース（院試DB）",
    template: "%s | 院試DB",
  },
  description:
    "東大・京大・東工大など主要大学院の物理学・数学の入試過去問を分野別・年度別に整理。途中計算まで丁寧に書いた解答解説を、完全無料で公開しています。",
  keywords: [
    "院試",
    "大学院入試",
    "過去問",
    "物理",
    "物理学",
    "数学",
    "東大院試",
    "京大院試",
    "東工大院試",
    "解答解説",
    "物理数学大学院試験過去問データベース",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "物理数学大学院試験過去問データベース（院試DB）",
    description:
      "物理学・数学の大学院入試を、もっとオープンに。無料で読める解答解説。主要大学院の過去問を分野別・年度別に整理。",
    url: "https://inshi-db.vercel.app",
    siteName: "物理数学大学院試験過去問データベース",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "物理数学大学院試験過去問データベース（院試DB）",
    description:
      "物理学・数学の大学院入試を、もっとオープンに。無料で読める解答解説。主要大学院の過去問を分野別・年度別に整理。",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "VH0GgVnCdMY8bi6zqrEt6AAS3sIspoExnmf-_wpXitU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSerifJp.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <GoogleAnalytics />
        <VercelAnalytics />
        <SpeedInsights />
        <GrainOverlay />
        <CommandPalette />
        <GlossaryProvider />
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <footer className="border-t bg-muted/20 py-16 mt-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 mb-10">
              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-xs">
                    院
                  </div>
                  <span className="text-sm font-bold tracking-tight">院試DB</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
                  物理学・数学の院試対策を、もっとオープンに。
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Browse
                </p>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
                      大学一覧
                    </Link>
                  </li>
                  <li>
                    <Link href="/fields/all" className="text-foreground/80 hover:text-foreground transition-colors">
                      分野別
                    </Link>
                  </li>
                  <li>
                    <Link href="/topics" className="text-foreground/80 hover:text-foreground transition-colors">
                      物理解説
                    </Link>
                  </li>
                  {BOOKS_ENABLED && (
                    <li>
                      <Link href="/books" className="text-foreground/80 hover:text-foreground transition-colors">
                        おすすめ参考書
                      </Link>
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  About
                </p>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">
                      運営について
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
                      お問い合わせ
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Legal
                </p>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="/privacy" className="text-foreground/80 hover:text-foreground transition-colors">
                      プライバシーポリシー
                    </Link>
                  </li>
                  <li>
                    <Link href="/takedown" className="text-foreground/80 hover:text-foreground transition-colors">
                      削除依頼・著作権
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-muted-foreground/70">
              <p>© 2026 院試DB. All rights reserved.</p>
              <p>問題文の著作権は各大学に帰属します。当サイトは解答解説のみを掲載しています。</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
