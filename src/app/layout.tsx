import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "院試DB — 大学院入試 過去問データベース",
  description:
    "東大・京大・東工大など主要大学院の物理学・数学の入試過去問を分野別・年度別に整理。丁寧な解答解説付き。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <footer className="border-t bg-muted/20 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-xs">
                  院
                </div>
                <span className="text-sm font-bold tracking-tight">院試DB</span>
              </div>
              <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
                主要大学院の物理学・数学の入試過去問を分野別・年度別に整理。
                丁寧な解答解説付き。
              </p>
              <div className="h-px w-16 bg-border my-2" />
              <p className="text-[10px] text-muted-foreground/50">
                ※ 問題文の著作権は各大学に帰属します
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
