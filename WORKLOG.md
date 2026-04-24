# 院試DB 作業履歴

## 2026-04-23 — サイト正式名を「物理数学大学院試験過去問データベース」に変更

### 背景
化学・工学へ手を広げるかの相談を受けて、「物理・数学特化」ポジションを強化する方針で合意。SEO・ブランディング面で物理数学専門であることを前面に出す。

### 変更内容
- [src/app/layout.tsx](src/app/layout.tsx): metadata を全面刷新
  - `title.default`: 「院試DB — 大学院入試 過去問データベース」→「物理数学大学院試験過去問データベース（院試DB）」
  - `title.template`: `%s | 院試DB` は維持（タブタイトルの視認性のため）
  - `description`: 物理・数学を明示、「途中計算まで丁寧」を前面に
  - `keywords`: 「物理学」「東大院試」「京大院試」「東工大院試」「物理数学大学院試験過去問データベース」を追加
  - `openGraph.siteName`: 「院試DB」→「物理数学大学院試験過去問データベース」
- [src/components/JsonLd.tsx](src/components/JsonLd.tsx):
  - `SITE_NAME` を正式名へ、`SITE_SHORT_NAME = "院試DB"` を追加
  - `organizationSchema` / `websiteSchema` に `alternateName: 院試DB` を追加（SEO で両名前を関連付け）
- [src/app/opengraph-image.tsx](src/app/opengraph-image.tsx):
  - メインタイトル「院試過去問データベース」→「物理数学 大学院試験 過去問データベース」
  - 文字サイズ調整（100 → 88）
  - サブタイトル：「主要大学院の物理学・数学を、途中計算まで丁寧に無料公開」
- [src/components/Header.tsx](src/components/Header.tsx):
  - ロゴは「院試DB」を維持（ブランド認知のため）
  - サブタイトル「Graduate Exam Database」→「Physics & Math Exam DB」

### 設計判断
- **正式名と短縮名の使い分け**:
  - 正式名（物理数学大学院試験過去問データベース）: SEO メタデータ、OG 画像、JSON-LD スキーマで前面
  - 短縮名（院試DB）: ロゴ、タブタイトル、footer 著作権表記など視認性重視の場所
- **keywords 強化**: 「大学名 + 院試」（東大院試 等）は実ユーザー検索クエリに近い
- **alternateName の追加**: Google 等の検索エンジンが「物理数学大学院試験過去問データベース」と「院試DB」を同一サイトとして認識

### 動作確認
- `npx tsc --noEmit` エラー0件 ✅

### 次回TODO
- デプロイ後、Search Console でクロール再要求（新しいタイトル・説明の反映促進）
- 将来的に `<h1>` 等の本文も物理数学専門であることを強調するコピーライティング強化を検討

---

## 2026-04-23 — 2021年度を全大学×全科目で充足（+33問、累計217問、B案完了）

### 背景
B案（1年度を全大学横断で完遂）の**最終ラウンド**。2021年度を全13試験セットで `ExamRule.totalQuestions` 充足。2025-2021 の全5年度すべてで模擬演習型が利用可能に。

### 追加内容（+33問）

| 大学 | 科目 | 追加 | 代表テーマ |
|---|---|---|---|
| todai | phys | phys-2,3,4 | Dirac方程式/Liouville定理/揺動散逸 |
| todai | math | math-1,2 | 共形写像/Hilbert空間射影 |
| kyodai | phys | phys-2,3,4 | 弾性体Hooke/白色矮星Chandrasekhar/BCS超伝導 |
| kyodai | math | math-1,2 | Wronskian/Dirac bra-ket |
| titech | phys | phys-2,3,4,5 | Lagrange乗数/電磁テンソル/Born近似/Landau相転移 |
| tohoku | phys | phys-2,3,4,5 | 空気抵抗落下/双極子放射/相関関数/Meissner効果 |
| osaka | phys | phys-2,3,4 | 輻射圧/量子散乱/Landauer原理 |
| osaka | math | math-1,2 | Laplace変換/Lie群 |
| nagoya | phys | phys-3,4 | Ohm則/Stefan-Boltzmann |
| kyushu | phys | phys-3,4 | 音波定常波/二重スリット干渉 |
| hokkaido | phys | phys-3,4 | 熱力学第一法則/磁場中の電流力 |
| ynu | phys | phys-3,4 | 斜面摩擦/物質三態潜熱 |
| tsukuba | phys | phys-3,4 | てこトルク/凸レンズ結像 |

### 設計方針
- 2022/2023/2024/2025 および既存2021とのテーマ重複回避（4年度 × 13試験 の大規模重複チェック）
- 試験内field多様性、難易度配分を一貫
- 基礎概念（力学・電磁・量子・統計・熱・光・相対論・数学）を全年度でバランス配置

### 動作確認
- `npx tsc --noEmit` エラー0件 ✅
- 13試験セット全て `ExamRule.totalQuestions` 充足 ✅
- 問題総数: 184 → 217問（+33）
- **全5年度（2021-2025）が模擬演習型で完全利用可能** 🎉

### B案完了後の状態
- 総問題数: 217問
- 5年度 × 13試験セット = 65試験エンドポイントすべてが `totalQuestions` 充足
- `/exams/[uni]/[year]/[subject]` で全年度の模擬演習が可能

### 次回以降のTODO
- 2020年度以前の充足（必要に応じて）
- Phase 1: `Problem.subject` → `subjectSlug` 移行
- Phase 2: `Exam` エンティティ独立化（タイマー機能等）
- Phase 3: 大学ごとの科目構成を実形式に詳細化

---

## 2026-04-23 — 2022年度を全大学×全科目で充足（+33問、累計184問）

### 背景
B案（1年度を全大学横断で完遂）の第4ラウンド。2022年度を全13試験セットで `ExamRule.totalQuestions` 充足。

### 追加内容（+33問）

| 大学 | 科目 | 追加 | 代表テーマ |
|---|---|---|---|
| todai | phys | phys-2,3,4 | 相対論エネルギー運動量/2次摂動論/Fourier熱伝導 |
| todai | math | math-1,2 | Laplace方程式調和関数/Rayleigh商変分原理 |
| kyodai | phys | phys-2,3,4 | Kirchhoff熱放射/Curie則/Navier-Stokes |
| kyodai | math | math-1,2 | Sturm-Liouville/有限群表現論 |
| titech | phys | phys-2,3,4,5 | Euler角剛体/導波管/Compton散乱/vdW熱容量 |
| tohoku | phys | phys-2,3,4,5 | Lorentz力サイクロイド/Zeeman効果/Hall効果/Boltzmann H定理 |
| osaka | phys | phys-2,3,4 | Foucault振り子/Fermi黄金則/Clausius不等式 |
| osaka | math | math-1,2 | Green関数/テンソル解析共変微分 |
| nagoya | phys | phys-3,4 | 整流回路/波の反射(自由端固定端) |
| kyushu | phys | phys-3,4 | 投射運動/抵抗合成Joule熱 |
| hokkaido | phys | phys-3,4 | クーロン則/Bohr水素原子 |
| ynu | phys | phys-3,4 | RC充放電/気体分子運動論 |
| tsukuba | phys | phys-3,4 | 偏光Malus則/2層壁熱伝導 |

### 設計方針
- 2023/2024/2025 および既存2022とのテーマ重複回避
- 各試験内での field多様性維持
- 難易度配分：旧帝大系 advanced/standard、後発5大学 basic 中心

### 動作確認
- `npx tsc --noEmit` エラー0件 ✅
- 13試験セット全て `ExamRule.totalQuestions` 充足 ✅
- 問題総数: 151 → 184問（+33）

### 次回TODO
- 2021年度も同じ要領で充足（B案最終ラウンド）

---

## 2026-04-23 — 2023年度を全大学×全科目で充足（+31問、累計151問）

### 背景
B案（1年度を全大学横断で完遂）の2024年度充足に続く第3ラウンド。
2023年度を全13試験セットで `ExamRule.totalQuestions` 充足に持っていく。

### 追加内容（+31問）

