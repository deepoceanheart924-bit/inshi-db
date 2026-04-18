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

---

## 2026-04-18 — shadcn/ui UIリニューアル

### 実施内容
- shadcn/ui v4.3.0 を導入
- 全ページのUIをshadcn/uiコンポーネントで全面リニューアル
- ダークモード対応（ThemeToggle コンポーネント追加）
- カラーテーマをブルー基調（oklch）に統一

### 追加・変更したコンポーネント
- shadcn/ui: `Card`, `Badge`, `Button`, `Tabs`, `Separator`, `Accordion`
- `ThemeToggle.tsx` — ダークモード切替ボタン（localStorage保存）
- `Header.tsx` — backdrop-blur付きスティッキーヘッダーに改良
- `FieldBadge.tsx` / `DifficultyBadge.tsx` — shadcn Badge に移行

### デザイン改善点
- グラスモーフィズム風ヘッダー（半透明 + ブラー）
- Card コンポーネントによる統一されたカードUI
- hover時のリング表示アニメーション
- ダークモード完全対応
- oklchベースのカスタムカラーシステム

### 技術的対応
- shadcn/ui最新版はbase-ui依存のためasChild非対応 → `buttonVariants` + `Link` パターンで対応
- globals.css にshadcn/uiのCSS変数を統合

### ビルド結果
- `npm run build` 成功（全29ルート静的生成）

---

## 2026-04-18 — 洗練されたUI演出の追加

### 実施内容
- Framer Motion を導入し、全ページにスクロール連動アニメーションを追加
- Web Design Clip のトレンド分析に基づくUI改修
- ヒーローセクションの大幅リデザイン

### デザイン改善詳細

**ヒーローセクション**
- グラデーション背景オーブ（blur効果）で奥行き感を演出
- グリッドパターン背景（mask-image でフェードアウト）
- 大胆なタイポグラフィ（7xl）+ グラデーション文字色
- 英字ラベル（"Physics & Mathematics"）でモダン感を演出

**アニメーション**
- `FadeIn` — スクロール時にフェードイン（上下左右方向指定可）
- `StaggerContainer` / `StaggerItem` — 子要素を順番にアニメーション
- `ScaleIn` — スケールアップしながら表示
- カスタムイージング `[0.21, 0.47, 0.32, 0.98]` で自然な動き

**ヘッダー**
- `fixed` ポジションに変更（常時表示）
- スクロール時のみ背景表示（透明→半透明切替）
- クライアントコンポーネント化（useEffect でスクロール検知）

**全ページ共通**
- セクション間余白を大幅拡大（py-12 → py-24）
- 英字セクションラベル（"Universities", "Fields", "Recent"等）
- カードのホバーエフェクト強化（translate-y + shadow + ring）
- タイポグラフィの統一（tracking-tight, leading-snug）

### 追加パッケージ
- `framer-motion` — スクロールアニメーション

### ビルド結果
- `npm run build` 成功（全29ルート静的生成）

### 次回TODO
- [ ] 認証機能の追加（Supabase Auth）
- [ ] Stripe決済連携（月額980円プレミアムプラン）
- [ ] 問題数の拡充
- [ ] SEO対策（OGP画像、sitemap.xml）
- [ ] Vercelへのデプロイ
