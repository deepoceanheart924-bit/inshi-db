# 院試DB 作業履歴

## 2026-04-18 — プロジェクト初期構築

### 実施内容
- Next.js 16.2.4 (TypeScript + Tailwind CSS) でプロジェクト作成
- Node.js v24.15.0 をインストール
- KaTeX（数式レンダリング）、react-icons を追加

### 作成したページ
- **トップページ** (`/`) — ヒーローセクション、大学別カード、分野別グリッド、最新問題リスト、CTA
- **大学別ページ** (`/universities/[slug]`) — 年度別に問題を一覧表示
- **問題詳細ページ** (`/problems/[id]`) — 問題文＋解答解説（KaTeX数式対応）
- **分野別ページ** (`/fields/[field]`) — 分野フィルタ付き問題一覧

### 作成したコンポーネント
- `KaTeX.tsx` — $...$ と $$...$$ の数式をKaTeXでレンダリング
- `Header.tsx` — サイトヘッダー＋ナビゲーション
- `FieldBadge.tsx` — 分野名バッジ（色分け付き）
- `DifficultyBadge.tsx` — 難易度バッジ（基礎/標準/発展）

### サンプルデータ
- 5大学（東大・京大・東工大・東北大・阪大）を登録
- 11問の物理・数学の問題と詳細な解答解説を作成
  - 力学(3), 電磁気学(2), 量子力学(2), 統計力学(2), 数学(2)
- 無料/プレミアムの区分を設定

### 技術スタック
- Next.js 16.2.4（App Router, SSG）
- TypeScript
- Tailwind CSS
- KaTeX（数式レンダリング）
- Vercelデプロイ対応構成

### ビルド結果
- `npm run build` 成功（全29ルート静的生成）
- `npm run dev` で http://localhost:3000 にて動作確認済み

### 次回TODO
- [ ] 認証機能の追加（Supabase Auth）
- [ ] Stripe決済連携（月額980円プレミアムプラン）
- [ ] 問題数の拡充
- [ ] SEO対策（OGP画像、sitemap.xml）
- [ ] Vercelへのデプロイ