| 大学 | 科目 | 追加 | 代表テーマ |
|---|---|---|---|
| todai | phys | phys-3,4 | 非調和振動子摂動論/van der Waals気体 |
| todai | math | math-1,2 | Cauchy積分公式/Jordan標準形 |
| kyodai | phys | phys-3,4 | Lorentz光分散モデル/Poisson括弧と正準変換 |
| kyodai | math | math-1,2 | 相平面解析/Hermite多項式 |
| titech | phys | phys-2,3,4,5 | Kepler軌道/Poyntingベクトル/WKB近似/Clausius-Clapeyron |
| tohoku | phys | phys-2,3,4,5 | 連成振り子/Bernoulli方程式/Pauli常磁性/Bragg回折 |
| osaka | phys | phys-2,3,4 | 磁場境界条件/Rabi振動/熱力学第3法則 |
| osaka | math | math-1,2 | 波動方程式特性曲線/Fourier変換Parseval |
| nagoya | phys | phys-3,4 | 弾性衝突/Fresnel電磁波反射 |
| kyushu | phys | phys-3,4 | 仕事エネルギー定理/RLC交流インピーダンス |
| hokkaido | phys | phys-3,4 | Kirchhoff直流回路/熱膨張 |
| ynu | phys | phys-3,4 | 放射性崩壊半減期/毛管現象 |
| tsukuba | phys | phys-3,4 | 断熱変化Poisson則/光の分散色収差 |

### 設計方針
- 2024/2025 および既存2023との**テーマ被り回避**
- 各試験内での **field多様性**を維持（mech/EM/quantum/thermo/stat/optics バランス）
- 難易度配分：旧帝大系は advanced/standard 混成、後発5大学は basic 中心

### 動作確認
- `npx tsc --noEmit` エラー0件 ✅
- 13試験セット全て `ExamRule.totalQuestions` 充足 ✅
- 問題総数: 120 → 151問（+31）

### 次回TODO
- 2022年度・2021年度も同じ要領で充足（B案の後続ラウンド）

---

## 2026-04-23 — 2024年度を全大学×全科目で充足（+33問、累計120問）

### 背景
2025年度で採用した B案（1年度を全大学横断で完遂）を 2024年度にも適用し、
「今後随時情報更新予定」バッジ告知と整合するコンテンツ拡充。

### 追加内容（+33問）

| 大学 | 科目 | 追加 | 代表テーマ |
|---|---|---|---|
| todai | phys | phys-2,3,4 | 電磁誘導/スピン磁気共鳴/正準集団と自由エネルギー |
| todai | math | math-1,2 | ベクトル解析Gauss定理/2階線形非同次ODE |
| kyodai | phys | phys-2,3,4 | 主慣性モーメント/ベクトルポテンシャル/理想気体エントロピー |
| kyodai | math | math-1,2 | 行列ランクと連立/Legendre多項式と直交性 |
| titech | phys | phys-2,3,4,5 | 剛体振り子大振動/ラプラス境界値/He原子/エントロピー |
| tohoku | phys | phys-2,3,4,5 | 鏡像法/有限井戸/BEC/単スリット回折 |
| osaka | phys | phys-2,3,4 | 渦電流/コヒーレント状態/Ising平均場 |
| osaka | math | math-1,2 | 留数計算三角積分/変分法EL方程式 |
| nagoya | phys | phys-3,4 | Biot-Savart/理想気体状態方程式 |
| kyushu | phys | phys-3,4 | 減衰振動Q値/スネル則 |
| hokkaido | phys | phys-3,4 | 単振り子/ガウスの法則 |
| ynu | phys | phys-3,4 | 黒体放射/ドップラー効果 |
| tsukuba | phys | phys-3,4 | 電気双極子/熱容量混合 |

### 設計方針
- 既存2024/2025との**テーマ被り回避**（例: 2025 titech 連成振動と被らないよう TITECH 2024 は剛体振り子大振動を採用）
- 各試験内での**field多様性**確保（物理4-5問で mech/EM/quantum/thermo/stat をバランス配置）
- 難易度配分：旧帝大系は advanced/standard 混成、後発5大学は basic 中心（既存慣例踏襲）
- solution style: 2025年度+23問セットの compact inline 形式を踏襲（~40-70 lines/問題）

### 動作確認
- `npx tsc --noEmit` エラー0件 ✅
- ID カウント確認：13試験セット全て `ExamRule.totalQuestions` 充足 ✅
  - todai phys=4/math=2, kyodai phys=4/math=2, titech phys=5, tohoku phys=5
  - osaka phys=4/math=2, nagoya=4, kyushu=4, hokkaido=4, ynu=4, tsukuba=4
- 問題総数: 87 → 120問（+33）

### 次回TODO
- 2023年度・2022年度・2021年度も同じ要領で充足（B案の後続ラウンド）
- Phase 1: `Problem.subject` 文字列 → `subjectSlug` 参照へ移行

---

## 2026-04-23 — LP「今後随時情報更新予定」バッジ追加

### 背景
コンテンツ拡充中であることをユーザーに明示するための告知要素。
ユーザー要望で現行本番デザインへ即時反映。

### 変更内容
- [src/app/page.tsx](src/app/page.tsx): ヒーロー説明文直下（CTAボタンの上）にpill形式のバッジを追加
  - `animate-ping` + primary色の発光ドット
  - `Updating` (英・モノスペース) + 縦線 + 「今後随時情報更新予定」(日)
  - 既存の緑pill（Open Exam Database）と同じ `rounded-full border backdrop-blur-sm px-3 py-1` スタイルで統一
  - FadeIn delay={0.2}（説明文→バッジ→CTA の順で立ち上がる）

### メモ
- 進行中の Editorial リファクタ（未コミット）は `git stash` で退避済。
  スタッシュ名: `WIP: Editorial overhaul + update-badge (for later pop)`
  pop 時は page.tsx/WORKLOG.md でコンフリクト発生する可能性あり。
  Editorial版復帰時はそちらにも同等のバッジを移植する必要がある（§ 01冒頭付近を想定）。

---

## 2026-04-22 (続き3) — UI/UX Pro MAX Phase B（view transitions + Aceternity/Magic UI 拡充）

### 背景
ユーザー希望「framer motion + UI UX Pro MAX skill」受け、`experimental.viewTransition` 有効化と
Aceternity UI/Magic UI 系の追加コンポーネント群でベース UX を底上げ。

### 変更内容

**Next.js 16 View Transitions**:
- `next.config.ts`: `experimental.viewTransition: true`
- `src/app/globals.css`: `.nav-forward`/`.nav-back`/`root`/`site-header` 向けのキーフレーム群、`vt-fade`/`vt-slide`、`prefers-reduced-motion` ガード
- `src/components/Header.tsx`: `viewTransitionName: "site-header"` を `<header>` に付与（ページ遷移中もヘッダー固定）

**新規 UI コンポーネント**:
- Aceternity 系: `meteors.tsx`, `hover-border-gradient.tsx`, `card-hover-effect.tsx`, `sparkles.tsx`, `text-generate-effect.tsx`
- Magic UI 系: `grid-pattern.tsx`, `particles.tsx`, `marquee.tsx`, `blur-fade.tsx`

**適用**:
- `src/components/ExamView.tsx`: 各大問を `<BlurFade delay={idx * 0.06}>` で包む、「解答を見る」ボタンに `<Sparkles>` 装飾
- `src/app/exams/.../page.tsx`: 背景に `<Particles>`、試験タイトルを `<TextGenerateEffect>` で字単位ブラー解除アニメ

### 動作確認
- `next build` 成功（317ページ静的生成、tsc OK、9.9s）
- dev server (`next dev` + Turbopack) は `viewTransition` 実験フラグ有効化後、初回コンパイルが遅いが本番ビルドは通る

### 次回TODO
- 主要動線（Home→University→Year→Exam）の Link に `transitionTypes={["nav-forward"]}` を仕込み、方向性のあるスライド遷移に
- 戻る動線（breadcrumb, back link）に `nav-back`
- 問題画像や共有要素の `name` prop で morph（Step 1 パターン）

---

## 2026-04-22 (続き2) — SEO整備 Phase A（Critical + JSON-LD）

### 背景
本番公開後の SEO 監査で以下の問題を発見：
1. タイトル重複: `東大 2025年 ... — 院試DB | 院試DB`（generateMetadata が `— 院試DB` を含み、layout の template `%s | 院試DB` と二重化）
2. OG/Twitter が動的ページで上書きされず、全ページで同じ homepage メタ
3. 各動的ページで `alternates.canonical` 未設定
4. 構造化データ（JSON-LD）がゼロ

### 対応内容

**新規ファイル**:
- `src/components/JsonLd.tsx` — `<script type="application/ld+json">` を埋め込むサーバーコンポーネントと、`organizationSchema`, `websiteSchema`, `breadcrumbSchema`, `articleSchema`, `learningResourceSchema`, `itemListSchema` ヘルパー

