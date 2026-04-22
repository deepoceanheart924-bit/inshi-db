import { Field } from "./types";

/**
 * Knowledge topics — explanatory deep-dives on physics/math concepts.
 * Keep content student-friendly (理系大学生初学者向け).
 */

export type TopicCategory =
  | "concept"     // 基本概念
  | "theorem"     // 定理・公式
  | "technique"   // 計算技法
  | "stumbling"   // 躓きやすい所
  | "math";       // 数学的前提

export const CATEGORY_LABELS: Record<TopicCategory, string> = {
  concept: "基本概念",
  theorem: "定理・公式",
  technique: "計算技法",
  stumbling: "躓きポイント",
  math: "数学的前提",
};

export const CATEGORY_COLORS: Record<TopicCategory, string> = {
  concept: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  theorem: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
  technique: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  stumbling: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
  math: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20",
};

export type Topic = {
  id: string;
  title: string;
  field: Field | "general";
  category: TopicCategory;
  summary: string;
  /** Long-form content in the same Markdown-lite dialect as problems.solution */
  content: string;
  /** Problem IDs where this topic is relevant */
  relatedProblems?: string[];
  /** Other topic IDs */
  relatedTopics?: string[];
  /** Estimated reading time in minutes */
  readMinutes?: number;
};

export const topics: Topic[] = [
  // ========== 力学 ==========
  {
    id: "lagrangian-basics",
    title: "ラグランジアン形式入門",
    field: "mechanics",
    category: "concept",
    summary:
      "ニュートンの運動方程式と何が違うのか、どんなときに便利か、実際の使い方を最初から",
    readMinutes: 8,
    relatedProblems: ["tohoku-2024-phys-1"],
    relatedTopics: ["noether-theorem", "euler-lagrange"],
    content: `## なぜラグランジアン形式を学ぶのか

ニュートンの運動方程式 $\\vec F = m\\vec a$ は力学の出発点ですが、実際に使うと次のような困りごとがあります：

- **拘束条件の扱いが面倒**：振り子の糸の張力、斜面の垂直抗力など、解きたい運動にあまり興味がない"補助的な力"を考える必要がある
- **座標系の選び方で式が変わる**：極座標に変換するたびに $\\ddot r - r\\dot\\theta^2$ のような項が見かけ上湧いてくる
- **保存量を見つけにくい**：力の式からエネルギー保存や角運動量保存を「導く」のに一手間かかる

**ラグランジアン形式**はこれらを一気に解決する道具です。

## 基本アイデア

系のラグランジアン $L$ を
$$L = T - U$$
（運動エネルギー − ポテンシャルエネルギー）と定義します。すると、**運動方程式は次の一つの形で書ける**：

$$\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot q}\\right) - \\frac{\\partial L}{\\partial q} = 0$$

これが**オイラー・ラグランジュ方程式**。$q$ は任意の一般化座標（直交座標でも極座標でも、角度でもバネの伸びでもよい）。

## なぜ $L = T - U$ なのか

「最小作用原理」という深い原理から導かれます。作用
$$S = \\int_{t_1}^{t_2} L(q, \\dot q, t)\\,dt$$
が**極値**（通常は極小）をとる経路が現実の運動。変分法で $\\delta S = 0$ を計算するとオイラー・ラグランジュ方程式が出ます。

この時点で「は？」と思っても大丈夫です。最初は「$L = T - U$ とおいて方程式に代入すると自動的に運動が出る」と覚えればOK。

## 具体例：単振り子

質量 $m$、糸の長さ $\\ell$、鉛直からの角度 $\\theta$ を一般化座標に選ぶ。

- 運動エネルギー：$T = \\frac{1}{2}m\\ell^2\\dot\\theta^2$
- ポテンシャル：$U = -mg\\ell\\cos\\theta$（最下点を基準）
- ラグランジアン：$L = \\frac{1}{2}m\\ell^2\\dot\\theta^2 + mg\\ell\\cos\\theta$

方程式：
$$\\frac{\\partial L}{\\partial\\dot\\theta} = m\\ell^2\\dot\\theta, \\quad \\frac{d}{dt}(m\\ell^2\\dot\\theta) = m\\ell^2\\ddot\\theta$$
$$\\frac{\\partial L}{\\partial\\theta} = -mg\\ell\\sin\\theta$$

代入：
$$m\\ell^2\\ddot\\theta + mg\\ell\\sin\\theta = 0$$
$$\\ddot\\theta = -\\frac{g}{\\ell}\\sin\\theta$$

これはニュートン形式でも得られる式ですが、**糸の張力を考えなくて済んだ**のがポイント。

## いつ使うべきか

| 状況 | おすすめ形式 |
|---|---|
| 自由な並進運動 | ニュートン形式 |
| 拘束条件あり（振り子、斜面、剛体） | **ラグランジアン形式** |
| 一般相対論・場の理論 | **ラグランジアン形式**（ほぼ必須） |
| 量子力学への橋渡し | **ラグランジアン/ハミルトニアン形式** |

## よくある躓き

**Q: $\\partial L/\\partial \\dot q$ と $\\partial L/\\partial q$ の違い？**

$L$ は $q$ と $\\dot q$ を**独立変数**として見ます。$\\dot q$ は $q$ の時間微分ですが、偏微分では「$q$ を固定、$\\dot q$ だけ動かす」という見方をします。形式的に扱うのがコツ。

**Q: 時間微分を先にする？**

$\\frac{d}{dt}(\\partial L/\\partial\\dot q)$ は**全時間微分**。$\\partial L/\\partial\\dot q$ を $t$ の関数として見て微分する（$q, \\dot q$ 経由でも時間依存する）。

## 次に学ぶこと

- **ネーターの定理**：対称性 ⇔ 保存則の驚くべき対応
- **ハミルトニアン形式**：位相空間での見方、量子化の舞台`,
  },
  {
    id: "noether-theorem",
    title: "ネーターの定理と保存則",
    field: "mechanics",
    category: "theorem",
    summary:
      "「対称性があれば保存量がある」という物理学で最も美しい定理の一つ。直観的な理解から具体例まで",
    readMinutes: 6,
    relatedProblems: ["tohoku-2024-phys-1", "todai-2024-phys-1"],
    relatedTopics: ["lagrangian-basics"],
    content: `## 定理の主張

> **連続的な対称性と保存則は 1 対 1 対応する**（ネーター、1918）

具体的には：

| 対称性 | 保存量 |
|---|---|
| 時間並進対称性（$t \\to t + \\varepsilon$ で不変） | **エネルギー** |
| 空間並進対称性（$\\vec r \\to \\vec r + \\vec\\varepsilon$ で不変） | **運動量** |
| 回転対称性（角度 $\\theta$ で不変） | **角運動量** |
| ゲージ対称性（電磁気学） | **電荷** |

これらは"偶然"ではなく、**対称性から数学的に必然**です。

## なぜそうなるのか（直観）

ラグランジアン $L$ がある座標 $q$ を**明示的に含まない**とする（$\\partial L/\\partial q = 0$）。このとき $q$ は**循環座標**と呼ばれます。

オイラー・ラグランジュ方程式：
$$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q} = \\frac{\\partial L}{\\partial q} = 0$$

したがって **$p_q = \\partial L/\\partial \\dot q$ は保存量**。

**「$L$ が $q$ に依存しない」＝「$q$ 方向のずれに対して系が対称」**。だから「$q$ に共役な運動量 $p_q$」が保存する。

## 具体例 1：並進対称性 ⇔ 運動量保存

自由粒子 $L = \\frac{1}{2}m\\dot{\\vec r}^2$。$\\vec r$ は含まれない（$\\dot{\\vec r}$ だけ）→ 共役運動量 $\\vec p = m\\dot{\\vec r}$ は保存。

これは当たり前に思えますが、「空間のどこに置いても同じ物理」という**空間の一様性**から来ているわけです。

## 具体例 2：回転対称性 ⇔ 角運動量保存

中心力場 $L = \\frac{1}{2}m(\\dot r^2 + r^2\\dot\\theta^2) - U(r)$。$\\theta$ は含まれない → $p_\\theta = mr^2\\dot\\theta$ は保存 = 角運動量。

地球の公転軌道が安定なのは、太陽の重力が中心力場（$r$ だけの関数）で角度 $\\theta$ に対称なため。

## 具体例 3：時間並進対称性 ⇔ エネルギー保存

$L$ が $t$ を陽に含まない場合（$\\partial L/\\partial t = 0$）、Hamiltonian
$$H = \\sum_i \\dot q_i\\frac{\\partial L}{\\partial\\dot q_i} - L$$
が保存。これがエネルギーです。

## 重要な注意

**対称性は"連続的"である必要**があります：
- 並進対称性（連続）→ 運動量保存 ✓
- 鏡映対称性（離散、$x \\to -x$）→ 連続的な保存量は出ない（ただしパリティという離散保存量はある）

## なぜ美しいのか

物理法則の**対称性**という美的原理から、**具体的な保存量**が機械的に出てくる。これは古典力学だけでなく：

- 特殊相対論 → ローレンツ対称性 → 4元運動量保存
- 電磁気学 → ゲージ対称性 → 電荷保存
- 量子場理論 → 各種対称性 → 素粒子反応の選択則

**「理論がどんな対称性を持つか」を調べれば、どんな保存量があるか分かる**。現代物理学の設計原理そのもの。

## 躓きポイント

**$\\partial L/\\partial q = 0$ だけで保存？**

はい。ただし「$q$ を含まない」ことと「$\\theta$ の関数であっても依存が自明に消える」ことの区別に注意。例えば $L = \\frac{1}{2}m\\ell^2\\dot\\theta^2 + mg\\ell\\cos\\theta$ は $\\cos\\theta$ を含むので $\\theta$ 方向の対称性はない → 角運動量は保存しない（振り子は角運動量が変わる）。

**離散対称性は？**

離散対称性（パリティ、時間反転、荷電共役）も量子力学で重要な選択則を与えますが、連続保存量には対応しない別の話です。`,
  },
  {
    id: "euler-lagrange",
    title: "オイラー・ラグランジュ方程式の使い方",
    field: "mechanics",
    category: "technique",
    summary: "具体的な計算手順を 3 ステップで。よくある計算ミスと対処法も",
    readMinutes: 5,
    relatedTopics: ["lagrangian-basics"],
    content: `## 3 ステップで解く手順

### ステップ 1: 一般化座標を選ぶ
拘束条件を自動で満たすような座標を選ぶ（振り子なら角度 $\\theta$、バネなら伸び $x$ 等）。

### ステップ 2: ラグランジアンを書く
$L = T - U$ を、選んだ座標で書く。速度項は**時間微分で書き下す**：
$$\\dot x = \\frac{dx}{dt}$$

### ステップ 3: オイラー・ラグランジュ方程式に代入
各座標 $q$ について：
$$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q} - \\frac{\\partial L}{\\partial q} = 0$$

## 例：2 つのバネで繋がれた質点

壁 − バネ($k_1$) − 質点 − バネ($k_2$) − 壁。質点の平衡位置からの変位 $x$。

**T**: $\\frac{1}{2}m\\dot x^2$
**U**: $\\frac{1}{2}k_1 x^2 + \\frac{1}{2}k_2 x^2 = \\frac{1}{2}(k_1+k_2)x^2$
**L**: $\\frac{1}{2}m\\dot x^2 - \\frac{1}{2}(k_1+k_2)x^2$

計算：
- $\\partial L/\\partial \\dot x = m\\dot x$
- $d/dt$: $m\\ddot x$
- $\\partial L/\\partial x = -(k_1+k_2)x$

方程式：
$$m\\ddot x + (k_1+k_2)x = 0$$

これはバネ定数が和 $k_1+k_2$ の単振動、周期 $T = 2\\pi\\sqrt{m/(k_1+k_2)}$。

## よくある計算ミス

### ミス 1: $\\partial L/\\partial q$ の計算で $\\dot q$ も動いてしまう
**対策**: ラグランジアンでは $q$ と $\\dot q$ を**独立変数**として扱う。$q$ で偏微分するとき $\\dot q$ は定数。

### ミス 2: $d/dt$ を忘れる
**対策**: 3 つの演算の順序は「$\\dot q$ で偏微分 → $t$ で全微分 → $q$ で偏微分を引く」。

### ミス 3: 極座標での運動エネルギー
2次元で $T = \\frac{1}{2}m(\\dot x^2 + \\dot y^2)$ を極座標に変換すると：
$$T = \\frac{1}{2}m(\\dot r^2 + r^2\\dot\\theta^2)$$

$r^2\\dot\\theta^2$ の項を忘れがち。これがあるから遠心力が自動的に出てくる。

### ミス 4: 一般化運動量と力学的運動量の違い
例えば磁場中の荷電粒子では一般化運動量 $p = mv + qA$（$A$ はベクトルポテンシャル）、力学的運動量と異なる。`,
  },

  // ========== 電磁気 ==========
  {
    id: "gauss-law-uses",
    title: "ガウスの法則を使いこなす",
    field: "electromagnetism",
    category: "technique",
    summary:
      "どんなときにガウスの法則が使えるか、対称性の見抜き方、よくある例題パターン",
    readMinutes: 6,
    relatedProblems: ["todai-2025-phys-2", "ynu-2025-phys-2"],
    content: `## ガウスの法則とは

$$\\oint_S \\vec E\\cdot d\\vec A = \\frac{Q_{\\text{内}}}{\\varepsilon_0}$$

「閉曲面 $S$ を貫く電場のフラックス」=「内部の全電荷／$\\varepsilon_0$」。

マクスウェル方程式の 1 つで常に成立しますが、**使える状況は限られる**というのが実用上のポイント。

## 使える条件

$\\vec E$ の積分を計算するには、$S$ 上で $\\vec E\\cdot d\\vec A$ が**積分のいらない形**（一定値 × 面積）に書けないといけません。

| 対称性 | 使える面 | 例 |
|---|---|---|
| 球対称 | 同心球面 | 点電荷、帯電球 |
| 円筒対称 | 同軸円筒 | 無限直線電荷、無限帯電円筒 |
| 平面対称 | 平板（両側） | 無限帯電平面 |

**対称性がない場合**、ガウスの法則は正しいが計算には使えない（クーロンの法則の積分や Poisson 方程式に戻る）。

## 例題 1：点電荷

$Q$ の点電荷を中心に半径 $r$ の球面を取る。対称性から $\\vec E$ は動径方向、大きさは $r$ だけの関数。

$$E(r) \\cdot 4\\pi r^2 = \\frac{Q}{\\varepsilon_0} \\Rightarrow E = \\frac{Q}{4\\pi\\varepsilon_0 r^2}$$

## 例題 2：無限直線電荷

線電荷密度 $\\lambda$ の無限直線。軸から $r$ の円筒面（長さ $L$）を取る。

- 側面：$E(r) \\cdot 2\\pi r L$
- 上下面：$\\vec E \\perp d\\vec A$ でフラックス 0

$$E \\cdot 2\\pi r L = \\frac{\\lambda L}{\\varepsilon_0} \\Rightarrow E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$$

距離依存が $1/r$（点電荷の $1/r^2$ と違う）。

## 例題 3：無限帯電平面

面電荷密度 $\\sigma$。両側に出っ張るシリンダー（断面積 $A$）を取る。

$$2EA = \\frac{\\sigma A}{\\varepsilon_0} \\Rightarrow E = \\frac{\\sigma}{2\\varepsilon_0}$$

**距離に依存しない**（平面からどれだけ離れても同じ）。直観に反するがガウスの法則の帰結。

## 躓きやすい所

### 「内部の電荷」とは？
閉曲面で囲まれた領域内の電荷の**代数和**（符号込み）。一部だけ囲まれた連続電荷分布なら、その部分の電荷量。

### 対称性がちょっと崩れたら？
例えば「有限長の帯電棒」は端があるので完全な円筒対称でない → ガウスの法則では解けない。無限極限でのみ使える。

### 導体内部は常に $E=0$？
**静電平衡**では Yes。過渡状態（電荷が動いている）では No。ガウスの法則は静電平衡で適用しやすい。`,
  },
  {
    id: "maxwell-intuition",
    title: "マクスウェル方程式の直観的理解",
    field: "electromagnetism",
    category: "concept",
    summary: "4本の方程式それぞれが何を言っているのか、物理的意味を一つずつ",
    readMinutes: 7,
    relatedProblems: ["kyodai-2023-phys-1"],
    relatedTopics: ["gauss-law-uses"],
    content: `## 4本の方程式

真空中・SI単位系：

$$\\begin{aligned}
\\nabla\\cdot\\vec E &= \\rho/\\varepsilon_0 & &\\text{(1) Gauss (電)}\\\\
\\nabla\\cdot\\vec B &= 0 & &\\text{(2) Gauss (磁)}\\\\
\\nabla\\times\\vec E &= -\\partial\\vec B/\\partial t & &\\text{(3) Faraday}\\\\
\\nabla\\times\\vec B &= \\mu_0\\vec j + \\mu_0\\varepsilon_0\\,\\partial\\vec E/\\partial t & &\\text{(4) Ampere-Maxwell}
\\end{aligned}$$

暗記の前に、**それぞれが何を意味しているか**を押さえましょう。

## (1) 電場のガウスの法則：「電荷は電場の源」

電場は電荷から湧き出して電荷に吸い込まれる。発散（$\\nabla\\cdot$）が電荷密度に比例。

## (2) 磁場のガウスの法則：「磁気単極子は存在しない」

磁場には「湧き出し点」が存在しない。磁石は必ずNSペアで現れる（N極だけは切り出せない）。

歴史的に、もし磁気単極子が見つかれば電磁気学は大きく書き換わる。1931年Diracが存在可能性を理論的に示したが、実験的には未発見。

## (3) ファラデーの法則：「磁場の時間変化は電場を生む」

磁束が変化すると、それを"取り巻く"電場（起電力）が発生。レンツの法則はこれの定性的表現。

応用：発電機、変圧器、マイク、磁気ヘッド。

## (4) アンペール・マクスウェル法則：「電流 + 電場の時間変化 が磁場を生む」

- 第 1 項：電流が磁場を作る（Ampere 元来の法則）
- 第 2 項：**変位電流** = 電場の時間変化も磁場を作る（Maxwell の追加項）

第 2 項は電荷保存則との整合性を取るために Maxwell が付け加えました。これが**電磁波の存在**を予言する鍵となります。

## (3) + (4) で電磁波

真空中（$\\rho = 0, \\vec j = 0$）：
- (3): $\\nabla\\times\\vec E = -\\partial\\vec B/\\partial t$
- (4): $\\nabla\\times\\vec B = \\mu_0\\varepsilon_0\\,\\partial\\vec E/\\partial t$

**電場が変化 → 磁場が生じる → 磁場が変化 → 電場が生じる …**（相互生成）

数学的には波動方程式 $\\nabla^2\\vec E = (1/c^2)\\partial^2\\vec E/\\partial t^2$ が出て、伝播速度 $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ が**光速**と一致。光＝電磁波。

## 積分形への翻訳

微分形を積分形で書くと（ガウス・ストークスの定理経由）：

- (1) $\\oint\\vec E\\cdot d\\vec A = Q_{\\text{内}}/\\varepsilon_0$
- (2) $\\oint\\vec B\\cdot d\\vec A = 0$
- (3) $\\oint\\vec E\\cdot d\\vec\\ell = -d\\Phi_B/dt$
- (4) $\\oint\\vec B\\cdot d\\vec\\ell = \\mu_0 I + \\mu_0\\varepsilon_0\\,d\\Phi_E/dt$

どちらが便利かは問題次第。対称性が高い問題では積分形、一般には微分形。

## 躓きやすい所

**rot（回転）とは？**

$\\nabla\\times\\vec F$ は「その点でベクトル場がどれだけ渦を巻いているか」を表すベクトル。風向きが場所で変わる川の上にピンポン球を置くと、渦の強い所で回転し始める。その回転軸方向・大きさが rot。

**div（発散）とは？**

$\\nabla\\cdot\\vec F$ は「その点でベクトル場がどれだけ湧き出しているか」のスカラー。正なら源、負なら吸い込み。`,
  },

  // ========== 量子 ==========
  {
    id: "bra-ket-notation",
    title: "ブラ・ケット記法の読み方",
    field: "quantum",
    category: "math",
    summary:
      "$|\\psi\\rangle$ とか $\\langle\\phi|\\hat A|\\psi\\rangle$ とか、何を意味してるのか最初から解説",
    readMinutes: 6,
    relatedTopics: ["hilbert-space", "observables-operators"],
    content: `## なぜブラ・ケット記法を使うのか

量子力学の状態はベクトル（Hilbert空間の元）ですが、ベクトルを $\\vec v = (v_1, v_2, \\ldots)$ のように書くと基底に依存して煩雑。**基底に依らず、演算子との関係がきれいに書ける**のがブラ・ケット記法の利点です。

## 基本記法

| 記号 | 読み方 | 数学的対応 |
|---|---|---|
| $|\\psi\\rangle$ | **ケット** ($\\psi$) | ベクトル（列ベクトル） |
| $\\langle\\phi|$ | **ブラ** ($\\phi$) | 双対ベクトル（行ベクトル） |
| $\\langle\\phi|\\psi\\rangle$ | **内積** | スカラー（複素数） |
| $|\\psi\\rangle\\langle\\phi|$ | **外積** | 演算子（行列） |

「ブラ・ケット」=「〈 | 〉 = bracket」の言葉遊び（Dirac命名）。

## 基本規則

### 内積は複素数
$$\\langle\\phi|\\psi\\rangle = \\int \\phi^*(x)\\psi(x)\\,dx$$
波動関数を使って書き直すとこう。左側は複素共役をとる（だから $\\phi^*$）。

### 規格化
$$\\langle\\psi|\\psi\\rangle = 1$$
確率の総和が 1。

### 直交性
$$\\langle\\phi|\\psi\\rangle = 0 \\Leftrightarrow \\phi \\perp \\psi$$
異なる固有値に属する固有状態は直交。

### エルミート共役
$$(\\alpha|\\psi\\rangle)^\\dagger = \\alpha^*\\langle\\psi|$$
ケットのエルミート共役はブラ、係数は複素共役。

## 演算子の扱い

### 演算子はケットに作用
$$\\hat A|\\psi\\rangle = |\\hat A\\psi\\rangle$$

### 行列要素
$$\\langle\\phi|\\hat A|\\psi\\rangle$$
これが物理量 $A$ の「$\\phi$ 状態と $\\psi$ 状態の間の行列要素」。遷移確率などで頻出。

### エルミート演算子
$$\\hat A^\\dagger = \\hat A \\Leftrightarrow \\langle\\phi|\\hat A|\\psi\\rangle^* = \\langle\\psi|\\hat A|\\phi\\rangle$$

物理量（観測量）の演算子は常にエルミート。

## 基底表示

完全系 $\\{|n\\rangle\\}$（$\\sum_n|n\\rangle\\langle n| = \\hat 1$）を入れると：

$$|\\psi\\rangle = \\sum_n|n\\rangle\\langle n|\\psi\\rangle = \\sum_n c_n|n\\rangle, \\quad c_n = \\langle n|\\psi\\rangle$$

これは「$\\psi$ を基底 $|n\\rangle$ で展開」するということ。

## 躓きやすい所

### 「ブラ = ケットのエルミート共役」
ブラ $\\langle\\psi|$ はケット $|\\psi\\rangle$ の"転置共役"。別の実体ではなく、「双対な」オブジェクト。

### 「$\\langle\\phi|\\psi\\rangle$ と $\\langle\\psi|\\phi\\rangle$ は違うのか？」
複素共役の関係：
$$\\langle\\phi|\\psi\\rangle = \\langle\\psi|\\phi\\rangle^*$$
実数の場合は同じ、複素数では共役。

### 「$\\hat A|\\psi\\rangle$ は縦ベクトル × 行列？」
数学的には左から演算子が作用。行列表示では：
$$(\\hat A|\\psi\\rangle)_i = \\sum_j A_{ij}\\psi_j$$
と普通の行列 × ベクトル計算。

## 具体例：調和振動子

生成消滅演算子 $\\hat a, \\hat a^\\dagger$ と数状態 $|n\\rangle$：
$$\\hat a|n\\rangle = \\sqrt n|n-1\\rangle, \\quad \\hat a^\\dagger|n\\rangle = \\sqrt{n+1}|n+1\\rangle$$

行列要素：
$$\\langle m|\\hat a|n\\rangle = \\sqrt n\\,\\delta_{m, n-1}$$

これだけで波動関数の具体形なしに多くの計算ができます。

## 関連トピック
- [Hilbert 空間の基礎](/topics/hilbert-space)
- [観測量と演算子](/topics/observables-operators)`,
  },
  {
    id: "perturbation-theory",
    title: "摂動論：1次・2次の使い分け",
    field: "quantum",
    category: "technique",
    summary:
      "近似の基本。いつ 1 次で止めていいのか、2 次が必要な状況、縮退がある場合の扱いまで",
    readMinutes: 8,
    relatedProblems: ["kyodai-2024-phys-1"],
    content: `## 摂動論とは

厳密に解けるハミルトニアン $\\hat H_0$ に、小さな摂動 $\\hat H'$ を加えた系
$$\\hat H = \\hat H_0 + \\hat H'$$
を扱う近似法。$\\hat H'$ を小さなパラメータで展開して解く。

## 非縮退摂動論の公式

未摂動状態 $|n^{(0)}\\rangle$、エネルギー $E_n^{(0)}$ が縮退なしに既知とする。

**1 次のエネルギー補正**：
$$E_n^{(1)} = \\langle n^{(0)}|\\hat H'|n^{(0)}\\rangle$$

**2 次のエネルギー補正**：
$$E_n^{(2)} = \\sum_{m\\ne n}\\frac{|\\langle m^{(0)}|\\hat H'|n^{(0)}\\rangle|^2}{E_n^{(0)} - E_m^{(0)}}$$

**1 次の状態補正**：
$$|n^{(1)}\\rangle = \\sum_{m\\ne n}\\frac{\\langle m^{(0)}|\\hat H'|n^{(0)}\\rangle}{E_n^{(0)} - E_m^{(0)}}|m^{(0)}\\rangle$$

## 1 次で止めていい条件

$\\langle n|\\hat H'|n\\rangle \\ne 0$ なら 1 次で有限のエネルギーシフトが出て、多くの場合これで十分。

**1 次がゼロ（$\\langle n|\\hat H'|n\\rangle = 0$）の場合**は 2 次を計算する必要がある。これはパリティなどの対称性でよく起こる。

## 具体例：水素原子のシュタルク効果

電場 $\\vec E = E_0\\hat z$ の摂動 $\\hat H' = eE_0\\hat z$ を考える。

### 基底状態（非縮退）
$|100\\rangle$ に作用。$\\langle 100|\\hat z|100\\rangle = 0$（パリティから）→ 1 次はゼロ。
2 次補正は $-O(E_0^2)$ で有限。これが**2 次シュタルク効果**。

### $n=2$ 準位（縮退）
$|200\\rangle, |210\\rangle, |211\\rangle, |21{-1}\\rangle$ が縮退。**縮退摂動論が必要**。

## 縮退がある場合の注意

縮退している状態に単純に 2 次公式を使うと**分母ゼロ**で破綻する。代わりに：

1. 縮退部分空間内で $\\hat H'$ の行列要素を計算
2. その行列を**対角化**
3. 固有値が 1 次のエネルギー補正

水素原子 $n=2$ では $\\langle 200|\\hat z|210\\rangle = -3a_0$ が非零 → $\\pm 3eE_0a_0$ だけ分裂（1 次シュタルク効果）。

## どこまで展開するか

**目安**：
- $\\lambda \\equiv |\\hat H'|/\\Delta E < 0.1$ なら 1 次で十分（誤差 ~1%）
- $\\lambda \\sim 0.3$ で 2 次まで（10%精度）
- $\\lambda \\sim 1$ では摂動論自体が破綻、別の方法（変分法、数値対角化）

## 躓きやすい所

### 「$E^{(0)} - E_m^{(0)}$ の符号に注意」
$m$ が上か下かで分母の符号が変わり、補正の方向が逆になる。

### 「分子は絶対値の 2 乗」
$|\\langle\\cdots\\rangle|^2$ で実数かつ正。ただし**分母の符号**で全体の符号が決まる。

### 「基底状態のエネルギーは 2 次補正で常に下がる」
基底は常に $E_0^{(0)} < E_m^{(0)}$（他が上）だから分母が負 → $E_0^{(2)} < 0$。これは常に成立する重要な一般性質。

### 「縮退があるときに 2 次公式を無理に使う」
分母ゼロで爆発。必ず縮退摂動論に切り替える。`,
  },

  // ========== 統計 ==========
  {
    id: "canonical-ensemble",
    title: "正準集団の考え方",
    field: "statistical",
    category: "concept",
    summary:
      "なぜボルツマン因子 $e^{-\\beta E}$ が出てくるのか、微視状態と巨視状態、分配関数の意味",
    readMinutes: 7,
    relatedProblems: ["kyodai-2025-phys-1"],
    content: `## 設定：熱浴との接触

大きな熱浴（温度 $T$、エネルギーがほぼ無限）と、小さな系（エネルギーが変動しうる）を接触させる。熱のやり取りは可能、粒子数は固定。

この設定を**正準集団**（canonical ensemble）と呼ぶ。

## ボルツマン因子の導出

微視状態 $i$（エネルギー $E_i$）の出現確率を求めたい。

全系のエントロピー最大化、または直接微視状態を数える議論から：

$$P_i = \\frac{e^{-\\beta E_i}}{Z}, \\quad \\beta = \\frac{1}{k_BT}$$

ここで
$$Z = \\sum_i e^{-\\beta E_i}$$
は**分配関数**（partition function）。$P_i$ の総和を 1 にするための規格化定数。

**直観**：
- 低エネルギー状態ほど確率大（$e^{-\\beta E}$ が大きい）
- 温度高いほど高エネルギー状態も出現しやすい（$\\beta$ 小 → 指数減衰が緩やか）

## 分配関数は"魔法の鍵"

$Z$ が分かればすべての熱力学量が導ける：

| 物理量 | 公式 |
|---|---|
| 平均エネルギー | $\\langle E\\rangle = -\\partial\\ln Z/\\partial\\beta$ |
| 自由エネルギー | $F = -k_BT\\ln Z$ |
| エントロピー | $S = -\\partial F/\\partial T$ |
| 比熱 | $C_V = \\partial\\langle E\\rangle/\\partial T$ |
| エネルギー揺らぎ | $\\langle(\\Delta E)^2\\rangle = -\\partial\\langle E\\rangle/\\partial\\beta = k_BT^2 C_V$ |

この「分配関数一つから全部出る」構造が正準集団の威力。

## 具体例 1：2 準位系

エネルギー $0, \\epsilon$ の 2 状態。

$$Z = 1 + e^{-\\beta\\epsilon}$$
$$\\langle E\\rangle = \\frac{\\epsilon e^{-\\beta\\epsilon}}{1 + e^{-\\beta\\epsilon}} = \\frac{\\epsilon}{e^{\\beta\\epsilon} + 1}$$

- $T\\to 0$: $\\langle E\\rangle \\to 0$（基底状態占有）
- $T\\to\\infty$: $\\langle E\\rangle \\to \\epsilon/2$（両状態等占有）

## 具体例 2：調和振動子

エネルギー $E_n = \\hbar\\omega(n + 1/2)$、$n = 0, 1, 2, \\ldots$

$$Z = e^{-\\beta\\hbar\\omega/2}\\sum_{n=0}^\\infty e^{-\\beta\\hbar\\omega n} = \\frac{e^{-\\beta\\hbar\\omega/2}}{1 - e^{-\\beta\\hbar\\omega}}$$

$$\\langle E\\rangle = \\hbar\\omega\\left(\\frac{1}{2} + \\frac{1}{e^{\\beta\\hbar\\omega} - 1}\\right)$$

- 低温 $k_BT \\ll \\hbar\\omega$: $\\langle E\\rangle \\to \\hbar\\omega/2$（零点振動のみ）
- 高温 $k_BT \\gg \\hbar\\omega$: $\\langle E\\rangle \\to k_BT$（古典的等分配）

## 独立系の乗法性

2 つの独立な系の合成では $Z = Z_1 Z_2$、つまり $\\ln Z$ は加法的。これが「示量変数の分配関数は個々の和で書ける」直観の源。

$N$ 個の独立粒子系なら $Z_{\\text{total}} = Z_1^N$、ただし**同種粒子では $/N!$** が入る（ギブズのパラドックス解消）。

## 躓きやすい所

### 「確率の和が 1」
$\\sum_i P_i = 1$ は $Z$ の定義から自動的。分配関数 $Z$ はこの規格化役。

### 「マクロ状態とミクロ状態の混同」
$E_i$ はミクロ状態のエネルギー、$\\langle E\\rangle$ がマクロな（観測される）エネルギー。熱力学は主にマクロ量を扱うが、出発点はミクロ。

### 「等確率の原理との違い」
ミクロカノニカルでは等エネルギー殻で等確率、カノニカルではエネルギーごとに $e^{-\\beta E}$ で重みづけ。両者はマクロには等価（熱力学極限で）。

### 「$\\beta$ と $T$ のどちらで微分？」
計算上は $\\beta$ 微分が便利（指数関数の引数が $\\beta$ だから）。熱力学では $T$ 微分が物理的。変換：$\\partial/\\partial\\beta = -k_BT^2\\,\\partial/\\partial T$。`,
  },

  // ========== 数学的前提 ==========
  {
    id: "polar-coords-derivatives",
    title: "極座標の微分：よく間違える所",
    field: "math",
    category: "stumbling",
    summary:
      "$\\dot r, r\\dot\\theta$ は速度成分？加速度は？$r\\dot\\theta^2$ はどこから来る？完全解説",
    readMinutes: 5,
    content: `## 2 次元極座標の定義

$(x, y) = (r\\cos\\theta, r\\sin\\theta)$。基底ベクトル：
$$\\hat r = (\\cos\\theta, \\sin\\theta), \\quad \\hat\\theta = (-\\sin\\theta, \\cos\\theta)$$

ポイント：**基底ベクトル自体が位置で変わる**（直交座標との決定的違い）。

## 基底の時間微分

$\\hat r$ を時間微分：
$$\\frac{d\\hat r}{dt} = (-\\sin\\theta, \\cos\\theta)\\dot\\theta = \\dot\\theta\\,\\hat\\theta$$

同様に：
$$\\frac{d\\hat\\theta}{dt} = -\\dot\\theta\\,\\hat r$$

**これが全ての非自明性の源**。基底が回るので、「速度 = 位置の微分」に余分な項が入る。

## 速度

位置ベクトル $\\vec r = r\\hat r$：
$$\\vec v = \\frac{d}{dt}(r\\hat r) = \\dot r\\,\\hat r + r\\frac{d\\hat r}{dt} = \\dot r\\,\\hat r + r\\dot\\theta\\,\\hat\\theta$$

- 動径成分：$v_r = \\dot r$
- 接線成分：$v_\\theta = r\\dot\\theta$

## 加速度（ここが罠）

速度をもう一度微分。基底の時間微分を忘れずに：

$$\\vec a = \\ddot r\\,\\hat r + \\dot r\\,\\frac{d\\hat r}{dt} + \\dot r\\dot\\theta\\,\\hat\\theta + r\\ddot\\theta\\,\\hat\\theta + r\\dot\\theta\\,\\frac{d\\hat\\theta}{dt}$$

基底微分を代入して整理：

$$\\vec a = (\\ddot r - r\\dot\\theta^2)\\hat r + (r\\ddot\\theta + 2\\dot r\\dot\\theta)\\hat\\theta$$

- 動径成分：$a_r = \\ddot r - r\\dot\\theta^2$（**遠心加速度** $-r\\dot\\theta^2$）
- 接線成分：$a_\\theta = r\\ddot\\theta + 2\\dot r\\dot\\theta$（**コリオリ加速度** $2\\dot r\\dot\\theta$）

## よくある勘違い

### 勘違い 1: $a_r = \\ddot r$
**違う**。$-r\\dot\\theta^2$ があります。円運動（$\\dot r = 0$）では $a_r = -r\\dot\\theta^2$ そのもの = 向心加速度。

### 勘違い 2: 遠心力 = 力
遠心力 $mr\\dot\\theta^2$ は**慣性系では架空の力**。極座標で方程式を書くと"見かけの力"として現れる。

### 勘違い 3: 速度 $\\dot r$ だけで運動を記述
「粒子が一定の $r$ で回る」とき $\\dot r = 0$ だが動いている。速度には $r\\dot\\theta$ の成分もある。

## 円運動の場合

$r$ 一定なら $\\dot r = \\ddot r = 0$：
- $\\vec v = r\\dot\\theta\\,\\hat\\theta$
- $\\vec a = -r\\dot\\theta^2\\,\\hat r + r\\ddot\\theta\\,\\hat\\theta$

等速円運動なら $\\ddot\\theta = 0$、向心加速度 $r\\dot\\theta^2$ が中心向き。

## 直線運動の場合

$r$ が時間変化、$\\theta$ 一定（$\\dot\\theta = 0$）：
- $\\vec v = \\dot r\\,\\hat r$
- $\\vec a = \\ddot r\\,\\hat r$

直交座標と同じ。

## 3 次元（球座標）への拡張

より複雑になるが同じ原理。「基底の時間微分を忘れない」が鉄則。`,
  },
  {
    id: "complex-contour-integrals",
    title: "複素積分：どの経路を選ぶか",
    field: "math",
    category: "technique",
    summary:
      "$\\int_0^{2\\pi}$、$\\int_{-\\infty}^\\infty$、$e^{iax}$ 付き、それぞれのコツ",
    readMinutes: 6,
    relatedProblems: ["kyodai-2025-math-1"],
    content: `## 3 つの典型パターン

| 積分 | 経路 | キーアイデア |
|---|---|---|
| $\\int_0^{2\\pi} R(\\cos\\theta, \\sin\\theta)\\,d\\theta$ | 単位円 | $z = e^{i\\theta}$ で置換 |
| $\\int_{-\\infty}^\\infty R(x)\\,dx$ | 上半円 | 大円で消える条件確認 |
| $\\int_{-\\infty}^\\infty e^{iax}R(x)\\,dx$ | 上半円 + Jordan | $e^{iax}$ の減衰方向に閉じる |

## パターン 1：三角関数の周回積分

$\\int_0^{2\\pi}$ は「単位円を一周」なので、$z = e^{i\\theta}$ で複素変数にする。

変換：
$$\\cos\\theta = \\frac{z + z^{-1}}{2}, \\quad \\sin\\theta = \\frac{z - z^{-1}}{2i}, \\quad d\\theta = \\frac{dz}{iz}$$

被積分関数は $z$ の有理関数になり、単位円内部の極での留数和 × $2\\pi i$。

## パターン 2：実軸有理関数

$\\int_{-\\infty}^\\infty f(x)\\,dx$ を「実軸 + 上半円（または下半円）」の閉路に拡張。

**条件**：大円上で積分が $R\\to\\infty$ で消える必要あり。
- 有理関数 $P(x)/Q(x)$ なら $\\deg Q \\geq \\deg P + 2$ が必要
- より一般に $|f(z)| \\to 0$ 程度では足りず、$|zf(z)| \\to 0$ が必要

上半面なら上半円上の極の留数和、下半面なら下半円の留数和（符号逆）。

## パターン 3：フーリエ型（$e^{iax}$ 付き）

$e^{iaz} = e^{ia(x+iy)} = e^{iax}e^{-ay}$。
- $a > 0$: $y > 0$（上半面）で $e^{-ay}$ が減衰 → **上半円**に閉じる
- $a < 0$: $y < 0$（下半面）で減衰 → **下半円**に閉じる

**ジョルダンの補題**により、大円上の積分が $R\\to\\infty$ で 0 になる。被積分関数が有理関数×$e^{iaz}$ の形なら $1/z$ 程度の減衰でも OK（普通の半円では足りない状況を救う）。

## 具体例：$\\int_{-\\infty}^\\infty \\cos(x)/(x^2+1)dx$

**手法**：$\\cos x = \\text{Re}(e^{ix})$ として $\\int e^{ix}/(x^2+1)dx$ を計算し、実部を取る。

$f(z) = e^{iz}/(z^2+1)$ の上半面極は $z = i$。留数：
$$\\text{Res}_{z=i} = \\frac{e^{-1}}{2i}$$

留数定理：
$$\\int_{-\\infty}^\\infty\\frac{e^{ix}}{x^2+1}dx = 2\\pi i\\cdot\\frac{e^{-1}}{2i} = \\frac{\\pi}{e}$$

実数値 → 実部そのまま：
$$\\int_{-\\infty}^\\infty\\frac{\\cos x}{x^2+1}dx = \\frac{\\pi}{e}$$

## 躓きやすい所

### 経路の選び方
- 「$\\sin x$ か $\\cos x$ か」で上か下かが決まるわけではない。**$e^{iaz}$ の $a$ の符号**で決まる。

### 留数の計算ミス
単純極では
$$\\text{Res}_{z_0}f(z) = \\lim_{z\\to z_0}(z - z_0)f(z)$$
分母が $(z-z_0)(z-z_1)\\cdots$ と因数分解できれば代入で終わり。

### 「大円が本当に消えるか」
必ず確認。指数因子 $e^{iaz}$ があれば Jordan が効く。なければ $|zf(z)|\\to 0$ を示す。

### 実軸上に極がある場合
主値積分 + 主値の半周回路。より技巧的。例：$\\int\\sin x/x\\,dx = \\pi$。`,
  },
  {
    id: "pde-separation",
    title: "偏微分方程式の変数分離法",
    field: "math",
    category: "technique",
    summary: "熱伝導、波動、Schrödinger方程式を解く基本テクニック",
    readMinutes: 5,
    relatedProblems: ["nagoya-2024-phys-2", "kyushu-2022-phys-1"],
    content: `## 基本アイデア

PDE の解を $u(x, t) = X(x)T(t)$ と**仮定**し、空間と時間の変数を分離する。

この仮定は厳密には一般解ではないが、**境界条件から決まる基本解**の集合になっている。線形PDEでは基本解の重ね合わせで一般解が作れる。

## 例 1：熱伝導方程式

$$\\frac{\\partial u}{\\partial t} = \\kappa\\frac{\\partial^2 u}{\\partial x^2}$$

$u = X(x)T(t)$ を代入：
$$XT' = \\kappa X''T \\Rightarrow \\frac{T'}{\\kappa T} = \\frac{X''}{X}$$

左辺は $t$ のみ、右辺は $x$ のみ → **両辺が定数**（定数分離）。

$$\\frac{X''}{X} = -\\lambda, \\quad \\frac{T'}{\\kappa T} = -\\lambda$$

空間：$X'' + \\lambda X = 0$
時間：$T = Ae^{-\\kappa\\lambda t}$

境界条件 $X(0) = X(L) = 0$ から $X_n = \\sin(n\\pi x/L)$、$\\lambda_n = (n\\pi/L)^2$。

一般解：
$$u(x, t) = \\sum_n b_n\\sin\\frac{n\\pi x}{L}e^{-\\kappa(n\\pi/L)^2 t}$$

## 例 2：波動方程式

$$\\frac{\\partial^2 u}{\\partial t^2} = v^2\\frac{\\partial^2 u}{\\partial x^2}$$

分離して：
$T'' + \\omega^2 T = 0 \\Rightarrow T = \\cos(\\omega t + \\phi)$
$X'' + (\\omega/v)^2 X = 0 \\Rightarrow X = \\sin(kx)$

$\\omega = vk$。典型的な波の形。

## 例 3：時間を含まない Schrödinger 方程式

$$i\\hbar\\frac{\\partial\\psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2\\psi}{\\partial x^2} + V(x)\\psi$$

$\\psi = X(x)T(t)$：
$$i\\hbar\\frac{T'}{T} = -\\frac{\\hbar^2}{2m}\\frac{X''}{X} + V(x) = E$$

時間部分：$T = e^{-iEt/\\hbar}$
空間部分：$-\\frac{\\hbar^2}{2m}X'' + V(x)X = EX$（時間を含まない Schrödinger 方程式）

## 躓きやすい所

### 「両辺が $\\lambda$ で等しいのはなぜか？」
左辺は $t$ だけの関数、右辺は $x$ だけの関数。両方独立変数なのに常に等しい → **定数**でしかありえない。

### 「$\\lambda$ の符号」
物理的な境界条件（両端ゼロ、無限遠で減衰等）で決まる。熱伝導では $\\lambda > 0$（減衰）、波動では $\\lambda > 0$（振動）、量子トンネルでは $\\lambda < 0$（指数成長）も有効。

### 「非線形だと使えない」
変数分離は線形PDEの専用技法。非線形（Navier-Stokes 等）では使えない。`,
  },

  // ========== 躓きポイント ==========
  {
    id: "sign-conventions",
    title: "符号規約の違いで混乱しないために",
    field: "general",
    category: "stumbling",
    summary: "教科書で違う符号、計量 $(+,-,-,-)$ vs $(-,+,+,+)$、ポテンシャル $V$ vs $-V$ など",
    readMinutes: 4,
    content: `## 物理学で混乱を招く符号

### 1. 電場とポテンシャル
**日本の教科書**: $\\vec E = -\\nabla V$
**定義**: ポテンシャル $V$ は「単位電荷のポテンシャルエネルギー」。電場はその勾配×$-1$。

**引っかかり**: $V$ と $U = qV$（位置エネルギー）の混同。後者でエネルギー保存を書く。

### 2. ラグランジアンとハミルトニアン
- ラグランジアン: $L = T - U$
- ハミルトニアン: $H = T + U$

**間違えるな**: 符号が違う。Legendre 変換で出てくる。

### 3. フーリエ変換の符号
**物理での規約**（時間領域→振動数領域）:
$$\\tilde f(\\omega) = \\int f(t)\\,e^{-i\\omega t}\\,dt$$
平面波 $e^{i(kx - \\omega t)}$ と整合。

**数学・EE での規約**: $e^{+i\\omega t}$ 使うことも。テキスト冒頭で確認必須。

### 4. 計量テンソル（相対論）
- **（+,-,-,-）規約**: Minkowski $ds^2 = dt^2 - dx^2 - dy^2 - dz^2$（素粒子物理で主流）
- **（-,+,+,+）規約**: $ds^2 = -dt^2 + dx^2 + dy^2 + dz^2$（一般相対論で主流）

教科書ごとに違う。**章頭で規約を確認する習慣を**。

### 5. フェルミ/ボーズ分布
$$f(\\epsilon) = \\frac{1}{e^{(\\epsilon-\\mu)/k_BT} \\pm 1}$$
- $+$: フェルミ
- $-$: ボーズ

覚え方：**フェルミは排他（$+$は分母を大きくして確率を下げる）**、**ボーズは集合（$-$ は小さくして発散させうる）**。

### 6. ポインティングベクトル
SI: $\\vec S = (1/\\mu_0)\\vec E\\times\\vec B$
CGS: $\\vec S = (c/4\\pi)\\vec E\\times\\vec B$

単位系によって係数が違う。SI が現代の標準。

## 対処法

1. **自分で導出する**：符号は定義から導出できる。暗記より理解。
2. **定義を確認する**：新しい教科書を開いたら冒頭の記号規約を読む。
3. **物理的意味で検算**：結果の符号が物理に合うか（引力 vs 斥力、安定 vs 不安定）。

## 計算してみる

例：電場による仕事
$$W = \\int \\vec F\\cdot d\\vec r = q\\int\\vec E\\cdot d\\vec r = -q\\int\\nabla V\\cdot d\\vec r = -q(V_b - V_a) = q(V_a - V_b)$$

電荷が高電位から低電位に移ると仕事が正（自然な流れ）。`,
  },
  {
    id: "units-and-dimensions",
    title: "単位と次元解析：計算ミスを防ぐ最強のチェック",
    field: "general",
    category: "technique",
    summary: "次元が合ってるか確認するだけで 80% のミスが防げる",
    readMinutes: 4,
    content: `## 次元解析とは

物理量の「質量」「長さ」「時間」などの**基本次元**に着目して、式の正しさを確認する手法。

基本次元（SI系）：
| 次元 | 記号 | 単位 |
|---|---|---|
| 長さ | $L$ | m |
| 質量 | $M$ | kg |
| 時間 | $T$ | s |
| 電流 | $I$ | A |
| 温度 | $\\Theta$ | K |

## 使い方 1: 式の検算

両辺の次元が一致しない式は**必ず間違い**。

### 例：運動方程式 $F = ma$
- $[F] = MLT^{-2}$（力）
- $[ma] = M \\cdot LT^{-2}$
両辺一致 ✓

### 例：振り子の周期 $T = 2\\pi\\sqrt{\\ell/g}$
- $[\\sqrt{\\ell/g}] = \\sqrt{L/(LT^{-2})} = \\sqrt{T^2} = T$
一致 ✓。$2\\pi$ や数係数は次元解析では出ない（無次元）。

### 例：誤答の発見 "$T = 2\\pi\\sqrt{g/\\ell}$"
- $[\\sqrt{g/\\ell}] = \\sqrt{T^{-2}} = T^{-1}$
**時間の逆数！明らかに間違い**。次元解析で即座に検出できる。

## 使い方 2: 公式の導出

「ある物理量が何に依存するか」から次元合わせで公式を予想。

### 例：弦の固有振動数
材料の線密度 $\\mu$ [$ML^{-1}$]、張力 $T$ [$MLT^{-2}$]、長さ $L$ [$L$] に依存すると仮定：
$$f = C \\cdot \\mu^a T^b L^c$$
次元合わせ：$[f] = T^{-1}$
$M^{a+b}L^{-a+b+c}T^{-2b} = T^{-1}$

$a+b=0, -a+b+c=0, -2b=-1$ → $b = 1/2, a = -1/2, c = -1$：
$$f = C\\sqrt{\\frac{T}{\\mu L^2}} = \\frac{C}{L}\\sqrt{\\frac{T}{\\mu}}$$

厳密解（$n=1$）では $C = 1/2$。**定数まで分からないが構造は予想できる**。

## 使い方 3: オーダー見積もり

- 電子のコンプトン波長 $\\lambda_C = h/(mc) \\sim 2.4 \\times 10^{-12}$ m
- 水素原子のボーア半径 $a_0 \\sim 5.3 \\times 10^{-11}$ m
- 原子核半径 $\\sim 10^{-15}$ m

次元から**自然な長さスケール**が見え、現象の典型サイズが分かる。

## 躓きやすい所

### 「無次元量は省略しがち」
$2\\pi, 4\\pi, \\hbar$ などの係数は次元解析では出ない。正確な係数は厳密な導出が必要。

### 「対数・三角関数の引数は無次元」
$\\sin(kx)$ なら $kx$ が無次元、$\\ln(r/r_0)$ なら $r/r_0$ が無次元。引数が有次元だと式がおかしい。

### 「単位系の選択で係数が変わる」
SI と Gaussian では係数が違うが、**次元は変わらない**。次元解析は単位系に依存しない。

## 実用アドバイス

**試験で計算したら必ず**：
1. 答えの次元を確認
2. 極限（$R\\to 0$, $T\\to\\infty$ 等）で物理的に妥当か
3. 数値のオーダーが常識的か

これだけでケアレスミスが激減します。`,
  },

  // ========== 最頻出5概念（問題解説ベース） ==========
  {
    id: "energy-conservation",
    title: "エネルギー保存則の使い方",
    field: "mechanics",
    category: "theorem",
    summary:
      "最も頻出の保存則。いつ成立するか、運動エネルギー・位置エネルギー・内部エネルギーの使い分け、落とし穴まで",
    readMinutes: 6,
    relatedProblems: [
      "todai-2025-phys-1",
      "todai-2024-phys-1",
      "tohoku-2025-phys-1",
      "tohoku-2025-phys-2",
      "tohoku-2025-phys-3",
      "nagoya-2025-phys-1",
      "kyushu-2021-phys-1",
      "hokkaido-2023-phys-2",
      "ynu-2023-phys-1",
    ],
    relatedTopics: ["equation-of-motion", "angular-momentum-conservation"],
    content: `## 保存則の意味

「**エネルギーは形を変えるだけで増減しない**」という宇宙の基本法則。力学的に書けば：

$$E_{\\text{総}} = T + U = \\text{一定}$$

- $T$：運動エネルギー $= \\frac{1}{2}mv^2$
- $U$：位置エネルギー（重力・弾性・電気…）

**なぜ使う？**：運動方程式を積分する代わりに、始状態と終状態のエネルギーを比較するだけで速度や位置が分かる。計算が劇的に楽になる。

## いつ成立するか（必須条件）

エネルギー保存が成立するのは、系に働く**全ての力が保存力**（ポテンシャルから導ける力）の場合のみ。

| 保存力（$U$ が書ける） | 非保存力（$U$ なし） |
|---|---|
| 重力、弾性力、クーロン力 | 摩擦力、空気抵抗、拘束力の一部 |

**非保存力があると熱が発生**し、力学的エネルギーは減る（→ 熱エネルギーとして系外に流出）。

## 使い方の3ステップ

### ステップ1：始状態と終状態を定義
問題文から「いつ」と「いつ」を比較するのかを明確に。

### ステップ2：基準点を選ぶ
位置エネルギー $U$ の基準（$U=0$ となる点）を都合よく選ぶ。

### ステップ3：$T+U$ を書いて等号で結ぶ
$$T_1 + U_1 = T_2 + U_2$$

## 具体例1：振り子

長さ $\\ell$ の糸に質量 $m$ の物体、角度 $\\theta_0$ から静かにはなす → 最下点での速さは？

- 始：$T_1 = 0$, $U_1 = mg\\ell(1-\\cos\\theta_0)$
- 終：$T_2 = \\frac{1}{2}mv^2$, $U_2 = 0$

$$mg\\ell(1-\\cos\\theta_0) = \\frac{1}{2}mv^2$$
$$\\boxed{v = \\sqrt{2g\\ell(1-\\cos\\theta_0)}}$$

## 具体例2：斜面＋摩擦

エネルギー保存が使えない！ 代わりに**仕事エネルギー定理**：

$$\\Delta(T + U) = W_{\\text{非保存}} = -\\mu m g L$$

摩擦で失われた分だけエネルギーが減る。ただし熱まで含めると**「全エネルギー」は保存している**。

## 具体例3：弾性衝突

2体の弾性衝突では、運動量保存 + エネルギー保存の**連立**で衝突後の速度が決まる：
$$m_1 v_1 = m_1 v_1' + m_2 v_2'$$
$$\\frac{1}{2}m_1 v_1^2 = \\frac{1}{2}m_1 v_1'^2 + \\frac{1}{2}m_2 v_2'^2$$

エネルギー保存は2次式を与えるので、解が2つ出て物理的に正しい方を選ぶ。

## よく間違えるポイント

### 「保存力」の見落とし
摩擦がある → 力学的エネルギーは保存しない。「保存する」と書いてしまうミスが多い。

### 基準点を途中で変える
計算中に $U=0$ の位置をずらしてはいけない。最初に決めたら最後まで同じ。

### 内部エネルギーの扱い
熱力学の問題では $T+U$ だけでなく内部エネルギー $U_{\\text{int}}$ も含める。力学的エネルギーと区別するため記号に注意。

### 回転運動のエネルギー
剛体が回転する場合 $T = \\frac{1}{2}I\\omega^2$ も加える。並進と回転の両方を忘れない。

## 保存力の判定法

$\\vec F$ が保存力 ⇔ $\\nabla\\times\\vec F = 0$（渦なし）⇔ ポテンシャル $U$ が存在

中心力 $\\vec F = f(r)\\hat r$ は常に保存力（→ $U(r) = -\\int f(r)dr$）。`,
  },
  {
    id: "equation-of-motion",
    title: "運動方程式の立て方",
    field: "mechanics",
    category: "technique",
    summary:
      "力の洗い出し→座標選び→ベクトル分解→$F=ma$ への代入。よくある落とし穴と座標系の選び方",
    readMinutes: 7,
    relatedProblems: [
      "todai-2025-phys-1",
      "todai-2024-phys-1",
      "titech-2025-phys-1",
      "tohoku-2024-phys-1",
      "nagoya-2023-phys-1",
      "nagoya-2022-phys-1",
      "ynu-2024-phys-1",
      "hokkaido-2023-phys-2",
    ],
    relatedTopics: ["energy-conservation", "lagrangian-basics", "polar-coords-derivatives"],
    content: `## 基本：$\\vec F = m\\vec a$ を正しく書く

ニュートンの第2法則を使いこなすには以下の4ステップ：

### ステップ1：系を切り出す
「何に対する運動方程式を立てるか」を決める。質点・剛体・電荷、など対象を明確に。

### ステップ2：働く力を全て洗い出す
**自由物体図**（free body diagram）を描く：
- 重力
- 接触力（垂直抗力、摩擦）
- 張力、バネの力
- 電磁力（電場、磁場、ローレンツ力）
- 拘束力

漏れを防ぐコツ：「外界から、対象に何かしら力が作用しているか」を各方向で確認。

### ステップ3：座標系を選ぶ
問題の対称性に合わせて：

| 対称性 | 推奨座標 |
|---|---|
| 直進的な運動 | 直交座標 $(x, y)$ |
| 円運動・中心力 | 極座標 $(r, \\theta)$ |
| 斜面 | 斜面に沿う方向 / 垂直方向 |
| 球対称・回転 | 球座標・球面対称 |
| 連成・振動 | 基準モード座標 |

選び方が悪いと見かけ上の加速度項（遠心項・コリオリ項）が出てきて計算量爆発。

### ステップ4：成分ごとに $F = ma$
各方向成分を書き下し、運動方程式の**連立方程式**として解く。

## 具体例1：斜面の物体

傾斜角 $\\theta$ の斜面、物体の質量 $m$、動摩擦係数 $\\mu$。

**斜面に沿う方向**（下向きを正）：
$$m\\ddot x = mg\\sin\\theta - \\mu N$$

**斜面に垂直方向**：
$$N - mg\\cos\\theta = 0 \\Rightarrow N = mg\\cos\\theta$$

代入：
$$\\ddot x = g(\\sin\\theta - \\mu\\cos\\theta)$$

**コツ**：座標を斜面に沿わせることで、垂直抗力 $N$ の処理が簡単になる。

## 具体例2：極座標での中心力

中心力場 $F(r)\\hat r$ で動く質点。極座標の加速度：
- 動径成分：$a_r = \\ddot r - r\\dot\\theta^2$
- 接線成分：$a_\\theta = r\\ddot\\theta + 2\\dot r\\dot\\theta$

運動方程式：
$$m(\\ddot r - r\\dot\\theta^2) = F(r)$$
$$m(r\\ddot\\theta + 2\\dot r\\dot\\theta) = 0$$

第2式から角運動量保存 $mr^2\\dot\\theta = \\text{一定}$ が直ちに出る。

## 具体例3：連成振動

質点1、2が繋がった系。各質点について個別に運動方程式を書く：
$$m\\ddot x_1 = -kx_1 - k'(x_1 - x_2)$$
$$m\\ddot x_2 = -kx_2 - k'(x_2 - x_1)$$

行列形式にして固有値問題へ → 基準モード。

## よくある落とし穴

### 1. 力を見落とす
張力、抗力、浮力、慣性力（回転系）…。特に**拘束力**（糸の張力など）は忘れがち。

### 2. 符号ミス
ベクトル量の向きを軸の向きと合わせる。「下向きを正」と決めたら一貫して。

### 3. 極座標の加速度
$a_r = \\ddot r$ ではなく $a_r = \\ddot r - r\\dot\\theta^2$。遠心加速度項を忘れない。

### 4. 非慣性系
回転座標系や加速する座標系では**慣性力**（見かけの力）を加える：
- 並進加速系：$-m\\vec A$
- 回転系：遠心力 $-m\\vec\\omega\\times(\\vec\\omega\\times\\vec r)$、コリオリ力 $-2m\\vec\\omega\\times\\vec v$

### 5. 拘束条件
糸・斜面などの幾何的拘束を運動方程式と一緒に使う。例：「糸の長さ一定」「斜面上にある」。

## ラグランジアン形式への橋渡し

多粒子系・拘束条件ありの問題では、ニュートン形式より**ラグランジアン形式**のほうが楽。$L = T - U$ を書いて、オイラー・ラグランジュ方程式に代入すれば拘束力を気にせず方程式が出る。`,
  },
  {
    id: "angular-momentum-conservation",
    title: "角運動量保存則",
    field: "mechanics",
    category: "theorem",
    summary:
      "いつ成立するか（中心力の特徴）、使うとどんな問題が解けるか、スケーター・惑星運動・コマまで",
    readMinutes: 5,
    relatedProblems: [
      "todai-2024-phys-1",
      "tohoku-2024-phys-1",
      "kyushu-2025-phys-1",
      "kyushu-2021-phys-1",
    ],
    relatedTopics: ["energy-conservation", "equation-of-motion", "noether-theorem"],
    content: `## 角運動量とは

$$\\vec L = \\vec r \\times \\vec p = \\vec r \\times m\\vec v$$

「回転の勢い」を表すベクトル量。大きさは $L = mvr\\sin\\phi$（$\\phi$ は $\\vec r$ と $\\vec v$ のなす角）。

## 保存則：$\\vec \\tau = 0 \\Rightarrow \\vec L = $ 一定

角運動量の時間変化はトルク（力のモーメント）に等しい：

$$\\frac{d\\vec L}{dt} = \\vec \\tau = \\vec r \\times \\vec F$$

したがって**外部トルクがなければ角運動量が保存**する。

## いつ成立するか

### ケース1：中心力場
$\\vec F \\parallel \\vec r$ のとき $\\vec r\\times\\vec F = 0$ → トルクゼロ → 角運動量保存。
- 重力（太陽と惑星）
- クーロン力（陽子と電子）
- 万有引力（二体問題）

### ケース2：孤立系（外力なし）
系全体の角運動量は、内力のペアが作用反作用で相殺するため保存する。

### ケース3：対称軸まわり
系に回転対称性があると、その軸成分の角運動量は保存する（ネーターの定理）。

## 使い方：極座標の $L$

中心力問題でよく使う形：
$$L = mr^2\\dot\\theta$$

この $L$ が一定値であることから、$\\dot\\theta = L/(mr^2)$ が出て、運動方程式を **$r$ だけの1次元問題**に帰着できる：
$$m\\ddot r = -\\frac{dU}{dr} + \\frac{L^2}{mr^3}$$

第2項が**遠心ポテンシャル**に化ける。

## 具体例1：ケプラーの第二法則（面積速度一定）

面積速度 $dA/dt = r^2\\dot\\theta/2 = L/(2m)$。
$L$ が保存 → **単位時間に掃く面積が一定**。これがケプラーの第二法則の本質。

## 具体例2：フィギュアスケーターの腕

回転中のスケーターが腕を縮める：
- 慣性モーメント $I$ が減少（質量が中心に寄る）
- 角運動量 $L = I\\omega$ は保存（床との摩擦は対称軸まわりなので $\\tau = 0$）
- よって $\\omega$ が増加 → 高速回転

## 具体例3：コマの歳差運動

回転するコマに重力トルクが作用すると、コマは**倒れずに歳差運動**する。角運動量ベクトルがトルク方向へ徐々に向きを変えていく。

## 具体例4：二体問題

2粒子系（太陽−惑星、陽子−電子）で内力が中心力なら、全角運動量は保存。重心系で考えると**1粒子の中心力問題**に還元される。

## 問題を解く上でのコツ

### 始状態と終状態だけを比較
エネルギー保存と同じく、**途中経過を追う必要がない**。「始の $L$」=「終の $L$」で1行の方程式。

### 保存軸を正しく選ぶ
全角運動量が保存しなくても、特定の軸まわりの成分だけは保存することがある。問題の対称性を見抜く。

### ベクトル性を忘れない
角運動量はベクトル量。向きも含めて保存することに注意（歳差運動などでは向きが変わりながら大きさ保存）。

## ネーターの定理との関係

「**回転対称性 ⇔ 角運動量保存**」はネーターの定理の具体例。ラグランジアンが $\\theta$ を陽に含まなければ $p_\\theta = \\partial L/\\partial\\dot\\theta = mr^2\\dot\\theta$ が保存。`,
  },
  {
    id: "moment-of-inertia",
    title: "慣性モーメントの計算",
    field: "mechanics",
    category: "technique",
    summary:
      "定義から積分する方法、標準形状（球・円盤・棒）の結果、平行軸・垂直軸定理、実例",
    readMinutes: 6,
    relatedProblems: [
      "todai-2025-phys-1",
      "tohoku-2025-phys-1",
      "kyushu-2025-phys-1",
      "tsukuba-2024-phys-1",
    ],
    relatedTopics: ["angular-momentum-conservation", "equation-of-motion"],
    content: `## 慣性モーメントとは

回転運動における「回しにくさ」を表す量。質量が回転の加速度にどれだけ抵抗するかを表す。

$$I = \\int r^2\\,dm$$

$r$ は**軸からの距離**、$dm$ は質量要素。同じ質量でも、軸から離れて分布しているほど $I$ が大きい。

## なぜ重要か

- 回転運動方程式：$\\tau = I\\alpha$（並進の $F=ma$ に対応）
- 回転エネルギー：$T_{\\text{回}} = \\frac{1}{2}I\\omega^2$
- 角運動量：$L = I\\omega$

つまり並進で $m$ が果たす役割を、回転では $I$ が果たす。

## 標準形状の結果（暗記推奨）

質量 $M$、半径 $R$、長さ $L$ として、**重心を通る軸**まわりの $I$：

| 形状 | 軸 | $I$ |
|---|---|---|
| 細い棒 | 中心を通る直角軸 | $\\frac{1}{12}ML^2$ |
| 細い棒 | 端を通る直角軸 | $\\frac{1}{3}ML^2$ |
| 円輪（リング） | 中心軸（面に垂直） | $MR^2$ |
| 一様円盤 | 中心軸（面に垂直） | $\\frac{1}{2}MR^2$ |
| 一様円盤 | 直径軸 | $\\frac{1}{4}MR^2$ |
| 中実球 | 中心を通る軸 | $\\frac{2}{5}MR^2$ |
| 球殻（薄い殻） | 中心を通る軸 | $\\frac{2}{3}MR^2$ |
| 円柱 | 対称軸 | $\\frac{1}{2}MR^2$ |
| 円柱 | 重心通る直角軸 | $\\frac{1}{12}M(3R^2 + L^2)$ |

## 計算の仕方（例：一様円盤）

面密度 $\\sigma = M/(\\pi R^2)$。半径 $r$〜$r+dr$ の環を考えると：
- 面積：$dA = 2\\pi r\\,dr$
- 質量：$dm = \\sigma\\,dA = 2\\pi\\sigma r\\,dr$
- 軸から距離：$r$

$$I = \\int_0^R r^2\\cdot 2\\pi\\sigma r\\,dr = 2\\pi\\sigma\\cdot\\frac{R^4}{4} = \\frac{1}{2}MR^2$$

## 2つの便利な定理

### 平行軸定理（Steiner の定理）
重心軸まわりの $I_G$ から、**平行な軸まわり**の $I_A$ を求める：
$$I_A = I_G + Md^2$$
$d$ は軸間距離。

**例**：長さ $L$ の棒、端まわりの $I$
$$I = \\frac{1}{12}ML^2 + M(L/2)^2 = \\frac{1}{3}ML^2\\ \\checkmark$$

### 垂直軸定理（平面体のみ）
**平面的な物体**（厚さ無視）について、面内の直交2軸まわりの $I_x, I_y$ と、面に垂直な軸まわりの $I_z$ の関係：
$$I_z = I_x + I_y$$

**例**：円盤で $I_z = \\frac{1}{2}MR^2$。対称性から $I_x = I_y$ なので $I_x = \\frac{1}{4}MR^2$。

## 剛体振り子への応用

長さ $L$、質量 $M$ の棒を端で支持した剛体振り子の微小振動：
- $I = \\frac{1}{3}ML^2$（平行軸定理）
- 周期 $T = 2\\pi\\sqrt{I/(Mgd)} = 2\\pi\\sqrt{2L/(3g)}$（$d = L/2$）

単振り子（糸に質点）の $T = 2\\pi\\sqrt{L/g}$ と比較：**剛体振り子は糸より短い等価長を持つ**。

## よくある間違い

### 軸の選び方
「重心を通る」かつ「形状と整合した」軸でないと、公式が使えない。平行軸定理で補正。

### 空洞の扱い
空洞がある場合は「元の形状の $I$ − 空洞部分の $I$」で計算。質量の符号に注意。

### 合成体
複数の部品がくっついたら、それぞれの $I$ を**加法**。平行軸定理で共通軸に揃えてから足す。`,
  },
  {
    id: "eigenvalues-eigenvectors",
    title: "固有値・固有ベクトルの意味と使い方",
    field: "math",
    category: "math",
    summary:
      "定義・計算法・物理での使い道（基準モード、量子状態、対角化、行列指数関数）",
    readMinutes: 7,
    relatedProblems: [
      "todai-2025-math-1",
      "titech-2025-phys-1",
      "osaka-2025-phys-1",
      "tsukuba-2022-phys-2",
    ],
    relatedTopics: ["bra-ket-notation", "perturbation-theory", "pde-separation"],
    content: `## 定義

正方行列 $A$（または線形演算子）について、
$$A\\vec v = \\lambda\\vec v, \\quad \\vec v \\ne \\vec 0$$
を満たすとき、$\\lambda$ を**固有値**、$\\vec v$ を**固有ベクトル**という。

**直感的意味**：固有ベクトルは「行列の作用で向きが変わらない特別な方向」。$\\lambda$ 倍だけされる。

## 計算手順

### ステップ1：特性方程式を解く
$$\\det(A - \\lambda I) = 0$$
$n\\times n$ 行列なら $\\lambda$ の $n$ 次方程式。解くと $n$ 個の固有値が出る（重複可）。

### ステップ2：各 $\\lambda$ について固有ベクトルを求める
$$(A - \\lambda I)\\vec v = \\vec 0$$
の非自明解を求める。これは連立方程式の**零空間**を求めることと同じ。

### ステップ3：規格化（必要に応じて）
$\\|\\vec v\\| = 1$ となるようにスカラー倍。

## 具体例：$2\\times 2$ 行列

$$A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$$

**特性方程式**：$(2-\\lambda)(3-\\lambda) = 0 \\Rightarrow \\lambda_1 = 2, \\lambda_2 = 3$

**固有ベクトル**：
- $\\lambda_1 = 2$：$(A - 2I)\\vec v = \\binom{0\\ 1}{0\\ 1}\\vec v = 0 \\Rightarrow \\vec v_1 = \\binom{1}{0}$
- $\\lambda_2 = 3$：$\\vec v_2 = \\binom{1}{1}$

## 対角化

$n$ 個の独立な固有ベクトルがあれば、それらを列に並べた行列 $P$ で対角化できる：
$$P^{-1}AP = D = \\text{diag}(\\lambda_1, \\lambda_2, \\ldots)$$

**使い道**：対角行列は扱いが圧倒的に楽。ベキ乗・指数関数・逆行列が各固有値に対する計算で済む。

## 行列指数関数

連立1階ODE $\\dot{\\vec x} = A\\vec x$ の解は $\\vec x(t) = e^{At}\\vec x(0)$。$e^{At}$ は：
$$e^{At} = Pe^{Dt}P^{-1}, \\quad e^{Dt} = \\text{diag}(e^{\\lambda_1 t}, e^{\\lambda_2 t}, \\ldots)$$

## 物理での使いどころ

### 1. 連成振動・基準モード
連成振動系の運動方程式は $\\ddot{\\vec x} = -M\\vec x$ の形。$M$ の固有値が $\\omega_i^2$（固有振動数の2乗）、固有ベクトルが**各モードの振動パターン**。

### 2. 量子力学の観測量
演算子 $\\hat A$ の固有値が「測定で得られる値」、固有状態が「その値が確定している状態」。エルミート演算子の固有値は実数、異なる固有値の固有ベクトルは直交。

**例**：$\\hat H|n\\rangle = E_n|n\\rangle$ のエネルギー固有値 $E_n$ と固有状態 $|n\\rangle$。

### 3. 主軸変換
慣性テンソル $I_{ij}$ の固有値が**主慣性モーメント**、固有ベクトルが**主軸方向**。任意の剛体の回転を対称軸まわりの単純な回転に分解できる。

### 4. 相似系の解析
線形微分方程式系、マルコフ連鎖、PageRank アルゴリズムなど、**安定性や漸近挙動は固有値で決まる**。

## エルミート行列の特別な性質

量子力学で頻出する**エルミート行列** $A^\\dagger = A$ には：
1. 固有値が全て**実数**
2. 異なる固有値の固有ベクトルは**直交**
3. 常に**正規直交基底**で対角化可能（**ユニタリ対角化**）

これが「物理量は実数値で観測される」「異なる固有値の状態は直交する」といった量子力学の基本性質の数学的根拠。

## パウリ行列の例

$\\hat\\sigma_x = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ の固有値は $\\pm 1$、固有ベクトルは $|x,\\pm\\rangle = \\frac{1}{\\sqrt 2}(|z,+\\rangle \\pm |z,-\\rangle)$。これはスピンの測定軸を変える基底変換に対応。

## よくある躓き

### 「重複固有値で固有ベクトルが足りない」
$\\lambda$ が重解でも、固有ベクトルが1つしか出ないことがある（**欠陥行列**）。この場合は対角化できず、**ジョルダン標準形**が必要。

### 「固有値が複素数」
実行列でも固有値が複素数になることがある（虚数解）。これは「回転」を表すことが多い。量子力学のエルミート行列では必ず実数なので安心。

### 「非正方行列」
固有値問題は正方行列でのみ定義される。長方形行列には**特異値分解**（SVD）がその一般化。`,
  },

  // ========== 高優先 11 概念 ==========
  {
    id: "method-of-images",
    title: "鏡像法：導体境界の静電問題",
    field: "electromagnetism",
    category: "technique",
    summary:
      "導体平面・導体球の前の電荷の問題を、仮想的な「鏡像電荷」を置くだけで解く強力なテクニック",
    readMinutes: 5,
    relatedProblems: ["todai-2025-phys-2"],
    relatedTopics: ["gauss-law-uses", "dipole-moment"],
    content: `## どんな問題を解くか

「接地された導体の近くに点電荷を置いたとき、電場・電位・導体に誘起される電荷分布はどうなるか？」

直接ポアソン方程式 $\\nabla^2\\phi = -\\rho/\\varepsilon_0$ を境界条件付きで解くのは大変。しかし**鏡像法**なら小学算数レベルで解ける。

## 核心アイデア

境界条件（導体上で $\\phi = 0$）を満たすように、**仮想的な鏡像電荷**を境界の反対側に配置する。すると：
- 導体がなくても、元の電荷＋鏡像電荷の組み合わせが境界で $\\phi = 0$ を自動的に満たす
- 実際の導体外部の電場・電位は、元の電荷＋鏡像電荷が作るそれと等しい

**理由**：ポアソン方程式の解は境界条件で一意に決まる（一意性定理）。境界条件が同じなら解も同じ。

## 基本例：無限導体平面

距離 $d$ 離れた点電荷 $+q$。導体平面（$y = 0$）は接地（$\\phi = 0$）。

**鏡像電荷**：対称な位置（$y = -d$）に $-q$ を置く。すると $y = 0$ の面上で両電荷からの電位が相殺してゼロ。

**導体外部の電場**は「$+q$ と $-q$ のペア（双極子的）」が作るそれ。

**誘起電荷**：$q$ に近い側に負の電荷が集まる。面電荷密度は：
$$\\sigma(r) = -\\frac{qd}{2\\pi(r^2 + d^2)^{3/2}}$$

**誘起電荷の総量**：積分すると $-q$。鏡像電荷の大きさと一致する（一般則）。

## 導体球の場合

接地された半径 $a$ の導体球。中心から距離 $d$（$d > a$）に点電荷 $+q$。

**鏡像電荷**：中心から $a^2/d$ の距離に、大きさ $-qa/d$ の電荷を置く。

- 位置：$d' = a^2/d$
- 大きさ：$q' = -qa/d$

球面上で電位 = 0 となる（幾何的な証明ができる）。

**導体外部の電場・力**：元の $+q$ と鏡像 $-qa/d$ の2体クーロン問題に帰着。

**力**：
$$F = \\frac{q\\cdot q'}{4\\pi\\varepsilon_0(d - d')^2} = -\\frac{q^2 a d}{4\\pi\\varepsilon_0(d^2 - a^2)^2}$$

負符号 = **引力**（電荷は球に引き寄せられる）。

## 孤立導体球（接地されていない場合）

帯電していない孤立導体球なら、鏡像電荷 $-qa/d$ に加えて、中心にさらに $+qa/d$ を置く（全電荷ゼロを保つため）。

## なぜ「鏡像」と呼ぶか

平面鏡の光学的像と全く同じ位置に電荷を置くから。幾何的な直観で覚えられる。

## 使える条件

- 境界が**単純な形状**（平面、球、円柱）
- 導体が**接地または孤立**
- 電荷が**外部にある**

境界が複雑な形状（凹凸があるなど）では鏡像法は使えず、数値計算か別のテクニック（グリーン関数）が必要。

## 一意性定理の重要性

「鏡像電荷を置いたら偶然境界条件が合った」では納得できないかもしれない。**一意性定理**により「境界条件を満たす解は一つしかない」ため、一つ見つければそれが真の解。これが鏡像法の論理的基礎。

## 応用

- 電極と金属基板間の容量計算
- 粒子加速器での空間電荷効果
- AFM（原子間力顕微鏡）での力計算
- 量子電磁気学の真空の扱い（境界のあるCasimir効果）`,
  },
  {
    id: "dipole-moment",
    title: "双極子モーメントとその作る場",
    field: "electromagnetism",
    category: "concept",
    summary:
      "電気/磁気双極子の定義、遠方での電場・電位、双極子放射、双極子-双極子相互作用",
    readMinutes: 6,
    relatedProblems: [
      "todai-2025-phys-2",
      "kyodai-2024-phys-1",
      "nagoya-2025-phys-2",
      "ynu-2023-phys-2",
    ],
    relatedTopics: ["method-of-images", "maxwell-intuition", "perturbation-theory"],
    content: `## 電気双極子モーメント

**定義**：$+q$ と $-q$ が距離 $d$ 離れたペア。双極子モーメントは
$$\\vec p = q\\vec d$$
$\\vec d$ は $-q \\to +q$ 方向のベクトル。

**イメージ**：水分子 H₂O は O が $-$、H が $+$ 寄りで、恒久的な双極子を持つ（$\\vec p \\sim 6.2\\times 10^{-30}$ C·m）。

## 作る電位（遠方 $r \\gg d$）

双極子から距離 $r$、角度 $\\theta$（$\\vec p$ 軸との角度）の点で：
$$\\phi(\\vec r) = \\frac{\\vec p\\cdot\\hat r}{4\\pi\\varepsilon_0 r^2} = \\frac{p\\cos\\theta}{4\\pi\\varepsilon_0 r^2}$$

**ポイント**：
- 距離依存が $1/r^2$（点電荷の $1/r$ より早く減衰）
- 角度依存 $\\cos\\theta$：$\\vec p$ 方向に正、反対方向に負、垂直方向でゼロ

## 作る電場

電位の勾配から：
$$\\vec E = -\\nabla\\phi = \\frac{1}{4\\pi\\varepsilon_0 r^3}[3(\\vec p\\cdot\\hat r)\\hat r - \\vec p]$$

$1/r^3$ で減衰（点電荷の $1/r^2$ より早い）。

### 軸上
$\\vec p$ の方向（$\\theta = 0$）で $E = 2p/(4\\pi\\varepsilon_0 r^3)$。

### 赤道面
$\\theta = \\pi/2$ で $E = -p/(4\\pi\\varepsilon_0 r^3)$（反対向き、大きさ半分）。

## 外部電場中の双極子

### ポテンシャルエネルギー
$$U = -\\vec p\\cdot\\vec E$$

### トルク
$$\\vec\\tau = \\vec p\\times\\vec E$$

双極子は電場と**平行になろうとする**（$U$ が最小）。コンパス針が磁場に整列するのと同じ。

## 双極子-双極子相互作用

2つの双極子 $\\vec p_1, \\vec p_2$ が距離 $\\vec r$ 離れたときの相互作用エネルギー：
$$U = \\frac{1}{4\\pi\\varepsilon_0 r^3}\\left[\\vec p_1\\cdot\\vec p_2 - 3(\\vec p_1\\cdot\\hat r)(\\vec p_2\\cdot\\hat r)\\right]$$

符号は向きに依存：平行なら距離方向で引力、垂直方向で斥力。

**応用**：水素結合、分子間van der Waals 力、NMR の核スピン相互作用。

## 誘起双極子

電場中の原子・分子は電子雲が変形して双極子を誘起：
$$\\vec p_{\\text{誘起}} = \\alpha\\vec E$$

$\\alpha$ は**分極率**。van der Waals 相互作用の起源、誘電率の微視的起源。

## 磁気双極子モーメント

**定義**：電流ループ（電流 $I$、面積 $A$）が作る磁気モーメントは
$$\\vec m = IA\\hat n$$

$\\hat n$ はループの法線（右手の法則）。

**外部磁場中**：
- エネルギー：$U = -\\vec m\\cdot\\vec B$
- トルク：$\\vec\\tau = \\vec m\\times\\vec B$

電気双極子と完全に類似した式。

## 原子の磁気モーメント

- 軌道磁気モーメント：$\\vec m_L = -(e/2m_e)\\vec L$（ボーアマグネトン $\\mu_B = e\\hbar/(2m_e)$）
- スピン磁気モーメント：$\\vec m_S = -g_s(e/2m_e)\\vec S$（$g_s \\approx 2$）

これが NMR、ESR、磁性の基礎。

## 双極子放射

振動する双極子は電磁波を放出。放出パワー（ラーモア公式）：
$$P = \\frac{\\omega^4 p_0^2}{12\\pi\\varepsilon_0 c^3}$$

$\\omega^4$ 依存性が**レイリー散乱**（空が青い理由）の起源。

## 多重極展開

一般の電荷分布は、遠方で
$$\\phi = \\frac{Q}{4\\pi\\varepsilon_0 r} + \\frac{\\vec p\\cdot\\hat r}{4\\pi\\varepsilon_0 r^2} + O(1/r^3)$$
単極子（電荷）+ 双極子 + 四重極子…と展開できる。中性（$Q=0$）なら双極子項が主。`,
  },
  {
    id: "small-oscillations",
    title: "微小振動近似",
    field: "mechanics",
    category: "technique",
    summary:
      "なぜ $\\sin\\theta \\approx \\theta$ で OK か、単振動への帰着、振動数の出し方、応用例",
    readMinutes: 5,
    relatedProblems: [
      "todai-2025-phys-1",
      "tohoku-2025-phys-1",
      "ynu-2025-phys-1",
      "nagoya-2022-phys-1",
    ],
    relatedTopics: ["equation-of-motion", "energy-conservation"],
    content: `## 微小振動とは

平衡点の近くでの**振幅が小さい**振動。この場合、復元力は**変位の1次**で近似でき、単振動の方程式に帰着する。

## テイラー展開が核心

任意のポテンシャル $U(x)$ を平衡点 $x_0$（$U'(x_0) = 0$）のまわりで展開：
$$U(x) = U(x_0) + 0\\cdot(x - x_0) + \\frac{1}{2}U''(x_0)(x - x_0)^2 + O((x-x_0)^3)$$

1次項がゼロ（平衡条件）なので、2次項が支配的。これが**有効バネ定数** $k = U''(x_0)$：
$$U_{\\text{eff}}(x) \\approx \\frac{1}{2}k(x - x_0)^2$$

つまり**どんなポテンシャルも局所的にはバネ**。

## 運動方程式

$F = -dU/dx = -k(x - x_0)$、ニュートン：
$$m\\ddot x = -k(x - x_0)$$
$$\\ddot{\\tilde x} = -\\omega^2\\tilde x, \\quad \\omega = \\sqrt{k/m}, \\quad \\tilde x = x - x_0$$

**周期** $T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{m/U''(x_0)}$。

## 具体例1：単振り子

角度 $\\theta$ で $U(\\theta) = -mg\\ell\\cos\\theta$。平衡 $\\theta = 0$：
- $U'(0) = 0$ ✓
- $U''(0) = mg\\ell$

$I = m\\ell^2$（慣性モーメント）として $\\omega = \\sqrt{U''/I} = \\sqrt{g/\\ell}$：
$$T = 2\\pi\\sqrt{\\ell/g}$$

## 具体例2：一般のバネ

$U(x) = \\frac{1}{2}kx^2$ は元々2次関数なので近似不要。$\\omega = \\sqrt{k/m}$。

## 具体例3：剛体振り子

棒+質点の剛体、重心から $d$ の位置で支持：
- $U(\\theta) = -Mgd\\cos\\theta \\Rightarrow U''(0) = Mgd$
- $I_P$（支点まわり）

$\\omega = \\sqrt{Mgd/I_P}$

## 具体例4：連成振動

2質点の $U(x_1, x_2) = \\frac{1}{2}k(x_1^2 + x_2^2) + \\frac{1}{2}k'(x_1 - x_2)^2$。

平衡点まわりで行列
$$K = \\begin{pmatrix} k+k' & -k' \\\\ -k' & k+k'\\end{pmatrix}$$
の**固有値問題**。固有値が $\\omega^2$、固有ベクトルが基準モード。

## $\\sin\\theta \\approx \\theta$ のトリック

よくある近似：
- $\\sin\\theta \\approx \\theta$（1次）
- $\\cos\\theta \\approx 1 - \\theta^2/2$（2次）
- $\\tan\\theta \\approx \\theta$（1次）
- $e^x \\approx 1 + x + x^2/2$

**有効範囲**：$\\theta \\lesssim 0.3$ rad（約17°）で誤差 1% 以下。

## 大振幅になるとどうなるか

高次項が効いてきて**非調和振動**に：
- 周期が振幅に依存する（単振り子：$T \\approx T_0[1 + \\theta_0^2/16 + \\ldots]$）
- 波形が純粋な正弦波から歪む
- カオスの萌芽

院試では「$\\theta \\ll 1$」と明記されているか、文脈から微小振動が自明なときに限定して使う。

## 有効ポテンシャルの例

中心力問題で動径運動 $r$ について：
$$V_{\\text{eff}}(r) = U(r) + \\frac{L^2}{2mr^2}$$

円軌道 $r_0$ は $V_{\\text{eff}}'(r_0) = 0$ を満たし、そのまわりの**微小振動**が軌道の安定性を決める。

## 躓きポイント

### 平衡条件の見落とし
$U'(x_0) = 0$ を満たす点でしか適用できない。変位の1次項が残ると単振動にならない。

### 2階微分の符号
$U''(x_0) > 0$ なら安定平衡（振動）、$U''(x_0) < 0$ なら不安定平衡（指数的に離れる）。

### 質量（または慣性モーメント）を忘れる
$\\omega^2 = k/m$ の $m$ を変位の「カップリング慣性」として正しく入れる。角度変位なら $I$、直線変位なら $m$。`,
  },
  {
    id: "density-of-states",
    title: "状態密度の計算",
    field: "statistical",
    category: "technique",
    summary:
      "$k$ 空間での数え方、3次元自由粒子の $\\sqrt\\varepsilon$ 則、Debye、光子、2次元・1次元の違い",
    readMinutes: 6,
    relatedProblems: [
      "titech-2025-phys-2",
      "kyodai-2023-phys-2",
      "hokkaido-2021-phys-2",
    ],
    relatedTopics: ["canonical-ensemble", "pde-separation"],
    content: `## 状態密度とは

「エネルギー $\\varepsilon$ 〜 $\\varepsilon + d\\varepsilon$ にある1粒子状態の数」を $D(\\varepsilon)d\\varepsilon$ と定義する関数 $D(\\varepsilon)$。

統計力学では、系のすべての熱力学量が以下の形で書ける：
$$\\langle A\\rangle = \\int_0^\\infty A(\\varepsilon)f(\\varepsilon)D(\\varepsilon)d\\varepsilon$$

$f(\\varepsilon)$ は分布関数（Fermi/Bose/Boltzmann）。$D(\\varepsilon)$ が系の量子構造を全て担う。

## 導出の基本

### ステップ1：$k$ 空間での状態数
箱のサイズ $L$、周期境界条件なら許される波数は $k_n = 2\\pi n/L$。$\\vec k$ 空間での状態密度：
$$\\frac{V}{(2\\pi)^d}$$
$d$ は次元、$V$ は箱の体積。

### ステップ2：波数 $k$ 〜 $k+dk$ の状態数
3次元なら球殻の体積：
$$dN = \\frac{V}{(2\\pi)^3}\\cdot 4\\pi k^2 dk$$

スピンの縮退があれば因子 $g_s$（電子なら $g_s = 2$）をかける。

### ステップ3：エネルギー変数への変換
分散関係 $\\varepsilon = \\varepsilon(k)$ を使って $D(\\varepsilon)d\\varepsilon = dN$ を書き換える。

## 例1：3次元自由粒子

$\\varepsilon = \\hbar^2 k^2/(2m)$、スピン縮退 $g_s$。

$k = \\sqrt{2m\\varepsilon}/\\hbar$, $dk = (1/\\hbar)\\sqrt{m/(2\\varepsilon)}d\\varepsilon$ を代入：

$$D(\\varepsilon) = g_s\\frac{V}{4\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2}\\sqrt\\varepsilon$$

$\\boxed{D(\\varepsilon) \\propto \\sqrt\\varepsilon}$：3次元自由粒子の特徴。

## 例2：2次元自由粒子

$\\vec k$ 空間での円環 $2\\pi k\\,dk$ で計算：
$$D(\\varepsilon) = g_s\\frac{mA}{2\\pi\\hbar^2} = \\text{一定}$$

$\\boxed{D(\\varepsilon) = \\text{const}}$（エネルギーに依存しない）！これが2次元電子ガスの特徴で、量子ホール効果などの基礎。

## 例3：1次元自由粒子

$$D(\\varepsilon) \\propto 1/\\sqrt\\varepsilon$$

低エネルギーで発散（van Hove 特異点の1次元版）。カーボンナノチューブなどで重要。

## 例4：光子（3次元）

光子は質量ゼロ、$\\varepsilon = \\hbar\\omega = \\hbar ck$、横偏光2つ：
$$D(\\omega) = \\frac{V\\omega^2}{\\pi^2 c^3}$$

これを Planck 分布 $1/(e^{\\hbar\\omega/k_BT}-1)$ と組み合わせると黒体輻射（Stefan-Boltzmann の $T^4$ 則）。

## 例5：Debye モデル（フォノン）

固体の格子振動。3つのモード（縦1、横2）、音速 $v$：
$$D(\\omega) = \\frac{3V\\omega^2}{2\\pi^2 v^3}$$

Debye 振動数 $\\omega_D$ で切断（全モード数 $3N$ で決まる）。低温比熱 $C_V \\propto T^3$ の起源。

## まとめ：次元による違い

| 次元 | 自由粒子の $D(\\varepsilon)$ |
|---|---|
| 1次元 | $\\propto 1/\\sqrt\\varepsilon$ |
| 2次元 | $=$ 一定 |
| 3次元 | $\\propto \\sqrt\\varepsilon$ |

**覚え方**：$D \\propto \\varepsilon^{(d-2)/2}$（$d$ 次元）。

## 躓きポイント

### スピン縮退を忘れる
電子系で $g_s = 2$ の因子を忘れるとフェルミエネルギーが $2^{2/3}$ 倍になる計算ミス。

### 分散関係の置換
$\\varepsilon = \\varepsilon(k)$ が非自明なら $D(\\varepsilon)d\\varepsilon = g_s V\\cdot d^dk/(2\\pi)^d$ を丁寧に変換。

### バンド効果
現実の固体では自由粒子 $\\varepsilon \\propto k^2$ ではなくバンド分散。$D$ の形も複雑。`,
  },
  {
    id: "heat-capacity-temperature",
    title: "比熱の温度依存性",
    field: "statistical",
    category: "concept",
    summary:
      "Dulong-Petit 則・Einstein・Debye、低温の $T^3$ 則、電子比熱、なぜ自由度が凍結するか",
    readMinutes: 5,
    relatedProblems: [
      "hokkaido-2021-phys-2",
      "kyushu-2022-phys-2",
      "tsukuba-2021-phys-2",
    ],
    relatedTopics: ["density-of-states", "canonical-ensemble"],
    content: `## 比熱の定義

定積比熱：
$$C_V = \\frac{\\partial\\langle E\\rangle}{\\partial T}$$

「温度を 1 度上げるのに必要なエネルギー」。古典統計では各2次形式自由度に $\\frac{1}{2}k_BT$ が配分される（等分配則）。

## 古典：Dulong-Petit 則

固体（3次元結晶）の原子は各方向に振動：
- 並進自由度 × 3
- 振動自由度：$\\frac{1}{2}m v^2 + \\frac{1}{2}kx^2$ で各2つ
- 原子1個あたり合計6個の自由度

$$\\langle E\\rangle = 3k_BT\\cdot N, \\quad C_V = 3Nk_B = 3R$$

（$R = N_A k_B$ は気体定数）。固体1モルあたり $C_V = 3R \\approx 25$ J/(mol·K)。

実験的に19世紀に発見（Dulong & Petit、1819）。**古典的な普遍値**。

## 低温での破綻

実験：低温で $C_V \\to 0$（$T\\to 0$ で）。Dulong-Petit は合わない！

**原因**：量子力学。振動の最小励起エネルギーが $\\hbar\\omega$ で、$k_BT \\ll \\hbar\\omega$ では振動モードが励起されない（**凍結**）。

## Einstein モデル

各原子を独立した振動数 $\\omega$ の調和振動子とみなす。

$$C_V = 3Nk_B\\left(\\frac{\\Theta_E}{T}\\right)^2\\frac{e^{\\Theta_E/T}}{(e^{\\Theta_E/T}-1)^2}$$

$\\Theta_E = \\hbar\\omega/k_B$ は Einstein 温度。

- 高温 $T \\gg \\Theta_E$：$C_V \\to 3Nk_B$（Dulong-Petit） ✓
- 低温 $T \\ll \\Theta_E$：$C_V \\to 3Nk_B(\\Theta_E/T)^2 e^{-\\Theta_E/T}$

実験と**定性的には**一致するが、低温で **$e^{-\\Theta_E/T}$ で指数減衰**は速すぎる。

## Debye モデル

音波的な振動モード（長波長で低振動数）が存在。状態密度 $D(\\omega) \\propto \\omega^2$ で Debye 振動数 $\\omega_D$ まで。

$$C_V = 9Nk_B\\left(\\frac{T}{\\Theta_D}\\right)^3\\int_0^{\\Theta_D/T}\\frac{x^4 e^x}{(e^x-1)^2}dx$$

- 高温：$C_V \\to 3Nk_B$（Dulong-Petit） ✓
- 低温：$C_V \\to \\frac{12\\pi^4}{5}Nk_B\\left(\\frac{T}{\\Theta_D}\\right)^3$

$\\boxed{C_V \\propto T^3}$（Debye の $T^3$ 則）。これが実験と一致。

## 電子比熱

金属中の自由電子（フェルミ気体）の比熱。$k_BT \\ll \\varepsilon_F$ でフェルミ面近傍の電子のみが熱励起：
$$C_V^{\\text{電子}} = \\frac{\\pi^2}{2}Nk_B\\frac{k_BT}{\\varepsilon_F} \\propto T$$

$\\boxed{C_V \\propto T}$（線形）。低温では Debye の $T^3$ より**電子寄与が支配**：
$$C_V \\approx \\gamma T + \\beta T^3$$

$\\gamma$ を Sommerfeld 係数と呼ぶ。金属の基本特性。

## 分子気体の自由度凍結

2原子分子は高温で並進3 + 回転2 + 振動2 = 7 自由度 → $C_V = (7/2)Nk_B$。しかし：
- 低温（$k_BT < \\hbar\\omega_{\\text{振}}$）：振動凍結 → 5自由度
- さらに低温（$k_BT < \\hbar^2/I$）：回転凍結 → 3自由度

H₂ なら回転温度 $\\sim 85$ K。室温では回転まで活性、振動は凍結中。

## まとめ：比熱の温度変化

| 温度範囲 | 寄与 |
|---|---|
| 極低温 | 電子（$\\propto T$） + フォノン（$\\propto T^3$） |
| 中温 | Debye モデルが支配 |
| 高温（$T \\gg \\Theta_D$） | Dulong-Petit（$3R$） |

## 躓きポイント

### 「低温で $C_V \\to 0$」の理由
古典的には「なぜ振動してるのに熱を受け取らない？」と思える。答えは量子化：励起エネルギーが熱エネルギーより大きいと励起されない。

### 電子比熱と格子比熱の切り替わり
$\\gamma T = \\beta T^3$ となる温度 $T^* = \\sqrt{\\gamma/\\beta}$ が切替点。金属の比熱測定で $C_V/T$ vs $T^2$ プロットが直線になるのが標準的。`,
  },
  {
    id: "wave-equation",
    title: "波動方程式：すべての波の共通構造",
    field: "general",
    category: "concept",
    summary:
      "$\\partial_t^2 u = v^2\\nabla^2 u$ がなぜどこでも出てくるか、平面波解、境界条件、波束",
    readMinutes: 6,
    relatedProblems: [
      "kyodai-2023-phys-1",
      "kyushu-2022-phys-1",
      "nagoya-2024-phys-2",
    ],
    relatedTopics: ["pde-separation", "maxwell-intuition"],
    content: `## 波動方程式の形

1次元：
$$\\frac{\\partial^2 u}{\\partial t^2} = v^2\\frac{\\partial^2 u}{\\partial x^2}$$

3次元：
$$\\frac{\\partial^2 u}{\\partial t^2} = v^2\\nabla^2 u$$

$v$ は**波の伝播速度**。$u$ は変位・電場・波動関数など、波の「何か」。

## なぜ2階微分 = 2階微分 なのか

「復元力が変位の2階空間微分に比例する」系では自然に出る。

### 弦の振動
張力 $T$ で張った弦の微小要素：
- 傾きの差（両端で）が垂直方向の合力
- 合力 $\\propto \\partial^2 y/\\partial x^2$
- ニュートンの法則：$\\mu\\partial^2 y/\\partial t^2 = T\\partial^2 y/\\partial x^2$
- $v = \\sqrt{T/\\mu}$

### 電磁波（真空）
マクスウェル方程式から：
$$\\nabla^2\\vec E = \\mu_0\\varepsilon_0\\frac{\\partial^2\\vec E}{\\partial t^2}$$
$v = 1/\\sqrt{\\mu_0\\varepsilon_0} = c$（光速）。

### 音波
流体の圧力・密度の微小変動：
$$\\frac{\\partial^2 p}{\\partial t^2} = v^2\\nabla^2 p$$
$v = \\sqrt{K/\\rho}$（$K$ 体積弾性率、$\\rho$ 密度）。空気中で約 340 m/s。

## 基本解：平面波

$$u(x, t) = A\\cos(kx - \\omega t)$$

代入すると $\\omega^2 = v^2 k^2$、つまり $\\omega = vk$（**線形分散関係**）。

**波長**：$\\lambda = 2\\pi/k$
**周期**：$T = 2\\pi/\\omega$
**位相速度**：$v_p = \\omega/k = v$

## d'Alembert の解

1次元波動方程式の**一般解**：
$$u(x, t) = f(x - vt) + g(x + vt)$$

任意の関数 $f$ と $g$。$f(x-vt)$ は右向きに速度 $v$ で進む任意形状の波、$g(x+vt)$ は左向き。

**ポイント**：「形を保ったまま速度 $v$ で動く」解がある。これが波の本質。

## 境界条件

### 固定端（両端固定の弦）
$u(0, t) = u(L, t) = 0$。

許される波数は離散化：$k_n = n\\pi/L$、固有振動数 $\\omega_n = n\\pi v/L$。

$n = 1$ が**基本振動**、$n \\geq 2$ が**倍音**。

### 自由端
$\\partial u/\\partial x = 0$ at 端。

### 周期境界
$u(0, t) = u(L, t)$。$k_n = 2\\pi n/L$。

## 波束と群速度

単一の平面波は無限に広がるが、複数の波数を重ね合わせた**波束**は局在。群速度 $v_g = d\\omega/dk$ で動く。

線形分散 $\\omega = vk$ なら $v_g = v$（形を保つ）。非線形分散なら波束が**分散**（広がる）。

## ヘルムホルツ方程式

定常波動 $u(x, t) = \\psi(x)e^{-i\\omega t}$ と仮定して時間依存を分離：
$$\\nabla^2\\psi + \\frac{\\omega^2}{v^2}\\psi = 0$$

これが**ヘルムホルツ方程式**。光学の定常場、量子力学の定常シュレーディンガー方程式（時間依存を分離した形）。

## 量子力学との関連

シュレーディンガー方程式：
$$i\\hbar\\frac{\\partial\\psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\nabla^2\\psi + V\\psi$$

これは波動方程式の**親戚**だが、時間1階微分という点で本物の波動方程式とは異なる。分散関係が $\\omega = \\hbar k^2/(2m)$ で**非線形**になり、自由粒子の波束は分散する。

## 非線形波動

現実の現象（大振幅の水波、プラズマ、光ファイバー中の光）は線形波動方程式を超え、ソリトン・衝撃波・乱流などを生む。

## 躓きポイント

### 2階微分2つで記号混乱
$\\partial^2 u/\\partial t^2$ と $\\partial^2 u/\\partial x^2$ を取り違えない。時間には加速度、空間には曲率。

### 位相速度 vs 群速度
単一平面波では両者が一致。分散あるとズレる。情報伝達は群速度、位相だけで情報は送れない。

### 境界条件の重要性
同じ方程式でも境界条件で完全に違う解になる（固有振動数が離散化されるなど）。`,
  },
  {
    id: "selection-rules",
    title: "選択則：遷移が許されるか禁止されるか",
    field: "quantum",
    category: "theorem",
    summary:
      "パリティ、角運動量、スピンで決まる。電気双極子遷移 $\\Delta l = \\pm 1$ の由来",
    readMinutes: 5,
    relatedProblems: ["kyodai-2024-phys-1", "todai-2023-phys-2"],
    relatedTopics: ["perturbation-theory", "bra-ket-notation", "dipole-moment"],
    content: `## 選択則とは

量子遷移（状態 $|i\\rangle \\to |f\\rangle$）の確率は行列要素 $\\langle f|\\hat O|i\\rangle$ に比例。ある量子数の差 $\\Delta n$ について、この行列要素が**ゼロになるか非ゼロになるか**を事前に判定するルール。

## パリティの考え方

パリティ（空間反転）演算子 $\\hat P$：$\\vec r \\to -\\vec r$。

- 球面調和関数 $Y_l^m$ のパリティ：$(-1)^l$
- $\\hat z$ のパリティ：$-1$（奇）
- 一般にベクトル演算子のパリティは $-1$

## 電気双極子遷移

### ハミルトニアンの形
外部電場 $\\vec E = E_0\\hat z e^{-i\\omega t}$ による摂動：
$$\\hat H' = eE_0\\hat z$$

遷移の行列要素 $\\langle f|\\hat z|i\\rangle$ が非ゼロなら遷移が許される。

### パリティで絞り込む
$\\hat z$ が奇なので、積分 $\\int \\psi_f^*(\\vec r)\\cdot z\\cdot\\psi_i(\\vec r)d^3r$ が非ゼロになるには、$\\psi_f^*$ と $\\psi_i$ のパリティが**異なる**必要。

$\\psi_{nlm}$ のパリティは $(-1)^l$ なので：
$$\\boxed{\\Delta l = \\pm 1, \\pm 3, \\ldots}$$

さらに角運動量合成則から $|\\Delta l| \\leq 1$、結局 **$\\Delta l = \\pm 1$**。

### 磁気量子数
$\\hat z$ は $m$ を変えない。$\\hat x, \\hat y$ を含めると $\\Delta m = 0, \\pm 1$（3種類）。

### 主量子数
$n$ には制約なし（行列要素は非零の可能性あり）。ただし $n$ が大きく違うと減衰。

## 具体例：水素原子

### 許される遷移
- $2p \\to 1s$（$l: 1 \\to 0$、$\\Delta l = -1$ ✓）→ **ライマン α線**
- $3d \\to 2p$（$l: 2 \\to 1$、$\\Delta l = -1$ ✓）→ バルマー α線

### 禁制遷移
- $2s \\to 1s$（$l: 0 \\to 0$、$\\Delta l = 0$ ✗）→ **禁制**

$2s$ は準安定状態で、磁気双極子や2光子過程でしか遷移せず、寿命が長い（約 0.12 秒、普通の原子状態の $10^8$ 倍）。

## より高次の遷移

電気双極子が禁制でも、以下なら遷移可能：

| 遷移種 | オーダー | 選択則 |
|---|---|---|
| 電気双極子 (E1) | $(v/c)^0$ | $\\Delta l = \\pm 1$ |
| 磁気双極子 (M1) | $(v/c)^2$ | $\\Delta l = 0$、スピン遷移 |
| 電気四重極子 (E2) | $(v/c)^2$ | $\\Delta l = 0, \\pm 2$ |

高次の遷移は確率がはるかに小さいため、禁制遷移の寿命は長くなる。

## スピン選択則

電気双極子演算子 $\\hat z$ はスピンに作用しない → $\\Delta s = 0$。

ただしスピン軌道結合があると、**一重項・三重項間の遷移**が弱く許される（リン光 phosphorescence の起源）。

## Wigner-Eckart の定理

角運動量的な対称性を系統的に扱う一般則。テンソル演算子 $\\hat T^{(k)}_q$ の行列要素：
$$\\langle j'm'|\\hat T^{(k)}_q|jm\\rangle = \\langle jm; kq|j'm'\\rangle\\cdot\\langle j'\\|T^{(k)}\\|j\\rangle$$

（幾何因子 = Clebsch-Gordan × 物理因子 = reduced matrix element）

選択則は幾何因子（Clebsch-Gordan 係数）の0/非0で決まり、角運動量合成則と一致：
- $|j - k| \\leq j' \\leq j + k$
- $m' = m + q$

## 具体例：$j = 1/2$ 系

スピン $1/2$ の2つの粒子の合成角運動量は 0 か 1。つまり：
- 一重項（$S = 0$）$\\to$ 三重項（$S = 1$）の遷移は $\\Delta S = 1$

電気双極子遷移ではスピンは変わらないので、この遷移は原理的には禁制。ただしスピン軌道相互作用で混合があると弱く許される。

## なぜ重要か

1. **スペクトル線の強度予測**
2. **寿命の見積もり**（禁制 = 寿命長い）
3. **実験検証**：選択則を破る線があればスピン軌道結合や高次効果の証拠
4. **レーザー・天文学**：許容遷移と禁制遷移の区別が観測・設計の鍵`,
  },
  {
    id: "creation-annihilation-operators",
    title: "生成消滅演算子の使い方",
    field: "quantum",
    category: "technique",
    summary:
      "$\\hat a, \\hat a^\\dagger$ の定義、数状態、交換関係、調和振動子スペクトル、波動関数を書かずに全て解く",
    readMinutes: 7,
    relatedProblems: [
      "todai-2025-phys-3",
      "nagoya-2024-phys-1",
      "tsukuba-2022-phys-2",
    ],
    relatedTopics: ["bra-ket-notation", "perturbation-theory"],
    content: `## なぜ使うのか

調和振動子のような系では、波動関数（Hermite 関数）の具体形を使わずに**代数的に全てが計算できる**。

## 定義

調和振動子（質量 $m$、角振動数 $\\omega$）に対して：
$$\\hat a = \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat x + \\frac{i}{\\sqrt{2m\\omega\\hbar}}\\hat p$$
$$\\hat a^\\dagger = \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat x - \\frac{i}{\\sqrt{2m\\omega\\hbar}}\\hat p$$

**$\\hat a$ は消滅演算子**、**$\\hat a^\\dagger$ は生成演算子**。互いにエルミート共役。

## 交換関係

$[\\hat x, \\hat p] = i\\hbar$ から、直接計算で：
$$\\boxed{[\\hat a, \\hat a^\\dagger] = 1}$$
$$[\\hat a, \\hat a] = 0, \\quad [\\hat a^\\dagger, \\hat a^\\dagger] = 0$$

この交換関係が以下の全性質の源。

## 逆に $\\hat x, \\hat p$ を書き直す

$$\\hat x = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat a + \\hat a^\\dagger)$$
$$\\hat p = i\\sqrt{\\frac{m\\omega\\hbar}{2}}(\\hat a^\\dagger - \\hat a)$$

## ハミルトニアンの変換

$\\hat H = \\hat p^2/(2m) + \\frac{1}{2}m\\omega^2\\hat x^2$ に代入：
$$\\hat H = \\hbar\\omega\\left(\\hat a^\\dagger\\hat a + \\frac{1}{2}\\right) = \\hbar\\omega\\left(\\hat N + \\frac{1}{2}\\right)$$

ここで $\\hat N \\equiv \\hat a^\\dagger\\hat a$ を**数演算子**と呼ぶ。

## エネルギースペクトル

数演算子の固有状態 $|n\\rangle$（$\\hat N|n\\rangle = n|n\\rangle$）のエネルギー：
$$\\boxed{E_n = \\hbar\\omega(n + 1/2), \\quad n = 0, 1, 2, \\ldots}$$

**零点エネルギー** $E_0 = \\hbar\\omega/2$：基底状態でもゼロにならない。

## 状態間の作用

### 消滅
$$\\hat a|n\\rangle = \\sqrt n|n-1\\rangle$$
$n$ を1減らす。$|0\\rangle$ にかけると消える（$\\hat a|0\\rangle = 0$）。

### 生成
$$\\hat a^\\dagger|n\\rangle = \\sqrt{n+1}|n+1\\rangle$$
$n$ を1増やす。上限なし。

### 連続作用
$$|n\\rangle = \\frac{(\\hat a^\\dagger)^n}{\\sqrt{n!}}|0\\rangle$$

基底状態から生成演算子を $n$ 回作用させれば任意の $|n\\rangle$ が作れる。

## 基底状態の波動関数

$\\hat a|0\\rangle = 0$ を座標表示：
$$\\left(\\sqrt{\\frac{m\\omega}{2\\hbar}}x + \\sqrt{\\frac{\\hbar}{2m\\omega}}\\frac{d}{dx}\\right)\\psi_0(x) = 0$$

解いて：
$$\\psi_0(x) = \\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4}e^{-m\\omega x^2/(2\\hbar)}$$

**ガウシアン**。

## 行列要素の威力

### $\\langle n|\\hat x|m\\rangle$
$\\hat x = \\sqrt{\\hbar/(2m\\omega)}(\\hat a + \\hat a^\\dagger)$ より：
- $\\langle n-1|\\hat x|n\\rangle = \\sqrt{n\\hbar/(2m\\omega)}$
- $\\langle n+1|\\hat x|n\\rangle = \\sqrt{(n+1)\\hbar/(2m\\omega)}$
- それ以外は 0

積分なしに瞬時に出る。これが生成消滅演算子の最大の利点。

## コヒーレント状態

$\\hat a$ の固有状態 $|\\alpha\\rangle$（$\\hat a|\\alpha\\rangle = \\alpha|\\alpha\\rangle$、$\\alpha$ は複素数）は**古典的な振動**に最も近い量子状態。レーザー光の記述に使う。

$$|\\alpha\\rangle = e^{-|\\alpha|^2/2}\\sum_n\\frac{\\alpha^n}{\\sqrt{n!}}|n\\rangle$$

位置と運動量の不確定性積が最小（$\\Delta x\\Delta p = \\hbar/2$）。

## 場の量子論への拡張

1つの調和振動子が1モードを表し、$|n\\rangle$ がそのモードの**光子数**や**フォノン数**を表す。場の量子論では無限個の調和振動子を扱い、生成消滅演算子が粒子の生成・消滅を記述：

- $\\hat a^\\dagger_k|0\\rangle$：運動量 $k$ の粒子1個
- $\\hat a^\\dagger_k\\hat a^\\dagger_k|0\\rangle$：同じ状態に2個（ボース）
- 同種フェルミでは $\\{\\hat a_k, \\hat a^\\dagger_{k'}\\} = \\delta_{kk'}$（反交換）

## 躓きポイント

### $\\hat a|0\\rangle = 0$
「ベクトル 0」であって、数字 0 ではない。ノルムが 0。

### 規格化係数の $\\sqrt n$ と $\\sqrt{n+1}$
計算で忘れやすい。各演算で必ず慎重に確認。

### 「演算子の順序を勝手に変えない」
$\\hat a\\hat a^\\dagger \\ne \\hat a^\\dagger\\hat a$。交換関係で変換するときは $\\hat a\\hat a^\\dagger = \\hat a^\\dagger\\hat a + 1$。`,
  },
  {
    id: "entropy-irreversibility",
    title: "エントロピーと不可逆過程",
    field: "thermodynamics",
    category: "concept",
    summary:
      "なぜ自発的な変化は一方向か、エントロピーの3つの定義、ボルツマン・クラウジウス・シャノンがつながる",
    readMinutes: 6,
    relatedProblems: [
      "tohoku-2025-phys-3",
      "ynu-2022-phys-2",
    ],
    relatedTopics: ["canonical-ensemble"],
    content: `## 時間の矢

物理法則（ニュートン、シュレーディンガー）は時間反転対称。なのに現実は：
- 熱いコーヒーは冷める（逆は起こらない）
- インクは水に広がる（戻らない）
- 卵は割れる（戻らない）

この**不可逆性**の起源を統計力学で説明するのがエントロピー。

## 3つのエントロピー定義

### 1. クラウジウス（熱力学）
可逆過程での熱の出入り：
$$dS = \\frac{\\delta Q_{\\text{可逆}}}{T}$$

19世紀的定義。エントロピーは状態関数（経路に依存しない）。

### 2. ボルツマン（統計力学）
$$S = k_B\\ln W$$

$W$ は**マクロ状態に対応するミクロ状態の数**。エントロピー = 「無秩序さ」の対数。

墓石に刻まれた世界一有名な物理方程式。

### 3. シャノン（情報理論）
$$S = -k\\sum_i P_i\\ln P_i$$

確率分布の**情報的不確実性**。物理系では $k = k_B$。

**驚き**：3つの定義が完全に等価。熱力学・統計力学・情報理論は同じ量を扱っている。

## 熱力学第2法則

> **孤立系のエントロピーは減少しない**：$\\Delta S_{\\text{total}} \\geq 0$

等号は可逆過程、不等号は不可逆過程。

### 含意
- 熱は高温 → 低温に流れる（逆は $\\Delta S < 0$ で禁止）
- 永久機関は不可能（エネルギー収支で作れても、エントロピー増加則で潰される）
- 時間の矢が定義される

## 具体例1：気体の混合

体積 $V$ の 2 容器にそれぞれ別の気体 $n$ モル。仕切りを外して混合。

各気体が体積 $2V$ へ等温膨張：
$$\\Delta S_{\\text{各}} = nR\\ln 2$$

全体：
$$\\Delta S_{\\text{total}} = 2nR\\ln 2 > 0$$

元に戻らない（仕切りを挿入しても気体は戻らない）。

## 具体例2：熱の流れ

温度 $T_1 > T_2$ の2物体を接触させる。微小熱量 $\\delta Q$ が高温から低温へ：

$$dS_1 = -\\frac{\\delta Q}{T_1}, \\quad dS_2 = +\\frac{\\delta Q}{T_2}$$

$$dS_{\\text{total}} = \\delta Q\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right) > 0$$

$T_1 > T_2$ なら正。$\\delta Q < 0$（低温から高温）なら負となり禁止。

## 具体例3：カルノーサイクル

可逆サイクル全体で $\\Delta S = 0$。各等温過程ではエントロピー授受：
- 高温：$Q_H/T_H$ 受け取る
- 低温：$Q_L/T_L$ 放出
- 循環：$Q_H/T_H = Q_L/T_L$

この等式から効率：$\\eta = 1 - Q_L/Q_H = 1 - T_L/T_H$。

## 統計力学的理解

なぜ自発的に $\\Delta S > 0$ になるのか：

**ミクロ状態数が多い方が確率的に圧倒的**。気体の分子が全部左半分にある状態は、全体に広がっている状態より **$2^N$ 倍稀**（$N = 10^{23}$）。

熱力学的極限では「最もミクロ状態数が多いマクロ状態」が実質100%実現。これがボルツマンの統計力学的説明。

## ギブズのパラドックス

同種気体の混合で $\\Delta S = 2nR\\ln 2$ と計算してしまうと、物理的には何も起きていないのにエントロピーが増える矛盾。

解消：**同種粒子の区別不能性**を統計に入れる（古典統計に $1/N!$ 補正、またはグランドカノニカル）。量子統計では自動的に正しく処理される。

## エントロピーとエネルギー

- **エネルギー**：「どれだけ」
- **エントロピー**：「どれだけ使える形か」

同じエネルギーでも、高温側に集中しているエネルギーの方が仕事に変換しやすい（低エントロピー）。熱平衡状態は最もエントロピーが高く、仕事に変換できない。

## 躓きポイント

### 「エントロピー = 無秩序」の直観的限界
「無秩序」は曖昧。**ミクロ状態数の対数**という定量的理解の方が精確。

### 局所的にエントロピー減少
地球上で生命が育つのはエントロピー減少のように見えるが、太陽からの光（低エントロピー）を取り込んで宇宙空間に熱（高エントロピー）として放射している。系全体では増加。

### 第3法則
絶対零度でエントロピーは 0（結晶で）。ネルンスト・プランクの定理。ただし混合性エントロピーや核スピンは残りうる。`,
  },
  {
    id: "pauli-matrices-spin",
    title: "パウリ行列とスピン 1/2",
    field: "quantum",
    category: "math",
    summary:
      "3つの $2\\times 2$ 行列だけで量子スピンのすべてが記述できる。代数的関係、固有状態、具体計算",
    readMinutes: 5,
    relatedProblems: [
      "osaka-2025-phys-1",
      "todai-2023-phys-2",
      "nagoya-2021-phys-1",
    ],
    relatedTopics: ["bra-ket-notation", "eigenvalues-eigenvectors"],
    content: `## 定義

$$\\hat\\sigma_x = \\begin{pmatrix}0&1\\\\1&0\\end{pmatrix},\\quad \\hat\\sigma_y = \\begin{pmatrix}0&-i\\\\i&0\\end{pmatrix},\\quad \\hat\\sigma_z = \\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$$

スピン演算子は $\\hat S_i = (\\hbar/2)\\hat\\sigma_i$。

## 基本的な性質

### 交換関係
$$[\\hat\\sigma_i, \\hat\\sigma_j] = 2i\\epsilon_{ijk}\\hat\\sigma_k$$

### 反交換関係
$$\\{\\hat\\sigma_i, \\hat\\sigma_j\\} = 2\\delta_{ij}\\hat I$$

### まとめて
$$\\hat\\sigma_i\\hat\\sigma_j = \\delta_{ij}\\hat I + i\\epsilon_{ijk}\\hat\\sigma_k$$

### 自乗
$$\\hat\\sigma_i^2 = \\hat I \\quad (\\forall i)$$

### トレースレス、エルミート、ユニタリ

- $\\text{Tr}\\hat\\sigma_i = 0$
- $\\hat\\sigma_i^\\dagger = \\hat\\sigma_i$
- $\\hat\\sigma_i^{-1} = \\hat\\sigma_i$

## 固有値問題

各 $\\hat\\sigma_i$ の固有値は $\\pm 1$（つまり $\\hat S_i$ の固有値は $\\pm\\hbar/2$）。

### $\\hat\\sigma_z$ の固有状態
$$|z, +\\rangle = \\binom{1}{0}, \\quad |z, -\\rangle = \\binom{0}{1}$$

### $\\hat\\sigma_x$ の固有状態
$$|x, +\\rangle = \\frac{1}{\\sqrt 2}\\binom{1}{1}, \\quad |x, -\\rangle = \\frac{1}{\\sqrt 2}\\binom{1}{-1}$$

### $\\hat\\sigma_y$ の固有状態
$$|y, +\\rangle = \\frac{1}{\\sqrt 2}\\binom{1}{i}, \\quad |y, -\\rangle = \\frac{1}{\\sqrt 2}\\binom{1}{-i}$$

## 基底変換

$z$ 基底から $x$ 基底への変換：
$$|z, +\\rangle = \\frac{1}{\\sqrt 2}(|x, +\\rangle + |x, -\\rangle)$$
$$|z, -\\rangle = \\frac{1}{\\sqrt 2}(|x, +\\rangle - |x, -\\rangle)$$

**物理的意味**：「$S_z$ が $+\\hbar/2$ と確定している状態」は、「$S_x$ については $\\pm$ 等確率」。軸が違うと測定結果は排他的。

## 期待値の計算

### 例：$|z, +\\rangle$ での $\\hat S_x$ の期待値
$$\\langle\\hat S_x\\rangle = \\frac{\\hbar}{2}\\begin{pmatrix}1&0\\end{pmatrix}\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\binom{1}{0} = \\frac{\\hbar}{2}\\cdot 0 = 0$$

### 例：$|z, +\\rangle$ での $\\hat S_x^2$
$\\hat\\sigma_x^2 = \\hat I$ より $\\hat S_x^2 = (\\hbar/2)^2\\hat I$、$\\langle\\hat S_x^2\\rangle = \\hbar^2/4$。

### 不確定性
$(\\Delta S_x)^2 = \\langle\\hat S_x^2\\rangle - \\langle\\hat S_x\\rangle^2 = \\hbar^2/4 \\Rightarrow \\Delta S_x = \\hbar/2$

## ブロッホ球表示

任意のスピン 1/2 の純粋状態：
$$|\\psi\\rangle = \\cos(\\theta/2)|z,+\\rangle + e^{i\\phi}\\sin(\\theta/2)|z,-\\rangle$$

単位球面上の点 $(\\theta, \\phi)$ と1対1対応。**ブロッホ球**。

スピンの向きがこの球上の方向として直感的に可視化できる。

## 一般軸方向のスピン

方向 $\\hat n = (\\sin\\theta\\cos\\phi, \\sin\\theta\\sin\\phi, \\cos\\theta)$ のスピン演算子：
$$\\hat\\sigma_{\\hat n} = \\hat n\\cdot\\vec{\\hat\\sigma} = \\sin\\theta\\cos\\phi\\,\\hat\\sigma_x + \\sin\\theta\\sin\\phi\\,\\hat\\sigma_y + \\cos\\theta\\,\\hat\\sigma_z$$

固有値は常に $\\pm 1$（スピン 1/2 の特徴）。

## 時間発展：ラビ振動

外部磁場 $\\vec B$ 中の Hamiltonian：
$$\\hat H = -\\vec\\mu\\cdot\\vec B = \\mu_B B\\hat\\sigma_z$$（$z$ 方向磁場）

時間発展 $e^{-i\\hat Ht/\\hbar}$ はスピンを**歳差運動**させる（ラーモア歳差）。

$x$ 向きに偏極したスピン $|x,+\\rangle$ に $z$ 磁場を印加すると、$xy$ 面内で回転。

## 角運動量合成

2つのスピン $1/2$ の合成：全スピン $S = 0$（1重項）または $S = 1$（3重項）。4次元 = 1 + 3。

合成状態の具体形：
- $|0, 0\\rangle = \\frac{1}{\\sqrt 2}(|\\!\\uparrow\\downarrow\\rangle - |\\!\\downarrow\\uparrow\\rangle)$
- $|1, 0\\rangle = \\frac{1}{\\sqrt 2}(|\\!\\uparrow\\downarrow\\rangle + |\\!\\downarrow\\uparrow\\rangle)$
- $|1, \\pm 1\\rangle = |\\!\\uparrow\\uparrow\\rangle, |\\!\\downarrow\\downarrow\\rangle$

## 応用

- **量子計算**：キュービットの数学的表現
- **NMR**：核スピンの扱い
- **ESR**：電子スピン共鳴
- **粒子物理**：スピノル表示、Dirac 方程式
- **磁性**：ハイゼンベルク模型での交換相互作用

スピンはベクトル的な向きを持つ**最小の量子自由度**。電子以外にも陽子・中性子・ミューオンなどスピン 1/2 の粒子が多く、量子物理の普遍的主役。`,
  },

  // ========== 中優先 15 個（2問で登場） ==========
  {
    id: "hamiltonian-formalism",
    title: "ハミルトニアン形式入門",
    field: "mechanics",
    category: "concept",
    summary: "ラグランジアン形式からハミルトニアン形式へ。位相空間、正準方程式、量子化への橋渡し",
    readMinutes: 6,
    relatedProblems: ["tohoku-2024-phys-1", "todai-2025-phys-3"],
    relatedTopics: ["lagrangian-basics", "euler-lagrange"],
    content: `## ハミルトニアンとは

ラグランジアン $L(q, \\dot q, t)$ から、ルジャンドル変換で定義：
$$H(q, p, t) = \\sum_i p_i\\dot q_i - L$$

ここで $p_i = \\partial L/\\partial\\dot q_i$ は一般化運動量。

## 正準方程式

ラグランジアン形式の2階微分方程式が、**1階微分方程式のペア**になる：
$$\\dot q_i = \\frac{\\partial H}{\\partial p_i}, \\quad \\dot p_i = -\\frac{\\partial H}{\\partial q_i}$$

$(q, p)$ のペアを**正準変数**、それが張る空間を**位相空間**と呼ぶ。

## 具体例：調和振動子

$L = \\frac{1}{2}m\\dot x^2 - \\frac{1}{2}kx^2$、$p = m\\dot x$
$$H = p\\dot x - L = \\frac{p^2}{2m} + \\frac{1}{2}kx^2$$

正準方程式：
$$\\dot x = p/m, \\quad \\dot p = -kx$$

これは位相空間で楕円軌道を描く運動。

## 利点

1. **物理的直観が明快**：$H$ はエネルギーそのもの（$H$ が時間を含まなければ保存）
2. **位相空間の幾何学**：リウヴィルの定理、カオス力学
3. **量子化への直結**：$\\{q, p\\}_{\\text{Poisson}} = 1 \\to [\\hat q, \\hat p] = i\\hbar$

## ポアソン括弧

$$\\{f, g\\} = \\sum_i\\left(\\frac{\\partial f}{\\partial q_i}\\frac{\\partial g}{\\partial p_i} - \\frac{\\partial f}{\\partial p_i}\\frac{\\partial g}{\\partial q_i}\\right)$$

運動方程式：$df/dt = \\{f, H\\} + \\partial f/\\partial t$

量子力学で $\\{\\cdot\\}_{\\text{P}} \\to [\\cdot]/(i\\hbar)$ と置き換え → Heisenberg 方程式。

## ラグランジアン vs ハミルトニアン

| | ラグランジアン | ハミルトニアン |
|---|---|---|
| 変数 | $(q, \\dot q)$ | $(q, p)$ |
| 方程式 | 2階、$n$ 本 | 1階、$2n$ 本 |
| 物理量 | $T - U$ | $T + U$（多くの場合）|
| 量子化 | 経路積分 | 正準量子化 |
| 相対論 | 共変的 | フレーム依存 |

## 躓きポイント

- $H$ はエネルギーと一致するが、**厳密には常にそうではない**（時間依存系や非保存系では要注意）
- 「$q$ と $\\dot q$ は独立変数」はラグランジアンの話。ハミルトニアンでは「$q$ と $p$」が独立`,
  },
  {
    id: "effective-potential",
    title: "有効ポテンシャルと円軌道",
    field: "mechanics",
    category: "concept",
    summary: "遠心項を位置エネルギーに組み込む。1次元問題への帰着、軌道の安定性判定",
    readMinutes: 5,
    relatedProblems: ["todai-2024-phys-1", "kyushu-2021-phys-1"],
    relatedTopics: ["angular-momentum-conservation", "small-oscillations"],
    content: `## 定義

中心力 $U(r)$ 中の運動で、角運動量 $L$ が保存する。この $L$ を使って動径運動方程式を書き直すと：
$$m\\ddot r = -\\frac{dU}{dr} + \\frac{L^2}{mr^3}$$

右辺を $-dV_{\\text{eff}}/dr$ の形に書くと：
$$\\boxed{V_{\\text{eff}}(r) = U(r) + \\frac{L^2}{2mr^2}}$$

第2項が**遠心ポテンシャル**。$r\\to 0$ で発散し、粒子を中心から遠ざける"見かけのエネルギー"。

## なぜ便利か

2次元の中心力問題が**1次元のエネルギー問題**に還元できる：
$$E = \\frac{1}{2}m\\dot r^2 + V_{\\text{eff}}(r)$$

古典的な $x(t)$ を解く代わりに、$V_{\\text{eff}}(r)$ のグラフを見るだけで運動の性質が分かる。

## 円軌道の条件

$r = r_0$ 一定 → $\\dot r = \\ddot r = 0$ → $dV_{\\text{eff}}/dr|_{r_0} = 0$。

$V_{\\text{eff}}$ の**極値**が円軌道。

## 安定性判定

$V_{\\text{eff}}$ の2階微分の符号で決まる：
- $V_{\\text{eff}}''(r_0) > 0$：極小 → 安定（摂動すると振動しながら元に戻る）
- $V_{\\text{eff}}''(r_0) < 0$：極大 → 不安定

## 具体例：Kepler ポテンシャル

$U = -k/r$（引力）：
$$V_{\\text{eff}}(r) = -\\frac{k}{r} + \\frac{L^2}{2mr^2}$$

$V_{\\text{eff}}'(r) = 0$ から $r_0 = L^2/(mk)$。$V_{\\text{eff}}''(r_0) > 0$ → **円軌道は安定**（惑星運動）。

## 具体例：$1/r^n$ 型

一般に $U = -k/r^{n-1}$（中心力 $\\propto 1/r^n$）：
- $n < 3$：安定円軌道あり
- $n \\geq 3$：円軌道が不安定

だから**自然界の基本力はすべて $n = 2$（Coulomb、重力）**。$n = 3$ だと安定な太陽系も原子も存在できない。

## 躓きポイント

- **$L$ は固定値として扱う**：角運動量保存からの帰結。$L$ が変わる系では使えない。
- 遠心ポテンシャルは**見かけのポテンシャル**。実際の中心力は $U(r)$ のみ。`,
  },
  {
    id: "fourier-series",
    title: "フーリエ級数：周期関数の展開",
    field: "math",
    category: "math",
    summary: "任意の周期関数をサイン・コサインの和で表す。直交性、係数公式、収束、物理応用",
    readMinutes: 6,
    relatedProblems: ["osaka-2025-math-1", "nagoya-2024-phys-2"],
    relatedTopics: ["pde-separation", "wave-equation"],
    content: `## 基本アイデア

周期 $2L$ の関数 $f(x)$ を：
$$f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty\\left(a_n\\cos\\frac{n\\pi x}{L} + b_n\\sin\\frac{n\\pi x}{L}\\right)$$

「基本振動と倍音の和に分解」という楽器の音色分析そのもの。

## 係数の求め方

サイン・コサインの**直交性**を使う：
$$\\int_{-L}^L \\cos\\frac{m\\pi x}{L}\\cos\\frac{n\\pi x}{L}dx = L\\delta_{mn}$$

これにより：
$$a_n = \\frac{1}{L}\\int_{-L}^L f(x)\\cos\\frac{n\\pi x}{L}dx$$
$$b_n = \\frac{1}{L}\\int_{-L}^L f(x)\\sin\\frac{n\\pi x}{L}dx$$

## 対称性

- **偶関数** $f(-x) = f(x)$：$b_n = 0$（コサインのみ）
- **奇関数** $f(-x) = -f(x)$：$a_n = 0$（サインのみ）

対称性を使うと半分の計算で済む。

## 具体例：のこぎり波 $f(x) = x$（$-\\pi < x < \\pi$）

奇関数なので $a_n = 0$。
$$b_n = \\frac{2}{\\pi}\\int_0^\\pi x\\sin nx\\,dx = \\frac{2(-1)^{n+1}}{n}$$

$$f(x) = x = 2\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}\\sin nx$$

## 複素形式

オイラーの公式を使うと：
$$f(x) = \\sum_{n=-\\infty}^\\infty c_n e^{in\\pi x/L}, \\quad c_n = \\frac{1}{2L}\\int_{-L}^L f(x)e^{-in\\pi x/L}dx$$

こちらの方が扱いやすい場面が多い。

## パーセバルの等式

エネルギー/ノルムの保存：
$$\\frac{1}{2L}\\int_{-L}^L |f(x)|^2 dx = \\sum_n |c_n|^2$$

## 収束

- $f$ が連続 + 区分的微分可能 → 級数が $f(x)$ に収束
- 不連続点では**左右極限の平均** $(f(x^-) + f(x^+))/2$ に収束
- **ギブス現象**：不連続点近傍で振幅約 9% の overshoot が残る

## 物理応用

- 弦の振動：基本モード + 倍音
- 熱伝導方程式：境界条件に合う基底で展開
- 電磁気学：導体内のポテンシャル
- 信号処理：スペクトル分析、音声・画像圧縮
- 量子力学：井戸型ポテンシャルの波動関数

## フーリエ変換への拡張

非周期関数（$L \\to \\infty$）では和が積分に：
$$\\tilde f(k) = \\int_{-\\infty}^\\infty f(x)e^{-ikx}dx$$

現代物理学の必須道具。`,
  },
  {
    id: "fresnel-coefficients",
    title: "フレネル係数：境界での反射・透過",
    field: "optics",
    category: "technique",
    summary: "s偏光・p偏光それぞれの反射率・透過率、電磁気の境界条件から導出",
    readMinutes: 5,
    relatedProblems: ["kyodai-2025-phys-2"],
    relatedTopics: ["brewster-angle", "maxwell-intuition"],
    content: `## 反射・透過係数とは

屈折率が違う2媒質の境界で、入射波の振幅に対する反射波・透過波の振幅比：
$$r = \\frac{E_r}{E_i}, \\quad t = \\frac{E_t}{E_i}$$

**強度**（パワー反射率・透過率）は $R = |r|^2$、$T = (n_2/n_1)\\cos\\theta_t/\\cos\\theta_i\\cdot|t|^2$。

## 偏光による違い

電場の向きで2種類：

### s偏光（TE）
電場が**入射面に垂直**（紙面に垂直）。
$$r_s = \\frac{n_1\\cos\\theta_i - n_2\\cos\\theta_t}{n_1\\cos\\theta_i + n_2\\cos\\theta_t}$$

### p偏光（TM）
電場が**入射面内**。
$$r_p = \\frac{n_2\\cos\\theta_i - n_1\\cos\\theta_t}{n_2\\cos\\theta_i + n_1\\cos\\theta_t}$$

## 導出のキーポイント

マクスウェル方程式の境界条件：
- $E$ の接線成分が連続
- $H$ の接線成分が連続（表面電流なしの場合）

この2条件とスネルの法則から $r, t$ が決まる。

## 垂直入射（$\\theta_i = 0$）

s偏光とp偏光の区別なし：
$$r = \\frac{n_1 - n_2}{n_1 + n_2}, \\quad t = \\frac{2n_1}{n_1 + n_2}$$

### 例：ガラス（$n = 1.5$）への垂直入射
$r = -0.2 \\Rightarrow R = 4\\%$。眼鏡レンズで約8%（両面）の光が失われる。反射防止コートが必要な理由。

## 特殊角度

### ブリュースター角
$r_p = 0$ となる入射角：$\\tan\\theta_B = n_2/n_1$
→ 反射光はs偏光のみ（偏光板の原理）

### 全反射
$n_1 > n_2$ で $\\sin\\theta_i > n_2/n_1$ → $\\sin\\theta_t > 1$（実数解なし）→ すべてのエネルギーが反射
→ 光ファイバー通信の原理

## 金属への反射

$n_2$ が複素数（$n_2 = n + ik$）：
- $k$ が大きいと $|r| \\to 1$（鏡）
- 位相も変化

## 躓きポイント

### 符号規約
$r_p$ の符号は教科書によって異なる（電場の向きの取り方）。結果の $|r|^2$ は同じ。

### エネルギー保存
$R + T = 1$（吸収なしなら）。$|r|^2 + |t|^2 = 1$ ではないことに注意（$t$ は振幅、強度は $n$ で補正）。

### 偏光の重要性
入射面の定義をしっかり。s/p の判別がすべての出発点。`,
  },
  {
    id: "brewster-angle",
    title: "ブリュースター角と偏光の消失",
    field: "optics",
    category: "concept",
    summary: "p偏光の反射がゼロになる特別な角度。なぜ起こるか、実用例、鏡像法的直観",
    readMinutes: 4,
    relatedProblems: ["kyodai-2025-phys-2"],
    relatedTopics: ["fresnel-coefficients", "dipole-moment"],
    content: `## ブリュースター角とは

$n_1, n_2$ の境界で、p偏光のフレネル反射係数 $r_p = 0$ となる特別な入射角。

$$\\tan\\theta_B = \\frac{n_2}{n_1}$$

### 空気 → ガラス（$n_2 = 1.5$）
$\\theta_B = \\arctan(1.5) \\approx 56.3°$

### 空気 → 水（$n_2 = 1.33$）
$\\theta_B \\approx 53.1°$

## 幾何的特徴

ブリュースター角では、**反射光の方向と屈折光の方向が直角**になる：
$$\\theta_B + \\theta_t = 90°$$

これとスネルの法則を組み合わせると、$\\tan\\theta_B = n$ が出る。

## 物理的起源：双極子放射

誘電体中の電子が入射電場で揺らされ、振動双極子として**再放射**するのが反射・屈折の本質。

**双極子放射の性質**：双極子の振動方向には放射しない。

p偏光の場合、入射電場で揺らされる電子の振動方向と、反射波の進行方向が**たまたま一致**する角度がある → その方向には放射されない → 反射消失。

## 実用例

### 偏光フィルター
自然光（無偏光）をブリュースター角で反射させると、反射光はs偏光のみになる。これが偏光板の原理の一つ。

### 反射防止
レーザー共振器やカメラレンズで、ブリュースター角で設置することでp偏光に対する反射損失をなくす（Brewster window）。

### サングラス
釣り人・ドライバー用の偏光サングラスは、水面・路面からの反射光（主にs偏光）を遮断する設計。ブリュースター角周辺での水面反射はほぼ完全にs偏光。

### 液晶ディスプレイ
特定偏光のみを通すため、偏光板を活用。

## 数式的確認

$r_p = 0$ の条件 $n_2\\cos\\theta_i = n_1\\cos\\theta_t$ にスネルの法則 $n_1\\sin\\theta_i = n_2\\sin\\theta_t$ を代入すると：
$$\\tan\\theta_i = n_2/n_1$$

が得られる。$n_2 > n_1$ なら $\\theta_B > 45°$。

## s偏光には存在しない

s偏光の反射係数 $r_s$ は全ての角度で非零。だからブリュースター角では**p偏光だけが消え、s偏光だけが反射**する。これが偏光分離の物理的本質。`,
  },
  {
    id: "fermi-dirac-statistics",
    title: "フェルミ分布と低温の性質",
    field: "statistical",
    category: "concept",
    summary: "パウリの排他原理から出る分布関数、フェルミ面、低温での特殊挙動、金属電子系",
    readMinutes: 6,
    relatedProblems: ["titech-2025-phys-2", "kyushu-2022-phys-2"],
    relatedTopics: ["density-of-states", "heat-capacity-temperature", "canonical-ensemble"],
    content: `## フェルミ分布

同一量子状態に 2 粒子入れない（パウリの排他原理）フェルミ粒子の平均占有数：
$$\\boxed{f(\\varepsilon) = \\frac{1}{e^{(\\varepsilon-\\mu)/k_BT} + 1}}$$

$\\mu$ は**化学ポテンシャル**（絶対零度での**フェルミエネルギー** $\\varepsilon_F$）。

## 極限的振る舞い

### 絶対零度 $T \\to 0$
$f$ はステップ関数：
- $\\varepsilon < \\varepsilon_F$ で $f = 1$（完全占有）
- $\\varepsilon > \\varepsilon_F$ で $f = 0$（空）

**フェルミ面** $\\varepsilon = \\varepsilon_F$ で境界。

### 高温極限 $k_BT \\gg \\varepsilon_F$
$f \\to e^{-(\\varepsilon - \\mu)/k_BT}$（Maxwell-Boltzmann 分布に戻る）。

### 有限温度
フェルミ面近傍で $\\sim k_BT$ 幅でぼやける。

## フェルミエネルギー

$T = 0$ で全粒子が埋める最高エネルギー：
$$\\varepsilon_F = \\frac{\\hbar^2}{2m}(3\\pi^2 n)^{2/3}$$
（3次元、スピン2重縮退）。$n = N/V$ は粒子数密度。

### 典型値（金属）
銅の自由電子：$\\varepsilon_F \\approx 7$ eV → $T_F = \\varepsilon_F/k_B \\approx 80000$ K。

→ 室温 $T = 300$ K は $T \\ll T_F$、**縮退フェルミ気体**の領域。

## 物理的帰結

### 電子比熱が線形
$C_V^{\\text{電子}} \\propto T$。フェルミ面近傍の $\\sim k_BT/\\varepsilon_F$ の電子だけが熱励起に参加。

### 金属の電気伝導
フェルミ面の電子だけが流れに寄与。銅の $\\sim 10^{23}$ 個の電子のうち、実質参加するのは $\\sim 10^{20}$ 個程度。

### 縮退圧
$T = 0$ でも圧力 $P \\ne 0$：
$$P = \\frac{2}{5}n\\varepsilon_F$$

**白色矮星・中性子星**がこの圧力で支えられる（Chandrasekhar limit）。

### ゼーマン効果
磁場中でフェルミ面が上向きスピンと下向きスピンで分裂 → 磁化。

## 半導体との関係

半導体では伝導帯のフェルミレベルがギャップ中央付近。低温で伝導電子が少なく、温度上昇で急増（$\\propto e^{-E_g/(2k_BT)}$）。

## 実験的決定

- 光電子分光（ARPES）：フェルミ面の直接観測
- de Haas-van Alphen 効果：振動周期からフェルミ面の面積
- 電子比熱測定：$C_V/T$ のインターセプトから状態密度

## 躓きポイント

### $\\mu$ と $\\varepsilon_F$ の区別
厳密には $\\mu(T)$ は温度依存。$T = 0$ で $\\mu = \\varepsilon_F$。$T > 0$ でわずかに減少（Sommerfeld 展開）。

### 低温で古典統計を使う誤り
室温の電子も「量子縮退」している。古典的等分配則で $C_V \\sim Nk_B$ と計算すると実験の 100 倍違う。`,
  },
  {
    id: "bose-einstein-statistics",
    title: "ボース分布と凝縮",
    field: "statistical",
    category: "concept",
    summary: "基底状態への巨視的凝縮、超流動と関連、光子気体との違い",
    readMinutes: 5,
    relatedProblems: ["kyodai-2023-phys-2"],
    relatedTopics: ["fermi-dirac-statistics", "density-of-states"],
    content: `## ボース分布

同一状態に**何個でも入れる**ボース粒子の平均占有数：
$$\\boxed{f(\\varepsilon) = \\frac{1}{e^{(\\varepsilon - \\mu)/k_BT} - 1}}$$

フェルミ（$+1$）との違いは分母の $-1$。

## 化学ポテンシャルの制約

$\\varepsilon = 0$（基底）の占有数が有限である必要 → $\\mu < 0$（質量なし粒子は $\\mu = 0$ でも OK）。

$\\mu$ が $0$ に近づくと基底状態の占有が発散 → **凝縮**。

## ボース・アインシュタイン凝縮（BEC）

### 凝縮温度
$T_c$ 以下で、巨視的な粒子数が**基底状態に落ちる**：
$$k_BT_c = \\frac{2\\pi\\hbar^2}{m}\\left(\\frac{n}{\\zeta(3/2)}\\right)^{2/3}$$

### 凝縮体粒子数
$T < T_c$ で：
$$N_0(T) = N\\left[1 - (T/T_c)^{3/2}\\right]$$

$T = 0$ で全粒子が基底状態。

## 歴史的・実験的

- 1924：Bose と Einstein の理論予測
- 1995：Cornell, Wieman, Ketterle による気体 BEC 実現（Rb, Na 原子）→ 2001年ノーベル賞
- 温度：$\\sim 100$ nK
- 粒子数：$10^5-10^7$ 個

## 超流動ヘリウム（$^4$He）

$T_\\lambda = 2.17$ K 以下で粘性ゼロの超流動状態。BEC の類似現象（ただし相互作用が強いので純粋な BEC ではない）。

## 光子気体（$\\mu = 0$）

光子は質量ゼロ、数保存則がない（$\\mu = 0$）→ 凝縮なし。代わりにPlanck 分布 → 黒体輻射。

## フォノン気体

固体の格子振動もボース粒子。低温で $C_V \\propto T^3$（Debye 則）の起源。

## フェルミとの対比

| | フェルミ | ボース |
|---|---|---|
| 占有制限 | 1個まで | 無制限 |
| 基底状態 | 多数粒子が埋める | 全粒子が落ちうる |
| 例 | 電子、陽子、中性子 | 光子、フォノン、$^4$He |
| 圧力 | 常に正（縮退圧） | 相転移あり |

## 現代の実験

- 光格子中の BEC：量子シミュレーション
- ポラリトン BEC：半導体中で室温近く実現
- 超固体：BECと結晶が共存する新状態

## 躓きポイント

### 「古典極限」
$\\mu \\ll -k_BT$（希薄・高温）で古典 Maxwell-Boltzmann に戻る。

### 「相互作用の役割」
理想気体でも BEC は起こる（相互作用は本質ではない）。ただし実在系では相互作用が超流動性などを付与。`,
  },
  {
    id: "resonance-q-factor",
    title: "共振とQ値",
    field: "mechanics",
    category: "concept",
    summary: "振幅最大化の条件、Q値の意味（鋭さ・減衰・蓄積）、応用例",
    readMinutes: 5,
    relatedProblems: ["nagoya-2022-phys-1", "ynu-2024-phys-2", "tsukuba-2022-phys-1"],
    relatedTopics: ["damped-oscillation", "impedance"],
    content: `## 共振現象

駆動力の振動数 $\\omega$ が系の固有振動数 $\\omega_0$ に近づくと、応答振幅が急増する現象。

## 強制減衰振動

バネ−質量系に駆動力 $F_0\\cos\\omega t$ を加えた方程式：
$$m\\ddot x + b\\dot x + kx = F_0\\cos\\omega t$$

定常解 $x = A\\cos(\\omega t - \\phi)$ の振幅：
$$A = \\frac{F_0}{\\sqrt{(k - m\\omega^2)^2 + (b\\omega)^2}}$$

$\\omega$ の関数として最大をとる（共振）。

## 共振振動数

$dA/d\\omega = 0$ から（弱減衰極限で）：
$$\\omega_{\\text{res}} \\approx \\omega_0 = \\sqrt{k/m}$$

## Q値の定義

**品質因子** $Q$：
$$Q = \\frac{\\omega_0 m}{b} = \\frac{\\omega_0}{\\Delta\\omega}$$

$\\Delta\\omega$ は共振曲線の**半値幅**（振幅が最大値の $1/\\sqrt 2$ になる幅）。

## Q値の3つの同等な解釈

### 1. 共振の鋭さ
$Q$ 大 → 共振ピークが鋭い、特定周波数だけ強く応答。

### 2. 減衰の遅さ
自由減衰振動 $x \\propto e^{-t/\\tau}\\cos\\omega t$ で、エネルギーが $1/e$ に減るまでに約 $Q/\\pi$ 振動。

### 3. エネルギー蓄積
$Q = 2\\pi\\times\\frac{\\text{蓄積エネルギー}}{\\text{1周期あたりの散逸}}$

## 典型的な Q値

| 系 | Q |
|---|---|
| 自動車サスペンション | ~1 |
| 木琴 | ~100 |
| 音叉 | ~1000 |
| 水晶振動子 | ~10⁶ |
| 原子時計 | ~10¹¹ |
| 一部の超伝導共振器 | ~10¹² |

## 共振の応用

### ラジオのチューニング
LC 回路の共振で特定の周波数だけ選択受信。

### NMR・MRI
核スピンの歳差運動と RF パルスの共鳴。

### 楽器
弦・管・膜の固有モードが音色を決定。

### レーザー
光共振器（Fabry-Perot）の高 Q が狭線幅を実現。

### 原子時計
セシウム原子のエネルギー遷移の共鳴線を使って時間標準。

## 共振の危険

- タコマ橋の崩壊（1940）：風と橋の固有モード共鳴
- 機械の共振破壊
- スピーカーのハウリング

設計では**共振周波数を外す**か**Q を下げる**（ダンピング追加）のが対策。

## 位相

振幅だけでなく位相も重要。$\\omega < \\omega_0$ では応答が力と同位相（小さな遅れ）、$\\omega = \\omega_0$ で $\\pi/2$ 遅れ、$\\omega > \\omega_0$ で $\\pi$ 遅れ（反位相）。

## 躓きポイント

**強減衰では共振がない**：$b^2 > 4mk$ で振動すらしない（オーバーダンプ）。共振は弱減衰でのみ意味がある。`,
  },
  {
    id: "coriolis-force",
    title: "コリオリ力：回転座標系の見かけの力",
    field: "mechanics",
    category: "concept",
    summary: "地球自転による偏向、台風の渦、フーコー振り子、貿易風の起源",
    readMinutes: 5,
    relatedProblems: ["nagoya-2023-phys-1"],
    relatedTopics: ["equation-of-motion", "polar-coords-derivatives"],
    content: `## 回転座標系の運動方程式

角速度 $\\vec\\Omega$ で回転する座標系では、慣性系での運動方程式に「見かけの力」が加わる：
$$m\\vec a_{\\text{rot}} = \\vec F - 2m\\vec\\Omega\\times\\vec v_{\\text{rot}} - m\\vec\\Omega\\times(\\vec\\Omega\\times\\vec r)$$

第2項が**コリオリ力**、第3項が**遠心力**。

## コリオリ力の特徴

$$\\vec F_C = -2m\\vec\\Omega\\times\\vec v$$

- 速度が**ゼロなら働かない**
- 速度に**垂直**（仕事をしない）
- 北半球では進行方向の**右向き**に偏向（南半球は左）

## 地球上での例

### 貿易風（大気循環）
赤道で温められた空気は上昇して極方向へ。コリオリ力で東西方向に偏向 → 北半球の北東貿易風、南半球の南東貿易風。

### 台風の渦
低気圧中心へ流れ込む空気がコリオリ力で反時計回り（北半球）に偏向 → 渦巻き構造。赤道付近（コリオリ弱い）では台風が発生しにくい。

### フーコー振り子
長い振り子の振動面が地球自転により回転。パリの Pantheon の実験（1851）で自転を直接実証。

$$T_{\\text{回転}} = \\frac{T_{\\text{自転}}}{\\sin\\lambda}$$
$\\lambda$ は緯度。極で約 24 時間、パリで約 32 時間。

### 落下物体の東偏
高所から落下させた物体は真下ではなく**東側にわずかにずれる**（約 $\\omega h^2/g$ オーダー）。

### 海流
表層海流（Ekman 流）も偏向。

## 遠心力との違い

| 力 | 速度依存 | 向き |
|---|---|---|
| 遠心力 | なし（位置のみ） | 回転軸から外向き |
| コリオリ力 | あり（$\\vec v$ 必要） | 速度に垂直 |

## なぜ「見かけの力」か

慣性系では存在しない。直進運動をしている物体を、回転系の観測者が見ると曲がって見える。それを「力が働いている」と解釈するのがコリオリ力。

## 実用計算

地球（$\\Omega = 7.3\\times 10^{-5}$ rad/s）、緯度 $\\lambda$ で速度 $v$：
$$F_C \\approx 2m\\Omega v\\sin\\lambda$$

時速 100 km/h（≈28 m/s）の車が東京（$\\lambda = 35°$）で受けるコリオリ力：$2\\cdot 0.7\\cdot 10^{-4}\\cdot 28\\cdot 0.57 \\sim 2\\times 10^{-3}$ m/s² $\\sim g/5000$。日常的には感じないが大気循環スケールでは決定的。

## 躓きポイント

- **静止物体にも遠心力は働く**が、コリオリは働かない
- **静止系 vs 回転系**：同じ運動でも記述が違う。どちらで考えるか最初に決める`,
  },
  {
    id: "variational-principle",
    title: "変分原理：最小作用の原理",
    field: "general",
    category: "concept",
    summary: "フェルマー、ハミルトンの原理、オイラー・ラグランジュ方程式の出発点、量子力学の経路積分へ",
    readMinutes: 5,
    relatedProblems: ["kyushu-2023-phys-1"],
    relatedTopics: ["lagrangian-basics", "euler-lagrange"],
    content: `## 変分原理とは

物理系の挙動は「**ある量（作用、光路長等）が停留値をとる**」という**積分条件**で決まる、という発想。

## 例1：フェルマーの原理（光学）

光線は2点間で**光路長が停留**する経路を通る：
$$\\delta\\int n(\\vec r)\\,ds = 0$$

### 帰結
- 直進（均一媒質）
- スネルの法則（境界）
- 重力レンズ効果（一般相対論では計量 $ds$ が歪む）

## 例2：ハミルトンの原理（力学）

系は**作用** $S = \\int L\\,dt$ が停留する経路で運動する：
$$\\delta S = \\delta\\int_{t_1}^{t_2} L(q, \\dot q, t)dt = 0$$

変分を計算するとオイラー・ラグランジュ方程式：
$$\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot q} - \\frac{\\partial L}{\\partial q} = 0$$

**境界条件**：$t_1, t_2$ で $q$ を固定して、間の経路を変化させる。

## 例3：熱力学の変分

- 平衡：自由エネルギー $F$ が最小
- 不可逆過程：エントロピー $S$ が最大

## 例4：量子力学の経路積分（Feynman）

量子振幅は**全経路の和**：
$$\\langle f|i\\rangle = \\int\\mathcal{D}q(t)\\,e^{iS[q]/\\hbar}$$

古典極限 $\\hbar \\to 0$ で、$S$ が停留する経路だけが残り（定常位相近似）、**ハミルトンの原理**が復元される。

## なぜ変分原理が自然か

**ファインマン**の経路積分的解釈では「粒子は全ての経路を同時に試しているが、古典的な極限では $S$ が停留する経路以外は干渉で打ち消し合う」。

## 変分計算の仕方

### ステップ1：汎関数 $J[q]$ を書く
$$J[q] = \\int_a^b F(q, \\dot q, x)dx$$

### ステップ2：変分 $q \\to q + \\delta q$
境界条件 $\\delta q(a) = \\delta q(b) = 0$ を仮定。

### ステップ3：$\\delta J = 0$ を計算
部分積分して境界項を消す → **オイラー・ラグランジュ方程式**：
$$\\frac{\\partial F}{\\partial q} - \\frac{d}{dx}\\frac{\\partial F}{\\partial\\dot q} = 0$$

## 具体例：最短曲線（測地線）

$J = \\int\\sqrt{1 + \\dot y^2}\\,dx$ を最小化。オイラー・ラグランジュから $\\ddot y = 0$ → 直線。

## 応用

- **弦理論**：世界面の面積を最小化する世界面
- **一般相対論**：時空の計量が Einstein-Hilbert 作用を停留
- **場の理論**：標準模型のラグランジアン密度が作用原理の出発点

## 躓きポイント

### 「最小」ではなく「停留」
実際には鞍点（極値）もあり得る。極大・鞍点・極小を区別できないので「最小作用」は少し誤解を招く呼称。

### 変分 $\\delta q$ と微分 $dq$
$\\delta$ は経路の「形」の変化、$d$ は同じ経路上の「点」の変化。別の操作。`,
  },
  {
    id: "damped-oscillation",
    title: "減衰振動の3つの領域",
    field: "mechanics",
    category: "concept",
    summary: "弱減衰（振動＋減衰）・臨界減衰・過減衰の違い、実例、回路との類似",
    readMinutes: 4,
    relatedProblems: ["nagoya-2022-phys-1"],
    relatedTopics: ["small-oscillations", "resonance-q-factor"],
    content: `## 基本方程式

バネ・質量に速度比例の抵抗を加えた系：
$$m\\ddot x + b\\dot x + kx = 0$$

**特性方程式** $m\\lambda^2 + b\\lambda + k = 0$ の解：
$$\\lambda = \\frac{-b \\pm\\sqrt{b^2 - 4mk}}{2m}$$

判別式 $b^2 - 4mk$ の符号で3領域に分かれる。

## 3つの領域

### 弱減衰（$b^2 < 4mk$）
$\\lambda$ が複素数。
$$x(t) = e^{-\\gamma t}(A\\cos\\omega_1 t + B\\sin\\omega_1 t)$$
- $\\gamma = b/(2m)$（減衰率）
- $\\omega_1 = \\sqrt{k/m - \\gamma^2}$（減衰振動数）

**振動しながら減衰**。音叉、弦楽器、一般的な機械系。

### 臨界減衰（$b^2 = 4mk$）
$\\lambda = -b/(2m)$ の重解。
$$x(t) = (A + Bt)e^{-\\gamma t}$$

**振動せずに最速で静止**。自動車のショックアブソーバー、電気メーターの指針。

### 過減衰（$b^2 > 4mk$）
$\\lambda$ が異なる実数。
$$x(t) = Ae^{\\lambda_1 t} + Be^{\\lambda_2 t}$$

**振動せずゆっくり静止**。粘性の強い系、古い体重計。

## Q値との関係

$Q = \\omega_0/(2\\gamma) = \\sqrt{mk}/b$：
- $Q > 1/2$：弱減衰
- $Q = 1/2$：臨界
- $Q < 1/2$：過減衰

Q が大きいほど振動が長く続く。

## エネルギー散逸

弱減衰では $\\langle E\\rangle \\propto e^{-t/\\tau}$、$\\tau = 1/(2\\gamma) = m/b$。

**1振動で失うエネルギー**：$2\\pi/Q$（倍）。$Q$ が Q 因子の定義（「$2\\pi$ × 蓄積/散逸」）と整合。

## RLC 回路との対応

| 力学 | 電気 |
|---|---|
| 質量 $m$ | インダクタンス $L$ |
| 抵抗 $b$ | 抵抗 $R$ |
| バネ $k$ | $1/C$ |
| 位置 $x$ | 電荷 $Q$ |

方程式：$L\\ddot Q + R\\dot Q + Q/C = 0$。完全に同じ形。

## 実用例

### ドアクローザー
過減衰か臨界近く。バタンと鳴らない。

### 車のサスペンション
臨界減衰が理想（振動しない・最速復元）。

### 地震計
弱減衰（振動を記録しつつ信号として出力）。

### 原子核
共鳴状態の寿命は $1/\\gamma$。

## 躓きポイント

### 減衰率の定義
$\\gamma$ を「半値」にするか「1/e」にするかで定数が 2 倍違う。$e^{-\\gamma t}$ の $\\gamma$ とエネルギーの $e^{-2\\gamma t}$ を混同しない。

### 過減衰でも2つの時定数
$\\lambda_1, \\lambda_2$ 両方あり、短いほうが支配的になるまでやや時間がかかる。`,
  },
  {
    id: "impedance",
    title: "インピーダンス：交流回路の万能言語",
    field: "electromagnetism",
    category: "concept",
    summary: "抵抗・コンデンサ・コイルの複素表示、直列・並列、共振、電力因数",
    readMinutes: 5,
    relatedProblems: ["ynu-2024-phys-2", "tsukuba-2022-phys-1"],
    relatedTopics: ["resonance-q-factor"],
    content: `## インピーダンスとは

交流回路で「電圧／電流」の比を表す複素数：
$$Z = V/I$$

位相差も含めてひとつの数に収められる。

## 各素子のインピーダンス

複素振動 $e^{i\\omega t}$ で考えると：

| 素子 | $Z$ |
|---|---|
| 抵抗 $R$ | $R$（実数） |
| インダクタ $L$ | $i\\omega L$（純虚数、正） |
| キャパシタ $C$ | $1/(i\\omega C) = -i/(\\omega C)$（純虚数、負） |

## 振る舞い

### 抵抗
電流と電圧が同位相。常にエネルギー消費。

### インダクタ
電流が電圧より**π/2 遅れる**。高周波で大きなインピーダンス（$\\omega L$）、DC では短絡（$\\omega = 0 \\to Z = 0$）。

### キャパシタ
電流が電圧より**π/2 進む**。低周波で大きなインピーダンス、高周波で短絡。

## 直列・並列

### 直列
$Z = Z_1 + Z_2 + Z_3 + \\cdots$

### 並列
$1/Z = 1/Z_1 + 1/Z_2 + \\cdots$

抵抗と同じ規則。複素数で計算。

## RLC 直列回路

$$Z = R + i\\left(\\omega L - \\frac{1}{\\omega C}\\right)$$

### 共振条件
虚部ゼロ：
$$\\omega_0 = 1/\\sqrt{LC}$$

このとき $|Z| = R$ で最小、電流最大。

### 位相
$\\tan\\phi = (\\omega L - 1/(\\omega C))/R$

- $\\omega < \\omega_0$：$\\phi < 0$（容量性、電流が進む）
- $\\omega > \\omega_0$：$\\phi > 0$（誘導性、電流が遅れる）

## 電力因数

平均消費電力：
$$P = \\frac{1}{2}V_0 I_0 \\cos\\phi$$

$\\cos\\phi$ が**電力因数**（power factor）。

### 産業応用
モーター等の誘導性負荷は $\\cos\\phi < 1$ で無効電力が大きい → コンデンサで補償して電力会社の損失を減らす。

## フィルター

- **ハイパスフィルター**：$R$ と $C$ で低周波を遮断
- **ローパスフィルター**：逆配置で高周波を遮断
- **バンドパス**：RLC で特定帯域のみ通す

カットオフ周波数 $\\omega_c = 1/RC$。

## 複素電力

複素電力 $S = VI^* = P + iQ$：
- $P$（実部）：有効電力（熱・仕事）
- $Q$（虚部）：無効電力（充放電で往復）

## 躓きポイント

### 実数 vs 複素数
物理的な電圧・電流は実数。計算中に複素表示、最終結果で実部を取る。

### 時間平均の 1/2 因子
正弦波の平均パワーは**振幅の2乗の半分**（$|V|^2/(2R)$）。実効値（RMS）なら 1/2 不要（$V_{RMS}^2/R$）。`,
  },
  {
    id: "dispersion-relation",
    title: "分散関係と群速度",
    field: "general",
    category: "concept",
    summary: "$\\omega(k)$ が波の性質を決める。位相速度と群速度の違い、物理系による分散の形",
    readMinutes: 5,
    relatedProblems: ["kyodai-2023-phys-1", "ynu-2021-phys-2"],
    relatedTopics: ["wave-equation"],
    content: `## 分散関係とは

波の振動数 $\\omega$ と波数 $k$ の関係 $\\omega = \\omega(k)$。波の伝播性質をすべて決める。

## 典型的な分散関係

| 系 | 分散関係 |
|---|---|
| 真空中の電磁波 | $\\omega = ck$（**線形**） |
| 音波 | $\\omega = vk$（線形） |
| 弦の振動 | $\\omega = vk$ |
| 深海波 | $\\omega = \\sqrt{gk}$ |
| 浅海波 | $\\omega = \\sqrt{gh}\\cdot k$（線形） |
| 量子自由粒子 | $\\omega = \\hbar k^2/(2m)$ |
| 相対論粒子 | $\\omega = \\sqrt{(ck)^2 + (mc^2/\\hbar)^2}$ |
| フォノン（1次元鎖） | $\\omega = 2\\sqrt{k/m}|\\sin(ka/2)|$ |

## 位相速度

単一の平面波 $e^{i(kx - \\omega t)}$ の等位相線が進む速度：
$$v_p = \\omega/k$$

## 群速度

波束（複数の $k$ の重ね合わせ）のエネルギーが運ばれる速度：
$$v_g = d\\omega/dk$$

**物理的な情報伝達はこちら**。

## 線形分散（非分散媒質）

$\\omega = vk$ なら $v_p = v_g = v$：
- 波束が形を保って伝わる
- 例：真空中の電磁波、弦

## 非線形分散（分散媒質）

$\\omega(k)$ が非線形 → $v_p \\ne v_g$：
- 波束が時間と共に広がる（dispersion）
- 量子力学の波束は必ず広がる（$\\omega \\propto k^2$）

### 例：水面波の群速度
深海波は $v_g = v_p/2$。大波の群（うねり）が個々の波よりゆっくり進む。

## 量子自由粒子

$\\omega = \\hbar k^2/(2m)$：
- $v_p = \\hbar k/(2m)$（粒子速度の半分）
- $v_g = \\hbar k/m = p/m = v_{\\text{粒子}}$

**群速度こそ古典的粒子速度**。位相速度には物理的意味が薄い。

## 相対論での特別性質

光速を超えられないのは**群速度**。位相速度は媒質によっては $c$ を超えうるが、これは情報伝達ではないので相対論と矛盾しない。

## 躓きポイント

### 真空中の電磁波は非分散
ただし屈折率 $n(\\omega)$ のある媒質では分散あり → プリズムでの虹、信号の劣化。

### 群速度が「負」
異常分散領域では $d\\omega/dk < 0$ ありうる。物理的な情報伝達速度は別に評価する必要あり。

### 長波長極限
多くの系で $k\\to 0$ で線形（音波的）。短波長で非線形性が現れる。`,
  },
  {
    id: "faraday-law",
    title: "ファラデーの法則：電磁誘導",
    field: "electromagnetism",
    category: "theorem",
    summary: "$\\oint\\vec E\\cdot d\\vec\\ell = -d\\Phi/dt$。レンツの法則、起電力、発電機と変圧器",
    readMinutes: 5,
    relatedProblems: ["hokkaido-2025-phys-2"],
    relatedTopics: ["maxwell-intuition", "impedance"],
    content: `## 法則

**磁束の時間変化が起電力を生む**：
$$\\mathcal{E} = \\oint\\vec E\\cdot d\\vec\\ell = -\\frac{d\\Phi_B}{dt}$$

$\\Phi_B = \\int\\vec B\\cdot d\\vec A$ は閉曲面を貫く磁束。

## レンツの法則

**誘導電流は、それ自身を生んだ磁束変化を妨げる向きに流れる**。

これは上の負号から自動的に出る。物理的にはエネルギー保存則の帰結。

### 例1：磁石を近づける
コイルに磁石の N 極を近づける → 磁束増加 → 誘導電流は磁石からの磁場に**反発する向き**に流れる（磁石を押し返す）。

### 例2：磁石を遠ざける
磁束減少 → 誘導電流は**引き戻す向き**に流れる。

## 発電機の原理

コイル（面積 $A$）を磁場 $B$ 中で角速度 $\\omega$ で回転：
$$\\Phi = BA\\cos\\omega t \\Rightarrow \\mathcal{E} = BA\\omega\\sin\\omega t$$

**交流起電力**が発生。電力会社の発電は基本的にこれ。

## 変圧器

1次コイル（巻数 $N_1$）の交流電流が2次コイル（$N_2$）に誘導起電力：
$$\\frac{V_2}{V_1} = \\frac{N_2}{N_1}$$

$N_2 > N_1$ で昇圧、$N_2 < N_1$ で降圧。送電網で長距離は高電圧（損失少）・家庭に低電圧で分配する仕組み。

## 誘導電場

磁束変化で**電荷がなくても電場が生じる**：
$$\\oint\\vec E\\cdot d\\vec\\ell = -\\frac{d\\Phi_B}{dt} \\Rightarrow \\nabla\\times\\vec E = -\\frac{\\partial\\vec B}{\\partial t}$$

これはマクスウェル方程式の3本目。電磁波の存在の一つの源。

## 自己インダクタンス

コイル自身の電流が自分の磁束を作り、その変化が起電力に：
$$\\mathcal{E} = -L\\frac{dI}{dt}$$

$L$ は**自己インダクタンス**。RL 回路の時定数 $\\tau = L/R$。

## 相互インダクタンス

2つのコイル間で：
$$\\mathcal{E}_2 = -M\\frac{dI_1}{dt}$$

変圧器・ワイヤレス充電の基本。

## 応用

- **IHクッキングヒーター**：交流磁場で鍋に渦電流 → 発熱
- **リニアモーター**：電磁誘導で推進
- **磁気シールド**：渦電流で外部磁場を遮蔽
- **非接触カード**：コイルでエネルギーと情報を電磁誘導で伝達

## 躓きポイント

### 符号
「磁束が増える方向」を正に取ると、誘導起電力は負。物理的には「抵抗する向き」に電流が流れる方向に起電力。

### 磁場変化 vs 導体運動
どちらも起電力を生む。相対論的には同じ現象の異なる見方。

### エネルギー保存
レンツの法則は直接的にエネルギー保存を保証する。逆向きの起電力なら永久機関が可能になってしまう。`,
  },
  {
    id: "matrix-elements",
    title: "行列要素の計算：量子力学の実用",
    field: "quantum",
    category: "technique",
    summary: "$\\langle f|\\hat O|i\\rangle$ の計算法、遷移確率、対称性の活用、パリティ・スピン積分",
    readMinutes: 5,
    relatedProblems: ["todai-2025-phys-3", "kyodai-2024-phys-1"],
    relatedTopics: ["bra-ket-notation", "selection-rules", "perturbation-theory"],
    content: `## 行列要素とは

量子演算子 $\\hat O$ の状態間のサンドイッチ：
$$\\langle f|\\hat O|i\\rangle = \\int \\psi_f^*(\\vec r)\\hat O\\psi_i(\\vec r)d^3r$$

物理的意味：
- $f = i$ なら**期待値** $\\langle\\hat O\\rangle$
- $f \\ne i$ なら**遷移行列要素**（遷移確率 $\\propto |\\langle f|\\hat O|i\\rangle|^2$）

## 計算の基本戦略

### 1. 対称性で絞り込む
積分が**奇関数 × 偶領域**ならゼロ。パリティ・角運動量の保存を活用。

### 2. 既知の関係式を使う
- $\\hat x = \\sqrt{\\hbar/(2m\\omega)}(\\hat a + \\hat a^\\dagger)$（調和振動子）
- $\\hat L_\\pm = \\hat L_x \\pm i\\hat L_y$（昇降演算子）
- $\\hat\\sigma_x, \\hat\\sigma_y$ のパウリ行列代数

### 3. 実際に積分
球面調和関数・動径関数の積分公式を使う。

## 例1：調和振動子の $\\langle n|\\hat x|m\\rangle$

生成消滅演算子で書き換えて瞬時に：
- $\\langle n-1|\\hat x|n\\rangle = \\sqrt{n\\hbar/(2m\\omega)}$
- $\\langle n+1|\\hat x|n\\rangle = \\sqrt{(n+1)\\hbar/(2m\\omega)}$
- それ以外はゼロ

**積分なしに計算**完了。

## 例2：水素原子の $\\langle 2s|\\hat z|2p_0\\rangle$

パリティ考察で非零と判定 → 具体積分：
$$\\langle 2s|\\hat z|2p_0\\rangle = \\int R_{20}^*(r)Y_{00}^*\\cdot r\\cos\\theta\\cdot R_{21}(r)Y_{10}d^3r = -3a_0$$

これがシュタルク効果の計算に使われる。

## 対称性の使い方

### パリティ
$\\hat P$ のもとで $|\\psi_{nlm}\\rangle$ は $(-1)^l$。$\\hat z$ は奇。
$$\\langle n'l'm'|\\hat z|nlm\\rangle \\ne 0 \\Leftrightarrow l+l'\\text{ は奇数}$$

### 角運動量の保存
$[\\hat O, \\hat L_z] = 0$ なら $\\hat O$ は $m$ を変えない → $\\langle m|\\hat O|m'\\rangle \\propto \\delta_{mm'}$。

### 回転対称性（Wigner-Eckart）
テンソル演算子を扱う一般的道具：
$$\\langle j'm'|\\hat T^{(k)}_q|jm\\rangle = \\langle jm;kq|j'm'\\rangle\\cdot\\langle j'\\|T^{(k)}\\|j\\rangle$$

Clebsch-Gordan 係数で遷移の許容/禁止を判定、換算行列要素 $\\langle\\|T\\|\\rangle$ で強度。

## フェルミの黄金律

摂動 $\\hat V$ による遷移確率（単位時間あたり）：
$$\\Gamma_{i\\to f} = \\frac{2\\pi}{\\hbar}|\\langle f|\\hat V|i\\rangle|^2\\rho(E_f)$$

$\\rho(E_f)$ は終状態の状態密度。**行列要素の2乗**が実験で観測される強度を決定する。

## 躓きポイント

### エルミート共役の扱い
$\\langle f|\\hat O|i\\rangle^* = \\langle i|\\hat O^\\dagger|f\\rangle$。エルミート演算子なら $= \\langle i|\\hat O|f\\rangle$。

### 規格化
波動関数の規格化と行列要素の値は整合させる必要あり。

### 数値的計算
解析解がない場合、対称性で絞ってから数値積分。`,
  },

  // ========== 低優先 30 個（1問でのみ登場、コンセエント版） ==========
  {
    id: "bloch-theorem",
    title: "Bloch 定理とバンド構造",
    field: "statistical",
    category: "theorem",
    summary: "周期ポテンシャル中の電子状態。バンドギャップ、結晶運動量、金属と絶縁体の違い",
    readMinutes: 4,
    relatedProblems: ["kyushu-2023-phys-2"],
    content: `## Bloch 定理

周期 $a$ のポテンシャル $V(x+a) = V(x)$ 中の電子の波動関数は：
$$\\psi_k(x) = e^{ikx}u_k(x), \\quad u_k(x+a) = u_k(x)$$

「平面波 × 周期関数」の形。$k$ は**結晶運動量**（第一ブリルアンゾーン内）。

## バンド構造の発生

各 $k$ に対して離散的な固有エネルギー $E_n(k)$ が無限個存在。連続なエネルギー帯（**バンド**）と、その間の**バンドギャップ**が交互に現れる。

## 金属・絶縁体・半導体

- **金属**：フェルミ準位がバンド中（自由に動ける電子あり）
- **絶縁体**：フェルミ準位がギャップ中、ギャップ大（$E_g \\gg k_BT$）
- **半導体**：同上、$E_g \\sim 1$ eV（室温で熱励起あり）

## バンドギャップの起源

Bragg 反射 $k = n\\pi/a$ で進行波と反射波が定在波を形成 → エネルギー差 = ギャップ。

$$E_{\\text{gap}} \\sim 2|V_{2\\pi/a}|$$

ポテンシャルのフーリエ成分。

## 有効質量

バンド端付近で $E(k) \\approx E_0 + \\hbar^2 k^2/(2m^*)$ と展開すると、$m^*$ が**有効質量**。格子の効果が粒子のように振る舞う。

## 応用

半導体デバイス（トランジスタ・LED・太陽電池）、金属の電気伝導、磁性、超伝導…現代固体物理の基礎。`,
  },
  {
    id: "debye-model",
    title: "Debye 模型と低温比熱",
    field: "statistical",
    category: "concept",
    summary: "格子振動を連続的な音波モードとして扱う。$T^3$ 則の導出",
    readMinutes: 3,
    relatedProblems: ["hokkaido-2021-phys-2"],
    relatedTopics: ["density-of-states", "heat-capacity-temperature"],
    content: `## 基本アイデア

固体の格子振動を**音波**として扱う。長波長では連続弾性体の近似が成立：
$$\\omega = vk$$

### 状態密度
3次元・3モード（縦1・横2）：
$$D(\\omega) = \\frac{3V\\omega^2}{2\\pi^2 v^3}$$

## Debye 振動数

全モード数 $= 3N$ の条件で切断：
$$\\omega_D^3 = 6\\pi^2 v^3 N/V$$

Debye 温度 $\\Theta_D = \\hbar\\omega_D/k_B$：金属で $\\sim 100-500$ K。

## 比熱

### 高温 $T \\gg \\Theta_D$
Dulong-Petit 則：$C_V \\to 3Nk_B$

### 低温 $T \\ll \\Theta_D$
$$C_V \\approx \\frac{12\\pi^4}{5}Nk_B(T/\\Theta_D)^3$$

**$T^3$ 則**。Einstein 模型の指数減衰より実験と合う。

## 躓きポイント

Einstein 模型では各原子が独立振動として扱い、低温で $C_V \\propto e^{-\\Theta_E/T}$ となり合わない。Debye 模型の長波長モードが $T^3$ の起源。`,
  },
  {
    id: "tunneling",
    title: "量子トンネル効果",
    field: "quantum",
    category: "concept",
    summary: "古典的に越えられない障壁を量子的に通過する。$\\alpha$ 崩壊、STM、半導体接合",
    readMinutes: 4,
    relatedProblems: ["hokkaido-2024-phys-1"],
    content: `## 基本

高さ $V_0$ の障壁にエネルギー $E < V_0$ の粒子が入射。古典的には反射するが量子的には一部が透過する。

## 透過率

幅 $L$、高さ $V_0 - E$ の矩形障壁の場合、弱透過極限で：
$$T \\approx 16\\frac{E(V_0-E)}{V_0^2}e^{-2\\kappa L}$$

$\\kappa = \\sqrt{2m(V_0-E)}/\\hbar$。**指数減衰**が決定的。

## 波動関数

障壁内で $\\psi \\propto e^{-\\kappa x}$：消滅せず指数的に減衰する「エバネッセント波」。

## 応用

### $\\alpha$ 崩壊
原子核内の $\\alpha$ 粒子がクーロン障壁をトンネルで脱出。
寿命が指数的に分布（ガモフ理論、1928）。

### 走査トンネル顕微鏡（STM）
針と試料の間を電子がトンネル。距離精度 $\\sim 0.1$ Å、原子分解能。

### 半導体接合
順方向接合のバンドを通過する電子、ツェナーダイオードの動作。

### 核融合
太陽中心で陽子同士が反発障壁をトンネルで突破して融合。これなしでは太陽は光らない。

## 躓きポイント

- 透過率は**指数的に小さい**が、$10^{23}$ 個粒子あれば少数が透過
- 粒子の「確率密度」の話であり、「粒子の一部」が通るわけではない`,
  },
  {
    id: "photoelectric-effect",
    title: "光電効果と光量子仮説",
    field: "quantum",
    category: "concept",
    summary: "アインシュタインの光量子論、エネルギー・振動数の関係、仕事関数、量子力学の起源の一つ",
    readMinutes: 3,
    relatedProblems: ["kyushu-2025-phys-2"],
    content: `## 現象

金属に光を当てると電子が飛び出す。1887年に Hertz が発見。

**古典電磁気学では説明できない**3つの特徴：
1. 振動数 $\\nu < \\nu_0$ では**どれほど強くしても**電子が出ない
2. $\\nu > \\nu_0$ では**非常に弱い光でも**即座に出る
3. 最大運動エネルギーは振動数のみで決まり、強度には依らない

## アインシュタインの光量子仮説（1905）

光は振動数 $\\nu$ の**粒子（光子）**の集まり。各光子のエネルギー：
$$E_{\\text{photon}} = h\\nu$$

1光子が1電子にエネルギーを渡す。仕事関数 $W$ を超えれば脱出：
$$K_{\\max} = h\\nu - W$$

## 仕事関数

金属から電子1個を取り出すのに必要な最小エネルギー。仕事関数は金属ごとに異なる（$W \\sim 2-5$ eV）。

## 閾値振動数

$\\nu_0 = W/h$。これ以下は効果なし。

## ミリカンの精密実験（1914）

$K_{\\max}$ vs $\\nu$ プロットの**傾きから $h$ を測定**。プランク定数が確定。アインシュタインのノーベル賞（1921）はこの仕事。

## 現代的意義

- 光の粒子性の実験的証明
- 量子力学の出発点の一つ
- 太陽電池・光検出器の動作原理

## 躓きポイント

古典的な波動論では、強度を上げれば電子は出るはず（エネルギーが蓄積される）。しかし**閾値以下では絶対出ない**ことが粒子説の決定的証拠。`,
  },
  {
    id: "lorentz-transformation",
    title: "ローレンツ変換と時空",
    field: "relativity",
    category: "technique",
    summary: "慣性系間の時空座標変換、時間の遅れと Lorentz 収縮の導出",
    readMinutes: 4,
    relatedProblems: ["titech-2024-phys-1"],
    content: `## 変換式

$S'$ が $S$ に対して $x$ 方向に速度 $v$ で運動する場合（$\\beta = v/c$、$\\gamma = 1/\\sqrt{1-\\beta^2}$）：
$$ct' = \\gamma(ct - \\beta x), \\quad x' = \\gamma(x - \\beta ct)$$
$$y' = y, \\quad z' = z$$

## 不変量

ミンコフスキー計量 $ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2$（あるいは符号逆）は全慣性系で同じ。

## 時間の遅れ

$S$ で静止した時計（固有時間 $\\Delta\\tau$）を $S'$ から見る：
$$\\Delta t' = \\gamma\\Delta\\tau$$

動いている時計は遅れる（ただし相対性から、どちらからもそう見える）。

## Lorentz 収縮

$S$ で固有長 $L_0$ の棒を $S'$ で測ると：
$$L' = L_0/\\gamma$$

動く物体は縮む（進行方向のみ）。

## 速度の合成

$v_1, v_2$ を単純に足さず：
$$v_{\\text{合}} = \\frac{v_1 + v_2}{1 + v_1 v_2/c^2}$$

光速を超えない。

## 実験的検証

- $\\mu$ 粒子の寿命延長（宇宙線・加速器）
- GPS 衛星の時計補正（毎日 $\\sim 45\\mu$s）
- 原子時計の高精度比較

## 躓きポイント

「動いている時計が遅れる」のは相互的（$S$ から $S'$、$S'$ から $S$、両方の時計が相手の時計を遅く見る）。矛盾なく成立するのは**同時性の相対性**があるため。`,
  },
  {
    id: "carnot-cycle",
    title: "カルノーサイクルと熱機関効率",
    field: "thermodynamics",
    category: "concept",
    summary: "理想可逆熱機関、$\\eta = 1 - T_L/T_H$、熱力学第2法則の具体化",
    readMinutes: 4,
    relatedProblems: ["tohoku-2025-phys-3"],
    relatedTopics: ["entropy-irreversibility"],
    content: `## サイクル構成

4 過程で元の状態に戻る：
1. **等温膨張**（温度 $T_H$）：熱 $Q_H$ を吸収
2. **断熱膨張**：温度が $T_H \\to T_L$ に低下
3. **等温圧縮**（温度 $T_L$）：熱 $Q_L$ を放出
4. **断熱圧縮**：温度が $T_L \\to T_H$ に戻る

## 効率

$$\\eta = \\frac{W_{\\text{net}}}{Q_H} = 1 - \\frac{Q_L}{Q_H} = 1 - \\frac{T_L}{T_H}$$

**温度比のみ**で決まる。作業物質の種類によらない。

## カルノーの定理

> 温度 $T_H, T_L$ の熱源間で動作する全ての熱機関の効率は**カルノー効率を超えられない**。等号は**可逆**なら成立。

## 実用的含意

- $T_L = 0$ でないと 100% にならない（第2法則）
- 火力発電所（$T_H \\sim 800$ K、$T_L \\sim 300$ K）：理論最大 $\\sim 62\\%$、実際 $\\sim 40\\%$
- より高温で動作する方が効率的

## 可逆性の要件

各過程が無限にゆっくり（準静的）、有限の温度差での熱交換なし、摩擦なし。実際の機関はこれらで大きく効率が落ちる。

## エントロピー的見方

可逆サイクル全体で $\\Delta S_{\\text{total}} = 0$：
- 気体：サイクルで元に戻る ⇒ $\\Delta S_{\\text{気}} = 0$
- 熱源：$-Q_H/T_H + Q_L/T_L = 0$（カルノー効率から自動的に）`,
  },
  {
    id: "maxwell-relations",
    title: "マクスウェル関係式",
    field: "thermodynamics",
    category: "theorem",
    summary: "熱力学ポテンシャルの2階偏微分の交換から出る4本の関係式、測定困難な量を導出",
    readMinutes: 4,
    relatedProblems: ["kyushu-2024-phys-2"],
    relatedTopics: ["entropy-irreversibility"],
    content: `## 4つのポテンシャル

| ポテンシャル | 自然変数 | 全微分 |
|---|---|---|
| 内部エネルギー $U$ | $(S, V)$ | $dU = TdS - PdV$ |
| ヘルムホルツ自由エネルギー $F$ | $(T, V)$ | $dF = -SdT - PdV$ |
| エンタルピー $H$ | $(S, P)$ | $dH = TdS + VdP$ |
| ギブズ自由エネルギー $G$ | $(T, P)$ | $dG = -SdT + VdP$ |

## Maxwell 関係式

各ポテンシャルの2階偏微分の交換から：

$$\\left(\\frac{\\partial T}{\\partial V}\\right)_S = -\\left(\\frac{\\partial P}{\\partial S}\\right)_V$$

$$\\left(\\frac{\\partial S}{\\partial V}\\right)_T = \\left(\\frac{\\partial P}{\\partial T}\\right)_V$$

$$\\left(\\frac{\\partial T}{\\partial P}\\right)_S = \\left(\\frac{\\partial V}{\\partial S}\\right)_P$$

$$\\left(\\frac{\\partial S}{\\partial P}\\right)_T = -\\left(\\frac{\\partial V}{\\partial T}\\right)_P$$

## 実用

**エントロピー変化** $(\\partial S/\\partial V)_T$ は直接測定できないが、右辺 $(\\partial P/\\partial T)_V$ は状態方程式から出る → エントロピーの温度・体積依存が計算可能。

## 例：理想気体
$(\\partial P/\\partial T)_V = nR/V$ から $(\\partial S/\\partial V)_T = nR/V$ → 等温膨張でのエントロピー増加 $\\Delta S = nR\\ln(V_f/V_i)$。

## 躓きポイント

固定する変数を明確にしないと関係式が混乱する。各ポテンシャルの「自然変数」を覚えるのがコツ。`,
  },
  {
    id: "central-limit-theorem",
    title: "中心極限定理",
    field: "math",
    category: "theorem",
    summary: "独立変数の和がガウス分布に近づく理由、統計力学・誤差論での重要性",
    readMinutes: 4,
    relatedProblems: ["tsukuba-2024-phys-2"],
    content: `## 主張

独立で同分布（i.i.d.）の確率変数 $X_1, \\ldots, X_N$（平均 $\\mu$、分散 $\\sigma^2$）の和：
$$S_N = \\sum X_i$$

の分布は、$N \\to \\infty$ で**ガウス分布**に近づく：
$$S_N \\sim \\mathcal{N}(N\\mu, N\\sigma^2)$$

## なぜ重要か

元の分布がどんな形でも（均一分布でも指数分布でも）、**和はガウス分布**。ガウス分布の普遍性の源。

## 相対揺らぎ

$\\sqrt{\\text{Var}(S_N)}/\\langle S_N\\rangle = \\sigma/(\\mu\\sqrt N)$

$N$ が大きいほど相対揺らぎが $1/\\sqrt N$ で減る。これが**熱力学極限で揺らぎがゼロに近い**理由。

## 物理での応用

### 統計力学
$10^{23}$ 粒子の平均量は確定値に見える（揺らぎが $10^{-11}$）。

### 測定誤差
多数回の測定平均値は真値に近づき、誤差 $\\propto 1/\\sqrt N$。

### ブラウン運動
粒子の変位は $\\sqrt{N}$ ステップで累積 → ガウス的広がり $\\propto\\sqrt t$。

### 拡散方程式
中心極限定理の連続極限が拡散方程式 $\\partial_t\\rho = D\\nabla^2\\rho$。

## 条件

- 独立
- 同分布（独立なら分布が違ってもよい Lyapunov 版もあり）
- 分散が有限（無限分散では破綻：Cauchy 分布など）

## 躓きポイント

### 「N が十分大きい」
実際には $N \\sim 30$ 以上でガウス近似がよく効く。

### 「個々は非ガウスでも」
元の分布の形は消える。これが"普遍性"の意味。`,
  },
  {
    id: "doppler-effect",
    title: "ドップラー効果",
    field: "mechanics",
    category: "concept",
    summary: "音波・光波の振動数シフト、救急車のサイレン、天文学の赤方偏移",
    readMinutes: 3,
    relatedProblems: ["ynu-2022-phys-1"],
    content: `## 音波（非相対論）

音速 $c$、音源が速度 $v_s$ で観測者に近づき、観測者が $v_o$ で音源に近づくとき、観測振動数：
$$f = \\frac{c + v_o}{c - v_s}f_0$$

符号は**近づく向きを正**に取る規約。

## 救急車のサイレン

近づく時は高音、遠ざかる時は低音。通り過ぎる瞬間に音程が下がる。

## 光波（相対論的）

光源が速度 $v$ で遠ざかるとき：
$$f = f_0\\sqrt{\\frac{1-\\beta}{1+\\beta}}$$

ここで $\\beta = v/c$。音波と違い、**媒質がない**ので「音源が動く」「観測者が動く」の区別がない。

## 天文学的応用

### 赤方偏移
遠方の銀河からの光は波長が伸びて観測される（宇宙膨張）。
$$z = \\frac{\\lambda_{\\text{観}} - \\lambda_0}{\\lambda_0}$$

ハッブルの法則：$v = H_0 d$、$d$ は距離。

### 恒星の運動
スペクトル線のドップラーシフトから視線方向速度を測定。太陽系外惑星発見法の一つ。

### CMB
宇宙マイクロ波背景放射に方向依存のドップラーシフト → 銀河系の固有運動の決定。

## 衝撃波

$v_s > c$（超音速）では**マッハ円錐**が形成。音波ドップラーの発散極限。

## 躓きポイント

### 音波と光波の違い
音波は媒質依存（$v_s, v_o$ が別々の役割）。光波は相対速度のみ。

### 相対論的変換
光波は特殊相対論で厳密。$v \\ll c$ で非相対論公式と一致。`,
  },
  {
    id: "fresnel-diffraction",
    title: "Fresnel 回折",
    field: "optics",
    category: "concept",
    summary: "近接場での光の回折、Fresnel 数、半波長ゾーン、Fraunhofer 極限への接続",
    readMinutes: 3,
    relatedProblems: ["hokkaido-2022-phys-1"],
    content: `## Fresnel 数

小円孔（半径 $a$）から距離 $d$、波長 $\\lambda$：
$$F = \\frac{a^2}{\\lambda d}$$

## 3領域

- $F \\gg 1$：幾何光学的影（シャドウ鋭い）
- $F \\sim 1$：**Fresnel 回折**（干渉縞が見える）
- $F \\ll 1$：**Fraunhofer 回折**（Airy パターン）

## 半波長ゾーン

孔を光路差 $\\lambda/2$ ごとに分ける同心円領域：
- 第1ゾーン：強め合う
- 第2ゾーン：打ち消す
- 第3ゾーン：強め合う ...

中心での振幅は交互に強め合い／打ち消し合い。

**偶数ゾーン見えれば暗、奇数ゾーン見えれば明**。

## Fresnel レンズ
半波長ゾーンで交互に位相反転させると、中心で全ゾーンが強め合う → レンズ効果。灯台の照明などに使われる。

## 躓きポイント

- Fresnel は**近接場**、Fraunhofer は**遠方場**
- 光源・観測者が有限距離なら Fresnel、無限遠なら Fraunhofer`,
  },
  {
    id: "planck-radiation",
    title: "Planck 輻射と量子化の起源",
    field: "statistical",
    category: "theorem",
    summary: "黒体輻射スペクトル、紫外発散の解消、$T^4$ 則、Wien 変位則",
    readMinutes: 4,
    relatedProblems: ["tsukuba-2023-phys-2"],
    content: `## Planck 公式

温度 $T$ の黒体から放射されるエネルギー密度（振動数 $\\nu$ あたり）：
$$u(\\nu, T) = \\frac{8\\pi h\\nu^3}{c^3}\\cdot\\frac{1}{e^{h\\nu/k_BT} - 1}$$

## 極限挙動

### 低振動数（Rayleigh-Jeans）
$h\\nu \\ll k_BT$：
$$u \\to \\frac{8\\pi\\nu^2}{c^3}k_BT$$

古典的等分配則と一致。ただし高振動数で発散（**紫外発散**）。

### 高振動数（Wien）
$h\\nu \\gg k_BT$：
$$u \\to \\frac{8\\pi h\\nu^3}{c^3}e^{-h\\nu/k_BT}$$

指数減衰で発散回避。

## 全エネルギー密度（Stefan-Boltzmann）

$$U = \\int u\\,d\\nu \\propto T^4$$

放射強度 $\\sigma T^4$（$\\sigma$ はステファン・ボルツマン定数）。
太陽定数からの太陽表面温度決定などに使用。

## Wien 変位則

最大値を与える振動数（または波長）：
$$\\lambda_{\\max}T = \\text{const}$$

- 人体（$T \\sim 310$ K）：$\\lambda \\sim 10\\mu$m（遠赤外）
- 太陽（$T \\sim 5800$ K）：$\\lambda \\sim 500$ nm（可視光）

## 歴史的意義

Planck（1900）が紫外発散を解消するために導入した $h\\nu$ の量子化が**量子力学の出発点**。本人は当初「数学的トリック」と考えていたが、Einstein が光量子仮説で物理的実体と主張。`,
  },
  {
    id: "clebsch-gordan",
    title: "クレプシュ・ゴルダン係数と角運動量合成",
    field: "quantum",
    category: "math",
    summary: "2つの角運動量を合成するときの係数、計算法の概要、1重項・3重項の具体例",
    readMinutes: 3,
    relatedProblems: ["todai-2023-phys-2"],
    content: `## 合成の規則

$j_1$ と $j_2$ を合成した全角運動量は：
$$|j_1 - j_2| \\leq j \\leq j_1 + j_2$$

全状態数：$(2j_1+1)(2j_2+1) = \\sum_{j=|j_1-j_2|}^{j_1+j_2}(2j+1)$

## クレプシュ・ゴルダン展開

$$|j, m\\rangle = \\sum_{m_1 + m_2 = m}C^{jm}_{j_1m_1j_2m_2}|j_1m_1\\rangle|j_2m_2\\rangle$$

$C^{jm}_{j_1m_1j_2m_2}$ を**クレプシュ・ゴルダン係数**と呼ぶ。

## スピン 1/2 × スピン 1/2 の例

### 1重項（$j=0$）
$$|0,0\\rangle = \\frac{1}{\\sqrt 2}(|\\!\\uparrow\\downarrow\\rangle - |\\!\\downarrow\\uparrow\\rangle)$$

### 3重項（$j=1$）
$$|1,+1\\rangle = |\\!\\uparrow\\uparrow\\rangle$$
$$|1,0\\rangle = \\frac{1}{\\sqrt 2}(|\\!\\uparrow\\downarrow\\rangle + |\\!\\downarrow\\uparrow\\rangle)$$
$$|1,-1\\rangle = |\\!\\downarrow\\downarrow\\rangle$$

対称（3重項）と反対称（1重項）に分かれる。

## 応用

- 原子スペクトル（LS 結合）
- 粒子物理の荷電演算子
- 選択則の判定
- 核スピンの結合

## 躓きポイント

$C$ の値は CG 係数表から引くのが実用的。重要なのは「どういう構造なのか」を理解すること。`,
  },
  {
    id: "mach-number",
    title: "マッハ数と衝撃波",
    field: "mechanics",
    category: "concept",
    summary: "音速を超える物体の作る衝撃波、マッハ角、ソニックブーム",
    readMinutes: 3,
    relatedProblems: ["tsukuba-2021-phys-1"],
    content: `## 定義

マッハ数 $M = v/c$（$c$ 音速）。
- $M < 1$：亜音速
- $M = 1$：音速
- $M > 1$：超音速
- $M > 5$：極超音速

## マッハ角

超音速では衝撃波面（円錐）が形成。進行方向とのなす角：
$$\\sin\\mu = \\frac{1}{M}$$

$M = 2$ なら $\\mu = 30°$、$M = 10$ なら $\\mu \\approx 5.7°$。

## ソニックブーム

衝撃波面が地上を通過する時の爆音。飛行機の速度そのものに聞こえるわけではなく、「通り過ぎる瞬間」の圧力変動。

## 応用
- 戦闘機、超音速旅客機（コンコルド）
- 弾丸の「パチン」音
- 天体の衝撃波（超新星残骸、太陽圏終端）
- 核爆発

## 躓きポイント
- 音源と観測者の相対運動だけでなく、媒質の状態（温度・圧力）で $c$ が変わる
- $M > 1$ で前方に音が届かない → ステルス効果`,
  },
  {
    id: "stokes-theorem",
    title: "ストークスの定理とガウスの定理",
    field: "math",
    category: "math",
    summary: "ベクトル場の閉路積分と面積分の関係、閉曲面積分と体積積分の関係",
    readMinutes: 4,
    relatedProblems: ["hokkaido-2022-phys-2"],
    content: `## ストークスの定理

$$\\oint_C \\vec A\\cdot d\\vec\\ell = \\int_\\Sigma (\\nabla\\times\\vec A)\\cdot d\\vec S$$

閉路 $C$ 上の線積分 = 境界を $C$ とする曲面 $\\Sigma$ 上の rot の面積分。

**物理的意味**：「境界での循環」=「内部の渦の総量」。

## ガウスの発散定理

$$\\oint_S \\vec A\\cdot d\\vec S = \\int_V (\\nabla\\cdot\\vec A)\\,dV$$

閉曲面上の面積分 = 内部の div の体積分。

**物理的意味**：「境界を出るフラックス」=「内部の湧き出し」。

## 物理での活躍

### マクスウェル方程式

| 積分形 | 微分形 | 使う定理 |
|---|---|---|
| $\\oint E\\cdot dA = Q/\\varepsilon_0$ | $\\nabla\\cdot E = \\rho/\\varepsilon_0$ | Gauss |
| $\\oint B\\cdot dA = 0$ | $\\nabla\\cdot B = 0$ | Gauss |
| $\\oint E\\cdot d\\ell = -\\dot\\Phi_B$ | $\\nabla\\times E = -\\partial B/\\partial t$ | Stokes |
| $\\oint B\\cdot d\\ell = \\mu_0 I + \\cdots$ | $\\nabla\\times B = \\mu_0 j + \\cdots$ | Stokes |

### 流体力学
- 連続方程式：$\\partial\\rho/\\partial t + \\nabla\\cdot(\\rho\\vec v) = 0$
- Kelvin の循環定理

## 一般化：微分形式とストークス

高次元への拡張：$\\int_{\\partial M}\\omega = \\int_M d\\omega$。現代微分幾何学の基礎。

## 躓きポイント

- 向きの取り方：閉路は反時計回り（右手系）、閉曲面は外向き
- Stokes の曲面 $\\Sigma$ は複数ありうる（境界 $C$ が同じなら結果同じ）`,
  },
  {
    id: "lorentz-force-cyclotron",
    title: "ローレンツ力とサイクロトロン運動",
    field: "electromagnetism",
    category: "concept",
    summary: "磁場中の荷電粒子の円運動、角振動数、応用（加速器・プラズマ）",
    readMinutes: 3,
    relatedProblems: ["tsukuba-2023-phys-1"],
    content: `## ローレンツ力

電磁場中の電荷 $q$ に働く力：
$$\\vec F = q(\\vec E + \\vec v\\times\\vec B)$$

## 磁場のみ（$\\vec B = B\\hat z$）

運動方程式 $m\\ddot{\\vec r} = q\\vec v\\times\\vec B$ を解くと、$xy$ 面内で円運動：
$$\\omega_c = \\frac{qB}{m}$$

（サイクロトロン振動数）

ラーモア半径：
$$r_L = \\frac{mv}{qB} = \\frac{p}{qB}$$

$z$ 方向の速度は不変 → らせん運動。

## 応用

### サイクロトロン加速器
交流電場と同期させて荷電粒子を加速。半径が増えながらエネルギーも増加。

### プラズマ閉じ込め
トカマク型核融合炉。磁力線にプラズマを巻きつかせて閉じ込める。

### オーロラ
太陽風の電子が地球磁力線に沿って両極に導かれ大気と衝突。

### 質量分析
イオンの $r_L = mv/(qB)$ から質量を決定。

## 躓きポイント

電場の加速は仕事をするが、磁場のローレンツ力は速度に垂直なので**仕事をしない**。エネルギーを与えるのは電場のみ。`,
  },
  {
    id: "bohr-model",
    title: "Bohr 模型と水素スペクトル",
    field: "quantum",
    category: "concept",
    summary: "前期量子論の成功、Rydberg 定数、ライマン/バルマー系列",
    readMinutes: 3,
    relatedProblems: ["tsukuba-2025-phys-2"],
    content: `## Bohr の仮説（1913）

1. 電子は離散的な**安定軌道**のみ取る
2. 角運動量が $\\hbar$ の整数倍：$L = n\\hbar$
3. 軌道間の遷移で光子を吸収/放出：$h\\nu = |E_i - E_f|$

## エネルギー準位

水素類似原子（電荷 $+Ze$）：
$$E_n = -\\frac{13.6\\,Z^2}{n^2}\\,[\\text{eV}]$$

$n = 1$ が基底（水素：$-13.6$ eV）、$n\\to\\infty$ で 0（電離）。

## Rydberg 公式

$n_2 \\to n_1$ 遷移の波数：
$$\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$$

$R_H = 1.097\\times 10^7$ m$^{-1}$（Rydberg 定数）。

## スペクトル系列

- Lyman 系列：$n_1 = 1$（紫外）
- Balmer 系列：$n_1 = 2$（可視）
- Paschen 系列：$n_1 = 3$（赤外）

## 限界

Bohr 模型は水素では素晴らしく合うが、多電子原子・分子では破綻。Schrödinger 方程式による厳密な量子力学で置き換えられた。ただし**量子化の最初の具体例**として歴史的に重要。`,
  },
  {
    id: "infinite-well",
    title: "無限深井戸ポテンシャル",
    field: "quantum",
    category: "concept",
    summary: "量子力学の最も基本的な束縛問題、離散スペクトル、ゼロ点エネルギー",
    readMinutes: 3,
    relatedProblems: ["kyushu-2021-phys-2"],
    content: `## 設定

幅 $L$ の無限深井戸：
$$V(x) = \\begin{cases} 0 & 0 < x < L \\\\ \\infty & \\text{その他}\\end{cases}$$

## 固有状態

境界条件 $\\psi(0) = \\psi(L) = 0$：
$$\\psi_n(x) = \\sqrt{\\frac{2}{L}}\\sin\\frac{n\\pi x}{L}, \\quad n = 1, 2, 3, \\ldots$$

## 固有エネルギー

$$E_n = \\frac{n^2\\pi^2\\hbar^2}{2mL^2}$$

## 特徴

- **離散スペクトル**：束縛状態の本質的な性質
- **ゼロ点エネルギー** $E_1 \\ne 0$：不確定性原理の帰結
- $E_n \\propto n^2$：高準位ほど密集しない（クーロンの $1/n^2$ と対照的）

## 基底状態

$E_1 = \\pi^2\\hbar^2/(2mL^2)$。$L$ を小さくすると急増（量子閉じ込め効果）。

## 応用

- 量子井戸（半導体デバイス）
- 分子軌道（エーテル中の電子）
- 核内核子の第一近似

## 躓きポイント
- $\\psi_n$ は $L$ に節が $n-1$ 個
- 古典対応：高 $n$ で $|\\psi|^2$ の平均が古典的な $1/L$ に近づく`,
  },
  {
    id: "rc-circuit",
    title: "RC 回路の充放電",
    field: "electromagnetism",
    category: "technique",
    summary: "時定数、指数挙動、エネルギー収支（半分は熱に）",
    readMinutes: 3,
    relatedProblems: ["tohoku-2025-phys-2"],
    content: `## 充電

電源 $V_0$・抵抗 $R$・コンデンサ $C$ が直列。$t=0$ でスイッチ ON、$Q(0) = 0$。

キルヒホッフから：
$$R\\dot Q + Q/C = V_0$$

解：
$$Q(t) = CV_0(1 - e^{-t/\\tau}), \\quad \\tau = RC$$

## 時定数

$\\tau = RC$：時間の次元を持つ。$t = \\tau$ で約 63%（$1-1/e$）充電。

## 電流

$$I(t) = \\dot Q = \\frac{V_0}{R}e^{-t/\\tau}$$

$t = 0$ で最大値 $V_0/R$、時間とともに指数減衰。

## エネルギー収支

| | エネルギー |
|---|---|
| 電源が供給 | $CV_0^2$ |
| コンデンサに蓄積 | $CV_0^2/2$ |
| 抵抗で熱に | $CV_0^2/2$ |

**$R$ によらず半分が熱**。理想的な充電はできない。

## 放電

電源を外して抵抗だけで放電：
$$Q(t) = Q_0 e^{-t/\\tau}$$

## 応用
- タイマー回路（555 IC など）
- フィルター（ローパス・ハイパス）
- デジタル信号の立ち上がり時間
- RC フィルタによる信号整形`,
  },
  {
    id: "lc-circuit",
    title: "LC 回路と電磁振動",
    field: "electromagnetism",
    category: "concept",
    summary: "電気エネルギーと磁気エネルギーの交互変換、力学振動との完全な類似",
    readMinutes: 3,
    relatedProblems: ["nagoya-2021-phys-2"],
    content: `## 方程式

インダクタ $L$・キャパシタ $C$ が直列。電流 $I = dQ/dt$、キルヒホッフから：
$$L\\ddot Q + \\frac{Q}{C} = 0$$

## 解：角振動数

$$\\omega_0 = \\frac{1}{\\sqrt{LC}}$$

初期条件 $Q(0) = Q_0, I(0) = 0$ で：
$$Q(t) = Q_0\\cos\\omega_0 t$$

## エネルギー振動

- コンデンサ：$U_C = Q^2/(2C)$
- インダクタ：$U_L = LI^2/2$

合計は一定（$Q_0^2/(2C)$）、$U_C$ と $U_L$ が交互に最大/ゼロ。

**力学での単振動と完全に対応**：
| 力学 | 電気 |
|---|---|
| 質量 $m$ | インダクタンス $L$ |
| バネ $k$ | $1/C$ |
| 位置 $x$ | 電荷 $Q$ |
| 運動エネルギー | 磁気エネルギー |
| ポテンシャル | 電気エネルギー |

## 応用

- 発振回路
- ラジオのチューニング（RLC 共振）
- 時計の水晶振動子`,
  },
  {
    id: "buoyancy",
    title: "浮力とアルキメデスの原理",
    field: "mechanics",
    category: "concept",
    summary: "「排除した流体の重さ」= 浮力、氷山の水面下比率",
    readMinutes: 2,
    relatedProblems: ["hokkaido-2025-phys-1"],
    content: `## アルキメデスの原理

流体中の物体には、**その物体が排除した流体の重さに等しい**浮力が作用する：
$$F_{\\text{浮}} = \\rho_{\\text{流}}V_{\\text{沈}}g$$

## 浮遊条件

物体が浮く：$\\rho_{\\text{物}} < \\rho_{\\text{流}}$
水面下の体積比：
$$\\frac{V_{\\text{沈}}}{V_{\\text{物}}} = \\frac{\\rho_{\\text{物}}}{\\rho_{\\text{流}}}$$

## 氷山の例

氷の密度 0.92、水 1.00 → $V_{\\text{沈}}/V = 0.92$ = **92%**。見えているのは 8% だけ。

## 沈める力

物体を完全に沈めるのに必要な押下力：
$$F = (\\rho_{\\text{流}} - \\rho_{\\text{物}})V g$$

## 応用
- 船（中空で平均密度を水より小さく）
- 気球（ヘリウム・水素・熱気）
- 潜水艦の浮沈（バラストタンクで密度調整）
- 比重計（密度測定）`,
  },
  {
    id: "stokes-drag",
    title: "Stokes 抵抗と終端速度",
    field: "mechanics",
    category: "concept",
    summary: "低レイノルズ数での粘性抵抗、指数的な速度到達、Millikan の油滴実験",
    readMinutes: 3,
    relatedProblems: ["hokkaido-2023-phys-2"],
    content: `## Stokes の法則

粘性係数 $\\eta$ の流体中、半径 $a$ の球が速度 $v$ で運動するとき受ける抵抗：
$$F = 6\\pi\\eta a v$$

**低レイノルズ数**（$Re < 1$）で有効。

## 運動方程式

自由落下での：
$$m\\dot v = mg - 6\\pi\\eta a v$$

## 終端速度

$\\dot v = 0$ で：
$$v_\\infty = \\frac{mg}{6\\pi\\eta a}$$

## 時定数

$\\tau = m/(6\\pi\\eta a)$ として：
$$v(t) = v_\\infty(1 - e^{-t/\\tau})$$

指数的に $v_\\infty$ に漸近。

## 応用

- 雨粒・ミストの落下速度
- 赤血球の沈降速度
- ミリカンの油滴実験（電荷素量 $e$ の測定）
- 懸濁液の分離（沈降法）

## 躓きポイント

- 速度が大きくなると Stokes 則は破綻（$F \\propto v^2$ の慣性抵抗へ）
- 球以外の形状では係数が異なる`,
  },
  {
    id: "stern-gerlach",
    title: "シュテルン・ゲルラッハ実験",
    field: "quantum",
    category: "concept",
    summary: "空間量子化の実験的証明、スピン 1/2 の離散性、射影測定の本質",
    readMinutes: 3,
    relatedProblems: ["nagoya-2021-phys-1"],
    content: `## 実験概要（1922）

銀原子ビームを不均一磁場中に通すと、古典的には連続的な偏向が予想されるが、**離散的に 2 本に分裂**した。

## 解釈

銀原子の磁気モーメントは電子の $S_z$（スピン $z$ 成分）で支配。固有値は $\\pm\\hbar/2$ のみ → 2 本に分裂。

## 物理的含意

1. **空間量子化**：磁場方向の角運動量成分は離散
2. **スピン 1/2**：軌道角運動量では奇数分裂のみ、2 分裂はスピン由来
3. **測定の意味**：連続的な向きが古典的には可能だが、測定で必ず $\\pm$ に射影

## 連続磁場の実験

第1磁場で $z$ 上向きを選別 → 第2磁場が $x$ 方向なら、$x$ 基底で 1/2 ずつに再分裂。スピン成分は**同時対角化不可能**。

これが量子力学の非可換性の直接的な実験的表現。

## 応用
- 原子物理学の基礎実験
- 磁気モーメント測定
- スピン偏極ビーム生成
- 現代の冷却原子実験`,
  },
  {
    id: "rigid-body-top",
    title: "剛体コマと歳差運動",
    field: "mechanics",
    category: "concept",
    summary: "対称コマの運動、ジャイロ効果、地球の歳差、オイラー方程式入門",
    readMinutes: 3,
    relatedProblems: ["hokkaido-2021-phys-1"],
    content: `## 対称コマ

慣性モーメント $I_1 = I_2 \\ne I_3$（$I_3$ は対称軸まわり）。重力トルクのもとで複雑な運動。

## オイラー方程式

剛体の回転運動方程式（主軸系で）：
$$I_1\\dot\\omega_1 - (I_2 - I_3)\\omega_2\\omega_3 = \\tau_1$$
（他も同様）

## 歳差運動

速い自転のコマに重力トルクを加えると、倒れずに**ゆっくり軸が回る**運動：
$$\\Omega_{\\text{歳差}} = \\frac{Mgh}{I_3\\omega_3}$$

$h$ は支点から重心までの距離。

## 物理的解釈

$\\tau \\perp L$ → $L$ の向きが変化しても大きさ不変 → 軸方向が円を描く。

## 実例

### 地球の歳差
赤道のふくらみが月・太陽の潮汐力トルクを受け、自転軸が**26000年周期**で歳差運動。現在北極星はポラリスだが、1万年後は別の星。

### ジャイロスコープ
航空機・船舶の姿勢制御、慣性航法装置（INS）、ミサイル誘導。

### 自転車の安定性
車輪のジャイロ効果で直進性が保たれる。

## 躓きポイント

角運動量ベクトルが変化しているのに、コマ自体は「立っている」。直観に反する量子力学的でない量子性？`,
  },
  {
    id: "equipartition-theorem",
    title: "エネルギー等分配則",
    field: "statistical",
    category: "theorem",
    summary: "古典統計の基本原理、各2次形式自由度に $\\frac{1}{2}k_BT$、破綻は量子効果",
    readMinutes: 3,
    relatedProblems: ["tsukuba-2021-phys-2"],
    content: `## 主張

古典統計力学で、ハミルトニアンに**2次形式で現れる各自由度**には、平均で $\\frac{1}{2}k_BT$ のエネルギーが配分される。

## 具体例

### 並進運動
$\\frac{1}{2}mv^2 = \\frac{1}{2}m(v_x^2 + v_y^2 + v_z^2)$ → 3自由度 → $\\frac{3}{2}k_BT$

### 調和振動子（1自由度）
$\\frac{1}{2}m\\dot x^2 + \\frac{1}{2}kx^2$ → 2自由度 → $k_BT$

### 2原子分子（剛体回転子）
並進3 + 回転2 = 5 → $\\frac{5}{2}k_BT$

## 比熱への含意

$C_V = \\partial\\langle E\\rangle/\\partial T$。単原子理想気体で $\\frac{3}{2}Nk_B$、2原子分子で $\\frac{5}{2}Nk_B$（高温）。

## 量子効果での破綻

古典論はいつも等分配するが、量子効果で**自由度が凍結**することがある：
- 低温で回転モード・振動モード凍結
- 固体の比熱が低温で $0 \\to 3R$ に遷移（Debye 模型）

## 凍結条件

$k_BT \\ll$（励起エネルギー）。
- 回転：$\\hbar^2/I$
- 振動：$\\hbar\\omega$
- 電子：$\\varepsilon_F$

## 躓きポイント

- 「自由度」は運動方程式の**2次項の数**。3次元並進は 3、1次元調和振動子は 2（運動 + ポテンシャル）
- 量子的に「使えない自由度」は古典統計で誤った結果を与える`,
  },
  {
    id: "gravitational-escape",
    title: "重力ポテンシャルと脱出速度",
    field: "mechanics",
    category: "concept",
    summary: "万有引力、エネルギー保存から脱出速度、宇宙速度 3 種類",
    readMinutes: 2,
    relatedProblems: ["tsukuba-2025-phys-1"],
    content: `## 万有引力

質量 $M, m$ の間に：
$$F = \\frac{GMm}{r^2}$$

ポテンシャル（無限遠を基準）：
$$U = -\\frac{GMm}{r}$$

## 第一宇宙速度（地表円軌道）

$mv_1^2/R = mg$：
$$v_1 = \\sqrt{gR} \\approx 7.9\\,\\text{km/s}$$

## 第二宇宙速度（脱出速度）

エネルギー保存 $\\frac{1}{2}mv_2^2 = GMm/R$：
$$v_2 = \\sqrt{2gR} = \\sqrt 2\\,v_1 \\approx 11.2\\,\\text{km/s}$$

## 第三宇宙速度（太陽系脱出）

太陽重力も超える必要あり：$\\approx 16.7$ km/s。

## Schwarzschild 半径

脱出速度 = 光速の条件から：
$$r_s = \\frac{2GM}{c^2}$$

半径 $r_s$ 以下に質量が詰まると光すら脱出できない = **ブラックホール**。
太陽なら $r_s \\approx 3$ km。

## 応用
- 人工衛星の投入速度
- 惑星探査機の軌道設計
- スイングバイ
- ブラックホールの定義`,
  },
  {
    id: "dulong-petit",
    title: "Dulong-Petit 則",
    field: "thermodynamics",
    category: "theorem",
    summary: "固体の高温比熱 $3R$/mol、等分配則の直接的帰結、低温で破綻する",
    readMinutes: 2,
    relatedProblems: ["tsukuba-2021-phys-2"],
    content: `## 主張（1819）

十分高温で、固体の定積モル比熱は**約 $3R$**：
$$C_V \\approx 3R \\approx 25\\,\\text{J/(mol\\,K)}$$

物質の種類によらない（近似的普遍性）。

## 等分配則からの導出

固体中の原子は3次元に振動。1原子あたり 3並進 + 3弾性 = 6自由度の2次形式：
$$\\langle E\\rangle = 6\\cdot\\frac{1}{2}k_BT = 3k_BT$$

$N_A$ 個（1モル）で $3N_A k_B = 3R$。

## 低温での破綻

実験：$T \\to 0$ で $C_V \\to 0$。量子効果で振動モードが凍結（$k_BT < \\hbar\\omega$ で基底状態のみ）。

Einstein 模型（$e^{-\\Theta_E/T}$）、Debye 模型（$T^3$）が解消。

## 実例

| 金属 | $C_V$ [J/(mol·K)] | 予測 $3R$ 差 |
|---|---|---|
| Cu | 24.4 | -2% |
| Al | 24.4 | -2% |
| Fe | 25.1 | +0.4% |
| Pb | 26.8 | +7% |

室温で金属はほぼ $3R$ に従う。

## 歴史的意義

固体の比熱が物質によらないという「謎」が、19世紀に物質の原子論を支持する強力な証拠となった。`,
  },

  // 追加の低優先（特に頻出しそうなもの）
  {
    id: "parallel-axis-theorem",
    title: "平行軸の定理",
    field: "mechanics",
    category: "theorem",
    summary: "重心軸まわりの $I$ から平行な別軸まわりの $I$ を求める公式",
    readMinutes: 2,
    relatedProblems: ["tohoku-2025-phys-1", "tsukuba-2024-phys-1"],
    relatedTopics: ["moment-of-inertia"],
    content: `## 定理

重心を通る軸まわりの慣性モーメントを $I_G$、それに平行で距離 $d$ 離れた軸まわりを $I_A$ とすると：
$$I_A = I_G + Md^2$$

## 証明のスケッチ

$I = \\int r^2 dm$ を分解。重心を原点にとると $\\int\\vec r dm = 0$ の関係から余分項が消えて $I_G + Md^2$。

## 応用例

### 棒（長さ $L$、質量 $M$）
- 中心軸：$I_G = ML^2/12$
- 端を通る軸：$I = ML^2/12 + M(L/2)^2 = ML^2/3$

### 円盤（半径 $R$）
- 中心軸：$I_G = MR^2/2$
- 縁を通る軸：$I = MR^2/2 + MR^2 = 3MR^2/2$

## 垂直軸定理

平面体のみに適用できる別の定理：
$$I_z = I_x + I_y$$

平面体の面垂直軸まわりの $I$ は、面内2軸まわりの $I$ の和。

## 躓きポイント

- 「重心を通る軸からの平行移動」に限定。任意の軸間では使えない
- 使う前に**軸方向がそろっているか**を確認`,
  },
  {
    id: "zero-point-energy",
    title: "零点振動エネルギー",
    field: "quantum",
    category: "concept",
    summary: "絶対零度でも残る量子的運動エネルギー、不確定性原理の帰結",
    readMinutes: 3,
    relatedProblems: ["todai-2025-phys-3"],
    content: `## 存在の根拠

不確定性原理 $\\Delta x\\Delta p \\geq \\hbar/2$ から、$\\Delta x = \\Delta p = 0$ は不可能。つまり「静止して一点にある」量子状態は存在しない。

## 調和振動子

$E_n = \\hbar\\omega(n + 1/2)$、$n = 0$ で：
$$E_0 = \\hbar\\omega/2 \\ne 0$$

## 最小不確定性

基底状態は位置と運動量の積が**最小**（等号成立）：
$$\\Delta x\\Delta p = \\hbar/2$$

ガウシアン波動関数。

## 実験的証拠

### 液体ヘリウム
$^4$He は絶対零度でも液体のまま（零点振動が結晶化を阻む）。常圧下で固化しない唯一の元素。

### カシミール効果
真空の零点振動から導体板間に引力。実験で確認済み。

### 分子振動
分光学で $v = 0 \\to 1$ 遷移の振動数 $= \\omega$（$\\hbar\\omega/2$ でなく）が観測される。

## 宇宙論的側面

量子場の零点エネルギーが**宇宙定数問題**の核心。理論値と観測値が $10^{120}$ も違う。

## 躓きポイント

「絶対零度で静止する」は古典的描像。量子的には必ず運動が残る。`,
  },
  {
    id: "beat-phenomenon",
    title: "うなり現象",
    field: "mechanics",
    category: "concept",
    summary: "近い周波数の2波の重ね合わせで生じる振幅変調",
    readMinutes: 2,
    relatedProblems: ["titech-2025-phys-1"],
    relatedTopics: ["wave-equation", "small-oscillations"],
    content: `## 基本

振動数 $\\omega_1, \\omega_2$（$\\omega_1 \\approx \\omega_2$）の2波の和：
$$\\cos\\omega_1 t + \\cos\\omega_2 t = 2\\cos\\frac{\\omega_1-\\omega_2}{2}t\\cdot\\cos\\frac{\\omega_1+\\omega_2}{2}t$$

速い振動（$(\\omega_1+\\omega_2)/2$）の**振幅が**ゆっくり変調（$(\\omega_2-\\omega_1)/2$）。

## うなり周期

振幅の最大→次の最大：
$$T_{\\text{beat}} = \\frac{2\\pi}{|\\omega_2 - \\omega_1|}$$

## 応用

- **楽器の調律**：2音を同時に鳴らしてうなりがなくなるように調整
- **連成振動**：2モードが近いとエネルギーが質点間を行き来
- **超短パルス**：多数の振動数を足し合わせる極限

## 躓きポイント

「2倍の振動数」ではなく「振幅が2倍に振動する」。振動数そのものは1つ（平均値）。`,
  },
];

export function getTopic(id: string): Topic | undefined {
  return topics.find((t) => t.id === id);
}

export function getTopicsByField(field: Field | "general"): Topic[] {
  return topics.filter((t) => t.field === field);
}

export function getTopicsByCategory(category: TopicCategory): Topic[] {
  return topics.filter((t) => t.category === category);
}

export function getRelatedTopics(problemId: string): Topic[] {
  return topics.filter((t) => t.relatedProblems?.includes(problemId));
}
