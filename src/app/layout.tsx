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
import { Wordmark } from "@/components/brand/Wordmark";
import { OrnamentRule } from "@/components/ornaments/Ornaments";
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
    default: "院試DB — 物理系大学院 過去問データベース",
    template: "%s | 院試DB",
  },
  description:
    "東大・京大・東工大など物理系大学院（物理・応用物理・物性・地球惑星・天文ほか）の入試過去問を分野別・年度別に整理。物理学・数学の解答解説を丁寧に、完全無料で公開。",
  keywords: [
    "院試",
    "物理院試",
    "物理系大学院",
    "大学院入試",
    "過去問",
    "物理学",
    "応用物理",
    "物性",
    "地球惑星",
    "天文",
    "数学",
    "東大",
    "京大",
    "東工大",
    "解答解説",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "院試DB — 物理系大学院 過去問データベース",
    description: "物理系大学院の院試対策を、もっとオープンに。物理学・数学の解答解説、すべて無料。",
    url: "https://inshi-db.vercel.app",
    siteName: "院試DB",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "院試DB — 物理系大学院 過去問データベース",
    description: "物理系大学院の院試対策を、もっとオープンに。物理学・数学の解答解説、すべて無料。",
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
        <footer className="border-t border-foreground/15 mt-24">
          <div className="mx-auto max-w-5xl px-6 pt-16 pb-12">
            <OrnamentRule ornament="fleuron" className="mb-14" />

            {/* Editorial colophon: masthead + cabinets */}
            <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 sm:gap-12">
              <div>
                <Wordmark size="sm" showTag={false} />
                <p className="mt-5 font-serif-jp text-[13px] leading-[1.95] text-foreground/75 max-w-xs">
                  物理系大学院の院試対策を、もっとオープンに。
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Open Archive · Est. 2026
                </p>
              </div>

              <FooterColumn label="Browse">
                <FooterLink href="/">大学一覧</FooterLink>
                <FooterLink href="/fields/all">分野別</FooterLink>
                <FooterLink href="/courses">コース</FooterLink>
                <FooterLink href="/topics">物理解説</FooterLink>
                {BOOKS_ENABLED && <FooterLink href="/books">おすすめ参考書</FooterLink>}
              </FooterColumn>

              <FooterColumn label="About">
                <FooterLink href="/about">運営について</FooterLink>
                <FooterLink href="/contact">お問い合わせ</FooterLink>
              </FooterColumn>

              <FooterColumn label="Legal">
                <FooterLink href="/privacy">プライバシーポリシー</FooterLink>
                <FooterLink href="/takedown">削除依頼・著作権</FooterLink>
              </FooterColumn>
            </div>

            <div className="mt-14 pt-6 border-t border-foreground/15 flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">
              <p>© 2026 INSHI · DB · All rights reserved.</p>
              <p className="font-serif-jp normal-case tracking-normal text-[11px] text-muted-foreground/70 max-w-md text-right">
                問題文の著作権は各大学に帰属します。当サイトは解答解説のみを掲載しています。
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function FooterColumn({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground mb-5 pb-2 border-b border-foreground/15">
        {label}
      </p>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="font-serif-jp text-[13px] text-foreground/75 hover:text-foreground hover:underline underline-offset-[5px] decoration-1 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