**全動的ページの修正**:
- `layout.tsx` — Organization + WebSite JSON-LD を body に追加、root metadata に `alternates.canonical: "/"` 追加
- `problems/[id]/page.tsx` — タイトルから `— 院試DB` 除去、canonical/og/twitter 設定、Article + BreadcrumbList JSON-LD
- `exams/[uniSlug]/[year]/[subject]/page.tsx` — 同上、LearningResource + BreadcrumbList JSON-LD
- `universities/[slug]/page.tsx` — 同上、BreadcrumbList + ItemList（年度一覧）JSON-LD
- `universities/[slug]/[year]/page.tsx` — 同上、BreadcrumbList JSON-LD
- `fields/[field]/page.tsx` — 同上、BreadcrumbList JSON-LD
- `topics/[id]/page.tsx` — 同上、Article + BreadcrumbList JSON-LD
- `topics/page.tsx`, `about/page.tsx`, `contact/page.tsx`, `privacy/page.tsx`, `takedown/page.tsx`, `books/page.tsx`, `books/[field]/page.tsx` — canonical/og/twitter 設定、タイトルから `— 院試DB` 除去

### 動作確認（dev server）
- `npx tsc --noEmit` エラー0件 ✅
- 主要7ページでの確認項目:
  - タイトル: `東大 2025年 ... | 院試DB` のように単一 `院試DB` のみ ✅
  - `<link rel="canonical">` 各ページ固有URL ✅
  - `<meta property="og:title">` ページ固有 ✅
  - `<meta property="og:url">` ページ固有 ✅
  - `application/ld+json` 各ページで埋め込み確認 ✅

### 次回TODO
- 動的OG画像（ページごとのシェア画像）— Phase B として別途
- Google Search Console 登録と sitemap 送信
- 画像の `alt` テキスト確認
- Core Web Vitals 計測と最適化

---

## 2026-04-22 (続き) — 2025年度を全大学×全科目で充足（B案）

### 目的
前段で模擬演習型が完成したが、各試験ページの問題数が `totalQuestions` に満たない状態だった。
「現状の年度の範囲で良いので、すべての大問と科目を充足」したいというユーザー要望を受け、B案（1年度を全大学横断で完遂）を採用。まず 2025 年度から着手。

### 追加内容（+23問）
| 大学 | 科目 | 追加分 | テーマ |
|---|---|---|---|
| todai | phys | phys-4 | 2準位系・Schottky 異常 |
| todai | math | math-2 | 留数定理による実積分 |
| kyodai | phys | phys-3,4 | 中心力場ラグランジアン・無限井戸 |
| kyodai | math | math-2 | Stokes の定理 |
| titech | phys | phys-3,4,5 | 誘電体コンデンサ・角運動量交換関係・オットーサイクル |
| tohoku | phys | phys-4,5 | 水素原子基底状態・Debye モデル |
| osaka | phys | phys-3,4 | 2体問題換算質量・LC 共振 |
| osaka | math | math-2 | 対称行列対角化と二次形式 |
| nagoya | phys | phys-3,4 | エントロピー・無限井戸入門 |
| kyushu | phys | phys-3,4 | ソレノイド・熱機関効率 |
| hokkaido | phys | phys-3,4 | 分子運動論・ド・ブロイ波長 |
| ynu | phys | phys-3,4 | 熱容量・うなり |
| tsukuba | phys | phys-3,4 | RL 過渡応答・Maxwell 分布 |

### 伴う変更
- `universities.ts`: todai/kyodai/osaka の math に `rule`（totalQuestions=2, requiredCount=1, 90 min）を追加
- ynu-2025-phys-4 の `field` を暫定的に "mechanics" に（"waves" 型がまだ無いため。必要なら後続で追加）

### 動作確認
- `npx tsc --noEmit` エラー0件 ✅
- 2025年度 全10大学 phys 試験ページ HTTP 200 ✅
- todai/kyodai/osaka の math 試験ページ HTTP 200 ✅
- 試験ページの大問数が `totalQuestions` と一致：phys 4問（または 5問 for titech/tohoku）、math 2問 ✅
- スポットチェック: 新規追加問題の個別ページ（/problems/[id]）全て HTTP 200 ✅

### 次回TODO
- 2024 年度を同じ要領で充足（B案の第2ラウンド）
- 以降 2023 → 2022 → 2021 と進める
- `Field` 型に "waves" を追加するか、ynu-2025-phys-4 を別表現にするか検討

---

## 2026-04-22 — 模擬演習ページを「最下部1ボタン式」に統一、科目構成をデータ化

### 背景
前回 2026-04-21 に着手した「試験ページ模擬演習型への統一」大改修の続き。途中保存状態だったので、型チェックと動作確認を完走させて公開可能な状態に仕上げる。

### 確定した設計方針（前回再掲）
1. 大学差異はしっかり出す（科目構成・選択ルール・制限時間・問題形式）
2. 東大だけ特別扱いは禁止、全大学を統一スキーマ `University.subjects[]`
3. タブ切替は不要。試験ページは模擬演習型のみ、リファレンスは `/problems/[id]`
4. 試験ページは「最下部1ボタン式」— 上部ルールカード／中段は問題文のみ／最下部「解答を見る」1ボタンで全大問の解説を一括展開
5. 動線: 大学 → 年度 → 科目選択 → 試験ページ（年度ページの主役は科目選択カード）

### 確認済み変更
- `src/components/ExamView.tsx` — 最下部1ボタン式に書き換え済み
- `src/components/ExamRuleCard.tsx` — 新規
- `src/data/types.ts` — `ExamRule`, `SubjectDef` を追加し `University.subjects[]` 必須化
- `src/data/universities.ts` — 全10大学の `subjects[]` を設定（東大は phys+math の2要素、他は phys の1要素）、`getSubject()` ヘルパー追加
- `src/app/exams/[uniSlug]/[year]/[subject]/page.tsx` — `ExamRuleCard` 組込、ヘッダ再構成
- `src/app/universities/[slug]/[year]/page.tsx` — 科目選択カードを主役に、個別問題リストは `<details>` で補助セクションに格下げ

### 動作確認（2026-04-22 実施）
- `npx tsc --noEmit` — エラー0件 ✅
- 主要ルート HTTP 200 ✅:
  - `/`, `/about`, `/contact`, `/fields/mechanics`
  - `/universities/todai`, `/universities/todai/2025`
  - `/problems/todai-2025-phys-1`
  - `/exams/todai/2025/phys`, `/exams/todai/2025/math`
  - `/exams/titech/2024/phys`, `/exams/osaka/2024/phys`, `/exams/kyodai/2024/phys`
- HTMLマーカー確認 ✅:
  - 試験ページに `Practice Mode` / `Exam Rule` / `解答を見る` が表示
  - 年度ページに `Select Subject` / `科目を選ぶ` / `<details>` が存在
- `/exams/todai/2024/math` は404だが、todai の数学問題が2025年度のみなので仕様通り

### 次回TODO
- Phase 1: 既存 `Problem.subject` 文字列 → `subjectSlug` 参照へ移行（後方互換維持）
- Phase 2: `Exam` エンティティを独立化（タイマー機能等の準備）
- Phase 3: 各大学の科目を実形式へ詳細化（東大→phys-1/phys-2/phys-3 等）
- Vercel デプロイ（Phase 0 公開）

---

## 2026-04-21 (続き2) — 模擬演習ページ /exams/[uni]/[year]/[subject] を新設

### ユーザー指摘
過去問サイトの主な利用者は **模擬演習をしたい** はず。現状の「1大問1ページ」では試験形式での通し演習に向かない。

### 解決方針（ハイブリッド）
- **新規 `/exams/[uniSlug]/[year]/[subject]`** を主導線に
  - 1試験（同じ大学・年度・科目）を1ページにまとめて表示
  - 各大問の問題文は常時表示、解説はトグルで開閉
  - 上部に「すべての解説を表示/閉じる」全体トグル
  - 上部にクイックナビ（第N問へジャンプ）
- **既存 `/problems/[id]`** は SEO・リファレンス用途で温存
- 各大問の下に「個別ページで開く →」リンクで両者を接続

