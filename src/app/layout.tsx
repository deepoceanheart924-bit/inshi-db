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
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>院試DB — 大学院入試 過去問データベース</p>
            <p className="mt-1">
              ※ 問題文の著作権は各大学に帰属します。本サイトでは解答・解説のみを掲載しています。
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