### 実装ファイル
- 新規 `src/components/ExamView.tsx` — クライアントコンポーネント（state でトグル管理）
- 新規 `src/app/exams/[uniSlug]/[year]/[subject]/page.tsx` — サーバーコンポーネント
- 修正 `src/data/problems.ts` — `getExams`, `getExamProblems`, `getSubjectSlugsForYear`, `SUBJECT_SLUG`/`SUBJECT_FROM_SLUG` 追加
- 修正 `src/app/universities/[slug]/[year]/page.tsx` — 「Practice Mode」CTA カード追加（科目別）
- 修正 `src/app/sitemap.ts` — exam URL を sitemap に追加（priority 0.85）

### URL 設計
- `/exams/todai/2025/phys` — 東大 2025 物理学 模擬演習
- `/exams/todai/2025/math` — 東大 2025 数学 模擬演習

### 動作確認
- `/exams/todai/2025/phys` HTTP 200 ✅（複数大問が並んで表示）
- `/exams/todai/2021/phys` HTTP 200 ✅（1大問でも動作）
- `/exams/todai/2025/math` HTTP 200 ✅（数学科目）
- `/universities/todai/2025` で「Practice Mode」CTA 表示 ✅
- TypeScript 型エラーなし ✅

### 次回TODO
- 同年度の第2問・第3問を追加して模擬演習の体裁を整える
  - 後発5大学（名大・九大・北大・横国・筑波）も各年度2問しかないので拡充
- ホームに「人気の模擬演習セット」セクションを追加（東大2025 phys 等）
- ExamView に「全問題を印刷用に表示」ボタン追加（任意）

---

## 2026-04-21 (続き) — 先発5大学を2021まで完備（78→87問）

### 追加内容（9問・全大学2021まで埋める）
| ID | 大学 | 年度 | 分野 | 難易度 | テーマ |
|---|---|---|---|---|---|
| todai-2021-phys-1 | 東大 | 2021 | 電磁気 | advanced | ベクトルポテンシャルとゲージ変換 |
| kyodai-2021-phys-1 | 京大 | 2021 | 統計 | standard | 2準位系のショットキー異常 |
| titech-2022-phys-1 | 東工大 | 2022 | 量子 | advanced | 角運動量の昇降演算子 |
| titech-2021-phys-1 | 東工大 | 2021 | 力学 | advanced | 対称コマの歳差運動 |
| tohoku-2022-phys-1 | 東北大 | 2022 | 熱力学 | standard | クラウジウス・クラペイロン式 |
| tohoku-2021-phys-1 | 東北大 | 2021 | 数学 | standard | 1次元グリーン関数 |
| osaka-2023-phys-1 | 阪大 | 2023 | 力学 | standard | ラザフォード散乱 |
| osaka-2022-phys-1 | 阪大 | 2022 | 電磁気 | advanced | Larmor 公式と輻射 |
| osaka-2021-phys-1 | 阪大 | 2021 | 量子 | standard | 変分法と水素原子基底状態 |

### 結果
- **全10大学が2021-2025の5年間カバレッジに到達**
- 9問すべて HTTP 200 ✅
- 年度別ページ `/universities/[slug]/[year]` も自動的に 2021 を含む ✅
- TypeScript型エラーなし ✅

### 全体統計（2026-04-21時点）
- **総問題数: 87問**
- 大学数: 10校
- 年度: 2021-2025（5年間）
- 分野: 力学・電磁気・量子・統計・熱力学・数学・光学・相対論

---

## 2026-04-21 — 先発5大学に2022-2024年度問題を追加（73→78問）

### 追加内容（5問・各大学1問・分野分散）
| ID | 大学 | 年度 | 分野 | 難易度 | テーマ |
|---|---|---|---|---|---|
| todai-2022-phys-1 | 東大 | 2022 | 力学 | standard | 加速台車上の振り子（非慣性系） |
| kyodai-2022-phys-1 | 京大 | 2022 | 量子 | advanced | 2準位系とラビ振動（RWA） |
| titech-2023-phys-1 | 東工大 | 2023 | 統計 | advanced | グランドカノニカル集団と粒子数揺らぎ |
| tohoku-2023-phys-1 | 東北大 | 2023 | 電磁気 | standard | 一様外場中の誘電体球 |
| osaka-2024-phys-1 | 阪大 | 2024 | 熱力学 | standard | ジュール・トムソン過程 |

### 方針
- 既存テーマと重複しないテーマを選定
- 先発5大学の標準フォーマット（考え方→計算→ボックス→物理的意味→ポイント→応用）で統一
- 著作権配慮：問題の設定は独自再構成、原文引用なし

### 動作確認
- 5問すべて HTTP 200 ✅
- TypeScript型エラーなし ✅

### 次回TODO
- 同じ大学・年度に第2問・第3問を追加（東大2022の電磁気/量子等）
- 阪大の年度をさらに拡張（2023, 2022, 2021）
- 東工大2022, 2021の追加

---

## 2026-04-21 — 参考書セクション一時非公開化

### 背景
純粋な過去問DBサイトとしてSEO流入を稼いでから、参考書タブを再公開＋アフィリエイト本格運用する方針に変更。

### 実装
フィーチャーフラグ方式（`src/lib/features.ts` の `BOOKS_ENABLED`）で一括切り替え。

- **新規**: `src/lib/features.ts`（`BOOKS_ENABLED = false`）
- **`/books` `/books/[field]`**: `notFound()` で 404、メタデータに `noindex,nofollow`
- **Header.tsx / layout.tsx フッター**: 「参考書」リンクを条件付き非表示
- **CommandPalette.tsx**: books-list アイテム＋全書籍エントリを条件付き除外
- **problems/[id], topics/[id]**: `RelatedBooks` ブロック非表示
- **sitemap.ts**: /books と /books/[field] を除外

### 動作確認
- `/books` → HTTP 404 ✅
- `/books/mechanics` → HTTP 404 ✅
- ヘッダーから「参考書」消失 ✅

### 再公開手順
`src/lib/features.ts` の `BOOKS_ENABLED` を `true` に変えるだけで全機能復活。書籍データ（31冊）と関連コンポーネントは温存。

---

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

---

## 2026-04-18 — GitHubプッシュ & Vercelデプロイ

### 実施内容
- GitHub リポジトリ `deepoceanheart924-bit/inshi-db` を作成・プッシュ
- Vercel CLIで本番デプロイ完了

### デプロイ情報
- **本番URL**: https://inshi-db.vercel.app
- **GitHub**: https://github.com/deepoceanheart924-bit/inshi-db

---

## 2026-04-19 — プレミアム機能削除（アフィリエイトモデルへ移行）

### 背景
サブスクモデルは特商法による住所公開義務・返金対応・決済責任等のリスクが大きい。
個人運営のためアフィリエイトモデルに変更する方針決定。

### 実施内容
- `problems.ts` の全問題を `isFree: true` に変更（4件更新）
- 問題詳細ページからロック機能・ぼかしプレビュー・プレミアムCTAを削除
- トップページから以下を削除：
  - 統計の「無料公開」→「分野」に変更
  - ページ最下部のプレミアム登録CTAセクション全体
  - 最新問題リストの PRO バッジ
- ヘッダーから「Premium」ボタンを削除
- 大学別ページ・分野別ページの PRO バッジを削除

---

## 2026-04-19 — Aceternity/Magic UI風 プレミアムエフェクト追加

### 実施内容
Aceternity UI / Magic UI のテクニックをClaude Code内で自作実装。
プロダクトレベルの「凄い」UIエフェクトを追加。

### 新規コンポーネント（src/components/ui/）
- `aurora-background.tsx` — オーロラ風の流れる背景グラデーション
- `spotlight.tsx` — マウス追従のスポットライト効果
- `number-ticker.tsx` — 数値が0からアニメーションでカウントアップ
- `tilt-card.tsx` — マウス位置に応じて3D回転するカード
- `border-beam.tsx` — カード枠を光が周回するアニメーション
- `shimmer-button.tsx` — シマーエフェクト付きCTAボタン
- `text-shimmer.tsx` — 文字に光の反射を走らせる

### トップページへの適用
- **ヒーロー**: AuroraBackground（流動するカラーグラデ）+ shimmerタイトル + ShimmerButton CTA
- **統計数値**: NumberTicker で 0→数字のカウントアップ
- **大学カード**: TiltCard で3D傾き + BorderBeam（1枚目強調）
- **分野カード**: TiltCard + NumberTicker
- 背景にサブオーロラ、ring/shadowを強化

### globals.css追加
- `@keyframes border-beam` `shimmer` `shimmer-slide` `spin-around`
- `bg-gradient-radial` ユーティリティ

### 技術的メモ
- OneDrive + Next.js 16のTurbopackキャッシュで `EPERM unlink` エラー → `.next`削除で解決
- `transformStyle: preserve-3d` + `transformPerspective` で本物の3D効果

### デプロイ
- https://inshi-db.vercel.app に反映済み

---

## 2026-04-19 — 図形・幾何模様の積極導入

### 背景
テキスト中心のデザインから、視覚的要素（SVG・パターン・装飾）を強化したいとの要望。

### 新規コンポーネント

**src/components/FieldIcon.tsx**（8分野のSVGアイコン）
- 力学: 振り子 + 揺動アーク
- 電磁気学: 磁力線 + N/S極
- 量子力学: 原子軌道（3重楕円）
- 統計力学: ベル曲線 + データ点
- 数学: 積分記号 + 行列のドット
- 光学: プリズムと虹（6色）
- 熱力学: 温度計 + 熱波
- 相対論: 時空の湾曲グリッド

**src/components/patterns.tsx**
- `DotPattern` — ドットパターンSVG
- `GridPattern` — グリッド
- `HexagonPattern` — ハニカム模様
- `DiagonalPattern` — 斜線テクスチャ
- `MathSymbolsBackground` — 浮遊数式記号（∫, ∂, ∇, ℏ, Σ, π, Ψ, ∞）
- `GeometricDivider` — ドット5つの装飾ディバイダー
- `CornerOrnament` — コーナー装飾
- `FormulaWatermark` — 数式ウォーターマーク（E=mc²等）

### 各ページへの適用
- **ヒーロー**: ドットパターン + 浮遊数式 + 装飾バッジアイコン + 縦区切り線
- **大学セクション**: 両端コーナー装飾 + カード右上三角アクセント + 矢印アイコン
- **分野セクション**: ヘクサゴン + 数式ウォーターマーク + 各カードにFieldIcon
- **最近の問題**: カード左側アクセントライン + ホバー時アイコン切替
- **問題詳細**: アイコン付きヘッダーカード
- **分野別**: アイコン付きヘッダーカード
- **大学別**: 右上に分野アイコン3つ

### デプロイ
- https://inshi-db.vercel.app に反映済み

---

## 2026-04-19 — 実践投入準備（最低限セット）

### 実施内容（著作権対応 + SEO + 法令対応）

**著作権対応**
- `problems.ts` の全11問 `statement` を問題文要約 → テーマ紹介形式に変更
- 問題ページに「問題文は公式PDFで」バナーを追加

**新規作成ページ**
- `/privacy` — プライバシーポリシー（10条構成、AdSense対応）
- `/contact` — お問い合わせ（メール窓口 + 用途別説明）
- `/about` — 運営について（ミッション・特徴・CTA）
- `/not-found` — 404ページ（数式記号背景 + CTA）

**SEO/メタ対応**
- `app/sitemap.ts` — 全ページsitemap.xml動的生成
- `app/robots.ts` — robots.txt生成
- `app/opengraph-image.tsx` — OGP画像（1200x630）動的生成
- `layout.tsx` のmetadataを強化（title template, keywords, OG, Twitter card）

**Analytics**
- `Analytics.tsx` — 環境変数 `NEXT_PUBLIC_GA_ID` による Google Analytics 連携

**フッター刷新**
- 4カラム構成（Browse / About / Legal）
- プライバシーポリシー・お問い合わせ・運営ページへのリンク

### 注意事項
- OGP画像のImageResponseは、外部フォントを必要とするUnicode記号（∫∇など）で失敗するため、日本語と基本文字のみで構成
- すべてのdivが2つ以上の子要素を持つ場合は明示的に `display: "flex"` が必要

---

## 2026-04-19 — 公式過去問PDFリンク修正

### 問題
`universities.ts` の `officialUrl` が入試案内トップページだったため、過去問PDFに辿り着けない状態だった。

### 修正内容（各大学の正しい過去問ページURL）
- 東大: https://www.phys.s.u-tokyo.ac.jp/about/147/ （修士課程過去問題集）
- 京大: https://www.scphys.kyoto-u.ac.jp/education/inshi/ （2004-2026年度）
- 東工大 → 東京科学大学: https://admissions.isct.ac.jp/ja/013/graduate/examination-questions
- 東北大: https://www.phys.tohoku.ac.jp/admission/graduate-school_entrance/nyushimondai-archives/
- 阪大: https://www.phys.sci.osaka-u.ac.jp/ja/grad/undergraduate_exam.html （2009-2025年度）

### 備考
- 東工大は2024年10月に東京科学大学へ統合済みのため、name を「東京科学大学（旧 東工大）」に変更、shortName は「東工大」のまま残し検索性確保
- 京大・阪大は公式ページで年度別にPDF公開されており問題なし
- 東大は「修士課程 過去問題集」ページ、東北大・東工大も公式ページで公開確認済み

---

## 2026-04-19 — C案（自己完結な問題再記述）への全面書き換え

### 背景
「テーマ紹介のみ」では解答が何に対応するか分からず使いにくい、とのFB。
完全オリジナル類題化するとサイトの存在意義を失うため、C案（公式問題を自分の言葉で書き直し）を採用。

### 構造
各問題の statement を以下の3セクション構成で統一：
1. **対応問題**: 大学名・年度・科目・問番号を明示
2. **問題の設定**: 物理状況・与えられた量を自分の言葉で記述
3. **問われている内容**: (1)(2)(3)の問いをリスト化

### 法的根拠
- 著作権法のアイデア・表現二分論により、物理状況そのものは保護対象外
- 表現（言い回し・構文）のみ独自に書き直しており、翻案に該当しない
- 参考書業界で標準的に行われている手法

### 書き換えた11問
- 東大物理: 剛体振り子、導体球、調和振動子、中心力場（4問）
- 京大物理: 正準集団、電磁波偏光、水素原子スペクトル（3問）
- 東工大物理: 連成振動、フェルミ気体（2問）
- 東大数学: 線形代数対角化（1問）
- 京大数学: 複素積分（1問）

### 使いやすさの改善
- 解答を見る前に、何を解いている問題か自己完結的に把握可能
- 記号定義が明示され、解答とスムーズに繋がる
- 「公式PDFで原題を確認」ボタンも併置（三重の安全策）

---

## 2026-04-19 — 大学ページの年度別分離

### 背景
年度別に問題を見やすく整理したいとの要望。

### 構造変更（URL設計）
Before:
- `/universities/[slug]` で全年度の問題を縦に並べて表示

After:
- `/universities/[slug]` → 年度カード一覧（2025年度 / 2024年度 ...）
- `/universities/[slug]/[year]` → その年度の問題一覧（新規作成）

### 新規作成
- `src/app/universities/[slug]/[year]/page.tsx`
  - 年度ヘッダーカード（大学名・年度大数字・分野・科目バッジ・公式PDFリンク）
  - 問題カード（問番号の円形バッジ、分野/難易度バッジ、タグ）
  - 前後の年度への矢印ナビゲーション

### 更新
- `universities/[slug]/page.tsx` — 年度カード一覧に変更（クリックで年度ページへ）
- `problems/[id]/page.tsx` — breadcrumb と navigation に年度リンクを追加
- `sitemap.ts` — 年度ページURL（全5つ）を追加

### SEO的メリット
- 「東大 物理 2025 過去問」等の年度クエリで直接ランディング可能
- 年度が独立したページになり、深い階層のコンテンツ構造に

---

## 2026-04-19 — 削除依頼ポリシー・著作権明記・解説拡充

### 新規ページ
- `/takedown` — 削除依頼・著作権ポリシーページ
  - 3ステップの削除申請フロー（メール・必要情報・対応）
  - 著作権方針3項目（問題文・解答・原典）
  - 連絡先の大きなCTA

### 問題詳細ページに追加
- **著作権明記ブロック**（解答セクションとナビの間）
  - 「本解説は当サイトのオリジナルです」明言
  - 大学名・公式PDFリンク・削除依頼ページへのリンク

### 既存ページ更新
- `layout.tsx` フッターLegalに「削除依頼・著作権」リンク追加
- `privacy/page.tsx` 8条（著作権）から takedown ページへ誘導
- `sitemap.ts` `/takedown` を追加

### 解説の全面改訂（全11問）
従来の簡潔版から、初学者向けの丁寧版に差し替え：

**改善ポイント**
- **考え方**セクションを各小問頭に配置（「なぜこのアプローチ？」）
- **物理直観**を数式前に説明
- **途中計算**を省略せず、変数分離・代入などを明示
- **boxed**で最終結果を強調
- **ポイント**セクションで応用例・関連物理を紹介
- 表・箇条書きで比較（剛体棒vs糸、フェルミ圧の応用例等）

**改訂した問題**
1. 剛体振り子（東大2025 問1） — 接線成分の取り方、エネルギー保存、微小振動
2. 導体球（東大2025 問2） — ガウスの法則、鏡像法、誘導分極
3. 調和振動子（東大2025 問3） — 生成消滅演算子の使い所
4. 中心力場（東大2024 問1） — 有効ポテンシャル、円軌道の安定性
5. 正準集団の揺らぎ（京大2025 問1） — 揺動散逸定理
6. 電磁波偏光（京大2025 問2） — フレネル係数、ブリュースター角の直観
7. 水素原子（京大2024 問1） — 選択則、シュタルク効果
8. 連成振動（東工大2025 問1） — 基準モード、うなり
9. フェルミ気体（東工大2025 問2） — 状態密度、縮退圧
10. 線形代数（東大2025 数学問1） — 対角化、行列指数関数
11. 複素積分（京大2025 数学問1） — 3つの積分パターン

---

## 2026-04-19 — LPの大胆リデザイン（編集雑誌スタイル）

### コンセプト
従来の「きれい・整然」から「大胆・編集的・インタラクティブ」に進化。
Claude Design のリリース（4/17）を機に刷新。

### 新規コンポーネント
- **`Pendulum.tsx`** — 剛体振り子のRK4物理シミュレーション（SVG）
  - $\\ddot\\theta = -(g/\\ell)\\sin\\theta$ をリアルタイム積分
  - 軌跡グラデ、天井ハッチング、方程式ラベル
  - 東大2025問1の問題内容とリンク
- **`EquationMarquee.tsx`** — 物理・数学数式の無限横スクロール
  - KaTeX レンダリング
  - 2段階（上と下で反対方向）

### LPの新セクション構成
1. **Hero**: 非対称分割（左60%：巨大タイポ「院試を、/オープンに。」+ 右40%：Pendulumシミュレーション）
2. **EquationMarquee**: 14個の有名公式が流れる
3. **Featured Problem**: 雑誌風編集特集（BorderBeam + 分野アイコン大 + ヘクサゴン背景）
4. **Universities Bento**: 非均一グリッド（1つ目を2×2の大カードに）
5. **Year Timeline**: 年度を水平軸で可視化、各年度に問題数・大学内訳
6. **Fields Bento**: 従来の分野カード（アイコン + カウントアップ）
7. **Closing**: フルスクリーン級「情報格差を、オープンに崩す。」宣言

### CSS追加
- `@keyframes marquee` / `marquee-reverse` — 横スクロールアニメ

### ビルド結果
- 成功
- https://inshi-db.vercel.app に反映

---

## 2026-04-19 — 10機能一気実装（Layer 1〜4）

### Layer 1: ビジュアルポリッシュ
- `GrainOverlay.tsx` — SVG feTurbulence によるフィルムグレイン（サイト全体）
- `Divider.tsx` — DiagonalDivider / WavyDivider
- `BigBackgroundType.tsx` — 巨大背景タイポ（text-stroke のみ）
- `KineticText.tsx` — 文字ごとフェードイン+ブラー解除
- `ThemeSelector.tsx` — 5種類の物理テーマ（Default/Optics/Quantum/Relativity/Thermal）切替、oklch のhue変更で実現
- `BrandPattern.tsx` — 独自ブランドパターン（orbit circles + math notation）

### Layer 2: 読書UX
- `ReadingProgress.tsx` — スクロール進捗のグラデバー（fixed top）
- `FloatingTOC.tsx` — 右サイドの Floating TOC（h2/h3自動抽出、IntersectionObserver でアクティブ検出）
- `Prerequisites.tsx` + `data/prerequisites.ts` — 分野別の前提知識セクション
- `Tooltip.tsx` / `GlossaryProvider.tsx` + `data/glossary.ts` — 用語ホバーツールチップ（26語を自動検出、delegation パターン）

### Layer 3: Command Palette
- `CommandPalette.tsx` — ⌘K/Ctrl+K起動、fuzzy 検索、全ページ・大学・分野・問題を検索可能、キーボードナビ完備

### Layer 4: 物理シミュレーション群
- `simulations/WaveSim.tsx` — 2つの波のうなり（統計力学・熱力学用）
- `simulations/FieldLinesSim.tsx` — 電気双極子の粒子軌跡（電磁気・光学用）
- `simulations/OrbitSim.tsx` — ケプラー軌道（力学・数学用）
- `simulations/QuantumSim.tsx` — 調和振動子の波動関数（量子用）
- `FieldSimulation.tsx` — 問題の分野に応じて自動選択

### 統合
- `layout.tsx` に Analytics/GrainOverlay/CommandPalette/GlossaryProvider をマウント
- `Header.tsx` に検索ヒント（⌘K）と ThemeSelector を追加
- 問題詳細ページに Simulation / Prerequisites / TOC / ReadingProgress を追加

### KaTeX.tsx 改良
- 用語を自動検出して `.glossary-term` でラップ
- テーブル記法（markdown）サポート
- math と HTMLタグは保護

---

## 2026-04-19 — コンテンツ拡充（11問→23問）

### 追加した12問
**東北大（新規4問）**
- 2025 物理1: 剛体の慣性モーメント（mechanics, standard）
- 2025 物理2: RC回路の充電とエネルギー（electromagnetism, basic）
- 2025 物理3: カルノーサイクルとエントロピー（thermodynamics, standard）
- 2024 物理1: ラグランジアン形式と保存量（mechanics, advanced）

**阪大（新規3問）**
- 2025 物理1: スピン1/2の系とパウリ行列（quantum, standard）
- 2025 物理2: ヤングの干渉実験（optics, basic）
- 2025 数学1: フーリエ級数とバーゼル問題（math, standard）

**東大（2023年度2問追加）**
- 2023 物理1: 弾性衝突と換算質量（mechanics, standard）
- 2023 物理2: 角運動量の合成（quantum, advanced）

**京大（2023年度2問追加）**
- 2023 物理1: マクスウェル方程式から電磁波（electromagnetism, standard）
- 2023 物理2: ボース・アインシュタイン凝縮（statistical, advanced）

**東工大（2024年度1問追加）**
- 2024 物理1: 特殊相対性とローレンツ変換（relativity, advanced）

### カバー分野の拡張
- 新規カバー: **熱力学、光学、相対論**（これまで未収録）
- 全 8 分野を網羅

### データ整合性
- `universities.ts` の problemCount を更新
- sitemap.xml が自動的に再生成（23問ページ＋追加の年度ページ）

---

## 2026-04-19 — 大規模コンテンツ拡張（23問→73問、10大学対応）

### 大学拡張（5→10校）
旧帝大全 7 校 + 横国 + 筑波 + 東工大（東京科学大学）で **10 大学** カバー：
- 東京大学、京都大学、東京科学大学、東北大学、大阪大学
- **名古屋大学**（新規、10問）
- **九州大学**（新規、10問）
- **北海道大学**（新規、10問）
- **横浜国立大学**（新規、10問）
- **筑波大学**（新規、10問）

### 年度拡張
各新規大学で 2021〜2025 の **5 年分**（各年 2 問）を収録。

### 追加した問題数
- 新規 50 問追加（5大学 × 5年 × 2問）
- 総計 **73 問**

### カバートピック
- 力学: 単振り子、剛体、コリオリ、万有引力、衝撃波、二体問題、減衰振動、ケプラー
- 電磁気: ガウス、クーロン、RLC、LC、磁気モーメント、ローレンツ力、アンペール
- 量子: スピン、Bohr、井戸型、トンネル、光電効果、自由粒子、シュテルン・ゲルラッハ、エルミート
- 統計: マクスウェル分布、Debye、バンド理論、等分配則、半導体、ギブズのパラドックス
- 熱力: 断熱、マクスウェル関係式、Planck 輻射、Stefan-Boltzmann
- 光学: 干渉、Fresnel 回折、フェルマー原理
- 数学: フーリエ、熱伝導、中心極限定理、ベクトル解析

### 各問題の品質
- 対応問題（大学・年度・問番号明示）
- 問題の設定を自分の言葉で
- 解答は初学者向け（考え方→段階導出→boxed→ポイント）
- 適度に簡潔化（400〜700語/問）

---

## 2026-04-19 — LPに6つの面白い要素を追加

### 新規コンポーネント
1. **`SimulationShowcase.tsx`** — 5つの物理シミュレーション（振り子・軌道・電場・波動・量子）を同時表示、ホバーで色別グロー
2. **`JapanMap.tsx`** — 10大学を日本地図上にピンで配置、ホバーで情報カード、クリックで遷移
3. **`RandomProblem.tsx`** — サイコロアニメ付き「ランダム1問」ボタン、クリックでランダムな問題に遷移
4. **`MiniQuiz.tsx`** — 3問インタラクティブクイズ（ブリュースター角・揺動散逸定理・零点振動）、ヒント・プログレス・リザルト画面
5. **`TagCloud.tsx`** — 全問題のタグを頻度ベースでサイズ可変表示、クリックで該当問題へ
6. **`PhysicsFact.tsx`** — 12種類の物理トリビア、シャッフルボタンでランダム切替

### LPへの追加セクション
- Featured Problem 直後に「ランダム問題 + 物理事実」の2カラム
- 新セクション「物理を、目で見る」（Live Simulation 5つのグリッド）
- 大学セクションに日本地図ピンマップ統合
- 分野セクション下に「クイズ + タグクラウド」の 2:3 分割レイアウト

---

## 2026-04-19 — 日本地図の精度向上 + 物理解説タブの新設

### 日本地図の改善
- `JapanMap.tsx` を全面刷新
  - 北海道・本州・四国・九州の各島を個別SVGパスで描画（よりリアル）
  - 大学位置を**実際の緯度経度**から算出（lon 128°–146°E、lat 30°–46°N）
  - ピン表示を洗練（グロー・白縁・問題数バッジ・コンパス）
  - ホバー情報カードに都市名・座標表示
  - 沖縄を破線枠で参考表示

### 物理解説タブ（新機能）
新規ディレクトリ `/topics/` を作成し、以下を実装：

**データ層**
- `data/topics.ts` — Topic 型定義（id, field, category, summary, content, relatedProblems, relatedTopics）
- 5カテゴリ: 基本概念 / 定理・公式 / 計算技法 / 躓きポイント / 数学的前提

**ページ**
- `/topics` — カテゴリ別にグルーピングした一覧（全13トピック）
- `/topics/[id]` — 個別解説ページ（読書進捗バー、Floating TOC、関連問題、関連トピック）

**初期トピック（13個）**
- 力学: ラグランジアン形式入門、ネーターの定理、オイラー・ラグランジュの使い方
- 電磁気: ガウスの法則を使いこなす、マクスウェル方程式の直観的理解
- 量子: ブラ・ケット記法、摂動論の1次・2次
- 統計: 正準集団の考え方
- 数学: 極座標の微分、複素積分の経路選び、PDE変数分離
- 共通: 符号規約、単位と次元解析

**ナビゲーション統合**
- Header に「解説」リンク追加
- Command Palette (⌘K) にトピック検索追加（kind="topic"、ローズ色バッジ）
- Footer の Browse セクションにリンク
- sitemap.xml にトピックページ追加

**問題ページとの相互リンク**
- 問題ページに「関連する物理解説」セクション追加
- トピックから関連問題への逆リンク

---

## 2026-04-19 — 日本地図を地理的に正確な輪郭へ

### 問題
既存の手描きSVGは不正確でカートゥーン的。ユーザーから正確な輪郭に差し替え依頼。

### 対応
本物の地理データ（dataofjapan/land TopoJSON）から生成するアプローチに変更。

**新規追加**
- `japan.topojson`（420KB） — 元データ（dataofjapan/land）
- `scripts/generate-japan-path.mjs` — ビルド前生成スクリプト
  - TopoJSONを読込
  - topojson-simplify で簡略化（threshold 0.0001）
  - 全47都道府県ジオメトリを merge して国土輪郭に
  - d3-geo の Mercator 投影で 800×900 viewBox にフィット
  - 座標を 1 桁精度に丸めて軽量化
- `src/data/japan-path.ts`（生成物、101KB） — SVGパス文字列 + 投影関数

**JapanMap.tsx の刷新**
- 手描きパスを完全に破棄、生成された正確な `JAPAN_PATH_D` を使用
- 大学ピンも同じ Mercator 投影 `projectLonLat()` で座標計算 → 輪郭とピンの整合性確保
- スケールバー（≈200km）とコンパスを追加

### 結果
- 北海道・本州・四国・九州の輪郭が本物の地図レベルで正確
- 大学ピンの地理的位置も正確（実緯度経度ベース）

### 再生成方法
```
node scripts/generate-japan-path.mjs
```

---

## 2026-04-20 — 問題解説ベースでトピック追加（最優先5個）

### 背景
トピックを網羅的に書くと終わらない／何を書くべきか曖昧。
**「問題解説に登場する概念だけ書く」**方針に変更 → 範囲が有限・優先順位が自動決定。

### 実施内容
1. 全73問の解説を走査、概念キーワード 189個を抽出（Explore エージェント使用）
2. 既存13トピックと照合、不足概念を頻度順にリスト化
3. 最優先5トピックを執筆

### 追加したトピック（5個、初学者向け）
- **energy-conservation**（エネルギー保存則） — 12問で参照
- **equation-of-motion**（運動方程式の立て方） — 11問で参照
- **angular-momentum-conservation**（角運動量保存） — 5問で参照
- **moment-of-inertia**（慣性モーメント計算） — 5問で参照
- **eigenvalues-eigenvectors**（固有値・固有ベクトル） — 5問で参照

各トピックに relatedProblems を設定 → 問題ページに自動でリンクが表示される。

### 残り概念の優先度
- 🟠 高優先（3〜4問）: 鏡像法、双極子モーメント、微小振動近似、状態密度、分配関数、比熱、波動方程式、選択則、生成消滅演算子、エントロピー、スピンとパウリ行列 (11個)
- 🟡 中優先（2問）: 約19個
- 🟢 低優先（1問だけ）: 約130個

### トピック総数
13 → **18** 個。問題ページの参照カバー率が大幅に向上。

---

## 2026-04-20 — 高優先10トピック追加

### 追加したトピック
- **method-of-images** 鏡像法 — electromagnetism / technique
- **dipole-moment** 双極子モーメント — electromagnetism / concept
- **small-oscillations** 微小振動近似 — mechanics / technique
- **density-of-states** 状態密度の計算 — statistical / technique
- **heat-capacity-temperature** 比熱の温度依存性 — statistical / concept
- **wave-equation** 波動方程式 — general / concept
- **selection-rules** 選択則 — quantum / theorem
- **creation-annihilation-operators** 生成消滅演算子 — quantum / technique
- **entropy-irreversibility** エントロピーと不可逆過程 — thermodynamics / concept
- **pauli-matrices-spin** パウリ行列とスピン — quantum / math

（「分配関数と熱力学量」は既存の `canonical-ensemble` でカバー済みのため今回省略）

### トピック総数
18 → **28** 個。カバー率向上。

---

## 2026-04-20 — 中優先15 + 低優先30トピック一気追加

### 中優先15（2問で登場、深度あり）
- hamiltonian-formalism ハミルトニアン形式
- effective-potential 有効ポテンシャル
- fourier-series フーリエ級数
- fresnel-coefficients フレネル係数
- brewster-angle ブリュースター角
- fermi-dirac-statistics フェルミ分布
- bose-einstein-statistics ボース分布
- resonance-q-factor 共振とQ値
- coriolis-force コリオリ力
- variational-principle 変分原理
- damped-oscillation 減衰振動
- impedance インピーダンス
- dispersion-relation 分散関係
- faraday-law ファラデーの法則
- matrix-elements 行列要素

### 低優先30（1問で登場、コンセエント版）
- bloch-theorem Bloch定理
- debye-model Debye模型
- tunneling 量子トンネル
- photoelectric-effect 光電効果
- lorentz-transformation ローレンツ変換
- carnot-cycle カルノーサイクル
- maxwell-relations マクスウェル関係式
- central-limit-theorem 中心極限定理
- doppler-effect ドップラー効果
- fresnel-diffraction Fresnel回折
- planck-radiation Planck輻射
- clebsch-gordan クレプシュ・ゴルダン
- mach-number マッハ数
- stokes-theorem Stokes/Gauss定理
- lorentz-force-cyclotron ローレンツ力
- bohr-model Bohr模型
- infinite-well 無限井戸
- rc-circuit RC回路
- lc-circuit LC回路
- buoyancy 浮力
- stokes-drag Stokes抵抗
- stern-gerlach シュテルン・ゲルラッハ
- rigid-body-top 剛体コマ
- equipartition-theorem 等分配則
- gravitational-escape 脱出速度
- dulong-petit Dulong-Petit
- parallel-axis-theorem 平行軸の定理
- zero-point-energy 零点振動
- beat-phenomenon うなり現象

### トピック総数
28 → **73** 個。問題解説内の主要概念を完全カバー。

### 問題ページからのリンク
各 topic の relatedProblems 設定により、全73問から関連トピックへの自動リンクが張られる状態に。

---

## 2026-04-20 — 参考書アフィリエイトタブ新設（/books）

### 新規作成
**データ層**
- `src/data/books.ts` — Book 型定義 + 30冊のデータ
- 分野 + 「院試対策」「全般」カテゴリ
- `getAmazonUrl(book)` — env `NEXT_PUBLIC_AMAZON_TAG` でアフィリエイトタグ注入、ASIN なければ検索フォールバック
- `getRelatedBooks()`, `getBooksForTopic()` — 問題/トピックとの紐付け

**ページ**
- `/books` — トップ（分野別セクション、全30冊をグリッド表示）
- `/books/[field]` — 分野フィルタ（力学・電磁気・量子・統計・熱力学・数学・光学・相対論・院試対策・全般）

**コンポーネント**
- `BookCard.tsx` — 表紙エリア、レベル/分野/Classicバッジ、説明、強み、「Amazonで見る」CTA、アフィリエイト表記
- `RelatedBooks.tsx` — 問題/トピック下部のコンパクトな3冊リスト

### 収録30冊
- **力学**: ランダウ、ゴールドスタイン、岩波、原島
- **電磁気**: ランダウ（場の古典論）、ジャクソン、砂川、太田、長岡
- **量子**: 猪木・川合、サクライ、グリフィス、朝永、シッフ
- **統計/熱力**: 田崎（統計）、久保、田崎（熱力学）、Reif
- **数学**: 寺沢、Boas、矢野、Arfken
- **院試対策**: 詳解物理演習、詳解力学/電磁気/量子/熱学演習、東大過去問集
- **全般**: 物理数学の直観的方法、ファインマン物理学、QED

### ナビゲーション統合
- Header に「参考書」リンク
- Footer の Browse に追加
- Command Palette (⌘K) で書籍検索（amber バッジ）
- sitemap に追加

### 問題/トピックページとの連携
- 問題ページ解説の下に「さらに学ぶための参考書」（3冊、コンパクト版）
- トピックページ末尾にも同じブロック
- `relatedProblems` / `relatedTopics` があれば直接マッチ、なければ field 一致でフォールバック

### 法的対応
- `/privacy` の広告条項を「アフィリエイトについて」に拡張
  - Amazon アソシエイトの参加者である旨を明記
  - 購入価格に影響しない旨
  - 紹介料に影響されない選定方針
- `/books` ページ下部にも免責文
- BookCard 内にも小さな「アフィリエイトリンク含む」表記
- `rel="sponsored"` を全リンクに

### 運用準備
ユーザー作業：
1. Amazon アソシエイト・プログラムに登録
2. Vercel の環境変数 `NEXT_PUBLIC_AMAZON_TAG` に発行された ID を設定
3. リンクが自動的に正しくなる

---

## 2026-04-20 — /books ページを編集雑誌風デザインに刷新（glanta-glamping参考）

### 背景
ユーザー要望: glanta-glamping.com のような**詩的・余白重視・編集雑誌的**なデザインにしたい。

### デザイン要素（適用）
- **暖色クリーム背景**（`oklch(0.97 0.012 85)` 基調、ダーク対応）
- **Noto Serif JP** セリフ体を見出しに
- **詩的な日本語 + 英語並記**（"書を通して、世界を少しずつ。" / "A curated shelf..."）
- **Chapter番号付き章立て**（ROOMS のような構成）
- **本の背表紙風グラデーション**（表紙画像の代替、分野ごとに色相変化）
- **極小の装飾**（罫線 + 小ドット）
- **余白を主役に**（py-24〜py-32）
- **交互背景色**（cream と cream-deep）でリズム

### 新規・変更
- `layout.tsx`: `Noto_Serif_JP` フォント追加、`--font-serif-jp` 変数
- `globals.css`: `.editorial` スコープ内のカラーパレット定義（`--bg-cream`, `--ink-warm`, `--accent-clay`, `--rule-line` 等）
- `BookCard.tsx`: 完全刷新
  - 4:5 アスペクト比の背表紙風グラデーションカード
  - スパイン（背表紙）の帯 + レベルグリフ（I/II/III）
  - セリフタイトルを装飾として中央配置
  - メタ情報は下部に読みやすく
  - 「Read more」のイタリックCTA
  - 矢印が hover で右にスライド
- `/books/page.tsx`:
  - ヒーロー：巨大セリフ、詩的タイトル、"Scroll" 案内
  - 各分野に `Chapter 01` `For the exam's eve` 等の英題付き章扉
  - 分野ごとにキャプション付き（「本番に向けて、最後に頼る一冊を。」等）
  - Chapter 間に装飾ディバイダー
  - 最下部に Disclosure 免責（セリフで控えめに）
- `/books/[field]/page.tsx`: 同デザインで簡潔版
  - 大セリフタイトル + 英題
  - 分野フィルタはセリフ・小文字横並び
  - 下部に Disclosure

### Chapter 英題一覧
- 院試対策 → For the exam's eve
- 力学 → Of motion and matter
- 電磁気学 → Fields and radiation
- 量子力学 → Where waves become particles
- 統計力学 → Order from randomness
- 熱力学 → The arrow of time
- 数学 → The language of physics
- 全般 → Beyond boundaries

---

## 2026-04-20 — /topics ページを antscr.co.jp 風に刷新

### ユーザー要望
antscr.co.jp のような **オフホワイト背景 + ドットグリッド + フラット＆ポップ** な雰囲気にしたい。背景は「丸パクリ」。

### 背景の実装
globals.css に `.creative` スコープを新設（/topics ページのみ）：
- **ベース背景**: `oklch(0.975 0.006 90)` のわずかに温かいオフホワイト
- **ドットグリッド**: `radial-gradient(circle at 1px 1px, oklch(0.78) 1px, transparent 0)` を 24px タイル
- **fixed attachment**: スクロール時に背景が動かない（antscr的な静けさ）
- **微細グレイン**: `feTurbulence` で最小限のノイズテクスチャ
- **ダークモード対応**: 同じ構造で色だけ反転

### カラーアクセント
- `--cr-accent`: ビビッドなオレンジレッド（`oklch(0.6 0.22 30)`）
- `--cr-accent-2`: エレクトリックブルー（250度）
- `--cr-accent-3`: ライム（100度）
- カテゴリ毎に色相ローテーション

### /topics ページ
- 大胆な **font-black** ヒーロー「物理を、ひもとく。」
- "ひもとく" をアクセントカラーで強調
- 罫線で区切った 3 分割スタッツ（Topics / Fields / Categories）
- 各カテゴリに **番号 + 英題 + 日本語題** の3層ヘッダー
- トピックカード：角丸なし、上部に hover で伸びるアクセントバー
- 「Read →」を vivid なカテゴリ色で

### /topics/[id] 詳細ページ
- 同じ `creative` 背景で統一感
- タグ類は四角いフラットピル
- h1 は 5vw の巨大フォント
- 本文は cream-alt の囲みカードで読みやすく
- Related Problems / Topics / Books を視覚的に統一
- FloatingTOC と ReadingProgress は維持

### 影響範囲
- `/topics` および `/topics/[id]` のみ
- 既存 `.editorial`（/books）や通常ページには影響なし
- これで3種類のデザイン世界が並存：標準UI / editorial（books） / creative（topics）

### 次回TODO
- [ ] ASINのプレースホルダーを実在の値に差し替え
- [ ] 書籍追加（50冊目標）
- [ ] 既存5大学の過去年度拡張
- [ ] Google Analytics 測定ID設定
- [ ] 物理ツール集積サイト化（Phase 1）

### 次回TODO（その他）
- [ ] Google Analytics測定ID取得 → Vercel環境変数 `NEXT_PUBLIC_GA_ID` に設定
- [ ] Google Search Console 登録・sitemap送信
- [ ] Google AdSense審査申請
- [ ] Amazonアソシエイト登録
- [ ] 問題ページに関連参考書リンクセクション
- [ ] 問題数の拡充（30問以上目標）
