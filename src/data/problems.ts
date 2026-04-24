import { Problem } from "./types";

export const problems: Problem[] = [
  // ===== 東京大学 2025年度 =====
  {
    id: "todai-2025-phys-1",
    universitySlug: "todai",
    year: 2025,
    subject: "物理学",
    problemNumber: 1,
    title: "質点系の角運動量と慣性モーメント",
    field: "mechanics",
    difficulty: "standard",
    tags: ["角運動量", "慣性モーメント", "剛体回転"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2025年度 物理学 問1

## 問題の設定

鉛直面内で運動する剛体振り子を考える。質量が無視できる長さ $\\ell$ の剛体棒の一端が、摩擦のない水平な回転軸に固定されており、棒のもう一端には質量 $m$ の質点が取り付けられている。
この振り子の鉛直下向きからの傾きを $\\theta$ と表し、重力加速度の大きさを $g$ とする。

## 問われている内容

(1) 質点が最下点（$\\theta=0$）を通過する瞬間の角速度が $\\omega_0$ のとき、角度 $\\theta$ における運動方程式を導け。

(2) この振り子が一回転するために必要な $\\omega_0$ の下限を求めよ。

(3) 最下点近傍での微小振動を考えたとき、その周期 $T$ を求めよ。`,
    solution: `## (1) 運動方程式

**考え方**：剛体棒につながれた質点は、軸を中心に円弧上を動くので、「接線方向（円の接線）」の運動方程式を書くのが自然です。

**力を整理する**

質点に作用する力は2つ：
- **重力** $mg$（真下向き）
- **棒からの張力** $S$（棒に沿った方向）

棒は回転軸に固定されているので張力は円の半径方向に働きます。接線方向には**重力の接線成分だけ**が寄与します。

**接線成分の取り出し**

鉛直下向きから角度 $\\theta$ の位置で、重力 $mg$ を円の接線方向に射影すると大きさは $mg\\sin\\theta$。向きは $\\theta$ を減らす方向（復元方向）。

**運動方程式**

接線方向の加速度は $\\ell \\ddot\\theta$ なので、ニュートンの第2法則から：

$$m\\ell\\ddot{\\theta} = -mg\\sin\\theta$$

$$\\boxed{\\ddot{\\theta} = -\\frac{g}{\\ell}\\sin\\theta}$$

これは「剛体振り子（物理振り子）の運動方程式」として有名な形です。

---

## (2) 一回転の条件

**方針**：一番エネルギーが必要なのは**最高点**（$\\theta=\\pi$）を超える瞬間。ここでのエネルギー条件を立てます。

**エネルギー保存則**

基準を最下点とすると、$\\theta=0$ でのエネルギーは $\\frac{1}{2}m\\ell^2\\omega_0^2$（運動エネルギーのみ）。
$\\theta$ での位置エネルギーは $mg\\ell(1-\\cos\\theta)$、運動エネルギーは $\\frac{1}{2}m\\ell^2\\omega^2$。

エネルギー保存から：

$$\\frac{1}{2}m\\ell^2\\omega^2 = \\frac{1}{2}m\\ell^2\\omega_0^2 - mg\\ell(1-\\cos\\theta)$$

**最高点での条件**

最高点 $\\theta=\\pi$ で $\\omega^2 \\geq 0$ が一回転の条件：

$$\\frac{1}{2}m\\ell^2\\omega_0^2 \\geq mg\\ell \\cdot 2$$

$$\\boxed{\\omega_0 \\geq 2\\sqrt{\\frac{g}{\\ell}}}$$

**剛体棒と糸の違い**：

|  | 条件 | 理由 |
|---|---|---|
| 剛体棒（本問） | $\\omega_0 \\geq \\sqrt{4g/\\ell}$ | 棒は押せるので最高点で速度ゼロでも可 |
| 糸 | $\\omega_0 \\geq \\sqrt{5g/\\ell}$ | 糸は引くだけなので遠心力が重力以上必要 |

---

## (3) 微小振動の周期

**近似**：$\\theta \\ll 1$ のとき $\\sin\\theta \\approx \\theta$（Maclaurin展開の1次項）。

運動方程式(1)に代入：

$$\\ddot{\\theta} = -\\frac{g}{\\ell}\\theta$$

これは**単振動の方程式** $\\ddot{\\theta}=-\\Omega^2\\theta$ の形。角振動数は：

$$\\Omega = \\sqrt{\\frac{g}{\\ell}}$$

周期は $T = 2\\pi/\\Omega$ より：

$$\\boxed{T = 2\\pi\\sqrt{\\frac{\\ell}{g}}}$$

**ポイント**：この結果は**質量 $m$ によらない**（ガリレオの等時性）。糸の振り子でも剛体棒でも、質点が先端に集中していれば同じ結果です。`,
  },
  {
    id: "todai-2025-phys-2",
    universitySlug: "todai",
    year: 2025,
    subject: "物理学",
    problemNumber: 2,
    title: "導体球の電位と静電容量",
    field: "electromagnetism",
    difficulty: "standard",
    tags: ["ガウスの法則", "静電容量", "鏡像法"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2025年度 物理学 問2

## 問題の設定

真空中に、半径 $a$ の孤立した導体球が置かれている。この導体球には合計電荷 $Q$ が帯電している。真空の誘電率を $\\varepsilon_0$ とする。

## 問われている内容

(1) 導体球の表面直上における電場の強さを求めよ。

(2) 無限遠を電位の基準点（$V=0$）としたとき、導体球の電位 $V$ を求めよ。

(3) 導体球の中心から距離 $d$（ただし $d \\gg a$）離れた位置に点電荷 $q$ を置く。このとき、導体球表面に誘起される電荷分布の概略を述べたうえで、導体球と点電荷の間に作用する力の大きさを、最低次の近似で求めよ。`,
    solution: `## (1) 表面の電場

**考え方**：球対称な問題ではガウスの法則が最強。対称性から電場は動径方向のみ、大きさは $r$ だけの関数です。

**導体球内の電荷分布**

導体は内部に電場を持てない（内部が等電位）ので、電荷は**すべて表面に**分布します。しかも球対称なので、表面電荷密度も一様です。

**ガウスの法則**

半径 $r > a$ の仮想球面を考えます。対称性より電場は球面に垂直で大きさ $E(r)$ 一定：

$$\\oint \\vec{E} \\cdot d\\vec{A} = E(r) \\cdot 4\\pi r^2 = \\frac{Q}{\\varepsilon_0}$$

$$E(r) = \\frac{Q}{4\\pi\\varepsilon_0 r^2} \\quad (r > a)$$

表面では $r = a$ を代入：

$$\\boxed{E_{\\text{表面}} = \\frac{Q}{4\\pi\\varepsilon_0 a^2}}$$

**ポイント**：これは「電荷 $Q$ が中心に集まっているとした時の距離 $a$ での電場」と同じ。導体外の電場は内部電荷を中心に集めた扱いでよい、という**球対称性の帰結**。

---

## (2) 電位

**方針**：電位は電場の線積分 $V = -\\int \\vec{E}\\cdot d\\vec{r}$。基準（無限遠で $V=0$）から表面まで積分します。

**計算**

$$V(a) = -\\int_{\\infty}^{a} E(r)\\,dr = \\int_{a}^{\\infty} \\frac{Q}{4\\pi\\varepsilon_0 r^2}\\,dr$$

$$= \\frac{Q}{4\\pi\\varepsilon_0}\\left[-\\frac{1}{r}\\right]_{a}^{\\infty} = \\frac{Q}{4\\pi\\varepsilon_0}\\cdot\\frac{1}{a}$$

$$\\boxed{V = \\frac{Q}{4\\pi\\varepsilon_0 a}}$$

**物理的意味**：半径 $a$ の導体球の**静電容量**を $C$ として $Q=CV$ から読み取ると $C = 4\\pi\\varepsilon_0 a$。半径が大きいほど容量が大きい（より多くの電荷を同じ電位で蓄えられる）。

---

## (3) 誘起電荷と力

**誘起電荷分布の直感**

点電荷 $q$ が $+$ とすると、導体内の自由電子は $q$ に引かれて**近い側に集まる**。したがって：
- 点電荷に近い側 → **負電荷が誘起**
- 点電荷から遠い側 → **正電荷が誘起**

（全体としての誘起電荷の総和はゼロ。球上の電荷 $Q$ は別途存在）

**$d \\gg a$ の近似（双極子近似）**

点電荷 $q$ は導体球の位置に一様電場
$$E_0 = \\frac{q}{4\\pi\\varepsilon_0 d^2}$$
を作ります（$d \\gg a$ なので球のサイズでは電場はほぼ一様）。

一様電場中の導体球には、鏡像法の計算から双極子モーメント
$$\\vec{p} = 4\\pi\\varepsilon_0 a^3 \\vec{E}_0$$
が誘起されます。

**力の見積もり**

力の主要項は以下の2つ：

**(i) 電荷 $Q$ と点電荷 $q$ のクーロン力**（距離 $d$ で見て、最低次）

$$F_1 = \\frac{qQ}{4\\pi\\varepsilon_0 d^2}$$

**(ii) 誘起双極子と点電荷の相互作用**（より高次の補正）

双極子が作る電場は $\\propto 1/r^3$、その勾配に点電荷が感じる力は $\\propto 1/d^5$ で引力：

$$F_2 \\approx -\\frac{q^2 a^3}{2\\pi\\varepsilon_0 d^5}$$

**結論**

$Q \\ne 0$ の場合は $F_1$ が支配的：

$$\\boxed{F \\approx \\frac{qQ}{4\\pi\\varepsilon_0 d^2}}$$

$Q = 0$（中性導体球）の場合は $F_2$ が残り、**常に引力**：

$$F \\approx -\\frac{q^2 a^3}{2\\pi\\varepsilon_0 d^5}$$

**ポイント**：中性の導体であっても近くに電荷があると誘導分極で引かれる。これが「こすった下敷きが紙片を引きつける」現象の原理です。`,
  },
  {
    id: "todai-2025-phys-3",
    universitySlug: "todai",
    year: 2025,
    subject: "物理学",
    problemNumber: 3,
    title: "一次元調和振動子の量子力学",
    field: "quantum",
    difficulty: "advanced",
    tags: ["調和振動子", "生成消滅演算子", "固有状態"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2025年度 物理学 問3

## 問題の設定

質量 $m$, 角振動数 $\\omega$ の一次元調和振動子のハミルトニアンは次式で与えられる：
$$\\hat{H} = \\frac{\\hat{p}^2}{2m} + \\frac{1}{2}m\\omega^2\\hat{x}^2$$
ただし $\\hbar$ はプランク定数を $2\\pi$ で割ったものとする。以下では消滅演算子を
$$\\hat{a} = \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat{x} + \\frac{i}{\\sqrt{2m\\omega\\hbar}}\\hat{p}$$
と定義する。

## 問われている内容

(1) $\\hat{a}$ および $\\hat{a}^\\dagger$（$\\hat{a}$ のエルミート共役）を用いて、ハミルトニアン $\\hat{H}$ を書き換えよ。

(2) 基底状態 $|0\\rangle$ の座標表示波動関数 $\\psi_0(x)$ を求めよ。

(3) 第一励起状態 $|1\\rangle$ の波動関数 $\\psi_1(x)$ を導出したうえで、行列要素 $\\langle 1|\\hat{x}|0\\rangle$ を計算せよ。`,
    solution: `## (1) ハミルトニアンの書き換え

**方針**：$\\hat{a}$ とそのエルミート共役 $\\hat{a}^\\dagger$ で $\\hat{x}, \\hat{p}$ を表せば、$\\hat{H}$ を変換できる。

**$\\hat{x}, \\hat{p}$ を書き直す**

定義 $\\hat{a} = \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat{x} + \\frac{i}{\\sqrt{2m\\omega\\hbar}}\\hat{p}$ のエルミート共役は（$\\hat{x},\\hat{p}$ はエルミート、$i$ は共役で $-i$）：

$$\\hat{a}^\\dagger = \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat{x} - \\frac{i}{\\sqrt{2m\\omega\\hbar}}\\hat{p}$$

和と差をとって：

$$\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat{a} + \\hat{a}^\\dagger), \\quad \\hat{p} = i\\sqrt{\\frac{m\\omega\\hbar}{2}}(\\hat{a}^\\dagger - \\hat{a})$$

**$\\hat{H}$ に代入**

計算すると、正準交換関係 $[\\hat{x},\\hat{p}] = i\\hbar$ から $[\\hat{a}, \\hat{a}^\\dagger] = 1$ が得られ、

$$\\hat{H} = \\frac{\\hbar\\omega}{2}(\\hat{a}\\hat{a}^\\dagger + \\hat{a}^\\dagger\\hat{a}) = \\hbar\\omega\\left(\\hat{a}^\\dagger\\hat{a} + \\frac{1}{2}\\right)$$

$\\hat{N} = \\hat{a}^\\dagger\\hat{a}$ を数演算子と呼ぶと：

$$\\boxed{\\hat{H} = \\hbar\\omega\\left(\\hat{N} + \\frac{1}{2}\\right)}$$

**ポイント**：微分方程式を解かずに、**代数的にスペクトル $E_n = \\hbar\\omega(n + 1/2)$** が出る。これが調和振動子で生成消滅演算子を使う利点。

---

## (2) 基底状態の波動関数

**方針**：基底状態は $\\hat{a}$ で消える最低状態。$\\hat{a}|0\\rangle = 0$ を座標表示で1階微分方程式として解きます。

**座標表示への変換**

$\\hat{p} = -i\\hbar\\, d/dx$ を代入すると、$\\hat{a}\\psi_0 = 0$ は：

$$\\left(\\sqrt{\\frac{m\\omega}{2\\hbar}}x + \\sqrt{\\frac{\\hbar}{2m\\omega}}\\frac{d}{dx}\\right)\\psi_0(x) = 0$$

両辺を整理：

$$\\frac{d\\psi_0}{dx} = -\\frac{m\\omega}{\\hbar}x\\,\\psi_0$$

**微分方程式を解く**

変数分離して積分：

$$\\ln\\psi_0 = -\\frac{m\\omega}{2\\hbar}x^2 + C$$

$$\\psi_0(x) = A\\exp\\left(-\\frac{m\\omega}{2\\hbar}x^2\\right)$$

**規格化**

$\\int |\\psi_0|^2 dx = 1$ よりガウス積分 $\\int e^{-\\alpha x^2}dx = \\sqrt{\\pi/\\alpha}$ を使って：

$$\\boxed{\\psi_0(x) = \\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4}\\exp\\left(-\\frac{m\\omega}{2\\hbar}x^2\\right)}$$

**ポイント**：基底状態はガウシアン。確率分布は古典振動子と違って最大値が原点にあり、これは**零点振動**の表れ。

---

## (3) 第一励起状態と行列要素

**$\\psi_1$ の導出**

$|1\\rangle = \\hat{a}^\\dagger |0\\rangle$（規格化された関係）。座標表示で：

$$\\psi_1(x) = \\left(\\sqrt{\\frac{m\\omega}{2\\hbar}}x - \\sqrt{\\frac{\\hbar}{2m\\omega}}\\frac{d}{dx}\\right)\\psi_0(x)$$

$\\psi_0$ の導関数を計算：$\\displaystyle\\frac{d\\psi_0}{dx} = -\\frac{m\\omega}{\\hbar}x\\psi_0$

代入して整理：

$$\\boxed{\\psi_1(x) = \\sqrt{\\frac{2m\\omega}{\\hbar}}\\, x \\cdot \\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4}\\exp\\left(-\\frac{m\\omega}{2\\hbar}x^2\\right)}$$

これは「ガウシアン × $x$」の形。確率密度は原点にノードを持ち、両側に山がある形。

**行列要素 $\\langle 1|\\hat{x}|0\\rangle$**

(1)で得た $\\hat{x} = \\sqrt{\\hbar/(2m\\omega)}(\\hat{a} + \\hat{a}^\\dagger)$ を使えば**瞬殺**：

$$\\langle 1|\\hat{x}|0\\rangle = \\sqrt{\\frac{\\hbar}{2m\\omega}}\\langle 1|(\\hat{a} + \\hat{a}^\\dagger)|0\\rangle$$

ここで $\\hat{a}|0\\rangle = 0$、$\\hat{a}^\\dagger|0\\rangle = |1\\rangle$、$\\langle 1|1\\rangle = 1$ より：

$$\\boxed{\\langle 1|\\hat{x}|0\\rangle = \\sqrt{\\frac{\\hbar}{2m\\omega}}}$$

**ポイント**：**座標積分をせずに**行列要素が出る。これが生成消滅演算子形式の強力さです。なお電気双極子遷移の選択則はこの行列要素が非零か否かで決まります（次の問題[水素原子]参照）。`,
  },
  // ===== 東京大学 2024年度 =====
  {
    id: "todai-2024-phys-1",
    universitySlug: "todai",
    year: 2024,
    subject: "物理学",
    problemNumber: 1,
    title: "中心力場における軌道運動",
    field: "mechanics",
    difficulty: "advanced",
    tags: ["中心力", "有効ポテンシャル", "ケプラー問題"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2024年度 物理学 問1

## 問題の設定

質量 $m$ の粒子が、中心力 $F(r) = -k/r^2$（ただし $k > 0$ は定数）の働く場で運動している。粒子の位置は極座標 $(r, \\theta)$ で表す。

## 問われている内容

(1) 極座標における運動方程式を、$r$ 成分と $\\theta$ 成分に分けて書き下せ。

(2) 角運動量 $L$ が運動の保存量となることを示し、運動を 1 変数 $r$ の問題に帰着させる有効ポテンシャル $V_{\\text{eff}}(r)$ を書き下せ。

(3) 円軌道の半径を求め、その安定性について論じよ。`,
    solution: `## (1) 運動方程式

**極座標における加速度（復習）**

直交座標では $(\\ddot{x},\\ddot{y})$ がそのまま加速度ですが、極座標では**基底ベクトル自体が回転する**ので一工夫必要です。結果として：

- $r$ 方向成分: $\\ddot{r} - r\\dot\\theta^2$（第2項は**遠心加速度**）
- $\\theta$ 方向成分: $r\\ddot\\theta + 2\\dot{r}\\dot\\theta$（第2項は**コリオリ加速度**）

**運動方程式を書き下す**

中心力 $F(r) = -k/r^2$ は $r$ 方向にのみ働く（$\\theta$ 方向は0）ので：

$$m(\\ddot{r} - r\\dot{\\theta}^2) = -\\frac{k}{r^2}$$

$$m(r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta}) = 0$$

---

## (2) 角運動量保存と有効ポテンシャル

**$\\theta$ 方程式から角運動量保存を導く**

$\\theta$ 方程式の両辺に $r$ をかけて変形：

$$m(r^2\\ddot{\\theta} + 2r\\dot{r}\\dot{\\theta}) = \\frac{d}{dt}(mr^2\\dot\\theta) = 0$$

よって**角運動量** $L \\equiv mr^2\\dot\\theta$ は保存量。これは「中心力では $\\theta$ 方向にトルクが働かない」という物理的事実を反映しています。

**1変数問題への帰着**

$\\dot\\theta = L/(mr^2)$ を $r$ 方程式の $r\\dot\\theta^2$ に代入：

$$m\\ddot{r} = -\\frac{k}{r^2} + \\frac{L^2}{mr^3}$$

右辺を $-dV_{\\text{eff}}/dr$ の形に書けば、

$$m\\ddot{r} = -\\frac{d V_{\\text{eff}}}{dr}$$

$$\\boxed{V_{\\text{eff}}(r) = -\\frac{k}{r} + \\frac{L^2}{2mr^2}}$$

**物理的意味**：
- 第1項 $-k/r$ は引力ポテンシャル（中心へ引き込む）
- 第2項 $L^2/(2mr^2)$ は**遠心ポテンシャル**（角運動量による外向きの"見かけの"力）

この2つが釣り合うことで有限半径の軌道が存在できる。

---

## (3) 円軌道とその安定性

**円軌道の条件**

円軌道では $r = r_0$（一定）なので $\\dot{r} = \\ddot{r} = 0$。$m\\ddot{r} = -V_{\\text{eff}}'(r)$ より、**円軌道は $V_{\\text{eff}}$ の極値**。

$$\\frac{dV_{\\text{eff}}}{dr} = \\frac{k}{r^2} - \\frac{L^2}{mr^3} = 0$$

これを解いて：

$$\\boxed{r_0 = \\frac{L^2}{mk}}$$

**安定性判定**

$V_{\\text{eff}}$ の極値が**極小**なら安定（ボールが谷底で釣り合う）、**極大**なら不安定（山の頂上）。

2階微分を計算：

$$\\frac{d^2V_{\\text{eff}}}{dr^2} = -\\frac{2k}{r^3} + \\frac{3L^2}{mr^4}$$

$r = r_0 = L^2/(mk)$ を代入：

$$\\left.\\frac{d^2V_{\\text{eff}}}{dr^2}\\right|_{r_0} = -\\frac{2k}{r_0^3} + \\frac{3}{r_0}\\cdot\\frac{1}{r_0^2}\\cdot\\frac{L^2}{m r_0} = \\frac{k}{r_0^3} > 0$$

（計算途中：$L^2/(mr_0) = k$ を使った）

2階微分が正なので**極小 → 円軌道は安定**。

**ポイント**：
- 中心力が $F \\propto 1/r^n$ の場合、$n < 3$ なら円軌道は安定、$n \\geq 3$ なら不安定。
- 惑星運動（$n=2$）は安定 → 太陽系が安定に存在できる。
- $n=3$ だと臨界で、わずかな摂動で一気に中心へ落ちるか無限遠へ逃げる。`,
  },
  // ===== 京都大学 2025年度 =====
  {
    id: "kyodai-2025-phys-1",
    universitySlug: "kyodai",
    year: 2025,
    subject: "物理学",
    problemNumber: 1,
    title: "正準集団とエネルギーの揺らぎ",
    field: "statistical",
    difficulty: "standard",
    tags: ["分配関数", "正準集団", "比熱"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2025年度 物理学 問1

## 問題の設定

温度 $T$ の熱浴と接した $N$ 粒子系を、正準集団（カノニカル・アンサンブル）の枠組みで考察する。$\\beta = 1/(k_B T)$ とし、系の分配関数を $Z$ とおく（$k_B$ はボルツマン定数）。

## 問われている内容

(1) 分配関数 $Z$ の $\\beta$ 微分を用いて、系の平均エネルギー $\\langle E \\rangle$ を表現せよ。

(2) エネルギーの分散 $\\langle (\\Delta E)^2 \\rangle = \\langle E^2 \\rangle - \\langle E \\rangle^2$ を $\\ln Z$ の $\\beta$ に関する微分を用いて表し、さらに定積比熱 $C_V$ との関係を導け。

(3) $N$ 個の単原子分子からなる理想気体について、エネルギーの相対揺らぎ $\\sqrt{\\langle (\\Delta E)^2 \\rangle}/\\langle E \\rangle$ を求め、熱力学極限（$N \\to \\infty$）での振る舞いを論じよ。`,
    solution: `## (1) 平均エネルギー

**分配関数のおさらい**

正準集団では $Z = \\sum_i e^{-\\beta E_i}$（$i$ はミクロ状態）。確率は $P_i = e^{-\\beta E_i}/Z$。

**平均の計算**

$$\\langle E \\rangle = \\sum_i E_i P_i = \\frac{\\sum_i E_i e^{-\\beta E_i}}{Z}$$

**キレイに書き直す技**

分子は $Z$ を $\\beta$ で微分すると出る：

$$\\frac{\\partial Z}{\\partial \\beta} = -\\sum_i E_i e^{-\\beta E_i}$$

したがって：

$$\\boxed{\\langle E \\rangle = -\\frac{1}{Z}\\frac{\\partial Z}{\\partial \\beta} = -\\frac{\\partial \\ln Z}{\\partial \\beta}}$$

**ポイント**：$\\ln Z$ で書ける形が便利なのは、**示量変数の和で書ける**から（独立系の $Z$ は積、$\\ln Z$ は和）。

---

## (2) エネルギーの分散 → 比熱

**$\\langle E^2 \\rangle$ も $Z$ の微分で出る**

$Z$ の $\\beta$ 2階微分：

$$\\frac{\\partial^2 Z}{\\partial \\beta^2} = \\sum_i E_i^2 e^{-\\beta E_i}$$

よって $\\langle E^2\\rangle = Z^{-1}\\partial^2 Z/\\partial\\beta^2$。

**分散を整理**

$\\partial^2\\ln Z/\\partial\\beta^2$ を直接計算すると：

$$\\frac{\\partial^2 \\ln Z}{\\partial \\beta^2} = \\frac{\\partial}{\\partial\\beta}\\left(\\frac{1}{Z}\\frac{\\partial Z}{\\partial\\beta}\\right) = \\frac{1}{Z}\\frac{\\partial^2 Z}{\\partial\\beta^2} - \\left(\\frac{1}{Z}\\frac{\\partial Z}{\\partial\\beta}\\right)^2$$

$$= \\langle E^2\\rangle - \\langle E\\rangle^2 = \\langle (\\Delta E)^2\\rangle$$

また $\\partial\\langle E\\rangle/\\partial\\beta = -\\partial^2\\ln Z/\\partial\\beta^2$ から

$$\\boxed{\\langle (\\Delta E)^2\\rangle = -\\frac{\\partial \\langle E\\rangle}{\\partial \\beta}}$$

**比熱との関係**

$\\beta = 1/(k_BT)$ より $\\displaystyle\\frac{\\partial}{\\partial\\beta} = -k_BT^2\\frac{\\partial}{\\partial T}$。これを使って：

$$\\langle (\\Delta E)^2\\rangle = k_BT^2\\frac{\\partial\\langle E\\rangle}{\\partial T} = k_BT^2\\,C_V$$

**ここが核心**：「エネルギーの揺らぎ（ランダム性）」と「比熱（応答のしやすさ）」が同じ量で繋がる。これが**揺動散逸定理**の最もシンプルな例。

---

## (3) 理想気体での評価

**単原子理想気体の基本量**

エネルギー等分配則より（1自由度あたり $\\frac{1}{2}k_BT$、3次元並進で3自由度）：

$$\\langle E\\rangle = \\frac{3}{2}Nk_BT, \\quad C_V = \\frac{\\partial\\langle E\\rangle}{\\partial T} = \\frac{3}{2}Nk_B$$

**揺らぎ**

(2)の結果を使って：

$$\\langle(\\Delta E)^2\\rangle = k_BT^2 \\cdot \\frac{3}{2}Nk_B = \\frac{3}{2}Nk_B^2T^2$$

$$\\sqrt{\\langle(\\Delta E)^2\\rangle} = \\sqrt{\\frac{3N}{2}}\\,k_BT$$

**相対揺らぎ**

$$\\boxed{\\frac{\\sqrt{\\langle(\\Delta E)^2\\rangle}}{\\langle E\\rangle} = \\frac{\\sqrt{3N/2}\\,k_BT}{\\frac{3}{2}Nk_BT} = \\sqrt{\\frac{2}{3N}}}$$

**熱力学極限での意味**

$N\\to\\infty$ で相対揺らぎは $\\propto 1/\\sqrt{N} \\to 0$。アボガドロ数レベル（$N\\sim 10^{23}$）では $\\sim 10^{-12}$ となり**事実上ゼロ**。

**ポイント**：「マクロ系では熱力学量はほぼ確定値」＝「統計力学で平均だけ計算すれば良い」という根拠がここに。$N$ が小さい系（ナノ系・生体分子）では揺らぎが無視できない。`,
  },
  {
    id: "kyodai-2025-phys-2",
    universitySlug: "kyodai",
    year: 2025,
    subject: "物理学",
    problemNumber: 2,
    title: "電磁波の偏光と反射",
    field: "electromagnetism",
    difficulty: "standard",
    tags: ["電磁波", "フレネル係数", "ブリュースター角"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2025年度 物理学 問2

## 問題の設定

真空中（屈折率 1）を伝搬する単色平面電磁波が、屈折率 $n$ の一様な誘電体との平面境界面に入射角 $\\theta_i$ で入射する状況を考える。
境界で屈折した波の屈折角を $\\theta_t$ とする。透磁率は真空・誘電体ともに $\\mu_0$ とし、光速は $c$ とする。

## 問われている内容

(1) 境界における位相整合条件から、スネルの法則を導け。

(2) 入射面内で電場が振動する偏光（p偏光）について、電磁場の境界条件からフレネル反射係数 $r_p$ を求めよ。

(3) $r_p = 0$ となる入射角（ブリュースター角）$\\theta_B$ を導出し、この角度で生じる物理現象を説明せよ。`,
    solution: `## (1) スネルの法則

**発想**：境界面上で時間変化する電磁場は、入射・反射・屈折の3波が**同じ位相で振動**していないと不自然（境界条件が場所ごとに変わってしまう）。したがって境界面内の**波数ベクトル**の成分が3波で一致する必要があります。

**位相整合条件**

境界面に平行な波数を比較：

$$k_i \\sin\\theta_i = k_r \\sin\\theta_r = k_t \\sin\\theta_t$$

入射・反射は真空中なので $k_i = k_r = \\omega/c$、屈折波は誘電体中で $k_t = n\\omega/c$。

入射=反射から **$\\theta_r = \\theta_i$**（入射角=反射角、反射の法則）。

入射=屈折から：

$$\\boxed{\\sin\\theta_i = n\\sin\\theta_t}$$

これがスネルの法則。

---

## (2) p偏光のフレネル反射係数

**p偏光とは**：電場が「入射面内」で振動する偏光（magnetic field is perpendicular to plane）。

**境界条件**

電磁気学の境界では：
- $E$ の**接線成分** が連続
- $H$ の**接線成分** が連続（電流源無しの場合）

p偏光では $E$ は入射面内、$H$ は入射面に垂直方向のみ。

接線成分に注目：

**（電場の接線成分）** 入射と反射は互いに逆向きの接線成分を持つ。屈折角を考慮して

$$E_i\\cos\\theta_i - E_r\\cos\\theta_i = E_t\\cos\\theta_t$$

**（磁場の接線成分）** $H = E/(\\mu_0 c/n)$ で、符号は接線成分同じ向き：

$$\\frac{E_i}{\\mu_0 c} + \\frac{E_r}{\\mu_0 c} = \\frac{nE_t}{\\mu_0 c}$$

（分野によって符号規約が異なる。ここでは**入射・反射・屈折 の $E$ ベクトル方向を物理的に決めた上で**書いています）

**連立を解く**

2式から $E_t$ を消去：

$$r_p = \\frac{E_r}{E_i} = \\frac{n\\cos\\theta_i - \\cos\\theta_t}{n\\cos\\theta_i + \\cos\\theta_t}$$

スネルで $\\cos\\theta_t = \\sqrt{1 - \\sin^2\\theta_i/n^2}$ を使って $\\theta_i$ だけで書くと：

$$\\boxed{r_p = \\frac{n^2\\cos\\theta_i - \\sqrt{n^2 - \\sin^2\\theta_i}}{n^2\\cos\\theta_i + \\sqrt{n^2 - \\sin^2\\theta_i}}}$$

---

## (3) ブリュースター角

**$r_p = 0$ の条件**

分子=0 から $n\\cos\\theta_i = \\cos\\theta_t$。

**スネル $\\sin\\theta_i = n\\sin\\theta_t$ と連立**

辺々割ると $\\tan\\theta_t / \\tan\\theta_i = 1/n^2$。整理していくと最終的に

$$\\theta_i + \\theta_t = \\frac{\\pi}{2}$$

が得られます（幾何的条件: **反射波と屈折波が直交**）。これにスネルを使うと：

$$\\sin\\theta_i = n\\sin\\theta_t = n\\cos\\theta_i$$

$$\\boxed{\\tan\\theta_B = n}$$

**物理的意味：なぜ p偏光だけ消えるか？**

誘電体中の電子が入射電場で揺らされ、**振動双極子**として再放射するのが反射・屈折光の起源です。

双極子放射には重要な性質があり、**双極子モーメントの方向には放射しない**（ダイポールの方向）。

p偏光の場合、入射面内で揺らされた電子の双極子方向と、反射波の進行方向が**ちょうど直交**する入射角（=ブリュースター角）で、反射は完全に消えます。

**応用**：サングラス・カメラの偏光フィルター、レーザー共振器のウィンドウ（ブリュースター角で設置すると p偏光に対して無反射）。`,
  },
  // ===== 京都大学 2024年度 =====
  {
    id: "kyodai-2024-phys-1",
    universitySlug: "kyodai",
    year: 2024,
    subject: "物理学",
    problemNumber: 1,
    title: "水素原子のスペクトルと選択則",
    field: "quantum",
    difficulty: "advanced",
    tags: ["水素原子", "摂動論", "選択則"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2024年度 物理学 問1

## 問題の設定

水素原子のエネルギー固有値は、主量子数 $n$ を用いて
$$E_n = -\\frac{13.6}{n^2} \\text{ [eV]}$$
で与えられる。以下、ボーア半径を $a_0$、電気素量を $e$ とする。

## 問われている内容

(1) $n = 2$ から $n = 1$ への遷移に伴って放出される光子の波長を求めよ（ライマン $\\alpha$ 線）。

(2) 電気双極子遷移における選択則 $\\Delta l = \\pm 1$ を、行列要素 $\\langle n'l'm'|\\hat{z}|nlm\\rangle$ のパリティに関する考察から導出せよ。

(3) 水素原子の $n=2$ の準位に、$z$ 方向の一様電場 $\\vec{E} = E_0 \\hat{z}$ を印加したときに生じるシュタルク効果を、1次摂動論を用いて解析し、$2s$ 状態と $2p_0$ 状態の間で生じるエネルギー分裂の大きさを求めよ。`,
    solution: `## (1) 光子の波長

**エネルギー差を計算**

$$\\Delta E = E_2 - E_1 = -\\frac{13.6}{4} - (-13.6) = 13.6\\left(1 - \\frac{1}{4}\\right) = 10.2 \\text{ eV}$$

**波長は $E = hc/\\lambda$ から**

便利な覚え方：$hc \\approx 1240$ eV·nm。

$$\\lambda = \\frac{hc}{\\Delta E} = \\frac{1240}{10.2} \\approx \\boxed{121.5 \\text{ nm}}$$

これがライマン系列の最初の線 $\\text{Ly}\\alpha$（紫外線領域）。ライマン系列は全て $n \\to 1$ への遷移で、紫外線。バルマー系列（$n \\to 2$）の可視光とは別物。

---

## (2) 選択則の導出

**方針**：電気双極子遷移の強度は行列要素 $\\langle n'l'm'|\\hat{z}|nlm\\rangle$ に比例。これが**いつ非零になるか**をパリティで絞り込む。

**パリティとは**

空間反転 $\\vec{r} \\to -\\vec{r}$。水素原子の固有状態は $\\psi_{nlm} = R_{nl}(r)Y_l^m(\\theta,\\phi)$ で、
- $R_{nl}(r)$ は $r$ だけの関数 → パリティ偶
- $Y_l^m(\\theta,\\phi)$ のパリティは **$(-1)^l$**

よって $\\psi_{nlm}$ のパリティは $(-1)^l$。

**$\\hat{z}$ のパリティ**

$\\hat{z}$ 自身は空間反転で $-\\hat{z}$ になるので**奇**。

**行列要素の不変性**

行列要素を $\\vec{r} \\to -\\vec{r}$ で変換すると：

$$\\langle n'l'm'|\\hat{z}|nlm\\rangle \\to (-1)^{l'}(-1)(-1)^l \\langle n'l'm'|\\hat{z}|nlm\\rangle$$

これは同じ量（積分変数を置換しただけ）なので、もとの量と等しい。従って

$$(-1)^{l'+l+1} = 1 \\Longleftrightarrow l'+l\\text{ は奇数} \\Longleftrightarrow \\Delta l\\text{ は奇数}$$

**角運動量の制約**

$\\hat{z} \\propto r Y_1^0$ は角運動量1のベクトル演算子。Wigner-Eckartの定理により $\\Delta l = 0, \\pm 1$ のみ許されるが、$\\Delta l = 0$ はパリティで禁止。

$$\\boxed{\\Delta l = \\pm 1}$$

**ポイント**：パリティ（対称性）だけで具体計算なしに選択則が分かる。これが対称性の強力さ。

---

## (3) シュタルク効果

**摂動ハミルトニアン**

電場 $\\vec{E} = E_0\\hat{z}$ 中の電子の追加エネルギーは $-(-e)E_0 z = eE_0 z$（電子電荷 $-e$）：

$$\\hat{H}' = eE_0\\hat{z}$$

**縮退摂動論**

$n=2$ には4つの縮退状態：$|2s\\rangle, |2p_0\\rangle, |2p_{+1}\\rangle, |2p_{-1}\\rangle$。
行列要素 $\\langle \\alpha|\\hat{z}|\\beta\\rangle$ を計算し、非零になる組み合わせを探す。

**どの行列要素が非零か**

選択則 $\\Delta l=\\pm 1$、$\\Delta m = 0$（$\\hat{z}$ は $m$ を変えない）から、非零になるのは：

$$\\langle 2s|\\hat{z}|2p_0\\rangle = -3a_0$$

（直接積分で計算）。この1つだけ。

**摂動行列を対角化**

$\\{|2s\\rangle, |2p_0\\rangle\\}$ の2次元部分空間では、摂動行列は

$$\\hat{H}' = eE_0\\begin{pmatrix} 0 & -3a_0 \\\\ -3a_0 & 0 \\end{pmatrix}$$

固有値は $\\pm 3eE_0 a_0$。

$|2p_{\\pm 1}\\rangle$ はこの空間と直交し摂動を受けない（0 のまま）。

**エネルギー分裂**

$|2s\\rangle, |2p_0\\rangle$ の混合状態2つが $\\pm 3eE_0 a_0$ だけ動く。分裂の大きさは：

$$\\boxed{\\Delta E = 6\\,eE_0 a_0}$$

**ポイント**：
- これは**電場の1次に比例**する「1次シュタルク効果」。縮退があるときのみ現れる。
- 非縮退状態（例えば基底状態）では2次シュタルク効果（電場の2乗）。
- 水素原子特有の「偶発的縮退」（$2s$ と $2p$ が同じエネルギー）が1次効果を生む。`,
  },
  // ===== 東工大 2025年度 =====
  {
    id: "titech-2025-phys-1",
    universitySlug: "titech",
    year: 2025,
    subject: "物理学",
    problemNumber: 1,
    title: "連成振動と基準モード",
    field: "mechanics",
    difficulty: "standard",
    tags: ["連成振動", "基準モード", "固有振動数"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2025年度 物理学 問1

## 問題の設定

一次元上の連成振動系を考える。向かい合った 2 つの固定壁の間に、それぞれ質量 $m$ の 2 個の同種の質点が並んでおり、
- 左の質点は左壁とばね定数 $k$ のばねで結合されている
- 右の質点は右壁とばね定数 $k$ のばねで結合されている
- さらに 2 つの質点どうしがばね定数 $k'$ のばねで連結されている

各質点の平衡位置からの変位を、それぞれ $x_1(t)$, $x_2(t)$ とする。

## 問われている内容

(1) 質点 1, 2 それぞれについての運動方程式を書き下せ。

(2) 系の基準モード（ノーマルモード）における固有振動数をすべて求めよ。

(3) 初期条件 $x_1(0) = A,\\ x_2(0) = 0,\\ \\dot{x}_1(0) = \\dot{x}_2(0) = 0$ のもとで $x_1(t)$ および $x_2(t)$ を求め、この系に現れる「うなり」現象を物理的に解釈せよ。`,
    solution: `## (1) 運動方程式

**力を整理する**

質点1について：
- 左壁のばね（定数 $k$）からの復元力: $-kx_1$
- 中央のばね（定数 $k'$）からの力: 質点1と2の変位差 $x_1 - x_2$ の縮みに応じて $-k'(x_1 - x_2)$

同様に質点2について：
- 右壁のばね: $-kx_2$
- 中央ばね: $-k'(x_2 - x_1)$

**ニュートンの第2法則**

$$m\\ddot{x}_1 = -kx_1 - k'(x_1 - x_2) = -(k+k')x_1 + k'x_2$$

$$m\\ddot{x}_2 = -kx_2 - k'(x_2 - x_1) = k'x_1 - (k+k')x_2$$

---

## (2) 基準モード

**方針**：「全質点が同じ振動数で振動する解」（基準モード）を仮定し、その振動数を求める。行列形式に書くと固有値問題。

**行列形式**

$x_j = A_j e^{i\\omega t}$ と仮定して代入：

$$\\begin{pmatrix} k+k'-m\\omega^2 & -k' \\\\ -k' & k+k'-m\\omega^2 \\end{pmatrix}\\begin{pmatrix} A_1 \\\\ A_2\\end{pmatrix} = 0$$

非自明解のために行列式 = 0：

$$(k+k'-m\\omega^2)^2 - k'^2 = 0$$

$$k+k'-m\\omega^2 = \\pm k'$$

**2つのモード**

**対称モード**（$+$ 符号、$A_1 = A_2$）：両質点が**同じ向き**に動く。中央ばねは伸び縮みしない。
$$\\boxed{\\omega_1 = \\sqrt{\\frac{k}{m}}}$$

**反対称モード**（$-$ 符号、$A_1 = -A_2$）：両質点が**逆向き**に動く。中央ばねが最大限に伸び縮み。
$$\\boxed{\\omega_2 = \\sqrt{\\frac{k+2k'}{m}}}$$

**物理的解釈**：対称モードでは中央ばねが無視でき、壁ばねだけの単振動。反対称モードでは中央ばねも復元力に加わるので振動数が上がる。

---

## (3) うなり現象

**基準座標で解く**

$q_+ \\equiv x_1 + x_2$, $q_- \\equiv x_1 - x_2$ とおくと、元の運動方程式から：

$$m\\ddot{q}_+ = -k\\,q_+, \\quad m\\ddot{q}_- = -(k+2k')q_-$$

これらは独立な単振動で、それぞれ $\\omega_1, \\omega_2$ の振動。

**初期条件を使う**

$x_1(0) = A, x_2(0) = 0$ なので $q_+(0) = A, q_-(0) = A$。速度初期値はすべて0。

$$q_+(t) = A\\cos\\omega_1 t, \\quad q_-(t) = A\\cos\\omega_2 t$$

**元の座標に戻す**

$x_1 = (q_+ + q_-)/2$, $x_2 = (q_+ - q_-)/2$ より：

$$x_1(t) = \\frac{A}{2}(\\cos\\omega_1 t + \\cos\\omega_2 t)$$

$$x_2(t) = \\frac{A}{2}(\\cos\\omega_1 t - \\cos\\omega_2 t)$$

**積和公式でうなりを見る**

$\\Omega \\equiv (\\omega_1+\\omega_2)/2$、$\\Delta\\omega \\equiv (\\omega_2 - \\omega_1)/2$ とおくと：

$$\\boxed{x_1(t) = A\\cos(\\Delta\\omega\\, t)\\cos(\\Omega t)}$$

$$\\boxed{x_2(t) = A\\sin(\\Delta\\omega\\, t)\\sin(\\Omega t)}$$

**物理的意味**

結合が弱い（$k' \\ll k$）とき $\\Delta\\omega \\ll \\Omega$。すると：

- $\\cos(\\Omega t)$: 速い振動（振動数 $\\Omega$）
- $\\cos(\\Delta\\omega\\, t)$: ゆっくりした振幅変調

$x_1, x_2$ の振幅が交互に大きくなる → **エネルギーが質点1と2の間を往復**する！

**うなりの周期**：振幅が0になる間隔から

$$T_{\\text{beat}} = \\frac{\\pi}{\\Delta\\omega} = \\frac{2\\pi}{\\omega_2 - \\omega_1}$$

**応用**：結合振り子、音叉の共鳴、分子振動（対称・反対称伸縮モード）など、いたるところで出現。`,
  },
  {
    id: "titech-2025-phys-2",
    universitySlug: "titech",
    year: 2025,
    subject: "物理学",
    problemNumber: 2,
    title: "理想フェルミ気体の状態方程式",
    field: "statistical",
    difficulty: "advanced",
    tags: ["フェルミ統計", "状態密度", "縮退"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2025年度 物理学 問2

## 問題の設定

体積 $V$ の箱の中に、相互作用を無視できる $N$ 個のスピン $1/2$ フェルミ粒子が閉じ込められている。一粒子のエネルギーは運動エネルギーのみで、$\\varepsilon = p^2/(2m)$ で与えられる（$m$ は粒子の質量）。

## 問われている内容

(1) スピンの 2 重縮退を考慮したうえで、一粒子状態密度 $D(\\varepsilon)$ を導出せよ。

(2) 絶対零度 $T=0$ におけるフェルミエネルギー $\\varepsilon_F$ を、粒子数密度 $n = N/V$ を用いて表せ。

(3) 絶対零度における系の全エネルギー $E$ と圧力 $P$ を、それぞれ $n$ と $\\varepsilon_F$ の関数として求めよ。`,
    solution: `## (1) 状態密度

**方針**：「エネルギー $\\varepsilon$ 〜 $\\varepsilon + d\\varepsilon$ にある1粒子状態の数」を $D(\\varepsilon)d\\varepsilon$ と定義。これを波数空間で数える。

**波数空間での状態数**

体積 $V$ の箱では、$\\vec{k}$ 空間の格子点密度は $V/(2\\pi)^3$（周期境界条件から）。

「波数の大きさが $k \\sim k+dk$ にある状態数」は、球殻 $4\\pi k^2 dk$ をかけて、スピン2重縮退も忘れずに：

$$dN = 2 \\cdot \\frac{V}{(2\\pi)^3} \\cdot 4\\pi k^2\\,dk = \\frac{Vk^2}{\\pi^2}dk$$

**エネルギー表示に変換**

$\\varepsilon = \\hbar^2 k^2/(2m)$ より：

$$k = \\frac{\\sqrt{2m\\varepsilon}}{\\hbar}, \\quad dk = \\frac{1}{\\hbar}\\sqrt{\\frac{m}{2\\varepsilon}}\\,d\\varepsilon$$

代入して整理：

$$\\boxed{D(\\varepsilon) = \\frac{V}{2\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2}\\sqrt{\\varepsilon}}$$

**ポイント**：$D(\\varepsilon) \\propto \\sqrt{\\varepsilon}$。3次元自由粒子系の状態密度は $\\sqrt{\\varepsilon}$ に比例。

---

## (2) フェルミエネルギー

**$T=0$ でのフェルミ分布**

フェルミ分布 $f(\\varepsilon) = 1/(e^{(\\varepsilon-\\mu)/k_BT}+1)$ は $T \\to 0$ で、$\\varepsilon < \\mu$ なら 1、$\\varepsilon > \\mu$ なら 0 のステップ関数に。

絶対零度の化学ポテンシャル = **フェルミエネルギー** $\\varepsilon_F$。

**粒子数の積分**

状態密度 $D(\\varepsilon)$ を $\\varepsilon_F$ まで積分すると粒子数 $N$：

$$N = \\int_0^{\\varepsilon_F} D(\\varepsilon)\\,d\\varepsilon = \\frac{V}{2\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2} \\cdot \\frac{2}{3}\\varepsilon_F^{3/2}$$

$$= \\frac{V}{3\\pi^2}\\left(\\frac{2m\\varepsilon_F}{\\hbar^2}\\right)^{3/2}$$

**$\\varepsilon_F$ について解く**

$n = N/V$ を使って整理：

$$\\boxed{\\varepsilon_F = \\frac{\\hbar^2}{2m}(3\\pi^2 n)^{2/3}}$$

**物理的意味**：$\\varepsilon_F$ は「最高占有準位のエネルギー」。密度が高いほどフェルミ準位も高い（電子が積み上がる）。

---

## (3) 全エネルギーと圧力

**全エネルギー**

$0$ から $\\varepsilon_F$ までエネルギー付き積分：

$$E = \\int_0^{\\varepsilon_F} \\varepsilon\\cdot D(\\varepsilon)\\,d\\varepsilon = \\frac{V}{2\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2}\\cdot \\frac{2}{5}\\varepsilon_F^{5/2}$$

(2)で得た $N$ の式と比較すると（指数が 3/2 → 5/2 だけ違う）：

$$\\boxed{E = \\frac{3}{5}N\\varepsilon_F}$$

**ポイント**：全粒子の平均エネルギーは $\\varepsilon_F$ の **3/5**。フェルミ海の底から頂上まで一様に積まれるので平均はちょうど 3/5 の位置。

**圧力**

$T=0$ では自由エネルギー $F = E - TS = E$。熱力学関係式 $P = -\\partial F/\\partial V|_N$ を使う。

$\\varepsilon_F \\propto n^{2/3} = (N/V)^{2/3}$ なので $E \\propto V \\cdot \\varepsilon_F^{5/2} \\propto V \\cdot V^{-5/3} = V^{-2/3}$（$N$ 固定下）。

$$P = -\\frac{\\partial E}{\\partial V} = \\frac{2E}{3V} = \\frac{2}{5}n\\varepsilon_F$$

$\\varepsilon_F$ を代入：

$$\\boxed{P = \\frac{\\hbar^2}{5m}(3\\pi^2)^{2/3}\\,n^{5/3}}$$

**フェルミ圧の応用**

**絶対零度でも $P \\ne 0$**。これが**縮退圧（フェルミ圧）**。

- **白色矮星**: 電子の縮退圧が重力崩壊を支える。チャンドラセカール限界（$\\sim 1.4\\,M_\\odot$）で崩壊。
- **中性子星**: 電子が陽子と合体して中性子になった後、中性子の縮退圧が支える。
- **金属中の電子**: 常温でもフェルミ縮退 → 比熱の温度依存性が特殊（電子比熱 $\\propto T$）。`,
  },
  // ===== 数学の問題 =====
  {
    id: "todai-2025-math-1",
    universitySlug: "todai",
    year: 2025,
    subject: "数学",
    problemNumber: 1,
    title: "線形代数：固有値と対角化",
    field: "math",
    difficulty: "standard",
    tags: ["固有値", "対角化", "行列指数関数"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2025年度 数学 問1

## 問題の設定

次の $2 \\times 2$ 行列を考える：
$$A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$$

## 問われている内容

(1) 行列 $A$ の固有値と、それぞれに対応する固有ベクトルを求めよ。

(2) 適当な正則行列 $P$ を用いて $A$ を対角化せよ。すなわち、$P^{-1}AP$ が対角行列となるような $P$ を与えよ。

(3) 行列指数関数 $e^{At}$ を計算し、連立微分方程式
$$\\frac{d}{dt}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = A \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$
の一般解を書き下せ。`,
    solution: `## (1) 固有値と固有ベクトル

**特性方程式を立てる**

$\\det(A - \\lambda I) = 0$ から：

$$\\det\\begin{pmatrix} 2-\\lambda & 1 \\\\ 0 & 3-\\lambda \\end{pmatrix} = (2-\\lambda)(3-\\lambda) - 0 = 0$$

$$\\lambda_1 = 2, \\quad \\lambda_2 = 3$$

**三角行列のポイント**：対角成分 $2, 3$ がそのまま固有値。これは三角行列（上三角）の一般的性質。

**各固有値に対する固有ベクトル**

$\\lambda_1 = 2$：$(A - 2I)\\vec{v} = 0$

$$\\begin{pmatrix} 0 & 1 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} v_1 \\\\ v_2 \\end{pmatrix} = 0 \\quad \\Rightarrow \\quad v_2 = 0,\\ v_1 \\text{ は任意}$$

$$\\boxed{\\vec{v}_1 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}}$$

$\\lambda_2 = 3$：$(A - 3I)\\vec{v} = 0$

$$\\begin{pmatrix} -1 & 1 \\\\ 0 & 0 \\end{pmatrix}\\begin{pmatrix} v_1 \\\\ v_2 \\end{pmatrix} = 0 \\quad \\Rightarrow \\quad v_1 = v_2$$

$$\\boxed{\\vec{v}_2 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}}$$

---

## (2) 対角化

**手順**：固有ベクトルを列に並べた行列 $P$ を作り、$P^{-1}AP$ を計算。

$$P = \\begin{pmatrix} \\vec{v}_1 & \\vec{v}_2 \\end{pmatrix} = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$$

**$P^{-1}$ の計算**

2次正方行列の逆行列公式 $\\frac{1}{\\det P}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$ から（$\\det P = 1$）：

$$P^{-1} = \\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix}$$

**確認（検算）**

$$P^{-1}AP = \\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix} = D$$

対角化成功、対角成分は固有値。

---

## (3) 行列指数関数と連立ODE

**$e^{At}$ の計算**

対角化できれば $e^{At} = P e^{Dt} P^{-1}$ と書ける。ここで $e^{Dt}$ は対角成分を $e^{\\lambda_i t}$ にしたもの：

$$e^{Dt} = \\begin{pmatrix} e^{2t} & 0 \\\\ 0 & e^{3t} \\end{pmatrix}$$

**行列積を実行**

$$e^{At} = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} e^{2t} & 0 \\\\ 0 & e^{3t} \\end{pmatrix}\\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix}$$

$$= \\begin{pmatrix} e^{2t} & e^{3t} \\\\ 0 & e^{3t} \\end{pmatrix}\\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix} = \\boxed{\\begin{pmatrix} e^{2t} & e^{3t} - e^{2t} \\\\ 0 & e^{3t} \\end{pmatrix}}$$

**連立ODEの一般解**

$d\\vec{u}/dt = A\\vec{u}$ の一般解は $\\vec{u}(t) = e^{At}\\vec{u}(0)$。より見やすく書けば：

$$\\vec{u}(t) = c_1 e^{2t}\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} + c_2 e^{3t}\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$$

成分表示：

$$\\boxed{x(t) = c_1 e^{2t} + c_2 e^{3t}, \\quad y(t) = c_2 e^{3t}}$$

**検算**：
- $\\dot{y} = 3c_2 e^{3t} = 3y$ ✓
- $\\dot{x} = 2c_1 e^{2t} + 3c_2 e^{3t} = 2(c_1 e^{2t} + c_2 e^{3t}) + c_2 e^{3t} = 2x + y$ ✓

**ポイント**：$e^{At}$ が計算できれば、連立1階ODEは全部この形で解ける。行列対角化が威力を発揮する典型例。`,
  },
  {
    id: "kyodai-2025-math-1",
    universitySlug: "kyodai",
    year: 2025,
    subject: "数学",
    problemNumber: 1,
    title: "複素関数の留数と積分",
    field: "math",
    difficulty: "advanced",
    tags: ["留数定理", "複素積分", "ローラン展開"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2025年度 数学 問1

## 問題の設定

複素解析の手法（留数定理、ジョルダンの補題など）を用いて、以下の定積分を評価する。

## 問われている内容

(1) 次の三角関数を含む積分を計算せよ：
$$I_1 = \\int_0^{2\\pi} \\frac{d\\theta}{2+\\cos\\theta}$$

(2) 次の実軸上の積分を計算せよ：
$$I_2 = \\int_{-\\infty}^{\\infty} \\frac{x^2}{(x^2+1)(x^2+4)} dx$$

(3) 関数 $\\displaystyle f(z) = \\frac{e^{iz}}{z^2+1}$ の $z = i$ における留数を求め、その結果を用いて
$$\\int_{-\\infty}^{\\infty} \\frac{\\cos x}{x^2+1}dx$$
の値を計算せよ。`,
    solution: `## (1) 三角関数の周回積分

**方針**：$\\int_0^{2\\pi}$ は単位円上の周回積分とみなせる。$z = e^{i\\theta}$ の置換で複素積分に変換。

**変数置換**

$z = e^{i\\theta}$ とすると、$\\theta: 0 \\to 2\\pi$ は単位円 $|z|=1$ を1周する経路。

- $\\cos\\theta = (z + z^{-1})/2$
- $d\\theta = dz/(iz)$

**積分を書き換え**

$$I_1 = \\oint_{|z|=1} \\frac{1}{2 + (z+z^{-1})/2} \\cdot \\frac{dz}{iz}$$

分母の括弧内を整理（$z$ をかけて $4z + z^2 + 1$）：

$$I_1 = \\oint_{|z|=1} \\frac{2}{i(z^2 + 4z + 1)}\\,dz$$

**極を特定**

$z^2 + 4z + 1 = 0$ の解：

$$z = -2 \\pm \\sqrt{3}$$

単位円 $|z| < 1$ の内側にある極は $z_0 = -2 + \\sqrt{3} \\approx -0.27$ だけ。

**留数計算**

$z_0$ は単純極。$\\text{Res} = 2/[i \\cdot f'(z_0)]$ で $f(z) = z^2 + 4z + 1$, $f'(z) = 2z + 4$：

$$\\text{Res}_{z_0} = \\frac{2}{i(2z_0 + 4)} = \\frac{2}{i \\cdot 2\\sqrt{3}} = \\frac{1}{i\\sqrt{3}}$$

**留数定理**

$$I_1 = 2\\pi i \\cdot \\frac{1}{i\\sqrt{3}} = \\boxed{\\frac{2\\pi}{\\sqrt{3}}}$$

---

## (2) 実軸上の有理関数の積分

**方針**：上半面に閉じた経路（実軸+大円）で留数定理。$|z|\\to\\infty$ で積分が大円上で消えるので、実軸積分が全部。

**積分路の選び方**

半径 $R$ の半円（上半面）+ 実軸上 $[-R,R]$ の経路を考える。$R\\to\\infty$ で

- 大円部分: 被積分関数は $\\sim 1/z^2$ で減衰、$R \\cdot (1/R^2) \\to 0$
- 実軸部分: $\\int_{-\\infty}^{\\infty}\\cdots dx = I_2$

**上半面の極**

$(x^2+1)(x^2+4) = 0$ の上半面解は $z = i, 2i$ の2つ。

**それぞれの留数**

$z = i$：$(x^2+1) = (z-i)(z+i)$ と見て、

$$\\text{Res}_{i} \\frac{z^2}{(z-i)(z+i)(z^2+4)} = \\frac{i^2}{2i \\cdot (i^2+4)} = \\frac{-1}{2i\\cdot 3} = -\\frac{1}{6i}$$

$z = 2i$：

$$\\text{Res}_{2i} = \\frac{(2i)^2}{((2i)^2+1) \\cdot 2 \\cdot 2i} = \\frac{-4}{(-3)(4i)} = \\frac{1}{3i}$$

**留数定理**

$$I_2 = 2\\pi i\\left(-\\frac{1}{6i} + \\frac{1}{3i}\\right) = 2\\pi i \\cdot \\frac{1}{6i} = \\boxed{\\frac{\\pi}{3}}$$

---

## (3) フーリエ型積分

**ジョルダンの補題**

$\\int_{-\\infty}^{\\infty} \\frac{e^{ix}}{x^2+1}dx$ のような積分は、分子の $e^{ix}$ が**上半面で減衰**するため、上半面の半円上で積分がゼロに向かう（ジョルダンの補題）。よって留数定理が使える。

**$z = i$ での留数**

$f(z) = \\frac{e^{iz}}{(z-i)(z+i)}$ の $z=i$ での単純極の留数：

$$\\text{Res}_{i} = \\frac{e^{i \\cdot i}}{i + i} = \\frac{e^{-1}}{2i}$$

**留数定理**

$$\\int_{-\\infty}^{\\infty}\\frac{e^{ix}}{x^2+1}dx = 2\\pi i \\cdot \\frac{e^{-1}}{2i} = \\frac{\\pi}{e}$$

**実部を取る**

$e^{ix} = \\cos x + i\\sin x$。積分値 $\\pi/e$ は実数なので、$\\sin$ 側は 0（奇関数だから当然）、$\\cos$ 側が残る：

$$\\boxed{\\int_{-\\infty}^{\\infty}\\frac{\\cos x}{x^2+1}dx = \\frac{\\pi}{e}}$$

---

**総括：複素積分の3パターン**

| タイプ | 変換法 | キーアイデア |
|---|---|---|
| $\\int_0^{2\\pi}$ 三角関数 | $z=e^{i\\theta}$ | 単位円を1周 |
| $\\int_{-\\infty}^{\\infty}$ 有理関数 | 上(下)半面閉路 | 大円で消える |
| $\\int_{-\\infty}^{\\infty}$ $e^{iax}$付き | ジョルダンの補題 | 上半面で減衰 |

どれも「実積分 → 複素閉路積分 → 留数定理」という同じパターン。問題ごとにどの閉路が有利かだけ変わる。`,
  },

  // ===== 東北大学 2025年度 =====
  {
    id: "tohoku-2025-phys-1",
    universitySlug: "tohoku",
    year: 2025,
    subject: "物理学",
    problemNumber: 1,
    title: "剛体の慣性モーメントと回転",
    field: "mechanics",
    difficulty: "standard",
    tags: ["慣性モーメント", "平行軸の定理", "剛体回転"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2025年度 物理学 問1

## 問題の設定

質量 $M$、半径 $R$ の一様な円盤を考える。円盤の重心を通り、円盤面に垂直な軸まわりの慣性モーメントを $I_G$ と書く。

## 問われている内容

(1) 慣性モーメントの定義から $I_G$ を計算せよ。

(2) 円盤の縁上の点を通り、円盤面に垂直な軸まわりの慣性モーメント $I_P$ を、平行軸の定理を用いて求めよ。

(3) この円盤を縁の点 P で水平な軸に引っかけて振り子とした。P まわりの微小振動の周期 $T$ を求めよ。`,
    solution: `## (1) 慣性モーメントの定義から計算

**定義**：軸まわりの慣性モーメントは
$$I = \\int r^2\\,dm$$
ここで $r$ は軸から質量要素までの距離、$dm$ は質量要素。

**円盤の場合の積分**

面密度 $\\sigma = M/(\\pi R^2)$（一様）。半径 $r$ の薄い環を考えると、その面積は $2\\pi r\\,dr$、質量は $dm = \\sigma \\cdot 2\\pi r\\,dr$。

この環上の全ての質点は軸から距離 $r$ にあるので：

$$I_G = \\int_0^R r^2 \\cdot \\sigma \\cdot 2\\pi r\\,dr = 2\\pi\\sigma \\int_0^R r^3\\,dr = 2\\pi\\sigma \\cdot \\frac{R^4}{4}$$

$\\sigma = M/(\\pi R^2)$ を代入：

$$\\boxed{I_G = \\frac{1}{2}MR^2}$$

**覚え方**：円盤（ディスク）は $\\frac{1}{2}MR^2$、球殻は $\\frac{2}{3}MR^2$、中空パイプは $MR^2$、一様球は $\\frac{2}{5}MR^2$。形ごとに係数が違うので、一度は自分で計算しておくと安心。

---

## (2) 平行軸の定理

**平行軸の定理**：ある軸まわりの慣性モーメント $I_A$ と、それに平行で重心を通る軸まわりの慣性モーメント $I_G$ の間には、2軸間距離を $d$ として：

$$I_A = I_G + Md^2$$

**適用**

縁の点 P は重心から距離 $R$。よって：

$$\\boxed{I_P = I_G + MR^2 = \\frac{1}{2}MR^2 + MR^2 = \\frac{3}{2}MR^2}$$

**物理的意味**：重心を通る軸に対して、平行な別の軸まわりの慣性モーメントは**重心まわりの $I_G$ よりも必ず大きい**。回転しにくくなる、という直観と一致。

---

## (3) 剛体振り子の周期

**剛体振り子の運動方程式**

P 点で支持された剛体が、角度 $\\theta$ だけ傾いたとき、重力によるトルクは $-Mgd\\sin\\theta$（$d$ は P から重心までの距離、ここでは $d = R$）。

運動方程式：

$$I_P \\ddot\\theta = -Mgd\\sin\\theta$$

**微小振動**

$\\sin\\theta \\approx \\theta$ より：

$$\\ddot\\theta = -\\frac{MgR}{I_P}\\theta$$

これは角振動数 $\\Omega = \\sqrt{MgR/I_P}$ の単振動。

**周期**

$$T = \\frac{2\\pi}{\\Omega} = 2\\pi\\sqrt{\\frac{I_P}{MgR}} = 2\\pi\\sqrt{\\frac{\\frac{3}{2}MR^2}{MgR}}$$

$$\\boxed{T = 2\\pi\\sqrt{\\frac{3R}{2g}}}$$

**ポイント**：この結果は $M$ に依存しない（ガリレオの等時性の拡張）。また普通の（糸）振り子 $T = 2\\pi\\sqrt{L/g}$ と比較すると、実効長が $3R/2$ になっていることが分かる。これを**等価長**と呼ぶ。`,
  },
  {
    id: "tohoku-2025-phys-2",
    universitySlug: "tohoku",
    year: 2025,
    subject: "物理学",
    problemNumber: 2,
    title: "RC回路の充電とエネルギー",
    field: "electromagnetism",
    difficulty: "basic",
    tags: ["RC回路", "時定数", "エネルギー"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2025年度 物理学 問2

## 問題の設定

起電力 $V_0$ の直流電源と抵抗 $R$、容量 $C$ のコンデンサ、スイッチ S を直列につないだ回路を考える。時刻 $t=0$ でスイッチを閉じる。初期条件として、$t<0$ ではコンデンサに電荷はないものとする。

## 問われている内容

(1) コンデンサの電荷 $Q(t)$ の時間変化を求めよ。

(2) 回路に流れる電流 $I(t)$、および抵抗で単位時間に消費されるエネルギー $P_R(t)$ を求めよ。

(3) $t=0$ から $t\\to\\infty$ までに、電源から供給される全エネルギー、コンデンサに蓄えられるエネルギー、抵抗で消費されるエネルギーをそれぞれ計算し、エネルギー収支を確認せよ。`,
    solution: `## (1) 電荷の時間変化

**キルヒホッフの電圧則**

回路を一周すると $V_0 = RI + Q/C$。ここで $I = dQ/dt$ なので：

$$V_0 = R\\frac{dQ}{dt} + \\frac{Q}{C}$$

**微分方程式を解く**

$\\tau \\equiv RC$ とおいて整理：

$$\\tau \\frac{dQ}{dt} + Q = CV_0$$

これは定数変化法または特解＋一般解で解ける1階線形ODE。特解は $Q = CV_0$（定常解）、同次解は $Q = Ae^{-t/\\tau}$。一般解：

$$Q(t) = CV_0 + A e^{-t/\\tau}$$

**初期条件** $Q(0) = 0$ から $A = -CV_0$：

$$\\boxed{Q(t) = CV_0\\left(1 - e^{-t/\\tau}\\right)}$$

**ポイント**：$\\tau = RC$ が**時定数**（characteristic time）。$t = \\tau$ で電荷は約 63%（$1-1/e$）まで充電される。

---

## (2) 電流と電力

**電流**

$I(t) = dQ/dt$ より：

$$\\boxed{I(t) = \\frac{V_0}{R}e^{-t/\\tau}}$$

$t=0$ で最大値 $V_0/R$（コンデンサは空で抵抗だけ）、時間とともに指数減衰。

**抵抗での電力消費**

$P_R = RI^2$：

$$\\boxed{P_R(t) = \\frac{V_0^2}{R}e^{-2t/\\tau}}$$

---

## (3) エネルギー収支

**全送出エネルギー（電源から）**

$$W_{\\text{source}} = \\int_0^\\infty V_0 I(t)\\,dt = V_0\\int_0^\\infty \\frac{V_0}{R}e^{-t/\\tau}\\,dt = \\frac{V_0^2}{R}\\cdot\\tau = CV_0^2$$

**コンデンサに蓄えられるエネルギー**

$$W_C = \\frac{1}{2}CV_0^2$$

**抵抗で消費されるエネルギー**

$$W_R = \\int_0^\\infty P_R(t)\\,dt = \\frac{V_0^2}{R}\\int_0^\\infty e^{-2t/\\tau}\\,dt = \\frac{V_0^2}{R}\\cdot\\frac{\\tau}{2} = \\frac{1}{2}CV_0^2$$

**エネルギー収支**

$$W_{\\text{source}} = CV_0^2 = \\underbrace{\\frac{1}{2}CV_0^2}_{W_C} + \\underbrace{\\frac{1}{2}CV_0^2}_{W_R} \\checkmark$$

**ここが重要な教訓**：電源が出したエネルギーのうち**半分は必ず抵抗で熱として失われる**。これは $R$ の値によらない！（$R \\to 0$ でも同じ）

これは「抵抗なしで理想的に充電」するのは不可能、ということの数学的表現です。コイル（インダクタ）を入れれば回避できますが、その場合は LC 振動が発生します。`,
  },
  {
    id: "tohoku-2025-phys-3",
    universitySlug: "tohoku",
    year: 2025,
    subject: "物理学",
    problemNumber: 3,
    title: "カルノーサイクルとエントロピー",
    field: "thermodynamics",
    difficulty: "standard",
    tags: ["カルノーサイクル", "エントロピー", "熱機関効率"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2025年度 物理学 問3

## 問題の設定

理想気体 $n$ モルを作業物質として、高温 $T_H$ と低温 $T_L$ の間で動作するカルノーサイクルを考える（$T_H > T_L$）。サイクルは (i) 等温膨張（高温側）→ (ii) 断熱膨張 → (iii) 等温圧縮（低温側）→ (iv) 断熱圧縮 の4過程から成る。

## 問われている内容

(1) 等温膨張で作業物質が吸収する熱量 $Q_H$ を、体積変化 $V_1 \\to V_2$ を用いて書け。

(2) サイクル全体を通じての熱機関効率 $\\eta = W_{\\text{net}}/Q_H$ を、温度比のみの関数として書け。

(3) サイクルを1周したとき、作業物質のエントロピー変化 $\\Delta S_{\\text{gas}}$ と、熱浴（高温＋低温）のエントロピー変化 $\\Delta S_{\\text{res}}$ がどうなるかを論じよ。`,
    solution: `## (1) 等温膨張での吸熱

**熱力学第1法則**

$dU = \\delta Q - \\delta W$（$\\delta W$ は系が外界にする仕事）。等温過程では理想気体の内部エネルギーは温度だけの関数なので $dU=0$、したがって $\\delta Q = \\delta W$。

**仕事の計算**

理想気体の状態方程式 $PV = nRT_H$ より $P = nRT_H/V$。体積 $V_1 \\to V_2$ の準静的膨張で系が外界にする仕事：

$$W = \\int_{V_1}^{V_2} P\\,dV = nRT_H \\int_{V_1}^{V_2}\\frac{dV}{V} = nRT_H \\ln\\frac{V_2}{V_1}$$

**結論**

$$\\boxed{Q_H = nRT_H\\ln\\frac{V_2}{V_1}}$$

---

## (2) カルノー効率

**同様に低温等温圧縮**

低温等温過程（$V_3 \\to V_4$、$V_3 > V_4$）で系が**放出**する熱量は

$$Q_L = nRT_L \\ln\\frac{V_3}{V_4}$$

**体積比を結ぶ**

断熱過程では $TV^{\\gamma-1} = \\text{const}$（ポアソンの式）。高温→低温への断熱膨張 $(T_H, V_2) \\to (T_L, V_3)$、低温→高温への断熱圧縮 $(T_L, V_4) \\to (T_H, V_1)$：

$$T_H V_2^{\\gamma-1} = T_L V_3^{\\gamma-1}, \\quad T_H V_1^{\\gamma-1} = T_L V_4^{\\gamma-1}$$

辺々割ると：

$$\\left(\\frac{V_2}{V_1}\\right)^{\\gamma-1} = \\left(\\frac{V_3}{V_4}\\right)^{\\gamma-1} \\quad \\Rightarrow \\quad \\frac{V_2}{V_1} = \\frac{V_3}{V_4}$$

**効率の計算**

$W_{\\text{net}} = Q_H - Q_L$ より：

$$\\eta = \\frac{W_{\\text{net}}}{Q_H} = 1 - \\frac{Q_L}{Q_H} = 1 - \\frac{T_L \\ln(V_3/V_4)}{T_H\\ln(V_2/V_1)} = 1 - \\frac{T_L}{T_H}$$

$$\\boxed{\\eta = 1 - \\frac{T_L}{T_H}}$$

**ポイント**：この効率は**カルノー効率**と呼ばれ、2つの熱源（$T_H, T_L$）で動作する任意の熱機関の**理論的上限**。どんなに工夫しても $T_L = 0$ K でない限り100%にはならない（熱力学第2法則）。

---

## (3) エントロピー変化

**作業物質（気体）**

エントロピーは状態関数なので、サイクル後に元の状態に戻るなら $\\Delta S_{\\text{gas}} = 0$。

**熱浴**

高温側熱浴は気体に $Q_H$ を与えるので、熱浴のエントロピーは $-Q_H/T_H$ 変化。低温側熱浴は気体から $Q_L$ を受け取るので $+Q_L/T_L$ 変化：

$$\\Delta S_{\\text{res}} = -\\frac{Q_H}{T_H} + \\frac{Q_L}{T_L}$$

(1)(2) の結果を代入：

$$\\Delta S_{\\text{res}} = -nR\\ln\\frac{V_2}{V_1} + nR\\ln\\frac{V_3}{V_4} = -nR\\ln\\frac{V_2}{V_1} + nR\\ln\\frac{V_2}{V_1} = 0$$

**結論**：**可逆なカルノーサイクルでは全体のエントロピー変化がゼロ**：

$$\\boxed{\\Delta S_{\\text{total}} = \\Delta S_{\\text{gas}} + \\Delta S_{\\text{res}} = 0}$$

**ポイント**：可逆過程はエントロピーを増やさない特別な過程（等号成立）。実際の不可逆過程では必ず $\\Delta S_{\\text{total}} > 0$ となり、これが熱力学第2法則の数学的表現です。`,
  },

  // ===== 東北大学 2024年度 =====
  {
    id: "tohoku-2024-phys-1",
    universitySlug: "tohoku",
    year: 2024,
    subject: "物理学",
    problemNumber: 1,
    title: "ラグランジアン形式と保存量",
    field: "mechanics",
    difficulty: "advanced",
    tags: ["ラグランジアン", "保存量", "ネーターの定理"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2024年度 物理学 問1

## 問題の設定

質量 $m$ の粒子が 2 次元平面内で、ポテンシャル $U(r)$（$r = \\sqrt{x^2+y^2}$）の影響下で運動する。

## 問われている内容

(1) この系のラグランジアン $L$ を直交座標 $(x, y)$ と極座標 $(r, \\theta)$ のそれぞれで書き下せ。

(2) 極座標でオイラー・ラグランジュ方程式を計算し、$r$ 方向と $\\theta$ 方向の方程式を導け。

(3) ラグランジアンが $\\theta$ を陽に含まないことから保存される量を指摘し、その物理的意味を述べよ。`,
    solution: `## (1) ラグランジアン

**定義**：$L = T - U$（運動エネルギー − ポテンシャル）

**直交座標**

運動エネルギー $T = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2)$、ポテンシャル $U(r) = U(\\sqrt{x^2+y^2})$：

$$L = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2) - U(\\sqrt{x^2+y^2})$$

**極座標への変換**

$x = r\\cos\\theta, y = r\\sin\\theta$ より $\\dot{x} = \\dot{r}\\cos\\theta - r\\dot\\theta\\sin\\theta$, $\\dot{y} = \\dot{r}\\sin\\theta + r\\dot\\theta\\cos\\theta$。これを使って：

$$\\dot{x}^2 + \\dot{y}^2 = \\dot{r}^2 + r^2\\dot\\theta^2$$

したがって：

$$\\boxed{L = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot\\theta^2) - U(r)}$$

---

## (2) オイラー・ラグランジュ方程式

**オイラー・ラグランジュ方程式の公式**：各座標 $q$ について

$$\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}}\\right) - \\frac{\\partial L}{\\partial q} = 0$$

**$r$ 方向**

- $\\partial L/\\partial \\dot{r} = m\\dot{r}$
- $d/dt$: $m\\ddot{r}$
- $\\partial L/\\partial r = mr\\dot\\theta^2 - U'(r)$

方程式：

$$m\\ddot{r} - mr\\dot\\theta^2 + U'(r) = 0$$

$$\\boxed{m(\\ddot{r} - r\\dot\\theta^2) = -U'(r)}$$

これは動径方向の運動方程式で、右辺は中心力 $F(r) = -U'(r)$、左辺には遠心加速度 $-r\\dot\\theta^2$ が含まれます。

**$\\theta$ 方向**

- $\\partial L/\\partial \\dot\\theta = mr^2\\dot\\theta$
- $d/dt$: $\\frac{d}{dt}(mr^2\\dot\\theta)$
- $\\partial L/\\partial \\theta = 0$（$L$ は $\\theta$ を含まない！）

方程式：

$$\\boxed{\\frac{d}{dt}(mr^2\\dot\\theta) = 0}$$

---

## (3) 保存量の物理的意味

**$\\theta$ がラグランジアンに陽に現れない**（= $\\theta$ は循環座標 / cyclic coordinate）ので、対応する共役運動量が保存される：

$$p_\\theta = \\frac{\\partial L}{\\partial \\dot\\theta} = mr^2\\dot\\theta = \\text{一定}$$

これは**角運動量** $L_z = mr^2\\dot\\theta$ です。

**ネーターの定理との関係**

中心力ポテンシャルは $r$ だけの関数なので、回転対称性（$\\theta \\to \\theta + \\delta\\theta$ で不変）を持つ。ネーターの定理：

> 連続的な対称性 ⇔ 対応する保存則

- 時間並進対称性 ⇔ エネルギー保存
- 空間並進対称性 ⇔ 運動量保存
- 回転対称性 ⇔ **角運動量保存**

**ポイント**：ラグランジアン形式の威力は、**座標系の選び方で保存量が"見える"** こと。中心力場なら極座標を選べば $\\theta$ が循環座標となり、角運動量保存が自明に出てくる。直交座標だと隠れているこの保存量が、自然に浮き上がる。`,
  },

  // ===== 大阪大学 2025年度 =====
  {
    id: "osaka-2025-phys-1",
    universitySlug: "osaka",
    year: 2025,
    subject: "物理学",
    problemNumber: 1,
    title: "スピン1/2の系とパウリ行列",
    field: "quantum",
    difficulty: "standard",
    tags: ["スピン", "パウリ行列", "期待値"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2025年度 物理学 問1

## 問題の設定

スピン $1/2$ の量子系を考える。スピン演算子を $\\hat{S}_i = (\\hbar/2)\\hat\\sigma_i$（$i = x, y, z$）と書く。ここで $\\hat\\sigma_i$ はパウリ行列：

$$\\hat\\sigma_x = \\begin{pmatrix}0&1\\\\1&0\\end{pmatrix},\\ \\hat\\sigma_y = \\begin{pmatrix}0&-i\\\\i&0\\end{pmatrix},\\ \\hat\\sigma_z = \\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$$

状態ベクトルは $z$ 軸の固有状態 $|\\!\\uparrow\\rangle, |\\!\\downarrow\\rangle$ を基底として展開する。

## 問われている内容

(1) $\\hat{S}_x$ の固有値・固有状態を、$|\\!\\uparrow\\rangle, |\\!\\downarrow\\rangle$ の線形結合として書け。

(2) 状態 $|\\!\\uparrow\\rangle$ に対して $\\hat{S}_x$ の期待値 $\\langle \\hat{S}_x\\rangle$ と、不確定性 $(\\Delta S_x)^2 = \\langle \\hat{S}_x^2\\rangle - \\langle \\hat{S}_x\\rangle^2$ を求めよ。

(3) 不確定性関係 $\\Delta S_x \\cdot \\Delta S_y \\geq (\\hbar/2)|\\langle \\hat{S}_z\\rangle|$ が成り立つことを確認せよ。`,
    solution: `## (1) $\\hat{S}_x$ の固有値・固有状態

**方法**：$\\hat\\sigma_x$ の固有方程式 $\\det(\\hat\\sigma_x - \\lambda I) = 0$ を解く。

$$\\det\\begin{pmatrix}-\\lambda&1\\\\1&-\\lambda\\end{pmatrix} = \\lambda^2 - 1 = 0 \\quad \\Rightarrow \\quad \\lambda = \\pm 1$$

したがって $\\hat{S}_x$ の固有値は $\\pm \\hbar/2$。

**固有ベクトル**

$\\lambda = +1$ のとき $(\\hat\\sigma_x - I)v = 0$：

$$\\begin{pmatrix}-1&1\\\\1&-1\\end{pmatrix}\\begin{pmatrix}a\\\\b\\end{pmatrix} = 0 \\Rightarrow a = b$$

規格化して：

$$|x, +\\rangle = \\frac{1}{\\sqrt{2}}(|\\!\\uparrow\\rangle + |\\!\\downarrow\\rangle)$$

同様に $\\lambda = -1$：

$$|x, -\\rangle = \\frac{1}{\\sqrt{2}}(|\\!\\uparrow\\rangle - |\\!\\downarrow\\rangle)$$

$$\\boxed{\\hat{S}_x|x,\\pm\\rangle = \\pm\\frac{\\hbar}{2}|x,\\pm\\rangle}$$

**物理的意味**：$z$ 軸基底で見ると「上下の重ね合わせ」。スピンは古典的な矢印とは違い、$x$ 方向の成分が確定しているとき $z$ 方向は完全に不確定（等確率）。

---

## (2) 期待値と不確定性

**$\\langle \\hat{S}_x \\rangle$**

$|\\!\\uparrow\\rangle = \\binom{1}{0}$ として：

$$\\langle \\hat{S}_x\\rangle = \\langle\\!\\uparrow\\!|\\hat{S}_x|\\!\\uparrow\\rangle = \\frac{\\hbar}{2}(1, 0)\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\begin{pmatrix}1\\\\0\\end{pmatrix} = \\frac{\\hbar}{2}(1,0)\\binom{0}{1} = 0$$

$$\\boxed{\\langle \\hat{S}_x\\rangle = 0}$$

**$\\langle \\hat{S}_x^2\\rangle$**

$\\hat\\sigma_x^2 = I$ なので $\\hat{S}_x^2 = (\\hbar/2)^2 I$：

$$\\langle \\hat{S}_x^2\\rangle = \\left(\\frac{\\hbar}{2}\\right)^2$$

**不確定性**

$$(\\Delta S_x)^2 = \\langle \\hat{S}_x^2\\rangle - \\langle \\hat{S}_x\\rangle^2 = \\frac{\\hbar^2}{4}$$

$$\\boxed{\\Delta S_x = \\frac{\\hbar}{2}}$$

---

## (3) 不確定性関係の確認

**同様に $\\Delta S_y$**

$\\hat\\sigma_y^2 = I$、$\\langle\\!\\uparrow\\!|\\hat{S}_y|\\!\\uparrow\\rangle = 0$（奇パリティ）なので、$\\Delta S_y = \\hbar/2$。

**$\\langle \\hat{S}_z\\rangle$**

$|\\!\\uparrow\\rangle$ は $\\hat{S}_z$ の固有状態で固有値 $+\\hbar/2$：

$$\\langle \\hat{S}_z\\rangle = \\frac{\\hbar}{2}$$

**不確定性関係の左右を比較**

左辺：
$$\\Delta S_x \\cdot \\Delta S_y = \\frac{\\hbar}{2}\\cdot\\frac{\\hbar}{2} = \\frac{\\hbar^2}{4}$$

右辺：
$$\\frac{\\hbar}{2}|\\langle \\hat{S}_z\\rangle| = \\frac{\\hbar}{2}\\cdot\\frac{\\hbar}{2} = \\frac{\\hbar^2}{4}$$

**両辺が等しい**：$|\\!\\uparrow\\rangle$ は不確定性関係の**等号を成立させる最小不確定性状態**。

$$\\boxed{\\Delta S_x \\cdot \\Delta S_y = \\frac{\\hbar}{2}|\\langle \\hat{S}_z\\rangle|}$$

**ポイント**：スピン角運動量の成分は同時対角化できない（交換しない）。$z$ 方向が確定していると $x, y$ 方向は完全に不確定。古典の回転軸とは全く違う量子的な性質です。`,
  },
  {
    id: "osaka-2025-phys-2",
    universitySlug: "osaka",
    year: 2025,
    subject: "物理学",
    problemNumber: 2,
    title: "ヤングの干渉実験と光の波長",
    field: "optics",
    difficulty: "basic",
    tags: ["干渉", "回折", "光路差"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2025年度 物理学 問2

## 問題の設定

ヤングの二重スリット干渉実験を考える。スリット間隔を $d$、スクリーンまでの距離を $L$（$L \\gg d$）とする。光は波長 $\\lambda$ の単色光。

## 問われている内容

(1) スクリーン中心から距離 $y$ の点での 2 本の光路差を、$d, L, y$ を用いて近似的に表せ。

(2) 明るい縞（強め合い）の条件を導き、隣接する明線の間隔 $\\Delta y$ を求めよ。

(3) $d = 0.5$ mm, $L = 2.0$ m, $\\Delta y = 2.4$ mm が観測されたとき、光の波長 $\\lambda$ を求めよ（単位は nm）。`,
    solution: `## (1) 光路差の近似

**幾何学的セットアップ**

2つのスリット $S_1, S_2$（中点が原点、距離 $d$）からスクリーン上の点 $P(y)$ までの距離を $r_1, r_2$ とすると：

$$r_1 = \\sqrt{L^2 + \\left(y - \\frac{d}{2}\\right)^2}, \\quad r_2 = \\sqrt{L^2 + \\left(y + \\frac{d}{2}\\right)^2}$$

**$L \\gg d, y$ の近似**

平方根を展開：

$$r_2 - r_1 \\approx \\frac{1}{2L}\\left[\\left(y + \\frac{d}{2}\\right)^2 - \\left(y - \\frac{d}{2}\\right)^2\\right] = \\frac{yd}{L}$$

$$\\boxed{\\Delta r = \\frac{yd}{L}}$$

**別の直観的導出**：$L \\gg d$ では、2本のスリットから出る光線はほぼ平行。この場合、光路差は $d \\sin\\theta \\approx d\\tan\\theta = dy/L$（$\\theta$ は光軸からの角度）。同じ結果。

---

## (2) 明線条件と間隔

**明線条件**（波が強め合う）：光路差が波長の整数倍：

$$\\Delta r = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)$$

代入して：

$$\\frac{y_m d}{L} = m\\lambda \\quad \\Rightarrow \\quad y_m = \\frac{m\\lambda L}{d}$$

**明線間隔**

隣接する明線の差：

$$\\boxed{\\Delta y = y_{m+1} - y_m = \\frac{\\lambda L}{d}}$$

**ポイント**：
- $\\Delta y \\propto \\lambda$ → 波長が長いほど縞が広がる（赤い光は青い光より縞が広い）
- $\\Delta y \\propto L$ → スクリーンを離せば縞が広がる（観察しやすくなる）
- $\\Delta y \\propto 1/d$ → スリット間隔が狭いほど縞が広がる

---

## (3) 波長の計算

**(2) の式を $\\lambda$ について解く**

$$\\lambda = \\frac{\\Delta y \\cdot d}{L}$$

**数値代入**

$$\\lambda = \\frac{2.4 \\times 10^{-3} \\text{ m} \\times 0.5 \\times 10^{-3} \\text{ m}}{2.0 \\text{ m}} = \\frac{1.2 \\times 10^{-6}}{2.0} = 6.0 \\times 10^{-7} \\text{ m}$$

$$\\boxed{\\lambda = 600 \\text{ nm}}$$

**ポイント**：600 nm は**赤〜橙色**の可視光領域（可視光は約 400〜700 nm）。ナトリウムランプの D 線（589 nm）に近く、実験でよく使われる値。このタイプの問題は**単位換算**（mm → m → nm）が肝。

---

**補足：なぜこの実験が重要か**

ヤングの二重スリット実験は、光が**波の性質**を持つことを決定的に示した歴史的実験（1803年）。後に電子でも同じ干渉が起き、**粒子も波の性質を持つ**という量子力学の基礎実験にもなった。`,
  },
  {
    id: "osaka-2025-math-1",
    universitySlug: "osaka",
    year: 2025,
    subject: "数学",
    problemNumber: 1,
    title: "フーリエ級数と周期関数",
    field: "math",
    difficulty: "standard",
    tags: ["フーリエ級数", "直交関数系", "パーセバルの等式"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2025年度 数学 問1

## 問題の設定

周期 $2\\pi$ の関数 $f(x)$ を、区間 $[-\\pi, \\pi]$ で
$$f(x) = x$$
と定義する（周期的に拡張）。

## 問われている内容

(1) $f(x)$ のフーリエ級数展開
$$f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty}(a_n\\cos nx + b_n\\sin nx)$$
の係数 $a_0, a_n, b_n$ を計算せよ。

(2) 得られた級数を $x = \\pi/2$ に代入して、$\\pi/4$ の無限級数表示（ライプニッツの公式）を導け。

(3) パーセバルの等式を用いて、$\\sum_{n=1}^{\\infty} 1/n^2$ の値を求めよ。`,
    solution: `## (1) フーリエ係数の計算

**公式**（周期 $2\\pi$ の関数に対して）：

$$a_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\cos nx\\,dx, \\quad b_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\sin nx\\,dx$$

**$a_0, a_n$（$n \\geq 1$）**

$f(x) = x$ は奇関数、$\\cos nx$ は偶関数。奇×偶=奇で、積分は対称区間で0：

$$\\boxed{a_0 = 0, \\quad a_n = 0 \\text{ （全ての } n \\geq 1\\text{）}}$$

**$b_n$**

$x\\sin nx$ は偶関数なので積分は2倍：

$$b_n = \\frac{2}{\\pi}\\int_0^{\\pi} x\\sin nx\\,dx$$

部分積分：$u = x, dv = \\sin nx\\,dx$、$du = dx, v = -\\cos nx/n$：

$$\\int_0^\\pi x\\sin nx\\,dx = \\left[-\\frac{x\\cos nx}{n}\\right]_0^\\pi + \\frac{1}{n}\\int_0^\\pi \\cos nx\\,dx$$

第1項：$-\\pi\\cos n\\pi/n = -\\pi(-1)^n/n$。第2項：$[\\sin nx/n^2]_0^\\pi = 0$。

$$\\int_0^\\pi x\\sin nx\\,dx = -\\frac{\\pi(-1)^n}{n} = \\frac{\\pi(-1)^{n+1}}{n}$$

したがって：

$$b_n = \\frac{2}{\\pi}\\cdot\\frac{\\pi(-1)^{n+1}}{n} = \\boxed{\\frac{2(-1)^{n+1}}{n}}$$

**フーリエ級数**

$$f(x) = x = 2\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}\\sin nx \\quad (-\\pi < x < \\pi)$$

---

## (2) ライプニッツの公式

**$x = \\pi/2$ を代入**

$f(\\pi/2) = \\pi/2$、$\\sin(n\\pi/2)$ は $n = 1, 2, 3, 4, \\ldots$ で $1, 0, -1, 0, \\ldots$ のパターン：

$$\\frac{\\pi}{2} = 2\\left(\\frac{1}{1}\\cdot 1 + \\frac{-1}{2}\\cdot 0 + \\frac{1}{3}\\cdot(-1) + \\frac{-1}{4}\\cdot 0 + \\frac{1}{5}\\cdot 1 + \\cdots\\right)$$

$$\\frac{\\pi}{2} = 2\\left(1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots\\right)$$

両辺を 2 で割る：

$$\\boxed{\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots = \\sum_{n=0}^{\\infty}\\frac{(-1)^n}{2n+1}}$$

これが**ライプニッツの公式**（グレゴリー・ライプニッツ級数）。

**ポイント**：収束は遅い（漸近挙動 $|1/(2n+1)|$）。実用的に $\\pi$ を計算するには不向きだが、$\\pi$ が有理数の級数で表せるという事実は美しい。

---

## (3) バーゼル問題（$\\sum 1/n^2$）

**パーセバルの等式**

周期 $2\\pi$ の関数に対して：

$$\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} |f(x)|^2\\,dx = \\frac{|a_0|^2}{2} + \\sum_{n=1}^{\\infty}(|a_n|^2 + |b_n|^2)$$

**左辺の計算**

$f(x) = x$：

$$\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} x^2\\,dx = \\frac{1}{\\pi}\\cdot\\frac{2\\pi^3}{3} = \\frac{2\\pi^2}{3}$$

**右辺の計算**

$a_0 = a_n = 0$、$b_n = 2(-1)^{n+1}/n$ なので $|b_n|^2 = 4/n^2$：

$$\\sum_{n=1}^{\\infty}|b_n|^2 = 4\\sum_{n=1}^{\\infty}\\frac{1}{n^2}$$

**方程式を解く**

$$\\frac{2\\pi^2}{3} = 4\\sum_{n=1}^{\\infty}\\frac{1}{n^2}$$

$$\\boxed{\\sum_{n=1}^{\\infty}\\frac{1}{n^2} = \\frac{\\pi^2}{6}}$$

**バーゼル問題**：この結果はオイラー（1735年）が初めて証明した有名な結果。直接の和計算では数値的に求まっても、$\\pi^2/6$ という閉じた形は非自明。

**ポイント**：フーリエ級数＋パーセバルの等式は、$\\pi$ の値を含む様々な級数を導く強力な道具。$\\zeta(s) = \\sum 1/n^s$ の特殊値（リーマンゼータ関数の特殊値）を求める方法の一つ。`,
  },

  // ===== 東京大学 2023年度 =====
  {
    id: "todai-2023-phys-1",
    universitySlug: "todai",
    year: 2023,
    subject: "物理学",
    problemNumber: 1,
    title: "弾性衝突と換算質量",
    field: "mechanics",
    difficulty: "standard",
    tags: ["衝突", "換算質量", "重心系"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2023年度 物理学 問1

## 問題の設定

質量 $m_1$ の粒子 1 が速度 $v_0$ で静止している質量 $m_2$ の粒子 2 に、一直線上で弾性衝突する。

## 問われている内容

(1) エネルギー保存則と運動量保存則から、衝突後の粒子 1, 2 の速度 $v_1', v_2'$ を求めよ。

(2) 重心系に移って衝突を解析し、同じ結果が出ることを確認せよ。

(3) $m_1 = m_2$ の特別な場合、$m_1 \\ll m_2$ の極限、$m_1 \\gg m_2$ の極限それぞれで、$v_1', v_2'$ がどうなるか物理的に解釈せよ。`,
    solution: `## (1) 実験室系での直接解法

**保存則**

運動量保存：$m_1 v_0 = m_1 v_1' + m_2 v_2'$ ... (i)
エネルギー保存：$\\frac{1}{2}m_1 v_0^2 = \\frac{1}{2}m_1 v_1'^2 + \\frac{1}{2}m_2 v_2'^2$ ... (ii)

**代数変形**

(i) を変形：$m_1(v_0 - v_1') = m_2 v_2'$ ... (iii)
(ii) を変形：$m_1(v_0^2 - v_1'^2) = m_2 v_2'^2$
 → $m_1(v_0 - v_1')(v_0 + v_1') = m_2 v_2'^2$ ... (iv)

(iv) ÷ (iii)（両辺を割る）：

$$v_0 + v_1' = v_2'$$

これを (iii) に代入して $v_1'$ を消去 → $v_2'$ を求める：

$$m_1(v_0 - v_1') = m_2(v_0 + v_1')$$
$$v_1'(m_1 + m_2) = (m_1 - m_2)v_0$$

$$\\boxed{v_1' = \\frac{m_1 - m_2}{m_1 + m_2}v_0, \\quad v_2' = \\frac{2m_1}{m_1 + m_2}v_0}$$

---

## (2) 重心系での解法

**重心速度**

$$V_G = \\frac{m_1 v_0}{m_1 + m_2}$$

**重心系での初期速度**

$\\tilde v_1 = v_0 - V_G = \\frac{m_2 v_0}{m_1+m_2}$
$\\tilde v_2 = 0 - V_G = -\\frac{m_1 v_0}{m_1+m_2}$

**重心系での衝突の性質**：運動量が $0$ の系なので、衝突後も全運動量は0。さらに弾性衝突ではそれぞれのエネルギーが保存。1次元だから両者とも**単に符号が反転**：

$$\\tilde v_1' = -\\tilde v_1 = -\\frac{m_2 v_0}{m_1+m_2}, \\quad \\tilde v_2' = -\\tilde v_2 = +\\frac{m_1 v_0}{m_1+m_2}$$

**実験室系に戻す**

$v_1' = \\tilde v_1' + V_G$：

$$v_1' = -\\frac{m_2 v_0}{m_1+m_2} + \\frac{m_1 v_0}{m_1+m_2} = \\frac{m_1 - m_2}{m_1+m_2}v_0 \\checkmark$$

$v_2' = \\tilde v_2' + V_G$：

$$v_2' = \\frac{m_1 v_0}{m_1+m_2} + \\frac{m_1 v_0}{m_1+m_2} = \\frac{2m_1}{m_1+m_2}v_0 \\checkmark$$

両方の解法で同じ結果。**重心系は対称性が見やすく、計算もスマート**。

---

## (3) 3つの極限

**(A) 等質量 $m_1 = m_2$**

$v_1' = 0$, $v_2' = v_0$

**物理**：粒子1は完全に停止、粒子2が粒子1の速度を引き継ぐ。**ニュートンのゆりかご**（Newton's cradle）の原理。ビリヤードの「玉が入れ替わる」現象。

**(B) 軽い粒子が重い粒子に当たる $m_1 \\ll m_2$**

$v_1' \\to -v_0$, $v_2' \\to 0$

**物理**：軽い粒子は**完全に跳ね返る**、重い粒子はほぼ静止のまま。壁への弾性衝突と同じ。ピンポン玉がボウリングの球に当たる状況。

**(C) 重い粒子が軽い粒子に当たる $m_1 \\gg m_2$**

$v_1' \\to v_0$, $v_2' \\to 2v_0$

**物理**：重い粒子はほぼ速度が変わらない、軽い粒子は**倍速**で飛ばされる。これは古典力学から出る「スイングバイ」の原型。ボウリング球がピンポン玉を弾く状況。

**ポイント**：スイングバイ（惑星の重力を使って宇宙船を加速する航行術）の原理がこの極限。静止した衛星に探査機が弾性衝突すれば速度 0 で帰ってくるが、動いている惑星なら最大 $2V_{\\text{惑星}}$ の加速が得られる。`,
  },
  {
    id: "todai-2023-phys-2",
    universitySlug: "todai",
    year: 2023,
    subject: "物理学",
    problemNumber: 2,
    title: "角運動量の合成（スピン）",
    field: "quantum",
    difficulty: "advanced",
    tags: ["角運動量合成", "クレプシュ・ゴルダン係数", "1重項・3重項"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2023年度 物理学 問2

## 問題の設定

2つのスピン $1/2$ 粒子の合成系を考える。個々のスピン演算子を $\\hat{\\vec{S}}_1, \\hat{\\vec{S}}_2$、合成スピンを $\\hat{\\vec{S}} = \\hat{\\vec{S}}_1 + \\hat{\\vec{S}}_2$ と書く。

## 問われている内容

(1) 合成スピン $S$ が取り得る値を、一般的な角運動量合成則から求めよ。

(2) $\\hat{\\vec{S}}^2 = \\hat{\\vec{S}}_1^2 + \\hat{\\vec{S}}_2^2 + 2\\hat{\\vec{S}}_1\\cdot\\hat{\\vec{S}}_2$ の固有値から、1重項（$S=0$）と3重項（$S=1$）の $\\hat{\\vec{S}}_1\\cdot\\hat{\\vec{S}}_2$ の値をそれぞれ求めよ。

(3) 合成スピン固有状態 $|S, M\\rangle$ を、個別スピン固有状態 $|m_1, m_2\\rangle$ の線形結合で書き下せ（全4状態）。`,
    solution: `## (1) 合成スピンの可能な値

**角運動量合成則**（一般則）：

> 角運動量 $j_1$ と $j_2$ を合成したとき、可能な全角運動量は
> $$|j_1 - j_2| \\leq j \\leq j_1 + j_2$$
> を整数刻みで取る。

**本問**

$j_1 = j_2 = 1/2$ より：

$$|1/2 - 1/2| \\leq S \\leq 1/2 + 1/2 \\quad \\Rightarrow \\quad S = 0 \\text{ or } 1$$

$$\\boxed{S = 0 \\text{（1重項 / singlet）, } S = 1\\text{（3重項 / triplet）}}$$

**状態数確認**：
- $S=0$: $M=0$ の1状態
- $S=1$: $M=-1,0,+1$ の3状態
- 計 4 状態 = $2 \\times 2$（個別スピンの $\\pm$ の組み合わせ）✓

---

## (2) $\\hat{\\vec{S}}_1\\cdot\\hat{\\vec{S}}_2$ の値

**恒等式から**

$$\\hat{\\vec{S}}^2 = \\hat{\\vec{S}}_1^2 + \\hat{\\vec{S}}_2^2 + 2\\hat{\\vec{S}}_1\\cdot\\hat{\\vec{S}}_2$$

各項の固有値：
- $\\hat{\\vec{S}}^2 \\to \\hbar^2 S(S+1)$
- $\\hat{\\vec{S}}_i^2 \\to \\hbar^2\\cdot\\frac{1}{2}\\cdot\\frac{3}{2} = \\frac{3}{4}\\hbar^2$

解いて：

$$\\hat{\\vec{S}}_1\\cdot\\hat{\\vec{S}}_2 = \\frac{1}{2}\\left[\\hbar^2 S(S+1) - 2\\cdot\\frac{3}{4}\\hbar^2\\right] = \\frac{\\hbar^2}{2}\\left[S(S+1) - \\frac{3}{2}\\right]$$

**1重項**（$S=0$）：$S(S+1) = 0$

$$\\boxed{\\hat{\\vec{S}}_1\\cdot\\hat{\\vec{S}}_2 = -\\frac{3}{4}\\hbar^2}$$

**3重項**（$S=1$）：$S(S+1) = 2$

$$\\boxed{\\hat{\\vec{S}}_1\\cdot\\hat{\\vec{S}}_2 = +\\frac{1}{4}\\hbar^2}$$

**物理的意味**：
- 1重項は2スピンが「反平行」に近い（符号が負 = 逆方向）
- 3重項は2スピンが「平行」に近い（符号が正）
- 交換相互作用（強磁性・反強磁性）の微視的起源になる

---

## (3) 合成固有状態の構成

**3重項（対称）**

$M = +1$: 両方とも $\\uparrow$

$$|1, +1\\rangle = |\\!\\uparrow\\uparrow\\rangle$$

$M = -1$: 両方とも $\\downarrow$

$$|1, -1\\rangle = |\\!\\downarrow\\downarrow\\rangle$$

$M = 0$: $|1,+1\\rangle$ に下降演算子 $\\hat{S}_- = \\hat{S}_{1-} + \\hat{S}_{2-}$ を作用させる：

$$\\hat{S}_-|1,+1\\rangle = \\hbar\\sqrt{1\\cdot 2 - 1\\cdot 0}|1,0\\rangle = \\hbar\\sqrt{2}|1,0\\rangle$$

個別下降：$\\hat{S}_-|\\!\\uparrow\\uparrow\\rangle = \\hbar(|\\!\\downarrow\\uparrow\\rangle + |\\!\\uparrow\\downarrow\\rangle)$

したがって：

$$\\boxed{|1, 0\\rangle = \\frac{1}{\\sqrt{2}}(|\\!\\uparrow\\downarrow\\rangle + |\\!\\downarrow\\uparrow\\rangle)}$$

**1重項（反対称）**

$|1,0\\rangle$ と直交する組み合わせ：

$$\\boxed{|0, 0\\rangle = \\frac{1}{\\sqrt{2}}(|\\!\\uparrow\\downarrow\\rangle - |\\!\\downarrow\\uparrow\\rangle)}$$

**対称性のまとめ**

- 3重項 $(|1,+1\\rangle, |1,0\\rangle, |1,-1\\rangle)$：スピン交換に**対称**
- 1重項 $|0,0\\rangle$：スピン交換に**反対称**

**ポイント**：2電子系（ヘリウム原子等）では、全波動関数がフェルミオンの要請で反対称。スピン部分と空間部分で対称性を補い合う必要があるため、1重項（スピン反対称）なら空間対称、3重項（スピン対称）なら空間反対称。これが**交換相互作用**（Heisenberg相互作用 $-J\\vec S_1\\cdot\\vec S_2$）の起源です。`,
  },

  // ===== 京都大学 2023年度 =====
  {
    id: "kyodai-2023-phys-1",
    universitySlug: "kyodai",
    year: 2023,
    subject: "物理学",
    problemNumber: 1,
    title: "マクスウェル方程式から電磁波へ",
    field: "electromagnetism",
    difficulty: "standard",
    tags: ["マクスウェル方程式", "波動方程式", "電磁波"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2023年度 物理学 問1

## 問題の設定

真空中の電磁場について考える。自由電荷・電流はないものとして、マクスウェル方程式は

$$\\nabla \\cdot \\vec{E} = 0,\\quad \\nabla \\cdot \\vec{B} = 0$$
$$\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t},\\quad \\nabla \\times \\vec{B} = \\mu_0\\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$$

## 問われている内容

(1) 4本のマクスウェル方程式から $\\vec{E}$ に対する波動方程式を導き、電磁波の伝播速度が $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ であることを示せ。

(2) 平面波解 $\\vec{E} = \\vec{E}_0 \\exp[i(\\vec{k}\\cdot\\vec{r} - \\omega t)]$ を仮定し、マクスウェル方程式から $\\vec{E}, \\vec{B}, \\vec{k}$ の関係を導け。

(3) 電磁波のエネルギーフラックス（ポインティングベクトル）$\\vec{S} = (1/\\mu_0)\\vec{E}\\times\\vec{B}$ の時間平均を、$|\\vec{E}_0|$ を用いて表せ。`,
    solution: `## (1) 波動方程式の導出

**方針**：$\\vec{E}$ を含む式と $\\vec{B}$ を含む式を組み合わせて、$\\vec{E}$ だけの方程式を作る。

**第3式のrotをとる**

$$\\nabla \\times (\\nabla\\times\\vec{E}) = -\\frac{\\partial}{\\partial t}(\\nabla\\times\\vec{B}) = -\\mu_0\\varepsilon_0\\frac{\\partial^2 \\vec{E}}{\\partial t^2}$$

（第4式を代入）

**ベクトル解析の公式**

$$\\nabla\\times(\\nabla\\times\\vec{E}) = \\nabla(\\nabla\\cdot\\vec{E}) - \\nabla^2\\vec{E}$$

$\\nabla\\cdot\\vec{E} = 0$（第1式）なので第1項は消えて：

$$-\\nabla^2\\vec{E} = -\\mu_0\\varepsilon_0\\frac{\\partial^2\\vec{E}}{\\partial t^2}$$

$$\\boxed{\\nabla^2\\vec{E} = \\mu_0\\varepsilon_0\\frac{\\partial^2\\vec{E}}{\\partial t^2}}$$

**波動方程式との比較**

一般の波動方程式 $\\nabla^2 u = (1/v^2)\\partial^2 u/\\partial t^2$ と比較すると：

$$\\frac{1}{v^2} = \\mu_0\\varepsilon_0 \\quad \\Rightarrow \\quad \\boxed{v = c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}}$$

**歴史的意義**：マクスウェルがこの結果を得た時（1864）、$1/\\sqrt{\\mu_0\\varepsilon_0}$ は既知の電磁定数から $\\approx 3\\times 10^8$ m/s と計算でき、既知の光速と**完全に一致**した。これが「光は電磁波である」という結論につながった。

---

## (2) 電場・磁場・波数ベクトルの関係

**平面波を代入**

$\\vec{E}(x,t) = \\vec{E}_0 e^{i(\\vec{k}\\cdot\\vec{r} - \\omega t)}$ を各マクスウェル方程式に代入。
- $\\nabla \\to i\\vec{k}$
- $\\partial/\\partial t \\to -i\\omega$

第1式 $\\nabla\\cdot\\vec{E} = 0$：

$$i\\vec{k}\\cdot\\vec{E}_0 = 0 \\quad \\Rightarrow \\quad \\vec{E}_0 \\perp \\vec{k}$$

**電場は進行方向に垂直** = **横波**。

第3式 $\\nabla\\times\\vec{E} = -\\partial\\vec{B}/\\partial t$：

$$i\\vec{k}\\times\\vec{E}_0 = i\\omega\\vec{B}_0$$

$$\\boxed{\\vec{B}_0 = \\frac{\\vec{k}\\times\\vec{E}_0}{\\omega}}$$

**帰結**：
- $\\vec{E} \\perp \\vec{B}$（互いに直交）
- $\\vec{E}, \\vec{B}, \\vec{k}$ は右手系
- 振幅比：$|\\vec{B}_0| = |\\vec{E}_0|/c$（$\\omega = ck$）

---

## (3) ポインティングベクトルの時間平均

**瞬時値**

複素平面波の実部を取って実数ベクトルに戻す（または物理量として複素共役との積を半分）：

$$\\vec{S}(t) = \\frac{1}{\\mu_0}\\vec{E}(t)\\times\\vec{B}(t)$$

**時間平均のテクニック**

複素振幅での時間平均公式：

$$\\langle \\vec{S}\\rangle = \\frac{1}{2\\mu_0}\\text{Re}\\left[\\vec{E}_0 \\times \\vec{B}_0^*\\right]$$

$\\vec{B}_0 = (\\vec{k}\\times\\vec{E}_0)/\\omega = (\\hat{k}\\times\\vec{E}_0)/c$（$\\vec{k} = k\\hat{k}$, $\\omega = ck$）：

$$\\vec{E}_0\\times\\vec{B}_0^* = \\frac{1}{c}\\vec{E}_0\\times(\\hat{k}\\times\\vec{E}_0^*)$$

ベクトル三重積 $A\\times(B\\times C) = B(A\\cdot C) - C(A\\cdot B)$ で展開。$\\vec{E}_0\\cdot\\hat{k} = 0$ を使って：

$$\\vec{E}_0\\times(\\hat{k}\\times\\vec{E}_0^*) = \\hat{k}|\\vec{E}_0|^2$$

**結論**

$$\\boxed{\\langle \\vec{S}\\rangle = \\frac{|\\vec{E}_0|^2}{2\\mu_0 c}\\hat{k} = \\frac{1}{2}\\varepsilon_0 c |\\vec{E}_0|^2 \\hat{k}}$$

**物理的意味**：

- 進行方向 $\\hat{k}$ にエネルギーが流れる
- 大きさ = 単位時間に単位面積を通過するエネルギー $[\\text{W/m}^2]$
- 太陽定数 $\\sim 1360$ W/m² から、地表での電場振幅は約 $|\\vec{E}_0| \\sim 1000$ V/m 程度

**ポイント**：光強度計・太陽電池・光圧などの計算の基礎。特に時間平均値は計測器が実測する「明るさ」に直接対応します。`,
  },
  {
    id: "kyodai-2023-phys-2",
    universitySlug: "kyodai",
    year: 2023,
    subject: "物理学",
    problemNumber: 2,
    title: "ボース・アインシュタイン凝縮",
    field: "statistical",
    difficulty: "advanced",
    tags: ["ボース気体", "化学ポテンシャル", "臨界温度"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2023年度 物理学 問2

## 問題の設定

3次元の理想ボース気体を考える。粒子の質量を $m$、体積 $V$、温度 $T$、化学ポテンシャル $\\mu$ とする。ボース・アインシュタイン分布は
$$f(\\varepsilon) = \\frac{1}{e^{(\\varepsilon-\\mu)/k_BT} - 1}$$
で与えられる。粒子のエネルギー分散関係は $\\varepsilon = p^2/(2m)$。

## 問われている内容

(1) 高温・低密度での化学ポテンシャルの振る舞いを議論し、$\\mu \\to 0^-$ となる温度（臨界温度 $T_c$）を粒子数密度 $n = N/V$ を用いて表せ。必要な積分は $\\int_0^\\infty \\sqrt{x}/(e^x - 1)\\,dx = (\\sqrt\\pi/2)\\zeta(3/2) \\approx 2.31$ を用いてよい。

(2) $T < T_c$ では基底状態に巨視的な数の粒子が凝縮する。$T < T_c$ での凝縮体粒子数 $N_0$ の温度依存性を求めよ。

(3) ボース・アインシュタイン凝縮が実現した物理系の例を 1 つ挙げ、その意義を述べよ。`,
    solution: `## (1) 臨界温度

**化学ポテンシャルの一般論**

ボース粒子では全ての単一粒子エネルギー準位での占有数が正 $f(\\varepsilon) > 0$ でなければならず、最低準位 $\\varepsilon = 0$ で発散を避けるために：

$$\\mu < 0 \\quad \\text{（または } \\mu = 0 \\text{ 限界）}$$

**粒子数の条件**

粒子数は積分で（励起状態分の総和）：

$$N_{\\text{ex}} = \\int_0^\\infty D(\\varepsilon)\\frac{1}{e^{(\\varepsilon-\\mu)/k_BT}-1}d\\varepsilon$$

3次元自由粒子の状態密度（スピン因子を省略）：

$$D(\\varepsilon) = \\frac{V}{4\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2}\\sqrt\\varepsilon$$

**$\\mu = 0$ 極限での積分**

$x = \\varepsilon/k_BT$ と置換：

$$N_{\\text{ex}}^{\\max}(T) = \\frac{V}{4\\pi^2}\\left(\\frac{2m k_BT}{\\hbar^2}\\right)^{3/2}\\int_0^\\infty \\frac{\\sqrt{x}}{e^x - 1}dx$$

$$= \\frac{V}{4\\pi^2}\\left(\\frac{2m k_BT}{\\hbar^2}\\right)^{3/2}\\cdot\\frac{\\sqrt\\pi}{2}\\zeta(3/2)$$

**臨界条件**

$N_{\\text{ex}}^{\\max}(T_c) = N$ のとき、これ以上全粒子を励起状態に収容できない：

$$N = \\frac{V}{4\\pi^2}\\left(\\frac{2m k_BT_c}{\\hbar^2}\\right)^{3/2}\\cdot\\frac{\\sqrt\\pi}{2}\\zeta(3/2)$$

解くと $T_c$：

$$\\boxed{k_BT_c = \\frac{2\\pi\\hbar^2}{m}\\left(\\frac{n}{\\zeta(3/2)}\\right)^{2/3}}$$

**物理的イメージ**：温度を下げていくと、励起状態に入りきらない粒子が基底状態に「雪崩落ちる」。この閾温度が $T_c$。

---

## (2) 凝縮体粒子数

**$T < T_c$ での励起状態の粒子数**

$\\mu \\to 0^-$ で固定されるので、上の積分が $T^{3/2}$ に比例：

$$N_{\\text{ex}}(T) = N_{\\text{ex}}^{\\max}(T) = C \\cdot T^{3/2}$$

$C$ は係数（$T$ に依らない）。$T = T_c$ で $N_{\\text{ex}} = N$ から $C = N/T_c^{3/2}$：

$$N_{\\text{ex}}(T) = N\\left(\\frac{T}{T_c}\\right)^{3/2}$$

**凝縮体**

全粒子 − 励起状態 = 凝縮体：

$$\\boxed{N_0(T) = N\\left[1 - \\left(\\frac{T}{T_c}\\right)^{3/2}\\right]}$$

**イメージ**：
- $T = T_c$: $N_0 = 0$（ちょうど凝縮開始）
- $T \\to 0$: $N_0 \\to N$（全粒子が基底状態）
- $T^{3/2}$ 依存性は3次元の状態密度 $\\propto\\sqrt\\varepsilon$ の直接的帰結

---

## (3) 実験例と意義

**代表例**：**レーザー冷却した希薄アルカリ原子気体**（$^{87}$Rb, $^{23}$Na, $^7$Li 等）。

- 1995年 Cornell, Wieman, Ketterle が初めて気体 BEC を実現（2001年ノーベル賞）
- 温度 $\\sim$ nK（ナノケルビン）、粒子数 $\\sim 10^5 - 10^6$

**他の例**：
- 超流動 $^4$He（液体ヘリウム II、Kapitzaら）
- 超伝導（電子対の BEC 的側面、BCS-BEC crossover）
- エキシトン BEC、光子 BEC

**物理的意義**：

1. **量子コヒーレンス**の巨視的表現。全粒子が同一の量子状態にあり、波動関数が直接観測可能。
2. **超流動・超伝導**の理論的基盤。二体相互作用を加えることで Gross-Pitaevskii 方程式 → 超流動性を導出。
3. **原子干渉計**・量子シミュレーションの舞台。冷却原子による量子多体物理の実験基盤に。

**ポイント**：BEC は「量子力学が巨視的スケールで目に見える現象」。相互作用のない理想気体でさえ、**統計（identical particle nature）だけ**で相転移が起こるのは驚くべき事実です。`,
  },

  // ===== 東工大（東京科学大学）2024年度 =====
  {
    id: "titech-2024-phys-1",
    universitySlug: "titech",
    year: 2024,
    subject: "物理学",
    problemNumber: 1,
    title: "特殊相対性とローレンツ変換",
    field: "relativity",
    difficulty: "advanced",
    tags: ["ローレンツ変換", "4元ベクトル", "時間の遅れ"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2024年度 物理学 問1

## 問題の設定

慣性系 $S$ と、$S$ に対して $x$ 方向に速度 $v$ で運動する慣性系 $S'$ を考える。光速を $c$、$\\beta = v/c$、$\\gamma = 1/\\sqrt{1-\\beta^2}$ とする。

## 問われている内容

(1) ローレンツ変換を行列形式で書き、$(t, x)$ から $(t', x')$ への変換を示せ。

(2) $S$ で静止している時計が示す固有時間 $\\Delta\\tau$ と、$S'$ から見たこの時計の経過時間 $\\Delta t'$ の関係（時間の遅れ）を導け。

(3) $S$ の原点に静止した棒が $S$ で長さ $L_0$ を持つとき、$S'$ で測定される長さ $L'$ を求めよ（Lorentz収縮）。`,
    solution: `## (1) ローレンツ変換

**ガリレイ変換では成り立たないこと**

マクスウェル方程式は真空中で光速 $c$ を与えるが、ガリレイ変換下では速度合成則で光速が観測者によって違ってしまう。アインシュタインは「光速は全ての慣性系で同じ」を要請し、時間と空間の変換を修正した。

**ローレンツ変換（$x$ 方向ブースト）**

$$\\boxed{\\begin{pmatrix} ct' \\\\ x' \\end{pmatrix} = \\begin{pmatrix} \\gamma & -\\gamma\\beta \\\\ -\\gamma\\beta & \\gamma \\end{pmatrix}\\begin{pmatrix} ct \\\\ x \\end{pmatrix}}$$

成分で書くと：

$$ct' = \\gamma(ct - \\beta x), \\quad x' = \\gamma(x - \\beta ct)$$

**対称性**：これは双曲回転（ラピディティ $\\phi$ で $\\tanh\\phi = \\beta$）の形。
$$\\gamma = \\cosh\\phi, \\quad \\gamma\\beta = \\sinh\\phi$$

---

## (2) 時間の遅れ

**状況設定**

$S$ で静止している時計を考える（座標は $x = x_0$ 固定）。この時計が時刻 $t_1$ から $t_2$ までに経過する時間は **固有時間**：

$$\\Delta\\tau = t_2 - t_1$$

**$S'$ から見た時間間隔**

ローレンツ変換：$ct'_i = \\gamma(ct_i - \\beta x_0)$。$x_0$ は定数なので：

$$c\\Delta t' = c(t'_2 - t'_1) = \\gamma(ct_2 - ct_1) = c\\gamma\\Delta\\tau$$

$$\\boxed{\\Delta t' = \\gamma\\Delta\\tau}$$

**$\\gamma \\geq 1$** なので $\\Delta t' \\geq \\Delta\\tau$：**動いている時計は遅れて見える**（時間の遅れ、time dilation）。

**注意**：これは運動時計だけが遅れるのではなく、対称性から $S$ から見ると $S'$ の時計も遅れて見える。「相対的」に両方が遅れるのに矛盾ないのが相対論の深いところ。

**実験的検証**：
- ミューオンの寿命：高エネルギー宇宙線ミューオンは大気上層で生成されるが、本来の寿命ではすぐ崩壊するはずなのに地表に到達する
- GPS衛星：相対論補正なしでは位置誤差が1日あたり数kmに

---

## (3) Lorentz収縮

**状況設定**

$S$ で静止した棒が $S$ での長さ $L_0$（両端 $x_A, x_B$ とすると $L_0 = x_B - x_A$）。これは**固有長**。

**$S'$ での長さの定義**

$S'$ から測定するとき、**両端の位置を同時刻に測る**必要がある（動いているので、時刻が違うと正しい長さが出ない）。

$S'$ で時刻 $t'$ に両端の座標を読む：$x'_A = \\gamma(x_A - \\beta c t_A), x'_B = \\gamma(x_B - \\beta c t_B)$

**条件 $t'_A = t'_B$（$S'$ で同時）**

$ct'_A = \\gamma(ct_A - \\beta x_A) = ct'_B = \\gamma(ct_B - \\beta x_B)$ より：

$$t_B - t_A = \\frac{\\beta}{c}(x_B - x_A) = \\frac{\\beta L_0}{c}$$

**長さの計算**

$$L' = x'_B - x'_A = \\gamma[(x_B - x_A) - \\beta c(t_B - t_A)] = \\gamma[L_0 - \\beta^2 L_0] = \\gamma L_0(1 - \\beta^2) = \\frac{L_0}{\\gamma}$$

$$\\boxed{L' = L_0\\sqrt{1-\\beta^2} = \\frac{L_0}{\\gamma}}$$

**$\\gamma > 1$** より $L' < L_0$：**動いている棒は縮んで見える**（Lorentz収縮）。

**物理的帰結**

- 時間の遅れと長さの収縮は、**同時刻の相対性**から一体に理解できる
- 4次元時空での「回転」としてのローレンツ変換という視点では、「回転で投影が変わる」のに似た現象
- GPS等の精密測位、粒子加速器、宇宙線実験で日常的に適用される

**ポイント**：時間の遅れも Lorentz収縮も、**$v/c$ が1に近くないと感じない**。日常生活では $\\beta \\sim 10^{-8}$ なので補正は微小。ただし宇宙論的距離・精密時計では必須です。`,
  },

  // ===== 名古屋大学 =====
  {
    id: "nagoya-2025-phys-1", universitySlug: "nagoya", year: 2025, subject: "物理学", problemNumber: 1,
    title: "斜面上の物体とエネルギー保存", field: "mechanics", difficulty: "basic",
    tags: ["エネルギー保存", "摩擦", "斜面"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2025年度 物理学 問1

## 問題の設定
傾斜角 $\\theta$ のなめらかな斜面上に、質量 $m$ の物体を置いて静かにはなす。斜面の下端から水平面が続き、水平面上での動摩擦係数は $\\mu$ である。物体が斜面を高さ $h$ 下りきった点から滑走する。

## 問われている内容
(1) 斜面下端での物体の速さ $v_0$ を求めよ。
(2) 水平面上で物体が距離 $L$ 進んで停止した。$L$ を $h, \\mu, g$ で表せ。
(3) $h = 2.0$ m, $\\mu = 0.30$ のときの $L$ を求めよ。`,
    solution: `## (1) 斜面下端での速さ

**エネルギー保存則**

斜面はなめらか（摩擦なし）なので力学的エネルギーが保存：
$$mgh = \\frac{1}{2}mv_0^2 \\quad \\Rightarrow \\quad \\boxed{v_0 = \\sqrt{2gh}}$$

質量 $m$ によらず、高さ $h$ だけで決まるのがポイント（ガリレオの自由落下と同じ）。

## (2) 水平面での停止距離

**仕事とエネルギーの関係**

水平面での運動エネルギーは $\\frac{1}{2}mv_0^2 = mgh$。これが全て摩擦力の仕事に変換されて停止：
$$mgh = \\mu m g L$$

$$\\boxed{L = \\frac{h}{\\mu}}$$

**ポイント**：質量 $m$ が消える。これも自由落下と同じで「物体の重さが違っても滑る距離は同じ」。

## (3) 数値計算

$$L = \\frac{2.0}{0.30} \\approx \\boxed{6.7 \\text{ m}}$$`,
  },
  {
    id: "nagoya-2025-phys-2", universitySlug: "nagoya", year: 2025, subject: "物理学", problemNumber: 2,
    title: "点電荷の作る電位・電場", field: "electromagnetism", difficulty: "basic",
    tags: ["クーロンの法則", "電位", "重ね合わせ"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2025年度 物理学 問2

## 問題の設定
真空中の $xy$ 平面に、点 $A(a, 0)$ と $B(-a, 0)$ にそれぞれ電荷 $+q, -q$ を固定する（電気双極子）。真空の誘電率を $\\varepsilon_0$ とする。

## 問われている内容
(1) 原点 $O$ における電位 $V(O)$ を求めよ。
(2) $y$ 軸上の任意の点 $P(0, y)$ における電位 $V(P)$ を求めよ。
(3) $r \\gg a$（原点から遠方）での電位の振る舞いを、双極子モーメント $p = 2qa$ を用いて近似的に表せ。`,
    solution: `## (1) 原点での電位

重ね合わせの原理：$V(O) = V_A + V_B$
$$V(O) = \\frac{1}{4\\pi\\varepsilon_0}\\left(\\frac{q}{a} + \\frac{-q}{a}\\right) = \\boxed{0}$$

$y$ 軸上は対称性から常にゼロ（等距離）。

## (2) $y$ 軸上の点

$P$ から $A, B$ までの距離はどちらも $\\sqrt{a^2 + y^2}$：
$$V(P) = \\frac{1}{4\\pi\\varepsilon_0}\\left(\\frac{q}{\\sqrt{a^2+y^2}} - \\frac{q}{\\sqrt{a^2+y^2}}\\right) = \\boxed{0}$$

## (3) 遠方近似（双極子ポテンシャル）

$x$ 軸上の遠方点 $(r, 0)$ では（$r \\gg a$）：
$$V \\approx \\frac{1}{4\\pi\\varepsilon_0}\\left[\\frac{q}{r-a} - \\frac{q}{r+a}\\right] \\approx \\frac{q}{4\\pi\\varepsilon_0}\\cdot\\frac{2a}{r^2}$$

一般に双極子軸から角度 $\\theta$ の方向で：
$$\\boxed{V \\approx \\frac{p\\cos\\theta}{4\\pi\\varepsilon_0 r^2}}$$

**物理的意味**：双極子ポテンシャルは $1/r^2$、点電荷の $1/r$ より早く減衰。モーメント $p$ の方向に沿って大きい。分子双極子（水分子等）の遠方での電場の基本形。`,
  },
  {
    id: "nagoya-2024-phys-1", universitySlug: "nagoya", year: 2024, subject: "物理学", problemNumber: 1,
    title: "調和振動子の時間発展と不確定性", field: "quantum", difficulty: "standard",
    tags: ["調和振動子", "時間発展", "不確定性関係"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2024年度 物理学 問1

## 問題の設定
質量 $m$、角振動数 $\\omega$ の 1 次元調和振動子。基底状態 $|0\\rangle$ と第一励起状態 $|1\\rangle$ の重ね合わせ状態
$$|\\psi(0)\\rangle = \\frac{1}{\\sqrt{2}}(|0\\rangle + |1\\rangle)$$
から時間発展を考える。

## 問われている内容
(1) 時刻 $t$ での状態 $|\\psi(t)\\rangle$ を書き下せ。
(2) 位置の期待値 $\\langle x\\rangle_t$ を計算し、振動を示せ。
(3) $\\langle x^2\\rangle_t$ を計算し、不確定性 $\\Delta x$ の時間依存性を求めよ。`,
    solution: `## (1) 時間発展

エネルギー固有値 $E_n = \\hbar\\omega(n + 1/2)$。時間発展：
$$|\\psi(t)\\rangle = \\frac{1}{\\sqrt{2}}\\left(e^{-iE_0 t/\\hbar}|0\\rangle + e^{-iE_1 t/\\hbar}|1\\rangle\\right)$$

全体位相を除いて：
$$\\boxed{|\\psi(t)\\rangle = \\frac{e^{-i\\omega t/2}}{\\sqrt{2}}(|0\\rangle + e^{-i\\omega t}|1\\rangle)}$$

## (2) 位置の期待値

$\\hat{x} = \\sqrt{\\hbar/(2m\\omega)}(\\hat{a} + \\hat{a}^\\dagger)$ の期待値。非ゼロになるのは $\\langle 0|\\hat{x}|1\\rangle$ と共役のみ。

$\\langle 0|\\hat{a}|1\\rangle = 1$、$\\langle 1|\\hat{a}^\\dagger|0\\rangle = 1$ から：
$$\\langle x\\rangle_t = \\sqrt{\\frac{\\hbar}{2m\\omega}}\\cos\\omega t$$

$$\\boxed{\\langle x\\rangle_t = x_0\\cos\\omega t, \\quad x_0 = \\sqrt{\\frac{\\hbar}{2m\\omega}}}$$

**ポイント**：重ね合わせ状態では期待値が古典的に振動する（コヒーレント状態の萌芽）。エネルギー固有状態は定常で動かないが、重ね合わせは動く。

## (3) 分散

$\\hat{x}^2$ を展開し、各項の期待値を計算。ゼロ点揺らぎ $\\hbar/(2m\\omega)$ + 励起による上乗せ：
$$\\langle x^2\\rangle_t = \\frac{\\hbar}{m\\omega}(1 + \\text{振動項})$$

時間平均では $(\\Delta x)^2 \\sim \\hbar/(m\\omega)$、古典限界では $x_0^2/2$ と一致する。`,
  },
  {
    id: "nagoya-2024-phys-2", universitySlug: "nagoya", year: 2024, subject: "物理学", problemNumber: 2,
    title: "熱伝導方程式の解", field: "math", difficulty: "standard",
    tags: ["熱伝導方程式", "フーリエ級数", "境界値問題"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2024年度 物理学 問2

## 問題の設定
長さ $L$ の 1 次元棒における熱伝導方程式
$$\\frac{\\partial u}{\\partial t} = \\kappa\\frac{\\partial^2 u}{\\partial x^2}$$
を、境界条件 $u(0, t) = u(L, t) = 0$ と初期条件 $u(x, 0) = f(x)$ で解く。

## 問われている内容
(1) 変数分離 $u = X(x)T(t)$ を仮定して基本解を求めよ。
(2) フーリエ級数を用いて一般解を書け。
(3) $f(x) = \\sin(\\pi x/L)$ のときの解 $u(x, t)$ を求めよ。`,
    solution: `## (1) 変数分離

$u = X(x)T(t)$ を代入：
$$XT' = \\kappa X''T \\Rightarrow \\frac{T'}{\\kappa T} = \\frac{X''}{X} = -\\lambda$$

$X'' + \\lambda X = 0$ を境界条件 $X(0) = X(L) = 0$ で解く：
$$X_n(x) = \\sin\\frac{n\\pi x}{L}, \\quad \\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2$$

時間部分：$T_n(t) = e^{-\\kappa\\lambda_n t}$

$$\\boxed{u_n(x, t) = \\sin\\frac{n\\pi x}{L}\\, e^{-\\kappa(n\\pi/L)^2 t}}$$

## (2) 一般解

$$u(x, t) = \\sum_{n=1}^{\\infty} b_n \\sin\\frac{n\\pi x}{L}\\, e^{-\\kappa(n\\pi/L)^2 t}$$

初期条件のフーリエ展開から：
$$b_n = \\frac{2}{L}\\int_0^L f(x)\\sin\\frac{n\\pi x}{L}\\,dx$$

## (3) 特定の初期条件

$f(x) = \\sin(\\pi x/L)$ はすでに $n=1$ のモード。$b_1 = 1$、他はゼロ：
$$\\boxed{u(x, t) = \\sin\\frac{\\pi x}{L}\\,e^{-\\kappa(\\pi/L)^2 t}}$$

**ポイント**：高次モードほど減衰が速い（$e^{-n^2\\kappa t}$）。拡散は短波長成分を先に均す、という直観と一致。`,
  },
  {
    id: "nagoya-2023-phys-1", universitySlug: "nagoya", year: 2023, subject: "物理学", problemNumber: 1,
    title: "回転座標系とコリオリ力", field: "mechanics", difficulty: "standard",
    tags: ["回転座標系", "コリオリ力", "遠心力"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2023年度 物理学 問1

## 問題の設定
地球の自転角速度を $\\vec{\\Omega}$（極方向、北向き）とする。地表付近で質量 $m$ の物体を考える。緯度 $\\lambda$ の場所における回転座標系で、コリオリ力と遠心力を考える。

## 問われている内容
(1) 回転座標系での見かけの力（遠心力・コリオリ力）の式を示せ。
(2) 水平に速さ $v$ で北向きに運動する物体に作用するコリオリ力の向きと大きさを求めよ。
(3) 自由落下する物体が赤道付近で鉛直から東側に偏る理由を説明せよ。`,
    solution: `## (1) 回転座標系の見かけの力

慣性系でニュートン方程式を書いてから、位置 $\\vec{r}$、速度 $\\vec{v}$、加速度 $\\vec{a}$ を回転系の量で表すと：
$$m\\vec{a}_{\\text{rot}} = \\vec{F} - 2m\\vec{\\Omega}\\times\\vec{v}_{\\text{rot}} - m\\vec{\\Omega}\\times(\\vec{\\Omega}\\times\\vec{r})$$

- 第2項：**コリオリ力** $\\vec{F}_C = -2m\\vec{\\Omega}\\times\\vec{v}$
- 第3項：**遠心力** $\\vec{F}_{cen} = -m\\vec{\\Omega}\\times(\\vec{\\Omega}\\times\\vec{r})$

## (2) 北向き運動のコリオリ力

緯度 $\\lambda$ で、$\\vec{\\Omega}$ を鉛直成分 $\\Omega\\sin\\lambda$ と水平北向き成分 $\\Omega\\cos\\lambda$ に分解。水平に北向きの $\\vec{v}$ に対して：
$$\\vec{F}_C = -2m\\vec{\\Omega}\\times\\vec{v}$$

鉛直成分のみが水平方向のコリオリ力を生み、その向きは**東向き**（北半球では $\\vec{v}$ の右側）。大きさ：
$$\\boxed{|F_C| = 2m\\Omega v\\sin\\lambda}$$

## (3) 自由落下の東偏

自由落下中の物体は下向きの速度を持つ。赤道では $\\vec{\\Omega}$ は水平北向きなので：
$$\\vec{F}_C = -2m\\vec{\\Omega}\\times\\vec{v}_{\\text{下}}$$
$\\vec{\\Omega}$（北）× $\\vec{v}$（下）は**西向き**、コリオリ力は $-$ を掛けて**東向き**。

**物理的意味**：塔の上で手放した物体は真下ではなく、わずかに東寄りに落下する（Coriolis deflection of falling bodies）。19世紀に Hall が 150 m の落下塔で初めて実測した。`,
  },
  {
    id: "nagoya-2023-phys-2", universitySlug: "nagoya", year: 2023, subject: "物理学", problemNumber: 2,
    title: "導体内の電流と緩和時間", field: "electromagnetism", difficulty: "standard",
    tags: ["オームの法則", "ドリフト速度", "緩和時間"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2023年度 物理学 問2

## 問題の設定
導体中の自由電子（電荷 $-e$、質量 $m_e$、数密度 $n$）に外部電場 $\\vec{E}$ を印加する。電子は格子との衝突により、平均緩和時間 $\\tau$ で運動量を失う。

## 問われている内容
(1) Drude モデル（$m_e d\\vec{v}/dt = -e\\vec{E} - m_e\\vec{v}/\\tau$）を解き、定常状態でのドリフト速度 $\\vec{v}_d$ を求めよ。
(2) 電流密度 $\\vec{j} = -ne\\vec{v}_d$ とオームの法則 $\\vec{j} = \\sigma\\vec{E}$ の比較から、電気伝導率 $\\sigma$ を求めよ。
(3) 銅で $n \\sim 10^{29}$ m⁻³、$\\sigma \\sim 6 \\times 10^7$ S/m から緩和時間 $\\tau$ のオーダーを見積もれ。`,
    solution: `## (1) ドリフト速度

定常状態 $d\\vec{v}/dt = 0$：
$$0 = -e\\vec{E} - \\frac{m_e\\vec{v}_d}{\\tau}$$
$$\\boxed{\\vec{v}_d = -\\frac{e\\tau}{m_e}\\vec{E}}$$

電場と逆向き（電子が負電荷なので）。

## (2) 電気伝導率

$\\vec{j} = -ne\\vec{v}_d = (ne^2\\tau/m_e)\\vec{E}$：
$$\\boxed{\\sigma = \\frac{ne^2\\tau}{m_e}}$$

**ポイント**：伝導率は電子数密度と緩和時間の積に比例。低温で $\\tau$ が長くなる（フォノン散乱が減る）ため伝導率が上がる、という金属の典型挙動と整合。

## (3) 緩和時間のオーダー

$\\tau = m_e\\sigma/(ne^2)$。$m_e \\sim 9.1\\times 10^{-31}$ kg, $e \\sim 1.6\\times 10^{-19}$ C：
$$\\tau \\sim \\frac{9\\times 10^{-31}\\cdot 6\\times 10^7}{10^{29}\\cdot (1.6\\times 10^{-19})^2} \\approx \\boxed{2\\times 10^{-14} \\text{ s}}$$

約 20 フェムト秒。フェルミ速度 $v_F \\sim 10^6$ m/s と組み合わせると平均自由行程 $\\sim 20$ nm。`,
  },
  {
    id: "nagoya-2022-phys-1", universitySlug: "nagoya", year: 2022, subject: "物理学", problemNumber: 1,
    title: "減衰振動と共振", field: "mechanics", difficulty: "standard",
    tags: ["減衰振動", "強制振動", "共振"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2022年度 物理学 問1

## 問題の設定
バネ定数 $k$、質量 $m$、速度に比例する減衰（係数 $b$）、外力 $F_0\\cos\\omega t$ を受ける1次元振動子
$$m\\ddot{x} + b\\dot{x} + kx = F_0\\cos\\omega t$$

## 問われている内容
(1) 定常応答 $x = A\\cos(\\omega t - \\phi)$ を仮定して、振幅 $A$ と位相遅れ $\\phi$ を求めよ。
(2) 振幅が最大となる周波数（共振周波数）を求めよ。
(3) 弱減衰極限 $b \\ll \\sqrt{mk}$ での共振ピークの鋭さ（Q 因子）を論じよ。`,
    solution: `## (1) 定常応答

複素表示 $x = \\text{Re}[Ze^{i\\omega t}]$ で解くと楽。代入：
$$(-m\\omega^2 + ib\\omega + k)Z = F_0$$
$$Z = \\frac{F_0}{(k - m\\omega^2) + ib\\omega}$$

振幅と位相：
$$\\boxed{A = \\frac{F_0}{\\sqrt{(k-m\\omega^2)^2 + (b\\omega)^2}}, \\quad \\tan\\phi = \\frac{b\\omega}{k - m\\omega^2}}$$

## (2) 共振周波数

$dA/d\\omega = 0$ から、分母の最小を探す：
$$\\omega_{res} = \\sqrt{\\frac{k}{m} - \\frac{b^2}{2m^2}}$$

弱減衰では $\\omega_{res} \\approx \\omega_0 = \\sqrt{k/m}$（自由振動と同じ）。

## (3) Q 因子

Q は「共振ピークの鋭さ」の指標：
$$\\boxed{Q = \\frac{\\omega_0}{\\Delta\\omega} = \\frac{m\\omega_0}{b}}$$

$Q \\gg 1$ で鋭い共振（楽器、時計、アンテナ等）。逆に $Q \\sim 1$ では幅広い応答（実用例：緩衝装置）。`,
  },
  {
    id: "nagoya-2022-phys-2", universitySlug: "nagoya", year: 2022, subject: "物理学", problemNumber: 2,
    title: "理想気体の断熱過程", field: "thermodynamics", difficulty: "basic",
    tags: ["断熱過程", "比熱比", "ポアソンの式"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2022年度 物理学 問2

## 問題の設定
$n$ モルの理想気体（定圧比熱 $C_p$、定積比熱 $C_V$、比熱比 $\\gamma = C_p/C_V$）が断熱過程を行う。状態 1 を $(P_1, V_1, T_1)$、状態 2 を $(P_2, V_2, T_2)$ とする。

## 問われている内容
(1) 断熱過程で $PV^\\gamma = \\text{const}$（ポアソンの式）が成立することを導け。
(2) 対応する $TV^{\\gamma-1} = \\text{const}$ も示せ。
(3) 断熱過程で気体が外界にする仕事 $W$ を、$(P_1V_1, P_2V_2, \\gamma)$ で表せ。`,
    solution: `## (1) ポアソンの式 $PV^\\gamma = $ const

断熱 $\\delta Q = 0$。第1法則 $dU = \\delta Q - PdV = -PdV$。理想気体 $dU = nC_V dT$：
$$nC_V dT = -P dV$$

状態方程式 $PV = nRT$ より $dT = (PdV + VdP)/(nR)$：
$$\\frac{C_V}{R}(PdV + VdP) = -PdV$$

$C_V/R = 1/(\\gamma - 1)$、$C_p - C_V = R$ より整理：
$$\\gamma P dV + V dP = 0 \\Rightarrow \\frac{dP}{P} + \\gamma\\frac{dV}{V} = 0$$

積分して $\\boxed{PV^\\gamma = \\text{const}}$。

## (2) $TV^{\\gamma-1}$

$PV = nRT \\Rightarrow P \\propto T/V$。ポアソン式に代入：
$$\\frac{T}{V}\\cdot V^\\gamma = \\text{const} \\Rightarrow \\boxed{TV^{\\gamma-1} = \\text{const}}$$

## (3) 仕事

$W = \\int_{V_1}^{V_2} P dV$。$P = P_1 V_1^\\gamma / V^\\gamma$ を使って積分：
$$W = P_1 V_1^\\gamma \\int_{V_1}^{V_2} V^{-\\gamma}dV = \\frac{P_1 V_1^\\gamma(V_2^{1-\\gamma} - V_1^{1-\\gamma})}{1 - \\gamma}$$

整理：
$$\\boxed{W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}}$$

**物理的意味**：膨張では $P_2V_2 < P_1V_1$（温度低下）、$W > 0$（気体が仕事をする）と整合。`,
  },
  {
    id: "nagoya-2021-phys-1", universitySlug: "nagoya", year: 2021, subject: "物理学", problemNumber: 1,
    title: "シュテルン・ゲルラッハ実験", field: "quantum", difficulty: "standard",
    tags: ["スピン", "空間量子化", "射影"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2021年度 物理学 問1

## 問題の設定
銀原子ビーム（スピン $1/2$）を不均一な磁場中に通す。磁場の勾配は $z$ 方向。続いて第2の磁場（勾配は $x$ 方向）を通す。

## 問われている内容
(1) 第1磁場通過後、ビームがどう分裂するかを説明せよ。
(2) $z$ 上向きスピンの状態を $x$ 基底に展開せよ。
(3) 第2磁場（$x$ 勾配）に $z$ 上向きビームだけを通した場合、何本に分裂し、各本への確率はいくつか。`,
    solution: `## (1) 第1磁場通過後

スピン $1/2$ は 2 つの固有状態 $|z,\\pm\\rangle$（$S_z = \\pm\\hbar/2$）。不均一磁場は磁気モーメントに力 $\\vec{F} = \\nabla(\\vec\\mu\\cdot\\vec{B})$ を与え、$S_z = \\pm\\hbar/2$ がそれぞれ上下に曲がる。

$$\\boxed{\\text{2本に分裂}}$$

古典的には連続的な向きが可能なはずだが量子力学では離散的（空間量子化）。

## (2) 基底変換

パウリ行列の固有ベクトル計算（東大 2023 問題と同様）：
$$|z, +\\rangle = \\frac{1}{\\sqrt{2}}(|x, +\\rangle + |x, -\\rangle)$$

## (3) 第2磁場での分裂

$z$ 上向きビームは $|z, +\\rangle$。$x$ 磁場では $x$ 基底で測定される。展開係数から確率：
$$P(x, +) = \\left|\\frac{1}{\\sqrt 2}\\right|^2 = \\frac{1}{2}, \\quad P(x, -) = \\frac{1}{2}$$

$$\\boxed{\\text{2本に等分分裂（各 50\\%）}}$$

**ポイント**：スピンは 1 軸を確定すると別軸では完全に不確定。量子測定の非可換性を直接示す歴史的実験。`,
  },
  {
    id: "nagoya-2021-phys-2", universitySlug: "nagoya", year: 2021, subject: "物理学", problemNumber: 2,
    title: "LC 回路と電磁振動", field: "electromagnetism", difficulty: "basic",
    tags: ["LC回路", "電磁振動", "エネルギー保存"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2021年度 物理学 問2

## 問題の設定
インダクタンス $L$ のコイルと容量 $C$ のコンデンサからなる LC 回路。$t = 0$ でコンデンサに電荷 $Q_0$、電流 $I(0) = 0$。

## 問われている内容
(1) 電荷 $Q(t)$ の運動方程式を立て、解を求めよ。
(2) 振動周波数 $\\omega_0$ を書け。
(3) 各時刻でのコンデンサのエネルギーとコイルのエネルギーを求め、総エネルギーが保存することを確認せよ。`,
    solution: `## (1) 運動方程式と解

キルヒホッフ則（閉回路の電圧和ゼロ）：
$$\\frac{Q}{C} + L\\frac{dI}{dt} = 0, \\quad I = \\frac{dQ}{dt}$$

$$L\\ddot{Q} + \\frac{Q}{C} = 0$$

これは角振動数 $\\omega_0 = 1/\\sqrt{LC}$ の単振動。初期条件から：
$$\\boxed{Q(t) = Q_0\\cos\\omega_0 t, \\quad I(t) = -Q_0\\omega_0\\sin\\omega_0 t}$$

## (2) 振動周波数

$$\\boxed{\\omega_0 = \\frac{1}{\\sqrt{LC}}}$$

## (3) エネルギー保存

コンデンサ：$U_C = Q^2/(2C) = (Q_0^2/2C)\\cos^2\\omega_0 t$
コイル：$U_L = LI^2/2 = (L Q_0^2\\omega_0^2/2)\\sin^2\\omega_0 t = (Q_0^2/2C)\\sin^2\\omega_0 t$

総計：
$$U = U_C + U_L = \\frac{Q_0^2}{2C}(\\cos^2 + \\sin^2) = \\frac{Q_0^2}{2C} = \\text{一定}\\ \\checkmark$$

**物理的意味**：電気エネルギー ↔ 磁気エネルギーが交互に振動。力学での単振動（運動+ポテンシャル）と完全に類似。`,
  },

  // ===== 九州大学 =====
  {
    id: "kyushu-2025-phys-1", universitySlug: "kyushu", year: 2025, subject: "物理学", problemNumber: 1,
    title: "回転と角運動量保存", field: "mechanics", difficulty: "basic",
    tags: ["角運動量保存", "フィギュアスケーター", "慣性モーメント"], isFree: true,
    statement: `**対応問題**: 九州大学 2025年度 物理学 問1

## 問題の設定
半径 $R$、質量 $M$ の一様な円盤（慣性モーメント $I_0 = MR^2/2$）が、中心を通る鉛直軸まわりに角速度 $\\omega_0$ で回転している。円盤の縁に質量 $m$ の小物体がくっつく。

## 問われている内容
(1) 角運動量保存則から、小物体がついた後の角速度 $\\omega_1$ を求めよ。
(2) 系の運動エネルギーは、ついた前後でどう変化するか。
(3) エネルギー変化の物理的理由を説明せよ。`,
    solution: `## (1) 角運動量保存

外部トルクなし → 角運動量 $L = I\\omega$ 保存。
- 初期：$L = I_0\\omega_0 = (MR^2/2)\\omega_0$
- 後：$L = (I_0 + mR^2)\\omega_1$

$$\\boxed{\\omega_1 = \\frac{I_0}{I_0 + mR^2}\\omega_0 = \\frac{M}{M + 2m}\\omega_0}$$

$m > 0$ で $\\omega_1 < \\omega_0$：小物体がつくと遅くなる。

## (2) 運動エネルギー

$K = L^2/(2I)$ の形で書くと便利：
$$K_0 = \\frac{L^2}{2I_0}, \\quad K_1 = \\frac{L^2}{2(I_0 + mR^2)}$$

$K_1 < K_0$：**運動エネルギーは減少**。減少量：
$$\\Delta K = K_0 - K_1 = \\frac{L^2}{2}\\cdot\\frac{mR^2}{I_0(I_0 + mR^2)} > 0$$

## (3) エネルギー損失の理由

小物体が円盤に**完全非弾性衝突**したのと同じ。接触時の摩擦で運動エネルギーが熱として散逸する。

**ポイント**：角運動量は保存、しかしエネルギーは保存しない（非弾性衝突の典型）。フィギュアスケーターが腕を広げる→収縮させるときはエネルギー保存（スケーター自身が仕事をする）。`,
  },
  {
    id: "kyushu-2025-phys-2", universitySlug: "kyushu", year: 2025, subject: "物理学", problemNumber: 2,
    title: "光電効果", field: "quantum", difficulty: "basic",
    tags: ["光電効果", "仕事関数", "プランク定数"], isFree: true,
    statement: `**対応問題**: 九州大学 2025年度 物理学 問2

## 問題の設定
金属に振動数 $\\nu$ の光を当てると電子が飛び出す（光電効果）。金属の仕事関数を $W$、プランク定数を $h$ とする。

## 問われている内容
(1) 飛び出す電子の最大運動エネルギー $K_{max}$ を求めよ。
(2) 光電効果が起こる最低振動数（閾値振動数）$\\nu_0$ を求めよ。
(3) 2 つの振動数 $\\nu_1, \\nu_2$ での $K_{max}$ 測定から $h$ と $W$ を決定する方法を示せ。`,
    solution: `## (1) アインシュタインの光電方程式

光子1個のエネルギー $h\\nu$ が電子1個に渡される。$W$ だけ金属から脱出するのに消費：
$$\\boxed{K_{max} = h\\nu - W}$$

重要：$K_{max}$ は光の強度ではなく**振動数**だけで決まる。古典波動論と矛盾し、光の粒子性を示す。

## (2) 閾値振動数

$K_{max} \\geq 0$ の条件から：
$$\\boxed{\\nu_0 = \\frac{W}{h}}$$

$\\nu < \\nu_0$ ではどんなに光を強くしても電子は出ない。

## (3) $h, W$ の決定

2 本の直線方程式：
$$K_1 = h\\nu_1 - W, \\quad K_2 = h\\nu_2 - W$$

辺々引くと $W$ が消える：
$$h = \\frac{K_2 - K_1}{\\nu_2 - \\nu_1}$$

得た $h$ を元式に代入：
$$W = h\\nu_1 - K_1$$

**ポイント**：これがミリカンの実験（1914）の原理。ミリカンは光電効果の実験で $h$ を精密測定し、プランク仮説を実証した（1923年ノーベル賞）。`,
  },
  {
    id: "kyushu-2024-phys-1", universitySlug: "kyushu", year: 2024, subject: "物理学", problemNumber: 1,
    title: "Ampere の法則と磁場", field: "electromagnetism", difficulty: "standard",
    tags: ["アンペールの法則", "ソレノイド", "対称性"], isFree: true,
    statement: `**対応問題**: 九州大学 2024年度 物理学 問1

## 問題の設定
長さが十分長い無限直線電流 $I$ と、単位長さあたり巻き数 $n$ の無限ソレノイドに電流 $I$ が流れている状況を考える。

## 問われている内容
(1) 直線電流から距離 $r$ の位置における磁場の大きさと向きを求めよ。
(2) ソレノイド内部と外部の磁場を求めよ。
(3) それぞれで対称性がどのように使われるかを説明せよ。`,
    solution: `## (1) 直線電流

対称性：電流が作る磁場は円筒対称で、距離 $r$ の円周上で一定強度、接線方向。半径 $r$ の円を Ampere の法則の経路に：
$$\\oint \\vec{B}\\cdot d\\vec{l} = B \\cdot 2\\pi r = \\mu_0 I$$
$$\\boxed{B = \\frac{\\mu_0 I}{2\\pi r}}$$

向きは右手の法則（電流の向きに親指、磁場は指先方向）。

## (2) ソレノイド

対称性：内部で磁場は軸方向に一定、外部はほぼゼロ（無限長の極限）。
経路を「内部の一部を軸方向、外部の一部を軸方向、両者を結ぶ短い径方向」の矩形に：
$$BL = \\mu_0(nL)I$$
$$\\boxed{B_{内} = \\mu_0 n I, \\quad B_{外} = 0}$$

## (3) 対称性の使い方

- 直線電流：**並進対称性（軸方向）** + **回転対称性** → 磁場は $r$ の関数、接線方向
- ソレノイド：**並進対称性（軸方向）** + **回転対称性** → 内部は一様、軸方向
- どちらも Ampere の法則を**ベクトル積分**なしに使える形に絞り込める

**ポイント**：ガウスの法則での電場の扱いと完全に対応。対称性が高い問題では積分公式の丸暗記より、対称性の議論のほうが重要。`,
  },
  {
    id: "kyushu-2024-phys-2", universitySlug: "kyushu", year: 2024, subject: "物理学", problemNumber: 2,
    title: "熱力学ポテンシャルとマクスウェル関係", field: "thermodynamics", difficulty: "advanced",
    tags: ["自由エネルギー", "マクスウェル関係式", "Legendre変換"], isFree: true,
    statement: `**対応問題**: 九州大学 2024年度 物理学 問2

## 問題の設定
独立変数 $(T, V)$ を選んだ閉じた系の熱力学を考える。内部エネルギーは $U(S, V)$、ヘルムホルツ自由エネルギー $F = U - TS$。

## 問われている内容
(1) $dU = TdS - PdV$ から、$F$ の全微分 $dF$ を $(T, V)$ の関数として書け。
(2) マクスウェルの関係式 $(\\partial S/\\partial V)_T = (\\partial P/\\partial T)_V$ を示せ。
(3) 理想気体に対してこの関係を具体的に確認せよ。`,
    solution: `## (1) $dF$ の全微分

$F = U - TS$：
$$dF = dU - TdS - SdT = (TdS - PdV) - TdS - SdT$$
$$\\boxed{dF = -SdT - PdV}$$

つまり $(\\partial F/\\partial T)_V = -S$, $(\\partial F/\\partial V)_T = -P$。

## (2) マクスウェル関係式

$F$ の 2 階偏微分の交換：
$$\\frac{\\partial^2 F}{\\partial V\\partial T} = \\frac{\\partial^2 F}{\\partial T\\partial V}$$

左右それぞれ計算：
- $\\partial(-S)/\\partial V|_T = -(\\partial S/\\partial V)_T$
- $\\partial(-P)/\\partial T|_V = -(\\partial P/\\partial T)_V$

等値して：
$$\\boxed{\\left(\\frac{\\partial S}{\\partial V}\\right)_T = \\left(\\frac{\\partial P}{\\partial T}\\right)_V}$$

## (3) 理想気体での確認

$PV = nRT \\Rightarrow P = nRT/V$：
$$\\left(\\frac{\\partial P}{\\partial T}\\right)_V = \\frac{nR}{V}$$

一方 $S$ について、理想気体のエントロピー公式 $S = nC_V\\ln T + nR\\ln V + \\text{const}$ から：
$$\\left(\\frac{\\partial S}{\\partial V}\\right)_T = \\frac{nR}{V}$$

両辺一致 ✓

**ポイント**：マクスウェル関係式は計測しにくい量（エントロピー変化）を、計測しやすい量（$P, T, V$ の関係）に変換する強力な道具。`,
  },
  {
    id: "kyushu-2023-phys-1", universitySlug: "kyushu", year: 2023, subject: "物理学", problemNumber: 1,
    title: "変分原理とフェルマーの原理", field: "optics", difficulty: "standard",
    tags: ["変分原理", "フェルマーの原理", "スネルの法則"], isFree: true,
    statement: `**対応問題**: 九州大学 2023年度 物理学 問1

## 問題の設定
屈折率 $n_1, n_2$ の 2 媒質境界を通る光線がフェルマーの原理（光路長 $\\int n\\,ds$ が停留値をとる）に従うとする。

## 問われている内容
(1) フェルマーの原理からスネルの法則を導け。
(2) 同質量球体の放物運動との類似性を論じよ。
(3) フェルマーの原理がより一般的な「最小作用原理」の特殊例であることを説明せよ。`,
    solution: `## (1) スネルの法則の導出

媒質1 の点 $A(0, h_1)$ から媒質2 の点 $B(d, -h_2)$ まで、境界上の点 $P(x, 0)$ を通る。光路長：
$$L(x) = n_1\\sqrt{x^2 + h_1^2} + n_2\\sqrt{(d-x)^2 + h_2^2}$$

停留値条件 $dL/dx = 0$：
$$\\frac{n_1 x}{\\sqrt{x^2 + h_1^2}} = \\frac{n_2(d-x)}{\\sqrt{(d-x)^2 + h_2^2}}$$

左辺 = $n_1\\sin\\theta_1$、右辺 = $n_2\\sin\\theta_2$：
$$\\boxed{n_1\\sin\\theta_1 = n_2\\sin\\theta_2}$$

## (2) 類似性

- 光：$\\int n\\,ds$ が停留 → 光路
- 古典力学：$\\int L\\,dt$（作用）が停留 → 運動経路

光線は「光学ラグランジアン $n$」を持つ粒子のように振る舞う。屈折率の勾配が力のように作用する（重力レンズ効果などの古典直観的解釈）。

## (3) 最小作用原理

一般に物理系の運動は**作用** $S = \\int L\\,dt$ の停留化で決まる（ハミルトンの原理）。光の場合は
$$S_{光} = \\int n\\,ds = \\int \\frac{n}{c}\\,ds\\cdot c$$

媒質中の光速 $c/n$ を考えれば、これは「光が最短時間経路を選ぶ」原理。ラグランジアン形式の統一的視点では、光線も粒子も同じ構造。

**ポイント**：ファインマンはこの原理を量子力学（経路積分）の基礎にまで拡張しました。`,
  },
  {
    id: "kyushu-2023-phys-2", universitySlug: "kyushu", year: 2023, subject: "物理学", problemNumber: 2,
    title: "バンド理論の基礎", field: "statistical", difficulty: "advanced",
    tags: ["バンドギャップ", "Bloch関数", "金属と絶縁体"], isFree: true,
    statement: `**対応問題**: 九州大学 2023年度 物理学 問2

## 問題の設定
周期ポテンシャル $V(x+a) = V(x)$ 中の電子運動を考える。

## 問われている内容
(1) Bloch の定理を述べよ。
(2) 周期ポテンシャルによってエネルギースペクトルにバンドギャップが生じる理由を簡潔に説明せよ。
(3) バンドが完全に占有 or 空のとき、その物質が絶縁体となる理由を述べよ。`,
    solution: `## (1) Bloch の定理

周期ポテンシャル中のシュレーディンガー方程式の解は
$$\\psi_k(x) = e^{ikx}u_k(x), \\quad u_k(x + a) = u_k(x)$$
の形をとる（平面波 × 周期関数）。$k$ は結晶運動量、$u_k$ は周期関数。

## (2) バンドギャップの起源

Bragg 反射条件 $k = n\\pi/a$ の付近では、入射波 $e^{ikx}$ と反射波 $e^{-ikx}$ が強く混合し、定在波を形成：
$$\\psi_\\pm \\propto \\cos(kx), \\sin(kx)$$

原子位置での確率密度が異なり、$\\cos$ と $\\sin$ でポテンシャルエネルギー差 → **エネルギー差 = ギャップ**。

$$\\boxed{E_\\text{gap} \\sim 2|V_{2\\pi/a}|}$$
（$V$ のフーリエ成分）

## (3) 絶縁体の条件

電子が流れる＝外場で運動量が変わる。フェルミ準位直上に空準位が連続的にあれば流れるが、**完全充填バンド**では全ての $k$ 状態が埋まっており、外場では全体が一様に進んでも元に戻る（ブリルアン帯は周期的）。結果、電流がゼロ：
$$\\boxed{\\text{完全充填バンド + ギャップ} = \\text{絶縁体}}$$

シリコン・ダイヤモンドは典型例。フェルミ準位がバンド内にあれば金属、ギャップ内にあれば絶縁体（半導体）。`,
  },
  {
    id: "kyushu-2022-phys-1", universitySlug: "kyushu", year: 2022, subject: "物理学", problemNumber: 1,
    title: "弦の固有振動", field: "mechanics", difficulty: "standard",
    tags: ["波動方程式", "境界条件", "固有モード"], isFree: true,
    statement: `**対応問題**: 九州大学 2022年度 物理学 問1

## 問題の設定
長さ $L$、線密度 $\\mu$、張力 $T$ の両端固定された弦。波の速さを $v = \\sqrt{T/\\mu}$ とする。

## 問われている内容
(1) 波動方程式と境界条件を書き下せ。
(2) 基本振動と倍音の固有振動数を求めよ。
(3) $L = 0.5$ m、$v = 340$ m/s のとき基本周波数を計算せよ。`,
    solution: `## (1) 方程式

波動方程式：
$$\\frac{\\partial^2 y}{\\partial t^2} = v^2\\frac{\\partial^2 y}{\\partial x^2}$$
境界条件：$y(0, t) = y(L, t) = 0$

## (2) 固有振動数

変数分離 $y = X(x)\\cos(\\omega t)$：
$$X'' + (\\omega/v)^2 X = 0$$
境界条件から $X_n(x) = \\sin(n\\pi x/L)$、$n = 1, 2, \\ldots$：
$$\\boxed{\\omega_n = n\\pi v/L, \\quad f_n = nv/(2L)}$$

基本：$f_1 = v/(2L)$、倍音：$f_2 = 2f_1, f_3 = 3f_1, \\ldots$

## (3) 数値

$f_1 = 340/(2\\cdot 0.5) = \\boxed{340 \\text{ Hz}}$

（ちなみにギターの開放5弦A音は110 Hz、3弦G音は約196 Hz）`,
  },
  {
    id: "kyushu-2022-phys-2", universitySlug: "kyushu", year: 2022, subject: "物理学", problemNumber: 2,
    title: "半導体のキャリア密度", field: "statistical", difficulty: "advanced",
    tags: ["半導体", "フェルミ準位", "キャリア密度"], isFree: true,
    statement: `**対応問題**: 九州大学 2022年度 物理学 問2

## 問題の設定
伝導帯下端を $E_c$、価電子帯上端を $E_v$、バンドギャップ $E_g = E_c - E_v$ とする真性半導体。温度 $T$、ボルツマン定数 $k_B$、$k_BT \\ll E_g$。

## 問われている内容
(1) 伝導帯中の電子密度 $n$ をフェルミ分布から導け。
(2) 真性半導体のフェルミ準位がどこに位置するかを議論せよ。
(3) $n$ の温度依存性を示せ。`,
    solution: `## (1) 電子密度

伝導帯下端近傍で状態密度 $D_c(E) \\propto (E-E_c)^{1/2}$、フェルミ分布 $f \\approx e^{-(E-\\mu)/k_BT}$（Boltzmann 近似、$\\mu$ はギャップ内）：
$$n = \\int_{E_c}^\\infty D_c(E)e^{-(E-\\mu)/k_BT}dE = N_c e^{-(E_c-\\mu)/k_BT}$$

$N_c = 2(m_c^* k_BT/(2\\pi\\hbar^2))^{3/2}$（有効状態密度）。

## (2) フェルミ準位

同様にホール密度 $p = N_v e^{-(\\mu-E_v)/k_BT}$。真性では $n = p$ から：
$$\\mu = \\frac{E_c + E_v}{2} + \\frac{k_BT}{2}\\ln\\frac{N_v}{N_c}$$

ギャップ中央付近（有効質量差による若干のズレ）。

## (3) 温度依存性

$n = \\sqrt{N_c N_v}\\,e^{-E_g/(2k_BT)}$：
$$\\boxed{n \\propto T^{3/2}\\exp(-E_g/(2k_BT))}$$

指数部分が支配的。温度を上げるとキャリア密度が急増（熱励起）。室温Si では $E_g = 1.12$ eV、$E_g/(2k_BT) \\sim 22 \\gg 1$。`,
  },
  {
    id: "kyushu-2021-phys-1", universitySlug: "kyushu", year: 2021, subject: "物理学", problemNumber: 1,
    title: "ケプラーの法則", field: "mechanics", difficulty: "standard",
    tags: ["ケプラー", "楕円軌道", "力学エネルギー"], isFree: true,
    statement: `**対応問題**: 九州大学 2021年度 物理学 問1

## 問題の設定
太陽（質量 $M$、固定）まわりを、質量 $m \\ll M$ の惑星が楕円軌道で公転する。長半径 $a$、離心率 $e$。

## 問われている内容
(1) ケプラーの第二法則（面積速度一定）を角運動量保存から導け。
(2) ケプラーの第三法則 $T^2 \\propto a^3$ を、エネルギー保存と角運動量保存を使って導け。
(3) 軌道の周期 $T$ を $G, M, a$ で表せ。`,
    solution: `## (1) 面積速度一定

面積速度 $dA/dt = r^2\\dot\\theta/2$。角運動量 $L = mr^2\\dot\\theta$：
$$\\frac{dA}{dt} = \\frac{L}{2m} = \\text{const}$$

中心力で $L$ が保存 → 面積速度一定。

## (2)(3) 第三法則

楕円の全面積 $A = \\pi ab$（$b$: 短半径）、周期 $T$：
$$T = \\frac{A}{dA/dt} = \\frac{2\\pi m ab}{L}$$

エネルギー保存 $E = -GMm/(2a)$、角運動量と軌道の関係 $L^2 = GMm^2 a(1-e^2) = GMm^2 b^2/a$ から：
$$T^2 = \\frac{4\\pi^2 m^2 a^2 b^2}{L^2} = \\frac{4\\pi^2 a^3}{GM}$$

$$\\boxed{T^2 = \\frac{4\\pi^2}{GM}a^3}$$

**ポイント**：$T^2 \\propto a^3$ は太陽系の全惑星に適用可（相対誤差 0.1% 以下）。この発見（1619）は後にニュートン万有引力則の実験的根拠になった。`,
  },
  {
    id: "kyushu-2021-phys-2", universitySlug: "kyushu", year: 2021, subject: "物理学", problemNumber: 2,
    title: "井戸型ポテンシャル", field: "quantum", difficulty: "basic",
    tags: ["無限井戸", "定常状態", "規格化"], isFree: true,
    statement: `**対応問題**: 九州大学 2021年度 物理学 問2

## 問題の設定
幅 $L$ の無限に深い 1 次元井戸中の質量 $m$ の粒子。ポテンシャルは $0 \\leq x \\leq L$ で $0$、それ以外で $\\infty$。

## 問われている内容
(1) エネルギー固有値と規格化波動関数を求めよ。
(2) 基底状態の平均位置 $\\langle x\\rangle$ と分散 $(\\Delta x)^2$ を計算せよ。
(3) 位置と運動量の不確定性の積を計算し、不確定性関係を確認せよ。`,
    solution: `## (1) 固有状態

境界条件 $\\psi(0) = \\psi(L) = 0$ を満たすハミルトニアンの固有関数：
$$\\psi_n(x) = \\sqrt{\\frac{2}{L}}\\sin\\frac{n\\pi x}{L}, \\quad n = 1, 2, \\ldots$$

エネルギー：
$$E_n = \\frac{n^2\\pi^2\\hbar^2}{2mL^2}$$

## (2) 基底状態の統計量

$\\psi_1$ で $\\langle x\\rangle = L/2$（対称性）、

$\\langle x^2\\rangle = L^2(1/3 - 1/(2\\pi^2))$ から：
$$(\\Delta x)^2 = \\langle x^2\\rangle - \\langle x\\rangle^2 = L^2\\left(\\frac{1}{12} - \\frac{1}{2\\pi^2}\\right)$$

数値計算で $\\Delta x \\approx 0.181 L$。

## (3) 不確定性積

$\\Delta p_1 \\approx \\hbar\\pi/L$（運動量の典型スケール）：
$$\\Delta x \\cdot \\Delta p \\approx 0.181 L \\cdot \\pi\\hbar/L = 0.57 \\hbar \\geq \\hbar/2\\ \\checkmark$$

最小不確定性状態ではない（それはガウシアン）が、不確定性関係は満たす。`,
  },

  // ===== 北海道大学 =====
  {
    id: "hokkaido-2025-phys-1", universitySlug: "hokkaido", year: 2025, subject: "物理学", problemNumber: 1,
    title: "浮力とアルキメデスの原理", field: "mechanics", difficulty: "basic",
    tags: ["浮力", "密度", "釣り合い"], isFree: true,
    statement: `**対応問題**: 北海道大学 2025年度 物理学 問1

## 問題の設定
密度 $\\rho_0$ の物体（体積 $V$）が、密度 $\\rho$ の液体に浮いている。

## 問われている内容
(1) 物体が液体に沈む体積の割合を求めよ（$\\rho < \\rho_0$ か $\\rho > \\rho_0$ のどちらが必要か含めて）。
(2) 物体を完全に沈めるのに必要な外力を求めよ。
(3) 密度 0.92 × 10³ kg/m³ の氷が密度 1.00 × 10³ kg/m³ の水に浮いているとき、水面下の体積比率を計算せよ。`,
    solution: `## (1) 浮くための条件

浮力の大きさ＝排除体積の液体の重さ $\\rho V_{沈}g$。釣り合い：
$$\\rho_0 V g = \\rho V_{沈} g \\Rightarrow \\boxed{\\frac{V_{沈}}{V} = \\frac{\\rho_0}{\\rho}}$$

浮く条件は $V_{沈}/V < 1 \\Rightarrow \\rho_0 < \\rho$（物体が液体より軽い）。

## (2) 完全に沈める力

追加の押下力 $F$ で全体の浮力 $\\rho V g$：
$$F = \\rho V g - \\rho_0 V g = (\\rho - \\rho_0)V g$$

## (3) 数値

$V_{沈}/V = 0.92/1.00 = 0.92 \\Rightarrow \\boxed{\\text{約 92\\%}}$

氷山の 92% が水面下（8% だけ見える）。

**ポイント**：液体金属中の物体、空中のヘリウム気球なども同原理。`,
  },
  {
    id: "hokkaido-2025-phys-2", universitySlug: "hokkaido", year: 2025, subject: "物理学", problemNumber: 2,
    title: "電磁誘導", field: "electromagnetism", difficulty: "basic",
    tags: ["ファラデーの法則", "レンツの法則", "起電力"], isFree: true,
    statement: `**対応問題**: 北海道大学 2025年度 物理学 問2

## 問題の設定
長方形コイル（辺長 $a, b$、抵抗 $R$）が一様磁場 $B$ 中を、磁場に垂直な軸まわりに角速度 $\\omega$ で回転する。

## 問われている内容
(1) コイルを貫く磁束を時間の関数として書け。
(2) 誘導起電力と誘導電流を求めよ。
(3) 回転を維持するのに必要な外部トルクの平均値と、消費電力を求めよ。`,
    solution: `## (1) 磁束

面積 $ab$、法線と $B$ のなす角 $\\theta = \\omega t$：
$$\\Phi(t) = Bab\\cos\\omega t$$

## (2) 起電力と電流

ファラデーの法則：
$$V = -\\frac{d\\Phi}{dt} = Bab\\omega\\sin\\omega t$$

オームの法則：
$$I = V/R = \\frac{Bab\\omega}{R}\\sin\\omega t$$

## (3) トルクと電力

コイルに働く磁気トルク $\\tau = IAB\\sin\\omega t$（$A = ab$）：
$$\\tau = \\frac{(Bab)^2\\omega}{R}\\sin^2\\omega t$$

時間平均：
$$\\langle\\tau\\rangle = \\frac{(Bab)^2\\omega}{2R}$$

消費電力：
$$\\langle P\\rangle = \\langle I^2 R\\rangle = \\frac{(Bab\\omega)^2}{2R}$$

**ポイント**：交流発電機の原理そのもの。機械エネルギー → 電気エネルギーの変換効率計算の出発点。`,
  },
  {
    id: "hokkaido-2024-phys-1", universitySlug: "hokkaido", year: 2024, subject: "物理学", problemNumber: 1,
    title: "量子トンネル効果", field: "quantum", difficulty: "standard",
    tags: ["トンネル効果", "障壁透過", "WKB近似"], isFree: true,
    statement: `**対応問題**: 北海道大学 2024年度 物理学 問1

## 問題の設定
高さ $V_0$、幅 $L$ の矩形ポテンシャル障壁に、エネルギー $E < V_0$ の粒子が入射する。

## 問われている内容
(1) 各領域でのシュレーディンガー方程式を書き、波動関数の形を示せ。
(2) 透過率の近似式（$\\kappa L \\gg 1$）を導け。ここで $\\kappa = \\sqrt{2m(V_0-E)}/\\hbar$。
(3) 典型的な原子核のアルファ崩壊で、この効果の物理的役割を簡潔に述べよ。`,
    solution: `## (1) 各領域の波動関数

- 領域 I（$x < 0$）：$\\psi_I = e^{ikx} + re^{-ikx}$（入射＋反射）、$k = \\sqrt{2mE}/\\hbar$
- 領域 II（$0 < x < L$）：$\\psi_{II} = Ae^{-\\kappa x} + Be^{\\kappa x}$（指数減衰/成長）
- 領域 III（$x > L$）：$\\psi_{III} = te^{ikx}$（透過）

## (2) 透過率

境界で連続性を課して $t$ を求めると、$\\kappa L \\gg 1$ で $B$ 成分が無視できて：
$$\\boxed{T = |t|^2 \\approx 16\\frac{E(V_0-E)}{V_0^2}e^{-2\\kappa L}}$$

指数減衰項 $e^{-2\\kappa L}$ が支配的。

## (3) アルファ崩壊

重い原子核内部の $\\alpha$ 粒子は、原子核の引力による束縛状態にあるが、外側では静電反発の障壁がある。古典的には越えられないが、量子トンネルで一定確率で透過 → 崩壊。

指数減衰 $e^{-2\\kappa L}$ が崩壊の桁違いの寿命差を説明：$\\alpha$ のエネルギーがわずかに違うだけで寿命が何桁も変わる。ガモフの理論（1928）。`,
  },
  {
    id: "hokkaido-2024-phys-2", universitySlug: "hokkaido", year: 2024, subject: "物理学", problemNumber: 2,
    title: "マクスウェル・ボルツマン分布", field: "statistical", difficulty: "standard",
    tags: ["速度分布", "最確速度", "平均2乗速度"], isFree: true,
    statement: `**対応問題**: 北海道大学 2024年度 物理学 問2

## 問題の設定
温度 $T$、質量 $m$ の気体分子のマクスウェル・ボルツマン速度分布
$$f(v) = 4\\pi\\left(\\frac{m}{2\\pi k_BT}\\right)^{3/2}v^2 e^{-mv^2/(2k_BT)}$$

## 問われている内容
(1) 最確速度 $v_p$ を求めよ。
(2) 平均速度 $\\langle v\\rangle$ を計算せよ。
(3) 平均 2 乗速度 $\\langle v^2\\rangle$ とエネルギー等分配則との関係を示せ。`,
    solution: `## (1) 最確速度

$df/dv = 0$：
$$\\frac{d}{dv}\\left(v^2 e^{-\\alpha v^2}\\right) = 0 \\Rightarrow 2v(1 - \\alpha v^2)e^{-\\alpha v^2} = 0$$

$\\alpha = m/(2k_BT)$ として $v \\neq 0$ の解：
$$\\boxed{v_p = \\sqrt{\\frac{2k_BT}{m}}}$$

## (2) 平均速度

$\\langle v\\rangle = \\int_0^\\infty v f(v) dv$。ガウス積分の公式から：
$$\\boxed{\\langle v\\rangle = \\sqrt{\\frac{8k_BT}{\\pi m}}}$$

## (3) 平均2乗速度

$$\\langle v^2\\rangle = \\int_0^\\infty v^2 f(v)dv = \\frac{3k_BT}{m}$$

エネルギー等分配から：
$$\\left\\langle\\frac{1}{2}mv^2\\right\\rangle = \\frac{3}{2}k_BT \\Rightarrow \\langle v^2\\rangle = \\frac{3k_BT}{m}\\ \\checkmark$$

3 つの速度：$v_p : \\langle v\\rangle : \\sqrt{\\langle v^2\\rangle} = \\sqrt 2 : \\sqrt{8/\\pi} : \\sqrt 3 \\approx 1 : 1.13 : 1.22$。空気分子（$T$ ~ 300 K）で $\\sqrt{\\langle v^2\\rangle} \\sim 500$ m/s。`,
  },
  {
    id: "hokkaido-2023-phys-1", universitySlug: "hokkaido", year: 2023, subject: "物理学", problemNumber: 1,
    title: "二体問題と重心", field: "mechanics", difficulty: "standard",
    tags: ["二体問題", "換算質量", "重心運動"], isFree: true,
    statement: `**対応問題**: 北海道大学 2023年度 物理学 問1

## 問題の設定
相互作用ポテンシャル $U(|\\vec{r}_1 - \\vec{r}_2|)$ を持つ 2 粒子（質量 $m_1, m_2$）。

## 問われている内容
(1) 重心 $\\vec{R}$ と相対座標 $\\vec{r} = \\vec{r}_1 - \\vec{r}_2$ への変換で、運動方程式を書け。
(2) 重心運動と相対運動が分離することを示せ。
(3) 換算質量 $\\mu = m_1m_2/(m_1+m_2)$ の定義を示し、水素原子の場合の補正を議論せよ。`,
    solution: `## (1)(2) 分離

重心 $\\vec{R} = (m_1\\vec{r}_1 + m_2\\vec{r}_2)/(m_1+m_2)$、相対 $\\vec{r} = \\vec{r}_1 - \\vec{r}_2$。

全運動量保存から重心は等速直線運動：
$$\\ddot{\\vec{R}} = 0$$

相対運動：
$$\\mu\\ddot{\\vec{r}} = -\\nabla U(r)$$

$$\\boxed{\\mu = \\frac{m_1 m_2}{m_1 + m_2}}$$

## (3) 水素原子の補正

電子質量 $m_e$、陽子質量 $m_p = 1836 m_e$：
$$\\mu = \\frac{m_e m_p}{m_e + m_p} = m_e\\cdot\\frac{1}{1 + m_e/m_p} \\approx m_e(1 - m_e/m_p)$$

これにより水素スペクトル（リュードベリ定数）が約 $1/1836$ 下方補正される。重水素（陽子→重陽子）との微妙なスペクトル差（同位体シフト）で実験確認されている。`,
  },
  {
    id: "hokkaido-2023-phys-2", universitySlug: "hokkaido", year: 2023, subject: "物理学", problemNumber: 2,
    title: "Stokes の法則と終端速度", field: "mechanics", difficulty: "basic",
    tags: ["粘性抵抗", "終端速度", "指数減衰"], isFree: true,
    statement: `**対応問題**: 北海道大学 2023年度 物理学 問2

## 問題の設定
粘性係数 $\\eta$ の流体中を、半径 $a$、質量 $m$ の小球が自由落下する。Stokes 抵抗 $F = 6\\pi\\eta a v$。

## 問われている内容
(1) 運動方程式を書き下せ。
(2) 終端速度 $v_\\infty$ を求めよ。
(3) $v_\\infty$ に達するまでの時間スケールを求めよ。`,
    solution: `## (1) 運動方程式

$$m\\dot{v} = mg - 6\\pi\\eta a v$$

## (2) 終端速度

$\\dot{v} = 0$ から：
$$\\boxed{v_\\infty = \\frac{mg}{6\\pi\\eta a}}$$

## (3) 時定数

$\\tau = m/(6\\pi\\eta a)$ とおくと方程式は：
$$\\dot{v} + v/\\tau = g$$

解：
$$v(t) = v_\\infty(1 - e^{-t/\\tau})$$

$\\boxed{\\tau = \\frac{m}{6\\pi\\eta a}}$ が特徴時間。$t \\gg \\tau$ で終端速度に漸近。

**応用**：ミリカンの油滴実験で、油滴の終端速度から半径・質量を決定 → 電気素量 $e$ の精密測定に用いられた（1910年代）。`,
  },
  {
    id: "hokkaido-2022-phys-1", universitySlug: "hokkaido", year: 2022, subject: "物理学", problemNumber: 1,
    title: "Fresnel 回折", field: "optics", difficulty: "advanced",
    tags: ["回折", "フレネル回折", "フレネルゾーン"], isFree: true,
    statement: `**対応問題**: 北海道大学 2022年度 物理学 問1

## 問題の設定
波長 $\\lambda$ の平面波が小円孔（半径 $a$）に入射し、距離 $d$ にスクリーンを置く。Fresnel 数 $F = a^2/(\\lambda d)$ を考える。

## 問われている内容
(1) $F \\gg 1, F \\sim 1, F \\ll 1$ の各領域で回折パターンの定性的特徴を述べよ。
(2) フレネルゾーンの概念を説明せよ。
(3) $\\lambda = 500$ nm、$a = 1$ mm、$d = 1$ m のとき $F$ を計算し、どの領域か判別せよ。`,
    solution: `## (1) 3 つの領域

- $F \\gg 1$（近接場/幾何光学的影）：光線描像が有効、孔の影はほぼ鋭い
- $F \\sim 1$（フレネル領域）：干渉縞、中心が明暗交互に変化
- $F \\ll 1$（フラウンホーファー回折・遠方場）：Airy パターン、中心極大 + リング

## (2) フレネルゾーン

円孔を光源からの光路差が $\\lambda/2$ ごとに分ける同心円領域。
- 第1ゾーン：光路差 $0 \\to \\lambda/2$ — 強め合う
- 第2ゾーン：$\\lambda/2 \\to \\lambda$ — 第1と逆位相
- ...

軸上の振幅は交互に打ち消し合う。**偶数個のゾーンが開くと暗点、奇数個で明点**。

## (3) 数値

$$F = \\frac{(10^{-3})^2}{500\\times 10^{-9} \\times 1} = \\frac{10^{-6}}{5\\times 10^{-7}} = \\boxed{2}$$

$F \\sim 1$ のフレネル回折領域。干渉縞が見える。`,
  },
  {
    id: "hokkaido-2022-phys-2", universitySlug: "hokkaido", year: 2022, subject: "物理学", problemNumber: 2,
    title: "ベクトル解析：Stokes と Gauss", field: "math", difficulty: "basic",
    tags: ["ベクトル積分定理", "発散", "回転"], isFree: true,
    statement: `**対応問題**: 北海道大学 2022年度 物理学 問2

## 問題の設定
3次元のベクトル場 $\\vec{A}(\\vec{r})$ と、閉曲面 $S$、および $S$ を境界とする領域 $V$、閉曲線 $C$ とそれを境界とする曲面 $\\Sigma$。

## 問われている内容
(1) Gauss の発散定理と Stokes の定理を書き下せ。
(2) それぞれの物理的意味を述べよ。
(3) ベクトル場 $\\vec{A} = (x, y, z)$（すなわち $\\vec{A} = \\vec{r}$）について発散を計算し、半径 $R$ の球を横切る束を求めよ。`,
    solution: `## (1) 2 つの定理

**Gauss の発散定理**
$$\\oint_S \\vec{A}\\cdot d\\vec{S} = \\int_V \\nabla\\cdot\\vec{A}\\,dV$$

**Stokes の定理**
$$\\oint_C \\vec{A}\\cdot d\\vec{l} = \\int_\\Sigma (\\nabla\\times\\vec{A})\\cdot d\\vec{S}$$

## (2) 物理的意味

- Gauss：場の「わき出し」$\\nabla\\cdot\\vec A$ の総和 = 境界を出る束
- Stokes：場の「回転」$\\nabla\\times\\vec A$ の面積分 = 境界での周回積分

どちらも「内部の局所量の積分 = 境界での積分」という双対関係。

## (3) 計算

$\\nabla\\cdot\\vec{r} = \\partial x/\\partial x + \\partial y/\\partial y + \\partial z/\\partial z = 3$

球での束（Gauss の定理）：
$$\\oint_S \\vec{r}\\cdot d\\vec{S} = \\int_V 3\\,dV = 3\\cdot\\frac{4\\pi R^3}{3} = \\boxed{4\\pi R^3}$$

直接積分でも確認：球面上で $\\vec{r}\\cdot d\\vec{S} = R\\cdot R^2\\sin\\theta\\,d\\theta d\\phi = R^3 \\sin\\theta d\\theta d\\phi$、積分して $4\\pi R^3$。一致 ✓`,
  },
  {
    id: "hokkaido-2021-phys-1", universitySlug: "hokkaido", year: 2021, subject: "物理学", problemNumber: 1,
    title: "剛体コマの運動", field: "mechanics", difficulty: "advanced",
    tags: ["歳差運動", "慣性テンソル", "ジャイロ効果"], isFree: true,
    statement: `**対応問題**: 北海道大学 2021年度 物理学 問1

## 問題の設定
対称コマ（慣性モーメント $I_1 = I_2 \\neq I_3$、$I_3$ は対称軸）が支点まわりで回転。重力トルクのもとでの歳差運動を考える。

## 問われている内容
(1) オイラー方程式（剛体の回転運動方程式）を対称コマに適用して、運動方程式を書け。
(2) 速い自転（$\\omega_3$ 大）の極限で歳差角速度 $\\Omega$ を求めよ。
(3) コマが落ちない物理的理由を説明せよ。`,
    solution: `## (1) 対称コマの方程式

重心が支点から距離 $h$、対称軸傾斜角 $\\theta$、歳差角 $\\phi$、自転角 $\\psi$：
$$I_1\\ddot\\theta + (\\text{歳差・自転項}) = Mgh\\sin\\theta$$

## (2) ジャイロ近似

速い自転では近似的に：
$$\\Omega = \\frac{Mgh}{I_3\\omega_3}$$

## (3) なぜ落ちないか

重力トルクは傾きを増やす方向だが、回転軸のベクトル $\\vec{L} = I_3\\omega_3\\hat{n}$ はトルクベクトルに対して**直交方向に変化**（$d\\vec L/dt = \\vec \\tau \\perp \\vec L$）。

結果、$\\vec L$ は傾きを増やさず、**水平面内を回転**（歳差運動）。自転エネルギーが大きいほど歳差が遅くなり、コマは "立ったまま" 回る。

**応用**：ジャイロスコープ、船舶・航空機の姿勢制御、自転車の安定性。`,
  },
  {
    id: "hokkaido-2021-phys-2", universitySlug: "hokkaido", year: 2021, subject: "物理学", problemNumber: 2,
    title: "Debye 模型と低温比熱", field: "statistical", difficulty: "advanced",
    tags: ["Debye比熱", "T^3 則", "フォノン"], isFree: true,
    statement: `**対応問題**: 北海道大学 2021年度 物理学 問2

## 問題の設定
固体の格子振動（フォノン）を Debye モデルで扱う。音速 $v$、原子数 $N$、体積 $V$、Debye 振動数 $\\omega_D$。

## 問われている内容
(1) 状態密度 $D(\\omega)$ を求めよ。
(2) 低温（$k_BT \\ll \\hbar\\omega_D$）での比熱を計算し、$T^3$ 則を導け。
(3) 高温極限でのDulong・Petit 則（$C_V = 3Nk_B$）を確認せよ。`,
    solution: `## (1) 状態密度

3 次元音速波（縦 1、横 2 で計 3 モード）：
$$D(\\omega) = \\frac{3V\\omega^2}{2\\pi^2 v^3}, \\quad \\omega < \\omega_D$$

$\\omega_D$ は全モード数 $3N$ で定義：$\\omega_D^3 = 6\\pi^2 v^3 N/V$。

## (2) 低温比熱

$$U = \\int_0^{\\omega_D} \\frac{\\hbar\\omega}{e^{\\hbar\\omega/k_BT}-1}D(\\omega)d\\omega$$

低温で上限を $\\infty$ に置換できる：
$$U \\approx \\frac{3V}{2\\pi^2 v^3}\\cdot\\frac{(k_BT)^4}{\\hbar^3}\\int_0^\\infty\\frac{x^3}{e^x-1}dx = \\frac{\\pi^4}{5}Nk_B\\frac{T^4}{\\Theta_D^3}$$

比熱：
$$\\boxed{C_V \\propto T^3}$$

## (3) 高温

$\\hbar\\omega \\ll k_BT$ で $1/(e^{\\hbar\\omega/k_BT}-1) \\approx k_BT/(\\hbar\\omega)$。$U \\approx 3Nk_BT$、$C_V = 3Nk_B$：Dulong・Petit 則。

**ポイント**：Einstein モデルでは低温で $e^{-\\Theta_E/T}$ に従い、実験の $T^3$ と合わない。Debye モデルがこの問題を解決した（1912）。`,
  },

  // ===== 横浜国立大学 =====
  {
    id: "ynu-2025-phys-1", universitySlug: "ynu", year: 2025, subject: "物理学", problemNumber: 1,
    title: "単振り子と相似則", field: "mechanics", difficulty: "basic",
    tags: ["単振り子", "周期", "相似則"], isFree: true,
    statement: `**対応問題**: 横浜国立大学 2025年度 物理学 問1

## 問題の設定
糸の長さ $L$、質量 $m$ の単振り子。重力加速度 $g$。

## 問われている内容
(1) 微小振動の周期を求めよ。
(2) 糸の長さを 4 倍にすると周期は何倍になるか。
(3) 月面（$g$ が地球の 1/6）での周期は地球での何倍か。`,
    solution: `## (1) 周期

単振り子の周期公式：
$$\\boxed{T = 2\\pi\\sqrt{\\frac{L}{g}}}$$

質量 $m$ によらない（ガリレオの等時性）。

## (2) 長さ 4 倍

$T \\propto \\sqrt{L}$ より $\\boxed{2 \\text{ 倍}}$。

## (3) 月面

$T \\propto 1/\\sqrt{g}$ より $\\sqrt{6} \\approx 2.45$ 倍。

**ポイント**：単振り子は重力加速度の精密測定に歴史的に使われた。地域・標高による $g$ の微小変動まで検出可能。`,
  },
  {
    id: "ynu-2025-phys-2", universitySlug: "ynu", year: 2025, subject: "物理学", problemNumber: 2,
    title: "ガウスの法則と電場", field: "electromagnetism", difficulty: "basic",
    tags: ["ガウスの法則", "帯電球殻", "対称性"], isFree: true,
    statement: `**対応問題**: 横浜国立大学 2025年度 物理学 問2

## 問題の設定
半径 $a$ の球殻に全電荷 $Q$ が一様に分布している。

## 問われている内容
(1) 球殻内部（$r < a$）の電場を求めよ。
(2) 球殻外部（$r > a$）の電場を求めよ。
(3) 電位 $V(r)$ を両領域で求めよ。`,
    solution: `## (1) 内部

半径 $r < a$ の球面にガウスの法則：内部に電荷なし → $E = 0$。

$$\\boxed{E_{内} = 0}$$

## (2) 外部

全電荷 $Q$ が中心に集中したのと同じ：
$$\\boxed{E_{外} = \\frac{Q}{4\\pi\\varepsilon_0 r^2}}$$

## (3) 電位

無限遠 $V = 0$ から積分：
- 外部：$V(r) = Q/(4\\pi\\varepsilon_0 r)$
- 内部：$E = 0$ なので $V$ 一定。$r = a$ で連続：$V = Q/(4\\pi\\varepsilon_0 a)$

$$\\boxed{V(r) = \\begin{cases} \\frac{Q}{4\\pi\\varepsilon_0 a} & (r \\leq a) \\\\ \\frac{Q}{4\\pi\\varepsilon_0 r} & (r > a)\\end{cases}}$$

**ポイント**：内部で $V$ は一定だが $E$ はゼロ（$\\nabla V = 0$ と整合）。これがファラデーケージの原理。`,
  },
  {
    id: "ynu-2024-phys-1", universitySlug: "ynu", year: 2024, subject: "物理学", problemNumber: 1,
    title: "円運動と向心力", field: "mechanics", difficulty: "basic",
    tags: ["円運動", "向心力", "遠心力"], isFree: true,
    statement: `**対応問題**: 横浜国立大学 2024年度 物理学 問1

## 問題の設定
長さ $L$ の糸の先に質量 $m$ の物体をつけ、水平面内で半径 $r$ の円運動を行わせる。糸と鉛直方向のなす角を $\\theta$。

## 問われている内容
(1) 糸の張力 $T$ と、円運動の角速度 $\\omega$ の関係を求めよ。
(2) $\\theta = 60°$、$L = 1.0$ m のときの周期を計算せよ。
(3) $\\omega$ が大きくなるほど $\\theta$ はどうなるか。`,
    solution: `## (1) 力の分解

鉛直方向：$T\\cos\\theta = mg$
水平方向（向心力）：$T\\sin\\theta = m\\omega^2 r = m\\omega^2 L\\sin\\theta$

第 2 式から：
$$T = m\\omega^2 L$$

第 1 式に代入：
$$m\\omega^2 L\\cos\\theta = mg \\Rightarrow \\omega^2 = \\frac{g}{L\\cos\\theta}$$

$$\\boxed{\\omega = \\sqrt{\\frac{g}{L\\cos\\theta}}}$$

## (2) 数値

$\\theta = 60°$、$\\cos\\theta = 0.5$：
$$\\omega = \\sqrt{\\frac{9.8}{1.0 \\cdot 0.5}} \\approx 4.4 \\text{ rad/s}$$
$$T = 2\\pi/\\omega \\approx \\boxed{1.4 \\text{ s}}$$

## (3) $\\omega$ 大 → $\\theta$ 大

$\\cos\\theta = g/(L\\omega^2)$ から $\\omega^2 \\to \\infty$ で $\\cos\\theta \\to 0$, $\\theta \\to 90°$（水平に伸びる）。

**ポイント**：これが **Conical pendulum（円錐振り子）**。遊園地のチェーンスイングの力学そのもの。`,
  },
  {
    id: "ynu-2024-phys-2", universitySlug: "ynu", year: 2024, subject: "物理学", problemNumber: 2,
    title: "交流回路とインピーダンス", field: "electromagnetism", difficulty: "standard",
    tags: ["交流回路", "インピーダンス", "位相差"], isFree: true,
    statement: `**対応問題**: 横浜国立大学 2024年度 物理学 問2

## 問題の設定
抵抗 $R$、インダクタンス $L$、容量 $C$ の直列 RLC 回路に交流電圧 $V(t) = V_0\\cos\\omega t$ を印加。

## 問われている内容
(1) 合成インピーダンス $Z$ を求めよ。
(2) 電流と電圧の位相差を求めよ。
(3) 共振周波数 $\\omega_0$ を求め、そこでの電流の大きさを書け。`,
    solution: `## (1) インピーダンス

各素子のインピーダンス：$R, i\\omega L, 1/(i\\omega C) = -i/(\\omega C)$。直列合成：
$$Z = R + i\\left(\\omega L - \\frac{1}{\\omega C}\\right)$$

絶対値：
$$\\boxed{|Z| = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}}$$

## (2) 位相差

$$\\tan\\phi = \\frac{\\omega L - 1/(\\omega C)}{R}$$

電流 $I$ は電圧 $V$ に対して $\\phi$ だけ遅れる。

## (3) 共振

$\\omega L = 1/(\\omega C)$ のとき $Z = R$ で最小：
$$\\boxed{\\omega_0 = \\frac{1}{\\sqrt{LC}}, \\quad I_{max} = V_0/R}$$

**応用**：ラジオのチューニング（$LC$ 共振でお好みの周波数だけ選択的に通す）の原理。`,
  },
  {
    id: "ynu-2023-phys-1", universitySlug: "ynu", year: 2023, subject: "物理学", problemNumber: 1,
    title: "運動量保存と爆発", field: "mechanics", difficulty: "basic",
    tags: ["運動量保存", "爆発", "内部エネルギー"], isFree: true,
    statement: `**対応問題**: 横浜国立大学 2023年度 物理学 問1

## 問題の設定
質量 $M$ の物体が静止していた。内部的に爆発し、質量 $m_1, m_2$（$m_1 + m_2 = M$）の 2 片になって分離。分離後の速度を $\\vec{v}_1, \\vec{v}_2$。

## 問われている内容
(1) 運動量保存則を用いて $\\vec v_1, \\vec v_2$ の関係を求めよ。
(2) 爆発で解放された内部エネルギーを、$m_1, m_2, |\\vec v_1|$ で表せ。
(3) 爆発直後の重心の速度はどうなるか。`,
    solution: `## (1) 運動量保存

爆発は内力のみなので、全運動量保存：
$$\\vec 0 = m_1\\vec v_1 + m_2\\vec v_2 \\Rightarrow \\boxed{\\vec v_2 = -\\frac{m_1}{m_2}\\vec v_1}$$

2 片は正反対方向に飛ぶ。

## (2) エネルギー

$$\\Delta E = \\frac{1}{2}m_1 v_1^2 + \\frac{1}{2}m_2 v_2^2 = \\frac{1}{2}m_1 v_1^2 + \\frac{1}{2}m_2 \\left(\\frac{m_1}{m_2}\\right)^2 v_1^2$$

$$\\boxed{\\Delta E = \\frac{1}{2}\\cdot\\frac{m_1 M}{m_2}v_1^2}$$

## (3) 重心

全運動量保存 → 重心速度不変。爆発前が静止なら、**重心は静止し続ける**。

**ポイント**：内力だけでは重心運動は変わらない（外部慣性原理）。`,
  },
  {
    id: "ynu-2023-phys-2", universitySlug: "ynu", year: 2023, subject: "物理学", problemNumber: 2,
    title: "磁気双極子モーメント", field: "electromagnetism", difficulty: "standard",
    tags: ["磁気モーメント", "電流ループ", "トルク"], isFree: true,
    statement: `**対応問題**: 横浜国立大学 2023年度 物理学 問2

## 問題の設定
半径 $a$ の円形電流ループに電流 $I$ が流れている。一様磁場 $\\vec B$ の中に置く。

## 問われている内容
(1) ループの磁気モーメント $\\vec m$ を書け。
(2) ループが磁場中で受けるトルク $\\vec\\tau$ を求めよ。
(3) 磁気モーメントが磁場中で持つエネルギーを $\\vec m, \\vec B$ で表せ。`,
    solution: `## (1) 磁気モーメント

面積 $\\pi a^2$、電流 $I$：
$$\\boxed{\\vec m = I\\pi a^2\\,\\hat n}$$

$\\hat n$ はループ面の法線（電流方向に対して右手の法則）。

## (2) トルク

$$\\vec\\tau = \\vec m\\times\\vec B$$

大きさ $mB\\sin\\theta$、$\\theta$ は $\\vec m$ と $\\vec B$ のなす角。磁場と平行にしようとする方向に働く。

## (3) エネルギー

$$\\boxed{U = -\\vec m\\cdot\\vec B = -mB\\cos\\theta}$$

最小 $(\\theta = 0)$ で $\\vec m \\parallel \\vec B$、最大 $(\\theta = \\pi)$ で反平行。

**応用**：原子・核の磁気モーメントと磁場の相互作用（NMR、MRI）、コンパス針。`,
  },
  {
    id: "ynu-2022-phys-1", universitySlug: "ynu", year: 2022, subject: "物理学", problemNumber: 1,
    title: "ドップラー効果", field: "mechanics", difficulty: "basic",
    tags: ["ドップラー効果", "音波", "観測者"], isFree: true,
    statement: `**対応問題**: 横浜国立大学 2022年度 物理学 問1

## 問題の設定
音源が振動数 $f_0$ で発音、音速 $c$、空気静止。音源が観測者に向かって速度 $v_s$ で近づく、または観測者が音源に向かって速度 $v_o$ で近づく。

## 問われている内容
(1) 音源だけが動く場合の観測振動数 $f$ を求めよ。
(2) 観測者だけが動く場合の $f$ を求めよ。
(3) 両者が動く場合の一般式を書け。`,
    solution: `## (1) 音源が動く

音源が近づく時、波長が圧縮される：$\\lambda' = (c - v_s)/f_0$
$$f = c/\\lambda' = \\frac{c}{c - v_s}f_0$$

$$\\boxed{f = \\frac{c}{c - v_s}f_0}$$

## (2) 観測者が動く

相対的に音速が $c + v_o$ になる：
$$\\boxed{f = \\frac{c + v_o}{c}f_0}$$

## (3) 一般

両者：
$$\\boxed{f = \\frac{c + v_o}{c - v_s}f_0}$$

符号は**近づく方向を正**と取る規約。

**応用**：救急車のサイレン、天文学の赤方偏移（光のドップラー効果、$f' = f\\sqrt{(1-\\beta)/(1+\\beta)}$ の相対論版）、医療超音波。`,
  },
  {
    id: "ynu-2022-phys-2", universitySlug: "ynu", year: 2022, subject: "物理学", problemNumber: 2,
    title: "理想気体の混合とエントロピー", field: "thermodynamics", difficulty: "standard",
    tags: ["混合のエントロピー", "ギブズのパラドックス"], isFree: true,
    statement: `**対応問題**: 横浜国立大学 2022年度 物理学 問2

## 問題の設定
体積 $V$ の 2 つの容器に、それぞれ $n$ モルの異なる理想気体 A, B が温度 $T$ で入っている。仕切りを外して混合させる。

## 問われている内容
(1) 混合後の各気体のエントロピー変化を求めよ。
(2) 全体のエントロピー増加を求めよ。
(3) 同種気体同士だったらどうなるか（ギブズのパラドックス）。`,
    solution: `## (1) 各気体の $\\Delta S$

気体 A は体積 $V \\to 2V$ へ等温膨張（他方の気体は関係ない、理想気体同士）：
$$\\Delta S_A = nR\\ln 2$$

B も同様：$\\Delta S_B = nR\\ln 2$

## (2) 全体

$$\\boxed{\\Delta S_{total} = 2nR\\ln 2 > 0}$$

不可逆過程（混合）でエントロピー増大。

## (3) 同種気体

両方が同じ気体なら、仕切りを外しても「何も変わらない」（区別不能）→ $\\Delta S = 0$ であるべき。

しかし上の計算をそのまま適用すると $2nR\\ln 2$ が出る。これが**ギブズのパラドックス**。

**解消**：量子力学的な「同種粒子の区別不能性」を入れると、エントロピー計算に $1/N!$ 因子が入り、同種では差が消える。古典統計の盲点を指摘した問題として歴史的に重要。`,
  },
  {
    id: "ynu-2021-phys-1", universitySlug: "ynu", year: 2021, subject: "物理学", problemNumber: 1,
    title: "反射の法則（ばね衝突）", field: "mechanics", difficulty: "basic",
    tags: ["衝突", "反発係数", "エネルギー損失"], isFree: true,
    statement: `**対応問題**: 横浜国立大学 2021年度 物理学 問1

## 問題の設定
質量 $m$ の球が速さ $v_0$ で壁に衝突。反発係数 $e$ （$0 \\leq e \\leq 1$）。

## 問われている内容
(1) 衝突後の速さを求めよ。
(2) エネルギー損失率（反発前後の運動エネルギーの比）を求めよ。
(3) $e = 1$（弾性）と $e = 0$（完全非弾性）それぞれでの振る舞いを述べよ。`,
    solution: `## (1) 反発後

定義より相対速度比 = $e$：
$$|v'| = e v_0$$

## (2) エネルギー損失率

$K'/K = e^2$。損失率 = $1 - e^2$。

## (3) 2 つの極限

- $e = 1$（弾性）：$K$ 保存、ボールは逆向きに同速度
- $e = 0$（完全非弾性）：壁にくっつく、$K$ 全損失（全熱に変換）

**実例**：ゴムボール $e \\sim 0.8$、粘土 $e \\sim 0$、ビリヤード玉 $e \\sim 0.94$。`,
  },
  {
    id: "ynu-2021-phys-2", universitySlug: "ynu", year: 2021, subject: "物理学", problemNumber: 2,
    title: "自由粒子の量子力学", field: "quantum", difficulty: "standard",
    tags: ["自由粒子", "波束", "群速度"], isFree: true,
    statement: `**対応問題**: 横浜国立大学 2021年度 物理学 問2

## 問題の設定
自由粒子（質量 $m$）のシュレーディンガー方程式 $i\\hbar\\partial\\psi/\\partial t = -(\\hbar^2/2m)\\partial^2\\psi/\\partial x^2$。

## 問われている内容
(1) 平面波解 $\\psi_k = e^{i(kx - \\omega t)}$ の $\\omega$ と $k$ の関係（分散関係）を求めよ。
(2) 位相速度 $v_p$ と群速度 $v_g$ を求めよ。
(3) 古典的粒子の速度 $p/m$ と何が対応するか。`,
    solution: `## (1) 分散関係

代入：$\\hbar\\omega = \\hbar^2 k^2/(2m)$
$$\\boxed{\\omega(k) = \\frac{\\hbar k^2}{2m}}$$

非線形（光波の $\\omega = ck$ と違い $k^2$）→ 分散（波束がひろがる）。

## (2) 位相速度と群速度

$$v_p = \\omega/k = \\hbar k/(2m), \\quad v_g = d\\omega/dk = \\hbar k/m$$

## (3) 古典速度との対応

$p = \\hbar k$ より $\\hbar k/m = p/m = v_{classical}$。**群速度こそ古典速度**に対応。

位相速度は古典速度の半分で、粒子の「運動」としては意味がない。波束のエネルギー伝搬速度が群速度。

**ポイント**：量子力学での「粒子の動き」は波束の動き＝群速度。ド・ブロイ波は分散するので時間とともに広がる（粒子位置の不確定性が増す）。`,
  },

  // ===== 筑波大学 =====
  {
    id: "tsukuba-2025-phys-1", universitySlug: "tsukuba", year: 2025, subject: "物理学", problemNumber: 1,
    title: "万有引力と第一宇宙速度", field: "mechanics", difficulty: "basic",
    tags: ["万有引力", "円軌道", "第一宇宙速度"], isFree: true,
    statement: `**対応問題**: 筑波大学 2025年度 物理学 問1

## 問題の設定
質量 $M$、半径 $R$ の地球。質量 $m$ の物体を地球表面すれすれの円軌道に乗せたい。重力定数 $G$。

## 問われている内容
(1) 地表での重力加速度 $g$ を $G, M, R$ で表せ。
(2) 表面円軌道に必要な速度（第一宇宙速度）$v_1$ を求めよ。
(3) $R = 6.4 \\times 10^6$ m、$g = 9.8$ m/s² から $v_1$ を計算せよ。`,
    solution: `## (1) $g$

$$g = \\frac{GM}{R^2}$$

## (2) 第一宇宙速度

向心力 = 重力：
$$\\frac{mv_1^2}{R} = \\frac{GMm}{R^2} \\Rightarrow v_1 = \\sqrt{GM/R} = \\sqrt{gR}$$

$$\\boxed{v_1 = \\sqrt{gR}}$$

## (3) 数値

$v_1 = \\sqrt{9.8 \\times 6.4\\times 10^6} \\approx \\boxed{7.9 \\text{ km/s}}$

**ポイント**：第二宇宙速度（脱出速度） $= \\sqrt 2 v_1 \\approx 11.2$ km/s。太陽系から脱出するには 16.7 km/s 必要。`,
  },
  {
    id: "tsukuba-2025-phys-2", universitySlug: "tsukuba", year: 2025, subject: "物理学", problemNumber: 2,
    title: "水素類似原子のスペクトル", field: "quantum", difficulty: "standard",
    tags: ["Bohr モデル", "リュードベリ", "イオン化エネルギー"], isFree: true,
    statement: `**対応問題**: 筑波大学 2025年度 物理学 問2

## 問題の設定
電荷 $+Ze$ の原子核と 1 個の電子からなる水素類似原子（$Z = 2$ は $He^+$、$Z=3$ は $Li^{2+}$）。

## 問われている内容
(1) Bohr の量子条件からエネルギー準位 $E_n$ を求めよ。
(2) $Z = 1$ の基底状態エネルギーを 13.6 eV とするとき、$Z = 2$ の基底状態を計算せよ。
(3) イオン化エネルギー（電離エネルギー）の $Z$ 依存性を議論せよ。`,
    solution: `## (1) Bohr エネルギー

$$E_n = -\\frac{mZ^2e^4}{2(4\\pi\\varepsilon_0)^2\\hbar^2 n^2} = -\\frac{13.6 Z^2}{n^2} \\text{ [eV]}$$

## (2) $Z = 2$

$E_1 = -13.6 \\times 4 = \\boxed{-54.4 \\text{ eV}}$

## (3) $Z$ 依存性

イオン化エネルギー $= |E_1| = 13.6 Z^2$ eV。

$Z$ とともに**急増**（$Z^2$）。これは核電荷が増えると電子がより強く束縛されるため。He の第一電離エネルギー 24.6 eV、H より遥かに大きい（実際の He は電子2個あるので相互作用で $Z^2$ 則から少しズレる）。

**ポイント**：$He^+$ は水素類似（電子1個）なので、スペクトルが H と同じ形（Balmer 系列など）で波長だけ $1/Z^2$ だけ縮む。恒星大気分光で重要。`,
  },
  {
    id: "tsukuba-2024-phys-1", universitySlug: "tsukuba", year: 2024, subject: "物理学", problemNumber: 1,
    title: "慣性モーメントの計算", field: "mechanics", difficulty: "standard",
    tags: ["慣性モーメント", "積分", "剛体"], isFree: true,
    statement: `**対応問題**: 筑波大学 2024年度 物理学 問1

## 問題の設定
一様な密度、質量 $M$、半径 $R$、高さ $h$ の円柱について、対称軸まわりの慣性モーメントを計算せよ。

## 問われている内容
(1) 対称軸（円柱の中心軸）まわりの $I$ を積分で計算せよ。
(2) 中心軸に垂直で重心を通る軸まわりの $I'$ を計算せよ。
(3) 円柱の下端で中心軸に垂直な軸まわりの $I''$ を平行軸の定理から求めよ。`,
    solution: `## (1) 対称軸

半径 $r$ の薄殻（厚さ $dr$、高さ $h$）の質量 $dm = \\rho \\cdot 2\\pi r\\,dr\\,h$。対称軸からの距離が $r$：
$$I = \\int_0^R r^2 \\cdot 2\\pi r \\rho h\\,dr = 2\\pi\\rho h\\cdot\\frac{R^4}{4}$$

$M = \\pi R^2 h\\rho$ を用いて：
$$\\boxed{I = \\frac{1}{2}MR^2}$$

（円盤の $I_0$ と同じ式）

## (2) 中心軸垂直、重心

薄い円盤の連なりと考える。各円盤（質量 $dM$、厚さ $dz$）について、垂直軸定理と平行軸定理を組み合わせ：
$$dI' = \\frac{1}{4}dM\\cdot R^2 + dM\\cdot z^2$$

積分（$z = -h/2$ から $h/2$）：
$$\\boxed{I' = \\frac{1}{12}M(3R^2 + h^2)}$$

## (3) 下端で垂直軸

平行軸の定理：重心軸から下端軸まで $d = h/2$：
$$I'' = I' + M(h/2)^2 = \\frac{M}{12}(3R^2 + h^2) + \\frac{Mh^2}{4}$$

$$\\boxed{I'' = \\frac{1}{12}M(3R^2 + 4h^2)}$$`,
  },
  {
    id: "tsukuba-2024-phys-2", universitySlug: "tsukuba", year: 2024, subject: "物理学", problemNumber: 2,
    title: "ガウスの分布と中心極限定理", field: "math", difficulty: "standard",
    tags: ["確率分布", "中心極限定理", "正規分布"], isFree: true,
    statement: `**対応問題**: 筑波大学 2024年度 物理学 問2

## 問題の設定
独立同分布（i.i.d.）の確率変数 $X_1, X_2, \\ldots, X_N$。各々の平均 $\\mu$、分散 $\\sigma^2$。和 $S_N = \\sum X_i$。

## 問われている内容
(1) $S_N$ の平均と分散を求めよ。
(2) $N$ が大きいときの $S_N$ の分布を述べよ（中心極限定理）。
(3) この定理が物理学にどのように現れるか、具体例を 1 つ挙げよ。`,
    solution: `## (1) 平均と分散

- 平均：$\\langle S_N\\rangle = N\\mu$
- 分散：独立性から $\\text{Var}(S_N) = N\\sigma^2$

## (2) 中心極限定理

$(S_N - N\\mu)/\\sqrt{N\\sigma^2}$ は $N \\to \\infty$ で標準正規分布 $\\mathcal{N}(0, 1)$ に近づく。

$$\\boxed{S_N \\sim \\mathcal{N}(N\\mu, N\\sigma^2)}$$

個々の分布の形によらず（十分広範な条件下で）成立 → 正規分布の普遍性。

## (3) 物理での例

**ブラウン運動**：溶媒分子との衝突が独立で同様分布に従うと仮定。粒子の変位 $\\Delta x(t)$ は $\\sim \\sqrt t$ のガウス分布（アインシュタイン 1905）。拡散現象の基礎。

**熱力学極限**：$N \\sim 10^{23}$ の粒子数ではあらゆる平均量がガウス分布に従い、相対揺らぎが $1/\\sqrt N$ で消える（前の京大 2025 問1 の具体例）。`,
  },
  {
    id: "tsukuba-2023-phys-1", universitySlug: "tsukuba", year: 2023, subject: "物理学", problemNumber: 1,
    title: "一様磁場中の荷電粒子", field: "electromagnetism", difficulty: "standard",
    tags: ["ローレンツ力", "サイクロトロン運動", "ラーモア半径"], isFree: true,
    statement: `**対応問題**: 筑波大学 2023年度 物理学 問1

## 問題の設定
一様磁場 $\\vec B = B\\hat z$ 中を、質量 $m$・電荷 $q$ の粒子が運動する。

## 問われている内容
(1) 運動方程式を書き下せ。
(2) 磁場に垂直な面内で円運動すること、その角振動数（サイクロトロン振動数）を求めよ。
(3) ラーモア半径を速さ $v$、磁場 $B$ で表せ。`,
    solution: `## (1) 運動方程式

ローレンツ力：
$$m\\ddot{\\vec r} = q\\vec v\\times\\vec B$$

成分（$B$ が $z$）：
$$m\\ddot x = qB\\dot y, \\quad m\\ddot y = -qB\\dot x, \\quad m\\ddot z = 0$$

## (2) 円運動とサイクロトロン振動数

$x, y$ の連立方程式の解は $\\omega_c = qB/m$ の円運動：
$$\\boxed{\\omega_c = \\frac{qB}{m}}$$

$z$ 方向は一定速度。全体としてらせん運動。

## (3) ラーモア半径

向心力 $= $ ローレンツ力：
$$\\frac{mv^2}{r} = qvB \\Rightarrow \\boxed{r_L = \\frac{mv}{qB} = \\frac{p}{qB}}$$

**応用**：加速器（サイクロトロン）、磁気閉じ込めプラズマ（トカマク型核融合炉）、オーロラ（地磁気での電子運動）。`,
  },
  {
    id: "tsukuba-2023-phys-2", universitySlug: "tsukuba", year: 2023, subject: "物理学", problemNumber: 2,
    title: "Plank 輻射公式の極限", field: "statistical", difficulty: "standard",
    tags: ["黒体輻射", "Rayleigh-Jeans", "Wien"], isFree: true,
    statement: `**対応問題**: 筑波大学 2023年度 物理学 問2

## 問題の設定
温度 $T$ の黒体からの輻射強度スペクトル（Planck 公式）：
$$u(\\nu, T) = \\frac{8\\pi h\\nu^3}{c^3}\\cdot\\frac{1}{e^{h\\nu/k_BT} - 1}$$

## 問われている内容
(1) $h\\nu \\ll k_BT$（低振動数）で Rayleigh-Jeans の式になることを示せ。
(2) $h\\nu \\gg k_BT$（高振動数）で Wien の式になることを示せ。
(3) 全エネルギー密度（Stefan-Boltzmann の $T^4$ 則）を簡潔に議論せよ。`,
    solution: `## (1) 低振動数極限

$e^x - 1 \\approx x$（$x$ 小）：
$$u \\approx \\frac{8\\pi h\\nu^3}{c^3}\\cdot\\frac{k_BT}{h\\nu} = \\frac{8\\pi\\nu^2 k_BT}{c^3}$$

$$\\boxed{u_{RJ} = \\frac{8\\pi\\nu^2}{c^3}k_BT}$$

これは古典電磁気 + 等分配則で出る式（モード 1 個あたり $k_BT$）。全振動数で積分すると発散（紫外発散）。

## (2) 高振動数極限

$e^x - 1 \\approx e^x$（$x$ 大）：
$$u \\approx \\frac{8\\pi h\\nu^3}{c^3}e^{-h\\nu/k_BT}$$

$$\\boxed{u_W = \\frac{8\\pi h\\nu^3}{c^3}e^{-h\\nu/k_BT}}$$

これが Wien 則。高周波で指数的に抑制され、紫外発散が消える（プランクが量子化を導入した動機）。

## (3) Stefan-Boltzmann

全エネルギー密度 $U = \\int u(\\nu, T)d\\nu$。変数変換 $x = h\\nu/k_BT$ で：
$$U = \\frac{8\\pi(k_BT)^4}{h^3 c^3}\\int_0^\\infty\\frac{x^3}{e^x-1}dx = \\frac{8\\pi^5(k_BT)^4}{15h^3 c^3}$$

$$\\boxed{U \\propto T^4}$$

これが Stefan-Boltzmann 則。太陽からの輻射量が表面温度の 4 乗に比例、という天文学的重要結果。`,
  },
  {
    id: "tsukuba-2022-phys-1", universitySlug: "tsukuba", year: 2022, subject: "物理学", problemNumber: 1,
    title: "LC 交流の共振", field: "electromagnetism", difficulty: "standard",
    tags: ["共振", "Q値", "周波数選択"], isFree: true,
    statement: `**対応問題**: 筑波大学 2022年度 物理学 問1

## 問題の設定
直列 LC 回路（抵抗 $R$ あり）に交流電圧 $V_0\\cos\\omega t$。$Q = \\omega_0 L/R$（共振の鋭さ）。

## 問われている内容
(1) 共振周波数を書け。
(2) 共振時の電流振幅を求めよ。
(3) $Q$ が大きいほど何が良くなるか、ラジオ受信の観点から説明せよ。`,
    solution: `## (1) 共振

$$\\omega_0 = 1/\\sqrt{LC}$$

## (2) 共振時の電流

$Z = R$（インピーダンス最小）：
$$I_{max} = V_0/R$$

## (3) $Q$ と周波数選択

高 $Q$ → 共振ピークが鋭い → 目的の周波数だけ強く受信、近くの周波数は弱く拾う → 選局性が高い。

実用例：古いラジオではバリアブルコンデンサで $C$ を調整して $\\omega_0$ を変える。$Q \\sim 100$ で 1%以下の周波数解像度。

**ポイント**：$Q$ は「蓄積エネルギー / 1 周期あたりの損失」のスケール。量子系では寿命と準位幅の関係に対応。`,
  },
  {
    id: "tsukuba-2022-phys-2", universitySlug: "tsukuba", year: 2022, subject: "物理学", problemNumber: 2,
    title: "調和振動子の直交性", field: "quantum", difficulty: "advanced",
    tags: ["Hermite多項式", "直交性", "完全系"], isFree: true,
    statement: `**対応問題**: 筑波大学 2022年度 物理学 問2

## 問題の設定
調和振動子の固有関数 $\\psi_n(x) = A_n H_n(\\xi)e^{-\\xi^2/2}$、$\\xi = \\sqrt{m\\omega/\\hbar}\\,x$、$H_n$ は Hermite 多項式。

## 問われている内容
(1) $\\psi_n$ が正規直交系であることを示せ（$\\int\\psi_m^*\\psi_n dx = \\delta_{mn}$）。
(2) 規格化定数 $A_n$ を求めよ。
(3) 任意の波動関数を $\\psi_n$ で展開できる（完全性）。物理的意味を述べよ。`,
    solution: `## (1) 直交性

ハミルトニアンはエルミート。異なる固有値に属する固有関数は直交（一般則）：
$$\\int\\psi_m^*\\psi_n dx = 0 \\quad (m \\neq n)$$

同じエネルギー$(m = n)$ は規格化条件から 1。

**Hermite 多項式の直交性関係**：
$$\\int_{-\\infty}^\\infty H_m(\\xi)H_n(\\xi)e^{-\\xi^2}d\\xi = 2^n n!\\sqrt\\pi\\,\\delta_{mn}$$

## (2) 規格化

$|A_n|^2 \\int H_n^2 e^{-\\xi^2}d\\xi\\cdot\\sqrt{\\hbar/(m\\omega)} = 1$ から：
$$\\boxed{A_n = \\frac{1}{\\sqrt{2^n n!}}\\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4}}$$

## (3) 完全性の意味

$\\{\\psi_n\\}$ は任意の平方可積分関数を展開できる：
$$\\Psi(x) = \\sum_n c_n\\psi_n(x), \\quad c_n = \\int\\psi_n^*\\Psi dx$$

物理的意味：任意の状態はエネルギー固有状態の重ね合わせで表せる → エネルギー測定では $|c_n|^2$ の確率で $E_n$ が観測される。フーリエ級数の量子力学版。`,
  },
  {
    id: "tsukuba-2021-phys-1", universitySlug: "tsukuba", year: 2021, subject: "物理学", problemNumber: 1,
    title: "衝撃波とマッハ数", field: "mechanics", difficulty: "advanced",
    tags: ["衝撃波", "マッハ角", "超音速"], isFree: true,
    statement: `**対応問題**: 筑波大学 2021年度 物理学 問1

## 問題の設定
音速 $c$ の媒質中を速度 $v$ で音源が進む。$M = v/c$（マッハ数）。

## 問われている内容
(1) $M < 1$（亜音速）と $M > 1$（超音速）の違いを述べよ。
(2) 超音速での衝撃波面とマッハ角 $\\mu$（$\\sin\\mu = 1/M$）を導け。
(3) $M = 2$ のときのマッハ角を求めよ。`,
    solution: `## (1) 亜音速 vs 超音速

- **亜音速** $M < 1$：音源の出した波は音源より先に伝わり、音源の前方にも波が到達
- **超音速** $M > 1$：音源は自身の音より速く動く → 前方の空気は接近を感知せず、衝撃波面（円錐）が後ろに引きずられる

## (2) マッハ角

時間 $t$ で音源が進む距離 $vt$、波面の半径 $ct$。衝撃波面（円錐）と進行方向のなす角 $\\mu$：
$$\\sin\\mu = \\frac{ct}{vt} = \\frac{1}{M}$$

$$\\boxed{\\sin\\mu = 1/M}$$

## (3) 数値

$M = 2$：$\\sin\\mu = 0.5, \\mu = 30°$。

**応用**：戦闘機のソニックブーム、弾丸が超音速のときの「パチン」音、天体の衝撃波（超新星残骸、太陽圏の終端衝撃波）。`,
  },
  {
    id: "tsukuba-2021-phys-2", universitySlug: "tsukuba", year: 2021, subject: "物理学", problemNumber: 2,
    title: "エネルギー等分配則", field: "statistical", difficulty: "standard",
    tags: ["等分配則", "二原子分子", "比熱"], isFree: true,
    statement: `**対応問題**: 筑波大学 2021年度 物理学 問2

## 問題の設定
古典統計力学のエネルギー等分配則：各2次形式自由度に $\\frac{1}{2}k_BT$ のエネルギーが配分される。

## 問われている内容
(1) 単原子分子理想気体の定積比熱 $C_V$ を求めよ。
(2) 2 原子分子（剛体回転子 + 並進）の $C_V$ を求めよ。
(3) 低温で2 原子分子の $C_V$ が $(3/2)Nk_B$ に落ちる理由を量子力学的に説明せよ。`,
    solution: `## (1) 単原子

3 つの並進自由度：$\\langle E\\rangle = (3/2)Nk_BT$
$$\\boxed{C_V = (3/2)Nk_B}$$

## (2) 2 原子

3 並進 + 2 回転（軸方向まわりの回転は慣性が小さく無視）：計 5 自由度
$$\\langle E\\rangle = (5/2)Nk_BT \\Rightarrow \\boxed{C_V = (5/2)Nk_B}$$

振動モードを入れれば + 2 自由度（運動+ポテンシャル）で 7 まで増える。

## (3) 低温での回転モード凍結

回転モードのエネルギー間隔 $\\hbar^2/I \\sim k_B\\Theta_{rot}$。$k_BT \\ll \\hbar^2/I$ では回転励起が起こらず（量子効果で基底に凍結）、回転自由度が実質的に参加しない → 3 自由度のみ。

典型値：H₂ は $\\Theta_{rot} \\sim 88$ K、このあたり以下で回転が凍結。H₂ の比熱の温度依存グラフで実験確認できる。

**ポイント**：古典等分配則は「量子エネルギー間隔 $\\ll k_BT$」の条件で成立。低温＝量子が効く＝自由度が凍結される。`,
  },

  // ===== 東京大学 2022年度 =====
  {
    id: "todai-2022-phys-1",
    universitySlug: "todai",
    year: 2022,
    subject: "物理学",
    problemNumber: 1,
    title: "加速台車上の振り子と非慣性系",
    field: "mechanics",
    difficulty: "standard",
    tags: ["非慣性系", "慣性力", "微小振動", "振り子"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2022年度 物理学 問1

## 問題の設定
水平な床の上を一定加速度 $a$（水平方向）で運動する台車がある。この台車の天井から、質量が無視できる長さ $\\ell$ の糸で質量 $m$ の小球が吊るされている。糸は伸縮せず常にまっすぐ。重力加速度の大きさを $g$ とし、糸が鉛直下向きとなす角を $\\theta$ とする。

## 問われている内容
(1) 台車と一緒に動く観測者から見たときの、小球の平衡角 $\\theta_0$ を求めよ。

(2) 平衡角 $\\theta_0$ のまわりでの微小振動の角振動数 $\\omega$ を求めよ。

(3) 小球が平衡位置で静止しているとき、突然加速度が 0 になった。加速度変化直後から小球の運動を記述せよ（振幅を示せ）。`,
    solution: `## (1) 平衡角

**考え方**：台車の系は非慣性系なので、慣性力（疑似力）$-m\\vec a$（台車加速度と逆向き、水平）を導入して釣り合いを書きます。

**力の整理**

台車上の観測者から見た小球への力：
- 重力 $mg$（鉛直下向き）
- 慣性力 $ma$（水平、台車加速度の逆向き）
- 糸の張力 $T$（糸方向）

平衡では糸方向が「有効重力」の方向と一致：

$$\\boxed{\\tan\\theta_0 = \\frac{a}{g}}$$

有効重力の大きさは $g_{\\mathrm{eff}} = \\sqrt{g^2 + a^2}$。

## (2) 微小振動の角振動数

**考え方**：平衡のまわりの微小振動は「有効重力 $g_{\\mathrm{eff}}$ の単振り子」と同じ。

単振り子の公式 $\\omega = \\sqrt{g/\\ell}$ で $g$ を $g_{\\mathrm{eff}}$ に置き換え：

$$\\boxed{\\omega = \\sqrt{\\frac{g_{\\mathrm{eff}}}{\\ell}} = \\left(\\frac{g^2 + a^2}{\\ell^2}\\right)^{1/4}}$$

**物理的意味**：非慣性系で実効重力が $g$ から $\\sqrt{g^2+a^2}$ へ増えるぶん、振動が速くなる。

## (3) 加速度停止後の運動

**考え方**：加速度が 0 になった瞬間、慣性力が消え通常の重力だけが働く。直前まで小球は角 $\\theta_0$ で静止していたので、その位置から新たな単振り子運動が始まる。

**初期条件**（地上系）
- 初期角度：$\\theta(0) = \\theta_0 = \\arctan(a/g)$
- 初期角速度：$\\dot\\theta(0) = 0$

**運動方程式**

通常の単振り子で、$\\theta_0$ が十分小さければ微小振動近似：

$$\\ddot\\theta = -\\frac{g}{\\ell}\\sin\\theta \\approx -\\frac{g}{\\ell}\\theta$$

**解**

角振動数 $\\omega' = \\sqrt{g/\\ell}$、振幅 $\\theta_0$：

$$\\boxed{\\theta(t) = \\theta_0 \\cos(\\omega' t), \\quad \\omega' = \\sqrt{\\frac{g}{\\ell}}}$$

**ポイント**：
- 非慣性系での慣性力＝座標系加速度の符号反転
- 平衡点近傍の振動では「有効重力の大きさ」が効く
- 加速度が突然 0 になると、旧平衡点が振動の折り返し点に変わる
- 位置・速度は加速度変化の瞬間も連続（飛びなし）

**応用**：
- エレベータ内の振り子（鉛直加速で振動数変化）
- 回転系：遠心力＋コリオリ力で有効重力が場所依存
- ロケット・航空機内部の液体面もこれで傾く`,
  },

  // ===== 京都大学 2022年度 =====
  {
    id: "kyodai-2022-phys-1",
    universitySlug: "kyodai",
    year: 2022,
    subject: "物理学",
    problemNumber: 1,
    title: "2準位系とラビ振動",
    field: "quantum",
    difficulty: "advanced",
    tags: ["2準位系", "ラビ振動", "回転波近似", "時間依存摂動"],
    isFree: false,
    statement: `**対応問題**: 京都大学 2022年度 物理学 問1

## 問題の設定
エネルギー固有値 $E_g = 0$ と $E_e = \\hbar\\omega_0$（$\\omega_0 > 0$）を持つ2準位系（基底 $|g\\rangle$、励起 $|e\\rangle$）に、時間依存相互作用
$$\\hat H_I(t) = \\hbar\\Omega \\cos(\\omega t)(|e\\rangle\\langle g| + |g\\rangle\\langle e|)$$
を加える。ここで $\\Omega > 0$ はラビ振動数。初期状態 $|\\psi(0)\\rangle = |g\\rangle$。

## 問われている内容
(1) 共鳴条件 $\\omega = \\omega_0$ のもとで、回転波近似を用いて励起状態にある確率 $P_e(t)$ を求めよ。

(2) 完全反転 $P_e = 1$ を最小時間で達成する $t_\\pi$ を求めよ（$\\pi$ パルス）。

(3) 共鳴からずれた $\\delta \\equiv \\omega - \\omega_0 \\ne 0$ の場合に、励起確率 $P_e(t)$ を求めよ。`,
    solution: `## (1) 共鳴での励起確率

**考え方**：相互作用描像に移り、回転波近似（RWA）で速く振動する項を落とす。すると時間非依存ハミルトニアンに帰着する。

**相互作用描像**

$|\\tilde\\psi(t)\\rangle = e^{i\\hat H_0 t/\\hbar}|\\psi(t)\\rangle$ とすると、相互作用描像の $\\tilde H_I$ は：
$$\\tilde H_I(t) = \\hbar\\Omega\\cos(\\omega t)(e^{i\\omega_0 t}|e\\rangle\\langle g| + e^{-i\\omega_0 t}|g\\rangle\\langle e|)$$

$\\cos(\\omega t) = (e^{i\\omega t}+e^{-i\\omega t})/2$ を代入すると、共鳴項 $e^{\\pm i(\\omega_0 - \\omega)t}$ と反共鳴項 $e^{\\pm i(\\omega_0 + \\omega)t}$ が現れる。

**回転波近似**

反共鳴項は振動が速く平均で消える（RWA）：
$$\\tilde H_I^{\\mathrm{RWA}} = \\frac{\\hbar\\Omega}{2}(e^{-i\\delta t}|e\\rangle\\langle g| + e^{i\\delta t}|g\\rangle\\langle e|), \\quad \\delta = \\omega - \\omega_0$$

**共鳴 $\\delta = 0$**

時間非依存：
$$\\tilde H = \\frac{\\hbar\\Omega}{2}(|e\\rangle\\langle g| + |g\\rangle\\langle e|) = \\frac{\\hbar\\Omega}{2}\\hat\\sigma_x$$

$|g\\rangle$ から始めると、$\\hat\\sigma_x$ のユニタリー進化で：

$$|\\tilde\\psi(t)\\rangle = \\cos(\\Omega t/2)|g\\rangle - i\\sin(\\Omega t/2)|e\\rangle$$

$$\\boxed{P_e(t) = \\sin^2(\\Omega t/2) = \\frac{1-\\cos(\\Omega t)}{2}}$$

## (2) $\\pi$ パルス

$P_e = 1$ は $\\Omega t/2 = \\pi/2$ で達成：

$$\\boxed{t_\\pi = \\frac{\\pi}{\\Omega}}$$

**物理的意味**：外場強度 $\\Omega$ に反比例した時間で完全反転。量子計算の単一キュビット $X$ ゲートの基本動作。

## (3) 一般の detuning

**考え方**：回転する基底に移り、RWA後ハミルトニアンを時間非依存化。

相互作用描像からさらに回転変換すると、有効ハミルトニアンは：
$$\\tilde H_{\\mathrm{eff}} = \\frac{\\hbar\\Omega}{2}\\hat\\sigma_x - \\frac{\\hbar\\delta}{2}\\hat\\sigma_z + \\mathrm{const}$$

これは Bloch 球上で有効磁場 $\\vec\\Omega_{\\mathrm{eff}} = (\\Omega, 0, -\\delta)$ のまわりの回転。一般化ラビ振動数：

$$\\Omega_R = \\sqrt{\\Omega^2 + \\delta^2}$$

$|g\\rangle$ から出発した励起確率：

$$\\boxed{P_e(t) = \\frac{\\Omega^2}{\\Omega^2 + \\delta^2}\\sin^2\\!\\left(\\frac{\\Omega_R t}{2}\\right)}$$

**ポイント**：
- detuning $\\delta \\ne 0$ では完全反転できない（最大値 $\\Omega^2/(\\Omega^2+\\delta^2) < 1$）
- 振動は一般化ラビ振動数 $\\Omega_R$（共鳴より速い）
- 共鳴 $\\delta \\to 0$ で (1) に帰着

**応用**：
- NMR・ESR：共鳴周波数を外から掃引してスペクトル取得
- 量子計算の 1 キュビットゲート
- Bloch 球描像：純粋状態を 2次元球面上のベクトルで可視化`,
  },

  // ===== 東京科学大学（旧東工大） 2023年度 =====
  {
    id: "titech-2023-phys-1",
    universitySlug: "titech",
    year: 2023,
    subject: "物理学",
    problemNumber: 1,
    title: "グランドカノニカル集団と粒子数揺らぎ",
    field: "statistical",
    difficulty: "advanced",
    tags: ["グランドカノニカル", "化学ポテンシャル", "揺らぎ", "熱力学極限"],
    isFree: false,
    statement: `**対応問題**: 東京科学大学 2023年度 物理学 問1

## 問題の設定
熱浴・粒子浴に接触した系を考える。温度 $T$（逆温度 $\\beta = 1/k_B T$）、化学ポテンシャル $\\mu$ のグランドカノニカル集団のグランドカノニカル分配関数を
$$\\Xi(T,V,\\mu) = \\sum_N e^{\\beta\\mu N} Z_N(T,V)$$
と書く（$Z_N$ は粒子数 $N$ のカノニカル分配関数）。

## 問われている内容
(1) 平均粒子数 $\\langle N\\rangle$ と分散 $\\langle (\\Delta N)^2\\rangle$ を $\\ln\\Xi$ の $\\mu$ による微分で表せ。

(2) 古典理想気体に適用し、$\\langle N\\rangle$ および相対揺らぎ $\\langle (\\Delta N)^2\\rangle/\\langle N\\rangle^2$ を求めよ。

(3) 熱力学極限 $V\\to\\infty$（密度 $n = \\langle N\\rangle/V$ 一定）で相対揺らぎの振る舞いと物理的意味を述べよ。`,
    solution: `## (1) 揺らぎと分配関数微分

**考え方**：$\\Xi$ は $e^{\\beta\\mu N}$ を重みにした和なので、$\\mu$ で微分するごとに $N$ が降りてくる母関数。

**平均粒子数**

$$\\langle N\\rangle = \\frac{1}{\\Xi}\\sum_N N e^{\\beta\\mu N}Z_N = \\frac{1}{\\beta}\\frac{\\partial \\ln\\Xi}{\\partial\\mu}$$

$$\\boxed{\\langle N\\rangle = k_B T \\frac{\\partial \\ln\\Xi}{\\partial\\mu}}$$

**分散**

2回微分：
$$\\frac{\\partial^2 \\ln\\Xi}{\\partial \\mu^2} = \\beta^2(\\langle N^2\\rangle - \\langle N\\rangle^2)$$

$$\\boxed{\\langle (\\Delta N)^2\\rangle = (k_B T)^2\\frac{\\partial^2 \\ln\\Xi}{\\partial\\mu^2} = k_B T\\frac{\\partial \\langle N\\rangle}{\\partial\\mu}}$$

揺動応答定理：**揺らぎ** $\\propto$ **応答係数**。

## (2) 古典理想気体

**分配関数**

カノニカル $Z_N = \\frac{1}{N!}(V/\\lambda^3)^N$（$\\lambda = \\sqrt{2\\pi\\hbar^2/(mk_B T)}$ は熱的ドブロイ波長）。

グランドカノニカル：
$$\\Xi = \\sum_N \\frac{(Ve^{\\beta\\mu}/\\lambda^3)^N}{N!} = \\exp\\!\\left(\\frac{V}{\\lambda^3}e^{\\beta\\mu}\\right)$$

$$\\ln\\Xi = \\frac{V}{\\lambda^3}e^{\\beta\\mu}$$

**平均粒子数**

$$\\boxed{\\langle N\\rangle = \\frac{V}{\\lambda^3}e^{\\beta\\mu}}$$

**分散**

$\\ln\\Xi = \\langle N\\rangle$ なので：
$$\\langle (\\Delta N)^2\\rangle = k_B T \\cdot \\beta\\langle N\\rangle = \\langle N\\rangle$$

古典理想気体では **分散 = 平均** → ポアソン分布の性質。

**相対揺らぎ**

$$\\boxed{\\frac{\\langle(\\Delta N)^2\\rangle}{\\langle N\\rangle^2} = \\frac{1}{\\langle N\\rangle}}$$

## (3) 熱力学極限

$\\langle N\\rangle \\to \\infty$（$V\\to\\infty$、$n$ 固定）で：

$$\\frac{\\sqrt{\\langle(\\Delta N)^2\\rangle}}{\\langle N\\rangle} = \\frac{1}{\\sqrt{\\langle N\\rangle}} \\to 0$$

**物理的意味**：
- 相対揺らぎは $1/\\sqrt{N}$ で消える → 中心極限定理の帰結
- 熱力学極限でグランドカノニカルとカノニカルは等価（アンサンブル等価性）
- マクロ系で「粒子数が揺らぐ」ことは実質観測されない
- 揺らぎが見えるのはメソスコピック系（$N \\lesssim 10^3$）

**ポイント**：
- 揺動散逸定理：$\\langle(\\Delta N)^2\\rangle = k_B T\\partial\\langle N\\rangle/\\partial\\mu$
- 古典理想気体 → ポアソン統計（分散 = 平均）
- 量子統計では変化：ボース統計では増強、フェルミ統計では抑制

**応用**：
- 超伝導・超流動の相転移での臨界揺らぎ
- 光子統計（ボース統計）：熱光源 vs. コヒーレント光源の分散比較
- メソスコピック電子系での粒子数揺らぎ測定`,
  },

  // ===== 東北大学 2023年度 =====
  {
    id: "tohoku-2023-phys-1",
    universitySlug: "tohoku",
    year: 2023,
    subject: "物理学",
    problemNumber: 1,
    title: "一様外場中の誘電体球",
    field: "electromagnetism",
    difficulty: "standard",
    tags: ["誘電体", "境界条件", "ラプラス方程式", "分極"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2023年度 物理学 問1

## 問題の設定
真空中の一様電場 $\\vec E_0 = E_0\\hat z$ の中に、誘電率 $\\varepsilon$ の誘電体球（半径 $a$）を置く。球外は真空（誘電率 $\\varepsilon_0$）。球内に自由電荷はなく、球面での境界条件は
- 電位 $\\phi$ の連続
- 電束密度の法線成分 $\\varepsilon\\,\\partial\\phi/\\partial r$ の連続

を満たす。原点を球の中心とする。

## 問われている内容
(1) 球内・球外の電位 $\\phi_{\\mathrm{in}}(r,\\theta)$, $\\phi_{\\mathrm{out}}(r,\\theta)$ の一般形を、軸対称性と遠方条件 $\\phi_{\\mathrm{out}}\\to -E_0 r\\cos\\theta$（$r\\to\\infty$）から導け。

(2) 球面 $r = a$ の境界条件を使って未定係数を決定し、球内の電場 $\\vec E_{\\mathrm{in}}$ を求めよ。

(3) 極限 $\\varepsilon/\\varepsilon_0 \\to \\infty$ で導体球（球内電場 0）の結果に帰着することを示せ。`,
    solution: `## (1) 電位の一般形

**考え方**：電荷のない領域では $\\nabla^2\\phi = 0$（ラプラス方程式）。軸対称解はルジャンドル展開で書け、外場 $z$ 方向の対称性から $\\ell = 1$ のみが残る。

**一般解**
$$\\phi(r,\\theta) = \\sum_\\ell\\!\\left(A_\\ell r^\\ell + \\frac{B_\\ell}{r^{\\ell+1}}\\right)P_\\ell(\\cos\\theta)$$

$\\ell = 1$ のみで、$P_1(\\cos\\theta) = \\cos\\theta$：

**球内**（$r\\to 0$ で有限 → $B_1 = 0$）：
$$\\phi_{\\mathrm{in}} = -A r\\cos\\theta$$

**球外**（$r\\to\\infty$ で $-E_0 r\\cos\\theta$ に漸近）：
$$\\phi_{\\mathrm{out}} = -E_0 r\\cos\\theta + \\frac{B}{r^2}\\cos\\theta$$

## (2) 境界条件で係数決定・球内電場

**電位連続**（$r = a$）：
$$-Aa = -E_0 a + \\frac{B}{a^2} \\quad\\cdots (\\ast)$$

**$\\varepsilon\\partial\\phi/\\partial r$ 連続**（$r = a$）：
$$-\\varepsilon A = -\\varepsilon_0 E_0 - \\frac{2\\varepsilon_0 B}{a^3} \\quad\\cdots (\\ast\\ast)$$

**連立解**

$(\\ast)$ から $B = a^3(E_0 - A)$ を $(\\ast\\ast)$ に代入：
$$\\varepsilon A = \\varepsilon_0 E_0 + 2\\varepsilon_0(E_0 - A)$$
$$(\\varepsilon + 2\\varepsilon_0)A = 3\\varepsilon_0 E_0$$

$$\\boxed{A = \\frac{3\\varepsilon_0}{\\varepsilon + 2\\varepsilon_0}E_0}$$

**球内電場**

$\\phi_{\\mathrm{in}} = -Az$ なので $\\vec E_{\\mathrm{in}} = A\\hat z$：

$$\\boxed{\\vec E_{\\mathrm{in}} = \\frac{3\\varepsilon_0}{\\varepsilon + 2\\varepsilon_0}E_0 \\hat z}$$

**物理的意味**：
- $\\varepsilon > \\varepsilon_0$ なら $|\\vec E_{\\mathrm{in}}| < E_0$（誘電体内の分極が外場を減殺）
- 球内電場は**一様**（球の特殊性。楕円体でも一様だが方向依存）

## (3) 導体極限

$\\varepsilon/\\varepsilon_0 \\to \\infty$ で：

$$\\vec E_{\\mathrm{in}} \\to \\frac{3\\varepsilon_0}{\\varepsilon}E_0\\hat z \\to 0$$

これは導体の静電平衡条件（内部電場 0）と一致。

また $B \\to a^3 E_0$ で、球外は外場 + 双極子モーメント $p = 4\\pi\\varepsilon_0 a^3 E_0$ の電場となり、導体球の誘導双極子の既知結果を再現。

**ポイント**：
- ラプラス方程式 + ルジャンドル展開が軸対称問題の標準手法
- 球面境界：電位連続 + $D_\\perp = \\varepsilon E_\\perp$ 連続（自由電荷なし時）
- クラウジウス・モソッティ関係（分子分極率から巨視的誘電率）の起点
- 誘電体球の内部電場一様性は楕円体で一般化（depolarization factor）

**応用**：
- タンパク質・水中粒子の誘電応答
- レンズや液晶での光学応答
- 導体球は $\\varepsilon\\to\\infty$ の極限として自然に包含`,
  },

  // ===== 大阪大学 2024年度 =====
  {
    id: "osaka-2024-phys-1",
    universitySlug: "osaka",
    year: 2024,
    subject: "物理学",
    problemNumber: 1,
    title: "ジュール・トムソン過程と逆転温度",
    field: "thermodynamics",
    difficulty: "standard",
    tags: ["ジュール・トムソン", "定エンタルピー", "実在気体", "ファンデルワールス"],
    isFree: false,
    statement: `**対応問題**: 大阪大学 2024年度 物理学 問1

## 問題の設定
気体が多孔質栓（絞り）を通って高圧側（圧力 $P_1$）から低圧側（圧力 $P_2 < P_1$）へ定常的に流れる。断熱で左右の圧力は一定。この過程では気体のエンタルピー $H$ が保存される（ジュール・トムソン過程）。ジュール・トムソン係数を
$$\\mu_{\\mathrm{JT}} \\equiv \\left(\\frac{\\partial T}{\\partial P}\\right)_H$$
と定義する。

## 問われている内容
(1) $\\mu_{\\mathrm{JT}}$ を $T$, $V$, $C_P$, $(\\partial V/\\partial T)_P$ のみで表せ。

(2) 理想気体では $\\mu_{\\mathrm{JT}} = 0$ を示せ。温度変化を得るために実在気体の効果が必要な理由を述べよ。

(3) ファンデルワールス方程式 $(P + a/V_m^2)(V_m - b) = RT$ に従う気体で、低密度近似 $V_m \\gg b$ での逆転温度 $T_{\\mathrm{inv}}$（$\\mu_{\\mathrm{JT}} = 0$ となる温度）を求めよ。`,
    solution: `## (1) $\\mu_{\\mathrm{JT}}$ の一般式

**考え方**：エンタルピー $H = H(T,P)$ の全微分で $dH = 0$ を使う。

**全微分**
$$dH = \\left(\\frac{\\partial H}{\\partial T}\\right)_P dT + \\left(\\frac{\\partial H}{\\partial P}\\right)_T dP$$

第1項は $C_P$（定圧熱容量）。第2項はマクスウェル関係式から：
$$\\left(\\frac{\\partial H}{\\partial P}\\right)_T = V - T\\left(\\frac{\\partial V}{\\partial T}\\right)_P$$

（導出：$dH = TdS + VdP$ と $(\\partial S/\\partial P)_T = -(\\partial V/\\partial T)_P$ を使う）

$dH = 0$ から：

$$\\boxed{\\mu_{\\mathrm{JT}} = \\frac{1}{C_P}\\!\\left[T\\!\\left(\\frac{\\partial V}{\\partial T}\\right)_P - V\\right]}$$

## (2) 理想気体

理想気体 $PV = nRT$ から：
$$\\left(\\frac{\\partial V}{\\partial T}\\right)_P = \\frac{nR}{P} = \\frac{V}{T}$$

代入：
$$T\\cdot\\frac{V}{T} - V = 0 \\quad\\Rightarrow\\quad \\boxed{\\mu_{\\mathrm{JT}}^{\\mathrm{ideal}} = 0}$$

**物理的意味**：
- 理想気体ではエンタルピーが温度のみの関数 $H = H(T)$
- $dH = C_P dT = 0 \\Rightarrow dT = 0$（温度不変）
- 温度変化には **分子間力**（引力 or 斥力）が必要
- 冷却（$\\mu_{\\mathrm{JT}} > 0$）は主に引力、加熱は斥力の寄与

## (3) ファンデルワールス気体の逆転温度

**低密度展開**

$(P + a/V_m^2)(V_m - b) = RT$ を $V_m$ について展開（$V_m \\gg b$）：
$$V_m \\simeq \\frac{RT}{P} + b - \\frac{a}{RT}$$

（virial 展開の一次近似）

**微分**
$$\\left(\\frac{\\partial V_m}{\\partial T}\\right)_P \\simeq \\frac{R}{P} + \\frac{a}{RT^2}$$

**$\\mu_{\\mathrm{JT}}$ の分子**
$$T\\left(\\frac{\\partial V_m}{\\partial T}\\right)_P - V_m = \\frac{RT}{P} + \\frac{a}{RT} - \\left(\\frac{RT}{P} + b - \\frac{a}{RT}\\right) = \\frac{2a}{RT} - b$$

$\\mu_{\\mathrm{JT}} = 0$ の条件：
$$\\frac{2a}{RT_{\\mathrm{inv}}} = b$$

$$\\boxed{T_{\\mathrm{inv}} = \\frac{2a}{Rb}}$$

**物理的意味**：
- $T < T_{\\mathrm{inv}}$：引力 ($a$) 優勢 → $\\mu_{\\mathrm{JT}} > 0$（**冷却**）
- $T > T_{\\mathrm{inv}}$：斥力 ($b$) 優勢 → $\\mu_{\\mathrm{JT}} < 0$（**加熱**）
- 窒素：$T_{\\mathrm{inv}} \\approx 621$ K（室温で冷却 → 液化装置 Linde cycle）
- 水素 $T_{\\mathrm{inv}} \\approx 204$ K、ヘリウム $\\approx 51$ K（室温では逆に加熱、予冷が必要）

**ポイント**：
- 熱力学関係式 $(\\partial H/\\partial P)_T = V - T(\\partial V/\\partial T)_P$ が鍵
- マクスウェル関係式 $(\\partial S/\\partial P)_T = -(\\partial V/\\partial T)_P$ から導く
- 気体液化の基本原理、低温工学の出発点
- 逆転温度は分子間力の強さを反映する指標

**応用**：
- Linde サイクル（窒素・酸素の工業液化）
- Hampson-Linde 法によるヘリウム液化には予冷が必要（室温で加熱側）
- 超低温実験の第一段階`,
  },

  // ===== 東京大学 2021年度 =====
  {
    id: "todai-2021-phys-1",
    universitySlug: "todai",
    year: 2021,
    subject: "物理学",
    problemNumber: 1,
    title: "ベクトルポテンシャルとゲージ変換",
    field: "electromagnetism",
    difficulty: "advanced",
    tags: ["ベクトルポテンシャル", "ゲージ変換", "アハラノフ・ボーム", "ストークスの定理"],
    isFree: false,
    statement: `**対応問題**: 東京大学 2021年度 物理学 問1

## 問題の設定
電磁場をスカラーポテンシャル $\\phi$ とベクトルポテンシャル $\\vec A$ で記述する。電場と磁場は
$$\\vec E = -\\nabla\\phi - \\frac{\\partial \\vec A}{\\partial t}, \\quad \\vec B = \\nabla \\times \\vec A$$
で与えられる。任意のスカラー関数 $\\chi(\\vec r,t)$ を用いた変換
$$\\vec A \\to \\vec A' = \\vec A + \\nabla\\chi, \\quad \\phi \\to \\phi' = \\phi - \\frac{\\partial \\chi}{\\partial t}$$
をゲージ変換と呼ぶ。

## 問われている内容
(1) ゲージ変換の下で $\\vec E$ と $\\vec B$ が不変であることを示せ。

(2) 一様磁場 $\\vec B = B_0\\hat z$ を表すベクトルポテンシャルを2通り（対称ゲージとランダウゲージ）書き、両者がゲージ変換で結ばれることを示せ。

(3) 半径 $a$ の無限長ソレノイド（軸 $z$、内部のみ磁場 $\\vec B = B_0\\hat z$、外部は $\\vec B = 0$）の外側におけるベクトルポテンシャル $\\vec A$ を求めよ。外側で $\\vec B = 0$ にもかかわらず $\\vec A \\ne 0$ である意義（アハラノフ・ボーム効果との関係）を述べよ。`,
    solution: `## (1) ゲージ不変性

**考え方**：定義式に変換を代入し、$\\nabla\\times\\nabla\\chi = 0$ と微分の交換可能性を使う。

**磁場**
$$\\vec B' = \\nabla\\times\\vec A' = \\nabla\\times\\vec A + \\nabla\\times(\\nabla\\chi) = \\vec B + 0 = \\vec B$$

恒等式 $\\nabla\\times(\\nabla\\chi) = 0$ による。

**電場**
$$\\vec E' = -\\nabla\\phi' - \\frac{\\partial \\vec A'}{\\partial t} = -\\nabla\\phi + \\nabla\\frac{\\partial\\chi}{\\partial t} - \\frac{\\partial \\vec A}{\\partial t} - \\nabla\\frac{\\partial\\chi}{\\partial t} = \\vec E$$

時間微分と空間微分が交換するので $\\nabla(\\partial\\chi/\\partial t) = \\partial(\\nabla\\chi)/\\partial t$ で打ち消し合う。

$$\\boxed{\\vec E, \\vec B \\text{ はゲージ不変}}$$

## (2) 一様磁場の2つのゲージ

**対称ゲージ**

$$\\vec A_S = \\frac{1}{2}\\vec B\\times\\vec r = \\frac{B_0}{2}(-y, x, 0)$$

確認：$\\nabla\\times\\vec A_S = (0, 0, \\partial_x(B_0 x/2) - \\partial_y(-B_0 y/2)) = (0, 0, B_0)$ ✓

**ランダウゲージ**

$$\\vec A_L = (0, B_0 x, 0)$$

確認：$\\nabla\\times\\vec A_L = (0, 0, \\partial_x(B_0 x)) = (0, 0, B_0)$ ✓

**ゲージ変換で結ぶ**

$\\chi$ を見つける条件：$\\vec A_L - \\vec A_S = \\nabla\\chi$。

$$\\vec A_L - \\vec A_S = (B_0 y/2, B_0 x/2, 0)$$

$\\chi = B_0 xy/2$ とすれば $\\nabla\\chi = (B_0 y/2, B_0 x/2, 0)$ ✓

$$\\boxed{\\chi = \\frac{B_0 xy}{2} \\text{ で2つのゲージが結ばれる}}$$

## (3) ソレノイド外側のベクトルポテンシャル

**考え方**：外側では $\\vec B = 0$ だが、ソレノイド内に磁束 $\\Phi = \\pi a^2 B_0$ が閉じ込められているため、ストークスの定理から $\\oint \\vec A \\cdot d\\vec\\ell = \\Phi$ で $\\vec A \\ne 0$。

**対称性**

軸対称・$z$ 並進対称なので $\\vec A$ は $\\hat\\phi$ 方向のみで、$|\\vec A| = A(r)$。

**ストークスの定理**

外側の半径 $r > a$ の円周で：
$$\\oint \\vec A\\cdot d\\vec\\ell = A(r)\\cdot 2\\pi r = \\int_S \\vec B\\cdot d\\vec S = \\Phi = \\pi a^2 B_0$$

$$\\boxed{\\vec A(r) = \\frac{a^2 B_0}{2r}\\hat\\phi \\quad (r > a)}$$

**$\\vec B = 0$ なのに $\\vec A \\ne 0$ の意義**

古典電磁気では、外側で力（$\\vec F = q\\vec E + q\\vec v\\times\\vec B = 0$）が働かないので、$\\vec A$ は計算上の道具にすぎない。

しかし量子力学では、波動関数の位相変化
$$\\Delta\\phi_{\\mathrm{phase}} = \\frac{q}{\\hbar}\\oint \\vec A\\cdot d\\vec\\ell = \\frac{q\\Phi}{\\hbar}$$
が物理的観測量（干渉縞のずれ）として現れる。これが**アハラノフ・ボーム効果**。

**ポイント**：
- ゲージ自由度は計算手段を変えるだけ、物理量に影響なし
- 一様磁場では対称ゲージ（角運動量保存と相性）、ランダウゲージ（量子ホール効果向き）が標準
- $\\oint \\vec A\\cdot d\\vec\\ell = \\Phi$ がゲージ不変な物理量
- アハラノフ・ボーム効果：磁場ゼロ領域でも $\\vec A$ が量子位相を生む → ベクトルポテンシャルは「実在」する

**応用**：
- ランダウ準位（強磁場下の電子）
- 量子ホール効果
- 超伝導体のフラックス量子化
- アハラノフ・ボーム効果の実験的検証（外村彰 1986）`,
  },

  // ===== 京都大学 2021年度 =====
  {
    id: "kyodai-2021-phys-1",
    universitySlug: "kyodai",
    year: 2021,
    subject: "物理学",
    problemNumber: 1,
    title: "2準位系のショットキー異常",
    field: "statistical",
    difficulty: "standard",
    tags: ["2準位系", "自由エネルギー", "比熱", "ショットキー異常"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2021年度 物理学 問1

## 問題の設定
互いに相互作用しない $N$ 個の2準位系を考える。各2準位系はエネルギー $0$ と $\\varepsilon > 0$ の2つの状態をもつ。系は温度 $T$（逆温度 $\\beta = 1/k_B T$）の熱浴と接触している。

## 問われている内容
(1) 1個の2準位系の分配関数 $z_1$、自由エネルギー $f_1 = -k_B T\\ln z_1$、平均エネルギー $\\langle\\varepsilon\\rangle$ を求めよ。

(2) 全系の比熱 $C$ を温度 $T$ の関数として求めよ。

(3) $C(T)$ を $T$ について調べ、$T\\to 0$ と $T\\to\\infty$ の極限を議論せよ。比熱がピークを示す温度のオーダーを示せ（ショットキー異常）。`,
    solution: `## (1) 1粒子分配関数と平均エネルギー

**分配関数**
$$z_1 = 1 + e^{-\\beta\\varepsilon}$$

**自由エネルギー**
$$\\boxed{f_1 = -k_B T\\ln(1 + e^{-\\beta\\varepsilon})}$$

**平均エネルギー**

$\\langle\\varepsilon\\rangle = -\\partial\\ln z_1/\\partial\\beta$ を計算：
$$\\langle\\varepsilon\\rangle = \\frac{\\varepsilon e^{-\\beta\\varepsilon}}{1 + e^{-\\beta\\varepsilon}} = \\frac{\\varepsilon}{e^{\\beta\\varepsilon}+1}$$

$$\\boxed{\\langle\\varepsilon\\rangle = \\frac{\\varepsilon}{e^{\\varepsilon/k_B T}+1}}$$

これはフェルミ・ディラック分布の形（占有確率 $\\times \\varepsilon$）。

## (2) 全系の比熱

全エネルギー：$U = N\\langle\\varepsilon\\rangle$

比熱：$C = \\partial U/\\partial T$

$x \\equiv \\varepsilon/(k_B T)$ とすると、$\\partial x/\\partial T = -x/T$。

$$C = N\\frac{\\partial}{\\partial T}\\left(\\frac{\\varepsilon}{e^x + 1}\\right) = N\\varepsilon\\cdot\\frac{e^x}{(e^x+1)^2}\\cdot\\frac{x}{T}$$

整理：

$$\\boxed{C = N k_B\\left(\\frac{\\varepsilon}{k_B T}\\right)^{\\!2}\\frac{e^{\\varepsilon/k_B T}}{(e^{\\varepsilon/k_B T}+1)^2}}$$

## (3) 極限と比熱ピーク

**$T\\to 0$（$\\beta\\varepsilon\\to\\infty$）**

$e^{\\beta\\varepsilon}\\to\\infty$、$e^x/(e^x+1)^2 \\sim e^{-x}$ で：

$$C \\sim N k_B\\!\\left(\\frac{\\varepsilon}{k_B T}\\right)^{\\!2}e^{-\\varepsilon/k_B T} \\to 0$$

指数的に抑制（ギャップ $\\varepsilon$ より低温では励起できない）。

**$T\\to\\infty$（$\\beta\\varepsilon\\to 0$）**

$e^x \\to 1$、$e^x/(e^x+1)^2 \\to 1/4$、$x \\to 0$ で：

$$C \\sim N k_B\\cdot 0 \\cdot \\frac{1}{4} = 0$$

これも 0（高温では2準位とも均等占有、温度上げてもエネルギーが増えない）。

**ピーク温度**

両極限で 0、中間でピーク → ピーク温度のオーダー：

$$\\boxed{k_B T_{\\mathrm{peak}} \\sim \\varepsilon}$$

正確な計算では $\\varepsilon/(k_B T_{\\mathrm{peak}}) \\approx 2.4$、ピーク値 $C_{\\mathrm{max}} \\approx 0.44 N k_B$。

**ショットキー異常**：2準位系特有の比熱ピーク。デバイ模型のような単調増加ではなく、特定温度に局在する。

**ポイント**：
- 2準位系は最も基本的なギャップ系（エネルギーが連続でない）
- 低温で「凍結」、高温で「飽和」、その中間でピーク
- ピーク位置がエネルギーギャップを直接与える → 実験で $\\varepsilon$ を測定可能
- フェルミ統計（粒子数 0 or 1）と同じ構造

**応用**：
- 結晶場分裂したスピン系（希土類イオン、Tb, Pr 等）
- 超伝導体の電子比熱（$T_c$ 以下のエネルギーギャップ）
- 核常磁性（核スピンのゼーマン分裂）
- 分子のロタマー異性体間遷移`,
  },

  // ===== 東京科学大学 2022年度 =====
  {
    id: "titech-2022-phys-1",
    universitySlug: "titech",
    year: 2022,
    subject: "物理学",
    problemNumber: 1,
    title: "角運動量の昇降演算子と固有値",
    field: "quantum",
    difficulty: "advanced",
    tags: ["角運動量", "昇降演算子", "交換関係", "固有値"],
    isFree: false,
    statement: `**対応問題**: 東京科学大学 2022年度 物理学 問1

## 問題の設定
角運動量演算子 $\\hat J_x, \\hat J_y, \\hat J_z$ は交換関係
$$[\\hat J_x, \\hat J_y] = i\\hbar \\hat J_z, \\quad [\\hat J_y, \\hat J_z] = i\\hbar \\hat J_x, \\quad [\\hat J_z, \\hat J_x] = i\\hbar \\hat J_y$$
を満たす。$\\hat J^2 = \\hat J_x^2 + \\hat J_y^2 + \\hat J_z^2$ と $\\hat J_z$ の同時固有状態を $|j,m\\rangle$ と書き、
$$\\hat J^2|j,m\\rangle = \\hbar^2 j(j+1)|j,m\\rangle, \\quad \\hat J_z|j,m\\rangle = \\hbar m|j,m\\rangle$$
とする。昇降演算子を $\\hat J_\\pm \\equiv \\hat J_x \\pm i\\hat J_y$ と定義する。

## 問われている内容
(1) $[\\hat J^2, \\hat J_\\pm] = 0$ と $[\\hat J_z, \\hat J_\\pm] = \\pm\\hbar \\hat J_\\pm$ を示せ。

(2) $\\hat J_\\pm |j,m\\rangle$ がどの固有状態に比例するかを示し、比例係数を $\\hat J_\\pm \\hat J_\\mp$ の表式から決定せよ。

(3) $m$ の取りうる値が $-j, -j+1, \\ldots, j-1, j$ となること、すなわち $j$ が整数または半整数であることを論じよ。`,
    solution: `## (1) 交換関係

**$[\\hat J^2, \\hat J_\\pm]$**

$\\hat J^2$ は $\\hat J_x, \\hat J_y, \\hat J_z$ のすべてと可換（標準的な計算で確認できる）。$\\hat J_\\pm$ は $\\hat J_x, \\hat J_y$ の線形結合なので：

$$\\boxed{[\\hat J^2, \\hat J_\\pm] = 0}$$

**$[\\hat J_z, \\hat J_\\pm]$**

$$[\\hat J_z, \\hat J_\\pm] = [\\hat J_z, \\hat J_x] \\pm i[\\hat J_z, \\hat J_y] = i\\hbar \\hat J_y \\pm i(-i\\hbar \\hat J_x) = i\\hbar \\hat J_y \\pm \\hbar \\hat J_x$$

$\\pm$ をくくり出して：

$$[\\hat J_z, \\hat J_\\pm] = \\pm\\hbar(\\hat J_x \\pm i\\hat J_y) = \\pm\\hbar \\hat J_\\pm$$

$$\\boxed{[\\hat J_z, \\hat J_\\pm] = \\pm\\hbar \\hat J_\\pm}$$

## (2) 昇降の作用と係数

**固有値の変化**

$\\hat J_z(\\hat J_\\pm |j,m\\rangle) = (\\hat J_\\pm \\hat J_z + [\\hat J_z, \\hat J_\\pm])|j,m\\rangle = \\hat J_\\pm(\\hbar m)|j,m\\rangle \\pm \\hbar \\hat J_\\pm |j,m\\rangle$

$$= \\hbar(m\\pm 1)\\hat J_\\pm|j,m\\rangle$$

つまり $\\hat J_\\pm |j,m\\rangle$ は $\\hbar(m\\pm 1)$ 固有値の状態 → $|j,m\\pm 1\\rangle$ に比例。

$$\\hat J_\\pm |j,m\\rangle = c_\\pm(j,m)\\hbar |j,m\\pm 1\\rangle$$

**係数の決定**

$\\hat J_\\mp \\hat J_\\pm = \\hat J^2 - \\hat J_z^2 \\mp \\hbar \\hat J_z$（直接計算）。

$\\langle j,m|\\hat J_\\mp \\hat J_\\pm|j,m\\rangle = |c_\\pm|^2 \\hbar^2$ かつ $\\hat J^2 - \\hat J_z(\\hat J_z \\pm \\hbar)$ の固有値：
$$\\hbar^2[j(j+1) - m(m\\pm 1)] = |c_\\pm|^2 \\hbar^2$$

位相を実正にとって：

$$\\boxed{\\hat J_\\pm |j,m\\rangle = \\hbar\\sqrt{j(j+1) - m(m\\pm 1)}\\,|j,m\\pm 1\\rangle}$$

## (3) 固有値のスペクトラム

**上限・下限の存在**

$\\hat J^2 - \\hat J_z^2 = \\hat J_x^2 + \\hat J_y^2 \\geq 0$（半正定値）から：
$$\\hbar^2[j(j+1) - m^2] \\geq 0 \\Rightarrow m^2 \\leq j(j+1)$$

つまり $m$ には上限 $m_{\\max}$ と下限 $m_{\\min}$ が存在。

**上限の条件**

$\\hat J_+|j,m_{\\max}\\rangle = 0 \\Rightarrow j(j+1) - m_{\\max}(m_{\\max}+1) = 0$。

これは $m_{\\max} = j$ または $-(j+1)$。物理的に $m_{\\max} > 0$ なら $m_{\\max} = j$。

**下限の条件**

同様に $m_{\\min} = -j$。

**整数または半整数**

上限と下限の差は整数（昇降演算子で $\\pm 1$ ずつ変化するから）：
$$m_{\\max} - m_{\\min} = 2j = \\text{整数}$$

$$\\boxed{j = 0, \\frac{1}{2}, 1, \\frac{3}{2}, 2, \\ldots}$$

各 $j$ で $m = -j, -j+1, \\ldots, j-1, j$（計 $2j+1$ 個）。

**ポイント**：
- 整数 $j$（軌道角運動量）と半整数 $j$（スピン）の両方が許される
- 半整数は古典的な軌道運動には現れない純粋な量子効果
- 昇降演算子は SO(3) 表現論の代数的構成の鍵
- $|j,j\\rangle$ は最大重み状態、ここから $\\hat J_-$ で全体が生成される

**応用**：
- スピン1/2（電子・陽子・中性子）：$j = 1/2$、$m = \\pm 1/2$
- 軌道角運動量 $\\ell = 0, 1, 2, \\ldots$（s, p, d, f 軌道）
- クレブシュ・ゴルダン係数による角運動量合成
- スピン1（光子・$W^\\pm$ ボソン）の偏極状態`,
  },

  // ===== 東京科学大学 2021年度 =====
  {
    id: "titech-2021-phys-1",
    universitySlug: "titech",
    year: 2021,
    subject: "物理学",
    problemNumber: 1,
    title: "対称コマの歳差運動",
    field: "mechanics",
    difficulty: "advanced",
    tags: ["剛体", "歳差", "オイラー角", "対称コマ"],
    isFree: false,
    statement: `**対応問題**: 東京科学大学 2021年度 物理学 問1

## 問題の設定
対称コマ（$z'$ 軸まわりの慣性モーメント $I_3$、$x'y'$ 面内主軸まわり $I_1 = I_2 \\equiv I$）が、固定点を支点として重力場 $\\vec g$ 中で運動する。支点から重心までの距離 $\\ell$、コマの質量 $M$。オイラー角 $(\\phi, \\theta, \\psi)$ で配位を記述する（$\\theta$ は対称軸 $z'$ と鉛直軸 $z$ のなす角）。

## 問われている内容
(1) 対称コマのラグランジアン $L$ をオイラー角で書け。

(2) 保存量を3つ挙げ、それを使って $\\theta$ の有効ポテンシャル $V_{\\mathrm{eff}}(\\theta)$ を導け。

(3) $\\theta = \\theta_0$（一定）で安定的に歳差運動する条件と、歳差角速度 $\\dot\\phi$ を求めよ。`,
    solution: `## (1) ラグランジアン

**運動エネルギー**

オイラー角での角速度成分（体軸座標系）：
$$\\omega_{x'} = \\dot\\phi\\sin\\theta\\sin\\psi + \\dot\\theta\\cos\\psi$$
$$\\omega_{y'} = \\dot\\phi\\sin\\theta\\cos\\psi - \\dot\\theta\\sin\\psi$$
$$\\omega_{z'} = \\dot\\phi\\cos\\theta + \\dot\\psi$$

$T = \\frac{1}{2}I(\\omega_{x'}^2 + \\omega_{y'}^2) + \\frac{1}{2}I_3 \\omega_{z'}^2$

整理：
$$T = \\frac{1}{2}I(\\dot\\theta^2 + \\dot\\phi^2\\sin^2\\theta) + \\frac{1}{2}I_3(\\dot\\psi + \\dot\\phi\\cos\\theta)^2$$

**ポテンシャル** $V = Mg\\ell\\cos\\theta$

**ラグランジアン**
$$\\boxed{L = \\frac{1}{2}I(\\dot\\theta^2 + \\dot\\phi^2\\sin^2\\theta) + \\frac{1}{2}I_3(\\dot\\psi + \\dot\\phi\\cos\\theta)^2 - Mg\\ell\\cos\\theta}$$

## (2) 保存量と有効ポテンシャル

**3つの保存量**

(a) $L$ は $\\phi$ を含まない（軸対称）→ $p_\\phi$ 保存：
$$p_\\phi = \\frac{\\partial L}{\\partial \\dot\\phi} = I\\dot\\phi\\sin^2\\theta + I_3(\\dot\\psi + \\dot\\phi\\cos\\theta)\\cos\\theta = \\mathrm{const}$$

(b) $L$ は $\\psi$ を含まない（対称コマ）→ $p_\\psi$ 保存（自転角運動量）：
$$p_\\psi = I_3(\\dot\\psi + \\dot\\phi\\cos\\theta) = I_3 \\omega_{z'} = \\mathrm{const}$$

(c) 時間並進対称 → エネルギー $E = T + V$ 保存。

**有効ポテンシャル**

$p_\\psi = $ 一定から $\\dot\\psi + \\dot\\phi\\cos\\theta = p_\\psi/I_3 \\equiv \\omega_3$。

$p_\\phi$ から $\\dot\\phi$ を解く：
$$\\dot\\phi = \\frac{p_\\phi - p_\\psi\\cos\\theta}{I\\sin^2\\theta}$$

これらを $E$ に代入し、$\\dot\\theta$ 以外の項をまとめる：

$$E = \\frac{1}{2}I\\dot\\theta^2 + V_{\\mathrm{eff}}(\\theta)$$

$$\\boxed{V_{\\mathrm{eff}}(\\theta) = \\frac{(p_\\phi - p_\\psi\\cos\\theta)^2}{2I\\sin^2\\theta} + Mg\\ell\\cos\\theta + \\frac{p_\\psi^2}{2I_3}}$$

## (3) 定常歳差の条件

**$\\theta = \\theta_0$ 一定の条件**：$\\dot\\theta = 0$ かつ $dV_{\\mathrm{eff}}/d\\theta = 0$。

$dV_{\\mathrm{eff}}/d\\theta$ を計算（$\\theta_0$ で）：

$$\\frac{dV_{\\mathrm{eff}}}{d\\theta} = \\frac{(p_\\phi - p_\\psi\\cos\\theta)\\cdot p_\\psi\\sin\\theta}{I\\sin^2\\theta} - \\frac{(p_\\phi-p_\\psi\\cos\\theta)^2 \\cos\\theta}{I\\sin^3\\theta} - Mg\\ell\\sin\\theta$$

$\\dot\\phi = (p_\\phi - p_\\psi\\cos\\theta)/(I\\sin^2\\theta)$ を使って整理：

$$I\\dot\\phi^2\\cos\\theta_0 - p_\\psi\\dot\\phi + Mg\\ell = 0$$

$\\dot\\phi$ について解く（2次方程式）：

$$\\boxed{\\dot\\phi = \\frac{p_\\psi \\pm \\sqrt{p_\\psi^2 - 4IMg\\ell\\cos\\theta_0}}{2I\\cos\\theta_0}}$$

**実数解の条件**：判別式 $\\geq 0$
$$p_\\psi^2 \\geq 4IMg\\ell\\cos\\theta_0 \\Leftrightarrow \\omega_3 \\geq \\frac{2\\sqrt{IMg\\ell\\cos\\theta_0}}{I_3}$$

**速い歳差・遅い歳差**

$+$ 解：速い歳差（$\\dot\\phi \\sim p_\\psi/(I\\cos\\theta_0)$）
$-$ 解：遅い歳差（$\\dot\\phi \\sim Mg\\ell/p_\\psi$）

ジャイロ近似（$\\omega_3$ 大）では：

$$\\dot\\phi_{\\mathrm{slow}} \\simeq \\frac{Mg\\ell}{I_3 \\omega_3}$$

これは「重力トルク÷スピン角運動量」の標準的歳差公式。

**ポイント**：
- 対称コマは $\\phi, \\psi$ が循環座標、$\\theta$ のみが本質的自由度に帰着
- 有効ポテンシャル法で 1 次元問題化
- 自転（$\\omega_3$）が遅いと歳差が成り立たない（コマが倒れる）
- 歳差以外に章動（$\\theta$ の小振動）も存在

**応用**：
- 地球の歳差運動（春分点歳差、約 26000 年周期）
- コマ・ジャイロスコープの安定化
- NMR/MRI のラーモア歳差
- ジャイロコンパス`,
  },

  // ===== 東北大学 2022年度 =====
  {
    id: "tohoku-2022-phys-1",
    universitySlug: "tohoku",
    year: 2022,
    subject: "物理学",
    problemNumber: 1,
    title: "クラウジウス・クラペイロン式と相転移",
    field: "thermodynamics",
    difficulty: "standard",
    tags: ["相転移", "クラウジウス・クラペイロン", "蒸気圧", "化学ポテンシャル"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2022年度 物理学 問1

## 問題の設定
ある純物質が温度 $T$、圧力 $P$ で液相と気相が共存している。共存条件は両相の化学ポテンシャル $\\mu_l(T,P) = \\mu_g(T,P)$ で与えられる。共存線 $P = P(T)$ に沿って $T$ を微小変化させたときの圧力変化を考える。

## 問われている内容
(1) 共存線の傾き $dP/dT$ を、各相の比体積 $v_l, v_g$ とモル蒸発潜熱 $L$ で表せ（クラウジウス・クラペイロン式）。

(2) 気相を理想気体（$v_g = RT/P$）、液相の体積を無視（$v_g \\gg v_l$）、潜熱 $L$ を一定とみなす近似のもとで $P(T)$ の表式を導け。

(3) (2) の表式から、外圧 $P_0$ における沸点 $T_b$ と、別の外圧 $P_1$ での沸点 $T_b'$ の関係を示せ。富士山頂（$P \\sim 0.6$ atm）で水の沸点が下がる現象を、$L = 40$ kJ/mol で見積もれ。`,
    solution: `## (1) クラウジウス・クラペイロン式

**考え方**：共存線上で $\\mu_l = \\mu_g$ が常に成立 → 全微分の差が 0。

**化学ポテンシャルの全微分**

ギブズ・デュエムから 1 mol あたり $d\\mu = -s\\,dT + v\\,dP$（$s$ はモルエントロピー）。

共存線に沿って $d\\mu_l = d\\mu_g$：
$$-s_l\\,dT + v_l\\,dP = -s_g\\,dT + v_g\\,dP$$

$dP/dT$ について解く：
$$\\frac{dP}{dT} = \\frac{s_g - s_l}{v_g - v_l}$$

**潜熱との関係**：等温・等圧の相転移で $\\Delta s = (s_g - s_l) = L/T$。

$$\\boxed{\\frac{dP}{dT} = \\frac{L}{T(v_g - v_l)}}$$

これがクラウジウス・クラペイロン式。

## (2) 蒸気圧曲線

**近似**：$v_g \\gg v_l$、$v_g = RT/P$、$L$ 一定：

$$\\frac{dP}{dT} = \\frac{L}{T \\cdot RT/P} = \\frac{LP}{RT^2}$$

**変数分離**
$$\\frac{dP}{P} = \\frac{L}{R}\\frac{dT}{T^2}$$

積分：
$$\\ln P = -\\frac{L}{RT} + C$$

積分定数を $T = T_0$ で $P = P_0$ となるよう決めると：

$$\\boxed{P(T) = P_0 \\exp\\!\\left[\\frac{L}{R}\\!\\left(\\frac{1}{T_0} - \\frac{1}{T}\\right)\\right]}$$

これは「アレニウス型」の蒸気圧式（クラウジウス・クラペイロン積分形）。

## (3) 高度差での沸点低下

**沸点の関係**

外圧 $P_0$ → 沸点 $T_b$、外圧 $P_1$ → 沸点 $T_b'$ とすると (2) から：

$$\\ln\\frac{P_1}{P_0} = \\frac{L}{R}\\!\\left(\\frac{1}{T_b} - \\frac{1}{T_b'}\\right)$$

$$\\boxed{\\frac{1}{T_b'} = \\frac{1}{T_b} - \\frac{R}{L}\\ln\\frac{P_1}{P_0}}$$

**富士山頂での見積もり**

数値：$P_0 = 1$ atm、$P_1 = 0.6$ atm、$L = 40\\,000$ J/mol、$R = 8.31$ J/(mol·K)、$T_b = 373$ K。

$$\\ln(0.6) \\approx -0.511$$

$$\\frac{R}{L}\\ln\\frac{P_1}{P_0} = \\frac{8.31}{40000}\\times(-0.511) \\approx -1.06\\times 10^{-4}\\,\\mathrm{K^{-1}}$$

$$\\frac{1}{T_b'} = \\frac{1}{373} + 1.06\\times 10^{-4} = 2.681\\times 10^{-3} + 1.06\\times 10^{-4} = 2.787\\times 10^{-3}$$

$$T_b' \\approx 359\\,\\mathrm{K} = 86\\,°\\mathrm{C}$$

実測（富士山頂）も約 87°C で一致。

**ポイント**：
- 共存条件 $\\mu_l = \\mu_g$ + ギブズ・デュエム = クラウジウス・クラペイロン
- 第2法則と密接：$\\Delta s = L/T$ がエントロピー変化
- 蒸気圧の指数的温度依存性 → 高地で沸点が大きく下がる
- $L$ 一定の仮定は狭い温度範囲では妥当

**応用**：
- 高山での沸点低下（料理、飛行機の気圧調整）
- 三重点・臨界点周辺の相図
- 圧力鍋（高圧で沸点上昇 → 高温調理）
- 雪山での雪の融解（融解曲線の傾きが負）`,
  },

  // ===== 東北大学 2021年度 =====
  {
    id: "tohoku-2021-phys-1",
    universitySlug: "tohoku",
    year: 2021,
    subject: "物理学",
    problemNumber: 1,
    title: "1次元グリーン関数",
    field: "math",
    difficulty: "standard",
    tags: ["グリーン関数", "微分方程式", "デルタ関数", "境界値問題"],
    isFree: false,
    statement: `**対応問題**: 東北大学 2021年度 物理学 問1

## 問題の設定
1 次元の常微分方程式
$$\\left(-\\frac{d^2}{dx^2} + k^2\\right)u(x) = f(x), \\quad k > 0$$
を全実数 $x \\in \\mathbb R$ で解く。$|x|\\to\\infty$ で $u\\to 0$ という境界条件を課す。グリーン関数 $G(x,x')$ は
$$\\left(-\\frac{d^2}{dx^2} + k^2\\right)G(x,x') = \\delta(x - x')$$
と境界条件 $G\\to 0$（$|x|\\to\\infty$）で定義される。

## 問われている内容
(1) $x \\ne x'$ における $G(x,x')$ の一般解を求めよ。

(2) $x = x'$ での連続条件と $G'$ の不連続条件（飛び）を導き、$G(x,x')$ を決定せよ。

(3) $f(x) = \\delta(x)$（点源）に対する解 $u(x)$ を求めよ。また $f(x) = e^{-|x|}$ に対する解を、グリーン関数の畳み込みで形式的に書け。`,
    solution: `## (1) $x \\ne x'$ での一般解

**考え方**：右辺がデルタ関数なので、$x \\ne x'$ では同次方程式 $-G'' + k^2 G = 0$。

特性方程式 $-\\lambda^2 + k^2 = 0$ → $\\lambda = \\pm k$。

一般解：
$$G(x, x') = A_\\pm e^{kx} + B_\\pm e^{-kx}$$

境界条件 $G \\to 0$（$|x|\\to\\infty$）で：

**$x > x'$**：$x \\to\\infty$ で $0$ → $A_+ = 0$
$$G_+(x, x') = B_+ e^{-kx}$$

**$x < x'$**：$x \\to -\\infty$ で $0$ → $B_- = 0$
$$G_-(x, x') = A_- e^{kx}$$

## (2) 飛び条件と決定

**連続条件**（$x = x'$ で $G$ が連続）：
$$B_+ e^{-kx'} = A_- e^{kx'} \\quad\\cdots (\\ast)$$

**$G'$ の飛び条件**

$\\delta(x-x')$ を $-G'' + k^2 G$ から取り出すには $G''$ が $\\delta$ を含む必要がある → $G'$ は階段関数のようなジャンプ。

両辺を $x' - \\epsilon$ から $x' + \\epsilon$ まで積分：
$$-\\left[G'\\right]_{x'-\\epsilon}^{x'+\\epsilon} + k^2 \\int_{x'-\\epsilon}^{x'+\\epsilon} G\\,dx = 1$$

$\\epsilon \\to 0$ で連続な部分は 0 になり：
$$\\boxed{G'(x'^+, x') - G'(x'^-, x') = -1}$$

**飛び条件の代入**

$G_+'(x'^+) = -kB_+ e^{-kx'}$、$G_-'(x'^-) = kA_- e^{kx'}$。

$$-kB_+ e^{-kx'} - kA_- e^{kx'} = -1$$
$$B_+ e^{-kx'} + A_- e^{kx'} = \\frac{1}{k} \\quad\\cdots (\\ast\\ast)$$

**$(\\ast)$ と $(\\ast\\ast)$ を解く**

$B_+ e^{-kx'} = A_- e^{kx'}$ を $(\\ast\\ast)$ に代入：
$$2A_- e^{kx'} = \\frac{1}{k} \\Rightarrow A_- = \\frac{1}{2k}e^{-kx'}, \\quad B_+ = \\frac{1}{2k}e^{kx'}$$

**最終形**

$$\\boxed{G(x, x') = \\frac{1}{2k}e^{-k|x-x'|}}$$

両ケース（$x > x'$ と $x < x'$）を統一して書ける美しい形。

## (3) 解の構成

**$f(x) = \\delta(x)$**

$$u(x) = \\int G(x, x')\\delta(x')\\,dx' = G(x, 0) = \\frac{1}{2k}e^{-k|x|}$$

$$\\boxed{u(x) = \\frac{e^{-k|x|}}{2k}}$$

**$f(x) = e^{-|x|}$（畳み込み）**

$$u(x) = \\int_{-\\infty}^\\infty G(x, x')f(x')\\,dx' = \\frac{1}{2k}\\int_{-\\infty}^\\infty e^{-k|x-x'|}e^{-|x'|}\\,dx'$$

具体的に積分すると（$k \\ne 1$ のとき）：
$$u(x) = \\frac{1}{k^2 - 1}\\!\\left[e^{-|x|} - \\frac{e^{-k|x|}}{k}\\right]$$

**ポイント**：
- グリーン関数 = 「点源応答」
- 一般の解は重ね合わせ（積分）で得られる：$u(x) = \\int G(x,x')f(x')\\,dx'$
- 連続条件 + 飛び条件で係数が一意に決まる
- 境界条件（無限遠で 0）が指数減衰解の選択を強制
- $-d^2/dx^2 + k^2$ の Yukawa 型グリーン関数

**応用**：
- 湯川型ポテンシャル（核力の中間子交換、3 次元版は $e^{-kr}/(4\\pi r)$）
- 静電遮蔽（Debye 遮蔽）
- 量子力学の散乱問題（Lippmann-Schwinger 方程式）
- 拡散方程式・熱伝導方程式の点源応答`,
  },

  // ===== 大阪大学 2023年度 =====
  {
    id: "osaka-2023-phys-1",
    universitySlug: "osaka",
    year: 2023,
    subject: "物理学",
    problemNumber: 1,
    title: "ラザフォード散乱と微分散乱断面積",
    field: "mechanics",
    difficulty: "standard",
    tags: ["ラザフォード散乱", "クーロン散乱", "微分断面積", "中心力"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2023年度 物理学 問1

## 問題の設定
質量 $m$、電荷 $+ze$ の入射粒子が、原点に固定された電荷 $+Ze$ の標的核に向かって速度 $v_0$（無限遠）で入射する。粒子はクーロン斥力ポテンシャル
$$U(r) = \\frac{kq_1 q_2}{r}, \\quad k = \\frac{1}{4\\pi\\varepsilon_0}, \\quad q_1 q_2 = zZe^2$$
を受けて散乱される。インパクトパラメータ（衝突径数）を $b$ と書く。

## 問われている内容
(1) エネルギー保存と角運動量保存を使い、散乱角 $\\theta$ とインパクトパラメータ $b$ の関係 $b = b(\\theta)$ を導け。

(2) 微分散乱断面積 $d\\sigma/d\\Omega$ を求めよ（ラザフォードの公式）。

(3) 全散乱断面積 $\\sigma_{\\mathrm{tot}} = \\int d\\sigma/d\\Omega\\,d\\Omega$ が発散する理由を物理的に説明せよ。`,
    solution: `## (1) インパクトパラメータと散乱角

**保存量**

無限遠での運動エネルギー：$E = \\frac{1}{2}mv_0^2$
角運動量：$L = mv_0 b$

**軌道方程式の解**

クーロンポテンシャルでの軌道は離心率 $e$ の双曲線：
$$r(\\phi) = \\frac{p}{1 + e\\cos\\phi}, \\quad p = \\frac{L^2}{m\\alpha}, \\quad \\alpha = kzZe^2$$

離心率：
$$e = \\sqrt{1 + \\frac{2EL^2}{m\\alpha^2}} = \\sqrt{1 + \\left(\\frac{mv_0^2 b}{\\alpha}\\right)^{\\!2}}$$

**散乱角の幾何**

入射と散乱の漸近線の間の角度 = $\\pi - 2\\phi_\\infty$、ここで $\\phi_\\infty$ は漸近角（$r\\to\\infty$ で $1 + e\\cos\\phi_\\infty = 0 \\Rightarrow \\cos\\phi_\\infty = -1/e$）。

散乱角 $\\theta$ との関係：
$$\\theta = \\pi - 2\\phi_\\infty \\Rightarrow \\sin(\\theta/2) = 1/e$$

これから：
$$\\cot(\\theta/2) = \\sqrt{e^2 - 1} = \\frac{mv_0^2 b}{\\alpha}$$

$$\\boxed{b(\\theta) = \\frac{\\alpha}{mv_0^2}\\cot\\!\\left(\\frac{\\theta}{2}\\right) = \\frac{kzZe^2}{mv_0^2}\\cot\\!\\left(\\frac{\\theta}{2}\\right)}$$

## (2) ラザフォードの公式

**微分散乱断面積の定義**

軸対称散乱では：
$$\\frac{d\\sigma}{d\\Omega} = \\frac{b}{\\sin\\theta}\\left|\\frac{db}{d\\theta}\\right|$$

**$db/d\\theta$**

$$\\frac{db}{d\\theta} = -\\frac{\\alpha}{2mv_0^2}\\frac{1}{\\sin^2(\\theta/2)}$$

**断面積**

$\\sin\\theta = 2\\sin(\\theta/2)\\cos(\\theta/2)$ を使って：

$$\\frac{d\\sigma}{d\\Omega} = \\frac{b\\cdot|db/d\\theta|}{\\sin\\theta} = \\frac{1}{4}\\!\\left(\\frac{\\alpha}{mv_0^2}\\right)^{\\!2}\\frac{1}{\\sin^4(\\theta/2)}$$

$E = \\frac{1}{2}mv_0^2$ で書き直すと：

$$\\boxed{\\frac{d\\sigma}{d\\Omega} = \\!\\left(\\frac{\\alpha}{4E}\\right)^{\\!2}\\frac{1}{\\sin^4(\\theta/2)} = \\!\\left(\\frac{kzZe^2}{4E}\\right)^{\\!2}\\frac{1}{\\sin^4(\\theta/2)}}$$

これがラザフォードの公式。

## (3) 全断面積の発散

$$\\sigma_{\\mathrm{tot}} = \\int_0^\\pi\\frac{d\\sigma}{d\\Omega}\\,2\\pi\\sin\\theta\\,d\\theta \\propto \\int_0^\\pi \\frac{\\sin\\theta}{\\sin^4(\\theta/2)}\\,d\\theta$$

$\\theta\\to 0$ で $\\sin(\\theta/2) \\sim \\theta/2$、$\\sin\\theta \\sim \\theta$ なので被積分関数 $\\sim 1/\\theta^3$ → 発散。

**物理的意味**：
- $\\theta\\to 0$ は「ほとんど散乱されない」 → これは大きな $b$（遠方通過）
- クーロン力は $1/r^2$ で**長距離力**、無限遠まで効く → どんなに遠くからでもわずかに散乱
- 全断面積無限大 = 「すべての入射粒子がいくらか散乱される」

これを回避するには：
- 標的核を取り巻く電子による**遮蔽**（実在の原子では）→ 有効ポテンシャルが指数的に減衰し、断面積が有限化
- 短距離力（核力など、$e^{-r/r_0}/r$）では発散しない

**ポイント**：
- ラザフォードは1911年にこの公式と実験から **原子核の存在** を発見
- 公式は古典でも量子（Born 近似）でも同じ形（クーロンポテンシャルの特殊性）
- $1/\\sin^4(\\theta/2)$ → 大角度散乱は稀（後方散乱から原子核の小ささを推定）
- 入射エネルギー $E$ を上げると小角散乱が支配的に

**応用**：
- ラザフォード後方散乱分光（RBS、薄膜分析）
- イオン注入の散乱角分布
- 高エネルギー散乱実験（QCD のジェット形成）`,
  },

  // ===== 大阪大学 2022年度 =====
  {
    id: "osaka-2022-phys-1",
    universitySlug: "osaka",
    year: 2022,
    subject: "物理学",
    problemNumber: 1,
    title: "Larmor 公式と荷電粒子の輻射",
    field: "electromagnetism",
    difficulty: "advanced",
    tags: ["輻射", "Larmor", "ポインティングベクトル", "加速度"],
    isFree: false,
    statement: `**対応問題**: 大阪大学 2022年度 物理学 問1

## 問題の設定
原点近傍で運動する電荷 $q$ の非相対論的な加速度運動を考える（$|\\vec v| \\ll c$）。距離 $r$（$\\gg$ 粒子の運動領域）の遠方場では、Liénard-Wiechert ポテンシャルから加速度依存の電磁場が
$$\\vec E_{\\mathrm{rad}}(\\vec r, t) = \\frac{q}{4\\pi\\varepsilon_0 c^2 r}\\,[\\hat n\\times(\\hat n\\times\\dot{\\vec v})]_{\\mathrm{ret}}$$
と求まる（$\\hat n = \\vec r/r$、$[\\,]_{\\mathrm{ret}}$ は遅延時刻 $t' = t - r/c$ で評価）。磁場は $\\vec B_{\\mathrm{rad}} = \\hat n\\times\\vec E_{\\mathrm{rad}}/c$。

## 問われている内容
(1) Poynting ベクトル $\\vec S = \\vec E_{\\mathrm{rad}}\\times\\vec B_{\\mathrm{rad}}/\\mu_0$ の大きさを、加速度 $\\dot{\\vec v}$ と $\\hat n$ のなす角 $\\theta$ で表せ。

(2) 全立体角にわたる輻射出力 $P = \\oint \\vec S\\cdot d\\vec A$ を求めよ（Larmor の公式）。

(3) 円運動 $\\vec r(t) = R(\\cos\\omega t, \\sin\\omega t, 0)$（角振動数 $\\omega$、半径 $R$）の荷電粒子の輻射出力を求め、シンクロトロン輻射との関係を述べよ。`,
    solution: `## (1) Poynting ベクトル

**加速度成分**

$\\hat n\\times(\\hat n\\times\\dot{\\vec v}) = \\hat n(\\hat n\\cdot\\dot{\\vec v}) - \\dot{\\vec v}$。
大きさは $|\\dot{\\vec v}|\\sin\\theta$（$\\theta$ は $\\hat n$ と $\\dot{\\vec v}$ のなす角）。

**$|\\vec E_{\\mathrm{rad}}|$**
$$|\\vec E_{\\mathrm{rad}}| = \\frac{q|\\dot{\\vec v}|\\sin\\theta}{4\\pi\\varepsilon_0 c^2 r}$$

**$|\\vec S|$**

$\\vec B_{\\mathrm{rad}} = \\hat n\\times\\vec E_{\\mathrm{rad}}/c$、$\\vec E_{\\mathrm{rad}} \\perp \\hat n$ なので $|\\vec B_{\\mathrm{rad}}| = |\\vec E_{\\mathrm{rad}}|/c$。

$$|\\vec S| = \\frac{|\\vec E|^2}{\\mu_0 c} = \\frac{|\\vec E|^2 c\\varepsilon_0}{1} = \\varepsilon_0 c|\\vec E|^2$$

代入：

$$\\boxed{|\\vec S(\\theta)| = \\frac{q^2 |\\dot{\\vec v}|^2 \\sin^2\\theta}{16\\pi^2\\varepsilon_0 c^3 r^2}}$$

**輻射パターン**：$\\sin^2\\theta$ → 加速度方向に垂直方向（$\\theta = \\pi/2$）で最大、加速度方向（$\\theta = 0, \\pi$）で 0。ドーナツ型の指向性。

## (2) Larmor の公式

**全出力**

$dA = r^2 d\\Omega = r^2\\sin\\theta\\,d\\theta\\,d\\phi$。

$$P = \\int|\\vec S|r^2\\,d\\Omega = \\frac{q^2|\\dot{\\vec v}|^2}{16\\pi^2\\varepsilon_0 c^3}\\int_0^{2\\pi}d\\phi\\int_0^\\pi\\sin^3\\theta\\,d\\theta$$

積分：$\\int_0^\\pi \\sin^3\\theta\\,d\\theta = 4/3$、$\\int d\\phi = 2\\pi$ → 全体係数 $8\\pi/3$。

$$P = \\frac{q^2|\\dot{\\vec v}|^2}{16\\pi^2\\varepsilon_0 c^3}\\cdot\\frac{8\\pi}{3}$$

$$\\boxed{P = \\frac{q^2|\\dot{\\vec v}|^2}{6\\pi\\varepsilon_0 c^3}}$$

これが Larmor の公式。

**ポイント**：
- 出力 $\\propto |\\dot{\\vec v}|^2$ → 加速度の 2 乗に比例
- $1/c^3$ → 非常に小さい（光速の高次効果）
- 等速運動（$\\dot{\\vec v} = 0$）では輻射しない（これは古典電磁気の基本要請）

## (3) 円運動と輻射

**加速度**：$|\\dot{\\vec v}| = R\\omega^2$（向心加速度）。

**輻射出力**
$$P = \\frac{q^2 R^2\\omega^4}{6\\pi\\varepsilon_0 c^3}$$

**$v$ で表す**：$v = R\\omega$ から $R\\omega^2 = v\\omega = v^2/R$：

$$\\boxed{P_{\\mathrm{circ}} = \\frac{q^2 v^4}{6\\pi\\varepsilon_0 c^3 R^2}}$$

**シンクロトロン輻射との関係**：
- 上記は非相対論。相対論的（$v \\to c$）拡張では Lorentz 因子 $\\gamma = 1/\\sqrt{1-v^2/c^2}$ が現れ：

$$P_{\\mathrm{sync}} = \\frac{q^2 c\\gamma^4\\beta^4}{6\\pi\\varepsilon_0 R^2}$$

$\\gamma$ の 4 乗で激増 → 高エネルギー電子加速器（シンクロトロン）では強烈な X 線輻射が発生。

**ポイント**：
- 加速されている荷電粒子は必ず輻射 = エネルギー損失
- 輻射パターンは加速度方向に依存（双極子放射のドーナツ型）
- 円形加速器は半径 $R$ を大きくしないと輻射損失が支配的（直線加速器が高エネルギー化に有利）
- 古典電磁気と特殊相対論の融合点

**応用**：
- シンクロトロン光源（X 線回折、SPring-8 等）
- パルサー磁気圏での電子輻射
- 制動輻射（Bremsstrahlung、X 線管）
- LEP 加速器の電子輻射損失（→ 円形加速器の物理的限界）`,
  },

  // ===== 大阪大学 2021年度 =====
  {
    id: "osaka-2021-phys-1",
    universitySlug: "osaka",
    year: 2021,
    subject: "物理学",
    problemNumber: 1,
    title: "変分法と水素原子の基底状態",
    field: "quantum",
    difficulty: "standard",
    tags: ["変分法", "水素原子", "試行関数", "基底状態"],
    isFree: false,
    statement: `**対応問題**: 大阪大学 2021年度 物理学 問1

## 問題の設定
水素原子（電子質量 $m$、電荷 $-e$、陽子は固定）のハミルトニアン：
$$\\hat H = -\\frac{\\hbar^2}{2m}\\nabla^2 - \\frac{e^2}{4\\pi\\varepsilon_0 r} = -\\frac{\\hbar^2}{2m}\\nabla^2 - \\frac{ke^2}{r}, \\quad k = \\frac{1}{4\\pi\\varepsilon_0}$$

変分法で基底状態エネルギーを推定する。試行関数として
$$\\psi_\\alpha(r) = \\!\\left(\\frac{\\alpha^3}{\\pi}\\right)^{1/2} e^{-\\alpha r}$$
（$\\alpha > 0$ が変分パラメータ）を取る。これは規格化済み（$\\int|\\psi_\\alpha|^2 d^3r = 1$）。

## 問われている内容
(1) 試行関数のエネルギー期待値 $E(\\alpha) = \\langle\\psi_\\alpha|\\hat H|\\psi_\\alpha\\rangle$ を計算せよ。

(2) $E(\\alpha)$ を最小化する $\\alpha = \\alpha_*$ と最小値 $E_{\\min}$ を求めよ。

(3) この $\\alpha_*$ と $E_{\\min}$ がそれぞれ何に対応するか（ボーア半径と基底エネルギー）を確認し、変分法の基底状態に対する精度を述べよ。`,
    solution: `## (1) エネルギー期待値

**運動エネルギー部分**

$\\langle T\\rangle = -\\frac{\\hbar^2}{2m}\\int\\psi_\\alpha^*\\nabla^2\\psi_\\alpha\\,d^3r$

球対称関数 $\\psi(r)$ の Laplacian：$\\nabla^2 \\psi = (1/r)d^2(r\\psi)/dr^2$

$r\\psi_\\alpha = (\\alpha^3/\\pi)^{1/2}\\,re^{-\\alpha r}$、$d^2(re^{-\\alpha r})/dr^2 = (\\alpha^2 r - 2\\alpha)e^{-\\alpha r}$

$\\nabla^2\\psi_\\alpha = (\\alpha^3/\\pi)^{1/2}(\\alpha^2 - 2\\alpha/r)e^{-\\alpha r}$

積分（$\\int_0^\\infty r^n e^{-2\\alpha r}\\,dr = n!/(2\\alpha)^{n+1}$ を使う）：
$$\\langle T\\rangle = \\frac{\\hbar^2 \\alpha^2}{2m}$$

（標準的結果。直接計算で確認可）

**ポテンシャル部分**

$$\\langle V\\rangle = -ke^2\\int|\\psi_\\alpha|^2\\frac{1}{r}\\,d^3r = -\\frac{ke^2 \\alpha^3}{\\pi}\\cdot 4\\pi\\int_0^\\infty re^{-2\\alpha r}\\,dr$$

$\\int_0^\\infty re^{-2\\alpha r}\\,dr = 1/(2\\alpha)^2 = 1/(4\\alpha^2)$ を代入：
$$\\langle V\\rangle = -\\frac{4ke^2\\alpha^3}{4\\alpha^2} = -ke^2\\alpha$$

**合計**

$$\\boxed{E(\\alpha) = \\frac{\\hbar^2\\alpha^2}{2m} - ke^2\\alpha}$$

## (2) 最小化

$$\\frac{dE}{d\\alpha} = \\frac{\\hbar^2\\alpha}{m} - ke^2 = 0$$

$$\\boxed{\\alpha_* = \\frac{mke^2}{\\hbar^2}}$$

最小値：
$$E_{\\min} = \\frac{\\hbar^2}{2m}\\!\\left(\\frac{mke^2}{\\hbar^2}\\right)^{\\!2} - ke^2\\cdot\\frac{mke^2}{\\hbar^2} = \\frac{m(ke^2)^2}{2\\hbar^2} - \\frac{m(ke^2)^2}{\\hbar^2}$$

$$\\boxed{E_{\\min} = -\\frac{m(ke^2)^2}{2\\hbar^2}}$$

## (3) ボーア半径と基底エネルギーとの一致

**ボーア半径** $a_0 = \\hbar^2/(mke^2)$ から $\\alpha_* = 1/a_0$ → 試行関数は $\\psi \\propto e^{-r/a_0}$ となり、ボーア半径で減衰する波動関数。

**基底エネルギー**
$$E_{\\min} = -\\frac{m(ke^2)^2}{2\\hbar^2} = -\\frac{ke^2}{2a_0} = -13.6\\,\\mathrm{eV}$$

これはまさに水素原子の **真の基底エネルギー** $E_1 = -13.6$ eV。

**変分法の精度**

水素原子の真の基底状態波動関数も $\\psi_{1s}(r) = (1/\\sqrt{\\pi a_0^3})e^{-r/a_0}$ で、試行関数と完全に一致 → 変分法は **厳密解** を与える。

これは試行関数の選び方が運良く（あるいは賢く）真の解を含んでいたから。一般には真の基底状態に対する上限を与える近似法。

**変分原理の不等式**：
$$E_{\\min}^{\\mathrm{trial}}(\\alpha_*) \\geq E_0^{\\mathrm{true}}$$

等号が成立するのは試行関数空間が真の固有状態を含むとき。

**ポイント**：
- 変分法 = 「賢い試行関数」を選んで基底エネルギーの上限を得る
- 試行関数のパラメータ調整で精度向上
- 真の基底状態を含む試行関数空間なら厳密解
- 励起状態には対称性（直交性条件）の追加が必要

**応用**：
- ヘリウム原子の基底エネルギー（電子相関を試行関数に取り込む）
- 分子軌道法（LCAO 近似）
- 量子化学計算（Hartree-Fock 法、変分原理が基礎）
- 多体系の波動関数 ansatz（Slater 行列式、Jastrow 因子等）`,
  },
  // ===== 2025年度 追加分（B案：全大学×全科目を充足） =====
  {
    id: "todai-2025-phys-4",
    universitySlug: "todai",
    year: 2025,
    subject: "物理学",
    problemNumber: 4,
    title: "2準位系の統計力学とショットキー異常",
    field: "statistical",
    difficulty: "advanced",
    tags: ["2準位系", "分配関数", "ショットキー異常"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2025年度 物理学 問4

## 問題の設定
エネルギー $0$ と $\\varepsilon$ の2つの状態のみをとる粒子（2準位系）を考える。$N$ 個の独立な粒子がある絶対温度 $T$ で正準集団に従う。Boltzmann 定数を $k_B$ とする。

## 問われている内容
(1) 1粒子の分配関数 $Z_1(T)$ を求めよ。
(2) 系全体の内部エネルギー $U(T)$ を求めよ。
(3) 定積比熱 $C_V(T)$ を $x = \\varepsilon/(k_B T)$ で表し、極限 $T \\to 0$ および $T \\to \\infty$ での振る舞いを論ぜよ。
(4) $C_V(T)$ は有限温度で極大値をもつ（Schottky 異常）。極大を与える $x$ の満たす方程式を書き下し、数値を用いずに極大の存在を示せ。`,
    solution: `## (1) 1粒子分配関数

$$Z_1 = 1 + e^{-\\varepsilon/(k_B T)} = 1 + e^{-x}$$

ここで $x \\equiv \\varepsilon/(k_B T)$。独立粒子なので全系の分配関数は $Z = Z_1^N$。

## (2) 内部エネルギー

$U = -\\partial(\\ln Z)/\\partial \\beta$（$\\beta = 1/(k_B T)$）より：

$$U = N \\cdot \\frac{\\varepsilon \\, e^{-x}}{1 + e^{-x}} = \\frac{N\\varepsilon}{e^{x} + 1}$$

**物理的意味**：Fermi-Dirac 分布と同じ形。高温で $U \\to N\\varepsilon/2$（両準位等確率）、低温で $U \\to 0$（基底状態）。

## (3) 比熱

$\\partial x/\\partial T = -x/T$ を使って：

$$C_V = \\frac{\\partial U}{\\partial T} = N k_B \\frac{x^2 e^{x}}{(e^{x}+1)^2}$$

**極限**：
- $T \\to 0$（$x \\to \\infty$）: $C_V \\sim N k_B x^2 e^{-x} \\to 0$（指数的抑制、エネルギーギャップがあるため）
- $T \\to \\infty$（$x \\to 0$）: $C_V \\sim N k_B x^2/4 \\to 0$（全エネルギー準位が埋まり変化余地なし）

## (4) ショットキー異常

$f(x) = x^2 e^{x}/(e^{x}+1)^2$ の極大条件 $df/dx = 0$。積の微分と $(e^x+1)^2$ で整理：

$$\\boxed{2(e^{x}+1) = x(e^{x}-1)} \\quad \\text{あるいは} \\quad \\tanh(x/2) = 2/x$$

両極限で $f \\to 0$ かつ $f > 0$ なので、連続関数として中間で極大をもつ（中間値の定理）。数値的には $x \\approx 2.40$、すなわち $k_B T_{\\max} \\approx 0.42 \\varepsilon$。

**物理的意味**：ギャップ $\\varepsilon$ 程度の温度で励起が活発化し、比熱がピーク。核スピン系・結晶場分裂準位・希薄磁性不純物で観測される典型現象。`,
  },
  {
    id: "todai-2025-math-2",
    universitySlug: "todai",
    year: 2025,
    subject: "数学",
    problemNumber: 2,
    title: "複素解析：留数定理による実定積分",
    field: "math",
    difficulty: "standard",
    tags: ["留数定理", "ジョルダンの補題", "有理関数積分"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2025年度 数学 問2

## 問われている内容
実積分
$$I = \\int_{-\\infty}^{\\infty} \\frac{\\cos(ax)}{x^2 + b^2}\\, dx \\quad (a, b > 0)$$
を求めたい。

(1) 複素関数 $f(z) = e^{iaz}/(z^2 + b^2)$ を、上半平面の半円経路（半径 $R$）上で積分することを考える。$R \\to \\infty$ で半円弧上の積分が $0$ に収束することを示せ（Jordan の補題）。
(2) 留数定理により $I$ を求めよ。
(3) $\\displaystyle\\int_{-\\infty}^{\\infty} \\frac{\\sin(ax)}{x^2 + b^2}\\, dx$ の値を、対称性のみから議論して答えよ。`,
    solution: `## (1) Jordan の補題

半円経路 $C_R: z = Re^{i\\theta}, \\theta \\in [0, \\pi]$ 上で $|e^{iaz}| = e^{-aR\\sin\\theta}$。$\\sin\\theta \\geq 0$ なので被積分関数の絶対値は抑えられる。

$$\\left|\\int_{C_R} \\frac{e^{iaz}}{z^2+b^2} dz\\right| \\leq \\int_0^\\pi \\frac{e^{-aR\\sin\\theta}}{R^2 - b^2} R\\, d\\theta$$

Jordan の不等式 $\\sin\\theta \\geq 2\\theta/\\pi$（$0 \\leq \\theta \\leq \\pi/2$）より $\\int_0^\\pi e^{-aR\\sin\\theta}d\\theta \\leq 2\\int_0^{\\pi/2} e^{-2aR\\theta/\\pi}d\\theta = \\pi(1-e^{-aR})/(aR)$。

結局 $R \\to \\infty$ で $\\pi/(aR) \\cdot R/(R^2-b^2) \\to 0$。

## (2) 留数計算

閉路 $[-R, R] \\cup C_R$ 内部の特異点は $z = ib$（単純極）のみ：

$$\\mathrm{Res}_{z=ib} f(z) = \\lim_{z \\to ib} (z-ib) \\cdot \\frac{e^{iaz}}{(z-ib)(z+ib)} = \\frac{e^{-ab}}{2ib}$$

留数定理：
$$\\oint f\\, dz = 2\\pi i \\cdot \\frac{e^{-ab}}{2ib} = \\frac{\\pi e^{-ab}}{b}$$

$R \\to \\infty$ の極限で半円部は消え、実軸上の積分が残る：

$$\\int_{-\\infty}^{\\infty} \\frac{e^{iax}}{x^2+b^2} dx = \\frac{\\pi e^{-ab}}{b}$$

実部をとり：

$$\\boxed{I = \\frac{\\pi}{b} e^{-ab}}$$

## (3) 対称性による議論

被積分関数 $\\sin(ax)/(x^2+b^2)$ は $x$ について奇関数（分子が奇、分母が偶）。対称区間 $(-\\infty, \\infty)$ での奇関数の積分は：

$$\\boxed{\\int_{-\\infty}^{\\infty} \\frac{\\sin(ax)}{x^2+b^2} dx = 0}$$

これは (2) の $e^{iax}$ 積分の虚部がゼロだったことと整合。`,
  },
  {
    id: "kyodai-2025-phys-3",
    universitySlug: "kyodai",
    year: 2025,
    subject: "物理学",
    problemNumber: 3,
    title: "中心力場のラグランジアン",
    field: "mechanics",
    difficulty: "advanced",
    tags: ["ラグランジアン", "中心力場", "有効ポテンシャル"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2025年度 物理学 問3

## 問題の設定
質量 $m$ の質点が、原点からの距離 $r$ のみに依存するポテンシャル $U(r)$ 中を運動する（中心力場）。2次元極座標 $(r, \\varphi)$ を用いる。

## 問われている内容
(1) ラグランジアン $L(r, \\dot{r}, \\dot{\\varphi})$ を書き下せ。
(2) $\\varphi$ が循環座標であることを示し、角運動量 $\\ell = mr^2\\dot{\\varphi}$ が保存量であることを導け。
(3) $\\varphi$ を消去し、$r$ に対する1次元運動として等価な**有効ポテンシャル** $U_{\\mathrm{eff}}(r)$ を求めよ。
(4) $U(r) = -k/r$ （$k > 0$）のとき、円軌道の半径 $r_0$ を $\\ell, m, k$ で表し、小振動の角振動数 $\\omega$ を求めよ。`,
    solution: `## (1) ラグランジアン

運動エネルギー：極座標で $v^2 = \\dot{r}^2 + r^2\\dot{\\varphi}^2$。

$$L = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\varphi}^2) - U(r)$$

## (2) 角運動量保存

$L$ が $\\varphi$ を陽に含まない $\\Rightarrow$ $\\varphi$ は循環座標。Euler-Lagrange 方程式：

$$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{\\varphi}} = \\frac{\\partial L}{\\partial \\varphi} = 0$$

よって $\\partial L/\\partial \\dot{\\varphi} = mr^2\\dot{\\varphi} \\equiv \\ell$ が保存。

## (3) 有効ポテンシャル

$\\dot{\\varphi} = \\ell/(mr^2)$ を全エネルギー $E = T + U$ に代入：

$$E = \\frac{1}{2}m\\dot{r}^2 + \\frac{\\ell^2}{2mr^2} + U(r)$$

右辺第2・3項を $U_{\\mathrm{eff}}$ と定義：

$$\\boxed{U_{\\mathrm{eff}}(r) = \\frac{\\ell^2}{2mr^2} + U(r)}$$

第1項は「遠心ポテンシャル」（角運動量が作る障壁）。

## (4) Kepler 問題の円軌道と小振動

$U = -k/r$ で $U_{\\mathrm{eff}} = \\ell^2/(2mr^2) - k/r$。極値条件 $dU_{\\mathrm{eff}}/dr = 0$：

$$-\\frac{\\ell^2}{mr^3} + \\frac{k}{r^2} = 0 \\quad \\Rightarrow \\quad \\boxed{r_0 = \\frac{\\ell^2}{mk}}$$

小振動の角振動数は $m\\omega^2 = d^2 U_{\\mathrm{eff}}/dr^2|_{r_0}$。

$$\\frac{d^2 U_{\\mathrm{eff}}}{dr^2} = \\frac{3\\ell^2}{mr^4} - \\frac{2k}{r^3}$$

$r_0$ を代入：$3\\ell^2/(mr_0^4) - 2k/r_0^3 = (k/r_0^3)(3 - 2) = k/r_0^3$。

$$\\boxed{\\omega = \\sqrt{\\frac{k}{m r_0^3}}}$$

これは Kepler の第3法則に等しい公転角振動数そのもの。Bertrand の定理により Kepler ポテンシャルでは半径振動と公転が同期し、閉じた楕円軌道になる。`,
  },
  {
    id: "kyodai-2025-phys-4",
    universitySlug: "kyodai",
    year: 2025,
    subject: "物理学",
    problemNumber: 4,
    title: "1次元無限井戸の量子力学",
    field: "quantum",
    difficulty: "standard",
    tags: ["無限井戸", "固有エネルギー", "期待値"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2025年度 物理学 問4

## 問題の設定
$0 \\leq x \\leq L$ の領域でポテンシャルが $0$、外部で $+\\infty$ の1次元無限井戸に、質量 $m$ の粒子が閉じ込められている。

## 問われている内容
(1) 時間独立 Schrödinger 方程式から規格化された固有関数 $\\psi_n(x)$ と固有エネルギー $E_n$ を導け。
(2) 基底状態における位置の期待値 $\\langle x \\rangle$ と $\\langle x^2 \\rangle$ を求めよ。
(3) 位置の不確定性 $\\Delta x = \\sqrt{\\langle x^2 \\rangle - \\langle x \\rangle^2}$ と、基底状態の運動量の不確定性 $\\Delta p = \\pi\\hbar/L$（既知）から、不確定性積 $\\Delta x \\Delta p$ を計算し、Heisenberg の不等式 $\\Delta x \\Delta p \\geq \\hbar/2$ と比較せよ。`,
    solution: `## (1) 固有関数と固有エネルギー

井戸内で $-\\hbar^2 \\psi''/(2m) = E\\psi$、境界条件 $\\psi(0) = \\psi(L) = 0$。解は $\\psi_n(x) = A\\sin(k_n x)$ で $k_n L = n\\pi$（$n = 1, 2, \\ldots$）。

規格化 $\\int_0^L |\\psi_n|^2 dx = 1$ から $A = \\sqrt{2/L}$：

$$\\boxed{\\psi_n(x) = \\sqrt{\\frac{2}{L}}\\sin\\frac{n\\pi x}{L}, \\quad E_n = \\frac{n^2\\pi^2\\hbar^2}{2mL^2}}$$

## (2) 基底状態の期待値（$n=1$）

対称性から $\\sin^2(\\pi x/L)$ は $x = L/2$ について対称なので：

$$\\langle x \\rangle = \\frac{L}{2}$$

$\\langle x^2 \\rangle$ の計算：$\\sin^2(\\pi x/L) = (1 - \\cos(2\\pi x/L))/2$ を使い、

$$\\langle x^2 \\rangle = \\frac{2}{L}\\int_0^L x^2 \\cdot \\frac{1 - \\cos(2\\pi x/L)}{2} dx = \\frac{1}{L}\\left[\\frac{L^3}{3} - I\\right]$$

部分積分2回で $I = \\int_0^L x^2\\cos(2\\pi x/L)dx = L^3/(2\\pi^2)$。

$$\\langle x^2 \\rangle = \\frac{L^2}{3} - \\frac{L^2}{2\\pi^2}$$

## (3) 不確定性積

$$\\Delta x^2 = \\langle x^2\\rangle - \\langle x\\rangle^2 = L^2\\left(\\frac{1}{3} - \\frac{1}{2\\pi^2} - \\frac{1}{4}\\right) = L^2\\left(\\frac{1}{12} - \\frac{1}{2\\pi^2}\\right)$$

$$\\Delta x = L\\sqrt{\\frac{1}{12} - \\frac{1}{2\\pi^2}} \\approx L \\cdot 0.1807$$

$\\Delta p = \\pi\\hbar/L$ と組み合わせて：

$$\\Delta x \\Delta p \\approx 0.1807\\pi \\hbar \\approx 0.568\\, \\hbar$$

Heisenberg の下限 $\\hbar/2 = 0.5\\hbar$ より大きく、不等式を満たす。等号成立は Gauss 波束のみ（基底状態は sin 型なのでわずかに上回る）。`,
  },
  {
    id: "kyodai-2025-math-2",
    universitySlug: "kyodai",
    year: 2025,
    subject: "数学",
    problemNumber: 2,
    title: "ベクトル解析：Stokes の定理",
    field: "math",
    difficulty: "standard",
    tags: ["Stokes の定理", "回転", "線積分"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2025年度 数学 問2

## 問題の設定
$\\mathbb{R}^3$ のベクトル場
$$\\vec{F}(x, y, z) = (-y, x, z)$$
を考える。

## 問われている内容
(1) $\\nabla \\times \\vec{F}$ を計算せよ。
(2) 曲線 $C$: $\\vec{r}(t) = (\\cos t, \\sin t, 0), \\ t \\in [0, 2\\pi]$ に沿う線積分 $\\oint_C \\vec{F} \\cdot d\\vec{r}$ を直接計算せよ。
(3) Stokes の定理を用い、$C$ を境界とする $z = 0$ 平面の単位円板上での面積分として同じ値を導き、一致することを確認せよ。`,
    solution: `## (1) 回転

$\\vec{F} = (P, Q, R) = (-y, x, z)$ より：

$$\\nabla \\times \\vec{F} = \\begin{vmatrix}\\vec{e}_x & \\vec{e}_y & \\vec{e}_z \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ -y & x & z\\end{vmatrix} = (\\partial_y z - \\partial_z x, \\partial_z(-y) - \\partial_x z, \\partial_x x - \\partial_y(-y)) = (0, 0, 2)$$

$$\\boxed{\\nabla \\times \\vec{F} = 2\\vec{e}_z}$$

## (2) 線積分の直接計算

$\\vec{r}(t) = (\\cos t, \\sin t, 0)$、$d\\vec{r}/dt = (-\\sin t, \\cos t, 0)$。曲線上で $\\vec{F} = (-\\sin t, \\cos t, 0)$。

$$\\vec{F} \\cdot d\\vec{r}/dt = \\sin^2 t + \\cos^2 t = 1$$

$$\\oint_C \\vec{F} \\cdot d\\vec{r} = \\int_0^{2\\pi} 1\\, dt = 2\\pi$$

## (3) Stokes 定理による確認

$C$ を境界とする曲面として $z=0$ の単位円板 $D$ をとる。法線 $\\vec{n} = \\vec{e}_z$（右手系で $C$ が反時計回りと整合）。

$$\\iint_D (\\nabla \\times \\vec{F}) \\cdot \\vec{n}\\, dS = \\iint_D 2\\, dS = 2 \\cdot \\pi \\cdot 1^2 = 2\\pi$$

線積分の結果 $2\\pi$ と完全に一致 ✅

**物理的意味**：$\\vec{F} = (-y, x, 0)$ の部分は $z$ 軸まわりの剛体回転流れ（角速度1）。その circulation は囲む面積 × 2 × 角速度 = $2\\pi$。`,
  },
  {
    id: "titech-2025-phys-3",
    universitySlug: "titech",
    year: 2025,
    subject: "物理学",
    problemNumber: 3,
    title: "平行平板コンデンサと誘電体",
    field: "electromagnetism",
    difficulty: "standard",
    tags: ["コンデンサ", "誘電体", "境界条件"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧東工大） 2025年度 物理学 問3

## 問題の設定
面積 $S$、間隔 $d$ の平行平板コンデンサに、比誘電率 $\\varepsilon_r$ の誘電体が厚さ $d/2$ だけ挿入されている（残り $d/2$ は真空）。極板間に電圧 $V$ をかける。真空の誘電率を $\\varepsilon_0$ とする。

## 問われている内容
(1) コンデンサの合成静電容量 $C$ を求めよ。
(2) 誘電体内部の電場 $E_1$ と真空部の電場 $E_2$ を $V, d, \\varepsilon_r$ で表せ。
(3) 蓄えられる静電エネルギー $U$ を $V$ と $C$ で表し、同じ極板に電圧 $V$ をかけた誘電体なしのコンデンサ $C_0 = \\varepsilon_0 S/d$ と比較してエネルギー比 $U/U_0$ を求めよ。`,
    solution: `## (1) 直列接続としての合成容量

誘電体部と真空部は直列：
- $C_1 = \\varepsilon_r \\varepsilon_0 S/(d/2) = 2\\varepsilon_r \\varepsilon_0 S/d$
- $C_2 = \\varepsilon_0 S/(d/2) = 2\\varepsilon_0 S/d$

直列合成：$1/C = 1/C_1 + 1/C_2 = (1 + 1/\\varepsilon_r) \\cdot d/(2\\varepsilon_0 S)$。

$$\\boxed{C = \\frac{2\\varepsilon_r}{\\varepsilon_r + 1} \\cdot \\frac{\\varepsilon_0 S}{d}}$$

## (2) 各部の電場

境界面で電束密度 $D$ が連続（境界に自由電荷なし）：$\\varepsilon_r \\varepsilon_0 E_1 = \\varepsilon_0 E_2$、よって $E_2 = \\varepsilon_r E_1$。

電圧条件 $V = E_1(d/2) + E_2(d/2) = (E_1 + E_2)d/2 = (1 + \\varepsilon_r) E_1 d/2$。

$$\\boxed{E_1 = \\frac{2V}{(1+\\varepsilon_r)d}, \\quad E_2 = \\frac{2\\varepsilon_r V}{(1+\\varepsilon_r)d}}$$

誘電体内の方が電場が小さい（分極が電場を弱める）。

## (3) エネルギー比

$U = CV^2/2$、$U_0 = C_0 V^2/2$ より：

$$\\frac{U}{U_0} = \\frac{C}{C_0} = \\boxed{\\frac{2\\varepsilon_r}{\\varepsilon_r + 1}}$$

$\\varepsilon_r = 1$ で $1$（同じ）、$\\varepsilon_r \\to \\infty$ で $2$（最大2倍）、物理的には誘電体が電場を弱めるが容量（蓄電能力）は増える。`,
  },
  {
    id: "titech-2025-phys-4",
    universitySlug: "titech",
    year: 2025,
    subject: "物理学",
    problemNumber: 4,
    title: "角運動量の交換関係と昇降演算子",
    field: "quantum",
    difficulty: "advanced",
    tags: ["角運動量", "交換関係", "昇降演算子"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧東工大） 2025年度 物理学 問4

## 問題の設定
量子力学の角運動量演算子 $\\hat{L}_x, \\hat{L}_y, \\hat{L}_z$ は交換関係 $[\\hat{L}_i, \\hat{L}_j] = i\\hbar \\varepsilon_{ijk}\\hat{L}_k$ を満たす。昇降演算子を $\\hat{L}_\\pm = \\hat{L}_x \\pm i\\hat{L}_y$ と定義する。

## 問われている内容
(1) $[\\hat{L}_z, \\hat{L}_\\pm]$ および $[\\hat{L}_+, \\hat{L}_-]$ を計算せよ。
(2) $|\\ell, m\\rangle$ を $\\hat{\\vec{L}}^2$ と $\\hat{L}_z$ の同時固有状態（固有値 $\\hbar^2\\ell(\\ell+1)$ と $\\hbar m$）とする。$\\hat{L}_+|\\ell, m\\rangle$ が $\\hat{L}_z$ の固有値 $\\hbar(m+1)$ の状態であることを示せ。
(3) $\\hat{L}_+|\\ell, m\\rangle = \\hbar C_+(\\ell, m)|\\ell, m+1\\rangle$ の係数 $C_+$ を決定せよ（位相は正の実数とする）。`,
    solution: `## (1) 交換関係

$[\\hat{L}_z, \\hat{L}_\\pm] = [\\hat{L}_z, \\hat{L}_x \\pm i\\hat{L}_y] = i\\hbar\\hat{L}_y \\pm i(-i\\hbar\\hat{L}_x) = \\pm\\hbar(\\hat{L}_x \\pm i\\hat{L}_y)$：

$$\\boxed{[\\hat{L}_z, \\hat{L}_\\pm] = \\pm\\hbar \\hat{L}_\\pm}$$

$[\\hat{L}_+, \\hat{L}_-] = [\\hat{L}_x + i\\hat{L}_y, \\hat{L}_x - i\\hat{L}_y] = -2i[\\hat{L}_x, \\hat{L}_y] = -2i \\cdot i\\hbar\\hat{L}_z$：

$$\\boxed{[\\hat{L}_+, \\hat{L}_-] = 2\\hbar \\hat{L}_z}$$

## (2) 上昇性

$[\\hat{L}_z, \\hat{L}_+] = \\hbar\\hat{L}_+$ より $\\hat{L}_z \\hat{L}_+ = \\hat{L}_+\\hat{L}_z + \\hbar\\hat{L}_+$。両辺を $|\\ell, m\\rangle$ に作用：

$$\\hat{L}_z(\\hat{L}_+|\\ell, m\\rangle) = (\\hat{L}_+\\hat{L}_z + \\hbar\\hat{L}_+)|\\ell, m\\rangle = (\\hbar m + \\hbar)(\\hat{L}_+|\\ell, m\\rangle)$$

よって $\\hat{L}_+|\\ell, m\\rangle$ は $\\hat{L}_z$ の固有値 $\\hbar(m+1)$ の状態。

## (3) 係数の決定

$\\hat{L}_+^\\dagger = \\hat{L}_-$ なので、ノルムは：

$$\\|\\hat{L}_+|\\ell, m\\rangle\\|^2 = \\langle \\ell, m|\\hat{L}_-\\hat{L}_+|\\ell, m\\rangle$$

恒等式 $\\hat{L}_-\\hat{L}_+ = \\hat{\\vec{L}}^2 - \\hat{L}_z^2 - \\hbar\\hat{L}_z$ を使う：

$$\\|\\hat{L}_+|\\ell, m\\rangle\\|^2 = \\hbar^2[\\ell(\\ell+1) - m^2 - m] = \\hbar^2(\\ell-m)(\\ell+m+1)$$

位相を正にとって：

$$\\boxed{C_+(\\ell, m) = \\sqrt{(\\ell-m)(\\ell+m+1)}}$$

**チェック**：$m = \\ell$ で $C_+ = 0$（上限）、$m = -\\ell - 1$ では現れないので自動的に OK。この階段構造から $m$ は $-\\ell$ から $\\ell$ まで $2\\ell+1$ 個の値をとる。`,
  },
  {
    id: "titech-2025-phys-5",
    universitySlug: "titech",
    year: 2025,
    subject: "物理学",
    problemNumber: 5,
    title: "オットーサイクルと熱効率",
    field: "thermodynamics",
    difficulty: "standard",
    tags: ["オットーサイクル", "熱効率", "断熱過程"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧東工大） 2025年度 物理学 問5

## 問題の設定
ガソリンエンジンのモデルであるオットーサイクルは、理想気体 $n$ モルによる以下の4過程からなる：
- A→B: 断熱圧縮（体積 $V_1 \\to V_2$、$V_1 > V_2$）
- B→C: 定積加熱（温度上昇、高温熱源から $Q_H$ を吸収）
- C→D: 断熱膨張（$V_2 \\to V_1$）
- D→A: 定積冷却（低温熱源へ $Q_L$ を放出）

気体の比熱比を $\\gamma$、圧縮比を $r = V_1/V_2$ とする。

## 問われている内容
(1) 各過程について、$P$-$V$ 図の概形を描け（解答では過程の方向と曲線の形の記述で可）。
(2) 吸熱・放熱量 $Q_H, Q_L$ を定積モル比熱 $C_V$ と温度で表せ。
(3) サイクルの熱効率 $\\eta = 1 - Q_L/Q_H$ を、圧縮比 $r$ と $\\gamma$ のみで表せ。
(4) $r = 10$、$\\gamma = 1.4$ のときの $\\eta$ を計算せよ。`,
    solution: `## (1) $P$-$V$ 図

- A→B 断熱圧縮：$PV^\\gamma = \\text{const}$ に沿って左上へ（$V\\downarrow, P\\uparrow$ 急)
- B→C 定積加熱：$V = V_2$ で垂直に上へ（$P\\uparrow$）
- C→D 断熱膨張：$PV^\\gamma = \\text{const}$ に沿って右下へ（$V\\uparrow, P\\downarrow$ 急）
- D→A 定積冷却：$V = V_1$ で垂直に下へ（$P\\downarrow$）

閉じたループを右回りに回ると正の仕事（エンジン動作）。

## (2) 吸熱と放熱

定積過程なので $Q = nC_V \\Delta T$：

$$\\boxed{Q_H = nC_V(T_C - T_B), \\quad Q_L = nC_V(T_D - T_A)}$$

## (3) 熱効率

断熱過程で $TV^{\\gamma-1} = \\text{const}$：
- A→B: $T_A V_1^{\\gamma-1} = T_B V_2^{\\gamma-1}$ より $T_B = T_A r^{\\gamma-1}$
- C→D: $T_C V_2^{\\gamma-1} = T_D V_1^{\\gamma-1}$ より $T_D = T_C r^{-(\\gamma-1)} = T_C/r^{\\gamma-1}$

比をとると：

$$\\frac{Q_L}{Q_H} = \\frac{T_D - T_A}{T_C - T_B} = \\frac{(T_C - T_A \\cdot r^{\\gamma-1})/r^{\\gamma-1}}{T_C - T_A r^{\\gamma-1}}$$

分子の $T_C - T_A r^{\\gamma-1}$ は分母と一致（ただし $r^{\\gamma-1}$ で割られている）。きちんと書き直すと：

$$\\frac{T_D - T_A}{T_C - T_B} = \\frac{T_C/r^{\\gamma-1} - T_A}{T_C - T_A r^{\\gamma-1}} = \\frac{1}{r^{\\gamma-1}} \\cdot \\frac{T_C - T_A r^{\\gamma-1}}{T_C - T_A r^{\\gamma-1}} = \\frac{1}{r^{\\gamma-1}}$$

$$\\boxed{\\eta = 1 - \\frac{1}{r^{\\gamma-1}}}$$

**特徴**：高温・低温熱源の温度に依らず、圧縮比のみで効率が決まる。

## (4) 数値

$r^{\\gamma-1} = 10^{0.4}$。$\\log_{10}(10^{0.4}) = 0.4$、$10^{0.4} \\approx 2.512$。

$$\\eta = 1 - \\frac{1}{2.512} \\approx \\boxed{0.602 = 60.2\\%}$$

実エンジンが30-40%程度しか出ないのは、摩擦・不完全燃焼・有限時間サイクルの非可逆性が主な原因。`,
  },
  {
    id: "tohoku-2025-phys-4",
    universitySlug: "tohoku",
    year: 2025,
    subject: "物理学",
    problemNumber: 4,
    title: "水素原子の基底状態",
    field: "quantum",
    difficulty: "advanced",
    tags: ["水素原子", "基底状態", "Bohr 半径"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2025年度 物理学 問4

## 問題の設定
水素原子の基底状態波動関数は球対称で、
$$\\psi_0(r) = \\frac{1}{\\sqrt{\\pi a_0^3}} e^{-r/a_0}$$
である。ここで $a_0 = 4\\pi\\varepsilon_0 \\hbar^2/(m_e e^2)$ は Bohr 半径。$m_e$ は電子質量、$e$ は素電荷。

## 問われている内容
(1) $\\psi_0$ が規格化されていることを確認せよ（$\\int_0^\\infty r^2 e^{-2r/a_0} dr = a_0^3/4$ を使ってよい）。
(2) 電子の位置の期待値 $\\langle r \\rangle$ を求めよ。
(3) 運動エネルギーの期待値 $\\langle T \\rangle$ と位置エネルギーの期待値 $\\langle U \\rangle$ を求め、ビリアル定理 $2\\langle T \\rangle + \\langle U \\rangle = 0$ を確認せよ。`,
    solution: `## (1) 規格化

球対称なので体積要素は $4\\pi r^2 dr$：

$$\\int |\\psi_0|^2 d^3 r = \\frac{1}{\\pi a_0^3} \\cdot 4\\pi \\int_0^\\infty r^2 e^{-2r/a_0} dr = \\frac{4}{a_0^3} \\cdot \\frac{a_0^3}{4} = 1 \\checkmark$$

## (2) 位置の期待値

$\\int_0^\\infty r^3 e^{-2r/a_0}dr = 6(a_0/2)^4 = 3a_0^4/8$ （ガンマ関数 $\\Gamma(4) = 6$、スケール $1/(2/a_0)^4$ ）。

$$\\langle r \\rangle = \\frac{4}{a_0^3}\\int_0^\\infty r^3 e^{-2r/a_0}dr = \\frac{4}{a_0^3} \\cdot \\frac{3a_0^4}{8} = \\boxed{\\frac{3a_0}{2}}$$

Bohr 半径そのものではなく、$1.5 a_0$ が「平均半径」であることに注意（最大確率位置は $a_0$）。

## (3) ビリアル定理の確認

**位置エネルギー**：$U(r) = -e^2/(4\\pi\\varepsilon_0 r) \\equiv -k/r$（$k = e^2/(4\\pi\\varepsilon_0)$）。

$\\langle 1/r \\rangle = (4/a_0^3)\\int_0^\\infty r e^{-2r/a_0}dr = (4/a_0^3)(a_0/2)^2 = 1/a_0$。

$$\\langle U \\rangle = -k \\langle 1/r \\rangle = -\\frac{k}{a_0} = -\\frac{e^2}{4\\pi\\varepsilon_0 a_0}$$

**運動エネルギー**：球対称なので $\\hat{T} = -\\hbar^2/(2m_e) \\cdot (1/r^2)d/dr(r^2 d/dr)$。$\\psi_0 \\propto e^{-r/a_0}$ に作用させると：

$$\\hat{T}\\psi_0 = -\\frac{\\hbar^2}{2m_e}\\left(\\frac{1}{a_0^2} - \\frac{2}{r a_0}\\right)\\psi_0$$

期待値：$\\langle T \\rangle = -\\frac{\\hbar^2}{2m_e}(1/a_0^2 - 2\\langle 1/r\\rangle/a_0) = -\\frac{\\hbar^2}{2m_e}(1/a_0^2 - 2/a_0^2) = \\frac{\\hbar^2}{2m_e a_0^2}$。

Bohr 半径の定義 $a_0 = \\hbar^2/(m_e k)$ より $\\hbar^2/(m_e a_0^2) = k/a_0$。したがって：

$$\\langle T \\rangle = \\frac{k}{2a_0} = \\frac{e^2}{8\\pi\\varepsilon_0 a_0}$$

**ビリアル定理の確認**：

$$2\\langle T \\rangle + \\langle U \\rangle = \\frac{k}{a_0} - \\frac{k}{a_0} = 0 \\checkmark$$

全エネルギー $E_0 = \\langle T \\rangle + \\langle U \\rangle = -k/(2a_0) = -13.6$ eV（Rydberg）。`,
  },
  {
    id: "tohoku-2025-phys-5",
    universitySlug: "tohoku",
    year: 2025,
    subject: "物理学",
    problemNumber: 5,
    title: "Debye モデルと低温比熱",
    field: "statistical",
    difficulty: "advanced",
    tags: ["Debye モデル", "フォノン", "低温比熱"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2025年度 物理学 問5

## 問題の設定
Debye モデルでは、$N$ 原子からなる固体の格子振動を独立な $3N$ 個の調和振動子とみなし、その振動数分布を $g(\\omega)d\\omega \\propto \\omega^2 d\\omega$（$0 \\leq \\omega \\leq \\omega_D$、Debye 振動数）とする。

## 問われている内容
(1) 規格化条件 $\\int_0^{\\omega_D} g(\\omega)d\\omega = 3N$ から比例係数を決定せよ。
(2) 内部エネルギーを
$$U = \\int_0^{\\omega_D} g(\\omega) \\frac{\\hbar\\omega}{e^{\\hbar\\omega/k_B T} - 1} d\\omega$$
で表し、Debye 温度 $\\Theta_D = \\hbar\\omega_D/k_B$ と $x = \\hbar\\omega/(k_B T)$、$x_D = \\Theta_D/T$ を用いて書き直せ。
(3) 低温極限 $T \\ll \\Theta_D$ で比熱 $C_V$ が $T^3$ に比例することを示せ（$\\int_0^\\infty x^3/(e^x - 1)dx = \\pi^4/15$ を使ってよい）。`,
    solution: `## (1) 規格化

$g(\\omega) = A\\omega^2$ とおくと：

$$\\int_0^{\\omega_D} A\\omega^2 d\\omega = \\frac{A\\omega_D^3}{3} = 3N \\quad \\Rightarrow \\quad A = \\frac{9N}{\\omega_D^3}$$

$$\\boxed{g(\\omega) = \\frac{9N\\omega^2}{\\omega_D^3} \\quad (0 \\leq \\omega \\leq \\omega_D)}$$

## (2) 内部エネルギーの無次元化

$\\omega = k_B T x/\\hbar$、$d\\omega = k_B T dx/\\hbar$ で代入：

$$U = \\frac{9N}{\\omega_D^3}\\int_0^{x_D} \\frac{(k_B T/\\hbar)^3 x^2 \\cdot \\hbar \\cdot (k_B T x/\\hbar)}{e^x - 1} \\cdot \\frac{k_B T}{\\hbar}dx$$

整理：

$$\\boxed{U = 9Nk_B T \\left(\\frac{T}{\\Theta_D}\\right)^3 \\int_0^{x_D} \\frac{x^3}{e^x - 1} dx}$$

## (3) 低温極限 $T \\ll \\Theta_D$（$x_D \\to \\infty$）

積分の上限を $\\infty$ に置換可能（$x_D \\to \\infty$）：

$$U \\to 9N k_B T \\left(\\frac{T}{\\Theta_D}\\right)^3 \\cdot \\frac{\\pi^4}{15} = \\frac{3\\pi^4 N k_B T^4}{5\\Theta_D^3}$$

比熱：

$$C_V = \\frac{\\partial U}{\\partial T} = \\frac{12\\pi^4 N k_B}{5}\\left(\\frac{T}{\\Theta_D}\\right)^3 \\propto T^3$$

$$\\boxed{C_V^{\\text{low}} = \\frac{12\\pi^4}{5} N k_B \\left(\\frac{T}{\\Theta_D}\\right)^3}$$

**物理的意味**：$T^3$ 則（Debye 則）。低温では $k_B T$ 以下の音響フォノンのみが励起され、その数密度が $T^3$ に比例するため。これは金属の電子比熱 $\\propto T$ と合わせて、低温比熱測定の分解に使われる（Debye-Sommerfeld プロット）。`,
  },
  {
    id: "osaka-2025-phys-3",
    universitySlug: "osaka",
    year: 2025,
    subject: "物理学",
    problemNumber: 3,
    title: "2体問題と換算質量",
    field: "mechanics",
    difficulty: "standard",
    tags: ["2体問題", "換算質量", "重心系"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2025年度 物理学 問3

## 問題の設定
質量 $m_1, m_2$ の2粒子が、相互作用ポテンシャル $U(|\\vec{r}_1 - \\vec{r}_2|)$ のみで結合している（外力なし）。

## 問われている内容
(1) 重心 $\\vec{R} = (m_1\\vec{r}_1 + m_2\\vec{r}_2)/(m_1 + m_2)$ と相対座標 $\\vec{r} = \\vec{r}_1 - \\vec{r}_2$ を用い、全系のラグランジアンを分離せよ。換算質量 $\\mu = m_1 m_2/(m_1 + m_2)$ を定義せよ。
(2) 重心が等速直線運動することを示せ。
(3) $U = k r^2/2$（調和振動子型結合）のとき、相対運動の角振動数 $\\omega_r$ を求めよ。

## 問われている内容（続き）
(4) $m_1 = m_2 = m$ と $m_1 \\ll m_2$ の2つの極限で $\\omega_r$ がどうなるか、物理的意味も含め論ぜよ。`,
    solution: `## (1) ラグランジアンの分離

$\\vec{r}_1 = \\vec{R} + (m_2/M)\\vec{r}$、$\\vec{r}_2 = \\vec{R} - (m_1/M)\\vec{r}$（$M = m_1 + m_2$）。

運動エネルギー：
$$T = \\frac{1}{2}m_1 \\dot{\\vec{r}}_1^2 + \\frac{1}{2}m_2\\dot{\\vec{r}}_2^2 = \\frac{1}{2}M\\dot{\\vec{R}}^2 + \\frac{1}{2}\\mu \\dot{\\vec{r}}^2$$

ここで換算質量 $\\boxed{\\mu = m_1 m_2/(m_1+m_2)}$。クロス項は $\\vec{R}$ の定義により相殺。

$$L = \\frac{1}{2}M\\dot{\\vec{R}}^2 + \\frac{1}{2}\\mu \\dot{\\vec{r}}^2 - U(r)$$

## (2) 重心の等速運動

$L$ が $\\vec{R}$ を陽に含まない $\\Rightarrow$ $\\vec{R}$ は循環座標 $\\Rightarrow$ $M\\dot{\\vec{R}} = $ 一定（全運動量保存）。

$$\\ddot{\\vec{R}} = 0 \\quad \\Rightarrow \\quad \\vec{R}(t) = \\vec{R}_0 + \\vec{V}_0 t$$

## (3) 調和振動子結合

相対運動のラグランジアン $L_r = \\mu\\dot{\\vec{r}}^2/2 - kr^2/2$ は質量 $\\mu$ の調和振動子。

$$\\boxed{\\omega_r = \\sqrt{k/\\mu}}$$

## (4) 2つの極限

**等質量極限 $m_1 = m_2 = m$**：$\\mu = m/2$、$\\omega_r = \\sqrt{2k/m}$。
 → 対称なモードで「押し引き」が互いに同位相で増幅されるため、1体 ($m$、$k$) の振動より $\\sqrt{2}$ 倍速い。

**大質量差極限 $m_1 \\ll m_2$**：$\\mu \\to m_1$、$\\omega_r \\to \\sqrt{k/m_1}$。
 → 重い粒子 $m_2$ はほぼ静止し、$m_1$ が静止した $m_2$ 周りで振動する「1体問題」に帰着。核に束縛された電子、太陽を周る地球、重い荷電粒子の周りを回る電子の簡略化など。

**物理的含意**：水素原子の Rydberg 定数 $R_\\infty$ を核質量有限補正する際 $\\mu = m_e m_p/(m_e + m_p)$ を使う理由は、まさに (1) で現れた換算質量。`,
  },
  {
    id: "osaka-2025-phys-4",
    universitySlug: "osaka",
    year: 2025,
    subject: "物理学",
    problemNumber: 4,
    title: "LC 共振回路とエネルギー振動",
    field: "electromagnetism",
    difficulty: "standard",
    tags: ["LC 回路", "共振", "エネルギー保存"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2025年度 物理学 問4

## 問題の設定
自己インダクタンス $L$ のコイルと容量 $C$ のコンデンサが直列に接続された閉回路（抵抗なし）。コンデンサに初期電荷 $Q_0$ を与え、$t = 0$ でスイッチを閉じる。

## 問われている内容
(1) 電荷 $q(t)$ に対する微分方程式を立て、解を求めよ。
(2) コイルを流れる電流 $I(t)$ を求めよ。
(3) コンデンサの静電エネルギー $U_C(t)$ とコイルの磁気エネルギー $U_L(t)$ をそれぞれ求め、両者の和が時間によらず一定であることを示せ。`,
    solution: `## (1) 微分方程式

コンデンサ両端電圧 $V_C = q/C$、コイル両端電圧 $V_L = L\\, dI/dt$。閉回路で $V_C + V_L = 0$ かつ $I = -dq/dt$（コンデンサから流れ出る向きが正）：

$$L\\frac{d^2 q}{dt^2} + \\frac{q}{C} = 0 \\quad \\Rightarrow \\quad \\ddot{q} + \\omega_0^2 q = 0, \\quad \\omega_0 = \\frac{1}{\\sqrt{LC}}$$

初期条件 $q(0) = Q_0, \\dot{q}(0) = 0$ より：

$$\\boxed{q(t) = Q_0\\cos(\\omega_0 t)}$$

## (2) 電流

$$I(t) = -\\dot{q} = \\boxed{Q_0 \\omega_0 \\sin(\\omega_0 t)}$$

## (3) エネルギー保存

$$U_C = \\frac{q^2}{2C} = \\frac{Q_0^2}{2C}\\cos^2(\\omega_0 t)$$

$$U_L = \\frac{1}{2}LI^2 = \\frac{1}{2}L Q_0^2 \\omega_0^2 \\sin^2(\\omega_0 t) = \\frac{Q_0^2}{2C}\\sin^2(\\omega_0 t)$$

（$L\\omega_0^2 = 1/C$ を使用）

和：

$$U_C + U_L = \\frac{Q_0^2}{2C}(\\cos^2 + \\sin^2) = \\boxed{\\frac{Q_0^2}{2C} = \\text{const}}$$

**物理的意味**：初期の静電エネルギーがコイルの磁気エネルギーと交互に変換されるが、抵抗なしなので総和は完全保存。周期 $T = 2\\pi\\sqrt{LC}$ は力学振り子 $T = 2\\pi\\sqrt{m/k}$ と形式的に同じ（$L \\leftrightarrow m$、$1/C \\leftrightarrow k$）。`,
  },
  {
    id: "osaka-2025-math-2",
    universitySlug: "osaka",
    year: 2025,
    subject: "数学",
    problemNumber: 2,
    title: "線形代数：対称行列の対角化と二次形式",
    field: "math",
    difficulty: "standard",
    tags: ["対称行列", "対角化", "二次形式"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2025年度 数学 問2

## 問題の設定
実対称行列
$$A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$$
を考える。

## 問われている内容
(1) 固有値 $\\lambda_1, \\lambda_2$ と規格化された固有ベクトル $\\vec{v}_1, \\vec{v}_2$ を求めよ。
(2) 直交行列 $P$ により $P^T A P = \\mathrm{diag}(\\lambda_1, \\lambda_2)$ となることを示せ。
(3) 2次形式 $f(x, y) = \\vec{x}^T A \\vec{x}$（$\\vec{x} = (x, y)^T$）を、主軸変換で対角形に書き直せ。
(4) $f(x, y) = 1$ の表す図形の概形を答えよ。`,
    solution: `## (1) 固有値と固有ベクトル

特性方程式：$\\det(A - \\lambda I) = (2-\\lambda)^2 - 1 = 0 \\Rightarrow \\lambda = 1, 3$。

- $\\lambda_1 = 3$：$(A - 3I)\\vec{v} = 0$ より $-v_1 + v_2 = 0$、$\\vec{v}_1 = (1, 1)/\\sqrt{2}$
- $\\lambda_2 = 1$：$(A - I)\\vec{v} = 0$ より $v_1 + v_2 = 0$、$\\vec{v}_2 = (1, -1)/\\sqrt{2}$

$$\\boxed{\\lambda_1 = 3, \\vec{v}_1 = \\frac{1}{\\sqrt{2}}(1, 1)^T; \\quad \\lambda_2 = 1, \\vec{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1)^T}$$

固有ベクトルは互いに直交（実対称行列の一般性質）。

## (2) 対角化

$P = (\\vec{v}_1, \\vec{v}_2) = (1/\\sqrt{2})\\begin{pmatrix}1 & 1 \\\\ 1 & -1\\end{pmatrix}$。$P^T P = I$（直交行列）。直接計算：

$$P^T A P = \\begin{pmatrix} 3 & 0 \\\\ 0 & 1\\end{pmatrix} \\checkmark$$

## (3) 主軸変換

$\\vec{x} = P\\vec{x}'$（$\\vec{x}' = (x', y')^T$）と変換すると：

$$f = \\vec{x}^T A \\vec{x} = \\vec{x}'^T P^T A P \\vec{x}' = 3x'^2 + y'^2$$

主軸 $x', y'$ は元の軸から 45° 回転した方向。

## (4) 図形

$3x'^2 + y'^2 = 1$ は**楕円**。半軸 $a = 1/\\sqrt{3}$（$x'$ 方向）、$b = 1$（$y'$ 方向）。

元の $xy$ 座標では、45°回転した楕円として見える。`,
  },
  {
    id: "nagoya-2025-phys-3", universitySlug: "nagoya", year: 2025, subject: "物理学", problemNumber: 3,
    title: "理想気体のエントロピー変化", field: "thermodynamics", difficulty: "basic",
    tags: ["エントロピー", "自由膨張", "理想気体"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2025年度 物理学 問3

## 問題の設定
$n$ モルの単原子理想気体（定積モル比熱 $C_V = 3R/2$）が、温度 $T_0$、体積 $V_0$ の状態にある。次の2つの操作を比較する：
- 操作 A: 等温可逆膨張で体積を $2V_0$ にする
- 操作 B: 真空への自由膨張で体積を $2V_0$ にする

## 問われている内容
(1) 操作 A で気体が外界にした仕事 $W_A$、吸収した熱 $Q_A$、エントロピー変化 $\\Delta S_A$ を求めよ。
(2) 操作 B の終状態の温度 $T_f$、仕事 $W_B$、熱 $Q_B$、エントロピー変化 $\\Delta S_B$ を求めよ。
(3) A と B のエントロピー変化を比較し、結果を物理的に解釈せよ。`,
    solution: `## (1) 等温可逆膨張（操作 A）

等温なので $\\Delta U = 0$、熱力学第1法則より $Q_A = W_A$。

$$W_A = \\int_{V_0}^{2V_0} \\frac{nRT_0}{V}dV = nRT_0 \\ln 2$$

$$Q_A = nRT_0 \\ln 2$$

$$\\Delta S_A = \\frac{Q_A}{T_0} = \\boxed{nR\\ln 2}$$

## (2) 自由膨張（操作 B）

断熱・外界に仕事しない・理想気体 → 内部エネルギー不変 → 温度不変：

$$T_f = T_0, \\quad W_B = 0, \\quad Q_B = 0$$

エントロピーは状態量なので、始状態と終状態が A と同じなら変化も同じ：

$$\\Delta S_B = \\Delta S_A = \\boxed{nR\\ln 2}$$

## (3) 比較

- 可逆過程 A：$\\Delta S_{\\text{系}} = nR\\ln 2$、外界からの熱 $Q/T = nR\\ln 2$ を受け取る → 系+外界で $\\Delta S_{\\text{全}} = 0$。
- 不可逆過程 B：$\\Delta S_{\\text{系}} = nR\\ln 2$、外界には何も起きない → $\\Delta S_{\\text{全}} = nR\\ln 2 > 0$。

**物理的意味**：エントロピーは「系」についての量で A と B で同じ（状態量）。しかし全系（系+外界）では不可逆過程 B のみでエントロピー増大。これが第2法則の本質。`,
  },
  {
    id: "nagoya-2025-phys-4", universitySlug: "nagoya", year: 2025, subject: "物理学", problemNumber: 4,
    title: "無限井戸の量子力学（入門）", field: "quantum", difficulty: "basic",
    tags: ["無限井戸", "定常状態", "ゼロ点エネルギー"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2025年度 物理学 問4

## 問題の設定
$0 \\leq x \\leq L$ の無限に深い井戸内に質量 $m$ の粒子がある。$\\psi_n(x) = \\sqrt{2/L}\\sin(n\\pi x/L)$、$E_n = n^2\\pi^2\\hbar^2/(2mL^2)$（$n = 1,2,\\ldots$）が与えられている。

## 問われている内容
(1) 基底状態エネルギー $E_1$ と第一励起エネルギー $E_2$ を書け。遷移エネルギー $E_2 - E_1$ を求めよ。
(2) 電子（$m = 9.1 \\times 10^{-31}$ kg）が $L = 1$ nm の井戸にいるとき、$E_1$ を eV 単位で求めよ（$\\hbar = 1.05 \\times 10^{-34}$ J·s、$1$ eV $= 1.6 \\times 10^{-19}$ J）。
(3) 基底状態で位置を測定すると、$x = L/2$ で粒子を見出す確率密度 $|\\psi_1(L/2)|^2$ を求めよ。`,
    solution: `## (1) エネルギー準位

$$E_1 = \\frac{\\pi^2\\hbar^2}{2mL^2}, \\quad E_2 = \\frac{4\\pi^2\\hbar^2}{2mL^2} = 4E_1$$

$$\\boxed{E_2 - E_1 = 3E_1 = \\frac{3\\pi^2\\hbar^2}{2mL^2}}$$

## (2) 数値計算

$\\hbar^2 = (1.05 \\times 10^{-34})^2 = 1.1025 \\times 10^{-68}$ J²·s²。

$$E_1 = \\frac{\\pi^2 \\cdot 1.1025 \\times 10^{-68}}{2 \\cdot 9.1 \\times 10^{-31} \\cdot (10^{-9})^2} = \\frac{9.87 \\cdot 1.1025}{18.2} \\times 10^{-68+31+18} \\text{ J}$$

$$\\approx 0.598 \\times 10^{-19} \\text{ J} \\approx \\boxed{0.37 \\text{ eV}}$$

eV オーダーで、可視光の光子エネルギー（2–3 eV）と同程度。これが量子閉じ込め構造（量子ドット等）での光吸収スペクトルの基礎。

## (3) 中心での確率密度

$\\sin(\\pi \\cdot L/2 / L) = \\sin(\\pi/2) = 1$ より：

$$|\\psi_1(L/2)|^2 = \\frac{2}{L}\\sin^2(\\pi/2) = \\boxed{\\frac{2}{L}}$$

中心が最大確率点。積分は $\\int_0^L (2/L)\\sin^2(\\pi x/L)dx = 1$ と合っている。`,
  },
  {
    id: "kyushu-2025-phys-3", universitySlug: "kyushu", year: 2025, subject: "物理学", problemNumber: 3,
    title: "ソレノイドとインダクタンス", field: "electromagnetism", difficulty: "basic",
    tags: ["ソレノイド", "自己インダクタンス", "磁束"], isFree: true,
    statement: `**対応問題**: 九州大学 2025年度 物理学 問3

## 問題の設定
長さ $\\ell$、断面積 $S$、単位長さあたり巻数 $n$ の空芯ソレノイドに、電流 $I$ を流す。内部は一様磁場と近似してよい。真空の透磁率を $\\mu_0$ とする。

## 問われている内容
(1) ソレノイド内部の磁束密度 $B$ を求めよ。
(2) 一巻きあたりの磁束 $\\Phi$、全巻数 $N = n\\ell$ での総磁束鎖交 $\\Phi_{\\text{tot}}$ を求めよ。
(3) 自己インダクタンス $L$ を導け。
(4) 磁場のエネルギー密度 $u_B = B^2/(2\\mu_0)$ を用いて、ソレノイド内に蓄えられる磁気エネルギー $U_B$ を計算し、$U_B = LI^2/2$ と一致することを確認せよ。`,
    solution: `## (1) 内部磁場

Ampere の法則（長い直線ソレノイド近似）：

$$\\boxed{B = \\mu_0 n I}$$

端効果を無視した一様場。

## (2) 磁束

一巻き：$\\Phi = BS = \\mu_0 n I S$。総磁束鎖交：

$$\\Phi_{\\text{tot}} = N\\Phi = \\mu_0 n^2 \\ell S I$$

## (3) 自己インダクタンス

$\\Phi_{\\text{tot}} = LI$ の定義から：

$$\\boxed{L = \\mu_0 n^2 \\ell S}$$

## (4) エネルギー

$$U_B = u_B \\cdot (\\text{体積}) = \\frac{B^2}{2\\mu_0}\\cdot \\ell S = \\frac{(\\mu_0 nI)^2}{2\\mu_0}\\ell S = \\frac{\\mu_0 n^2 \\ell S}{2}I^2 = \\frac{L I^2}{2} \\checkmark$$

同じ $\\boxed{U_B = \\mu_0 n^2 \\ell S \\cdot I^2/2}$ が得られる。インダクタンスの定義が磁場エネルギーと矛盾なく結びついている。`,
  },
  {
    id: "kyushu-2025-phys-4", universitySlug: "kyushu", year: 2025, subject: "物理学", problemNumber: 4,
    title: "理想気体の熱機関", field: "thermodynamics", difficulty: "basic",
    tags: ["熱機関", "効率", "等温過程"], isFree: true,
    statement: `**対応問題**: 九州大学 2025年度 物理学 問4

## 問題の設定
単原子理想気体 $n$ モルを、次のサイクルで動かす：
- A→B: 温度 $T_H$ で等温膨張（体積 $V_1 \\to V_2$、$V_2 > V_1$）
- B→C: 定積冷却（$T_H \\to T_L$）
- C→D: 温度 $T_L$ で等温圧縮（体積 $V_2 \\to V_1$）
- D→A: 定積加熱（$T_L \\to T_H$）

## 問われている内容
(1) 各過程で気体が吸収する熱 $Q_i$ を計算せよ。
(2) 1サイクルで外界にした仕事 $W$ を求めよ。
(3) このサイクルの効率 $\\eta = W/Q_{\\text{吸収}}$ を求めよ。ただし吸収熱は $Q > 0$ の過程のみの和。
(4) カルノー効率 $\\eta_C = 1 - T_L/T_H$ と比較し、このサイクルがカルノーより劣ることを示せ。`,
    solution: `## (1) 各過程の熱

- A→B: 等温で $Q_{AB} = nRT_H \\ln(V_2/V_1) > 0$
- B→C: 定積で $Q_{BC} = nC_V(T_L - T_H) = -(3/2)nR(T_H - T_L) < 0$
- C→D: 等温で $Q_{CD} = nRT_L \\ln(V_1/V_2) = -nRT_L\\ln(V_2/V_1) < 0$
- D→A: 定積で $Q_{DA} = nC_V(T_H - T_L) = +(3/2)nR(T_H - T_L) > 0$

## (2) サイクルの仕事

内部エネルギーは1サイクルで元に戻るので、熱力学第1法則から $W = \\sum Q_i$：

$$W = nR\\ln(V_2/V_1)(T_H - T_L) + (3/2)nR(T_H - T_L) \\cdot 0$$

（定積過程2つは $Q_{BC} + Q_{DA} = 0$）

$$\\boxed{W = nR(T_H - T_L)\\ln(V_2/V_1)}$$

## (3) 効率

吸収熱：$Q_{AB} + Q_{DA} = nRT_H\\ln(V_2/V_1) + (3/2)nR(T_H - T_L)$。

$$\\eta = \\frac{nR(T_H - T_L)\\ln(V_2/V_1)}{nRT_H\\ln(V_2/V_1) + (3/2)nR(T_H - T_L)}$$

$r \\equiv \\ln(V_2/V_1)$、$\\Delta T \\equiv T_H - T_L$ とおくと：

$$\\eta = \\frac{r \\Delta T}{r T_H + (3/2)\\Delta T}$$

## (4) カルノー比較

カルノー効率：$\\eta_C = \\Delta T/T_H$。比をとると：

$$\\frac{\\eta}{\\eta_C} = \\frac{r T_H}{r T_H + (3/2)\\Delta T} < 1$$

よって $\\eta < \\eta_C$。**理由**：カルノーは2つの定温過程と2つの断熱過程からなり、温度差のある熱の授受が定積ではなく断熱で行われる。定積過程では有限温度差 $\\Delta T$ を横断するので非可逆性（エントロピー生成）が生じ、効率が下がる。`,
  },
  {
    id: "hokkaido-2025-phys-3", universitySlug: "hokkaido", year: 2025, subject: "物理学", problemNumber: 3,
    title: "気体の状態方程式と分子運動論", field: "thermodynamics", difficulty: "basic",
    tags: ["状態方程式", "分子運動論", "根2乗平均速度"], isFree: true,
    statement: `**対応問題**: 北海道大学 2025年度 物理学 問3

## 問題の設定
質量 $m$ の分子 $N$ 個が体積 $V$ の容器内を独立・等方的に運動する。温度 $T$、Boltzmann 定数 $k_B$、Avogadro 数 $N_A$ とする。

## 問われている内容
(1) 分子運動論から、圧力 $P = \\frac{1}{3}\\frac{N}{V}m\\langle v^2\\rangle$ を導け（考え方の骨子でよい）。
(2) 気体の状態方程式 $PV = Nk_B T$ と比較し、$\\langle v^2 \\rangle$ を $T$ で表せ。
(3) 酸素分子（$m = 5.3 \\times 10^{-26}$ kg）の室温 $T = 300$ K における $v_{\\text{rms}} = \\sqrt{\\langle v^2\\rangle}$ を求めよ。

## 定数
$k_B = 1.38 \\times 10^{-23}$ J/K`,
    solution: `## (1) 分子運動論からの圧力

壁に垂直な速度成分を $v_x$ とする。1分子が壁に衝突するとき、運動量変化は $2mv_x$、衝突頻度は $v_x/(2L)$（容器の幅 $L$）。壁への力の時間平均は $mv_x^2/L$、圧力 $P = \\sum mv_x^2/(LV)\\cdot L^2/S = Nm\\langle v_x^2\\rangle/V$。

等方性から $\\langle v_x^2\\rangle = \\langle v^2\\rangle/3$。

$$\\boxed{P = \\frac{Nm\\langle v^2\\rangle}{3V}}$$

## (2) 温度との関係

$PV = Nk_B T$ と等値：

$$\\frac{Nm\\langle v^2\\rangle}{3} = Nk_B T \\quad \\Rightarrow \\quad \\boxed{\\langle v^2\\rangle = \\frac{3k_B T}{m}}$$

1分子あたり運動エネルギー $\\langle (1/2)mv^2\\rangle = (3/2)k_B T$ — エネルギー等分配則。

## (3) 酸素の rms 速度

$$v_{\\text{rms}} = \\sqrt{\\frac{3 \\cdot 1.38 \\times 10^{-23} \\cdot 300}{5.3 \\times 10^{-26}}} = \\sqrt{\\frac{1242 \\times 10^{-23}}{5.3 \\times 10^{-26}}} = \\sqrt{2.34 \\times 10^5}$$

$$\\approx \\boxed{484 \\text{ m/s}}$$

音速（約340 m/s）より少し速い。実際、音速は $\\sqrt{\\gamma RT/M}$ で、$v_{\\text{rms}} = \\sqrt{3RT/M}$ の約 $\\sqrt{3/\\gamma} \\approx 1.46$ 倍。`,
  },
  {
    id: "hokkaido-2025-phys-4", universitySlug: "hokkaido", year: 2025, subject: "物理学", problemNumber: 4,
    title: "ド・ブロイ波長と電子回折", field: "quantum", difficulty: "basic",
    tags: ["ド・ブロイ波", "電子回折", "波動性"], isFree: true,
    statement: `**対応問題**: 北海道大学 2025年度 物理学 問4

## 問題の設定
質量 $m$ の電子を電位差 $V$ で加速した（初速度 0）。非相対論的に扱う。Planck 定数 $h$、電気素量 $e$。

## 問われている内容
(1) 加速後の運動量 $p$ を $m, e, V$ で表せ。
(2) ド・ブロイ波長 $\\lambda = h/p$ を求めよ。
(3) $V = 100$ V のとき、$\\lambda$ を計算せよ（$h = 6.6 \\times 10^{-34}$ J·s、$m = 9.1 \\times 10^{-31}$ kg、$e = 1.6 \\times 10^{-19}$ C）。
(4) 得られた $\\lambda$ の大きさが X 線と同程度であることを確認し、電子の波動性を確認する実験（Davisson-Germer 等）でこの事実がどう使われているか、1–2行で説明せよ。`,
    solution: `## (1) 運動量

仕事エネルギー関係 $eV = p^2/(2m)$：

$$\\boxed{p = \\sqrt{2meV}}$$

## (2) 波長

$$\\boxed{\\lambda = \\frac{h}{\\sqrt{2meV}}}$$

## (3) 数値

$p = \\sqrt{2 \\cdot 9.1 \\times 10^{-31} \\cdot 1.6 \\times 10^{-19} \\cdot 100}$

$= \\sqrt{2.91 \\times 10^{-47}} = 5.40 \\times 10^{-24}$ kg·m/s

$$\\lambda = \\frac{6.6 \\times 10^{-34}}{5.40 \\times 10^{-24}} \\approx \\boxed{1.22 \\times 10^{-10} \\text{ m} = 1.22 \\text{ Å}}$$

## (4) X 線との比較と応用

X 線は $\\lambda \\sim 0.1-1$ Å で原子間隔（$\\sim$ 数Å）と同程度。電子も $V = 100$ V 程度で同じオーダーの波長になるため、結晶格子での Bragg 回折により干渉パターンが観測できる。Davisson-Germer（1927）は Ni 単結晶に加速電子を当て、角度依存の強度パターンから電子の波動性を実験的に確認した。`,
  },
  {
    id: "ynu-2025-phys-3", universitySlug: "ynu", year: 2025, subject: "物理学", problemNumber: 3,
    title: "熱容量と熱平衡", field: "thermodynamics", difficulty: "basic",
    tags: ["熱容量", "比熱", "熱平衡"], isFree: true,
    statement: `**対応問題**: 横浜国立大学 2025年度 物理学 問3

## 問題の設定
熱容量を無視できる断熱容器に、温度 $T_1$ の水 $m_1$ kg と温度 $T_2$ の鉄 $m_2$ kg（$T_1 < T_2$）を入れた。水の比熱 $c_1$、鉄の比熱 $c_2$。

## 問われている内容
(1) 熱平衡状態での温度 $T_f$ を求めよ。
(2) 鉄が失った熱量と水が得た熱量が等しいことを確認せよ。
(3) $m_1 = 0.5$ kg、$m_2 = 0.2$ kg、$T_1 = 20°\\mathrm{C}$、$T_2 = 100°\\mathrm{C}$、$c_1 = 4.2 \\times 10^3$ J/(kg·K)、$c_2 = 0.45 \\times 10^3$ J/(kg·K) のとき $T_f$ を計算せよ。`,
    solution: `## (1) 平衡温度

熱量保存（外部との熱交換なし）：$m_1 c_1(T_f - T_1) + m_2 c_2(T_f - T_2) = 0$。

$$\\boxed{T_f = \\frac{m_1 c_1 T_1 + m_2 c_2 T_2}{m_1 c_1 + m_2 c_2}}$$

熱容量 $m c$ を重みとする加重平均。

## (2) 熱量の確認

- 水が得た熱：$Q_1 = m_1 c_1(T_f - T_1) > 0$
- 鉄が失った熱：$Q_2 = m_2 c_2(T_2 - T_f) > 0$

上式から $m_1 c_1 T_f - m_1 c_1 T_1 = m_2 c_2 T_2 - m_2 c_2 T_f$、つまり $Q_1 = Q_2 \\checkmark$。

## (3) 数値計算

$m_1 c_1 = 0.5 \\cdot 4200 = 2100$ J/K、$m_2 c_2 = 0.2 \\cdot 450 = 90$ J/K。

$$T_f = \\frac{2100 \\cdot 20 + 90 \\cdot 100}{2100 + 90} = \\frac{42000 + 9000}{2190} = \\frac{51000}{2190}$$

$$\\approx \\boxed{23.3°\\mathrm{C}}$$

鉄より水の熱容量が大きいので、平衡温度は水の初期温度にずっと近い。`,
  },
  {
    id: "ynu-2025-phys-4", universitySlug: "ynu", year: 2025, subject: "物理学", problemNumber: 4,
    title: "波の干渉とうなり", field: "mechanics", difficulty: "basic",
    tags: ["うなり", "波の重ね合わせ", "位相"], isFree: true,
    statement: `**対応問題**: 横浜国立大学 2025年度 物理学 問4

## 問題の設定
同じ振幅 $A$ で振動数のわずかに異なる2つの音波 $f_1 = 440$ Hz、$f_2 = 444$ Hz が同じ方向に同位相で重なっている。

## 問われている内容
(1) 合成波 $y(t) = A\\sin(2\\pi f_1 t) + A\\sin(2\\pi f_2 t)$ を積和の公式で書き直せ。
(2) うなりの周期 $T_b$ とうなりの振動数 $f_b$ を求めよ。
(3) 短い時間スケールで見たときの「キャリア振動数」を求めよ。
(4) うなりの物理的イメージを説明せよ。`,
    solution: `## (1) 積和変換

$\\sin\\alpha + \\sin\\beta = 2\\cos((\\alpha-\\beta)/2)\\sin((\\alpha+\\beta)/2)$ を使う：

$$y(t) = 2A\\cos\\left(2\\pi \\frac{f_2-f_1}{2}t\\right)\\sin\\left(2\\pi \\frac{f_1+f_2}{2}t\\right)$$

## (2) うなり振動数

振幅の包絡線 $2A|\\cos(\\pi(f_2-f_1)t)|$ は $|f_2-f_1|$ 回/秒で2倍の極大を持つ。すなわち「強弱の周期」としてのうなりは：

$$\\boxed{f_b = |f_2 - f_1| = 4 \\text{ Hz}}$$

$$T_b = 1/f_b = 0.25 \\text{ s}$$

## (3) キャリア振動数

高速振動項 $\\sin(2\\pi f_c t)$ の振動数：

$$\\boxed{f_c = (f_1 + f_2)/2 = 442 \\text{ Hz}}$$

## (4) 物理的イメージ

近い振動数の音波が重なると、位相が合う時刻と打ち消し合う時刻が周期的に交互訪れ、振幅（音量）が「ウワンウワン」と周期 $T_b$ で変化する。ピアノの調律で使われる — 2本の弦のうなりをゼロに近づけることで振動数を合わせる。

うなり振動数 $f_b$ は各音源の振動数差で、2つの振動数が完全に等しいときゼロになる。`,
  },
  {
    id: "tsukuba-2025-phys-3", universitySlug: "tsukuba", year: 2025, subject: "物理学", problemNumber: 3,
    title: "RL 回路の過渡応答", field: "electromagnetism", difficulty: "standard",
    tags: ["RL 回路", "過渡現象", "時定数"], isFree: true,
    statement: `**対応問題**: 筑波大学 2025年度 物理学 問3

## 問題の設定
起電力 $\\varepsilon$ の電池、抵抗 $R$、自己インダクタンス $L$ のコイル、スイッチ S を直列に接続する。$t = 0$ で S を閉じる。

## 問われている内容
(1) Kirchhoff の法則から、電流 $I(t)$ の満たす微分方程式を書け。
(2) $I(0) = 0$ を初期条件として $I(t)$ を求めよ。時定数 $\\tau$ も示せ。
(3) 十分時間が経過した後の電流 $I_\\infty$ を求めよ。
(4) ある時刻 $t_1$ で電流が $I_\\infty$ の 90% に達するとすると、$t_1/\\tau$ の値を求めよ。`,
    solution: `## (1) 微分方程式

起電力＝抵抗電圧＋コイル電圧：

$$\\varepsilon = RI + L\\frac{dI}{dt}$$

## (2) 解

同次解 $I_h \\propto e^{-Rt/L}$、特解 $I_p = \\varepsilon/R$。一般解に $I(0) = 0$ を入れて：

$$\\boxed{I(t) = \\frac{\\varepsilon}{R}\\left(1 - e^{-t/\\tau}\\right), \\quad \\tau = L/R}$$

$\\tau$ は電流が最終値の $1 - 1/e \\approx 63\\%$ に達するまでの時間。

## (3) 定常電流

$t \\to \\infty$ で $e^{-t/\\tau} \\to 0$：

$$\\boxed{I_\\infty = \\varepsilon/R}$$

このときコイル両端電圧はゼロ（$dI/dt = 0$）、抵抗が全電圧を担う。

## (4) 90% 到達時刻

$0.9 = 1 - e^{-t_1/\\tau} \\Rightarrow e^{-t_1/\\tau} = 0.1$

$$\\boxed{t_1/\\tau = \\ln 10 \\approx 2.30}$$

時定数の約2.3倍の時間が必要。99%なら $\\ln 100 \\approx 4.6 \\tau$。`,
  },
  {
    id: "tsukuba-2025-phys-4", universitySlug: "tsukuba", year: 2025, subject: "物理学", problemNumber: 4,
    title: "Maxwell-Boltzmann 速度分布", field: "statistical", difficulty: "standard",
    tags: ["Maxwell 分布", "平均速度", "最頻速度"], isFree: true,
    statement: `**対応問題**: 筑波大学 2025年度 物理学 問4

## 問題の設定
温度 $T$ の気体中の分子（質量 $m$）の速さの分布は Maxwell-Boltzmann 分布に従う：
$$f(v) = 4\\pi n \\left(\\frac{m}{2\\pi k_B T}\\right)^{3/2} v^2 e^{-mv^2/(2k_B T)}$$
（$n$ は数密度、$f(v)dv$ は速さが $v\\sim v+dv$ の分子の数密度）。

## 問われている内容
(1) $f(v)$ の最大を与える最頻速度 $v_p$ を求めよ。
(2) 平均速度 $\\langle v \\rangle = (1/n)\\int_0^\\infty v f(v) dv$ を計算せよ（$\\int_0^\\infty x^3 e^{-\\alpha x^2}dx = 1/(2\\alpha^2)$ を使う）。
(3) rms 速度 $v_{\\text{rms}} = \\sqrt{\\langle v^2\\rangle}$ を求め、3つの速度 $v_p < \\langle v\\rangle < v_{\\text{rms}}$ の大小関係を確認せよ。`,
    solution: `## (1) 最頻速度

$df/dv = 0$ を解く。対数微分で $d(\\ln f)/dv = 2/v - mv/(k_B T) = 0$：

$$\\boxed{v_p = \\sqrt{\\frac{2k_B T}{m}}}$$

## (2) 平均速度

$\\alpha = m/(2k_B T)$ とおくと：

$$\\langle v\\rangle = 4\\pi \\left(\\frac{\\alpha}{\\pi}\\right)^{3/2}\\int_0^\\infty v^3 e^{-\\alpha v^2}dv = 4\\pi\\left(\\frac{\\alpha}{\\pi}\\right)^{3/2} \\cdot \\frac{1}{2\\alpha^2}$$

$= (4\\pi/\\pi^{3/2}) \\cdot \\alpha^{-1/2}/2 = (2/\\sqrt{\\pi}) \\cdot 1/\\sqrt{\\alpha}$

$$\\boxed{\\langle v\\rangle = \\sqrt{\\frac{8k_B T}{\\pi m}}}$$

## (3) rms 速度

エネルギー等分配則から $\\langle v^2\\rangle = 3k_B T/m$：

$$\\boxed{v_{\\text{rms}} = \\sqrt{\\frac{3k_B T}{m}}}$$

## 3速度の比較

共通因子 $\\sqrt{k_B T/m}$ をくくり出すと：
- $v_p = \\sqrt{2} \\approx 1.414$
- $\\langle v\\rangle = \\sqrt{8/\\pi} \\approx 1.596$
- $v_{\\text{rms}} = \\sqrt{3} \\approx 1.732$

$$v_p : \\langle v\\rangle : v_{\\text{rms}} = \\sqrt{2} : \\sqrt{8/\\pi} : \\sqrt{3} \\approx 1.414 : 1.596 : 1.732$$

$v_p < \\langle v\\rangle < v_{\\text{rms}}$ ✅。rms は $v^2$ で重みがかかるので高速テールを拾って大きめになる。`,
  },

  // ===== 2024年度 拡充セット（全大学×全科目充足）=====

  // ---- TODAI 2024 (+5) ----
  { id: "todai-2024-phys-2", universitySlug: "todai", year: 2024, subject: "物理学", problemNumber: 2,
    title: "電磁誘導と自己インダクタンス", field: "electromagnetism", difficulty: "standard",
    tags: ["電磁誘導", "自己インダクタンス", "Faraday の法則"], isFree: true,
    statement: `**対応問題**: 東京大学 2024年度 物理学 問2

## 問題の設定
断面積 $S$、単位長さあたりの巻数 $n$、長さ $\\ell$ の長いソレノイドに、時間変化する電流 $I(t) = I_0 \\cos(\\omega t)$ を流す。真空の透磁率を $\\mu_0$ とし、ソレノイド内部は一様磁場、外部はゼロとみなす。

## 問われている内容
(1) ソレノイド内部の磁束密度 $B(t)$ を求めよ。
(2) このソレノイドの自己インダクタンス $L$ を求めよ。
(3) ソレノイドにたくわえられる磁気エネルギーの時間平均 $\\langle U \\rangle$ を求めよ。
(4) ソレノイド内部の軸と垂直に置かれた半径 $r < \\sqrt{S/\\pi}$ の小さな円環に誘起される起電力を求めよ。`,
    solution: `## (1) 磁束密度
Ampère の法則より、長いソレノイド内部は $B = \\mu_0 n I$：
$$\\boxed{B(t) = \\mu_0 n I_0 \\cos(\\omega t)}$$

## (2) 自己インダクタンス
1 ターンあたりの磁束 $\\Phi = B S = \\mu_0 n I S$。総巻数 $N = n\\ell$ なので全磁束鎖交 $N\\Phi = \\mu_0 n^2 S \\ell \\cdot I$。$N\\Phi = L I$ より：
$$\\boxed{L = \\mu_0 n^2 S \\ell}$$

## (3) 磁気エネルギー（時間平均）
$U = \\tfrac{1}{2} L I^2$ に代入し、$\\langle \\cos^2(\\omega t)\\rangle = 1/2$ を用いると：
$$\\boxed{\\langle U \\rangle = \\frac{1}{4} L I_0^2 = \\frac{1}{4}\\mu_0 n^2 S \\ell \\, I_0^2}$$

## (4) 小円環に誘起される起電力
円環を貫く磁束は $\\Phi_{\\text{ring}} = B \\cdot \\pi r^2$。Faraday の法則 $\\mathcal{E} = -d\\Phi_{\\text{ring}}/dt$：
$$\\boxed{\\mathcal{E}(t) = \\mu_0 n \\pi r^2 I_0 \\omega \\sin(\\omega t)}$$

**物理的意味**：変圧器の原理。1次側コイル（ソレノイド）の磁束変化が2次側コイル（小円環）に起電力を誘起。起電力は断面積 $\\pi r^2$ と周波数 $\\omega$ に比例する。` },

  { id: "todai-2024-phys-3", universitySlug: "todai", year: 2024, subject: "物理学", problemNumber: 3,
    title: "スピン1/2と磁気共鳴", field: "quantum", difficulty: "advanced",
    tags: ["Pauli 行列", "Larmor 歳差", "磁気共鳴"], isFree: true,
    statement: `**対応問題**: 東京大学 2024年度 物理学 問3

## 問題の設定
一様磁場 $\\vec{B}_0 = B_0 \\hat{z}$ 中にあるスピン 1/2 粒子（磁気回転比 $\\gamma$）を考える。ハミルトニアンは $\\hat{H}_0 = -\\gamma B_0 \\hat{S}_z$。ここで $\\hat{S}_i = (\\hbar/2)\\sigma_i$（Pauli 行列）。

## 問われている内容
(1) $\\hat{H}_0$ の固有値と固有状態（$\\sigma_z$ 基底）を書け。
(2) 初期状態 $|\\psi(0)\\rangle = |+x\\rangle$（$\\sigma_x$ の $+1$ 固有状態）のとき、時刻 $t$ での状態 $|\\psi(t)\\rangle$ を求めよ。
(3) 期待値 $\\langle \\hat{S}_x(t)\\rangle, \\langle \\hat{S}_y(t)\\rangle$ を計算せよ（Larmor 歳差）。
(4) 追加で $xy$ 平面内で回転する磁場 $\\vec{B}_1(t) = B_1(\\cos\\omega t, \\sin\\omega t, 0)$（$B_1 \\ll B_0$）を加えたとき、$\\omega = \\gamma B_0$ の条件（共鳴条件）で何が起きるか、定性的に説明せよ。`,
    solution: `## (1) $H_0$ の対角化
$\\hat{H}_0 = -\\gamma B_0 (\\hbar/2)\\sigma_z$。固有値は $\\sigma_z$ の $\\pm 1$ から：
- $|+z\\rangle$: $E_+ = -\\hbar\\gamma B_0/2$
- $|-z\\rangle$: $E_- = +\\hbar\\gamma B_0/2$

$\\omega_0 \\equiv \\gamma B_0$ を Larmor 角周波数と呼ぶ。

## (2) 時間発展
$|+x\\rangle = (|+z\\rangle + |-z\\rangle)/\\sqrt{2}$。時間発展 $|\\psi(t)\\rangle = e^{-i\\hat{H}_0 t/\\hbar}|\\psi(0)\\rangle$：
$$|\\psi(t)\\rangle = \\frac{1}{\\sqrt{2}}\\left(e^{i\\omega_0 t/2}|+z\\rangle + e^{-i\\omega_0 t/2}|-z\\rangle\\right)$$

## (3) 期待値（Larmor 歳差）
$\\sigma_x, \\sigma_y$ を $|\\pm z\\rangle$ 基底で展開して計算：
$$\\langle \\hat{S}_x\\rangle = \\frac{\\hbar}{2}\\cos(\\omega_0 t), \\quad \\langle \\hat{S}_y\\rangle = -\\frac{\\hbar}{2}\\sin(\\omega_0 t)$$

**物理的意味**：スピン期待値ベクトルは $xy$ 平面内で角速度 $\\omega_0$ で歳差運動（Larmor 歳差）。古典的な磁気モーメントの Bloch 方程式と一致。

## (4) 共鳴条件
回転系（$\\hat{z}$ まわりに角速度 $\\omega$ で回転）に移ると、$\\omega = \\omega_0$ のとき $\\hat{H}_0$ の寄与が消え、回転磁場 $B_1$ による項だけが残る。これにより微小な $B_1$ でもスピンを反転させる振動（Rabi 振動、角周波数 $\\gamma B_1$）が起こる。$\\omega \\ne \\omega_0$ では離調により反転確率が抑制される。

**応用**：NMR（核磁気共鳴）、MRI の原理。共鳴周波数 $\\omega_0 = \\gamma B_0$ から磁気回転比 $\\gamma$（核種固有）を特定し化学的環境を読み取る。` },

  { id: "todai-2024-phys-4", universitySlug: "todai", year: 2024, subject: "物理学", problemNumber: 4,
    title: "正準集団と Helmholtz 自由エネルギー", field: "statistical", difficulty: "advanced",
    tags: ["分配関数", "Helmholtz 自由エネルギー", "比熱", "理想気体"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2024年度 物理学 問4

## 問題の設定
温度 $T$、体積 $V$ で平衡にある古典理想気体（粒子数 $N$、質量 $m$、内部自由度なし）を正準集団で扱う。Boltzmann 定数 $k_B$、Planck 定数 $h$ とし $\\beta = 1/(k_B T)$。

## 問われている内容
(1) 1 粒子分配関数 $Z_1(T, V)$ を計算し、熱的ド・ブロイ波長 $\\lambda_T = h/\\sqrt{2\\pi m k_B T}$ で表せ。
(2) 同種粒子の区別不可能性を取り入れた全系分配関数 $Z_N$ を書け。
(3) Helmholtz 自由エネルギー $F = -k_B T \\ln Z_N$ を導き、Stirling 近似を用いて示せ。
(4) $F$ から圧力 $P = -(\\partial F/\\partial V)_T$ を導き、状態方程式を確認せよ。`,
    solution: `## (1) 1 粒子分配関数
$$Z_1 = \\frac{1}{h^3}\\int d^3 p \\, d^3 q \\, e^{-\\beta p^2/(2m)} = \\frac{V}{h^3}\\left(\\frac{2\\pi m}{\\beta}\\right)^{3/2} = \\frac{V}{\\lambda_T^3}$$

## (2) 全系分配関数
区別不可能性の補正 $1/N!$ を入れて：
$$Z_N = \\frac{Z_1^N}{N!} = \\frac{1}{N!}\\left(\\frac{V}{\\lambda_T^3}\\right)^N$$

## (3) Helmholtz 自由エネルギー
Stirling 近似 $\\ln N! \\approx N\\ln N - N$ より：
$$F = -k_B T \\ln Z_N = -N k_B T \\left[\\ln\\left(\\frac{V}{N\\lambda_T^3}\\right) + 1\\right]$$

これが古典理想気体の Helmholtz 自由エネルギー（Sackur-Tetrode 型）。

## (4) 状態方程式
$$P = -\\left(\\frac{\\partial F}{\\partial V}\\right)_{T,N} = \\frac{N k_B T}{V}$$

$$\\boxed{PV = N k_B T}$$

**物理的意味**：区別不可能性補正 $1/N!$ が無ければ Gibbs パラドックス（混合エントロピーが理想気体と混合で破綻）。正準集団から統計力学的に状態方程式を導出できることを確認。また $1/N!$ は古典極限 $\\lambda_T \\ll (V/N)^{1/3}$ で妥当（量子統計補正が小さい領域）。` },

  { id: "todai-2024-math-1", universitySlug: "todai", year: 2024, subject: "数学", problemNumber: 1,
    title: "ベクトル解析：発散・回転と Gauss の定理", field: "math", difficulty: "standard",
    tags: ["Gauss の定理", "発散", "回転", "ベクトル場"], isFree: true,
    statement: `**対応問題**: 東京大学 2024年度 数学 問1

## 問われている内容
3 次元空間上のベクトル場 $\\vec{F}(\\vec{r}) = (xy, yz, zx)$ を考える。
(1) $\\nabla \\cdot \\vec{F}$ と $\\nabla \\times \\vec{F}$ をそれぞれ計算せよ。
(2) 単位立方体 $V = \\{0 \\le x, y, z \\le 1\\}$ について、体積積分 $\\int_V (\\nabla\\cdot\\vec{F})\\, dV$ を求めよ。
(3) (2) の結果を Gauss の発散定理で確認するため、立方体の境界面 $\\partial V$ を通る面積分 $\\oint_{\\partial V} \\vec{F}\\cdot d\\vec{S}$ を直接計算せよ。`,
    solution: `## (1) 発散と回転
**発散**：$\\nabla\\cdot\\vec{F} = \\partial_x(xy) + \\partial_y(yz) + \\partial_z(zx) = y + z + x = x + y + z$

**回転**：$(\\nabla\\times\\vec{F})_i = \\epsilon_{ijk}\\partial_j F_k$ から：
- $(\\nabla\\times\\vec{F})_x = \\partial_y(zx) - \\partial_z(yz) = 0 - y = -y$
- $(\\nabla\\times\\vec{F})_y = \\partial_z(xy) - \\partial_x(zx) = 0 - z = -z$
- $(\\nabla\\times\\vec{F})_z = \\partial_x(yz) - \\partial_y(xy) = 0 - x = -x$

$$\\boxed{\\nabla\\cdot\\vec{F} = x+y+z, \\quad \\nabla\\times\\vec{F} = (-y, -z, -x)}$$

## (2) 体積積分
$$\\int_V (x+y+z)\\, dV = \\int_0^1\\!\\!\\int_0^1\\!\\!\\int_0^1 (x+y+z)\\, dx\\, dy\\, dz$$

対称性から各項の寄与は等しい：$\\int_0^1 x\\, dx \\cdot 1 \\cdot 1 = 1/2$、他も同じ。

$$\\boxed{\\int_V (\\nabla\\cdot\\vec{F})\\, dV = 3 \\cdot \\frac{1}{2} = \\frac{3}{2}}$$

## (3) 面積分（直接計算）
立方体の 6 面を調べる。外向き法線 $\\hat{n}$ と $\\vec{F}$ の内積を積分：

| 面 | 座標 | $\\hat{n}$ | $\\vec{F}\\cdot\\hat{n}$ | 積分値 |
|---|---|---|---|---|
| $x=1$ | $0\\le y,z\\le 1$ | $\\hat{x}$ | $xy\\|_{x=1} = y$ | $\\int y\\, dy\\, dz = 1/2$ |
| $x=0$ | " | $-\\hat{x}$ | $-xy\\|_{x=0} = 0$ | 0 |
| $y=1$ | $0\\le x,z\\le 1$ | $\\hat{y}$ | $yz\\|_{y=1} = z$ | $1/2$ |
| $y=0$ | " | $-\\hat{y}$ | 0 | 0 |
| $z=1$ | $0\\le x,y\\le 1$ | $\\hat{z}$ | $zx\\|_{z=1} = x$ | $1/2$ |
| $z=0$ | " | $-\\hat{z}$ | 0 | 0 |

合計：$\\frac{3}{2}$

$$\\boxed{\\oint_{\\partial V}\\vec{F}\\cdot d\\vec{S} = \\frac{3}{2}}$$

$(2)$ と一致し、Gauss の発散定理 $\\int_V \\nabla\\cdot\\vec{F}\\, dV = \\oint_{\\partial V}\\vec{F}\\cdot d\\vec{S}$ が検証された。` },

  { id: "todai-2024-math-2", universitySlug: "todai", year: 2024, subject: "数学", problemNumber: 2,
    title: "2 階線形非同次常微分方程式", field: "math", difficulty: "standard",
    tags: ["常微分方程式", "定数変化法", "特殊解"], isFree: true,
    statement: `**対応問題**: 東京大学 2024年度 数学 問2

## 問われている内容
次の 2 階線形非同次常微分方程式を考える：
$$y''(x) - 3 y'(x) + 2 y(x) = e^{3x}, \\qquad y(0) = 0, \\quad y'(0) = 0$$
(1) 斉次解（$y'' - 3y' + 2y = 0$ の一般解）を求めよ。
(2) 非同次方程式の特殊解を未定係数法で求めよ。
(3) 初期条件を満たす解を書け。`,
    solution: `## (1) 斉次解
特性方程式 $r^2 - 3r + 2 = 0 \\Rightarrow (r-1)(r-2) = 0$ より $r = 1, 2$。
$$y_h(x) = C_1 e^{x} + C_2 e^{2x}$$

## (2) 特殊解（未定係数法）
右辺が $e^{3x}$、$r=3$ は斉次解に含まれないので特殊解を $y_p = A e^{3x}$ と仮定。代入：
$$9 A e^{3x} - 3 \\cdot 3 A e^{3x} + 2 A e^{3x} = (9 - 9 + 2) A e^{3x} = 2 A e^{3x} = e^{3x}$$

$A = 1/2$。
$$y_p(x) = \\frac{1}{2} e^{3x}$$

## (3) 一般解と初期条件
$$y(x) = C_1 e^{x} + C_2 e^{2x} + \\tfrac{1}{2}e^{3x}$$

$y(0) = 0$: $C_1 + C_2 + 1/2 = 0$
$y'(0) = 0$: $C_1 + 2 C_2 + 3/2 = 0$

差を取って $C_2 = -1$。代入して $C_1 = 1/2$。

$$\\boxed{y(x) = \\frac{1}{2}e^{x} - e^{2x} + \\frac{1}{2}e^{3x}}$$

**検算**：$y(0) = 1/2 - 1 + 1/2 = 0$ ✅、$y'(0) = 1/2 - 2 + 3/2 = 0$ ✅。

**物理的意味**：強制減衰系や駆動振動の基本形。$r = 3$ が特性根と縮退する場合（共鳴）は $y_p = A x e^{3x}$ と因子 $x$ を追加する必要がある（本問では非縮退）。` },

  // ---- KYODAI 2024 (+5) ----
  { id: "kyodai-2024-phys-2", universitySlug: "kyodai", year: 2024, subject: "物理学", problemNumber: 2,
    title: "剛体の主慣性モーメントと回転", field: "mechanics", difficulty: "standard",
    tags: ["慣性テンソル", "主軸", "対角化"], isFree: true,
    statement: `**対応問題**: 京都大学 2024年度 物理学 問2

## 問題の設定
一様密度 $\\rho$、質量 $M$、辺の長さ $a, b, c$ の直方体（辺が座標軸に平行）を重心を原点として置く。

## 問われている内容
(1) 重心まわりの慣性テンソル $I_{ij}$ の対角成分 $I_{xx}, I_{yy}, I_{zz}$ を求めよ。非対角成分がゼロとなる理由を簡潔に述べよ。
(2) 角運動量 $\\vec{L} = I\\vec{\\omega}$ と角速度 $\\vec{\\omega}$ の関係を述べ、$\\vec{\\omega} \\parallel \\hat{z}$ のときの回転エネルギーを書け。
(3) $a = b \\ne c$ のとき、$\\vec{\\omega}$ が $xz$ 平面内で $\\hat{z}$ から角度 $\\theta$ 傾いた方向を向いているとすると、$\\vec{L}$ と $\\vec{\\omega}$ の成す角を論ぜよ。`,
    solution: `## (1) 慣性テンソル対角成分
直方体の慣性モーメント：
$$I_{xx} = \\int \\rho(y^2 + z^2)\\, dV = \\frac{M}{12}(b^2 + c^2)$$

同様に：
$$\\boxed{I_{xx} = \\tfrac{M}{12}(b^2+c^2), \\; I_{yy} = \\tfrac{M}{12}(a^2+c^2), \\; I_{zz} = \\tfrac{M}{12}(a^2+b^2)}$$

**非対角成分がゼロ**：$I_{xy} = -\\int \\rho xy\\, dV$。被積分関数 $xy$ は $x \\to -x$ で符号反転、積分域は対称なので結果はゼロ。すなわち直方体の辺方向は既に主軸と一致。

## (2) 回転エネルギー
$\\vec{L} = I\\vec{\\omega}$（テンソル積）。$\\vec{\\omega} = \\omega \\hat{z}$ のとき主軸方向なので：
$$\\vec{L} = I_{zz} \\omega \\hat{z}, \\quad T_{\\text{rot}} = \\tfrac{1}{2}\\vec{\\omega}\\cdot\\vec{L} = \\tfrac{1}{2}I_{zz}\\omega^2$$

## (3) $a = b \\ne c$ の場合
$I_{xx} = I_{yy} \\equiv I_\\perp$、$I_{zz} \\equiv I_\\parallel$、$I_\\perp \\ne I_\\parallel$。

$\\vec{\\omega} = \\omega(\\sin\\theta, 0, \\cos\\theta)$ に対し：
$$\\vec{L} = (I_\\perp \\omega\\sin\\theta, 0, I_\\parallel \\omega\\cos\\theta)$$

$I_\\perp \\ne I_\\parallel$ だと $\\vec{L}$ と $\\vec{\\omega}$ は**平行にならない**。$\\vec{L}$ が $\\hat{z}$ となす角 $\\phi$ は：
$$\\tan\\phi = \\frac{I_\\perp}{I_\\parallel}\\tan\\theta \\ne \\tan\\theta$$

**物理的意味**：主軸以外の方向に回転する非球対称剛体では $\\vec{L}$ と $\\vec{\\omega}$ が傾く。外力なしでは $\\vec{L}$ が保存されるので、$\\vec{\\omega}$ は $\\vec{L}$ のまわりを歳差運動（Euler 方程式による自由歳差、地球の Chandler 摂動の原型）。` },

  { id: "kyodai-2024-phys-3", universitySlug: "kyodai", year: 2024, subject: "物理学", problemNumber: 3,
    title: "ベクトルポテンシャルと磁場", field: "electromagnetism", difficulty: "standard",
    tags: ["ベクトルポテンシャル", "ゲージ変換", "Aharonov-Bohm"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2024年度 物理学 問3

## 問題の設定
真空中のベクトルポテンシャル $\\vec{A}(\\vec{r})$ から磁場 $\\vec{B} = \\nabla\\times\\vec{A}$ を計算する。半径 $R$、無限に長いソレノイド（$z$ 軸方向、内部磁場 $\\vec{B} = B_0 \\hat{z}$、外部 $\\vec{B} = 0$）を考える。円筒座標 $(r, \\phi, z)$ を用いる。

## 問われている内容
(1) 内部 ($r < R$) および外部 ($r > R$) の $\\vec{A}$ を、$\\phi$ 成分のみをもつ形で求めよ（対称性とゲージ選択を明示）。
(2) 外部でも $\\vec{A} \\ne 0$ だが $\\vec{B} = 0$。これは矛盾ではないことを述べよ。
(3) ゲージ変換 $\\vec{A} \\to \\vec{A}' = \\vec{A} + \\nabla\\chi$ で $\\vec{B}$ が不変であることを示せ。
(4) Aharonov-Bohm 効果の物理的意味を、(2) と関連付けて簡潔に述べよ。`,
    solution: `## (1) ベクトルポテンシャル
**対称性**：軸対称 $\\Rightarrow A_\\phi(r)$ のみ、$r, z$ に依存。

**Stokes の定理**：$\\oint \\vec{A}\\cdot d\\vec{l} = \\int \\vec{B}\\cdot d\\vec{S}$。半径 $r$ の円周で計算：
$$2\\pi r \\cdot A_\\phi(r) = \\begin{cases} B_0 \\pi r^2 & (r < R) \\\\ B_0 \\pi R^2 & (r > R) \\end{cases}$$

$$\\boxed{A_\\phi(r) = \\begin{cases} B_0 r/2 & (r < R) \\\\ B_0 R^2/(2r) & (r > R) \\end{cases}}$$

## (2) 外部で $\\vec{A} \\ne 0, \\vec{B} = 0$
$\\vec{B} = \\nabla\\times\\vec{A}$。$\\vec{A}$ が回転（ゼロでない）をもたなければ $\\vec{B} = 0$。外部 $A_\\phi = B_0 R^2/(2r)$ は $\\propto 1/r$ なので、円柱座標の回転公式：
$$(\\nabla\\times\\vec{A})_z = \\frac{1}{r}\\frac{\\partial(r A_\\phi)}{\\partial r} = \\frac{1}{r}\\cdot \\partial_r(B_0 R^2/2) = 0$$

すなわち $\\vec{A} \\ne 0$ でも $\\nabla\\times\\vec{A} = 0$ は共存可能。物理量（磁場）は $\\vec{A}$ 自体ではなく回転で決まる。

## (3) ゲージ不変性
$$\\nabla\\times\\vec{A}' = \\nabla\\times\\vec{A} + \\nabla\\times(\\nabla\\chi) = \\vec{B} + 0 = \\vec{B}$$

（勾配の回転は恒等的にゼロ）。物理的には $\\vec{B}$ は観測量なので $\\chi$ によらない。

## (4) Aharonov-Bohm 効果
古典的には $\\vec{B} = 0$ の領域では荷電粒子に力が働かない。しかし量子的には粒子の位相にベクトルポテンシャルが作用：
$$\\psi \\to \\psi \\exp\\left(\\frac{iq}{\\hbar}\\int\\vec{A}\\cdot d\\vec{l}\\right)$$

ソレノイドの周りを回る経路差で位相差が生じ、干渉縞がシフトする。**$\\vec{A}$ はゲージ任意性を持つが、閉経路線積分 $\\oint\\vec{A}\\cdot d\\vec{l} = \\Phi$（磁束）はゲージ不変で観測可能量**。これが Aharonov-Bohm 効果。1986 年に外村らによって実験的に確認。` },

  { id: "kyodai-2024-phys-4", universitySlug: "kyodai", year: 2024, subject: "物理学", problemNumber: 4,
    title: "理想気体のエントロピーと可逆過程", field: "thermodynamics", difficulty: "standard",
    tags: ["エントロピー", "可逆断熱", "自由膨張"], isFree: true,
    statement: `**対応問題**: 京都大学 2024年度 物理学 問4

## 問題の設定
単原子分子の古典理想気体 $n$ モル（定積比熱 $C_V = (3/2)nR$、気体定数 $R$）を考える。

## 問われている内容
(1) 理想気体の内部エネルギー $U$ を温度 $T$ で表し、状態方程式から $(\\partial U/\\partial V)_T = 0$ を示せ。
(2) 微小可逆過程で $dS = (dU + P\\,dV)/T$ を用い、$S$ を $T, V, n$ の関数として積分形で求めよ（積分定数を $S_0$）。
(3) 可逆断熱変化で $TV^{\\gamma - 1}$ が一定（$\\gamma = 5/3$）であることを (2) から導け。
(4) 断熱自由膨張で体積が $V_1 \\to V_2 = 2V_1$ に膨張するときのエントロピー変化 $\\Delta S$ を計算し、第二法則との整合を確認せよ。`,
    solution: `## (1) 内部エネルギー
単原子理想気体：$U = (3/2)n R T$。等温過程で $U$ は $V$ に依らないので：
$$\\left(\\frac{\\partial U}{\\partial V}\\right)_T = 0$$

（これは理想気体の定義的性質：粒子間相互作用がゼロ）

## (2) エントロピーの積分形
$dS = (dU + P\\,dV)/T$、$dU = C_V\\,dT$、$P = nRT/V$ より：
$$dS = \\frac{C_V}{T}dT + \\frac{nR}{V}dV$$

積分して：
$$\\boxed{S(T, V) = n\\left[\\tfrac{3}{2}R\\ln T + R\\ln V\\right] + S_0}$$

## (3) 可逆断熱変化
可逆断熱では $dS = 0$。(2) から：
$$\\tfrac{3}{2}R\\,d\\ln T + R\\, d\\ln V = 0 \\Rightarrow \\tfrac{3}{2}\\ln T + \\ln V = \\text{const}$$

$$\\ln(T^{3/2} V) = \\text{const} \\Rightarrow T V^{2/3} = \\text{const}$$

$\\gamma - 1 = 2/3$ より（$\\gamma = 5/3$）：
$$\\boxed{T V^{\\gamma - 1} = \\text{const}}$$

## (4) 断熱自由膨張
自由膨張：容器外に仕事せず $W = 0$、熱交換なし $Q = 0 \\Rightarrow \\Delta U = 0 \\Rightarrow T$ 不変。

エントロピー変化は (2) より：
$$\\Delta S = nR \\ln\\frac{V_2}{V_1} = nR \\ln 2 > 0$$

**第二法則との整合**：断熱閉鎖系で $\\Delta S > 0$ → 不可逆過程。自由膨張は逆向きには自発的に進まない（気体が自ら片側に集まる確率は天文学的に小さい）。状態量として $S$ は経路によらないが、可逆過程 vs 不可逆過程で計算方法が異なることに注意（可逆の計算でも同じ端点なら同じ値）。` },

  { id: "kyodai-2024-math-1", universitySlug: "kyodai", year: 2024, subject: "数学", problemNumber: 1,
    title: "線形代数：行列のランクと連立方程式", field: "math", difficulty: "standard",
    tags: ["行列のランク", "連立一次方程式", "Rouché-Capelli"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2024年度 数学 問1

## 問われている内容
行列 $A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & a & 3 \\\\ 1 & 1 & 1 \\end{pmatrix}$ および定数ベクトル $\\vec{b} = (1, b, 1)^T$ を考える。

(1) $\\det A$ を $a$ の関数として求めよ。
(2) $\\text{rank}(A)$ が $a$ の値によってどう変わるかを論ぜよ。
(3) 連立方程式 $A\\vec{x} = \\vec{b}$ が解を持つ条件を、$a, b$ に関する条件として述べよ。`,
    solution: `## (1) 行列式
第 3 列について余因子展開（ $+1, +3, +1$ の係数）：
$$\\det A = 1\\begin{vmatrix} 2 & a \\\\ 1 & 1\\end{vmatrix} - 3\\begin{vmatrix} 1 & 2 \\\\ 1 & 1 \\end{vmatrix} + 1\\begin{vmatrix} 1 & 2 \\\\ 2 & a\\end{vmatrix}$$
$$= 1(2 - a) - 3(1 - 2) + 1(a - 4) = 2 - a + 3 + a - 4 = 1$$

$$\\boxed{\\det A = 1}$$

定数！ $a$ に依らない。

## (2) ランク
$\\det A = 1 \\ne 0$（$a$ 値によらず）、つまり $A$ は常に正則：
$$\\boxed{\\text{rank}(A) = 3 \\quad \\forall a}$$

## (3) 解を持つ条件
$A$ が正則なので拡大係数行列も常にランク 3。Rouché-Capelli の定理から**任意の $a, b$ に対して一意解が存在**：
$$\\vec{x} = A^{-1}\\vec{b}$$

$a, b$ に関する追加条件は不要（常に可解）。

**補足**：もし行列式が $a$ に依存して $a = a^*$ で $\\det = 0$ となる設定なら、ランクの低下を調べて補正条件が必要。本問は $\\det = 1$ 一定なので常に解ける典型例。

**物理的意味**：3 元 3 式の線形系が正則係数行列をもつとき、**存在と一意性が同値**。これは線形代数の基本定理で、物理では連立運動方程式の解析（正規モード分解、線形応答）で頻用。` },

  { id: "kyodai-2024-math-2", universitySlug: "kyodai", year: 2024, subject: "数学", problemNumber: 2,
    title: "Legendre 多項式と直交性", field: "math", difficulty: "advanced",
    tags: ["Legendre 多項式", "直交関数系", "Rodrigues の公式"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2024年度 数学 問2

## 問われている内容
Legendre 多項式 $P_n(x)$ を Rodrigues の公式
$$P_n(x) = \\frac{1}{2^n n!}\\frac{d^n}{dx^n}(x^2 - 1)^n$$
で定義する。

(1) $P_0, P_1, P_2, P_3$ を具体的に求めよ。
(2) 直交性 $\\int_{-1}^{1} P_m(x) P_n(x)\\, dx = \\frac{2}{2n+1}\\delta_{mn}$ を $m < n$ の場合について、部分積分で示せ。
(3) 関数 $f(x) = x^2$ を Legendre 多項式で展開せよ。`,
    solution: `## (1) 具体的計算
- $P_0 = 1$
- $P_1 = \\tfrac{1}{2}\\frac{d}{dx}(x^2 - 1) = x$
- $P_2 = \\tfrac{1}{8}\\frac{d^2}{dx^2}(x^2-1)^2 = \\tfrac{1}{8}\\frac{d^2}{dx^2}(x^4 - 2x^2 + 1) = \\tfrac{1}{8}(12x^2 - 4) = \\tfrac{1}{2}(3x^2 - 1)$
- $P_3 = \\tfrac{1}{48}\\frac{d^3}{dx^3}(x^2-1)^3 = \\tfrac{1}{2}(5x^3 - 3x)$

$$\\boxed{P_0 = 1,\\; P_1 = x,\\; P_2 = \\tfrac{1}{2}(3x^2 - 1),\\; P_3 = \\tfrac{1}{2}(5x^3 - 3x)}$$

## (2) 直交性（$m < n$）
$P_m$ は $m$ 次多項式、$P_n = (1/2^n n!) D^n(x^2-1)^n$（$D = d/dx$）。部分積分を $n$ 回行うと、$D^n$ が $P_m$ に移り、$D^n P_m = 0$（$m < n$、高次微分消失）。表面項は $(x^2 - 1)^n$ とその導関数が $x = \\pm 1$ で消えるので全て落ちる：
$$\\int_{-1}^1 P_m P_n\\, dx = \\frac{(-1)^n}{2^n n!}\\int_{-1}^1 (x^2-1)^n D^n P_m\\, dx = 0$$

## (3) $f(x) = x^2$ の展開
$x^2$ は $P_0$ と $P_2$ の線形結合で書ける。$P_2 = (3x^2 - 1)/2$ から $x^2 = (2 P_2 + 1)/3 = (1/3)P_0 + (2/3)P_2$：
$$\\boxed{x^2 = \\tfrac{1}{3}P_0(x) + \\tfrac{2}{3}P_2(x)}$$

係数確認（内積計算）：$c_n = (2n+1)/2 \\int_{-1}^1 x^2 P_n\\, dx$。
- $c_0 = (1/2)\\int x^2 dx = 1/3$ ✅
- $c_2 = (5/2)\\int x^2 \\cdot (3x^2-1)/2\\, dx = (5/4)\\int (3x^4 - x^2)dx = (5/4)(6/5 - 2/3) = 2/3$ ✅

**物理的意味**：Legendre 多項式は球面調和関数 $Y_\\ell^0 \\propto P_\\ell(\\cos\\theta)$ の角度部分で、軸対称な重力ポテンシャル、量子力学の角運動量 $\\ell$ 固有状態、多重極展開などで中心的役割。直交性は Fourier 展開と同じく、関数空間での "座標系" を提供する。` },

  // ---- TITECH 2024 (+4) ----
  { id: "titech-2024-phys-2", universitySlug: "titech", year: 2024, subject: "物理学", problemNumber: 2,
    title: "剛体振り子と大振動の周期", field: "mechanics", difficulty: "standard",
    tags: ["剛体振り子", "楕円積分", "大振動"], isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2024年度 物理学 問2

## 問題の設定
支点から重心まで距離 $\\ell$、支点まわりの慣性モーメント $I$、質量 $M$ の剛体振り子を、鉛直下方から角度 $\\theta_0$ 傾けて静かに放す。重力加速度 $g$。

## 問われている内容
(1) この振り子の運動方程式を $\\theta$ で書け。
(2) 微小振動近似（$\\theta \\ll 1$）における周期 $T_0$ を求めよ。
(3) エネルギー保存則から $\\dot\\theta$ を $\\theta$ の関数として表せ。
(4) 大振動周期 $T(\\theta_0)$ を、$\\sin(\\theta/2) = \\sin(\\theta_0/2)\\sin u$ の置換を使って楕円積分の形で書け。$\\theta_0 \\to 0$ で $T_0$ に一致することを確認せよ。`,
    solution: `## (1) 運動方程式
支点まわりの回転運動方程式。重力のトルクは $-Mg\\ell\\sin\\theta$：
$$\\boxed{I\\ddot\\theta = -Mg\\ell\\sin\\theta}$$

## (2) 微小振動
$\\sin\\theta \\approx \\theta$：
$$I\\ddot\\theta \\approx -Mg\\ell\\theta \\Rightarrow \\omega_0^2 = \\frac{Mg\\ell}{I}$$
$$\\boxed{T_0 = 2\\pi\\sqrt{\\frac{I}{Mg\\ell}}}$$

## (3) エネルギー保存
全エネルギー：$E = (1/2)I\\dot\\theta^2 + Mg\\ell(1 - \\cos\\theta)$。$\\theta = \\theta_0, \\dot\\theta = 0$ で $E = Mg\\ell(1-\\cos\\theta_0)$：
$$\\dot\\theta^2 = \\frac{2Mg\\ell}{I}(\\cos\\theta - \\cos\\theta_0)$$

$\\cos\\theta = 1 - 2\\sin^2(\\theta/2)$ を使うと：
$$\\boxed{\\dot\\theta = \\omega_0 \\cdot 2\\sqrt{\\sin^2(\\theta_0/2) - \\sin^2(\\theta/2)}}$$

## (4) 大振動周期
周期の 1/4 は $\\theta = 0 \\to \\theta_0$ の時間：
$$T/4 = \\int_0^{\\theta_0}\\frac{d\\theta}{\\dot\\theta} = \\frac{1}{2\\omega_0}\\int_0^{\\theta_0}\\frac{d\\theta}{\\sqrt{\\sin^2(\\theta_0/2) - \\sin^2(\\theta/2)}}$$

$k \\equiv \\sin(\\theta_0/2)$、$\\sin(\\theta/2) = k\\sin u$（$d\\theta = 2k\\cos u\\, du/\\cos(\\theta/2)$）の置換で：
$$\\boxed{T(\\theta_0) = \\frac{4}{\\omega_0}\\int_0^{\\pi/2}\\frac{du}{\\sqrt{1 - k^2\\sin^2 u}} = \\frac{4}{\\omega_0} K(k)}$$

（$K$ は第一種完全楕円積分）

**極限**：$\\theta_0 \\to 0 \\Rightarrow k \\to 0, K \\to \\pi/2$、$T \\to 2\\pi/\\omega_0 = T_0$ ✅。

**補正**：$k$ の Taylor 展開から $T \\approx T_0(1 + \\theta_0^2/16 + \\cdots)$。大振幅では周期は長くなる（振幅依存）。これは非線形振動の典型。` },

  { id: "titech-2024-phys-3", universitySlug: "titech", year: 2024, subject: "物理学", problemNumber: 3,
    title: "ラプラス方程式と静電境界値問題", field: "electromagnetism", difficulty: "advanced",
    tags: ["ラプラス方程式", "境界値問題", "変数分離"], isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2024年度 物理学 問3

## 問題の設定
真空中に置かれた半径 $a$ の導体球を一様電場 $\\vec{E}_0 = E_0 \\hat{z}$ 中に置く。球の電位は接地されて $V = 0$。

## 問われている内容
(1) 外部 $(r > a)$ で電位 $V(r, \\theta)$ が満たす方程式と境界条件を書け（$\\theta$ は $z$ 軸からの極角）。
(2) 軸対称性から $V = \\sum_\\ell (A_\\ell r^\\ell + B_\\ell r^{-\\ell - 1}) P_\\ell(\\cos\\theta)$ を仮定し、境界条件から $A_\\ell, B_\\ell$ を決定せよ。
(3) 球面上の誘導電荷面密度 $\\sigma(\\theta)$ を求め、総電荷がゼロであることを確認せよ。`,
    solution: `## (1) 方程式と境界条件
外部は電荷なし → **ラプラス方程式** $\\nabla^2 V = 0$。境界条件：
- 球表面: $V(a, \\theta) = 0$
- 遠方: $V \\to -E_0 r\\cos\\theta$（一様電場のポテンシャル）

## (2) 係数決定
$P_1(\\cos\\theta) = \\cos\\theta$ なので、遠方条件は $A_1 r \\cos\\theta \\to -E_0 r\\cos\\theta$、すなわち $A_1 = -E_0$。他の $A_\\ell = 0$（$\\ell \\ne 1$）。

球表面条件 $V(a) = 0$ を各 $\\ell$ で満たすには：
$A_\\ell a^\\ell + B_\\ell/a^{\\ell+1} = 0 \\Rightarrow B_\\ell = -A_\\ell a^{2\\ell+1}$

$\\ell = 1$: $B_1 = E_0 a^3$。$\\ell \\ne 1$: $A_\\ell = 0 \\Rightarrow B_\\ell = 0$。

$$\\boxed{V(r, \\theta) = -E_0 \\left(r - \\frac{a^3}{r^2}\\right)\\cos\\theta}$$

## (3) 誘導面電荷
$\\sigma = -\\varepsilon_0(\\partial V/\\partial r)_{r=a}$：
$$\\partial V/\\partial r = -E_0(1 + 2a^3/r^3)\\cos\\theta$$
$r = a$ で：$-E_0(1 + 2)\\cos\\theta = -3E_0\\cos\\theta$

$$\\boxed{\\sigma(\\theta) = 3\\varepsilon_0 E_0 \\cos\\theta}$$

**総電荷**：
$$Q = \\oint \\sigma\\, dS = \\int_0^{\\pi}3\\varepsilon_0 E_0\\cos\\theta \\cdot 2\\pi a^2\\sin\\theta\\, d\\theta = 0$$

（$\\int_0^{\\pi}\\cos\\theta\\sin\\theta\\, d\\theta = 0$）。

**物理的意味**：導体球は外部電場を歪めて双極子的に応答。$1/r^2$ 項は誘起双極子モーメント $\\vec{p} = 4\\pi\\varepsilon_0 a^3 \\vec{E}_0$ による寄与。分極率 $\\alpha = 4\\pi\\varepsilon_0 a^3$ は原子・分子の Lorentz モデルで同形。` },

  { id: "titech-2024-phys-4", universitySlug: "titech", year: 2024, subject: "物理学", problemNumber: 4,
    title: "ヘリウム原子と電子相関", field: "quantum", difficulty: "advanced",
    tags: ["ヘリウム原子", "電子-電子相互作用", "変分法", "摂動論"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2024年度 物理学 問4

## 問題の設定
ヘリウム原子（$Z = 2$、電子 2 個）の基底状態エネルギーを摂動論で求める。ハミルトニアンは水素様項 $\\hat{H}_0 = \\hat{H}_1 + \\hat{H}_2$（個別に水素原子様、$Z=2$）と、電子間斥力 $\\hat{V} = e^2/(4\\pi\\varepsilon_0 |\\vec{r}_1 - \\vec{r}_2|)$。$E_H = e^2/(4\\pi\\varepsilon_0 a_0) \\cdot (1/2) = 13.6\\,\\text{eV}$（水素 Rydberg）、$a_0 = $ Bohr 半径。

## 問われている内容
(1) 摂動無視した基底状態エネルギー $E_0^{(0)}$ を、水素様 $(Z=2, n=1)$ の結果から書け。
(2) 1 次摂動補正 $E_0^{(1)} = \\langle \\phi_0 | \\hat{V} | \\phi_0\\rangle$ を、結果 $(5Z/8)E_H$ として提示（導出は略可、因子の起源を説明）。
(3) 1 次摂動まででのエネルギー $E_0^{(0)} + E_0^{(1)}$ と実験値 $-79.0\\,\\text{eV}$ の比較を行え。
(4) 変分法で 1 電子の有効電荷 $Z_{\\text{eff}}$ を試行パラメータとすると、最適 $Z_{\\text{eff}} < 2$ となる物理的理由を述べよ。`,
    solution: `## (1) 無摂動エネルギー
水素様 $(Z, n=1)$ で $E_n = -Z^2 E_H$。2 電子分の合計：
$$E_0^{(0)} = 2 \\cdot (-Z^2 E_H) = -2 \\cdot 4 \\cdot 13.6 = -108.8\\,\\text{eV}$$

## (2) 1 次摂動補正
基底状態波動関数 $\\phi_0 = \\psi_{1s}(\\vec{r}_1)\\psi_{1s}(\\vec{r}_2)$（各電子が水素様 1s、スピンシングレット）。$\\langle 1/|\\vec{r}_1 - \\vec{r}_2|\\rangle$ は 1s 軌道の二重積分で計算でき、結果：
$$E_0^{(1)} = \\frac{5Z}{8}E_H \\quad (Z=2 \\Rightarrow = 34.0\\,\\text{eV})$$

**係数 $5/8$ の起源**：水素様 1s の動径分布 $\\propto e^{-Zr/a_0}$ で $\\langle 1/r_{12}\\rangle$ を評価すると、球対称性の積分が $Ze^2/(a_0) \\cdot 5/8$。

## (3) 実験値との比較
$E_0^{(0)} + E_0^{(1)} = -108.8 + 34.0 = -74.8\\,\\text{eV}$

実験値 $-79.0\\,\\text{eV}$ と比較して誤差 $+4.2\\,\\text{eV}$（約 5%）。1 次摂動としては良い近似。

## (4) 変分法での有効電荷
試行関数 $\\psi \\propto e^{-Z_{\\text{eff}} r/a_0}$ でエネルギーを最小化：
$$E(Z_{\\text{eff}}) = (Z_{\\text{eff}}^2 - 2Z Z_{\\text{eff}} + 5 Z_{\\text{eff}}/8)E_H \\cdot 2$$

$dE/dZ_{\\text{eff}} = 0$ から $Z_{\\text{eff}} = Z - 5/16 = 27/16 \\approx 1.69$。

**物理的意味**：相方電子の電荷雲が核電荷を**遮蔽**し、実効的な核電荷が減少する（遮蔽効果 screening）。これにより 1 電子軌道が少し広がる方がエネルギー的に得。最適 $Z_{\\text{eff}} = 27/16$ で $E \\approx -77.5\\,\\text{eV}$、実験値に更に近づく。多電子原子の Hartree-Fock 自己無撞着場の原型。` },

  { id: "titech-2024-phys-5", universitySlug: "titech", year: 2024, subject: "物理学", problemNumber: 5,
    title: "エントロピーと熱力学第二法則", field: "thermodynamics", difficulty: "standard",
    tags: ["エントロピー", "熱平衡", "熱機関"], isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2024年度 物理学 問5

## 問題の設定
熱容量 $C$（一定）の物体 A（初期温度 $T_H$）と物体 B（初期温度 $T_L$、$T_H > T_L$）を接触させて熱平衡に達するまで放置する。外部との熱交換はなし。

## 問われている内容
(1) 最終平衡温度 $T_f$ を求めよ。
(2) 全系のエントロピー変化 $\\Delta S_{\\text{total}}$ を $T_H, T_L$ で表せ。
(3) $\\Delta S_{\\text{total}} > 0$ を示せ（算術幾何平均不等式を使う）。
(4) 代わりに A と B の間で可逆熱機関を運転し最大仕事 $W_{\\max}$ を取り出す場合、$W_{\\max}$ と (2) の結果の関係を論ぜよ。`,
    solution: `## (1) 平衡温度
熱容量一定の熱平衡：A が失った熱 = B が得た熱
$$C(T_H - T_f) = C(T_f - T_L) \\Rightarrow T_f = \\frac{T_H + T_L}{2}$$

## (2) エントロピー変化
$$\\Delta S_A = \\int_{T_H}^{T_f}\\frac{C\\, dT}{T} = C\\ln\\frac{T_f}{T_H}$$
$$\\Delta S_B = C\\ln\\frac{T_f}{T_L}$$

$$\\boxed{\\Delta S_{\\text{total}} = C\\ln\\frac{T_f^2}{T_H T_L} = C\\ln\\frac{(T_H + T_L)^2}{4 T_H T_L}}$$

## (3) 正値性
AM-GM 不等式：$T_H + T_L \\ge 2\\sqrt{T_H T_L}$（等号は $T_H = T_L$）。したがって：
$$(T_H + T_L)^2 \\ge 4 T_H T_L \\Rightarrow \\frac{(T_H+T_L)^2}{4 T_H T_L} \\ge 1$$

$\\ln(\\text{≥1}) \\ge 0$、$T_H \\ne T_L$ なら厳密不等号 → $\\Delta S_{\\text{total}} > 0$。熱伝導は不可逆過程。

## (4) 可逆熱機関
可逆過程では $\\Delta S_{\\text{total}} = 0$。微小熱機関が A から $dQ_H$、B へ $dQ_L$ を渡し $dW = dQ_H - dQ_L$ を取り出す。可逆性（Carnot 効率）条件：
$$dQ_H/T_A = dQ_L/T_B$$

最終的に共通温度 $T_f^{\\text{rev}}$ に達する。$\\Delta S_A + \\Delta S_B = 0$ を解くと：
$$T_f^{\\text{rev}} = \\sqrt{T_H T_L}$$（幾何平均）

最大仕事：
$$W_{\\max} = C(T_H + T_L - 2\\sqrt{T_H T_L}) = C(\\sqrt{T_H} - \\sqrt{T_L})^2$$

**関係**：不可逆熱伝導では $W = 0$、エントロピー増加分 $\\Delta S_{\\text{total}}$ が "失われた仕事" に対応。熱力学第二法則の定量化。$W_{\\max}$ は AM-GM 不等式の差そのもの。` },

  // ---- TOHOKU 2024 (+4) ----
  { id: "tohoku-2024-phys-2", universitySlug: "tohoku", year: 2024, subject: "物理学", problemNumber: 2,
    title: "鏡像法と導体平面", field: "electromagnetism", difficulty: "advanced",
    tags: ["鏡像法", "無限導体平面", "誘導電荷"], isFree: true,
    statement: `**対応問題**: 東北大学 2024年度 物理学 問2

## 問題の設定
無限に広がる接地された導体平面（$z = 0$）の上方 $z = d > 0$ に点電荷 $q > 0$ を置く。真空の誘電率 $\\varepsilon_0$。

## 問われている内容
(1) 鏡像法による電位 $V(x, y, z)$ を求めよ（$z > 0$ の領域で）。
(2) 導体平面上の誘導面電荷密度 $\\sigma(x, y)$ を求めよ。
(3) 平面上に誘起された全電荷を積分により計算せよ。
(4) 点電荷 $q$ と導体平面の間に作用する力の大きさと向きを求めよ。`,
    solution: `## (1) 鏡像電荷と電位
$z = -d$ に鏡像電荷 $-q$ を置くと、$z = 0$ で電位が $0$ となる。$z > 0$ 領域での電位：
$$V(\\vec{r}) = \\frac{q}{4\\pi\\varepsilon_0}\\left[\\frac{1}{\\sqrt{x^2 + y^2 + (z-d)^2}} - \\frac{1}{\\sqrt{x^2 + y^2 + (z+d)^2}}\\right]$$

## (2) 誘導面電荷密度
$\\sigma = -\\varepsilon_0 (\\partial V/\\partial z)_{z=0}$。計算すると（$\\rho^2 = x^2 + y^2$）：
$$\\sigma(\\rho) = -\\frac{qd}{2\\pi(\\rho^2 + d^2)^{3/2}}$$

点電荷直下 $\\rho = 0$ で最大（負の値）、遠方で $1/\\rho^3$ で減衰。

## (3) 総誘導電荷
$$Q_{\\text{ind}} = \\int_0^{\\infty}\\sigma(\\rho) \\cdot 2\\pi\\rho\\, d\\rho = -qd\\int_0^{\\infty}\\frac{\\rho\\, d\\rho}{(\\rho^2 + d^2)^{3/2}}$$

$u = \\rho^2 + d^2$ と置換：
$$= -qd \\cdot [-1/\\sqrt{u}]_{d^2}^{\\infty} \\cdot \\tfrac{1}{2} \\cdot 2 = -q$$

$$\\boxed{Q_{\\text{ind}} = -q}$$

## (4) 作用力
鏡像法では、点電荷 $q$ が鏡像 $-q$ から受けるクーロン力として計算：
$$F = \\frac{q \\cdot q}{4\\pi\\varepsilon_0 (2d)^2} = \\frac{q^2}{16\\pi\\varepsilon_0 d^2}$$

向きは導体平面に向かう**引力**（鏡像電荷は反対符号）。

**注意**：$z > 0$ 領域のエネルギーは $W = -q^2/(16\\pi\\varepsilon_0 d)$（実電荷のみを考える場合）で、2 電荷系 $W = -q^2/(8\\pi\\varepsilon_0 d)$ の半分。導体の鏡像法は静電的効果を等価な仮想電荷で置き換える強力な手法。` },

  { id: "tohoku-2024-phys-3", universitySlug: "tohoku", year: 2024, subject: "物理学", problemNumber: 3,
    title: "有限井戸型ポテンシャルと束縛状態", field: "quantum", difficulty: "standard",
    tags: ["有限井戸", "束縛状態", "超越方程式"], isFree: true,
    statement: `**対応問題**: 東北大学 2024年度 物理学 問3

## 問題の設定
1 次元ポテンシャル
$$V(x) = \\begin{cases} -V_0 & (|x| < a) \\\\ 0 & (|x| > a) \\end{cases}$$
（$V_0 > 0$）中の質量 $m$ の粒子の束縛状態 ($-V_0 < E < 0$) を考える。

## 問われている内容
(1) 内部と外部のシュレーディンガー方程式を書き、内部の波数 $k$ と外部の減衰定数 $\\kappa$ を定義せよ。
(2) 偶関数解 $\\psi(x) = \\psi(-x)$ の境界接続条件から束縛状態の超越方程式を導け。
(3) 奇関数解についても同様に導け。
(4) 束縛状態が常に少なくとも 1 つ存在することを示せ（偶関数解）。`,
    solution: `## (1) 波数と減衰定数
$E < 0$ とする。$\\hbar^2 k^2/(2m) = E + V_0 > 0 \\Rightarrow k = \\sqrt{2m(E+V_0)}/\\hbar$
$\\hbar^2 \\kappa^2/(2m) = -E > 0 \\Rightarrow \\kappa = \\sqrt{-2mE}/\\hbar$

内部：$\\psi = A\\cos kx$ または $B\\sin kx$、外部：$\\psi = Ce^{-\\kappa|x|}$

## (2) 偶関数解の超越方程式
$\\psi_{\\text{in}} = A\\cos(kx), \\psi_{\\text{out}} = Ce^{-\\kappa x}$ ($x > a$)。$x = a$ で波動関数と微分の接続：
- $A\\cos(ka) = Ce^{-\\kappa a}$
- $-Ak\\sin(ka) = -C\\kappa e^{-\\kappa a}$

第 2 式 ÷ 第 1 式：
$$\\boxed{k\\tan(ka) = \\kappa \\quad (\\text{偶関数})}$$

## (3) 奇関数解
$\\psi_{\\text{in}} = B\\sin(kx)$。同様に：
$$\\boxed{k\\cot(ka) = -\\kappa \\quad (\\text{奇関数})}$$

あるいは $k\\cot(ka) = -\\kappa$ の両辺を $-1$ 倍して $-k\\cot(ka) = \\kappa$。

## (4) 束縛状態の存在証明
$(k, \\kappa)$ は $k^2 + \\kappa^2 = 2mV_0/\\hbar^2 \\equiv R^2$（円）を満たす。

偶関数解の条件 $k\\tan(ka) = \\kappa$ と円 $k^2 + \\kappa^2 = R^2$ のグラフ的交点を探す。$k = 0$ で $\\tan(ka) = 0 \\ne \\infty$ なので $\\kappa = 0$（左端）、$k = R$ で $\\kappa = 0$（右端）。連続性から必ず 1 点以上で交わる → **少なくとも 1 つの偶関数束縛状態が存在**。

**物理的意味**：1 次元引力ポテンシャルは必ず束縛状態を持つ（3 次元以上と異なる結論。3 次元では $V_0$ が閾値以下だと束縛状態ゼロ）。奇関数束縛状態は $R > \\pi/(2a)$ でのみ出現。井戸が浅いときは偶関数基底状態のみ。` },

  { id: "tohoku-2024-phys-4", universitySlug: "tohoku", year: 2024, subject: "物理学", problemNumber: 4,
    title: "Bose-Einstein 分布と理想 Bose 気体", field: "statistical", difficulty: "advanced",
    tags: ["Bose-Einstein 統計", "化学ポテンシャル", "BEC"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2024年度 物理学 問4

## 問題の設定
粒子数 $N$、体積 $V$ の非相対論的スピン 0 理想 Bose 気体（質量 $m$）を温度 $T$ で扱う。化学ポテンシャル $\\mu$、$\\beta = 1/(k_B T)$。

## 問われている内容
(1) Bose-Einstein 分布 $f(\\varepsilon) = 1/(e^{\\beta(\\varepsilon - \\mu)} - 1)$ で $\\mu \\le 0$ でなければならない理由を述べよ。
(2) 状態密度 $g(\\varepsilon) = V(2m/\\hbar^2)^{3/2}\\sqrt{\\varepsilon}/(4\\pi^2)$ を用いて、$\\mu = 0$ での臨界粒子数 $N_c(T)$ を
$$N_c(T) = V \\zeta(3/2)\\left(\\frac{m k_B T}{2\\pi\\hbar^2}\\right)^{3/2}$$
として提示せよ（係数の起源を簡単に示す）。
(3) $N > N_c(T)$ のとき Bose-Einstein 凝縮 (BEC) が起き、基底状態に巨視的占有が現れることを説明せよ。
(4) 臨界温度 $T_c$ を粒子密度 $n = N/V$ で表せ。`,
    solution: `## (1) $\\mu \\le 0$ の理由
$f(\\varepsilon) \\ge 0$（占有数は非負）が必要。$\\varepsilon = 0$ が基底状態。$f(0) = 1/(e^{-\\beta\\mu} - 1) \\ge 0 \\Rightarrow e^{-\\beta\\mu} > 1 \\Rightarrow \\mu < 0$（または極限 $\\mu = 0$）。$\\mu > 0$ だと $f$ が発散または負になる。

## (2) 臨界粒子数
$\\mu \\to 0^-$ での励起状態総粒子数：
$$N_{\\text{exc}}(T) = \\int_0^\\infty g(\\varepsilon)\\,f(\\varepsilon)\\,d\\varepsilon$$

$g(\\varepsilon) = \\frac{V(2m)^{3/2}}{4\\pi^2\\hbar^3}\\sqrt{\\varepsilon}$、$x = \\beta\\varepsilon$ で無次元化：
$$N_c = \\frac{V(2m k_B T)^{3/2}}{4\\pi^2\\hbar^3}\\int_0^\\infty\\frac{\\sqrt{x}\\,dx}{e^x - 1}$$

$\\int_0^\\infty \\sqrt{x}/(e^x - 1)\\, dx = \\Gamma(3/2)\\zeta(3/2) = (\\sqrt{\\pi}/2)\\zeta(3/2)$。整理：
$$N_c(T) = V\\zeta(3/2)\\left(\\frac{m k_B T}{2\\pi\\hbar^2}\\right)^{3/2}$$

$\\zeta(3/2) \\approx 2.612$。熱的波長 $\\lambda_T = \\sqrt{2\\pi\\hbar^2/(m k_B T)}$ を使うと $N_c/V = \\zeta(3/2)/\\lambda_T^3$。

## (3) BEC
$N > N_c(T)$ では、励起状態に入り切れない $N - N_c$ 個の粒子が**基底状態に凝縮**：
$$N_0 = N - N_c(T) = N\\left[1 - (T/T_c)^{3/2}\\right]$$

（$T < T_c$）。これが Bose-Einstein 凝縮。基底状態の占有数がマクロ（$\\propto N$）になる相転移。

## (4) 臨界温度
$N = N_c(T_c)$ を $T_c$ で解いて：
$$k_B T_c = \\frac{2\\pi\\hbar^2}{m}\\left(\\frac{n}{\\zeta(3/2)}\\right)^{2/3}$$

**物理的意味**：BEC は 1924 年に Einstein が予言、1995 年に Cornell・Ketterle らが希薄原子気体 (Rb, Na) で初めて観測（ノーベル賞 2001）。超流動ヘリウム、超伝導（クーパー対の BEC）、レーザー冷却原子など多くの現象の基礎概念。` },

  { id: "tohoku-2024-phys-5", universitySlug: "tohoku", year: 2024, subject: "物理学", problemNumber: 5,
    title: "単スリット回折と Fraunhofer 近似", field: "optics", difficulty: "standard",
    tags: ["単スリット", "Fraunhofer 回折", "sinc 関数"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2024年度 物理学 問5

## 問題の設定
幅 $a$ の単スリットに波長 $\\lambda$ の平面波（振幅 $E_0$）が垂直入射する。スリットから十分離れた点 $P$（スリット中心からの角度 $\\theta$）での強度を考える (Fraunhofer 近似)。

## 問われている内容
(1) 点 $P$ での電場 $E(\\theta)$ を Huygens 原理から積分で書け。
(2) 積分を実行し、強度 $I(\\theta) = |E(\\theta)|^2$ を sinc 関数で表せ。
(3) 強度の最初の暗線となる角度 $\\theta_1$ を求めよ。
(4) 中央主極大の角度幅 $\\Delta\\theta$ を、$a$ と $\\lambda$ の関数で述べよ。解像限界（Rayleigh 基準）との関連を言及。`,
    solution: `## (1) 電場の積分形
スリット上の位置 $y$（$-a/2 \\le y \\le a/2$）から $P$ への行路差は $y\\sin\\theta$。位相 $k y\\sin\\theta$（$k = 2\\pi/\\lambda$）：
$$E(\\theta) \\propto \\int_{-a/2}^{a/2} e^{iky\\sin\\theta}\\, dy$$

## (2) 強度
積分を実行：
$$E(\\theta) \\propto \\frac{e^{ika\\sin\\theta/2} - e^{-ika\\sin\\theta/2}}{ik\\sin\\theta} = a\\cdot\\frac{\\sin(\\alpha)}{\\alpha}, \\quad \\alpha \\equiv \\frac{ka\\sin\\theta}{2} = \\frac{\\pi a\\sin\\theta}{\\lambda}$$

強度：
$$\\boxed{I(\\theta) = I_0\\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 = I_0\\,\\text{sinc}^2\\left(\\frac{\\pi a\\sin\\theta}{\\lambda}\\right)}$$

$I_0 = I(\\theta = 0)$。

## (3) 最初の暗線
$\\sin\\alpha = 0$（$\\alpha \\ne 0$）。$\\alpha = \\pi$ のとき：
$$\\frac{\\pi a \\sin\\theta_1}{\\lambda} = \\pi \\Rightarrow \\sin\\theta_1 = \\frac{\\lambda}{a}$$

$$\\boxed{\\theta_1 \\approx \\lambda/a}$$（小角近似）

## (4) 主極大の角幅と Rayleigh 基準
中央主極大は $\\theta \\in (-\\theta_1, \\theta_1)$ に集中：
$$\\Delta\\theta \\approx 2\\lambda/a$$

**Rayleigh 基準**：2 つの点光源が分離可能な最小角は、1 つの主極大が他の最初の暗線に重なるとき：
$$\\theta_{\\text{min}} \\approx \\lambda/a$$

望遠鏡の分解能（口径 $a$）、顕微鏡の解像度、電子顕微鏡の波長優位性などの基礎。光の波動性が観測限界を決める普遍則。` },

  // ---- OSAKA 2024 (+5) ----
  { id: "osaka-2024-phys-2", universitySlug: "osaka", year: 2024, subject: "物理学", problemNumber: 2,
    title: "電磁誘導と渦電流", field: "electromagnetism", difficulty: "standard",
    tags: ["Faraday の法則", "渦電流", "Lenz の法則"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2024年度 物理学 問2

## 問題の設定
抵抗率 $\\rho$、厚さ $d$ の導体平板が一様磁場 $\\vec{B}(t) = B_0\\cos(\\omega t)\\hat{z}$ 中に置かれている（平板は $xy$ 平面に平行）。平板を半径 $a$ の円盤とする。

## 問われている内容
(1) 渦電流の流れ方向を Lenz の法則から説明せよ。
(2) 半径 $r$ の同心円に沿った誘導起電力 $\\mathcal{E}(r, t)$ を求めよ。
(3) $r$ から $r + dr$ の微小円環領域に流れる電流 $dI(r, t)$ を求めよ。
(4) 円盤全体で消費される時間平均電力 $\\langle P \\rangle$ を求めよ。`,
    solution: `## (1) 渦電流の向き
Lenz の法則：誘導電流は磁束変化を打ち消す向き。$B$ が増加（$\\cos$ 減少段階）するとき、電流は $-\\hat{z}$ 方向の磁場を作る向き（上から見て時計回り）に流れる。$B$ 減少時は反時計回り。

## (2) 誘導起電力
半径 $r$ の円の磁束：$\\Phi(r) = B(t)\\pi r^2$。Faraday の法則：
$$\\mathcal{E}(r, t) = -\\frac{d\\Phi}{dt} = B_0\\omega\\sin(\\omega t)\\pi r^2$$

## (3) 微小円環の電流
厚さ $d$、半径 $r$、幅 $dr$ の円環の抵抗：$dR = 2\\pi r \\rho/(d\\cdot dr)$。オームの法則：
$$dI = \\mathcal{E}/dR = \\frac{B_0\\omega\\sin(\\omega t)\\pi r^2 \\cdot d\\cdot dr}{2\\pi r\\rho} = \\frac{B_0\\omega\\sin(\\omega t)\\cdot d\\cdot r\\, dr}{2\\rho}$$

## (4) 消費電力
微小円環での瞬時消費電力：$dP = \\mathcal{E}\\cdot dI = (B_0\\omega\\sin\\omega t\\cdot\\pi r^2)(B_0\\omega\\sin\\omega t\\cdot d r/(2\\rho)) dr$
$$dP = \\frac{\\pi B_0^2\\omega^2 d \\sin^2(\\omega t)}{2\\rho} r^3\\, dr$$

全円盤で積分：$\\int_0^a r^3\\, dr = a^4/4$。時間平均 $\\langle \\sin^2\\rangle = 1/2$：
$$\\boxed{\\langle P\\rangle = \\frac{\\pi B_0^2\\omega^2 d\\, a^4}{16\\rho}}$$

**物理的意味**：$\\langle P\\rangle \\propto \\omega^2 a^4/\\rho$。高周波・大面積・低抵抗率で発熱が大きい。**応用**：誘導加熱（IH クッキング、金属溶解）、電磁ブレーキ（鉄道の渦電流制動）。逆に変圧器鉄心は**積層構造**で渦電流を抑制し、効率を上げている。` },

  { id: "osaka-2024-phys-3", universitySlug: "osaka", year: 2024, subject: "物理学", problemNumber: 3,
    title: "調和振動子のコヒーレント状態", field: "quantum", difficulty: "advanced",
    tags: ["コヒーレント状態", "生成消滅演算子", "不確定性"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2024年度 物理学 問3

## 問題の設定
1 次元調和振動子（角振動数 $\\omega$、質量 $m$）に、消滅演算子 $\\hat{a}$ の固有状態 $|\\alpha\\rangle$（$\\hat{a}|\\alpha\\rangle = \\alpha|\\alpha\\rangle$、$\\alpha \\in \\mathbb{C}$）を**コヒーレント状態**と呼ぶ。

## 問われている内容
(1) 数状態 $|n\\rangle$ を用いて $|\\alpha\\rangle$ の展開係数 $c_n = \\langle n|\\alpha\\rangle$ を求めよ（$\\hat{a}|n\\rangle = \\sqrt{n}|n-1\\rangle$ を使用）。規格化条件 $\\langle\\alpha|\\alpha\\rangle = 1$ から $c_0$ の絶対値を決定。
(2) コヒーレント状態における粒子数分布 $|c_n|^2$ を示し、これが Poisson 分布となることを示せ。
(3) コヒーレント状態での $\\hat{x}, \\hat{p}$ の期待値と分散を計算し、Heisenberg の不確定性関係 $\\Delta x \\Delta p \\ge \\hbar/2$ の等号が成立することを示せ。
(4) コヒーレント状態が「最も古典的な量子状態」と呼ばれる理由を述べよ。`,
    solution: `## (1) 展開係数
$\\hat{a}|\\alpha\\rangle = \\alpha|\\alpha\\rangle$ を $|\\alpha\\rangle = \\sum c_n |n\\rangle$ に作用：
$$\\sum c_n \\sqrt{n}|n-1\\rangle = \\alpha\\sum c_n |n\\rangle$$

添字を合わせて $\\sqrt{n+1}c_{n+1} = \\alpha c_n \\Rightarrow c_n = \\alpha^n c_0/\\sqrt{n!}$。

規格化：$\\sum |c_n|^2 = |c_0|^2 \\sum |\\alpha|^{2n}/n! = |c_0|^2 e^{|\\alpha|^2} = 1$：
$$|c_0| = e^{-|\\alpha|^2/2}$$

$$\\boxed{|\\alpha\\rangle = e^{-|\\alpha|^2/2}\\sum_{n=0}^\\infty \\frac{\\alpha^n}{\\sqrt{n!}}|n\\rangle}$$

## (2) Poisson 分布
$$P(n) = |c_n|^2 = e^{-|\\alpha|^2}\\frac{|\\alpha|^{2n}}{n!}$$

これは平均 $\\langle n\\rangle = |\\alpha|^2$ の Poisson 分布。分散も $|\\alpha|^2$（Poisson 統計の特徴、$\\Delta n = |\\alpha|$）。

## (3) 期待値と分散
$\\hat{x} = \\sqrt{\\hbar/(2m\\omega)}(\\hat{a} + \\hat{a}^\\dagger)$、$\\hat{p} = i\\sqrt{m\\hbar\\omega/2}(\\hat{a}^\\dagger - \\hat{a})$。

$\\hat{a}|\\alpha\\rangle = \\alpha|\\alpha\\rangle$、$\\langle\\alpha|\\hat{a}^\\dagger = \\langle\\alpha|\\alpha^*$ から：
- $\\langle\\hat{x}\\rangle = \\sqrt{\\hbar/(2m\\omega)}(\\alpha + \\alpha^*) = \\sqrt{2\\hbar/(m\\omega)}\\text{Re}(\\alpha)$
- $\\langle\\hat{p}\\rangle = i\\sqrt{m\\hbar\\omega/2}(\\alpha^* - \\alpha) = \\sqrt{2m\\hbar\\omega}\\text{Im}(\\alpha)$

分散計算（$[\\hat{a}, \\hat{a}^\\dagger] = 1$ を使って展開）：
- $(\\Delta x)^2 = \\hbar/(2m\\omega)$
- $(\\Delta p)^2 = m\\hbar\\omega/2$

$$\\Delta x\\,\\Delta p = \\sqrt{\\hbar/(2m\\omega) \\cdot m\\hbar\\omega/2} = \\hbar/2$$

**不確定性最小状態**。

## (4) 古典的性質
- $x$ と $p$ の期待値は古典軌道通り $\\langle\\hat{x}(t)\\rangle = \\text{Re}(\\alpha e^{-i\\omega t})\\sqrt{2\\hbar/(m\\omega)}$（時間発展で $\\alpha \\to \\alpha e^{-i\\omega t}$）
- 揺らぎ $\\Delta x, \\Delta p$ は最小かつ時間不変（Gaussian 波束が崩れずに振動）
- 大振幅極限 $|\\alpha| \\gg 1$ で粒子数 Poisson 分布が鋭くピーク → 古典振動

これらから、レーザー光（電場のコヒーレント状態）、電磁場の古典対応、量子ノイズの基準（ショットノイズ極限）として重要。` },

  { id: "osaka-2024-phys-4", universitySlug: "osaka", year: 2024, subject: "物理学", problemNumber: 4,
    title: "Ising 模型と平均場近似", field: "statistical", difficulty: "advanced",
    tags: ["Ising 模型", "平均場近似", "相転移", "Curie-Weiss"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2024年度 物理学 問4

## 問題の設定
スピン変数 $s_i = \\pm 1$、各サイト $i$ が $z$ 個の最近接と結合する Ising 模型：
$$H = -J\\sum_{\\langle ij\\rangle}s_i s_j - h\\sum_i s_i$$
（$J > 0$ 強磁性、$h$ 外部磁場、$\\beta = 1/(k_B T)$）

## 問われている内容
(1) 平均場近似 $s_i s_j \\approx m s_j + m s_i - m^2$（$m = \\langle s\\rangle$）を施し、1 サイトの実効ハミルトニアンを書け。
(2) 自己無撞着方程式 $m = \\tanh(\\beta(Jzm + h))$ を導け。
(3) $h = 0$ で相転移温度 $T_c$ を求めよ（$T > T_c$ で $m = 0$、$T < T_c$ で $m \\ne 0$ の境界）。
(4) $T$ が $T_c$ よりわずかに上（$h = 0$）のとき、帯磁率 $\\chi = \\partial m/\\partial h|_{h=0}$ を求め、$T \\to T_c$ で発散することを示せ（Curie-Weiss 則）。`,
    solution: `## (1) 実効ハミルトニアン
和を取ると、各サイト $i$ の周りに $z$ 個の最近接があるので：
$$H_{\\text{MF}} = -\\sum_i (Jzm + h) s_i + \\frac{NJzm^2}{2}$$
（定数項は規格化、$N$ は全サイト数）

## (2) 自己無撞着方程式
1 サイトの分配関数：$Z_1 = 2\\cosh(\\beta(Jzm + h))$。$\\langle s\\rangle = \\tanh(\\beta(Jzm+h))$、自己矛盾なく $m = \\langle s\\rangle$ とするには：
$$\\boxed{m = \\tanh[\\beta(Jzm + h)]}$$

## (3) 相転移温度
$h = 0, m \\to 0$ で Taylor 展開：$\\tanh(\\beta Jzm) \\approx \\beta Jzm - (\\beta Jzm)^3/3$。1 次方程式 $m = \\beta Jzm$ は $m = 0$ 自明解。非自明解の境界は $\\beta Jz = 1$：
$$\\boxed{k_B T_c = Jz}$$

$T > T_c$：$m = 0$ のみ安定。$T < T_c$：$m \\ne 0$ も安定（自発磁化）。

## (4) 帯磁率 Curie-Weiss
$h \\ne 0$、$T > T_c$、$m$ 小：Taylor 展開 $m \\approx \\beta(Jzm + h)$ から：
$$m(1 - \\beta Jz) = \\beta h \\Rightarrow m = \\frac{h}{k_B(T - T_c)}$$

$$\\boxed{\\chi = \\frac{\\partial m}{\\partial h}\\bigg|_{h=0} = \\frac{1}{k_B(T - T_c)}}$$

$T \\to T_c^+$ で $\\chi \\to \\infty$ 発散（臨界発散）。これが Curie-Weiss 則。

**物理的意味**：平均場近似は相関の空間構造を無視する簡便法で、多くの系で**定性的**相転移を正しく捉える。ただし臨界指数（$\\chi \\sim |T-T_c|^{-\\gamma}$ の $\\gamma$ など）は誤り：$\\gamma_{\\text{MF}} = 1$、3D Ising の正確値 $\\gamma \\approx 1.24$。臨界点近傍では**繰り込み群**による補正が必要（共形場理論、厳密解 Onsager 1944）。` },

  { id: "osaka-2024-math-1", universitySlug: "osaka", year: 2024, subject: "数学", problemNumber: 1,
    title: "留数計算と三角関数の積分", field: "math", difficulty: "standard",
    tags: ["留数定理", "単位円", "三角積分"], isFree: true,
    statement: `**対応問題**: 大阪大学 2024年度 数学 問1

## 問われている内容
実数 $a$（$a > 1$）に対し、積分
$$I = \\int_0^{2\\pi}\\frac{d\\theta}{a + \\cos\\theta}$$
を留数定理で求めよ。

(1) $z = e^{i\\theta}$ の置換で被積分関数を複素平面上に移せ。単位円上での積分に書き換えよ。
(2) 被積分関数の極を全て求め、単位円内部にある極のみを特定せよ。
(3) 留数定理を適用して $I$ を計算せよ。`,
    solution: `## (1) 置換
$z = e^{i\\theta}$、$d\\theta = dz/(iz)$、$\\cos\\theta = (z + 1/z)/2$：
$$I = \\oint_{|z|=1}\\frac{1}{a + (z + 1/z)/2}\\cdot\\frac{dz}{iz} = \\oint\\frac{2\\,dz}{i(z^2 + 2az + 1)}$$

## (2) 極の特定
$z^2 + 2az + 1 = 0 \\Rightarrow z = -a \\pm \\sqrt{a^2 - 1}$。
- $z_+ = -a + \\sqrt{a^2 - 1}$：$|z_+| < 1$ ✅（$a > 1$ で正の値、小さい）
- $z_- = -a - \\sqrt{a^2 - 1}$：$|z_-| > 1$（単位円外）

**Viète の公式**：$z_+ z_- = 1$、$z_+ + z_- = -2a$。

## (3) 留数計算
単位円内部の極 $z_+$ での留数：
$$\\text{Res}_{z_+}\\frac{2/i}{(z - z_+)(z - z_-)} = \\frac{2/i}{z_+ - z_-} = \\frac{2/i}{2\\sqrt{a^2 - 1}} = \\frac{1}{i\\sqrt{a^2-1}}$$

留数定理：
$$I = 2\\pi i \\cdot \\frac{1}{i\\sqrt{a^2-1}} = \\frac{2\\pi}{\\sqrt{a^2 - 1}}$$

$$\\boxed{I = \\frac{2\\pi}{\\sqrt{a^2 - 1}}}$$

**検算**：$a \\to 1^+$ で $I \\to \\infty$（積分は特異性を持つ）、$a \\to \\infty$ で $I \\to 2\\pi/a$（被積分関数 $\\approx 1/a$ の周期積分）。いずれも直感と整合。

**物理的意味**：三角関数の周期積分は単位円上の複素積分に落とすのが標準手法。物理では振動子の応答関数、Green 関数、散乱振幅などで頻出。` },

  { id: "osaka-2024-math-2", universitySlug: "osaka", year: 2024, subject: "数学", problemNumber: 2,
    title: "変分法と Euler-Lagrange 方程式", field: "math", difficulty: "advanced",
    tags: ["変分法", "Euler-Lagrange", "測地線"], isFree: true,
    statement: `**対応問題**: 大阪大学 2024年度 数学 問2

## 問われている内容
汎関数
$$I[y] = \\int_a^b F(x, y, y')\\, dx$$
を、両端固定 $y(a) = y_a, y(b) = y_b$ で極値化することを考える。

(1) $y \\to y + \\epsilon\\eta$（$\\eta(a) = \\eta(b) = 0$）の変分から、Euler-Lagrange 方程式
$$\\frac{\\partial F}{\\partial y} - \\frac{d}{dx}\\frac{\\partial F}{\\partial y'} = 0$$
を導け。
(2) 2 点 $(x_1, y_1), (x_2, y_2)$ を結ぶ**最短曲線**を求める問題を、(1) を使って解け（結果として直線を得ることを示せ）。
(3) $F$ が $x$ を陽に含まないとき、保存量 $H \\equiv F - y'(\\partial F/\\partial y')$ = const（Beltrami の恒等式）を示せ。`,
    solution: `## (1) Euler-Lagrange 方程式の導出
変分 $\\delta I = I[y + \\epsilon\\eta] - I[y]$ の 1 次項：
$$\\delta I = \\epsilon\\int_a^b\\left(\\frac{\\partial F}{\\partial y}\\eta + \\frac{\\partial F}{\\partial y'}\\eta'\\right)dx$$

第 2 項を部分積分（表面項 $\\eta(a) = \\eta(b) = 0$ で消える）：
$$\\delta I = \\epsilon\\int_a^b\\eta\\left[\\frac{\\partial F}{\\partial y} - \\frac{d}{dx}\\frac{\\partial F}{\\partial y'}\\right]dx$$

任意 $\\eta$ で $\\delta I = 0$ が成立するには被積分の括弧 $= 0$：
$$\\boxed{\\frac{\\partial F}{\\partial y} - \\frac{d}{dx}\\frac{\\partial F}{\\partial y'} = 0}$$

（基本補題の適用）

## (2) 最短曲線
$y(x)$ の弧長：$I[y] = \\int\\sqrt{1 + y'^2}\\, dx$、$F = \\sqrt{1 + y'^2}$。

$\\partial F/\\partial y = 0$、$\\partial F/\\partial y' = y'/\\sqrt{1 + y'^2}$。EL 方程式：
$$\\frac{d}{dx}\\frac{y'}{\\sqrt{1+y'^2}} = 0 \\Rightarrow \\frac{y'}{\\sqrt{1+y'^2}} = \\text{const} \\Rightarrow y' = \\text{const}$$

$y' = k$ で $y = kx + c$：**直線**。両端条件から $k, c$ が決定。

## (3) Beltrami の恒等式
$F$ が $x$ を陽に含まなければ、全微分 $dF/dx$ は $y'$ と $y''$ を通してのみ変化：
$$\\frac{dF}{dx} = \\frac{\\partial F}{\\partial y}y' + \\frac{\\partial F}{\\partial y'}y''$$

EL から $\\partial F/\\partial y = (d/dx)(\\partial F/\\partial y')$：
$$\\frac{dF}{dx} = y'\\frac{d}{dx}\\frac{\\partial F}{\\partial y'} + \\frac{\\partial F}{\\partial y'}y'' = \\frac{d}{dx}\\left(y'\\frac{\\partial F}{\\partial y'}\\right)$$

移項して：
$$\\frac{d}{dx}\\left[F - y'\\frac{\\partial F}{\\partial y'}\\right] = 0 \\Rightarrow \\boxed{H = F - y'\\frac{\\partial F}{\\partial y'} = \\text{const}}$$

**物理的意味**：Beltrami は Lagrangian 形式での**エネルギー保存**（時間並進対称性 → ハミルトニアン保存）の幾何学版。時間 $t$ を明示的に含まない Lagrangian ではハミルトニアン $H$ が保存。変分問題（最速降下、最小作用、測地線）で時間パラメータ消去の標準手法。` },

  // ---- NAGOYA 2024 (+2) ----
  { id: "nagoya-2024-phys-3", universitySlug: "nagoya", year: 2024, subject: "物理学", problemNumber: 3,
    title: "Biot-Savart 則と磁場", field: "electromagnetism", difficulty: "basic",
    tags: ["Biot-Savart", "電流と磁場", "円電流"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2024年度 物理学 問3

## 問題の設定
半径 $R$、電流 $I$ の円電流（中心 $O$、$xy$ 平面上）が作る磁場を考える。真空の透磁率 $\\mu_0$。

## 問われている内容
(1) Biot-Savart の法則を書け（電流要素 $I d\\vec{\\ell}$ が作る磁場の式）。
(2) 円電流の中心 $O$ での磁場 $B_O$ を求めよ。
(3) 円電流の軸上 $z$ 軸 $(z > 0)$ での磁場 $B_z(z)$ を求めよ。
(4) $z \\gg R$ での振る舞いを近似し、磁気双極子モーメント $\\vec{m} = I\\pi R^2\\hat{z}$ との関係を示せ。`,
    solution: `## (1) Biot-Savart の法則
$$d\\vec{B}(\\vec{r}) = \\frac{\\mu_0 I}{4\\pi}\\frac{d\\vec{\\ell}\\times(\\vec{r} - \\vec{r}')}{|\\vec{r} - \\vec{r}'|^3}$$

## (2) 中心での磁場
円電流の各要素 $Id\\vec{\\ell}$ から中心までの距離は $R$、$d\\vec{\\ell}$ は接線方向、$\\vec{r} - \\vec{r}'$ は半径方向で垂直 → 外積の大きさ $R\\, d\\ell$、方向は $+\\hat{z}$。

$$B_O = \\frac{\\mu_0 I}{4\\pi}\\int\\frac{d\\ell}{R^2} = \\frac{\\mu_0 I}{4\\pi R^2}\\cdot 2\\pi R = \\frac{\\mu_0 I}{2R}$$

## (3) 軸上の磁場
距離 $\\sqrt{R^2 + z^2}$、対称性から $xy$ 方向寄与は打ち消し $z$ 成分のみ。$z$ 成分は外積の大きさ × $R/\\sqrt{R^2+z^2}$：
$$dB_z = \\frac{\\mu_0 I}{4\\pi}\\cdot\\frac{d\\ell \\cdot R}{(R^2 + z^2)^{3/2}}$$

積分：$\\int d\\ell = 2\\pi R$ より：
$$\\boxed{B_z(z) = \\frac{\\mu_0 I R^2}{2(R^2 + z^2)^{3/2}}}$$

## (4) 遠方近似
$z \\gg R$：$(R^2 + z^2)^{3/2} \\approx z^3$。
$$B_z \\approx \\frac{\\mu_0 I R^2}{2z^3} = \\frac{\\mu_0}{4\\pi}\\cdot\\frac{2I\\pi R^2}{z^3} = \\frac{\\mu_0}{4\\pi}\\cdot\\frac{2m}{z^3}$$

これは**磁気双極子**の遠方磁場（軸上成分）と一致。$\\vec{m} = I\\pi R^2\\hat{z}$（面積 × 電流）が磁気モーメントの定義と整合。

**物理的意味**：電流ループは遠方で磁気双極子として振る舞う。原子磁石、分子磁石、MRI 造影剤の基礎。` },

  { id: "nagoya-2024-phys-4", universitySlug: "nagoya", year: 2024, subject: "物理学", problemNumber: 4,
    title: "理想気体の状態方程式", field: "thermodynamics", difficulty: "basic",
    tags: ["理想気体", "状態方程式", "等温過程"], isFree: true,
    statement: `**対応問題**: 名古屋大学 2024年度 物理学 問4

## 問題の設定
単原子分子の理想気体 $n$ モルを考える。気体定数 $R$、定積比熱 $C_V = (3/2)nR$、定圧比熱 $C_P = (5/2)nR$。

## 問われている内容
(1) 理想気体の状態方程式を書け。
(2) 初期状態 $(P_1, V_1, T_1)$ から等温過程で $V_2 (> V_1)$ まで膨張させる場合、気体が外部にした仕事 $W$ を求めよ。
(3) 同じ初期状態から**等圧**膨張で温度が $T_2 (> T_1)$ まで上昇した場合、気体が外部にした仕事 $W'$ と吸収した熱 $Q'$ を求めよ。
(4) (3) の内部エネルギー変化 $\\Delta U$ を計算し、第一法則 $Q' = \\Delta U + W'$ が成立することを確認せよ。`,
    solution: `## (1) 状態方程式
$$\\boxed{PV = nRT}$$

## (2) 等温膨張の仕事
等温 $T_1$ 一定で $P = nRT_1/V$：
$$W = \\int_{V_1}^{V_2} P\\, dV = nRT_1\\int_{V_1}^{V_2}\\frac{dV}{V} = nRT_1\\ln\\frac{V_2}{V_1}$$

## (3) 等圧膨張の仕事と熱
等圧で $P_1$ 一定、$V$ は $T$ に比例：$V(T) = nRT/P_1$。仕事：
$$W' = P_1(V_2 - V_1) = P_1\\cdot\\frac{nR(T_2 - T_1)}{P_1} = nR(T_2 - T_1)$$

吸収熱：$Q' = C_P(T_2 - T_1) = (5/2)nR(T_2 - T_1)$

## (4) 第一法則の検証
内部エネルギー変化：$\\Delta U = C_V(T_2 - T_1) = (3/2)nR(T_2 - T_1)$

$\\Delta U + W' = (3/2)nR(T_2 - T_1) + nR(T_2 - T_1) = (5/2)nR(T_2 - T_1) = Q'$ ✅

**物理的意味**：等圧膨張で吸収した熱 $Q'$ は、内部エネルギーの増加 $\\Delta U$（温度上昇）と外部仕事 $W'$（体積膨張）に分配される。$C_P - C_V = nR$（Mayer の関係式）が確認できる。単原子分子では $C_P/C_V = 5/3 = \\gamma$（比熱比）。` },

  // ---- KYUSHU 2024 (+2) ----
  { id: "kyushu-2024-phys-3", universitySlug: "kyushu", year: 2024, subject: "物理学", problemNumber: 3,
    title: "減衰振動とエネルギー散逸", field: "mechanics", difficulty: "basic",
    tags: ["減衰振動", "Q 値", "エネルギー減衰"], isFree: true,
    statement: `**対応問題**: 九州大学 2024年度 物理学 問3

## 問題の設定
質量 $m$、ばね定数 $k$、減衰係数 $\\gamma$ のばね減衰系：
$$m\\ddot{x} + \\gamma\\dot{x} + kx = 0$$

## 問われている内容
(1) 運動方程式を $\\omega_0^2 = k/m$、$2\\zeta\\omega_0 = \\gamma/m$ で書き直せ。
(2) 減衰振動解（$\\zeta < 1$）の一般形を求めよ。
(3) $\\zeta \\ll 1$ の時、振幅の時間減衰率と振動周期を述べよ。
(4) 1 周期あたりに失われるエネルギーの割合 $\\Delta E/E$ を求め、品質因子 $Q = 2\\pi E/(\\Delta E) = \\omega_0/(2\\zeta\\omega_0) = 1/(2\\zeta)$ を確認せよ。`,
    solution: `## (1) 無次元化
$$\\ddot{x} + 2\\zeta\\omega_0\\dot{x} + \\omega_0^2 x = 0$$

$\\zeta$ は減衰比（無次元）。

## (2) 減衰振動解
特性方程式 $\\lambda^2 + 2\\zeta\\omega_0\\lambda + \\omega_0^2 = 0 \\Rightarrow \\lambda = -\\zeta\\omega_0 \\pm i\\omega_0\\sqrt{1-\\zeta^2}$

$\\omega_d \\equiv \\omega_0\\sqrt{1 - \\zeta^2}$ と置いて：
$$\\boxed{x(t) = A e^{-\\zeta\\omega_0 t}\\cos(\\omega_d t + \\phi)}$$

## (3) 減衰率と周期
- **振幅減衰**：エンベロープ $A e^{-\\zeta\\omega_0 t}$。$t = 1/(\\zeta\\omega_0)$ で振幅が $1/e$ に。
- **周期**：$T = 2\\pi/\\omega_d \\approx 2\\pi/\\omega_0$（$\\zeta \\ll 1$）。

## (4) Q 値
エネルギー $E \\propto A^2 \\propto e^{-2\\zeta\\omega_0 t}$。1 周期 $T$ で：
$$\\frac{\\Delta E}{E} = 1 - e^{-2\\zeta\\omega_0 T} \\approx 2\\zeta\\omega_0 T = 4\\pi\\zeta$$

$$Q = 2\\pi/\\frac{\\Delta E}{E} = 2\\pi/(4\\pi\\zeta) = \\frac{1}{2\\zeta}$$

$$\\boxed{Q = 1/(2\\zeta) = m\\omega_0/\\gamma}$$

**物理的意味**：$Q$ が大きい（$\\zeta$ が小さい）ほど長く振動する。機械振り子 $Q \\sim 10^3$、石英振動子 $10^5$〜$10^6$、原子時計 $10^{10}$。光共振器・LC 共振回路・核スピン FID など、振動系の指標として普遍的。` },

  { id: "kyushu-2024-phys-4", universitySlug: "kyushu", year: 2024, subject: "物理学", problemNumber: 4,
    title: "スネルの法則と屈折", field: "optics", difficulty: "basic",
    tags: ["スネルの法則", "全反射", "Fermat の原理"],
    isFree: true,
    statement: `**対応問題**: 九州大学 2024年度 物理学 問4

## 問題の設定
屈折率 $n_1$ の媒質から屈折率 $n_2$ の媒質へ光が入射角 $\\theta_1$ で入るとき。

## 問われている内容
(1) スネルの法則を書き、屈折角 $\\theta_2$ を $\\theta_1, n_1, n_2$ で表せ。
(2) $n_1 > n_2$ のとき全反射を起こす臨界角 $\\theta_c$ を求めよ。
(3) 光ファイバー（芯の屈折率 $n_1 = 1.50$、クラッドの屈折率 $n_2 = 1.48$）の全反射条件を空気中からの入射角に変換（数値計算）。
(4) Fermat の原理（光は光路長最短の経路を進む）からスネルの法則が導かれることを簡潔に述べよ。`,
    solution: `## (1) スネルの法則
$$\\boxed{n_1\\sin\\theta_1 = n_2\\sin\\theta_2}$$

屈折角：$\\sin\\theta_2 = (n_1/n_2)\\sin\\theta_1$

## (2) 臨界角
$n_1 > n_2$：$\\sin\\theta_2 = (n_1/n_2)\\sin\\theta_1 > \\sin\\theta_1$。$\\theta_2 = \\pi/2$ となる入射角が臨界角：
$$\\sin\\theta_c = n_2/n_1$$
$$\\boxed{\\theta_c = \\arcsin(n_2/n_1)}$$

$\\theta_1 > \\theta_c$ で全反射。

## (3) 光ファイバー
芯とクラッドの境界での臨界角：$\\sin\\theta_c = 1.48/1.50 = 0.9867 \\Rightarrow \\theta_c \\approx 80.6°$。

空気中から光ファイバーの芯へ入射する光は、空気-芯界面で屈折（屈折角 $\\theta_a$）してから芯-クラッド界面に到達。幾何学的に $\\theta_a + \\theta_c = 90°$（コア内伝搬）、すなわち $\\theta_a = 9.4°$。Snell 則で空気中からの入射角 $\\theta_0$：
$$\\sin\\theta_0 = 1.50\\sin(9.4°) \\approx 1.50 \\times 0.1633 \\approx 0.245$$
$$\\theta_0 \\approx 14.2°$$

$\\theta_0 < 14.2°$ で全反射しながら導波。$\\text{NA} = \\sqrt{n_1^2 - n_2^2} \\approx 0.245$（開口数）。

## (4) Fermat 原理からの導出
光路長 $L = \\int n\\, ds$。2 媒質で平面波を仮定、屈折点の座標を変分すると：
$$\\frac{dL}{dx} = n_1\\sin\\theta_1 - n_2\\sin\\theta_2 = 0$$

$\\Rightarrow$ スネルの法則。

**物理的意味**：Fermat 原理は幾何光学の基本原理。量子的には経路積分 $\\exp(iS/\\hbar)$ の停留位相条件に相当し、古典極限で最短経路に干渉の中心が来る。光ファイバー通信、プリズム分光、光学レンズ設計の全てで根幹。` },

  // ---- HOKKAIDO 2024 (+2) ----
  { id: "hokkaido-2024-phys-3", universitySlug: "hokkaido", year: 2024, subject: "物理学", problemNumber: 3,
    title: "単振り子の周期", field: "mechanics", difficulty: "basic",
    tags: ["単振り子", "微小振動", "周期"], isFree: true,
    statement: `**対応問題**: 北海道大学 2024年度 物理学 問3

## 問題の設定
長さ $\\ell$ の軽い糸の先に質量 $m$ の質点を吊るした単振り子を重力加速度 $g$ の一様重力場で振らせる。

## 問われている内容
(1) 微小振動近似での周期 $T_0$ を導出せよ。
(2) 糸の長さを 4 倍にすると周期はどう変わるか。
(3) 振り子を水平速度 $v_0$ で動く電車内に設置したとき、定常状態で糸が鉛直から傾く角度 $\\theta_0$ を述べよ（電車は等速）。
(4) 同じ電車が加速度 $a$ で加速中のとき、振り子の傾きを有効重力加速度 $g_{\\text{eff}}$ で表し、周期 $T$ を求めよ。`,
    solution: `## (1) 微小振動の周期
運動方程式：$m\\ell\\ddot\\theta = -mg\\sin\\theta$。$\\sin\\theta \\approx \\theta$（$\\theta \\ll 1$）：
$$\\ddot\\theta = -(g/\\ell)\\theta$$
$$\\boxed{T_0 = 2\\pi\\sqrt{\\ell/g}}$$

## (2) 糸を 4 倍に
$T \\propto \\sqrt{\\ell}$ なので $T_0' = 2 T_0$（2 倍）。

## (3) 等速電車内
等速慣性系：普段と同じ。$\\theta_0 = 0$（鉛直のまま）。

## (4) 加速電車内
電車の加速度 $a$（水平）。電車系は非慣性系、慣性力 $-ma$ が水平方向に働く。実効重力は $\\vec{g}_{\\text{eff}} = -g\\hat{z} - a\\hat{x}$、大きさ：
$$g_{\\text{eff}} = \\sqrt{g^2 + a^2}$$

傾き $\\tan\\theta = a/g$。周期：
$$\\boxed{T = 2\\pi\\sqrt{\\ell/g_{\\text{eff}}} = 2\\pi\\sqrt{\\ell/\\sqrt{g^2 + a^2}}}$$

**物理的意味**：等価原理の直感的表現。等加速度運動する電車内の重力は、地表の重力と慣性力の合成で斜めになる。Einstein の一般相対論の出発点の一つ。また振り子式加速度計（古典的な船舶計器、スマホジャイロの補助）の原理。` },

  { id: "hokkaido-2024-phys-4", universitySlug: "hokkaido", year: 2024, subject: "物理学", problemNumber: 4,
    title: "ガウスの法則と球対称電荷", field: "electromagnetism", difficulty: "basic",
    tags: ["ガウスの法則", "球対称", "一様電荷分布"],
    isFree: true,
    statement: `**対応問題**: 北海道大学 2024年度 物理学 問4

## 問題の設定
半径 $R$ の球内に、体積電荷密度 $\\rho_0$（一定）で電荷が一様に分布している。球外は真空。真空の誘電率 $\\varepsilon_0$。

## 問われている内容
(1) 総電荷 $Q$ を $\\rho_0, R$ で表せ。
(2) 内部（$r < R$）での電場 $E(r)$ をガウスの法則で求めよ。
(3) 外部（$r > R$）での電場 $E(r)$ を求めよ。
(4) 無限遠を基準 ($V = 0$) として電位 $V(r)$ を求めよ（内外両方）。`,
    solution: `## (1) 総電荷
$$Q = \\rho_0 \\cdot \\frac{4\\pi R^3}{3}$$

## (2) 内部の電場
半径 $r$ のガウス球面内の電荷：$Q_{\\text{in}}(r) = \\rho_0 \\cdot 4\\pi r^3/3$。ガウスの法則：
$$E(r)\\cdot 4\\pi r^2 = \\frac{Q_{\\text{in}}}{\\varepsilon_0} = \\frac{\\rho_0 \\cdot 4\\pi r^3/3}{\\varepsilon_0}$$
$$\\boxed{E(r) = \\frac{\\rho_0 r}{3\\varepsilon_0} \\quad (r < R)}$$

中心でゼロ、表面で最大（線形増加）。

## (3) 外部の電場
全電荷 $Q$ が中心にあるかのように：
$$\\boxed{E(r) = \\frac{Q}{4\\pi\\varepsilon_0 r^2} = \\frac{\\rho_0 R^3}{3\\varepsilon_0 r^2} \\quad (r > R)}$$

## (4) 電位
外部：$V(r) = \\int_r^\\infty E\\, dr' = Q/(4\\pi\\varepsilon_0 r)$。$r = R$ で $V(R) = Q/(4\\pi\\varepsilon_0 R) = \\rho_0 R^2/(3\\varepsilon_0)$。

内部：$V(r) = V(R) + \\int_r^R E_{\\text{in}}\\, dr' = V(R) + (\\rho_0/6\\varepsilon_0)(R^2 - r^2)$。整理：
$$V(r) = \\frac{\\rho_0}{6\\varepsilon_0}(3R^2 - r^2) \\quad (r < R)$$

$$\\boxed{V(r) = \\begin{cases} \\rho_0 (3R^2 - r^2)/(6\\varepsilon_0) & (r < R) \\\\ \\rho_0 R^3/(3\\varepsilon_0 r) & (r > R) \\end{cases}}$$

**検算**：$r = R$ で両式とも $\\rho_0 R^2/(3\\varepsilon_0)$ で連続 ✅。中心で $V$ が極大。$E = -dV/dr$ も一致 ✅。

**物理的意味**：球対称電荷は外部では点電荷と等価（Newton の重力定理のアナロジー）。内部では半径に比例する線形電場。原子核内部の電場、地球の重力場モデルなど応用。` },

  // ---- YNU 2024 (+2) ----
  { id: "ynu-2024-phys-3", universitySlug: "ynu", year: 2024, subject: "物理学", problemNumber: 3,
    title: "黒体放射と Stefan-Boltzmann 則", field: "quantum", difficulty: "basic",
    tags: ["黒体放射", "Planck 分布", "Stefan-Boltzmann"],
    isFree: true,
    statement: `**対応問題**: 横浜国立大学 2024年度 物理学 問3

## 問題の設定
温度 $T$ の黒体が単位時間単位面積あたり放射するエネルギー（放射流束）$j$ は Stefan-Boltzmann 則に従う：
$$j = \\sigma T^4, \\quad \\sigma = 5.67\\times 10^{-8}\\,\\text{W/(m}^2\\text{K}^4)$$

## 問われている内容
(1) 黒体とは何かを簡潔に述べよ。
(2) 太陽の表面温度を $T_\\odot = 5800\\,\\text{K}$、半径 $R_\\odot = 7\\times 10^8\\,\\text{m}$ として、総放射パワー $L_\\odot$ を推定せよ。
(3) Planck 分布のエネルギー密度 $u(\\nu, T)$ を書き、高周波（Wien）・低周波（Rayleigh-Jeans）極限の表式を示せ。
(4) Wien の変位則 $\\lambda_{\\max}T = b$（$b \\approx 2.9\\times 10^{-3}\\,\\text{m K}$）から太陽のピーク波長を推定し、可視光域にあることを確認せよ。`,
    solution: `## (1) 黒体
入射する電磁波をすべて吸収する理想的な物体。熱平衡で放出スペクトルは Planck 分布（温度のみに依存）。実在物体は吸収率 $\\alpha < 1$、放出も $\\alpha\\sigma T^4$（Kirchhoff の法則）。

## (2) 太陽の放射パワー
表面積 $4\\pi R_\\odot^2 \\approx 6.16\\times 10^{18}\\,\\text{m}^2$。

$T^4 = (5800)^4 \\approx 1.13\\times 10^{15}\\,\\text{K}^4$。

$j = \\sigma T^4 \\approx 5.67\\times 10^{-8}\\times 1.13\\times 10^{15} \\approx 6.4\\times 10^{7}\\,\\text{W/m}^2$。

$$L_\\odot = j \\cdot 4\\pi R_\\odot^2 \\approx 4\\times 10^{26}\\,\\text{W}$$

実測値 $L_\\odot \\approx 3.8\\times 10^{26}\\,\\text{W}$ と近似的に一致 ✅。

## (3) Planck 分布と極限
$$u(\\nu, T)\\, d\\nu = \\frac{8\\pi h\\nu^3}{c^3}\\cdot\\frac{1}{e^{h\\nu/k_B T} - 1}\\,d\\nu$$

- **高周波** ($h\\nu \\gg k_B T$): $u \\to (8\\pi h\\nu^3/c^3)e^{-h\\nu/k_B T}$ (Wien の法則)
- **低周波** ($h\\nu \\ll k_B T$): $e^{x} - 1 \\approx x$ → $u \\to 8\\pi\\nu^2 k_B T/c^3$ (Rayleigh-Jeans)

低周波極限は古典論と整合するが、高周波で**紫外破綻**を回避できるのが Planck の量子仮説（1900）の本質。

## (4) Wien の変位則
$\\lambda_{\\max} = b/T = 2.9\\times 10^{-3}/5800 \\approx 5\\times 10^{-7}\\,\\text{m} = 500\\,\\text{nm}$。

可視光の緑〜黄色領域 ✅。太陽は緑で最大輝度、そのため我々の目は可視光域に最適化されて進化した（同値：生物の視覚帯域は太陽スペクトルに同調）。

**物理的意味**：黒体放射の理論は量子力学の出発点。宇宙マイクロ波背景放射（$T \\approx 2.7\\,\\text{K}$）、恒星分光、赤外サーモグラフィー、LED の色温度設計など現代技術の基礎。` },

  { id: "ynu-2024-phys-4", universitySlug: "ynu", year: 2024, subject: "物理学", problemNumber: 4,
    title: "ドップラー効果", field: "mechanics", difficulty: "basic",
    tags: ["ドップラー効果", "音波", "相対速度"], isFree: true,
    statement: `**対応問題**: 横浜国立大学 2024年度 物理学 問4

## 問題の設定
音源の振動数 $f_0$、音速 $c$。空気は静止。観測者と音源が 1 次元上を動く。

## 問われている内容
(1) 音源が速度 $v_s$ で観測者に近づき、観測者が静止しているときの観測振動数 $f_1$ を導出せよ。
(2) 観測者が速度 $v_o$ で音源に近づき、音源が静止しているときの観測振動数 $f_2$ を導出せよ。
(3) 両者が相対速度で近づくとき（音源 $v_s$、観測者 $v_o$、共に媒質に対して）の一般式を書け。
(4) 光の相対論的ドップラー効果と比較し、古典的表現が相対速度のみに依存しない（$v_s$ と $v_o$ で非対称）理由を述べよ。`,
    solution: `## (1) 音源が近づく場合
音源が 1 周期 $T_0 = 1/f_0$ の間に $v_s T_0$ 進む → 波長が縮む：
$$\\lambda' = cT_0 - v_s T_0 = (c - v_s)/f_0$$

観測振動数：
$$\\boxed{f_1 = c/\\lambda' = \\frac{c}{c - v_s}f_0}$$

## (2) 観測者が近づく場合
波長 $\\lambda = c/f_0$ は変わらず、観測者が相対速度 $c + v_o$ で波を受ける：
$$\\boxed{f_2 = (c + v_o)/\\lambda = \\frac{c + v_o}{c}f_0}$$

## (3) 一般式
両方が媒質に対して動くとき：
$$\\boxed{f = \\frac{c + v_o}{c - v_s}f_0}$$

（符号：近づく方向を正）

## (4) 相対論との比較
古典：$f_1 \\ne f_2$（$v_s = v_o$ でも異なる値）。$v_s/c$ と $v_o/c$ は**独立変数**（音波は媒質に対して定義されるから）。

**光の場合**：媒質不要（真空中でも伝搬）、相対論的ドップラー効果：
$$f_{\\text{obs}}/f_0 = \\sqrt{(1-\\beta)/(1+\\beta)}$$（接近、$\\beta = v/c$）

これは**相対速度 $v$ のみ**の関数（$v_s, v_o$ の区別がない）→ 相対性原理との整合。

**物理的意味**：古典ドップラーは「媒質（空気）に対する速度」という概念があるから非対称。光では特殊相対論により媒質概念が破棄され対称な式になる。赤方偏移（宇宙論）、レーザードップラー測速、レーダー速度計、Mossbauer 分光など応用。` },

  // ---- TSUKUBA 2024 (+2) ----
  { id: "tsukuba-2024-phys-3", universitySlug: "tsukuba", year: 2024, subject: "物理学", problemNumber: 3,
    title: "電気双極子の作る電場", field: "electromagnetism", difficulty: "basic",
    tags: ["電気双極子", "多重極展開", "1/r^3 減衰"],
    isFree: true,
    statement: `**対応問題**: 筑波大学 2024年度 物理学 問3

## 問題の設定
$+q$ の点電荷を $\\vec{r} = +d\\hat{z}/2$、$-q$ の点電荷を $-d\\hat{z}/2$ に置く。双極子モーメント $\\vec{p} = qd\\hat{z}$。真空の誘電率 $\\varepsilon_0$。

## 問われている内容
(1) $z$ 軸上遠方 $(z \\gg d)$ での電位 $V(z)$ を主要項まで求めよ。
(2) $xy$ 平面上 $(\\rho = \\sqrt{x^2 + y^2} \\gg d)$ での電位 $V(\\rho)$ を示せ。
(3) 一般の遠方点 $(r, \\theta)$ での電位 $V(r, \\theta)$ を双極子近似で求めよ。
(4) 電場 $\\vec{E}$ を計算し、双極子の遠方電場が $1/r^3$ で減衰することを確認せよ。`,
    solution: `## (1) 軸上遠方
$+q$ からの距離 $z - d/2$、$-q$ からの距離 $z + d/2$：
$$V = \\frac{q}{4\\pi\\varepsilon_0}\\left[\\frac{1}{z - d/2} - \\frac{1}{z + d/2}\\right]$$

$(z \\pm d/2)^{-1} \\approx z^{-1}(1 \\mp d/(2z))$ を展開：
$$V \\approx \\frac{q}{4\\pi\\varepsilon_0 z}\\cdot\\frac{d}{z} = \\frac{qd}{4\\pi\\varepsilon_0 z^2}$$

$$\\boxed{V(z) = \\frac{p}{4\\pi\\varepsilon_0 z^2} \\quad (z \\text{ 軸上})}$$

## (2) $xy$ 平面上
$+q$ と $-q$ からの距離が等しいため打ち消し合い、最低次では $V = 0$。

## (3) 一般点での双極子近似
$V = p\\cos\\theta/(4\\pi\\varepsilon_0 r^2)$（$\\theta$ は $\\vec{p}$ からの角度）：
$$\\boxed{V(r, \\theta) = \\frac{\\vec{p}\\cdot\\hat{r}}{4\\pi\\varepsilon_0 r^2} = \\frac{p\\cos\\theta}{4\\pi\\varepsilon_0 r^2}}$$

## (4) 電場
極座標で $E_r = -\\partial V/\\partial r = 2p\\cos\\theta/(4\\pi\\varepsilon_0 r^3)$、$E_\\theta = -(1/r)\\partial V/\\partial\\theta = p\\sin\\theta/(4\\pi\\varepsilon_0 r^3)$：

$$\\boxed{\\vec{E} = \\frac{p}{4\\pi\\varepsilon_0 r^3}(2\\cos\\theta\\hat{r} + \\sin\\theta\\hat{\\theta})}$$

$1/r^3$ 減衰（点電荷 $1/r^2$ より速い）。

**物理的意味**：電気双極子モーメントは分子の極性（水 $H_2O$、アンモニアなど）、誘電体応答、電磁波放射（Hertz の双極子放射）の基本。反対符号の 2 電荷の非対称性が残り、モノポールはゼロでも双極子項が主要項として生き残る。` },

  { id: "tsukuba-2024-phys-4", universitySlug: "tsukuba", year: 2024, subject: "物理学", problemNumber: 4,
    title: "熱平衡と熱容量", field: "thermodynamics", difficulty: "basic",
    tags: ["熱容量", "熱平衡", "混合"], isFree: true,
    statement: `**対応問題**: 筑波大学 2024年度 物理学 問4

## 問題の設定
比熱 $c_1$、質量 $m_1$、初期温度 $T_1$ の物体 A と、比熱 $c_2$、質量 $m_2$、初期温度 $T_2$ の物体 B を断熱容器内で接触させる。$T_1 > T_2$。

## 問われている内容
(1) 熱平衡での共通温度 $T_f$ を求めよ。
(2) 物体 A から物体 B へ移動した熱量 $Q$ を求めよ。
(3) 水（$c_w = 4.18\\,\\text{kJ/(kg K)}$）$m_1 = 2\\,\\text{kg}$、$T_1 = 80°\\text{C}$ と、鉄（$c_{Fe} = 0.45\\,\\text{kJ/(kg K)}$）$m_2 = 5\\,\\text{kg}$、$T_2 = 20°\\text{C}$ を混合したとき $T_f$ を数値で求めよ。
(4) (3) で水の温度変化 $\\Delta T_1$ と鉄の $\\Delta T_2$ が大きく異なる理由を述べよ。`,
    solution: `## (1) 平衡温度
エネルギー保存（A が失った熱 = B が得た熱）：
$$m_1 c_1 (T_1 - T_f) = m_2 c_2 (T_f - T_2)$$

$T_f$ について解いて：
$$\\boxed{T_f = \\frac{m_1 c_1 T_1 + m_2 c_2 T_2}{m_1 c_1 + m_2 c_2}}$$

熱容量 $C_i = m_i c_i$ を使えば重み付き平均。

## (2) 移動熱量
$$Q = m_1 c_1 (T_1 - T_f) = m_2 c_2 (T_f - T_2)$$

## (3) 数値計算
- $m_1 c_1 = 2 \\times 4.18 = 8.36\\,\\text{kJ/K}$
- $m_2 c_2 = 5 \\times 0.45 = 2.25\\,\\text{kJ/K}$

$$T_f = \\frac{8.36 \\times 80 + 2.25 \\times 20}{8.36 + 2.25} = \\frac{668.8 + 45}{10.61} \\approx 67.3°\\text{C}$$

水の温度変化 $\\Delta T_1 = 80 - 67.3 = -12.7°$、鉄 $\\Delta T_2 = 67.3 - 20 = 47.3°$

## (4) 温度変化の違いの理由
熱容量 $C_1 = 8.36$ vs $C_2 = 2.25$ なので $C_1 > C_2$ が約 3.7 倍。エネルギー保存 $C_1|\\Delta T_1| = C_2|\\Delta T_2|$ から $|\\Delta T_2| = (C_1/C_2)|\\Delta T_1|$。

水は「単位質量・単位温度あたりに大量の熱を蓄える」物質（$c_w$ が大きい）、鉄は比熱が小さいので同じ熱量で温度が大きく変わる。

**物理的意味**：水が大きな比熱を持つのは、水素結合による分子間結合のため。海・大型湖の気候緩衝効果、生物体温維持、熱伝達工学（冷却水）などの基礎。鉄や金属は熱容量が小さく温度応答が速いので、調理器具・自動車の冷却系・電子部品の放熱に使われる。` },

  // ===== 2023年度 拡充セット（全大学×全科目充足）=====

  // ---- TODAI 2023 (+4) ----
  { id: "todai-2023-phys-3", universitySlug: "todai", year: 2023, subject: "物理学", problemNumber: 3,
    title: "非調和振動子と摂動論", field: "quantum", difficulty: "advanced",
    tags: ["摂動論", "非調和項", "1 次補正"], isFree: true,
    statement: `**対応問題**: 東京大学 2023年度 物理学 問3

## 問題の設定
1 次元調和振動子 $\\hat{H}_0 = \\hat{p}^2/(2m) + (1/2)m\\omega^2 \\hat{x}^2$ に非調和摂動 $\\hat{V} = \\lambda\\hat{x}^4$（$\\lambda$ 小）を加えたハミルトニアン $\\hat{H} = \\hat{H}_0 + \\hat{V}$。$|n\\rangle$ を $\\hat{H}_0$ の固有状態とする。

## 問われている内容
(1) 基底状態エネルギー $E_0 = \\hbar\\omega/2$ への 1 次摂動補正 $E_0^{(1)}$ を計算せよ。$\\langle 0|\\hat{x}^4|0\\rangle$ を生成消滅演算子で評価。
(2) 第 $n$ 励起状態への 1 次補正 $E_n^{(1)}$ の一般式を $n$ で表せ。
(3) この補正が常に正となることの物理的理由を述べよ。
(4) 摂動論が破綻する条件を（$\\lambda, \\hbar, \\omega, m$ で）評価せよ。`,
    solution: `## (1) 基底状態への 1 次補正
$\\hat{x} = \\sqrt{\\hbar/(2m\\omega)}(\\hat{a} + \\hat{a}^\\dagger)$ とおき、$x_0 \\equiv \\sqrt{\\hbar/(2m\\omega)}$：
$$\\hat{x}^4 = x_0^4 (\\hat{a} + \\hat{a}^\\dagger)^4$$

展開して $\\langle 0 | \\cdot | 0\\rangle$ に効く項は 2 つの $\\hat{a}^\\dagger$ と 2 つの $\\hat{a}$ の全組合せ。計算すると $\\langle 0|(\\hat{a}+\\hat{a}^\\dagger)^4|0\\rangle = 3$：
$$E_0^{(1)} = \\lambda \\cdot 3 x_0^4 = \\frac{3\\lambda\\hbar^2}{4m^2\\omega^2}$$

## (2) 第 $n$ 準位への補正
一般の $\\langle n|(\\hat{a}+\\hat{a}^\\dagger)^4|n\\rangle = 6n^2 + 6n + 3$。よって：
$$\\boxed{E_n^{(1)} = \\lambda x_0^4 (6n^2 + 6n + 3) = \\frac{\\lambda\\hbar^2(2n^2 + 2n + 1)}{4m^2\\omega^2}\\cdot 3/1}$$

整理：$E_n^{(1)} = (3\\lambda\\hbar^2/(4m^2\\omega^2))(2n^2 + 2n + 1)$

## (3) 正値性の意味
$\\hat{x}^4 \\ge 0$ なので $\\langle n|\\hat{x}^4|n\\rangle > 0$。$\\lambda > 0$ なら全準位が持ち上げられる。物理的には非調和項が井戸の底を「硬く」する効果で、振動数が高くなる（古典的には振幅依存の振動数増加）。

## (4) 摂動論の破綻条件
摂動 $\\lambda x^4$ が $\\hat{H}_0$ の特性スケールを凌駕するとき。典型振幅 $x \\sim x_0$ での比較：
$$\\lambda x_0^4 \\sim \\hbar\\omega \\Rightarrow \\lambda \\sim \\frac{4m^2\\omega^3}{\\hbar}$$

これを超えると摂動展開が発散（実際 $x^4$ 振動子は漸近的収束のみで完全収束しない）。

**物理的意味**：非調和振動子は分子振動（モース振動子）、量子光学、Higgs 機構（$\\phi^4$ 理論）など広く現れる。摂動論は漸近展開で、$\\lambda$ が小さければ有用だが、大振幅・強結合領域では変分法・数値対角化・再正規化群等へ移行。` },

  { id: "todai-2023-phys-4", universitySlug: "todai", year: 2023, subject: "物理学", problemNumber: 4,
    title: "van der Waals 気体と Maxwell 構成", field: "thermodynamics", difficulty: "advanced",
    tags: ["van der Waals", "相転移", "Maxwell 構成", "臨界点"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2023年度 物理学 問4

## 問題の設定
$n$ モルの van der Waals (vdW) 気体の状態方程式：
$$\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT$$
$a, b$ は物質固有の正定数。

## 問われている内容
(1) vdW 方程式の各項（$a/V^2$ と $b$）の物理的起源を述べよ。
(2) 等温圧縮線 $P(V)_T$ が $V$ の 3 価関数になる条件から、臨界点 $(T_c, V_c, P_c)$ を $a, b$ で求めよ。
(3) $T < T_c$ で等温線が物理的に許容されない領域（$\\partial P/\\partial V > 0$）があることを述べ、Maxwell の等面積則（Maxwell 構成）で液体・気体の共存を導くことを説明せよ。
(4) 対応状態原理（$P_r = P/P_c, T_r = T/T_c, V_r = V/V_c$ の無次元化で物質依存性が消える）の意義を述べよ。`,
    solution: `## (1) 物理的起源
- **$a/V^2$ 項**：分子間引力の補正。真の圧力（容器壁への衝突）が引力により減少するため、内部圧力に $a(n/V)^2$ を補足。分子密度の 2 乗に比例（Lennard-Jones 相互作用の平均）。
- **$b$ 項**：分子の有限体積（排除体積）。実効体積が $V - nb$。$b \\sim 4$ 倍の 1 分子体積（剛体球近似）。

## (2) 臨界点
$T = T_c$ で $(\\partial P/\\partial V)_T = (\\partial^2 P/\\partial V^2)_T = 0$ （変曲点）を要求。vdW を $V$ で解き条件を適用：
$$V_c = 3nb, \\quad P_c = \\frac{a}{27 b^2}, \\quad T_c = \\frac{8a}{27 bR}$$

**検証**：$P_c V_c/(n R T_c) = (a/27b^2)(3nb)/(n R \\cdot 8a/(27bR)) = 3/8$ （普遍値、実測値に約 5% 精度で一致）

## (3) Maxwell 構成
$T < T_c$：等温線に $(\\partial P/\\partial V) > 0$（熱力学的不安定、$\\partial P/\\partial V < 0$ が安定条件）の谷がある。物理的には気相・液相の共存領域。

**Maxwell 構成**：共存圧 $P_{\\text{sat}}$ を、vdW 等温線の不安定区間の面積 = 0 となるように決定：
$$\\oint P(V)\\,dV = P_{\\text{sat}}(V_g - V_\\ell) \\Rightarrow \\int_{V_\\ell}^{V_g}[P_{\\text{vdW}}(V) - P_{\\text{sat}}]\\,dV = 0$$

これで液体相の体積 $V_\\ell$、気体相の体積 $V_g$、飽和蒸気圧 $P_{\\text{sat}}(T)$ が決定。Gibbs エネルギーの等値性（相平衡条件 $\\mu_{\\text{liq}} = \\mu_{\\text{gas}}$）と等価。

## (4) 対応状態原理
臨界値で規格化すると vdW 方程式は：
$$\\left(P_r + \\frac{3}{V_r^2}\\right)(3 V_r - 1) = 8 T_r$$

**物質依存の $a, b$ が消える**：すべての vdW 気体が同じ $P_r(V_r, T_r)$ 関係に従う。実在気体でも $T_r \\sim 1$ 付近では近似的に成立（実験的に確認）。気液相転移の普遍性、臨界現象の繰り込み群解析の出発点。` },

  { id: "todai-2023-math-1", universitySlug: "todai", year: 2023, subject: "数学", problemNumber: 1,
    title: "Cauchy の積分公式と解析関数", field: "math", difficulty: "standard",
    tags: ["Cauchy の積分公式", "解析関数", "Taylor 展開"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2023年度 数学 問1

## 問われている内容
複素関数 $f(z) = 1/(z^2 + 1)$ を考える。
(1) $f$ の特異点を全て挙げ、それぞれの種類（極、その位数）を答えよ。
(2) 中心 $z_0 = 0$、半径 $r$ の円 $C$（反時計回り）を考える。Cauchy の積分公式を用いて $\\oint_C f(z)\\,dz$ を $r$ によって分類せよ（$r < 1, r = 1, r > 1$）。
(3) $f$ を $z_0 = 0$ まわりで Taylor 展開し、収束半径を示せ。`,
    solution: `## (1) 特異点
$z^2 + 1 = 0 \\Rightarrow z = \\pm i$。各 $\\pm i$ で $f$ は単純極（1 位の極）。

## (2) 積分の分類
$f(z) = 1/((z-i)(z+i))$。$r < 1$：$C$ 内に極なし → $\\oint = 0$。$r > 1$：$\\pm i$ とも内包。各極での留数：
- Res$_{i} = \\lim_{z\\to i}(z-i)f(z) = 1/(2i)$
- Res$_{-i} = -1/(2i)$

総和：$\\text{Res}_{+i} + \\text{Res}_{-i} = 1/(2i) - 1/(2i) = 0$。

$$\\boxed{\\oint_C f\\, dz = 0 \\quad (\\text{任意の } r, r \\ne 1)}$$

$r = 1$：極が積分路上にあり、積分は principal value の意味でのみ定義。

## (3) Taylor 展開
$f(z) = 1/(z^2 + 1) = \\sum_{n=0}^\\infty (-z^2)^n$（$|z|^2 < 1$ で収束）：
$$\\boxed{f(z) = 1 - z^2 + z^4 - z^6 + \\cdots = \\sum_{n=0}^\\infty (-1)^n z^{2n}}$$

収束半径：最も近い特異点 $z = \\pm i$ までの距離 = 1。よって：
$$\\boxed{R = 1}$$

**物理的意味**：解析関数の Taylor 展開の収束半径は、最近接特異点までの距離に等しい。散乱振幅・Green 関数・伝達関数の解析構造は、物理的観測量（応答関数の極 = 共鳴状態、分岐点 = 閾値）の情報を含む。` },

  { id: "todai-2023-math-2", universitySlug: "todai", year: 2023, subject: "数学", problemNumber: 2,
    title: "Jordan 標準形と行列指数関数", field: "math", difficulty: "standard",
    tags: ["Jordan 標準形", "行列指数", "線形 ODE"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2023年度 数学 問2

## 問われている内容
行列 $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ を考える。
(1) $A$ の固有値・固有ベクトルを求め、$A$ が対角化できないことを示せ。
(2) Jordan 標準形 $J$ への相似変換 $A = P J P^{-1}$ を具体的に構成せよ。
(3) 行列指数関数 $e^{At}$ を計算せよ。
(4) 線形微分方程式系 $d\\vec{x}/dt = A\\vec{x}$ の一般解を書け。`,
    solution: `## (1) 対角化不可
特性方程式 $\\det(A - \\lambda I) = (2-\\lambda)^2 = 0 \\Rightarrow \\lambda = 2$（重解）。

固有ベクトル：$(A - 2I)\\vec{v} = 0 \\Rightarrow \\begin{pmatrix} 0 & 1 \\\\ 0 & 0\\end{pmatrix}\\vec{v} = 0$ から $\\vec{v}_1 = (1, 0)^T$ のみ（1 次元固有空間）。重複度 2 に対し固有ベクトル 1 本 → **対角化不可**。

## (2) Jordan 標準形
**一般化固有ベクトル** $\\vec{v}_2$：$(A - 2I)\\vec{v}_2 = \\vec{v}_1 \\Rightarrow \\vec{v}_2 = (0, 1)^T$。

$P = [\\vec{v}_1 | \\vec{v}_2] = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1\\end{pmatrix} = I$、$P^{-1} = I$。なんと $A$ 自身が Jordan 標準形：
$$J = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2\\end{pmatrix} = A$$

## (3) 行列指数関数
$J = 2I + N$、$N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0\\end{pmatrix}$、$N^2 = 0$（冪零）。

$2I$ と $N$ は可換 $\\Rightarrow e^{Jt} = e^{2It}\\cdot e^{Nt}$：
$$e^{2It} = e^{2t}I, \\quad e^{Nt} = I + tN = \\begin{pmatrix} 1 & t \\\\ 0 & 1\\end{pmatrix}$$

$$\\boxed{e^{At} = e^{Jt} = e^{2t}\\begin{pmatrix} 1 & t \\\\ 0 & 1\\end{pmatrix}}$$

## (4) 微分方程式の一般解
$\\vec{x}(t) = e^{At}\\vec{x}(0)$。$\\vec{x}(0) = (c_1, c_2)^T$ とすると：
$$\\vec{x}(t) = e^{2t}(c_1 + c_2 t, c_2)^T$$

**物理的意味**：Jordan ブロックの存在で解に多項式 $t$ が伴う。これは振動系の臨界減衰、縮退摂動論、量子力学における有効ハミルトニアンの非対角化などに現れる。2 次元系では $t\\cdot e^{\\lambda t}$ の "secular" 増大が特徴。` },

  // ---- KYODAI 2023 (+4) ----
  { id: "kyodai-2023-phys-3", universitySlug: "kyodai", year: 2023, subject: "物理学", problemNumber: 3,
    title: "光の分散と Lorentz モデル", field: "optics", difficulty: "advanced",
    tags: ["分散関係", "Lorentz モデル", "屈折率"], isFree: true,
    statement: `**対応問題**: 京都大学 2023年度 物理学 問3

## 問題の設定
質量 $m$、電荷 $-e$ の電子が原子に弾性的に束縛されている（ばね定数 $k$、固有振動数 $\\omega_0 = \\sqrt{k/m}$）。外部から角振動数 $\\omega$、振幅 $E_0$ の電場が入射：
$$m\\ddot{x} + m\\gamma\\dot{x} + m\\omega_0^2 x = -eE_0 e^{-i\\omega t}$$
（$\\gamma$: 減衰）。電子密度 $N$。

## 問われている内容
(1) 定常解 $x(t)$ を求めよ。
(2) 分極 $P = -Nex$ から比誘電率 $\\varepsilon_r(\\omega) = 1 + P/(\\varepsilon_0 E)$ を求めよ（Lorentz 分散式）。
(3) 低周波 $\\omega \\ll \\omega_0$、高周波 $\\omega \\gg \\omega_0$ での $\\varepsilon_r$ の振る舞いを論ぜよ。
(4) 共鳴領域 $\\omega \\sim \\omega_0$ での吸収と異常分散を説明せよ。`,
    solution: `## (1) 定常解
$x(t) = x_0 e^{-i\\omega t}$ と仮定：
$$-m\\omega^2 x_0 - im\\gamma\\omega x_0 + m\\omega_0^2 x_0 = -eE_0$$
$$x_0 = \\frac{-eE_0/m}{\\omega_0^2 - \\omega^2 - i\\gamma\\omega}$$

## (2) Lorentz 分散式
$P_0 = -Nex_0 = (Ne^2/m)E_0/(\\omega_0^2 - \\omega^2 - i\\gamma\\omega)$。比誘電率：
$$\\boxed{\\varepsilon_r(\\omega) = 1 + \\frac{Ne^2/(m\\varepsilon_0)}{\\omega_0^2 - \\omega^2 - i\\gamma\\omega}}$$

プラズマ振動数 $\\omega_p = \\sqrt{Ne^2/(m\\varepsilon_0)}$ で：
$$\\varepsilon_r = 1 + \\frac{\\omega_p^2}{\\omega_0^2 - \\omega^2 - i\\gamma\\omega}$$

## (3) 極限
- **低周波** $\\omega \\ll \\omega_0$：$\\varepsilon_r \\approx 1 + \\omega_p^2/\\omega_0^2$（定数、静的誘電率）
- **高周波** $\\omega \\gg \\omega_0$：$\\varepsilon_r \\approx 1 - \\omega_p^2/\\omega^2$（$\\omega < \\omega_p$ で $\\varepsilon_r < 0$ → 光は伝搬せず反射、金属の反射率）

## (4) 共鳴領域
$\\omega \\sim \\omega_0$：分母が小。$\\varepsilon_r$ の**虚部**（吸収）は $\\gamma\\omega \\omega_p^2/((\\omega_0^2-\\omega^2)^2 + \\gamma^2\\omega^2)$ でピーク（Lorentz プロファイル）。

**異常分散**：$\\omega_0$ 直前では $\\text{Re}(\\varepsilon_r)$ が増加、直後で急減 → 屈折率 $n$ が振動数とともに**減少**する区間が現れる（通常は $n$ は $\\omega$ とともに増加）。これが異常分散。

**物理的意味**：Lorentz モデルは光の吸収・分散・反射の統一的理解を与える。量子論的には電子の遷移スペクトル（原子線、分子吸収帯）を古典的に模擬。物質の屈折率の波長依存性（プリズム分光）、金属光学、偏光子、レーザー媒質の設計で基本。Kramers-Kronig 関係はこのモデルの因果律的帰結。` },

  { id: "kyodai-2023-phys-4", universitySlug: "kyodai", year: 2023, subject: "物理学", problemNumber: 4,
    title: "Poisson 括弧と正準変換", field: "mechanics", difficulty: "advanced",
    tags: ["Poisson 括弧", "正準変換", "ハミルトニアン力学"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2023年度 物理学 問4

## 問題の設定
正準座標 $(q, p)$ に対し、Hamilton 力学の Poisson 括弧：
$$\\{f, g\\} = \\frac{\\partial f}{\\partial q}\\frac{\\partial g}{\\partial p} - \\frac{\\partial f}{\\partial p}\\frac{\\partial g}{\\partial q}$$

## 問われている内容
(1) 基本 Poisson 括弧 $\\{q, p\\}, \\{q, q\\}, \\{p, p\\}$ を計算せよ。
(2) 任意関数 $f(q, p, t)$ について、$df/dt = \\{f, H\\} + \\partial f/\\partial t$ を導け。
(3) 角運動量 $L_z = x p_y - y p_x$ について $\\{L_x, L_y\\}$ を計算し、交換関係が $\\{L_x, L_y\\} = L_z$ となることを示せ（$L_x = y p_z - z p_y$ 等）。
(4) 正準変換 $(q, p) \\to (Q, P)$ で Poisson 括弧が不変 $(\\{Q, P\\} = 1)$ となる条件を示せ。`,
    solution: `## (1) 基本 Poisson 括弧
$\\{q, p\\} = (\\partial q/\\partial q)(\\partial p/\\partial p) - 0 = 1$
$\\{q, q\\} = \\{p, p\\} = 0$（自己括弧は反対称性から）

## (2) 時間発展
$f(q(t), p(t), t)$ の全微分：
$$\\frac{df}{dt} = \\frac{\\partial f}{\\partial q}\\dot q + \\frac{\\partial f}{\\partial p}\\dot p + \\frac{\\partial f}{\\partial t}$$

Hamilton 方程式 $\\dot q = \\partial H/\\partial p$, $\\dot p = -\\partial H/\\partial q$ を代入：
$$\\frac{df}{dt} = \\frac{\\partial f}{\\partial q}\\frac{\\partial H}{\\partial p} - \\frac{\\partial f}{\\partial p}\\frac{\\partial H}{\\partial q} + \\frac{\\partial f}{\\partial t} = \\{f, H\\} + \\frac{\\partial f}{\\partial t}$$

$\\partial f/\\partial t = 0$ で $\\{f, H\\} = 0$ ⇔ $f$ は保存量。

## (3) 角運動量の Poisson 括弧
$L_x = y p_z - z p_y$、$L_y = z p_x - x p_z$。$\\{L_x, L_y\\}$ を展開：

微分の連鎖則により複数項が現れるが、異なる座標・運動量成分は独立なので交差項は Kronecker delta で生き残る：
$$\\{L_x, L_y\\} = \\{y p_z, z p_x\\} + \\{y p_z, -x p_z\\} + \\{-z p_y, z p_x\\} + \\{-z p_y, -x p_z\\}$$

$\\{y p_z, z p_x\\} = -y p_x$（$\\{p_z, z\\} = -1$）、他を計算して整理：
$$\\{L_x, L_y\\} = x p_y - y p_x = L_z$$

$$\\boxed{\\{L_x, L_y\\} = L_z}$$

量子力学の交換関係 $[\\hat{L}_x, \\hat{L}_y] = i\\hbar\\hat{L}_z$ と同じ代数構造（Lie 代数 $\\mathfrak{so}(3)$）。

## (4) 正準変換の条件
$(Q(q,p), P(q,p))$ が正準変換 ⇔ 基本 Poisson 括弧が不変：
$$\\{Q, P\\} = 1, \\quad \\{Q, Q\\} = \\{P, P\\} = 0$$

$\\{Q, P\\} = (\\partial Q/\\partial q)(\\partial P/\\partial p) - (\\partial Q/\\partial p)(\\partial P/\\partial q) = 1$ は Jacobian $|\\partial(Q,P)/\\partial(q,p)| = 1$ と等価（面積保存、Liouville 定理）。

**物理的意味**：Poisson 括弧は Hamilton 力学の構造を代数化する道具。量子化では $\\{A, B\\} \\to (1/i\\hbar)[\\hat{A}, \\hat{B}]$（Dirac の対応原理）。正準変換は Hamilton 系の対称性、可積分性（作用-角変数）、カオス理論の基礎。` },

  { id: "kyodai-2023-math-1", universitySlug: "kyodai", year: 2023, subject: "数学", problemNumber: 1,
    title: "微分方程式系と相平面解析", field: "math", difficulty: "standard",
    tags: ["相平面", "固有値", "安定性"], isFree: true,
    statement: `**対応問題**: 京都大学 2023年度 数学 問1

## 問われている内容
2 次元線形微分方程式系
$$\\frac{d}{dt}\\begin{pmatrix} x \\\\ y\\end{pmatrix} = A\\begin{pmatrix} x \\\\ y\\end{pmatrix}$$
の原点まわりの相平面を、$A$ の固有値の組で分類する。

(1) $A$ の固有値が実数で符号が同じ場合（$\\lambda_1 \\lambda_2 > 0$）：固定点の性質（安定結節 vs 不安定結節）を述べよ。
(2) $A$ の固有値が実数で符号が異なる場合（$\\lambda_1 \\lambda_2 < 0$）：鞍点の相図を描写せよ。
(3) $A$ の固有値が複素共役（$\\alpha \\pm i\\beta$）：中心・渦状の相図を述べよ。
(4) 具体例 $A = \\begin{pmatrix} -1 & 2 \\\\ -2 & -1\\end{pmatrix}$ について固有値を計算し、相図を分類せよ。`,
    solution: `## (1) 同符号の実固有値
- $\\lambda_1, \\lambda_2 < 0$：**安定結節** (node)。全軌道が原点に向かう。固有ベクトル方向の接線が 2 種。
- $\\lambda_1, \\lambda_2 > 0$：**不安定結節**。全軌道が原点から離れる。

## (2) 鞍点 (saddle)
$\\lambda_1 > 0 > \\lambda_2$：原点は鞍点。$\\lambda_2$ 固有ベクトル方向は安定多様体（原点に吸い込まれる）、$\\lambda_1$ 固有ベクトル方向は不安定多様体（離れる）。ほとんどの初期条件は双曲的 $x \\to +\\infty$ 方向に発散。

## (3) 複素固有値
$\\lambda = \\alpha \\pm i\\beta$（$\\beta \\ne 0$）：
- $\\alpha = 0$：中心 (center)。閉じた楕円軌道、周期運動。
- $\\alpha < 0$：安定渦状点 (spiral)。螺旋状に原点に巻き込む。
- $\\alpha > 0$：不安定渦状点。

## (4) 具体例
$\\det(A - \\lambda I) = (-1-\\lambda)^2 + 4 = 0 \\Rightarrow \\lambda = -1 \\pm 2i$

$\\alpha = -1 < 0$、$\\beta = 2 \\ne 0$：**安定渦状点**。角振動数 $\\beta = 2$、減衰時間 $1/|\\alpha| = 1$。

**相図**：原点を中心に時計回り（または反時計回り、$A$ の非対角成分の符号による）の螺旋で、$t \\to \\infty$ で原点に収束。

**物理的意味**：相平面解析は非線形ダイナミクスの基本道具。減衰振動、捕食-被食モデル（Lotka-Volterra）、van der Pol 発振器、神経科学（Fitzhugh-Nagumo モデル）など、幅広い応用。線形化して固定点近傍の局所挙動を分類 → 大域的ダイナミクスを把握。` },

  { id: "kyodai-2023-math-2", universitySlug: "kyodai", year: 2023, subject: "数学", problemNumber: 2,
    title: "Hermite 多項式と直交性", field: "math", difficulty: "advanced",
    tags: ["Hermite 多項式", "直交関数系", "調和振動子"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2023年度 数学 問2

## 問われている内容
Hermite 多項式 $H_n(x)$ を Rodrigues 表示
$$H_n(x) = (-1)^n e^{x^2}\\frac{d^n}{dx^n} e^{-x^2}$$
で定義する。

(1) $H_0, H_1, H_2, H_3$ を具体的に求めよ。
(2) Hermite 多項式の直交性
$$\\int_{-\\infty}^{\\infty}H_m(x)H_n(x)e^{-x^2}\\,dx = \\sqrt{\\pi}\\,2^n n!\\,\\delta_{mn}$$
を $m < n$ の場合について、部分積分で示せ。
(3) 量子力学の調和振動子の固有状態 $\\psi_n(x) \\propto H_n(\\alpha x)e^{-\\alpha^2 x^2/2}$（$\\alpha = \\sqrt{m\\omega/\\hbar}$）への関連を述べよ。`,
    solution: `## (1) 具体計算
- $H_0 = (-1)^0 e^{x^2} e^{-x^2} = 1$
- $H_1 = -e^{x^2}(-2x e^{-x^2}) = 2x$
- $H_2 = e^{x^2}(4x^2 e^{-x^2} - 2 e^{-x^2}) = 4x^2 - 2$
- $H_3$：$d^3(e^{-x^2})/dx^3 = (8x^3 - 12x)(-1)e^{-x^2}$、$H_3 = 8x^3 - 12x$

$$\\boxed{H_0 = 1,\\; H_1 = 2x,\\; H_2 = 4x^2 - 2,\\; H_3 = 8x^3 - 12x}$$

## (2) 直交性（$m < n$）
$$I = \\int H_m H_n e^{-x^2}\\, dx = (-1)^n \\int H_m D^n(e^{-x^2})\\,dx$$

（$D = d/dx$）。部分積分 $n$ 回、表面項は $|x|\\to\\infty$ で $e^{-x^2}$ が十分速く落ちるので消える：
$$I = (-1)^n \\cdot (-1)^n \\int (D^n H_m) e^{-x^2}\\,dx = \\int D^n H_m \\cdot e^{-x^2}\\,dx$$

$H_m$ は $m$ 次多項式で $m < n$ なので $D^n H_m = 0$：$I = 0$ ✅。

## (3) 調和振動子への関連
量子調和振動子のシュレーディンガー方程式を $\\xi = \\alpha x$（$\\alpha = \\sqrt{m\\omega/\\hbar}$）で無次元化すると：
$$-\\frac{d^2\\psi}{d\\xi^2} + \\xi^2 \\psi = \\lambda\\psi, \\quad \\lambda = 2E/(\\hbar\\omega)$$

解は $\\psi_n(\\xi) = N_n H_n(\\xi) e^{-\\xi^2/2}$（$n = 0, 1, 2,\\ldots$）、エネルギー $E_n = (n + 1/2)\\hbar\\omega$。

規格化：$\\int|\\psi_n|^2 d\\xi/\\alpha = 1$ から $N_n = (\\alpha/\\pi)^{1/4}/\\sqrt{2^n n!}$。

**直交完備性**：$\\{\\psi_n\\}$ は $L^2(\\mathbb{R})$ の完全正規直交基底。任意の波動関数 $\\phi(x)$ は $\\phi = \\sum c_n \\psi_n$ と展開でき、$c_n$ は Fourier 係数。

**物理的意味**：Hermite 多項式は調和振動子、量子光学（コヒーレント状態）、連続対称性（Gauss 重み付きモーメント）、統計学（正規分布との積分）で普遍的。Legendre 多項式（球面、角運動量）、Bessel 関数（円筒対称）と並ぶ特殊関数の三巨頭。` },

  // ---- TITECH 2023 (+4) ----
  { id: "titech-2023-phys-2", universitySlug: "titech", year: 2023, subject: "物理学", problemNumber: 2,
    title: "Kepler の法則と惑星運動", field: "mechanics", difficulty: "standard",
    tags: ["Kepler の法則", "楕円軌道", "万有引力"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2023年度 物理学 問2

## 問題の設定
質量 $m$ の惑星が質量 $M$（$\\gg m$）の太陽のまわりを公転する。万有引力定数 $G$。

## 問われている内容
(1) 角運動量保存則が「面積速度一定」（Kepler 第 2 法則）と等価であることを示せ。
(2) 楕円軌道の長半径 $a$、周期 $T$ の関係 $T^2 \\propto a^3$（Kepler 第 3 法則）を、エネルギー保存と角運動量保存から導け。
(3) 遠日点距離 $r_a$、近日点距離 $r_p$ を離心率 $e$ で表せ。
(4) 第一宇宙速度と第二宇宙速度を区別し、それぞれの意味を述べよ。`,
    solution: `## (1) 面積速度一定
面積速度 $dA/dt = (1/2)r^2\\dot\\phi$（極座標）。角運動量 $L = mr^2\\dot\\phi$ から：
$$dA/dt = L/(2m) = \\text{const}$$

角運動量保存（中心力場で自動的）⇔ 面積速度一定。

## (2) Kepler 第 3 法則
楕円の面積 $A = \\pi ab$（$b$：短半径）。1 周期で掃く面積 = $\\pi a b = (L/2m) T$：
$$T = 2\\pi m ab/L$$

エネルギー $E = -GMm/(2a)$（楕円軌道の性質）、$L^2 = GMm^2 a(1-e^2) = GMm^2 b^2/a$（$b^2 = a^2(1-e^2)$）から：
$$T^2 = 4\\pi^2 m^2 a^2 b^2/L^2 = 4\\pi^2 m^2 a^2 \\cdot a(1-e^2)/[GMm^2(1-e^2)] = \\frac{4\\pi^2}{GM}a^3$$

$$\\boxed{T^2 = \\frac{4\\pi^2}{GM}a^3}$$

## (3) 遠・近日点
楕円軌道の焦点に太陽。遠日点・近日点は長軸端：
$$r_a = a(1 + e), \\quad r_p = a(1 - e)$$

$e = 0$ で円（両点等距離）、$e \\to 1$ で放物線極限。

## (4) 宇宙速度
- **第一宇宙速度** $v_1 = \\sqrt{GM_\\oplus/R_\\oplus} \\approx 7.9\\,\\text{km/s}$：地球表面すれすれの円軌道速度
- **第二宇宙速度** $v_2 = \\sqrt{2GM_\\oplus/R_\\oplus} = \\sqrt{2}v_1 \\approx 11.2\\,\\text{km/s}$：地球の重力を振り切って無限遠へ脱出するのに必要な速度

差：$v_1$ は束縛軌道（楕円）への最小、$v_2$ は開放軌道（放物線・双曲線）への閾値。

**物理的意味**：Kepler の法則は Newton 力学（万有引力 + 第二法則）から導ける。1687 年 Newton『プリンキピア』で実現した古典力学の大成功。現代では GPS、惑星探査、衛星通信すべての軌道計画の基礎。` },

  { id: "titech-2023-phys-3", universitySlug: "titech", year: 2023, subject: "物理学", problemNumber: 3,
    title: "Poynting ベクトルとエネルギー流", field: "electromagnetism", difficulty: "standard",
    tags: ["Poynting ベクトル", "電磁波エネルギー", "放射"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2023年度 物理学 問3

## 問題の設定
真空中の電磁場 $(\\vec{E}, \\vec{B})$ のエネルギー密度と流れを考える。真空の誘電率 $\\varepsilon_0$、透磁率 $\\mu_0$、$c = 1/\\sqrt{\\mu_0\\varepsilon_0}$。

## 問われている内容
(1) 電磁場のエネルギー密度 $u$ を $\\vec{E}, \\vec{B}$ で書け。
(2) Poynting ベクトル $\\vec{S} = (1/\\mu_0)\\vec{E}\\times\\vec{B}$ を定義し、エネルギー保存則 $\\partial u/\\partial t + \\nabla\\cdot\\vec{S} = -\\vec{j}\\cdot\\vec{E}$ を Maxwell 方程式から導け。
(3) 平面電磁波 $\\vec{E} = E_0\\hat{x}\\cos(kz - \\omega t)$、$\\vec{B} = (E_0/c)\\hat{y}\\cos(kz - \\omega t)$ の時間平均 $\\langle\\vec{S}\\rangle$ を求めよ。
(4) 強度 $I = |\\langle\\vec{S}\\rangle|$ を単位面積・単位時間のエネルギーとして、光のパワー密度（太陽光 $I \\sim 1.4\\,\\text{kW/m}^2$）から電場振幅 $E_0$ を見積もれ。`,
    solution: `## (1) エネルギー密度
$$u = \\frac{\\varepsilon_0}{2}|\\vec{E}|^2 + \\frac{1}{2\\mu_0}|\\vec{B}|^2$$

## (2) 保存則の導出
Maxwell 方程式：$\\nabla\\times\\vec{E} = -\\partial\\vec{B}/\\partial t$、$\\nabla\\times\\vec{B} = \\mu_0\\vec{j} + \\mu_0\\varepsilon_0\\partial\\vec{E}/\\partial t$。

$\\vec{E}\\cdot$（第 1 式）＋ $(\\vec{B}/\\mu_0)\\cdot$（第 2 式）を操作、ベクトル恒等式 $\\nabla\\cdot(\\vec{E}\\times\\vec{B}) = \\vec{B}\\cdot(\\nabla\\times\\vec{E}) - \\vec{E}\\cdot(\\nabla\\times\\vec{B})$ を使って整理：
$$\\frac{\\partial u}{\\partial t} + \\nabla\\cdot\\vec{S} = -\\vec{j}\\cdot\\vec{E}$$

$\\vec{j}\\cdot\\vec{E}$：電場が電流にする仕事（Joule 熱の源）。$\\vec{j} = 0$ では真空中でエネルギー保存。

## (3) 平面波の Poynting ベクトル
$\\vec{E}\\times\\vec{B} = E_0 \\hat{x}\\cos\\theta \\times (E_0/c)\\hat{y}\\cos\\theta = (E_0^2/c)\\hat{z}\\cos^2\\theta$（$\\theta = kz - \\omega t$）：
$$\\vec{S} = \\frac{E_0^2}{c\\mu_0}\\hat{z}\\cos^2(kz - \\omega t) = c\\varepsilon_0 E_0^2 \\hat{z}\\cos^2(kz-\\omega t)$$

$\\langle\\cos^2\\rangle = 1/2$：
$$\\boxed{\\langle\\vec{S}\\rangle = \\frac{c\\varepsilon_0 E_0^2}{2}\\hat{z}}$$

## (4) 電場振幅の見積もり
$I = c\\varepsilon_0 E_0^2/2 = 1.4\\times 10^3\\,\\text{W/m}^2$、$c\\varepsilon_0 \\approx 2.65\\times 10^{-3}$：
$$E_0 = \\sqrt{2I/(c\\varepsilon_0)} \\approx \\sqrt{2 \\times 1400/(2.65\\times 10^{-3})} \\approx 1000\\,\\text{V/m}$$

**物理的意味**：Poynting ベクトルは電磁場のエネルギー流の密度。太陽放射、アンテナ放射、光導波路、レーザーの出力計算で基本。$\\vec{S} \\propto \\vec{E}\\times\\vec{B}$ は電磁波の進行方向（Poynting の定理）を決め、同時に輻射圧 $P_{\\text{rad}} = |\\vec{S}|/c$（光の運動量）の源でもある。` },

  { id: "titech-2023-phys-4", universitySlug: "titech", year: 2023, subject: "物理学", problemNumber: 4,
    title: "WKB 近似とトンネル効果の透過率", field: "quantum", difficulty: "advanced",
    tags: ["WKB 近似", "トンネル効果", "透過率"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2023年度 物理学 問4

## 問題の設定
1 次元障壁ポテンシャル $V(x)$（最大値 $V_{\\max}$）にエネルギー $E < V_{\\max}$ の粒子が入射する。古典的転回点 $x_1, x_2$（$V(x_{1,2}) = E$）の間で古典的に禁制。

## 問われている内容
(1) WKB 近似の基礎：禁制領域での波動関数の振る舞い $\\psi \\sim \\exp(\\pm\\int\\kappa\\, dx)$、$\\kappa = \\sqrt{2m(V-E)}/\\hbar$ を示せ（Schrödinger 方程式の解析から）。
(2) 透過率の WKB 公式
$$T \\approx \\exp\\left[-2\\int_{x_1}^{x_2}\\kappa(x)\\,dx\\right]$$
の物理的解釈を述べよ。
(3) 矩形障壁 $V(x) = V_0$（$0 < x < a$）の場合に WKB 公式を適用し、$T$ を計算せよ。
(4) 核アルファ崩壊（Gamow のトンネル）の定性的理解を述べよ。`,
    solution: `## (1) WKB 近似
禁制領域 $V > E$ で Schrödinger 方程式 $-\\hbar^2\\psi''/(2m) + V\\psi = E\\psi$ を $\\psi = e^{S/\\hbar}$ と書き、$\\hbar$ 展開：

主要項 $(S_0')^2 = -2m(V-E) \\Rightarrow S_0 = \\pm i\\hbar\\int\\kappa\\,dx$ ではなく実数値 $\\pm\\int\\kappa\\,dx$（指数減衰・成長）。

$$\\psi(x) \\sim \\frac{1}{\\sqrt{\\kappa}}\\exp\\left(\\pm\\int\\kappa\\,dx\\right)$$

（プリファクタ $1/\\sqrt{\\kappa}$ は次次オーダーから）

## (2) 透過率公式
禁制領域で波動関数が指数減衰する係数：$\\psi(x_2)/\\psi(x_1) \\sim \\exp(-\\int_{x_1}^{x_2}\\kappa\\,dx)$

確率は振幅の 2 乗：
$$T \\sim |\\psi(x_2)/\\psi(x_1)|^2 = \\exp\\left[-2\\int_{x_1}^{x_2}\\kappa\\,dx\\right]$$

**物理的解釈**：障壁内部での波束振幅の幾何平均減衰率。$\\int\\kappa\\,dx$ は「禁制距離を量子振幅で測った量」、大きいほどトンネル困難。

## (3) 矩形障壁
$V = V_0$ 一定、$\\kappa = \\sqrt{2m(V_0-E)}/\\hbar$ 一定：
$$\\int_0^a \\kappa\\,dx = \\kappa a$$
$$T \\approx e^{-2\\kappa a}$$

**正確解との比較**：$T_{\\text{exact}} = [1 + V_0^2\\sinh^2(\\kappa a)/(4E(V_0-E))]^{-1}$。$\\kappa a \\gg 1$ で WKB と一致：$T \\to 16 E(V_0-E)/V_0^2 \\cdot e^{-2\\kappa a}$。

## (4) アルファ崩壊
重い核（Uran 等）の内部で $\\alpha$ 粒子は Coulomb 障壁に閉じ込められる。核の強相互作用が障壁内で引力ポテンシャル、外部はクーロン斥力 $\\propto 1/r$。

WKB で透過率を評価すると：
$$T \\sim \\exp\\left(-\\int_{R_n}^{R_c}\\kappa\\,dr\\right) \\sim \\exp(-a/\\sqrt{E_\\alpha})$$

$E_\\alpha$：$\\alpha$ 粒子エネルギー。半減期 $\\tau = \\ln 2/(T\\cdot f)$（$f$ は試行頻度 $\\sim 10^{21}\\text{Hz}$）が $E_\\alpha$ にべき的に依存 → **Geiger-Nuttall 則**。

**物理的意味**：トンネル効果の古典的応用例。半減期が 10 桁以上にわたって $E_\\alpha$ と相関（U-238：$4.5\\times 10^9$ 年、Po-212：$3\\times 10^{-7}$ 秒）。$\\alpha$ 線スペクトロスコピー、走査トンネル顕微鏡 (STM)、Josephson 接合、核融合 (Gamow ピーク) で普遍的。` },

  { id: "titech-2023-phys-5", universitySlug: "titech", year: 2023, subject: "物理学", problemNumber: 5,
    title: "相転移と Clausius-Clapeyron 式", field: "thermodynamics", difficulty: "advanced",
    tags: ["Clausius-Clapeyron", "相共存", "潜熱"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2023年度 物理学 問5

## 問題の設定
物質の相 $\\alpha$ と $\\beta$ の共存線 $P(T)$ を考える。比 Gibbs 自由エネルギー $g_\\alpha = g_\\beta$ が共存条件。

## 問われている内容
(1) 共存線の 2 点 $(T, P)$ と $(T + dT, P + dP)$ で $g_\\alpha = g_\\beta$ を両方満たす条件から、Clausius-Clapeyron 式
$$\\frac{dP}{dT} = \\frac{\\Delta s}{\\Delta v} = \\frac{L}{T\\Delta v}$$
を導け（$\\Delta s, \\Delta v$: 相変化のエントロピー・体積差、$L = T\\Delta s$：潜熱）。
(2) 水-水蒸気の相転移で、水蒸気を理想気体（$\\Delta v \\approx v_{\\text{gas}} = RT/P$）として扱うと、積分形（Clausius-Clapeyron の積分形）になることを示せ。
(3) 氷-水の相転移で $\\Delta v < 0$（氷が水より軽い）。$dP/dT < 0$ の符号が意味することを説明。
(4) 高圧下での融点変化（スケーター現象、アイススケートが滑る理由）を定性的に論ぜよ。`,
    solution: `## (1) Clausius-Clapeyron 式の導出
共存条件 $g_\\alpha(T, P) = g_\\beta(T, P)$ を微分：
$$dg_\\alpha = dg_\\beta \\Rightarrow -s_\\alpha dT + v_\\alpha dP = -s_\\beta dT + v_\\beta dP$$

（$dg = -s dT + v dP$、比量）。整理：
$$(v_\\beta - v_\\alpha)dP = (s_\\beta - s_\\alpha)dT$$

$$\\boxed{\\frac{dP}{dT} = \\frac{\\Delta s}{\\Delta v} = \\frac{L}{T\\Delta v}}$$

## (2) 理想気体近似の積分形
$\\Delta v \\approx v_{\\text{gas}} = RT/P$、潜熱 $L$ を一定と仮定：
$$\\frac{dP}{dT} = \\frac{LP}{RT^2} \\Rightarrow \\frac{d(\\ln P)}{dT} = \\frac{L}{RT^2}$$

積分：
$$\\boxed{\\ln P - \\ln P_0 = -\\frac{L}{R}\\left(\\frac{1}{T} - \\frac{1}{T_0}\\right)}$$

$P \\propto e^{-L/(RT)}$ の Arrhenius 形。蒸気圧の温度依存性を与える。

## (3) 氷-水の異常性
氷 → 液体水で体積減少（$\\Delta v < 0$、水の異常：最大密度 4°C で液体 > 固体）。潜熱 $L > 0$（吸熱）。
$$\\frac{dP}{dT} = \\frac{L}{T\\Delta v} < 0$$

**意味**：圧力を上げると融点が**下がる**（水以外の普通の物質とは逆）。

## (4) スケート
氷上で刃が高圧をかけると、局所的に融点降下 → 薄い水膜形成 → 潤滑で滑りやすくなる。

**定量評価**：$L_{\\text{水}} \\approx 334\\,\\text{J/g}$、$\\Delta v \\approx -9\\times 10^{-5}\\,\\text{m}^3/\\text{kg}$、$T \\approx 273\\,\\text{K}$：
$$\\frac{dP}{dT} \\approx -1.4\\times 10^7\\,\\text{Pa/K}$$

1 K の降下に 140 気圧必要。通常のスケーターの圧力（体重 60 kg を刃 $\\sim 10^{-4}\\,\\text{m}^2$ に集中）では 60 気圧で $\\Delta T \\sim -0.04\\,\\text{K}$ と微小。実際には摩擦熱の方が効く。

**物理的意味**：Clausius-Clapeyron 式は 1 次相転移の共存線を特徴付ける普遍則。水-水蒸気（気候、雲形成）、金属の溶解・凝固（冶金）、超伝導の $B_c(T)$ 依存性など応用多数。` },

  // ---- TOHOKU 2023 (+4) ----
  { id: "tohoku-2023-phys-2", universitySlug: "tohoku", year: 2023, subject: "物理学", problemNumber: 2,
    title: "連成振り子と正規モード", field: "mechanics", difficulty: "standard",
    tags: ["連成振り子", "正規モード", "固有振動"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2023年度 物理学 問2

## 問題の設定
長さ $\\ell$、質量 $m$ の単振り子 2 個が水平距離 $d$ の位置にあり、質点同士をばね定数 $k$ の軽いばねで連結する。重力加速度 $g$、微小振動（振り子の角度 $\\theta_1, \\theta_2$ 小）。

## 問われている内容
(1) 運動方程式を $\\theta_1, \\theta_2$ の連立方程式として書け（ばねによる相対変位の復元力を含む）。
(2) 正規モード（対称モード・反対称モード）を求め、それぞれの角振動数 $\\omega_+, \\omega_-$ を計算せよ。
(3) 初期条件 $\\theta_1(0) = \\theta_0, \\theta_2(0) = 0, \\dot\\theta_{1,2}(0) = 0$（片方だけ振らせて放す）での解を求めよ。
(4) $\\omega_+ \\approx \\omega_-$ の場合に**うなり**が発生することを定性的に説明せよ。`,
    solution: `## (1) 運動方程式
ばねによる質点 1 への力：$-k(\\ell\\theta_1 - \\ell\\theta_2)$（$\\theta$ 小で質点の水平変位 $\\approx \\ell\\theta$）。振り子の復元力 $-mg\\theta$：
$$m\\ell\\ddot\\theta_1 = -mg\\theta_1 - k\\ell(\\theta_1 - \\theta_2)$$
$$m\\ell\\ddot\\theta_2 = -mg\\theta_2 - k\\ell(\\theta_2 - \\theta_1)$$

整理（$\\omega_0^2 = g/\\ell$、$\\Omega^2 = k/m$）：
$$\\ddot\\theta_1 = -\\omega_0^2\\theta_1 - \\Omega^2(\\theta_1 - \\theta_2)$$
$$\\ddot\\theta_2 = -\\omega_0^2\\theta_2 - \\Omega^2(\\theta_2 - \\theta_1)$$

## (2) 正規モード
**対称モード** $\\theta_s = (\\theta_1 + \\theta_2)/2$：式を足し合わせて
$$\\ddot\\theta_s = -\\omega_0^2\\theta_s \\Rightarrow \\omega_+ = \\omega_0 = \\sqrt{g/\\ell}$$

**反対称モード** $\\theta_a = (\\theta_1 - \\theta_2)/2$：引き算
$$\\ddot\\theta_a = -(\\omega_0^2 + 2\\Omega^2)\\theta_a \\Rightarrow \\omega_- = \\sqrt{g/\\ell + 2k/m}$$

## (3) 特定初期条件の解
一般解：$\\theta_1 = A_+\\cos\\omega_+ t + A_-\\cos\\omega_- t$、$\\theta_2 = A_+\\cos\\omega_+ t - A_-\\cos\\omega_- t$。

初期条件 $\\theta_1(0) = \\theta_0, \\theta_2(0) = 0$：$A_+ + A_- = \\theta_0, A_+ - A_- = 0 \\Rightarrow A_\\pm = \\theta_0/2$

$$\\theta_1(t) = \\frac{\\theta_0}{2}(\\cos\\omega_+ t + \\cos\\omega_- t) = \\theta_0\\cos(\\omega_+ t)\\cos(\\Delta\\omega \\cdot t)$$

（和積公式、$\\omega_+ = (\\omega_+ + \\omega_-)/2$、$\\Delta\\omega = (\\omega_- - \\omega_+)/2$ と近似）

## (4) うなり
$\\Omega \\ll \\omega_0 \\Rightarrow \\omega_+ \\approx \\omega_-$、$\\Delta\\omega$ 小。$\\theta_1(t)$ は高速振動 $\\cos(\\omega_+ t)$ と遅い包絡線 $\\cos(\\Delta\\omega \\cdot t)$ の積 → **うなり**。

エネルギーが 2 つの振り子の間を周期的に行き来する：$\\theta_1$ 最大 ↔ $\\theta_2$ 最大が $T_{\\text{beat}} = \\pi/\\Delta\\omega$ ごとに交互。

**物理的意味**：量子力学の 2 準位系と同型（Rabi 振動）。結合振動子は化学結合、分子振動モード（赤外分光）、連成電気回路、音響システムで普遍的。` },

  { id: "tohoku-2023-phys-3", universitySlug: "tohoku", year: 2023, subject: "物理学", problemNumber: 3,
    title: "Bernoulli 方程式と流体", field: "mechanics", difficulty: "standard",
    tags: ["Bernoulli の定理", "流体", "Pitot 管"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2023年度 物理学 問3

## 問題の設定
非圧縮性・非粘性・定常な流体の流れを考える（密度 $\\rho$）。重力場 $\\vec{g}$。

## 問われている内容
(1) Bernoulli の定理
$$\\frac{1}{2}\\rho v^2 + \\rho g z + P = \\text{const}$$
を、Euler 方程式と流線に沿った線積分から導け。
(2) タンクから小孔を通じて流出する水の流速（Torricelli の定理）を Bernoulli から導け。
(3) Pitot 管（航空機の速度計）の原理を説明せよ：動圧 $(1/2)\\rho v^2$ と静圧 $P$ の差から流速を測定。
(4) ベンチュリ管で流速が狭窄部で増加し、圧力が減少することを示せ（連続の式と Bernoulli）。`,
    solution: `## (1) Bernoulli の定理
非粘性 Euler 方程式：$\\rho(\\partial\\vec{v}/\\partial t + (\\vec{v}\\cdot\\nabla)\\vec{v}) = -\\nabla P + \\rho\\vec{g}$

定常 $\\partial\\vec{v}/\\partial t = 0$、重力 $\\vec{g} = -g\\hat{z}$。流線方向 $\\hat{t}$ の接線成分：
$$\\rho v\\frac{dv}{ds} = -\\frac{dP}{ds} - \\rho g\\frac{dz}{ds}$$

$s$：流線に沿った弧長、$v\\,dv/ds = d(v^2/2)/ds$：
$$\\frac{d}{ds}\\left(\\frac{\\rho v^2}{2} + P + \\rho g z\\right) = 0$$

流線に沿って括弧内量が一定：Bernoulli の定理。

## (2) Torricelli の定理
タンク水面（静止、圧力 $P_0$、高さ $h$）と小孔（流速 $v$、圧力 $P_0$、高さ 0）で Bernoulli：
$$P_0 + \\rho g h = P_0 + \\tfrac{1}{2}\\rho v^2$$
$$\\boxed{v = \\sqrt{2gh}}$$

自由落下速度と同じ。

## (3) Pitot 管
流れに向けた開口部（動圧 $+$ 静圧 = 全圧 $P_s + (1/2)\\rho v^2$）と横向き開口（静圧 $P_s$）の圧力差：
$$\\Delta P = \\tfrac{1}{2}\\rho v^2 \\Rightarrow v = \\sqrt{2\\Delta P/\\rho}$$

空気密度既知で $\\Delta P$ から $v$ を算出。航空機の対気速度計、風速計に応用。

## (4) ベンチュリ管
断面積 $A_1 \\to A_2$（$A_2 < A_1$）の狭窄。連続の式：$A_1 v_1 = A_2 v_2 \\Rightarrow v_2 > v_1$。

Bernoulli：$P_1 + (1/2)\\rho v_1^2 = P_2 + (1/2)\\rho v_2^2$、$v_2 > v_1 \\Rightarrow P_2 < P_1$。

**狭いところで流速増加・圧力減少**（ベルヌーイ効果）。応用：ガソリンキャブレター、流量計、翼の揚力（上面は曲がって流速大、下面は直線で流速小 → 上面圧低 → 揚力）。

**物理的意味**：Bernoulli の定理は流体力学の基本。気象（竜巻の圧力分布）、血流（狭窄部での血圧低下）、航空工学（翼型、超音速ノズル）、スポーツ（カーブボール）など広範な応用。$1/2 \\rho v^2$ は「動圧」として運動量流束の圧力換算。` },

  { id: "tohoku-2023-phys-4", universitySlug: "tohoku", year: 2023, subject: "物理学", problemNumber: 4,
    title: "Pauli 常磁性と Landau 反磁性", field: "statistical", difficulty: "advanced",
    tags: ["Pauli 常磁性", "Landau 反磁性", "帯磁率"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2023年度 物理学 問4

## 問題の設定
磁場 $B$ 中の自由電子ガス（温度 $T = 0$、Fermi エネルギー $E_F$）の磁気応答を考える。電子の Bohr 磁子 $\\mu_B = e\\hbar/(2m_e)$、状態密度 $g(E_F)$（フェルミエネルギーでの片スピンあたり）。

## 問われている内容
(1) Pauli 常磁性：電子スピンが Zeeman 効果でエネルギー $\\pm \\mu_B B$ にシフトし、スピン分布が変化することから磁化 $M_P$ と帯磁率 $\\chi_P$ を求めよ。
(2) $\\chi_P$ が Fermi エネルギーの状態密度 $g(E_F)$ に比例することを物理的に説明せよ。
(3) Landau 反磁性：軌道運動の量子化（Landau 準位）により軌道磁化 $M_L = -M_P/3$ となることを結果として示せ（詳細導出不要）。
(4) 実際の金属での全磁化応答 $\\chi = \\chi_P + \\chi_L$ の符号を論じ、強磁性（Stoner 機構）との関連を述べよ。`,
    solution: `## (1) Pauli 常磁性
電子数密度：$n = n_\\uparrow + n_\\downarrow$。$B \\ne 0$ で up-spin はエネルギー $-\\mu_B B$ だけ下がり、down-spin は $+\\mu_B B$ だけ上がる。フェルミ海の再分配：

$T = 0$ で状態密度 $g(E)$ の下で、化学ポテンシャル $E_F$ を共通にするため：
$$n_\\uparrow - n_\\downarrow \\approx 2 g(E_F) \\mu_B B$$

磁化 $M_P = \\mu_B(n_\\uparrow - n_\\downarrow) = 2\\mu_B^2 g(E_F) B$：
$$\\boxed{\\chi_P = \\mu_0 M/B = 2\\mu_0\\mu_B^2 g(E_F)}$$

（$\\mu_0$：真空透磁率）

## (2) $\\chi_P \\propto g(E_F)$ の意味
フェルミエネルギー近傍の電子のみが磁場に応答できる（Pauli 排他で下層は凍結）。応答可能な電子数 $\\sim g(E_F)\\cdot k_B T$ ではなく **$g(E_F)\\cdot\\mu_B B$**（$T = 0$ でも磁場応答）。これが金属の帯磁率が温度に**依存しない**（Pauli 常磁性）理由。

## (3) Landau 反磁性
電子の軌道運動は $B$ 中で Landau 準位に量子化：$E_n = (n + 1/2)\\hbar\\omega_c$、$\\omega_c = eB/m_e$。自由電子フェルミガスで総エネルギーを $B$ の関数として評価し、$M_L = -\\partial E/\\partial B$ を取ると：
$$M_L = -M_P/3 \\Rightarrow \\chi_L = -\\chi_P/3$$

（Landau, 1930）

## (4) 全帯磁率
$$\\chi = \\chi_P + \\chi_L = \\chi_P(1 - 1/3) = (2/3)\\chi_P > 0$$

自由電子金属は**常磁性**。Pauli 主導。

**Stoner 機構**：電子間交換相互作用 $I$ を入れると $\\chi_{\\text{eff}} = \\chi_P/(1 - I g(E_F))$（Stoner 増幅）。$I g(E_F) \\ge 1$ で発散 → 自発磁化（強磁性）。Fe, Co, Ni は $g(E_F)$ が大きく Stoner 条件を満たす。

**物理的意味**：金属の磁気応答は自由電子モデルで大まかに理解できる。実際の物質では局在電子（Curie 則 $\\chi \\propto 1/T$）、遍歴電子（Pauli）、軌道（Landau）、電子相関（Kondo 効果）などが複雑に絡む。物性物理学の中心テーマ。` },

  { id: "tohoku-2023-phys-5", universitySlug: "tohoku", year: 2023, subject: "物理学", problemNumber: 5,
    title: "X 線回折と Bragg の法則", field: "optics", difficulty: "standard",
    tags: ["Bragg の法則", "X 線回折", "結晶構造"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2023年度 物理学 問5

## 問題の設定
結晶中の原子平面（面間隔 $d$）に波長 $\\lambda$ の X 線が入射角 $\\theta$（平面と入射線のなす角）で当たる。

## 問われている内容
(1) Bragg の条件
$$2d\\sin\\theta = n\\lambda \\quad (n = 1, 2, 3,\\ldots)$$
を、隣接する 2 面からの反射波の行路差から導け。
(2) Cu の $K_\\alpha$ 線（$\\lambda = 1.54\\,\\text{Å}$）を用いて、NaCl 結晶（$d_{100} = 2.82\\,\\text{Å}$）で 1 次回折 ($n = 1$) の角度 $\\theta_1$ を計算せよ。
(3) 電子線回折と X 線回折の違い（試料貫通長、波長、弾性/非弾性散乱）を簡潔に述べよ。
(4) Bragg 条件から逆に結晶構造（面間隔）を決定する X 線構造解析の意義を述べよ。`,
    solution: `## (1) Bragg 条件の導出
2 つの平面への同じ波長の X 線入射。上面での反射と下面での反射の**行路差**：
$$\\Delta = 2d\\sin\\theta$$

（幾何：下面反射の光線は上面反射より $2d\\sin\\theta$ だけ長い経路）。

建設的干渉（強め合い）条件：$\\Delta = n\\lambda$ （整数倍）：
$$\\boxed{2d\\sin\\theta = n\\lambda}$$

## (2) 数値例
$n = 1, \\lambda = 1.54\\,\\text{Å}, d = 2.82\\,\\text{Å}$：
$$\\sin\\theta_1 = 1.54/(2\\times 2.82) = 0.273$$
$$\\theta_1 \\approx 15.85° \\quad (\\text{2}\\theta \\approx 31.7°)$$

## (3) 電子線 vs X 線
|  | X 線 | 電子線 |
|---|---|---|
| 波長 | 0.1 - 1 Å | 0.01 - 0.1 Å (加速電圧依存) |
| 貫通長 | 数 mm | 数 μm |
| 相互作用 | 電子雲と散乱 | 原子核・電子両方 |
| 用途 | バルク構造解析 | 薄膜・表面・電顕 |

## (4) 構造解析の意義
- 既知 $\\lambda$ と測定 $\\theta$ から面間隔 $d$ を特定（Bragg $\\to d$）
- 複数の回折ピーク（$hkl$ 指数）から結晶格子全体を再構成
- タンパク質結晶学（DNA 二重螺旋 1953、リボソーム 2009 など）、新規材料設計の基盤

**物理的意味**：1912 年 Laue が X 線の結晶回折を発見、同年 Bragg 父子が式を簡潔に導出。以降の固体物理・構造生物学・材料科学の根幹ツール。現代では放射光施設（SPring-8、ESRF）や XFEL で時間分解構造解析が進展。` },

  // ---- OSAKA 2023 (+5) ----
  { id: "osaka-2023-phys-2", universitySlug: "osaka", year: 2023, subject: "物理学", problemNumber: 2,
    title: "磁場の境界条件と屈折則", field: "electromagnetism", difficulty: "standard",
    tags: ["磁場の境界条件", "磁束密度", "磁性体"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2023年度 物理学 問2

## 問題の設定
2 つの磁性体の界面（平面）を境に、透磁率 $\\mu_1, \\mu_2$ が異なる領域を考える。界面に表面電流はないとする。

## 問われている内容
(1) 磁束密度 $\\vec{B}$ の法線成分の連続条件を示せ（Gauss の法則 $\\nabla\\cdot\\vec{B} = 0$ より）。
(2) 磁場 $\\vec{H}$ の接線成分の連続条件を示せ（Ampère の法則、表面電流なし）。
(3) 界面で磁力線（$\\vec{B}$ の方向）が入射角 $\\theta_1$ から出射角 $\\theta_2$ へ屈折するとき、屈折則
$$\\tan\\theta_2/\\tan\\theta_1 = \\mu_2/\\mu_1$$
を導け。
(4) 鉄（$\\mu_r \\sim 10^4$）と空気（$\\mu_r \\approx 1$）の境界では磁力線がほぼ鉄表面に沿って曲がることを述べよ。`,
    solution: `## (1) $\\vec{B}$ の法線成分
Gauss の法則 $\\oint\\vec{B}\\cdot d\\vec{S} = 0$ を界面上の薄い pillbox に適用：側面の寄与が消える厚さ極限で、上下の面の法線成分 $B_{n1}, B_{n2}$ について：
$$B_{n1} = B_{n2}$$

## (2) $\\vec{H}$ の接線成分
Ampère の法則 $\\oint\\vec{H}\\cdot d\\vec{l} = I_{\\text{free}} = 0$（表面電流なし）を界面に垂直な薄いループに適用：高さ極限で上下の接線成分：
$$H_{t1} = H_{t2}$$

## (3) 屈折則
界面法線を $\\hat{n}$ とする。$\\vec{B} = \\mu\\vec{H}$：
- 法線：$B_n = \\mu H_n \\Rightarrow H_{n1}/H_{n2} = B_{n1}/(\\mu_1)\\cdot\\mu_2/B_{n2} = \\mu_2/\\mu_1$（$B_n$ 連続）
- 接線：$H_{t1} = H_{t2}$

$\\tan\\theta = H_t/H_n$ で：
$$\\tan\\theta_1/\\tan\\theta_2 = H_{n2}/H_{n1} = \\mu_1/\\mu_2$$

$$\\boxed{\\tan\\theta_2/\\tan\\theta_1 = \\mu_2/\\mu_1}$$

## (4) 鉄/空気界面
$\\mu_{2(\\text{鉄})}/\\mu_{1(\\text{空気})} \\sim 10^4$：$\\tan\\theta_2 \\sim 10^4\\tan\\theta_1$。空気中で $\\theta_1 = 5°$ でも鉄中では $\\theta_2 \\to 90°$（ほぼ面内）。

**物理的意味**：磁力線は高透磁率領域に吸い込まれ、その中を「沿って」流れる。変圧器鉄心、電磁石のヨーク、磁気シールド（鉄製筐体で磁場を遮蔽）の設計原理。

光学のスネル則 $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$ と類似構造（接線方向の運動量 $k_t$ 連続、Fresnel 係数の類似）。ただし光学では $\\sin$、磁場では $\\tan$ が出る違いに注意。` },

  { id: "osaka-2023-phys-3", universitySlug: "osaka", year: 2023, subject: "物理学", problemNumber: 3,
    title: "Rabi 振動と 2 準位系", field: "quantum", difficulty: "advanced",
    tags: ["Rabi 振動", "2 準位系", "共鳴"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2023年度 物理学 問3

## 問題の設定
エネルギー差 $\\hbar\\omega_0$ の 2 準位系 $|g\\rangle, |e\\rangle$ に、角振動数 $\\omega$ の駆動項 $V(t) = \\hbar\\Omega(\\hat\\sigma_+ e^{-i\\omega t} + \\hat\\sigma_- e^{i\\omega t})$（回転波近似後、$\\Omega$ は Rabi 周波数）を加える。離調 $\\delta = \\omega - \\omega_0$。

## 問われている内容
(1) 回転座標系（ハミルトニアン $\\hat{H}_0$ の相互作用表示）に移ったとき、実効ハミルトニアンを書け。
(2) $\\delta = 0$（共鳴）での時間発展 $|\\psi(t)\\rangle$ を初期状態 $|g\\rangle$ から計算せよ。
(3) 励起状態への遷移確率 $P_e(t) = |\\langle e|\\psi(t)\\rangle|^2$ を $\\delta$ を含めた一般式（一般化 Rabi 振動数 $\\tilde\\Omega = \\sqrt{\\Omega^2 + \\delta^2}$）で示せ。
(4) 共鳴 $\\pi$ パルス（$\\Omega \\tau = \\pi$）で完全反転できることを述べ、量子ゲート（NOT 演算）との関連を説明。`,
    solution: `## (1) 実効ハミルトニアン（回転座標系）
$\\hat{H}_0 = \\hbar\\omega_0\\hat\\sigma_z/2$、回転座標系 $\\hat{U} = e^{i\\omega t\\hat\\sigma_z/2}$ で変換後：
$$\\hat{H}_{\\text{rot}} = -\\hbar\\delta\\hat\\sigma_z/2 + \\hbar\\Omega\\hat\\sigma_x$$

（$\\delta = \\omega - \\omega_0$、$\\hat\\sigma_\\pm = (\\hat\\sigma_x \\pm i\\hat\\sigma_y)/2$ で $\\hat\\sigma_+ + \\hat\\sigma_- = \\hat\\sigma_x$）

## (2) 共鳴での時間発展
$\\delta = 0$：$\\hat{H}_{\\text{rot}} = \\hbar\\Omega\\hat\\sigma_x$。$|\\psi(0)\\rangle = |g\\rangle$：
$$|\\psi(t)\\rangle = e^{-i\\Omega t\\hat\\sigma_x}|g\\rangle = \\cos(\\Omega t)|g\\rangle - i\\sin(\\Omega t)|e\\rangle$$

（$\\hat\\sigma_x|g\\rangle = |e\\rangle$）

$P_e(t) = \\sin^2(\\Omega t)$（完全な振動、0 から 1 を往復）。

## (3) 一般化 Rabi 振動
$\\hat{H}_{\\text{rot}} = \\hbar(\\Omega\\hat\\sigma_x - \\delta\\hat\\sigma_z/2)$。ブロッホベクトル $\\vec{n} = (2\\Omega, 0, -\\delta)/\\tilde\\Omega$、$\\tilde\\Omega = \\sqrt{(2\\Omega)^2 + \\delta^2}/2$ ほか...。実用形：
$$\\boxed{P_e(t) = \\frac{\\Omega^2}{\\Omega^2 + (\\delta/2)^2}\\sin^2\\left(\\tfrac{\\tilde\\Omega t}{2}\\right)}$$

$\\tilde\\Omega = \\sqrt{\\Omega^2 + (\\delta/2)^2}$。共鳴 ($\\delta = 0$) で最大振幅 1、離調 ($\\delta \\ne 0$) で振幅減少 → Lorentz 型共鳴線形。

## (4) $\\pi$ パルスと量子 NOT
共鳴で $\\Omega\\tau = \\pi/2$（$\\tilde\\Omega \\tau = \\pi$）とすると $P_e = 1$：状態が $|g\\rangle \\to |e\\rangle$ に完全反転。

**量子 NOT 演算**：古典 NOT $|0\\rangle \\to |1\\rangle$ の量子版。$\\pi$ パルスは $\\hat\\sigma_x$ に対応し、これが量子コンピュータの X ゲート。より一般に $\\pi/2$ パルスは Hadamard、$\\pi/4$ は T ゲート等。

**物理的意味**：Rabi 振動は NMR、原子時計（セシウム原子の基底 hyperfine 準位）、量子光学（原子-光場結合）、量子コンピュータ（超伝導 qubit、イオントラップ）の中核メカニズム。共鳴吸収スペクトルの幅は Rabi 振動数 $\\Omega$（パルス強度）と離調 $\\delta$ の関係で決まる。` },

  { id: "osaka-2023-phys-4", universitySlug: "osaka", year: 2023, subject: "物理学", problemNumber: 4,
    title: "熱力学第 3 法則と絶対零度", field: "thermodynamics", difficulty: "standard",
    tags: ["熱力学第 3 法則", "Nernst", "到達不可能性"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2023年度 物理学 問4

## 問題の設定
熱力学第 3 法則（Nernst 定理）：「十分に低温では、純粋物質のエントロピーは絶対零度で一定値（$S_0 = 0$）に近づく」

## 問われている内容
(1) Nernst 定理から導かれる帰結として、以下を示せ：
  (a) $T \\to 0$ で $(\\partial S/\\partial V)_T \\to 0$ および $(\\partial S/\\partial P)_T \\to 0$
  (b) 熱膨張係数 $\\alpha = (1/V)(\\partial V/\\partial T)_P \\to 0$ for $T \\to 0$
(2) 低温で $C_P - C_V \\to 0$ となることを示せ（$C_P - C_V = TV\\alpha^2/\\kappa_T$ 関係式から）。
(3) 絶対零度到達不可能性の原理を述べ、Nernst 定理との関連を説明せよ。
(4) 実在物質における量子効果（縮退 Fermi 気体の $C_V \\propto T$、Debye モデルの $C_V \\propto T^3$）と第 3 法則の整合を述べよ。`,
    solution: `## (1) Nernst 定理の帰結
**(a)** Maxwell 関係式 $(\\partial S/\\partial V)_T = (\\partial P/\\partial T)_V$。$T \\to 0$ で $S$ が $V$ に依存しない（$S \\to 0$ 一定）ので左辺 $\\to 0$、よって $(\\partial P/\\partial T)_V \\to 0$。同様に $(\\partial S/\\partial P)_T = -(\\partial V/\\partial T)_P \\to 0$。

**(b)** $\\alpha = (1/V)(\\partial V/\\partial T)_P \\to 0$：低温で物質の熱膨張が消える。

## (2) $C_P - C_V$ の低温挙動
熱力学恒等式：
$$C_P - C_V = T V \\alpha^2/\\kappa_T$$

$T \\to 0$：$T \\to 0$ かつ $\\alpha \\to 0$（(1b) より）。$\\kappa_T$（等温圧縮率）は有限。だから $C_P - C_V \\to 0$。定圧と定積比熱が同じ値に近づく。

## (3) 絶対零度到達不可能性
有限回の可逆断熱過程（あるいは任意の過程）で $T = 0$ に到達できない、という主張。

**Nernst との関連**：$T \\to 0$ で $S(V, T=0) = S_0 = 0$ 一定（どの $V$ でも同じ）。断熱変化（$\\Delta S = 0$）で始点・終点がこの $S = 0$ 曲線に来ると、始点も終点も $T = 0$ になる必要があり、これは実際には達成できない（曲線が $T = 0$ で一致）。

直感的には、温度下がるほど比熱が減り（第 3 法則）、冷却効率が悪化する。

## (4) 量子効果との整合
- **縮退 Fermi 気体**（電子）：$C_V = \\gamma T$（$\\gamma$：Sommerfeld 定数）。$T \\to 0$ で $C_V \\to 0$ ✓
- **Debye モデル**（格子振動）：低温で $C_V \\propto T^3$。$T \\to 0$ で速く 0 に収束 ✓

両者とも $\\int_0^T C_V/T\\,dT'$ が有限（発散しない）ので、$S(T \\to 0) = 0$ と整合。古典の Dulong-Petit 則（$C_V = 3R = $ const）は低温で破れ、量子的な振る舞いが第 3 法則を保証。

**物理的意味**：第 3 法則は 1906 年 Nernst が実験的に発見。量子論（Planck の Zero-point ゼロ点エネルギー、1911）と結びついて現代的理解に到達。低温物理学（He 液化、超伝導、超流動、BEC）の根底、断熱消磁冷却・蒸発冷却・レーザー冷却の限界を決める。` },

  { id: "osaka-2023-math-1", universitySlug: "osaka", year: 2023, subject: "数学", problemNumber: 1,
    title: "波動方程式と特性曲線", field: "math", difficulty: "standard",
    tags: ["波動方程式", "特性曲線", "d'Alembert 解"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2023年度 数学 問1

## 問われている内容
1 次元波動方程式
$$\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$$
を考える。

(1) 変数変換 $\\xi = x - ct, \\eta = x + ct$ で $\\partial^2 u/(\\partial\\xi\\partial\\eta) = 0$ になることを示せ。
(2) 一般解 $u(x, t) = f(x - ct) + g(x + ct)$（d'Alembert 解）を導け。
(3) 初期条件 $u(x, 0) = \\phi(x), u_t(x, 0) = \\psi(x)$ のもとで、$f, g$ を決定し、d'Alembert の公式
$$u(x, t) = \\frac{1}{2}[\\phi(x-ct) + \\phi(x+ct)] + \\frac{1}{2c}\\int_{x-ct}^{x+ct}\\psi(s)\\,ds$$
を導け。
(4) 特性曲線 $x \\pm ct = $ const の物理的意味を述べよ。`,
    solution: `## (1) 変数変換
連鎖則：$\\partial/\\partial t = (\\partial\\xi/\\partial t)\\partial/\\partial\\xi + (\\partial\\eta/\\partial t)\\partial/\\partial\\eta = -c\\partial_\\xi + c\\partial_\\eta$
同様に $\\partial/\\partial x = \\partial_\\xi + \\partial_\\eta$。

$\\partial^2/\\partial t^2 = c^2(\\partial_\\xi - \\partial_\\eta)^2 = c^2(\\partial_\\xi^2 - 2\\partial_\\xi\\partial_\\eta + \\partial_\\eta^2)$
$\\partial^2/\\partial x^2 = (\\partial_\\xi + \\partial_\\eta)^2 = \\partial_\\xi^2 + 2\\partial_\\xi\\partial_\\eta + \\partial_\\eta^2$

方程式に代入：
$$c^2(\\partial_\\xi^2 - 2\\partial_\\xi\\partial_\\eta + \\partial_\\eta^2)u = c^2(\\partial_\\xi^2 + 2\\partial_\\xi\\partial_\\eta + \\partial_\\eta^2)u$$

$\\Rightarrow -4c^2\\partial_\\xi\\partial_\\eta u = 0 \\Rightarrow \\partial^2 u/(\\partial\\xi\\partial\\eta) = 0$

## (2) d'Alembert 解
$\\partial_\\eta(\\partial_\\xi u) = 0 \\Rightarrow \\partial_\\xi u = F(\\xi)$（$\\eta$ 依存性なし）
$u = \\int F\\,d\\xi + g(\\eta) = f(\\xi) + g(\\eta)$

$x, t$ 変数に戻して：
$$u(x, t) = f(x - ct) + g(x + ct)$$

$f, g$：任意関数。$f$ は右進行波、$g$ は左進行波。

## (3) 初期値問題の解
$u(x, 0) = f(x) + g(x) = \\phi(x)$ ...(A)
$u_t(x, 0) = -cf'(x) + cg'(x) = \\psi(x) \\Rightarrow -f + g = (1/c)\\int\\psi$ ...(B)

(A) + (B) と (A) - (B)：
$g(x) = \\phi(x)/2 + (1/2c)\\int^x\\psi$
$f(x) = \\phi(x)/2 - (1/2c)\\int^x\\psi$

代入：
$$\\boxed{u(x, t) = \\tfrac{1}{2}[\\phi(x-ct) + \\phi(x+ct)] + \\tfrac{1}{2c}\\int_{x-ct}^{x+ct}\\psi(s)\\,ds}$$

## (4) 特性曲線の意味
$x - ct = $ const：右向きに速度 $c$ で進む波の "worldline"。
$x + ct = $ const：左向き。

**因果律**：点 $(x_0, t_0)$ の値は、過去の区間 $[x_0 - ct_0, x_0 + ct_0]$ 上の初期データのみに依存。情報は光速 $c$ で伝わる（局所性、Einstein の因果律の古典版）。

**物理的意味**：波動方程式は力学（弦、膜、音波）、電磁気（電磁波）、相対論（場の方程式）で普遍的。d'Alembert 解（1747）は最初期の偏微分方程式解の一つ。特性曲線は双曲型 PDE の本質的構造で、数値計算（CFL 条件）、量子場理論（光円錐）、波束伝搬の物理に基礎を与える。` },

  { id: "osaka-2023-math-2", universitySlug: "osaka", year: 2023, subject: "数学", problemNumber: 2,
    title: "Fourier 変換と Parseval の定理", field: "math", difficulty: "advanced",
    tags: ["Fourier 変換", "Parseval", "畳み込み"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2023年度 数学 問2

## 問われている内容
Fourier 変換を
$$\\tilde{f}(k) = \\int_{-\\infty}^\\infty f(x)e^{-ikx}\\,dx, \\quad f(x) = \\frac{1}{2\\pi}\\int_{-\\infty}^\\infty\\tilde{f}(k)e^{ikx}\\,dk$$
と定義する。

(1) Parseval の定理
$$\\int_{-\\infty}^\\infty|f(x)|^2\\,dx = \\frac{1}{2\\pi}\\int_{-\\infty}^\\infty|\\tilde f(k)|^2\\,dk$$
を導け。
(2) Gauss 関数 $f(x) = e^{-ax^2}$ の Fourier 変換 $\\tilde f(k)$ を計算せよ。
(3) 畳み込み定理 $\\widetilde{(f * g)} = \\tilde{f}\\cdot\\tilde{g}$ を証明せよ（$f*g(x) = \\int f(y)g(x-y)\\,dy$）。
(4) 量子力学の Heisenberg 不確定性関係 $\\Delta x\\Delta k \\ge 1/2$ と Fourier 変換の関連を述べよ。`,
    solution: `## (1) Parseval の定理
$\\int|f|^2 dx = \\int f(x)\\bar f(x)\\,dx$。両方を逆変換で書き：
$$f(x) = \\frac{1}{2\\pi}\\int\\tilde f(k)e^{ikx}dk, \\quad \\bar f(x) = \\frac{1}{2\\pi}\\int\\overline{\\tilde f(k')}e^{-ik'x}dk'$$

積を取って $x$ 積分：$\\int e^{i(k - k')x}dx = 2\\pi\\delta(k - k')$。
$$\\int|f|^2 dx = \\frac{1}{(2\\pi)^2}\\int\\tilde f(k)\\overline{\\tilde f(k')}\\cdot 2\\pi\\delta(k - k')\\,dk\\,dk' = \\frac{1}{2\\pi}\\int|\\tilde f(k)|^2 dk$$

## (2) Gauss 関数の Fourier 変換
$$\\tilde f(k) = \\int e^{-ax^2 - ikx}dx = \\int e^{-a(x + ik/(2a))^2 - k^2/(4a)}dx$$

平方完成、積分路を平行移動（解析関数なので可）：
$$\\tilde f(k) = e^{-k^2/(4a)}\\int e^{-au^2}du = \\sqrt{\\pi/a}\\,e^{-k^2/(4a)}$$

$$\\boxed{\\tilde f(k) = \\sqrt{\\pi/a}\\,e^{-k^2/(4a)}}$$

**重要**：Gauss 関数の Fourier 変換は Gauss 関数（自己相似）。$x$ 空間の幅 $\\sim 1/\\sqrt{a}$、$k$ 空間の幅 $\\sim \\sqrt{a}$：積 $= 1$（不確定性の等号）。

## (3) 畳み込み定理
$$\\widetilde{(f*g)}(k) = \\int e^{-ikx}\\left(\\int f(y)g(x-y)dy\\right)dx$$

$x' = x - y$ と変数変換：
$$= \\int f(y) e^{-iky}dy \\cdot \\int g(x')e^{-ikx'}dx' = \\tilde f(k)\\tilde g(k)$$

## (4) 不確定性関係との関連
Gauss 波束 $\\psi(x) = e^{-x^2/(4\\sigma_x^2)}/(2\\pi\\sigma_x^2)^{1/4}$ の Fourier 変換は Gauss $\\tilde\\psi(k)$、幅 $\\sigma_k = 1/(2\\sigma_x)$：
$$\\sigma_x \\cdot \\sigma_k = 1/2$$

一般の関数では Cauchy-Schwarz 不等式から：
$$\\Delta x \\cdot \\Delta k \\ge 1/2$$

等号は Gauss 波束のみ。量子力学で $p = \\hbar k$ より：
$$\\boxed{\\Delta x \\cdot \\Delta p \\ge \\hbar/2}$$

**物理的意味**：Fourier 変換は時間↔振動数、位置↔波数、時間↔エネルギーの双対変換。信号処理、結晶構造解析（逆格子）、量子力学の運動量表示など本質的役割。不確定性関係は Fourier 変換の数学的定理の物理的言い換え。` },

  // ---- NAGOYA 2023 (+2) ----
  { id: "nagoya-2023-phys-3", universitySlug: "nagoya", year: 2023, subject: "物理学", problemNumber: 3,
    title: "弾性衝突と反発係数", field: "mechanics", difficulty: "basic",
    tags: ["弾性衝突", "運動量保存", "反発係数"],
    isFree: true,
    statement: `**対応問題**: 名古屋大学 2023年度 物理学 問3

## 問題の設定
質量 $m_1$ の物体 A（速度 $v_1$）が、静止している質量 $m_2$ の物体 B に 1 次元的に衝突する。反発係数 $e$（$0 \\le e \\le 1$）。

## 問われている内容
(1) 衝突後の A, B の速度 $v_1', v_2'$ を運動量保存と反発係数の定義から求めよ。
(2) 完全弾性衝突 ($e = 1$) で、$m_1 = m_2$ の場合の結果を述べよ。
(3) $e = 1, m_1 \\ll m_2$ の極限で、A が跳ね返る振る舞いを述べよ。
(4) 衝突前後のエネルギー変化 $\\Delta K = K_{\\text{after}} - K_{\\text{before}}$ を $e$ で表し、$e < 1$ で散逸があることを示せ。`,
    solution: `## (1) 速度の決定
運動量保存：$m_1 v_1 = m_1 v_1' + m_2 v_2'$
反発係数：$e = (v_2' - v_1')/v_1$ → $v_2' - v_1' = ev_1$

連立して：
$$v_1' = \\frac{m_1 - em_2}{m_1 + m_2}v_1, \\quad v_2' = \\frac{(1+e)m_1}{m_1 + m_2}v_1$$

## (2) $m_1 = m_2, e = 1$
$v_1' = 0, v_2' = v_1$：**速度の完全交換**。ビリヤードの玉衝突の典型。

## (3) $m_1 \\ll m_2, e = 1$
$v_1' \\approx -v_1$（完全反転）、$v_2' \\approx 0$。軽い物体が重い物体にぶつかると跳ね返る（速さそのまま、向き逆転）。壁に対するボール衝突の極限。

## (4) エネルギー変化
$K_{\\text{before}} = (1/2)m_1 v_1^2$
$K_{\\text{after}} = (1/2)m_1 v_1'^2 + (1/2)m_2 v_2'^2$

代入・整理：
$$\\Delta K = -\\frac{m_1 m_2}{2(m_1 + m_2)}(1 - e^2)v_1^2$$

$e < 1 \\Rightarrow \\Delta K < 0$：運動エネルギー損失（熱・音・変形として散逸）。完全弾性 $e = 1$ で $\\Delta K = 0$。

**物理的意味**：衝突問題は運動量保存の基本応用。反発係数は物質の性質（ゴムボール $e \\sim 0.8$、鋼球 $\\sim 0.9$、粘土 $\\sim 0$）。衝突実験（Rutherford 散乱、素粒子物理）、交通事故解析、スポーツ（ゴルフクラブとボール）の基本。` },

  { id: "nagoya-2023-phys-4", universitySlug: "nagoya", year: 2023, subject: "物理学", problemNumber: 4,
    title: "電磁波の反射と透過", field: "electromagnetism", difficulty: "basic",
    tags: ["Fresnel 係数", "垂直入射", "反射率"],
    isFree: true,
    statement: `**対応問題**: 名古屋大学 2023年度 物理学 問4

## 問題の設定
屈折率 $n_1$ の媒質から屈折率 $n_2$ の媒質へ電磁波が**垂直入射**する（界面に法線方向から入射）。

## 問われている内容
(1) 入射波・反射波・透過波の電場振幅を $E_i, E_r, E_t$ とおき、境界条件（$E_\\parallel$ 連続、$H_\\parallel$ 連続）から Fresnel 係数
$$r = \\frac{E_r}{E_i} = \\frac{n_1 - n_2}{n_1 + n_2}, \\quad t = \\frac{E_t}{E_i} = \\frac{2n_1}{n_1 + n_2}$$
を導け。
(2) 反射率 $R = |r|^2$ とエネルギー透過率 $T$ を求め、$R + T = 1$（エネルギー保存）を確認せよ。
(3) 空気 ($n_1 = 1$) から水 ($n_2 = 1.33$) への入射で $R$ を数値計算せよ。
(4) 反射防止膜（$n_{\\text{coat}} = \\sqrt{n_1 n_2}$、厚さ $\\lambda/(4n_{\\text{coat}})$）の原理を簡潔に述べよ。`,
    solution: `## (1) Fresnel 係数
垂直入射で電場は界面に平行、$E_i + E_r = E_t$（接線電場連続）。

磁場：$H = E/Z$、$Z = \\sqrt{\\mu/\\epsilon} = \\mu c/n$（インピーダンス）。入射磁場 $H_i = E_i/Z_1$（同向き進行波）、反射 $H_r = -E_r/Z_1$（反射で $H$ 反転）、透過 $H_t = E_t/Z_2$。

$H$ 連続：$E_i/Z_1 - E_r/Z_1 = E_t/Z_2$。$Z \\propto 1/n$ より：
$$n_1(E_i - E_r) = n_2 E_t$$

$E$ 連続と連立：
$$r = (n_1 - n_2)/(n_1 + n_2), \\quad t = 2n_1/(n_1 + n_2)$$

## (2) 反射率とエネルギー保存
$R = r^2 = ((n_1 - n_2)/(n_1 + n_2))^2$

エネルギー透過率（Poynting ベクトル $\\propto n E^2$）：
$$T = (n_2/n_1)t^2 = (n_2/n_1) \\cdot 4n_1^2/(n_1+n_2)^2 = 4n_1 n_2/(n_1+n_2)^2$$

$R + T = \\{(n_1-n_2)^2 + 4n_1 n_2\\}/(n_1+n_2)^2 = (n_1+n_2)^2/(n_1+n_2)^2 = 1$ ✅

## (3) 空気→水
$n_1 = 1, n_2 = 1.33$：
$$R = ((1-1.33)/(1+1.33))^2 = (-0.33/2.33)^2 \\approx 0.02$$

約 2% が反射、98% が透過。水面の低反射率は日常的に観察できる（水面越しの水中が見える）。

## (4) 反射防止膜（AR コート）
ガラス表面に厚さ $\\lambda/(4n_{\\text{coat}})$、屈折率 $n_{\\text{coat}} = \\sqrt{n_1 n_2}$ の薄膜を塗る。薄膜表面からの反射と、ガラス表面からの反射が**位相差 $\\pi$** で干渉消失 → 反射率ゼロ。

$\\lambda/4$ 厚：薄膜を通過する時間差から位相差 $2\\times 2\\pi n_{\\text{coat}}(\\lambda/(4n_{\\text{coat}}))/\\lambda = \\pi$。

**物理的意味**：Fresnel 係数は光学の基本。レンズ（多層反射防止膜）、光ファイバー、液晶ディスプレイ、ソーラーパネル（光吸収最大化）すべての設計で基本公式。$r$ の符号（$n_1 < n_2$ で $r < 0$）が位相反転を表す。` },

  // ---- KYUSHU 2023 (+2) ----
  { id: "kyushu-2023-phys-3", universitySlug: "kyushu", year: 2023, subject: "物理学", problemNumber: 3,
    title: "仕事とエネルギー定理", field: "mechanics", difficulty: "basic",
    tags: ["仕事エネルギー定理", "保存力", "非保存力"],
    isFree: true,
    statement: `**対応問題**: 九州大学 2023年度 物理学 問3

## 問題の設定
質量 $m$ の物体に外力 $\\vec{F}$ が作用し、$\\vec{r}_1$ から $\\vec{r}_2$ まで経路 $C$ に沿って移動する。

## 問われている内容
(1) 仕事エネルギー定理 $W = \\Delta K$ を Newton の第 2 法則から導け（$W$: 力が物体にした仕事、$\\Delta K$: 運動エネルギー変化）。
(2) 摩擦のない斜面（角度 $\\theta$、長さ $L$）を質量 $m$ の物体が滑り落ちるとき、下端での速度 $v$ を仕事エネルギー定理から求めよ。
(3) 摩擦係数 $\\mu$ の場合を (2) と比較し、摩擦力の仕事 $W_f$ を計算せよ。
(4) 保存力と非保存力を仕事の経路依存性で区別せよ。`,
    solution: `## (1) 仕事エネルギー定理
Newton 第 2 法則：$\\vec{F} = m d\\vec{v}/dt$。$\\vec{v}\\cdot$ を両辺に：
$$\\vec{F}\\cdot\\vec{v} = m\\vec{v}\\cdot d\\vec{v}/dt = (1/2)m\\frac{d}{dt}(\\vec{v}\\cdot\\vec{v}) = \\frac{dK}{dt}$$

$\\vec{v} dt = d\\vec{r}$ で経路 $C$ に沿って積分：
$$W = \\int_C \\vec{F}\\cdot d\\vec{r} = K_2 - K_1 = \\Delta K$$

## (2) 摩擦なし斜面
重力の斜面方向成分 $mg\\sin\\theta$ が経路 $L$ にわたって働く：$W = mg\\sin\\theta \\cdot L = mgh$（$h = L\\sin\\theta$ 高さ差）。

$\\Delta K = (1/2)mv^2 - 0 = mgh \\Rightarrow v = \\sqrt{2gh}$

自由落下と同じ（一般的な結論：重力仕事は経路によらず高さ差のみ）。

## (3) 摩擦あり斜面
垂直抗力 $N = mg\\cos\\theta$、動摩擦力 $f = \\mu mg\\cos\\theta$（運動方向と逆）。

摩擦力の仕事：$W_f = -\\mu mg\\cos\\theta \\cdot L$（マイナス：運動と逆向き）

全仕事 $W = mgh - \\mu mg\\cos\\theta \\cdot L = mgL(\\sin\\theta - \\mu\\cos\\theta)$

下端での速度：$v = \\sqrt{2gL(\\sin\\theta - \\mu\\cos\\theta)}$

$\\mu > \\tan\\theta$ では動けない（静摩擦が勝る）。

## (4) 保存力 vs 非保存力
- **保存力**（重力、弾性力、静電力）：仕事が経路に**よらず**、始点・終点のみで決まる。ポテンシャルエネルギー $U$ が定義でき、$W = -\\Delta U$。閉路積分 $\\oint\\vec{F}\\cdot d\\vec{r} = 0$。
- **非保存力**（摩擦、空気抵抗）：仕事が経路に**依存**する。$U$ 定義不可。

**判定**：$\\nabla\\times\\vec{F} = 0$（回転ゼロ）⇔ 単連結領域で保存力。

**物理的意味**：力学的エネルギー保存 $K + U = $ const は保存力のみ。非保存力があると $\\Delta(K+U) = W_{\\text{nc}}$（熱散逸等）。この振り分けが熱力学第一法則へつながる（機械的仕事 ↔ 熱）。` },

  { id: "kyushu-2023-phys-4", universitySlug: "kyushu", year: 2023, subject: "物理学", problemNumber: 4,
    title: "交流回路のインピーダンス", field: "electromagnetism", difficulty: "basic",
    tags: ["交流", "インピーダンス", "共振"],
    isFree: true,
    statement: `**対応問題**: 九州大学 2023年度 物理学 問4

## 問題の設定
抵抗 $R$、インダクタンス $L$、キャパシタンス $C$ が直列に接続された RLC 回路に、角振動数 $\\omega$ の交流電源 $V(t) = V_0\\cos(\\omega t)$ が印加されている。

## 問われている内容
(1) 各素子のインピーダンス $Z_R, Z_L, Z_C$ を複素表示で書け。
(2) 直列合成インピーダンス $Z(\\omega) = R + i\\omega L + 1/(i\\omega C)$ を整理せよ。
(3) 電流の振幅 $I_0 = V_0/|Z|$ を $\\omega$ の関数として書き、共振振動数 $\\omega_0 = 1/\\sqrt{LC}$ で最大となることを示せ。
(4) 共振での位相差、および品質因子 $Q = \\omega_0 L/R$ の意味を述べよ。`,
    solution: `## (1) 各インピーダンス
- 抵抗：$Z_R = R$（実数）
- インダクタンス：$Z_L = i\\omega L$
- キャパシタンス：$Z_C = 1/(i\\omega C) = -i/(\\omega C)$

## (2) 合成インピーダンス
$$Z(\\omega) = R + i\\left(\\omega L - \\frac{1}{\\omega C}\\right)$$

大きさ：
$$|Z| = \\sqrt{R^2 + (\\omega L - 1/(\\omega C))^2}$$

## (3) 共振
$I_0 = V_0/|Z|$。$|Z|$ が最小になる条件：$\\omega L = 1/(\\omega C) \\Rightarrow \\omega_0 = 1/\\sqrt{LC}$。

このとき $|Z| = R$（最小、虚部ゼロ）：
$$I_{0,\\max} = V_0/R$$

## (4) 共振での位相と $Q$
**位相差**：$Z$ の位相 $\\phi = \\arg(Z) = \\arctan((\\omega L - 1/(\\omega C))/R)$。
- $\\omega < \\omega_0$：$\\phi < 0$（容量性、電流が電圧より進む）
- $\\omega = \\omega_0$：$\\phi = 0$（共振、同位相）
- $\\omega > \\omega_0$：$\\phi > 0$（誘導性、電流が遅れる）

**$Q$ 因子**：$Q = \\omega_0 L/R = (1/R)\\sqrt{L/C}$。共振曲線 $I_0(\\omega)$ の半値全幅 $\\Delta\\omega = \\omega_0/Q$：$Q$ が大きいほど鋭い共振ピーク。

**物理的意味**：RLC 回路はラジオ・テレビのチューナー、電力系統のフィルター、MRI の送受信コイルで基本。$Q$ 値は共振系の性能指標として機械振動、光共振器、原子時計まで普遍的。並列 RLC では振る舞いが異なるが、数学的構造は同じ。` },

  // ---- HOKKAIDO 2023 (+2) ----
  { id: "hokkaido-2023-phys-3", universitySlug: "hokkaido", year: 2023, subject: "物理学", problemNumber: 3,
    title: "Kirchhoff の法則と直流回路", field: "electromagnetism", difficulty: "basic",
    tags: ["Kirchhoff", "節点法則", "ループ法則"],
    isFree: true,
    statement: `**対応問題**: 北海道大学 2023年度 物理学 問3

## 問題の設定
起電力 $\\mathcal{E}_1, \\mathcal{E}_2$ の電池と抵抗 $R_1, R_2, R_3$ からなる 2 ループ直流回路を考える（具体的な接続は通常の 2 メッシュ回路）。

## 問われている内容
(1) Kirchhoff の電流則（節点法則）と電圧則（ループ法則）を述べよ。
(2) 2 ループ回路の各抵抗に流れる電流 $I_1, I_2, I_3$ を Kirchhoff の法則から決定する連立方程式を書け。
(3) $\\mathcal{E}_1 = 6\\,\\text{V}, \\mathcal{E}_2 = 3\\,\\text{V}, R_1 = R_2 = R_3 = 1\\,\\Omega$ の場合の数値解を求めよ。
(4) 抵抗 $R_3$ で消費される電力 $P_3$ を求めよ。`,
    solution: `## (1) Kirchhoff の法則
**電流則**（Junction rule、KCL）：任意の節点で、流入電流の和 = 流出電流の和。$\\sum I_{\\text{in}} = \\sum I_{\\text{out}}$（電荷保存の反映）。

**電圧則**（Loop rule、KVL）：任意の閉ループ 1 周で、起電力の総和 = 電圧降下の総和。$\\sum \\mathcal{E} = \\sum IR$（電場が保存場の反映）。

## (2) 連立方程式（メッシュ電流法）
左ループ：$\\mathcal{E}_1 = R_1 I_1 + R_3 I_3$
右ループ：$\\mathcal{E}_2 = R_2 I_2 + R_3 I_3$
節点則：$I_3 = I_1 + I_2$

3 式で $I_1, I_2, I_3$ が決定。

## (3) 数値解
代入：
$6 = I_1 + (I_1 + I_2) = 2I_1 + I_2$ → $2I_1 + I_2 = 6$
$3 = I_2 + (I_1 + I_2) = I_1 + 2I_2$ → $I_1 + 2I_2 = 3$

連立：第 1 式 × 2 - 第 2 式：$3I_1 = 9 \\Rightarrow I_1 = 3\\,\\text{A}$、$I_2 = 0\\,\\text{A}$、$I_3 = 3\\,\\text{A}$

## (4) $R_3$ 消費電力
$P_3 = I_3^2 R_3 = 9 \\times 1 = 9\\,\\text{W}$

**物理的意味**：Kirchhoff の法則（1845）は直流・交流回路解析の基本。複雑な回路網でも系統的に解ける。実際の応用：集積回路設計、電力系統解析、SPICE シミュレータなど。ノーベル物理学賞を受けた Kirchhoff は分光学（太陽吸収線、黒体放射）でも重要貢献。` },

  { id: "hokkaido-2023-phys-4", universitySlug: "hokkaido", year: 2023, subject: "物理学", problemNumber: 4,
    title: "熱膨張と PVT 関係", field: "thermodynamics", difficulty: "basic",
    tags: ["熱膨張係数", "体積弾性率", "PVT"],
    isFree: true,
    statement: `**対応問題**: 北海道大学 2023年度 物理学 問4

## 問題の設定
物質の体積は温度 $T$ と圧力 $P$ の関数 $V(T, P)$。熱膨張係数 $\\alpha = (1/V)(\\partial V/\\partial T)_P$、等温圧縮率 $\\kappa_T = -(1/V)(\\partial V/\\partial P)_T$。

## 問われている内容
(1) 全微分 $dV$ を $dT, dP$ で表せ。
(2) 理想気体の状態方程式 $PV = nRT$ から $\\alpha, \\kappa_T$ を計算せよ。
(3) 銅（$\\alpha \\approx 5\\times 10^{-5}\\,\\text{K}^{-1}$）の長さが 1 m の棒で、温度が 20 K 上昇したときの長さ変化 $\\Delta L$ を推定（線膨張係数 $\\alpha_L \\approx \\alpha/3$）。
(4) バイメタル（2 種金属の貼り合わせ）の温度センサとしての原理を述べよ。`,
    solution: `## (1) 全微分
$$dV = \\left(\\frac{\\partial V}{\\partial T}\\right)_P dT + \\left(\\frac{\\partial V}{\\partial P}\\right)_T dP = V\\alpha\\,dT - V\\kappa_T\\,dP$$

## (2) 理想気体の場合
$V = nRT/P$：
- $(\\partial V/\\partial T)_P = nR/P = V/T \\Rightarrow \\alpha = 1/T$
- $(\\partial V/\\partial P)_T = -nRT/P^2 = -V/P \\Rightarrow \\kappa_T = 1/P$

$T = 300\\,\\text{K}$ で $\\alpha \\approx 3.3\\times 10^{-3}\\,\\text{K}^{-1}$、$P = 10^5\\,\\text{Pa}$ で $\\kappa_T = 10^{-5}\\,\\text{Pa}^{-1}$。

## (3) 銅棒の熱膨張
線膨張 $\\Delta L/L = \\alpha_L \\Delta T$：
$$\\Delta L = L \\cdot \\alpha_L \\cdot \\Delta T \\approx 1\\,\\text{m} \\times (5\\times 10^{-5}/3)\\,\\text{K}^{-1} \\times 20\\,\\text{K} \\approx 0.33\\,\\text{mm}$$

橋や鉄道の接続継目で熱膨張を吸収する理由。

## (4) バイメタル
熱膨張係数の異なる 2 金属（例：鉄 $\\alpha \\sim 1.2\\times 10^{-5}$ と真鍮 $\\alpha \\sim 1.9\\times 10^{-5}$）を貼り合わせ。温度変化で片方が多く伸び → 帯が湾曲。

**応用**：
- サーモスタット（電気ポット、アイロン）：曲がりで電気接点を開閉
- 温度計（湾曲度を指示針で可視化）
- 自動温度補正装置

**物理的意味**：熱膨張は物質の原子間距離が温度上昇で平均的に増える（非調和ポテンシャルの効果）。水の異常（4°C で最大密度）は例外。精密機器の熱補償、LSI の熱応力設計、建築物の伸縮継目など応用多数。` },

  // ---- YNU 2023 (+2) ----
  { id: "ynu-2023-phys-3", universitySlug: "ynu", year: 2023, subject: "物理学", problemNumber: 3,
    title: "放射性崩壊と半減期", field: "quantum", difficulty: "basic",
    tags: ["放射性崩壊", "半減期", "指数崩壊則"],
    isFree: true,
    statement: `**対応問題**: 横浜国立大学 2023年度 物理学 問3

## 問題の設定
放射性原子核の崩壊：時刻 $t$ における未崩壊核数 $N(t)$ は、単位時間あたり崩壊確率 $\\lambda$（崩壊定数）で減少する。

## 問われている内容
(1) 微分方程式 $dN/dt = -\\lambda N$ を解き、$N(t) = N_0 e^{-\\lambda t}$ を導け。
(2) 半減期 $T_{1/2}$（$N$ が $N_0/2$ になる時間）を $\\lambda$ で表せ。
(3) 炭素 14 の半減期 $T_{1/2} = 5730$ 年を用いて、$C^{14}$ 濃度が現代の 1/4 になった試料の年代を求めよ（炭素年代測定）。
(4) 放射性崩壊の量子的起源（トンネル効果、弱相互作用）を簡潔に述べよ。`,
    solution: `## (1) 指数崩壊則
$dN/N = -\\lambda\\,dt$ → 積分：$\\ln(N/N_0) = -\\lambda t$：
$$\\boxed{N(t) = N_0 e^{-\\lambda t}}$$

## (2) 半減期
$N_0/2 = N_0 e^{-\\lambda T_{1/2}}$：
$$T_{1/2} = \\ln 2/\\lambda \\approx 0.693/\\lambda$$

## (3) 炭素年代測定
$N/N_0 = 1/4 = 2^{-2} = (1/2)^2$：2 半減期経過。
$$t = 2 T_{1/2} = 2 \\times 5730 = 11460\\,\\text{年}$$

**方法**：生物体内の $C^{14}/C^{12}$ 比は大気中と平衡（宇宙線で生成）。死後は補給停止、崩壊のみで比が減少。化石・考古学遺物の年代決定の標準手法（数万年前まで）。

## (4) 量子論的起源
- **$\\alpha$ 崩壊**：Coulomb 障壁のトンネル効果（問 4 で詳細）。
- **$\\beta$ 崩壊**：$n \\to p + e^- + \\bar\\nu_e$、弱相互作用による。Fermi の 4 点理論から電弱統一理論へ。
- **$\\gamma$ 崩壊**：励起状態からの光子放出（電磁相互作用）。

崩壊の「いつ」は量子論的ランダム（測定の不確定性原理と関連、エネルギー-時間不確定性 $\\Delta E \\Delta t \\sim \\hbar$、有限寿命 $\\Rightarrow$ 幅広いエネルギー分布）。

**物理的意味**：指数崩壊は量子力学的散乱・崩壊過程の普遍的帰結。薬剤の体内半減期（薬物動態）、核反応炉の燃料消費、放射線治療、年代測定（$C^{14}$、$U^{238}$、$K^{40}$）など応用は多岐。半減期の概念は単純だが、応用分野は物理・化学・医学・考古学・環境科学に及ぶ。` },

  { id: "ynu-2023-phys-4", universitySlug: "ynu", year: 2023, subject: "物理学", problemNumber: 4,
    title: "毛細管現象と表面張力", field: "mechanics", difficulty: "basic",
    tags: ["表面張力", "毛細管", "Young-Laplace"],
    isFree: true,
    statement: `**対応問題**: 横浜国立大学 2023年度 物理学 問4

## 問題の設定
半径 $r$ の細管を液体（密度 $\\rho$、表面張力 $\\gamma$、接触角 $\\theta$）に垂直に立てる。重力加速度 $g$。

## 問われている内容
(1) 毛細管内で液面が高さ $h$ だけ上昇する（または $\\theta > \\pi/2$ なら下降）現象を**毛細管現象**と呼ぶ。$h$ を $\\gamma, \\rho, g, r, \\theta$ で表せ（Jurin の法則）。
(2) 水（$\\gamma = 0.073\\,\\text{N/m}, \\theta \\approx 0$）を半径 $r = 0.1\\,\\text{mm}$ のガラス管に入れたときの上昇高を計算せよ。
(3) 接触角 $\\theta > \\pi/2$ の場合（例：水銀-ガラス）、液面が下降することを説明せよ。
(4) Young-Laplace 式 $\\Delta P = 2\\gamma/R$（球形液滴）を述べ、肺胞の表面張力と界面活性剤の役割を論ぜよ。`,
    solution: `## (1) Jurin の法則
毛細管内の液面上部と下部の圧力差（大気圧との差）：
$$\\Delta P = \\rho g h$$

表面張力による圧力差（Young-Laplace）：$\\Delta P = 2\\gamma\\cos\\theta/r$（接触角 $\\theta$、メニスカス半径 $r/\\cos\\theta$）。

両者等しく：
$$\\boxed{h = \\frac{2\\gamma\\cos\\theta}{\\rho g r}}$$

$\\theta < \\pi/2$：水はガラスを**濡らす**、上昇。$\\theta > \\pi/2$：撥水、下降（負の $h$）。

## (2) 水の上昇高
$\\gamma = 0.073, \\rho = 1000, g = 9.8, r = 10^{-4}, \\cos\\theta = 1$：
$$h = 2 \\times 0.073 / (1000 \\times 9.8 \\times 10^{-4}) \\approx 0.149\\,\\text{m} = 14.9\\,\\text{cm}$$

細い管ほど高く上昇（植物の水吸い上げ、土壌水分保持の原理）。

## (3) 水銀-ガラス
水銀は ガラスを濡らさない（$\\theta \\approx 140°$、$\\cos\\theta < 0$）。$h < 0$ で下降。水銀温度計のメニスカスが下向き凸なのもこのため。

## (4) Young-Laplace と肺
球形液滴の内外圧力差：$\\Delta P = 2\\gamma/R$。小さな球ほど内圧高い。

**肺胞の問題**：大小の肺胞が連結すると、小肺胞は内圧高く → 空気が大肺胞に押し出される → 小肺胞潰れ、大肺胞過膨張（不安定）。

**界面活性剤**（サーファクタント）：肺胞内面を覆い表面張力を低下（半径依存的に：小肺胞で特に低下）。これで大小肺胞の $\\Delta P$ が均等化、すべての肺胞が開いた状態を維持。

早産児の**呼吸窮迫症候群**は界面活性剤不足による。治療に人工サーファクタント投与。

**物理的意味**：表面張力は分子間力の巨視的現れ。毛細管現象（植物の水吸収、インクペンの吸い上げ）、洗剤（界面活性剤の界面エネルギー低下）、雨滴・シャボン玉の球形性、ナノ流体デバイスすべての基礎。` },

  // ---- TSUKUBA 2023 (+2) ----
  { id: "tsukuba-2023-phys-3", universitySlug: "tsukuba", year: 2023, subject: "物理学", problemNumber: 3,
    title: "理想気体の断熱変化", field: "thermodynamics", difficulty: "basic",
    tags: ["断熱変化", "Poisson 則", "比熱比"],
    isFree: true,
    statement: `**対応問題**: 筑波大学 2023年度 物理学 問3

## 問題の設定
単原子理想気体（比熱比 $\\gamma = C_P/C_V = 5/3$）が断熱的に変化する。

## 問われている内容
(1) 断熱過程での Poisson の法則 $PV^\\gamma = $ const を導出せよ（熱力学第 1 法則と理想気体の性質から）。
(2) $TV^{\\gamma-1} = $ const と $TP^{(1-\\gamma)/\\gamma} = $ const も同様に導け。
(3) 初期状態 $P_1 = 1\\,\\text{atm}, V_1 = 1\\,\\text{L}$ から体積を半分に断熱圧縮するとき、最終圧力 $P_2$ を求めよ。
(4) 等温変化 $PV = $ const と比較し、断熱圧縮で温度が上昇する理由を定性的に述べよ。`,
    solution: `## (1) Poisson の法則の導出
断熱 $dQ = 0$、第 1 法則：$dU = -dW = -PdV$。理想気体 $dU = C_V dT$、$P = nRT/V$：
$$C_V dT = -\\frac{nRT}{V}dV \\Rightarrow \\frac{dT}{T} = -\\frac{nR}{C_V}\\frac{dV}{V}$$

$C_P - C_V = nR$、$\\gamma = C_P/C_V$、$(nR)/C_V = \\gamma - 1$：
$$\\frac{dT}{T} = -(\\gamma-1)\\frac{dV}{V} \\Rightarrow TV^{\\gamma-1} = \\text{const}$$

$PV = nRT$ で $T = PV/(nR)$：$PV \\cdot V^{\\gamma-1} = $ const $\\Rightarrow PV^\\gamma = $ const

## (2) 他の表現
(1) で示した $TV^{\\gamma-1}$ と、$PV^\\gamma$ から $V = $ nRT/P$ を代入：
$T(nRT/P)^{\\gamma-1} = $ const $\\Rightarrow T^\\gamma/P^{\\gamma-1} = $ const $\\Rightarrow TP^{(1-\\gamma)/\\gamma} = $ const

## (3) 断熱圧縮
$P_1 V_1^\\gamma = P_2 V_2^\\gamma$、$V_2 = V_1/2$、$\\gamma = 5/3$：
$$P_2 = P_1 (V_1/V_2)^\\gamma = 1 \\cdot 2^{5/3} \\approx 3.17\\,\\text{atm}$$

等温なら $P_2 = 2\\,\\text{atm}$。断熱の方が圧力上昇が大きい。

## (4) 定性的説明
等温：外部との熱交換で温度一定（圧縮の仕事 = 熱として放出）。

断熱：熱の逃げ場なし → 圧縮の仕事が全て内部エネルギー（温度）の増加に変換。よって温度上昇 → 状態方程式 $PV = nRT$ で、同じ $V$ 減少でも $T$ 増加分だけ圧力が追加上昇。

**物理的意味**：断熱過程は熱機関（ディーゼルエンジンの圧縮行程）、音波の伝搬（断熱的で $c = \\sqrt{\\gamma P/\\rho}$）、気圧と雲の形成（空気塊の断熱上昇で冷却、凝結して雲）で重要。ディーゼルエンジンは圧縮熱で燃料を自発点火させる設計。` },

  { id: "tsukuba-2023-phys-4", universitySlug: "tsukuba", year: 2023, subject: "物理学", problemNumber: 4,
    title: "光の分散と屈折率の波長依存", field: "optics", difficulty: "basic",
    tags: ["分散", "プリズム", "色収差"],
    isFree: true,
    statement: `**対応問題**: 筑波大学 2023年度 物理学 問4

## 問題の設定
ガラスプリズム（頂角 $A = 60°$）に白色光を入射する。ガラスの屈折率 $n(\\lambda)$ は波長 $\\lambda$ に依存（分散）。

## 問われている内容
(1) プリズムの最小偏角 $D_{\\min}$ の条件で、屈折率 $n$ と頂角 $A$、最小偏角 $D_{\\min}$ の関係式
$$n = \\sin((A + D_{\\min})/2)/\\sin(A/2)$$
を導け。
(2) Cauchy の分散公式 $n(\\lambda) = B + C/\\lambda^2$ を用いて、赤色（$\\lambda = 700\\,\\text{nm}$）と紫色（$\\lambda = 400\\,\\text{nm}$）で屈折率が異なることを述べよ。
(3) 分散の向きが「紫ほど大きく屈折」となる理由を Lorentz モデルから簡潔に説明せよ。
(4) カメラレンズにおける**色収差**と、その補正手段（アクロマート、アポクロマート）を述べよ。`,
    solution: `## (1) 最小偏角
プリズム入射角 $i$、出射角 $i'$、内部角 $r, r'$（$r + r' = A$）。全偏角 $D = (i - r) + (i' - r') = i + i' - A$。

最小偏角条件：対称入射 $i = i', r = r' = A/2 \\Rightarrow D_{\\min} = 2i - A \\Rightarrow i = (A + D_{\\min})/2$。

Snell 則：$\\sin i = n\\sin r = n\\sin(A/2)$：
$$\\boxed{n = \\frac{\\sin((A + D_{\\min})/2)}{\\sin(A/2)}}$$

## (2) Cauchy 分散
$C > 0$ の場合：
- $\\lambda = 700\\,\\text{nm}$：$n_{\\text{赤}} = B + C/(700)^2$（小さい補正）
- $\\lambda = 400\\,\\text{nm}$：$n_{\\text{紫}} = B + C/(400)^2 > n_{\\text{赤}}$

紫の方が屈折率が大きい → 大きく曲がる。虹・プリズムスペクトルで紫が外側（赤が内側）。

## (3) Lorentz モデルの説明
原子内電子の固有振動数 $\\omega_0$（UV 領域）より低い振動数 $\\omega$ の光：
$$n^2(\\omega) - 1 \\propto \\frac{1}{\\omega_0^2 - \\omega^2}$$

$\\omega$ が $\\omega_0$ に近づく（紫、高振動数）ほど分母が小さく $n$ 増加。赤（低振動数）は $\\omega_0$ から遠く $n$ が小さい。これが通常の分散。

## (4) 色収差とその補正
**色収差**：異なる波長で焦点位置が異なる（$n$ が $\\lambda$ 依存 → 焦点距離 $f \\propto 1/(n-1)$ が波長依存）→ 像がにじむ。

**アクロマート**（achromatic）：低分散ガラス（クラウン、$V$ 値大）と高分散ガラス（フリント、$V$ 値小）を組合せた 2 枚レンズ。2 波長で焦点を一致させる。

**アポクロマート**（apochromatic）：3 波長で焦点一致（3 種のガラス組合せ、あるいは異常分散ガラス使用）。天体望遠鏡・高級カメラレンズで使用。

**物理的意味**：分散現象は光の波動性・物質との相互作用の現れ。虹、ダイヤモンドの輝き（高屈折率 $n = 2.4$ + 大きな分散）、光ファイバー通信の分散補償（信号の拡散）、光学機器の色収差補正まで応用。Newton のプリズム実験（1666）が光の色分解の最初の科学的実証。` },

  // ===== 2022年度 拡充セット（全大学×全科目充足）=====

  // ---- TODAI 2022 (+5) ----
  { id: "todai-2022-phys-2", universitySlug: "todai", year: 2022, subject: "物理学", problemNumber: 2,
    title: "相対論的エネルギー-運動量関係", field: "relativity", difficulty: "advanced",
    tags: ["特殊相対論", "4 元運動量", "不変質量"], isFree: true,
    statement: `**対応問題**: 東京大学 2022年度 物理学 問2

## 問題の設定
静止質量 $m$ の粒子の相対論的エネルギーと運動量を考える。光速 $c$、ローレンツ因子 $\\gamma = 1/\\sqrt{1 - v^2/c^2}$。

## 問われている内容
(1) 相対論的エネルギー $E = \\gamma mc^2$ と運動量 $\\vec{p} = \\gamma m\\vec{v}$ から、関係式 $E^2 = (pc)^2 + (mc^2)^2$ を導け。
(2) 非相対論的極限（$v \\ll c$）で $E \\approx mc^2 + (1/2)mv^2$ となることを示せ。
(3) 超相対論的極限（$v \\to c$、あるいは $m \\to 0$）で $E \\approx pc$（光子的）となることを述べよ。
(4) 2 粒子の衝突でエネルギー $E_{1,2}$、運動量 $\\vec{p}_{1,2}$ のときの**不変質量** $M$ を $(E_1 + E_2)^2 - |\\vec{p}_1 + \\vec{p}_2|^2 c^2 = (Mc^2)^2$ で定義し、重心系での全エネルギーと一致することを述べよ。`,
    solution: `## (1) 関係式の導出
$E = \\gamma mc^2$ より $E^2 = \\gamma^2 m^2 c^4$。$\\vec{p}^2 = \\gamma^2 m^2 v^2$：
$$E^2 - (pc)^2 = \\gamma^2 m^2 c^4 - \\gamma^2 m^2 v^2 c^2 = \\gamma^2 m^2 c^2(c^2 - v^2) = \\gamma^2 m^2 c^2 \\cdot c^2/\\gamma^2 = m^2 c^4$$

$$\\boxed{E^2 = (pc)^2 + (mc^2)^2}$$

## (2) 非相対論的極限
$\\gamma = (1 - v^2/c^2)^{-1/2} \\approx 1 + v^2/(2c^2)$：
$$E = \\gamma mc^2 \\approx mc^2 + \\tfrac{1}{2}mv^2$$

第 1 項が静止エネルギー $mc^2$、第 2 項が古典的運動エネルギー。

## (3) 超相対論的極限
$m = 0$（光子）：$E = pc$、光速で伝搬。質量ありでも $v \\to c$ で $(mc^2)^2 \\ll (pc)^2$：$E \\approx pc$。高エネルギー加速器（LHC で $E \\sim$ TeV、$mc^2 \\sim$ GeV）の粒子が光速に極近い。

## (4) 不変質量
$M$ は Lorentz 不変（座標系によらない）。重心系では $\\vec{p}_1 + \\vec{p}_2 = 0$ なので：
$$(Mc^2)^2 = (E_1 + E_2)_{\\text{cm}}^2 - 0 \\Rightarrow Mc^2 = E_{\\text{tot,cm}}$$

**物理的意味**：素粒子の同定に使う基本量。$e^+ e^-$ 衝突でエネルギー 91 GeV にピーク = $Z$ 粒子の不変質量 (Mass reconstruction from $M^2 = E^2 - p^2c^2$)。Higgs 発見（2012）も $\\gamma\\gamma, ZZ$ 崩壊モードの不変質量分布の 125 GeV ピークで。` },

  { id: "todai-2022-phys-3", universitySlug: "todai", year: 2022, subject: "物理学", problemNumber: 3,
    title: "2 次摂動論と AC Stark 効果", field: "quantum", difficulty: "advanced",
    tags: ["摂動論 2 次", "エネルギー補正", "AC Stark シフト"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2022年度 物理学 問3

## 問題の設定
時間独立な摂動 $\\hat{V}$ に対する 2 次の摂動展開：
$$E_n^{(2)} = \\sum_{k \\ne n}\\frac{|\\langle k|\\hat{V}|n\\rangle|^2}{E_n^{(0)} - E_k^{(0)}}$$

## 問われている内容
(1) 基底状態（$n = 0$）では $E_0^{(0)} < E_k^{(0)}$ なので $E_0^{(2)} < 0$ となる（基底状態は常に摂動で下がる）ことを示せ。
(2) 2 準位系 $|0\\rangle, |1\\rangle$（エネルギー $0, \\hbar\\omega_0$）に摂動 $\\hat{V} = \\hbar\\Omega(|0\\rangle\\langle 1| + |1\\rangle\\langle 0|)$ を加えたとき、$E_0$ の 2 次補正を計算せよ。
(3) (2) を厳密対角化の結果 $E_\\pm = \\hbar\\omega_0/2 \\pm \\sqrt{(\\hbar\\omega_0/2)^2 + (\\hbar\\Omega)^2}$ の Taylor 展開と比較し、一致を確認せよ。
(4) 時間依存摂動 $\\hat{V}(t) = \\hbar\\Omega\\cos(\\omega t)\\hat\\sigma_x$ による AC Stark 効果の定性的説明を述べよ。`,
    solution: `## (1) 基底状態の 2 次補正の符号
$E_0^{(0)} < E_k^{(0)}$ ($k \\ne 0$) なら分母 $E_0^{(0)} - E_k^{(0)} < 0$。分子 $|V_{k0}|^2 \\ge 0$。よって各項 $\\le 0$：
$$E_0^{(2)} = \\sum_{k \\ne 0}\\frac{|V_{k0}|^2}{E_0^{(0)} - E_k^{(0)}} \\le 0$$

**物理的意味**：摂動は基底状態を必ず下げる（凸性）。

## (2) 2 準位系の 2 次補正
$E_0^{(0)} = 0$、$|V_{10}| = \\hbar\\Omega$、$E_0^{(0)} - E_1^{(0)} = -\\hbar\\omega_0$：
$$E_0^{(2)} = \\frac{|\\hbar\\Omega|^2}{-\\hbar\\omega_0} = -\\frac{\\hbar\\Omega^2}{\\omega_0}$$

## (3) 厳密対角化との比較
$E_- = \\hbar\\omega_0/2 - \\sqrt{(\\hbar\\omega_0/2)^2 + (\\hbar\\Omega)^2}$。$\\Omega \\ll \\omega_0$ で：
$$E_- \\approx \\frac{\\hbar\\omega_0}{2} - \\frac{\\hbar\\omega_0}{2}\\sqrt{1 + (2\\Omega/\\omega_0)^2}$$
$$\\approx \\frac{\\hbar\\omega_0}{2} - \\frac{\\hbar\\omega_0}{2}\\left(1 + 2(\\Omega/\\omega_0)^2\\right) = -\\frac{\\hbar\\Omega^2}{\\omega_0}$$

2 次摂動と一致 ✅。

## (4) AC Stark 効果
定常レーザー場で原子準位がシフトする現象。2 次摂動で：
$$\\Delta E_0 = \\sum_k \\frac{|\\langle k|\\hat{d}|0\\rangle|^2 E_0^2}{\\hbar(\\omega_{k0}^2 - \\omega^2)}$$

$\\omega < \\omega_{k0}$ で下方シフト（通常の red detuning）、$\\omega > \\omega_{k0}$ で上方シフト（blue detuning）。

**応用**：
- 光学トラップ：赤離調レーザーで原子を光強度極大に閉じ込め（dipole trap、MOT）
- 光格子：定在波による周期ポテンシャル（量子シミュレーション）

**物理的意味**：2 次摂動は vdW 引力（$\\propto 1/r^6$、分極応答）、光学格子、超伝導 BCS 理論の Frölich 結合など、微視物理学の基本構造。` },

  { id: "todai-2022-phys-4", universitySlug: "todai", year: 2022, subject: "物理学", problemNumber: 4,
    title: "Fourier の熱伝導法則と定常解", field: "thermodynamics", difficulty: "standard",
    tags: ["熱伝導", "Fourier の法則", "熱流束"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2022年度 物理学 問4

## 問題の設定
1 次元の熱伝導を考える。熱伝導率 $\\kappa$ 一定、棒の断面積 $A$、長さ $L$。両端温度 $T_1$（$x = 0$）、$T_2$（$x = L$）、$T_1 > T_2$。

## 問われている内容
(1) Fourier の熱伝導法則 $\\vec{q} = -\\kappa\\nabla T$（$\\vec{q}$：熱流束）を述べ、物理的意味を説明せよ。
(2) 定常状態で 1 次元温度分布 $T(x)$ を求めよ。
(3) 棒を通って $x = 0$ から $x = L$ へ単位時間当たり運ばれる熱量 $Q/t$（熱流）を $\\kappa, A, L, T_1, T_2$ で表せ。
(4) 家屋の熱損失計算への応用（壁の断熱材、U 値の意味）を述べよ。`,
    solution: `## (1) Fourier の法則
$$\\vec{q} = -\\kappa\\nabla T$$

熱流束 $\\vec{q}$（$\\text{W/m}^2$）は温度勾配と逆向き：熱は高温から低温へ流れる。$\\kappa$：熱伝導率（$\\text{W/(m K)}$）、銅 $\\sim 400$、水 $\\sim 0.6$、空気 $\\sim 0.025$。

**物理的意味**：Fourier の法則は経験則で、微視的には分子振動・電子運動の拡散で説明される（$\\kappa \\propto c_v \\bar v \\lambda$、$c_v$：比熱、$\\bar v$：平均速度、$\\lambda$：平均自由行程）。

## (2) 定常温度分布
定常・1 次元：$dq/dx = 0 \\Rightarrow q = $ const。$q = -\\kappa dT/dx$ より $dT/dx = $ const → **線形**：
$$T(x) = T_1 + (T_2 - T_1)\\frac{x}{L}$$

## (3) 熱流
$q = -\\kappa(dT/dx) = \\kappa(T_1 - T_2)/L$（正の値、$x$ 正方向）。単位時間の熱量：
$$\\boxed{Q/t = qA = \\frac{\\kappa A(T_1 - T_2)}{L}}$$

$\\propto$ 温度差、面積、$1/L$（厚いほど流れにくい）。

## (4) 家屋の熱損失
外壁の熱抵抗 $R_{\\text{th}} = L/(\\kappa A)$、温度差 $\\Delta T$ で $Q/t = \\Delta T/R_{\\text{th}}$（Ohm 則と類似）。

**U 値**（熱貫流率）：$U = \\kappa/L$（$\\text{W/(m}^2\\text{K)}$）、壁全体の熱通しやすさ。低い U 値 = 高断熱。
- 単板ガラス：$U \\sim 6$
- ペアガラス：$\\sim 2.8$
- 真空断熱：$< 1$

**直列・並列合成**：多層壁では $R_{\\text{th,tot}} = \\sum R_i$（直列）。窓+壁の並列は $U_{\\text{tot}} = (A_1 U_1 + A_2 U_2)/(A_1 + A_2)$。

**物理的意味**：Fourier の法則は拡散方程式 $\\partial T/\\partial t = \\alpha \\nabla^2 T$（$\\alpha = \\kappa/(\\rho c)$ 熱拡散率）の基礎。電流 $\\vec{j} = \\sigma\\vec{E}$（Ohm）、粒子拡散 $\\vec{J} = -D\\nabla n$（Fick）と同形の線形輸送則で、非平衡統計力学（Onsager 関係、線形応答理論）の典型例。` },

  { id: "todai-2022-math-1", universitySlug: "todai", year: 2022, subject: "数学", problemNumber: 1,
    title: "Laplace 方程式と調和関数", field: "math", difficulty: "standard",
    tags: ["Laplace 方程式", "調和関数", "平均値定理"],
    isFree: true,
    statement: `**対応問題**: 東京大学 2022年度 数学 問1

## 問われている内容
2 次元 Laplace 方程式 $\\nabla^2 u = \\partial^2 u/\\partial x^2 + \\partial^2 u/\\partial y^2 = 0$ を満たす $u(x, y)$ を**調和関数**と呼ぶ。

(1) $u_1 = x^2 - y^2$、$u_2 = 2xy$、$u_3 = e^x\\cos y$ が調和関数であることを確認せよ。
(2) $f(z) = u(x, y) + iv(x, y)$ が解析関数（正則）の条件 Cauchy-Riemann 式 $\\partial u/\\partial x = \\partial v/\\partial y$、$\\partial u/\\partial y = -\\partial v/\\partial x$ から $u, v$ が共に調和となることを示せ。
(3) 円板 $|\\vec{r}| < R$ 内で調和な関数は、その領域内で最大値・最小値を取らない（最大値原理）ことを物理的に述べよ。`,
    solution: `## (1) 調和性の確認
- $u_1 = x^2 - y^2$：$\\nabla^2 u_1 = 2 - 2 = 0$ ✅
- $u_2 = 2xy$：$\\nabla^2 u_2 = 0 + 0 = 0$ ✅
- $u_3 = e^x\\cos y$：$\\partial^2 u_3/\\partial x^2 = e^x\\cos y$、$\\partial^2 u_3/\\partial y^2 = -e^x\\cos y$、和 $= 0$ ✅

## (2) Cauchy-Riemann から調和性
$u_{xx} = v_{xy}$（$\\partial u/\\partial x = \\partial v/\\partial y$ を $\\partial/\\partial x$）
$u_{yy} = -v_{xy}$（$\\partial u/\\partial y = -\\partial v/\\partial x$ を $\\partial/\\partial y$、混合順 Clairaut）

足すと $u_{xx} + u_{yy} = 0 \\Rightarrow \\nabla^2 u = 0$ ✅。

$v$ について同様：$v_{xx} = -u_{xy}$、$v_{yy} = u_{xy}$ → $\\nabla^2 v = 0$。

## (3) 最大値原理の物理的意味
**平均値定理**：円内の調和関数 $u$ について、任意の点 $P$ での値は、$P$ を中心とする任意の円周上の $u$ の平均：
$$u(P) = \\frac{1}{2\\pi r}\\oint_{C_r(P)} u\\, ds$$

**帰結**：もし $u$ が $P$ で極大なら、$P$ を中心とする微小円で全周 $u(Q) \\le u(P)$。平均 $= u(P)$ は $u(Q) = u(P)$ 全周を意味（$u$ は局所定数）→ 解析接続で全域一定。非定数調和関数は内点で極大取れない → **最大値は境界上のみ**。

**物理的意味**：静電ポテンシャル（電荷なし）、定常温度分布（熱源なし）、定常流体速度ポテンシャル等が調和関数。電荷・熱源なしでは電位・温度は内部で極値を持てない（Earnshaw の定理：電荷は電場だけでは静的に捕捉できない）。境界値問題の一意性、Poisson 核、Green 関数の基盤。` },

  { id: "todai-2022-math-2", universitySlug: "todai", year: 2022, subject: "数学", problemNumber: 2,
    title: "Rayleigh 商と変分原理", field: "math", difficulty: "advanced",
    tags: ["Rayleigh 商", "変分原理", "固有値"], isFree: true,
    statement: `**対応問題**: 東京大学 2022年度 数学 問2

## 問われている内容
実対称行列 $A$ の最小固有値 $\\lambda_{\\min}$ について、Rayleigh 商 $R(\\vec{x}) = \\vec{x}^T A \\vec{x}/(\\vec{x}^T\\vec{x})$ を考える。

(1) $R(\\vec{x})$ が $\\vec{x} = \\vec{v}_i$（固有ベクトル）で $\\lambda_i$ を取ることを示せ。
(2) $\\lambda_{\\min} = \\min_\\vec{x} R(\\vec{x})$ を示せ（変分原理）。
(3) $\\lambda_{\\min}$ の上界を与える試行ベクトル $\\vec{x}_{\\text{trial}}$ を使って評価する方法（Rayleigh-Ritz 法）を説明せよ。
(4) 量子力学の基底状態エネルギーへの応用：$E_0 \\le \\langle\\psi|\\hat H|\\psi\\rangle/\\langle\\psi|\\psi\\rangle$ を導け（変分原理）。`,
    solution: `## (1) 固有ベクトルでの値
$A\\vec{v}_i = \\lambda_i\\vec{v}_i$：
$$R(\\vec{v}_i) = \\vec{v}_i^T A\\vec{v}_i/|\\vec{v}_i|^2 = \\lambda_i|\\vec{v}_i|^2/|\\vec{v}_i|^2 = \\lambda_i$$

## (2) 変分原理
$\\{\\vec{v}_i\\}$ を正規直交基底に選ぶ（対称行列は対角化可能）。任意 $\\vec{x} = \\sum c_i\\vec{v}_i$：
$$R(\\vec{x}) = \\frac{\\sum c_i^2 \\lambda_i}{\\sum c_i^2} \\ge \\lambda_{\\min}\\frac{\\sum c_i^2}{\\sum c_i^2} = \\lambda_{\\min}$$

等号は $c_i = 0$ for $\\lambda_i > \\lambda_{\\min}$。つまり $\\vec{x} \\propto \\vec{v}_{\\min}$。

$$\\boxed{\\lambda_{\\min} = \\min_{\\vec{x} \\ne 0} R(\\vec{x})}$$

同様に $\\lambda_{\\max} = \\max R$。

## (3) Rayleigh-Ritz 法
試行ベクトル $\\vec{x}_{\\text{trial}}$ で $R(\\vec{x}_{\\text{trial}})$ を計算：必ず $\\ge \\lambda_{\\min}$（上界）。

**パラメータ付き試行**：$\\vec{x}(\\alpha_1, \\ldots, \\alpha_N)$ を仮定、$\\alpha_i$ について $R$ を最小化：
$$\\partial R/\\partial\\alpha_i = 0 \\Rightarrow (A - R\\cdot I)\\vec{x} = 0$$

$N$ 次元試行空間の射影が $\\lambda_{\\min}$ の上界を与え、$N \\to \\infty$ で正確解に収束。

## (4) 量子力学変分原理
ハミルトニアン $\\hat H$ を実対称行列 $A$ に相当とみなす（無限次元の場合）。$\\lambda_{\\min} = E_0$（基底状態エネルギー）。

任意の規格化された試行波動関数 $|\\psi\\rangle$：
$$\\boxed{E_0 \\le \\langle\\psi|\\hat H|\\psi\\rangle}$$

等号は $|\\psi\\rangle = |\\psi_0\\rangle$（真の基底状態）。

**応用例**：水素分子（Heitler-London、1927）、ヘリウム原子（有効電荷変分、前述 titech 2024）、Hartree-Fock 法、量子モンテカルロ、密度汎関数理論（DFT）。

**物理的意味**：変分原理は多体問題の標準的アプローチ。物理的直感で試行関数を構成（対称性、漸近挙動）、パラメータを最適化して基底状態を近似。化学結合・電子構造計算・クオーク構造などで現代物理の中核手法。` },

  // ---- KYODAI 2022 (+5) ----
  { id: "kyodai-2022-phys-2", universitySlug: "kyodai", year: 2022, subject: "物理学", problemNumber: 2,
    title: "熱放射と Kirchhoff の法則", field: "thermodynamics", difficulty: "standard",
    tags: ["黒体放射", "Kirchhoff の法則", "放射率"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2022年度 物理学 問2

## 問題の設定
温度 $T$ の物体からの熱放射を考える。各波長 $\\lambda$ での放射強度 $I_\\lambda$、吸収率 $a_\\lambda$、反射率 $r_\\lambda$、透過率 $t_\\lambda$。

## 問われている内容
(1) エネルギー保存則 $a_\\lambda + r_\\lambda + t_\\lambda = 1$ を述べよ。不透明物体（$t_\\lambda = 0$）では？
(2) Kirchhoff の法則：熱平衡では任意の物体の放射率 $\\varepsilon_\\lambda$ = 吸収率 $a_\\lambda$ であることを熱力学的議論で示せ。
(3) 太陽光（ほぼ黒体）と地球表面の熱放射の波長ピークをそれぞれ Wien の変位則から求めよ（$T_\\odot = 5800\\,\\text{K}$、$T_\\oplus = 288\\,\\text{K}$）。
(4) 温室効果の原理：可視光に透明・赤外光に不透明な大気が地表温度を上げることを述べよ。`,
    solution: `## (1) エネルギー保存
入射エネルギー = 吸収 + 反射 + 透過：
$$a_\\lambda + r_\\lambda + t_\\lambda = 1$$

不透明物体 ($t_\\lambda = 0$)：$a_\\lambda = 1 - r_\\lambda$。黒体（完全吸収）：$a_\\lambda = 1$（すべての波長）。

## (2) Kirchhoff の法則
**熱力学的証明**：温度 $T$ の空洞内に任意の物体を置く。熱平衡では、物体の単位時間吸収 = 放射（でないと温度差が生じ熱力学第 2 法則違反）。

黒体の放射強度 $B_\\lambda(T)$（Planck 分布）、任意物体の放射 $I_\\lambda = \\varepsilon_\\lambda B_\\lambda$。吸収は $a_\\lambda B_\\lambda$。平衡条件：
$$\\varepsilon_\\lambda B_\\lambda = a_\\lambda B_\\lambda \\Rightarrow \\boxed{\\varepsilon_\\lambda = a_\\lambda}$$

**意味**：よく吸収する波長でよく放射する。

## (3) Wien の変位則
$\\lambda_{\\max} T = b = 2.9\\times 10^{-3}\\,\\text{m K}$：
- 太陽（$T_\\odot = 5800$）：$\\lambda_{\\max} \\approx 500\\,\\text{nm}$（緑、可視光中央）
- 地球表面（$T_\\oplus = 288$）：$\\lambda_{\\max} \\approx 10\\,\\mu\\text{m}$（遠赤外）

## (4) 温室効果
- 太陽光（主に可視光）は大気中の $\\text{N}_2, \\text{O}_2$ によく透過 → 地表を暖める
- 地表からの熱放射（遠赤外）は $\\text{H}_2\\text{O}, \\text{CO}_2, \\text{CH}_4$ に吸収される（分子振動準位に対応）
- 吸収された赤外線は再放射、一部は地表に戻る → 地表温度上昇

**定量評価**：大気なしなら $T_\\oplus \\approx 255\\,\\text{K}$（$-18°\\text{C}$）。実際は $288\\,\\text{K}$（$+15°\\text{C}$）。差 $33\\,\\text{K}$ が温室効果。

**物理的意味**：Kirchhoff の法則は放射熱工学、リモートセンシング、気候学の基本。選択的放射体（太陽電池の熱放射制御、放熱フィルム）の設計、衛星観測（地表温度・植生）に応用。温暖化問題は $\\text{CO}_2$ 濃度増加による放射バランス変化の問題。` },

  { id: "kyodai-2022-phys-3", universitySlug: "kyodai", year: 2022, subject: "物理学", problemNumber: 3,
    title: "Curie 則と磁性体の帯磁率", field: "statistical", difficulty: "standard",
    tags: ["Curie 則", "磁性体", "ランゲヴァン理論"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2022年度 物理学 問3

## 問題の設定
磁気モーメント $\\vec{\\mu}$（大きさ $\\mu_0$ 一定、向き自由）をもつ独立な $N$ 個の磁気双極子が、磁場 $\\vec{B} = B\\hat{z}$ と温度 $T$ に置かれている。磁気双極子のエネルギー $E = -\\vec{\\mu}\\cdot\\vec{B} = -\\mu_0 B\\cos\\theta$（$\\theta$：磁気モーメントと磁場のなす角）。

## 問われている内容
(1) Boltzmann 因子を用いて、1 個の磁気双極子の平均磁化 $\\langle\\mu_z\\rangle$ を計算せよ（ランゲヴァン関数）。
(2) 高温極限 $\\mu_0 B \\ll k_B T$ での $\\langle\\mu_z\\rangle$ を求めよ。
(3) 系全体の磁化 $M = N\\langle\\mu_z\\rangle$ から帯磁率 $\\chi = \\mu_0 M/B$ を計算し、Curie 則 $\\chi = C/T$（$C$：Curie 定数）を導け。
(4) 量子力学的スピン 1/2 の場合の Curie 則（磁気モーメント $\\mu_B g_J J = \\mu_B$）を比較せよ。`,
    solution: `## (1) 磁化の計算（古典連続スピン）
$$\\langle\\mu_z\\rangle = \\mu_0\\frac{\\int \\cos\\theta \\, e^{\\mu_0 B\\cos\\theta/(k_B T)}\\sin\\theta\\, d\\theta\\, d\\phi}{\\int e^{\\mu_0 B\\cos\\theta/(k_B T)}\\sin\\theta\\, d\\theta\\, d\\phi}$$

$x = \\mu_0 B/(k_B T)$、$u = \\cos\\theta$：
$$\\langle\\mu_z\\rangle = \\mu_0 \\frac{\\int_{-1}^1 u e^{xu} du}{\\int_{-1}^1 e^{xu} du} = \\mu_0 L(x)$$

$L(x) = \\coth x - 1/x$：**ランゲヴァン関数**。

## (2) 高温極限
$x \\ll 1$ で $L(x) \\approx x/3$：
$$\\langle\\mu_z\\rangle \\approx \\mu_0 \\cdot \\frac{\\mu_0 B}{3 k_B T} = \\frac{\\mu_0^2 B}{3 k_B T}$$

## (3) Curie 則
$$M = N\\langle\\mu_z\\rangle = \\frac{N\\mu_0^2 B}{3 k_B T}$$

真空透磁率 $\\mu_v$ で $\\chi = \\mu_v M/B$：
$$\\boxed{\\chi = \\frac{\\mu_v N\\mu_0^2}{3 k_B T} = \\frac{C}{T}}$$

Curie 定数 $C = \\mu_v N\\mu_0^2/(3 k_B)$。**$\\chi \\propto 1/T$**：温度上昇で帯磁率低下（熱揺らぎが磁場整列を阻害）。

## (4) 量子スピン 1/2
スピン 1/2 で磁気モーメント $\\pm\\mu_B$。2 準位系の分配関数 $Z = 2\\cosh(\\mu_B B/k_B T)$：
$$\\langle\\mu_z\\rangle = \\mu_B\\tanh(\\mu_B B/(k_B T)) \\approx \\mu_B^2 B/(k_B T) \\quad (\\text{高温})$$

$M \\propto 1/T$ で同じく Curie 則。一般の $J$ では $\\chi \\propto g_J^2 J(J+1)/T$（ランデ因子）。

**物理的意味**：Curie 則は局在スピンの普遍則。実在物質では相互作用で Curie-Weiss $\\chi = C/(T - \\Theta)$（2024 osaka Ising 参照）となり、$\\Theta > 0$ で強磁性、$\\Theta < 0$ で反強磁性。磁化測定は物質中の局在モーメント数（希薄不純物濃度）の決定ツール。` },

  { id: "kyodai-2022-phys-4", universitySlug: "kyodai", year: 2022, subject: "物理学", problemNumber: 4,
    title: "Navier-Stokes 方程式の基礎", field: "mechanics", difficulty: "advanced",
    tags: ["Navier-Stokes", "粘性", "Reynolds 数"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2022年度 物理学 問4

## 問題の設定
非圧縮性流体（密度 $\\rho$、粘性係数 $\\eta$）の運動を考える。外力なし・重力なし。

## 問われている内容
(1) 連続の式 $\\nabla\\cdot\\vec{v} = 0$ を導け（質量保存と非圧縮性から）。
(2) Navier-Stokes 方程式
$$\\rho\\left(\\frac{\\partial\\vec{v}}{\\partial t} + (\\vec{v}\\cdot\\nabla)\\vec{v}\\right) = -\\nabla P + \\eta\\nabla^2\\vec{v}$$
の各項の物理的意味を説明せよ。
(3) 特性速度 $U$、特性長 $L$ で無次元化し、Reynolds 数 $\\text{Re} = \\rho U L/\\eta$ を定義せよ。
(4) 低 Reynolds 数（$\\text{Re} \\ll 1$、微生物、粘稠流体）と高 Reynolds 数（$\\text{Re} \\gg 1$、飛行機、川の流れ）の流れの特徴を対比せよ。`,
    solution: `## (1) 連続の式
質量保存：$\\partial\\rho/\\partial t + \\nabla\\cdot(\\rho\\vec{v}) = 0$。非圧縮性 $\\rho = $ const：
$$\\partial\\rho/\\partial t = 0, \\quad \\rho\\nabla\\cdot\\vec{v} = 0 \\Rightarrow \\nabla\\cdot\\vec{v} = 0$$

## (2) Navier-Stokes の解釈
- **$\\rho\\partial\\vec{v}/\\partial t$**：局所加速度（時間変化）
- **$\\rho(\\vec{v}\\cdot\\nabla)\\vec{v}$**：対流加速度（流れに乗ったラグランジュ微分の一部）、非線形項
- **$-\\nabla P$**：圧力勾配による力（圧縮性・慣性効果の一部）
- **$\\eta\\nabla^2\\vec{v}$**：粘性による運動量拡散（Laplacian は速度の平均との差を補正）

左辺全体が物質微分 $D\\vec{v}/Dt = \\partial_t\\vec{v} + (\\vec{v}\\cdot\\nabla)\\vec{v}$：流体粒子加速度。右辺が力。Newton 第 2 法則の流体版。

## (3) Reynolds 数
$\\vec{v}' = \\vec{v}/U$、$\\vec{r}' = \\vec{r}/L$、$t' = tU/L$：
$$\\frac{\\partial\\vec{v}'}{\\partial t'} + (\\vec{v}'\\cdot\\nabla')\\vec{v}' = -\\nabla' P' + \\frac{\\eta}{\\rho U L}\\nabla'^2\\vec{v}'$$

$\\text{Re} = \\rho U L/\\eta$ の逆数が粘性項の係数。$\\text{Re}$ は慣性力と粘性力の比：
$$\\text{Re} = \\frac{\\text{慣性力}}{\\text{粘性力}}$$

## (4) 両極限の対比

**低 Re（$\\ll 1$）**：
- 粘性支配。慣性項無視可（Stokes 方程式 $\\eta\\nabla^2\\vec{v} = \\nabla P$）
- 線形、可逆（タイムリバーサル不変）
- 例：微生物遊泳（繊毛運動、鞭毛）、血流（毛細血管）、極小流路（MEMS、マイクロ流体）
- Stokes の法則：球の抵抗 $F = 6\\pi\\eta a v$

**高 Re（$\\gg 1$）**：
- 慣性支配。粘性項は境界層のみ
- 非線形、乱流化（$\\text{Re} \\sim 10^5$ 以上）、不可逆（エネルギー散逸経路）
- 例：航空機（$\\text{Re} \\sim 10^6$〜$10^7$）、風洞実験、天気予報（$10^{10}$）、河川（$10^4$〜$10^6$）

**物理的意味**：Reynolds 数は流体力学の中心的無次元数。相似則（模型実験、風洞）、乱流遷移、抵抗係数の類型化の基準。Navier-Stokes 方程式の滑らか解存在はミレニアム問題の 1 つ（未解決）。` },

  { id: "kyodai-2022-math-1", universitySlug: "kyodai", year: 2022, subject: "数学", problemNumber: 1,
    title: "Sturm-Liouville 問題と直交関数系", field: "math", difficulty: "standard",
    tags: ["Sturm-Liouville", "固有値問題", "直交関数"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2022年度 数学 問1

## 問われている内容
Sturm-Liouville 型固有値問題：
$$-\\frac{d}{dx}\\left(p(x)\\frac{dy}{dx}\\right) + q(x)y = \\lambda w(x) y$$
（$p, q, w$：実関数、$p, w > 0$）と境界条件 $y(a) = y(b) = 0$。

(1) 簡単な例：$p = w = 1, q = 0$、区間 $[0, L]$ の固有値問題で固有値 $\\lambda_n$ と固有関数 $y_n$ を求めよ。
(2) Sturm-Liouville 演算子が自己随伴（エルミート）であることを、内積 $\\langle f, g\\rangle = \\int_a^b f g w\\, dx$ で示せ。
(3) 異なる固有値の固有関数が重み付き直交 $\\int y_m y_n w\\, dx = 0$ （$m \\ne n$）を示せ。
(4) 任意関数の Sturm-Liouville 展開（Fourier 級数の一般化）の意義を述べよ。`,
    solution: `## (1) 具体例
$-y'' = \\lambda y$、$y(0) = y(L) = 0$。
$y = A\\sin(kx) + B\\cos(kx)$、$y(0) = 0 \\Rightarrow B = 0$。$y(L) = A\\sin(kL) = 0 \\Rightarrow kL = n\\pi$：
$$\\lambda_n = (n\\pi/L)^2, \\quad y_n = \\sqrt{2/L}\\sin(n\\pi x/L), \\quad n = 1, 2, \\ldots$$

これは 1 次元井戸型ポテンシャルの量子力学と同形。

## (2) 自己随伴性
$$\\langle f, \\hat L g\\rangle = \\int_a^b f\\left(-\\frac{d}{dx}(p g') + q g\\right)dx$$

第 1 項を部分積分 2 回（境界項は $f(a)=f(b)=0$ or $g(a)=g(b)=0$ で消える）：
$$\\int f(pg')'\\, dx = [fpg']_a^b - \\int f'pg'\\, dx = -[p f'g]_a^b + \\int (pf')'g\\, dx = \\int (pf')'g\\, dx$$

よって $\\langle f, \\hat L g\\rangle = \\langle\\hat L f, g\\rangle$。自己随伴。

## (3) 直交性
$\\hat L y_m = \\lambda_m w y_m$、$\\hat L y_n = \\lambda_n w y_n$。$y_n$ と内積：
$$\\lambda_m \\int y_n y_m w\\, dx = \\langle y_n, \\hat L y_m\\rangle = \\langle\\hat L y_n, y_m\\rangle = \\lambda_n \\int y_n y_m w\\, dx$$

$(\\lambda_m - \\lambda_n)\\int y_n y_m w\\, dx = 0$。$\\lambda_m \\ne \\lambda_n$ なら積分 $= 0$。

## (4) Sturm-Liouville 展開
$\\{y_n\\}$ は完備直交系で、任意関数 $f(x)$ を：
$$f(x) = \\sum_n c_n y_n(x), \\quad c_n = \\int f y_n w\\, dx$$

（規格化 $\\int y_n^2 w\\, dx = 1$）

**物理的意味**：Fourier 級数 (Sturm-Liouville 特殊ケース)、Bessel 関数（円筒）、Legendre 多項式（球面）、Hermite 多項式（調和振動子）すべて Sturm-Liouville 構造の一般化。量子力学のエルミート演算子の固有値展開、常微分方程式の境界値問題、線形応答関数の基礎。` },

  { id: "kyodai-2022-math-2", universitySlug: "kyodai", year: 2022, subject: "数学", problemNumber: 2,
    title: "有限群と表現論の基礎", field: "math", difficulty: "advanced",
    tags: ["群論", "表現", "既約表現"],
    isFree: true,
    statement: `**対応問題**: 京都大学 2022年度 数学 問2

## 問われている内容
有限群 $G$ の表現 $D: G \\to GL(V)$ は、各 $g \\in G$ に線形演算子 $D(g)$ を、群演算を保つように対応させる写像。

(1) 対称群 $S_3$（3 つの対称操作：恒等 $e$、転換 3 つ、回転 2 つ）の元と群演算を書け。
(2) $S_3$ の自明表現（1 次元、すべて $D(g) = 1$）と符号表現（転換で $-1$、恒等と回転で $+1$）が既約表現（1 次元）であることを述べよ。
(3) $S_3$ の 2 次元既約表現（基準正三角形の対称性）を行列で与えよ。
(4) Schur の補題：可換既約表現はスカラー倍のみ、の意味と応用（量子力学の選択則）を簡潔に述べよ。`,
    solution: `## (1) $S_3$
要素数 $|S_3| = 6$：
- 恒等 $e$
- 3 つの転換 $\\tau_1, \\tau_2, \\tau_3$（2 つの要素を入れ替える、例 $(12)$）
- 2 つの回転 $r, r^2$（3 周期の循環 $(123), (132)$）

乗算表：$\\tau_i\\tau_j = r^k$（異なる転換の合成は回転）、$r\\tau_i = \\tau_j$（回転と転換の合成は別の転換）、$r^3 = e$、$\\tau_i^2 = e$。

## (2) 1 次元既約表現
- **自明表現** $D_1(g) = 1$ for $g \\in G$：明らかに表現（乗法保存 $1\\cdot 1 = 1$）。不変な 1 次元部分空間を持つので既約（1 次元なのでそもそも分解できない）。
- **符号表現** $D_2(e) = D_2(r) = D_2(r^2) = 1$、$D_2(\\tau_i) = -1$：$\\tau_i\\tau_j = r^k$ で $(-1)(-1) = 1 = D_2(r^k)$ ✅。

## (3) 2 次元既約表現
$S_3$ は正三角形の対称群。正三角形の 3 頂点が $xy$ 平面上の単位ベクトル：$\\vec{v}_1 = (1, 0)$、$\\vec{v}_2 = (-1/2, \\sqrt{3}/2)$、$\\vec{v}_3 = (-1/2, -\\sqrt{3}/2)$。

**回転** $r$（120°）：
$$D(r) = \\begin{pmatrix} -1/2 & -\\sqrt{3}/2 \\\\ \\sqrt{3}/2 & -1/2 \\end{pmatrix}$$

**転換** $\\tau_1$（$x$ 軸対称、$\\vec{v}_1$ 固定）：
$$D(\\tau_1) = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$$

（$\\tau_2, \\tau_3$ は $r, D(\\tau_1)$ の積で得られる）

## (4) Schur の補題と選択則
**Schur の補題**：既約表現 $D$ と可換な演算子 $A$（$[A, D(g)] = 0$ for all $g$）は単位演算子のスカラー倍 $A = \\lambda I$ のみ。

**量子力学への応用（選択則）**：ハミルトニアン $\\hat H$ が対称性群 $G$ で不変：$[\\hat H, \\hat U(g)] = 0$。$\\hat H$ の固有空間は $G$ の既約表現に分解。

行列要素 $\\langle\\psi_{\\alpha i}|\\hat V|\\psi_{\\beta j}\\rangle$（$\\alpha, \\beta$：既約表現ラベル、$i, j$：基底ラベル）は、$\\hat V$ が既約表現 $\\gamma$ で変換するとき、$\\alpha, \\beta, \\gamma$ の直積に自明表現が含まれる場合のみ非ゼロ（Wigner-Eckart 定理）。

**物理応用**：原子スペクトル（$s \\to p$ は電気双極子許容、$s \\to s$ 禁制）、分子振動の赤外/ラマン活性、素粒子の崩壊選択則（$\\tau$、$Z$ 粒子崩壊チャネル）。

**物理的意味**：群論は物理の対称性記述の言語。空間群（結晶）、Lorentz 群（相対論）、ゲージ群（標準模型の $SU(3)\\times SU(2)\\times U(1)$）まで、対称性と保存則の対応は Noether 定理と並ぶ基本原理。` },

  // ---- TITECH 2022 (+4) ----
  { id: "titech-2022-phys-2", universitySlug: "titech", year: 2022, subject: "物理学", problemNumber: 2,
    title: "Euler 角と剛体の運動", field: "mechanics", difficulty: "advanced",
    tags: ["Euler 角", "剛体運動", "角速度ベクトル"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2022年度 物理学 問2

## 問題の設定
Euler 角 $(\\phi, \\theta, \\psi)$：空間固定系から剛体固定系への回転を、(1) $z$ 軸回り $\\phi$、(2) 新 $x'$ 軸回り $\\theta$、(3) 新 $z''$ 軸回り $\\psi$ で表す。

## 問われている内容
(1) Euler 角の定義を確認し、剛体が空間に対してどう向きを変えるかを記述せよ。
(2) 空間固定系での角速度ベクトル $\\vec{\\omega}$ を $(\\dot\\phi, \\dot\\theta, \\dot\\psi)$ で表せ。
(3) 対称コマ（$I_1 = I_2 \\ne I_3$）のラグランジアンを Euler 角で書け。
(4) 対称コマの歳差運動・章動・自転（3 つの固有運動）を定性的に述べよ。`,
    solution: `## (1) Euler 角の解釈
$(\\phi, \\theta, \\psi)$ は 3 次元回転空間 $SO(3)$ のパラメータ。
- $\\phi$：**章動角**の方位（歳差回転、$z$ 軸まわり）
- $\\theta$：**章動角**（対称軸の傾き、$0 \\le \\theta \\le \\pi$）
- $\\psi$：**自転角**（対称軸まわりの回転）

地球の歳差（25800 年）・章動（18.6 年）・自転（1 日）で理解可能。

## (2) 角速度ベクトル
剛体固定系（対称軸 3 方向）で：
$$\\omega_1 = \\dot\\theta\\cos\\psi + \\dot\\phi\\sin\\theta\\sin\\psi$$
$$\\omega_2 = -\\dot\\theta\\sin\\psi + \\dot\\phi\\sin\\theta\\cos\\psi$$
$$\\omega_3 = \\dot\\phi\\cos\\theta + \\dot\\psi$$

## (3) 対称コマのラグランジアン
$I_1 = I_2 \\equiv I$、$I_3$。運動エネルギー：
$$T = \\tfrac{I}{2}(\\omega_1^2 + \\omega_2^2) + \\tfrac{I_3}{2}\\omega_3^2$$

$\\omega_1^2 + \\omega_2^2 = \\dot\\theta^2 + \\dot\\phi^2\\sin^2\\theta$（計算）：
$$T = \\tfrac{I}{2}(\\dot\\theta^2 + \\dot\\phi^2\\sin^2\\theta) + \\tfrac{I_3}{2}(\\dot\\phi\\cos\\theta + \\dot\\psi)^2$$

重力場の重いコマでは、重心高さ $h\\cos\\theta$ のポテンシャル $U = Mgh\\cos\\theta$ を加える。

$L = T - U$ が Lagrangian。$\\phi, \\psi$ は循環座標（$\\partial L/\\partial\\phi = 0$）→ 角運動量 2 成分が保存。

## (4) 3 つの運動
- **自転**：$\\psi$ の増加、高速（対称軸まわり）
- **歳差**：$\\phi$ の増加、重力トルクに応答して起こる遅い回転
- **章動**：$\\theta$ の振動、エネルギー保存と角運動量保存の両立のための微調整

**地球の例**：
- 自転：1 日
- 歳差：26000 年（春分点移動）
- 章動：18.6 年（月-地球-太陽の角運動量）

**物理的意味**：Euler 角は剛体運動の標準座標。コマ、ジャイロスコープ（慣性航法）、分子回転（赤外・マイクロ波分光）、原子核の変形モード（アクチニド元素）で基本ツール。量子力学では Wigner-$D$ 関数として現れ、角運動量の表現論に必須。` },

  { id: "titech-2022-phys-3", universitySlug: "titech", year: 2022, subject: "物理学", problemNumber: 3,
    title: "導波管と電磁波", field: "electromagnetism", difficulty: "advanced",
    tags: ["導波管", "TE/TM モード", "カットオフ"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2022年度 物理学 問3

## 問題の設定
断面 $a \\times b$（$a > b$）の矩形導波管（内面が理想導体）を伝わる電磁波を考える。$z$ 軸方向伝搬、角振動数 $\\omega$。

## 問われている内容
(1) 導体境界条件：電場の接線成分 $\\vec{E}_\\parallel = 0$、磁場の法線成分 $B_\\perp = 0$ を述べよ。
(2) TE モード（$E_z = 0$）の分散関係を、$B_z$ が波動方程式と境界条件を満たすことから導け。
(3) TE$_{10}$ モードのカットオフ振動数 $\\omega_c = c\\pi/a$ を導出せよ。
(4) $\\omega < \\omega_c$ では伝搬できない（エバネッセント波）ことを述べよ。`,
    solution: `## (1) 境界条件
理想導体内部：$\\vec{E} = 0$。境界では接線電場 $\\vec{E}_\\parallel = 0$（導体内外連続、内部ゼロ）。

$\\vec{B}$ の法線成分 $B_\\perp$：$\\nabla\\cdot\\vec{B} = 0$ から境界で $B_\\perp$ 連続、内部ゼロで $B_\\perp(\\text{導体表面}) = 0$。

## (2) TE モードの分散
$E_z = 0$、$B_z$ のみが構造を持つ。$B_z(x, y, z, t) = f(x, y)e^{i(k_z z - \\omega t)}$ と分離。波動方程式 $\\nabla^2 B_z = -(\\omega^2/c^2)B_z$ から：
$$(\\partial_x^2 + \\partial_y^2)f = -(\\omega^2/c^2 - k_z^2)f \\equiv -\\kappa^2 f$$

境界条件 $B_\\perp|_\\text{壁}= 0$（TE は $\\partial B_z/\\partial n = 0$ in practice）。

変数分離 $f(x, y) = \\cos(m\\pi x/a)\\cos(n\\pi y/b)$ と取れて：
$$\\kappa^2 = (m\\pi/a)^2 + (n\\pi/b)^2$$

$\\omega^2/c^2 = k_z^2 + \\kappa^2$ が分散関係。

## (3) TE$_{10}$ カットオフ
TE$_{10}$：$m = 1, n = 0$。$\\kappa = \\pi/a$。カットオフ条件 $k_z = 0$：
$$\\omega_c = c\\kappa = c\\pi/a$$

$$\\boxed{\\omega_c = c\\pi/a, \\quad f_c = c/(2a)}$$

## (4) エバネッセント波
$\\omega < \\omega_c$：$k_z^2 = \\omega^2/c^2 - \\kappa^2 < 0$。$k_z$ が純虚数 → 波は指数減衰（伝搬不可）。

**応用例**：
- TE$_{10}$ で $a = 2\\,\\text{cm}$：$f_c = 7.5\\,\\text{GHz}$。マイクロ波レンジで実用的。
- 光ファイバー（複雑な多モード導波）、マイクロ波冷蔵庫のドア（金網＝短波長のみカットオフ、光は通る）
- 量子井戸の 2 次元電子ガス（電子版導波管）

**物理的意味**：導波管は電磁波を閉じ込め、損失なく輸送。レーダー、衛星通信、加速器の RF 空洞（シンクロトロン放射光、LHC）、量子コンピュータの超伝導 qubit 読出（Purcell 効果の抑制）で本質的。モード制御は光学・マイクロ波工学の基本。` },

  { id: "titech-2022-phys-4", universitySlug: "titech", year: 2022, subject: "物理学", problemNumber: 4,
    title: "Compton 散乱と光子の粒子性", field: "quantum", difficulty: "standard",
    tags: ["Compton 散乱", "光子", "運動量エネルギー保存"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2022年度 物理学 問4

## 問題の設定
波長 $\\lambda$ の光子が静止電子（質量 $m_e$、電荷 $-e$）に衝突し、角度 $\\theta$ 方向に散乱される。散乱光子の波長 $\\lambda'$。

## 問われている内容
(1) 光子のエネルギーと運動量 $E = h\\nu = hc/\\lambda$、$p = h/\\lambda$ を述べよ。
(2) 相対論的エネルギー保存と運動量保存を立てよ。
(3) Compton シフト式
$$\\lambda' - \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta) = \\lambda_C(1 - \\cos\\theta)$$
を導け（$\\lambda_C = h/(m_e c) \\approx 2.43\\,\\text{pm}$：電子 Compton 波長）。
(4) 波動的古典論（Thomson 散乱）との差異：波長シフトの予言可否、および光子仮説の重要性を述べよ。`,
    solution: `## (1) 光子の性質
エネルギー $E = h\\nu$、運動量 $p = E/c = h/\\lambda$（特殊相対論、$m = 0$ 粒子 $E = pc$）。光子は質量ゼロなので $v = c$。

## (2) 保存則
エネルギー保存：$hc/\\lambda + m_e c^2 = hc/\\lambda' + \\gamma m_e c^2$（散乱後電子のエネルギー）
運動量保存（ベクトル）：$\\vec{p}_\\gamma + 0 = \\vec{p}'_\\gamma + \\vec{p}_e$

成分分解（入射光子を $x$ 方向、散乱角 $\\theta$）：
- $x$: $h/\\lambda = (h/\\lambda')\\cos\\theta + p_e\\cos\\phi$
- $y$: $0 = (h/\\lambda')\\sin\\theta - p_e\\sin\\phi$

## (3) Compton シフトの導出
運動量式から $p_e$ を消去：$p_e^2 = (h/\\lambda)^2 + (h/\\lambda')^2 - 2(h/\\lambda)(h/\\lambda')\\cos\\theta$。

エネルギー保存から $\\gamma m_e c^2 = m_e c^2 + hc(1/\\lambda - 1/\\lambda')$。
$(\\gamma m_e c^2)^2 - (p_e c)^2 = (m_e c^2)^2$ を使って $p_e$ を消去・整理：
$$\\frac{1}{\\lambda'} - \\frac{1}{\\lambda} = -\\frac{1}{\\lambda_C}(1 - \\cos\\theta)$$

ここで $\\lambda' \\approx \\lambda$ とすると $1/\\lambda - 1/\\lambda' \\approx (\\lambda' - \\lambda)/\\lambda^2$。小波長補正なので簡略化：
$$\\boxed{\\lambda' - \\lambda = \\lambda_C(1 - \\cos\\theta)}$$

## (4) Thomson 散乱との差異
**古典 Thomson（波動論）**：電磁波が電子を振動させ、電子が再放射。散乱波の**振動数不変**（弾性）。

**Compton（量子論）**：光子が粒子として衝突。エネルギー移行で**振動数減少**（$\\lambda$ 増加）。

波長シフト $\\lambda_C(1 - \\cos\\theta)$ は X 線実験で実測（Compton 1923、ノーベル賞 1927）→ 光の粒子性 decisive evidence。$\\theta = 180°$（後方散乱）で最大 $2\\lambda_C = 4.86\\,\\text{pm}$。

**応用**：
- Compton 散乱は X 線・$\\gamma$ 線診断（医療）、コンプトン散乱画像（天文）、γ 線望遠鏡（Compton Gamma-Ray Observatory）
- 逆 Compton 散乱：高エネルギー電子が光子にエネルギー与える（SPring-8 の逆コンプトン γ 線源、KEK の LCS 放射源）

**物理的意味**：Compton 散乱は光の粒子性（photon）の decisive 確証。光電効果（Einstein 1905）と並び量子論の実験的基盤。粒子描像と波動描像の両方が必要（波動粒子二重性、de Broglie 1924）。` },

  { id: "titech-2022-phys-5", universitySlug: "titech", year: 2022, subject: "物理学", problemNumber: 5,
    title: "van der Waals 気体の熱容量と自由度", field: "thermodynamics", difficulty: "advanced",
    tags: ["van der Waals", "熱容量", "内部エネルギー"],
    isFree: true,
    statement: `**対応問題**: 東京科学大学（旧 東工大）2022年度 物理学 問5

## 問題の設定
vdW 気体 $n$ モル：$(P + an^2/V^2)(V - nb) = nRT$。定積比熱 $C_V(T)$ は理想気体と同じ（$C_V$ は $V$ に依存しない）とする。

## 問われている内容
(1) vdW 気体の内部エネルギー $U(T, V)$ が、理想気体項 $U_{\\text{ideal}}(T) = \\int C_V dT$ に加えて、$V$ 依存の項 $-a n^2/V$ を持つことを示せ。
(2) $(\\partial U/\\partial V)_T$ を計算し、引力 $a$ の寄与を確認せよ。
(3) 等温過程で体積 $V_1 \\to V_2$（$V_2 > V_1$）の仕事 $W$ を求めよ（vdW）。
(4) 断熱自由膨張 $V_1 \\to V_2 = 2V_1$ での温度変化 $\\Delta T$ を $a, n, C_V, V_1$ で見積もれ（Joule 効果）。`,
    solution: `## (1) 内部エネルギー
熱力学恒等式：$(\\partial U/\\partial V)_T = T(\\partial P/\\partial T)_V - P$

vdW 方程式で $(\\partial P/\\partial T)_V = nR/(V - nb)$：
$$T(\\partial P/\\partial T)_V = nRT/(V - nb) = P + an^2/V^2$$

$$(\\partial U/\\partial V)_T = P + an^2/V^2 - P = an^2/V^2$$

積分：
$$U(T, V) = U_{\\text{ideal}}(T) - an^2/V + \\text{const}$$

## (2) $V$ 依存項の意味
$(\\partial U/\\partial V)_T = an^2/V^2 > 0$（$a > 0$）。体積増加で $U$ 増加（分子間引力のポテンシャルが弱まる）。

**物理的直感**：$a$ は引力補正。小 $V$（高密度）で分子が接近しポテンシャル深い（$U$ 低い）、大 $V$ で離れて $U$ 高い。

## (3) 等温過程の仕事
$W = \\int_{V_1}^{V_2} P\\, dV$、vdW の $P$ を代入：
$$W = \\int_{V_1}^{V_2}\\left(\\frac{nRT}{V - nb} - \\frac{an^2}{V^2}\\right)dV$$
$$= nRT\\ln\\frac{V_2 - nb}{V_1 - nb} + an^2\\left(\\frac{1}{V_2} - \\frac{1}{V_1}\\right)$$

理想気体（$a = b = 0$）より第 2 項（引力の仕事）が負で、必要仕事が大きく見える（$V_2 > V_1$、$1/V_2 < 1/V_1$）。

## (4) 断熱自由膨張
$W = 0$（体積変化で外部に仕事せず）、$Q = 0$ → $\\Delta U = 0$：
$$U(T_2, V_2) = U(T_1, V_1)$$
$$\\int C_V\\, dT - an^2/V_2 + C_1 = -an^2/V_1 + C_1 \\Rightarrow C_V(T_2 - T_1) = an^2(1/V_2 - 1/V_1)$$

$V_2 = 2V_1$：
$$\\Delta T = T_2 - T_1 = -\\frac{an^2}{C_V \\cdot 2V_1}$$

**Joule 効果**：実在気体（$a > 0$）で断熱自由膨張すると温度が**下がる**（$\\Delta T < 0$）。分子間引力に対抗して離れる仕事が内部エネルギー減少として現れる。

**物理的意味**：Joule の実験（1845）は理想気体で $\\Delta T = 0$ を予言したが、実際は微小な冷却を観測。これが実在気体の最初の定量的非理想効果。ジュール・トムソン膨張（2024 osaka、同 vdW 気体の圧力による等エンタルピー膨張）は冷却効率が高く、液化・冷却装置（LNG、He 液化、エアコン）の基礎。` },

  // ---- TOHOKU 2022 (+4) ----
  { id: "tohoku-2022-phys-2", universitySlug: "tohoku", year: 2022, subject: "物理学", problemNumber: 2,
    title: "Lorentz 力と荷電粒子運動", field: "electromagnetism", difficulty: "standard",
    tags: ["Lorentz 力", "cyclotron", "サイクロイド"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2022年度 物理学 問2

## 問題の設定
一様磁場 $\\vec{B} = B\\hat{z}$ と電場 $\\vec{E} = E\\hat{x}$ の中を、電荷 $q$（$> 0$）、質量 $m$ の粒子が運動。初期条件 $\\vec{v}(0) = 0$、$\\vec{r}(0) = 0$。

## 問われている内容
(1) 磁場のみ ($\\vec{E} = 0$、$\\vec{v}(0) = v_0\\hat{x}$) での運動方程式を解き、サイクロトロン半径 $r_c$ と振動数 $\\omega_c$ を求めよ。
(2) 磁場と電場の両方があるとき、運動方程式を書き下せ（$xy$ 面内の運動を仮定）。
(3) 座標変換 $\\vec{v}' = \\vec{v} - \\vec{v}_d$（$\\vec{v}_d = \\vec{E}\\times\\vec{B}/B^2$：ドリフト速度）で方程式が磁場のみの場合に帰着することを示せ。
(4) 粒子軌道がサイクロイド（車輪の点が描く曲線）となることを定性的に述べよ。`,
    solution: `## (1) 磁場のみのサイクロトロン運動
$m\\dot{\\vec{v}} = q\\vec{v}\\times\\vec{B}$。$\\vec{B} = B\\hat{z}$：
$$m\\dot{v_x} = qBv_y, \\quad m\\dot{v_y} = -qBv_x$$

$\\omega_c = qB/m$（サイクロトロン振動数）。解：$v_x = v_0\\cos\\omega_c t$、$v_y = -v_0\\sin\\omega_c t$（時計回り）。

サイクロトロン半径：$r_c = v_0/\\omega_c = mv_0/(qB)$

## (2) 電磁場中の運動方程式
$m\\dot{\\vec{v}} = q\\vec{E} + q\\vec{v}\\times\\vec{B}$：
$$m\\dot v_x = qE + qBv_y$$
$$m\\dot v_y = -qBv_x$$

## (3) ドリフト速度
$\\vec{v}_d = \\vec{E}\\times\\vec{B}/B^2 = E\\hat{x}\\times B\\hat{z}/B^2 = -(E/B)\\hat{y}$（$\\hat x\\times\\hat z = -\\hat y$）。

$\\vec{v}' = \\vec{v} - \\vec{v}_d$：
$$m\\dot v'_x = qE + qB(v'_y + v_{d,y}) = qE + qBv'_y - qE = qBv'_y$$
$$m\\dot v'_y = -qBv'_x$$

これは磁場のみの方程式 ✅。ドリフト速度で相対運動が消える。

## (4) サイクロイド軌道
$\\vec{v}'$ は $r_c$ の円運動（$\\omega_c$）、絶対座標では $\\vec{v}_d = -(E/B)\\hat y$ の一様並進運動。合成 → サイクロイド。

$\\vec{v}(0) = 0 \\Rightarrow \\vec{v}'(0) = -\\vec{v}_d = (E/B)\\hat y$、$|v'| = E/B$、$r_c = mE/(qB^2)$。軌道：
$$x(t) = r_c(1 - \\cos\\omega_c t), \\quad y(t) = r_c(\\omega_c t - \\sin\\omega_c t)$$

平均進行方向は $-\\hat y$（$\\vec{v}_d$ 方向）、$x$ 方向には $2r_c$ の振動。地面を転がる車輪上の点の軌道（サイクロイド）と同形。

**物理的意味**：$\\vec{E}\\times\\vec{B}$ ドリフトは磁束管閉じ込めプラズマの基本現象。電荷に依存しない（$\\vec{v}_d$ は $q$ を含まない）ので、プラズマ全体が同じ速度で流れる。重力ドリフト、曲率ドリフト、磁場勾配ドリフトと並び、トカマク炉（ITER）、磁気圏（オーロラ）、太陽風・磁気圏相互作用のキーメカニズム。` },

  { id: "tohoku-2022-phys-3", universitySlug: "tohoku", year: 2022, subject: "物理学", problemNumber: 3,
    title: "Zeeman 効果と磁気量子数", field: "quantum", difficulty: "advanced",
    tags: ["Zeeman 効果", "磁気量子数", "角運動量"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2022年度 物理学 問3

## 問題の設定
水素様原子（電子 1 個）に一様磁場 $\\vec{B} = B\\hat{z}$ を加える。電子の磁気モーメント $\\hat{\\vec{\\mu}} = -g_s\\mu_B\\hat{\\vec{S}}/\\hbar - \\mu_B\\hat{\\vec{L}}/\\hbar$（$g_s \\approx 2$、$\\mu_B$: Bohr 磁子）。

## 問われている内容
(1) 弱磁場での Zeeman ハミルトニアン $\\hat H_Z = -\\vec{\\mu}\\cdot\\vec{B}$ を明示せよ。
(2) 正常 Zeeman 効果（スピンなし、$\\hat S = 0$）：軌道磁気量子数 $m_\\ell$ による準位分裂 $\\Delta E = m_\\ell \\mu_B B$ を導け。
(3) 異常 Zeeman 効果（スピンあり、弱磁場）：全角運動量 $\\hat{\\vec{J}} = \\hat{\\vec{L}} + \\hat{\\vec{S}}$ の磁気量子数 $m_J$ と Landé $g$ 因子：
$$g_J = 1 + \\frac{J(J+1) + S(S+1) - L(L+1)}{2J(J+1)}$$
で準位分裂 $\\Delta E = g_J m_J \\mu_B B$ となることを述べよ。
(4) 強磁場（Paschen-Back 効果）の極限では $\\hat L_z, \\hat S_z$ が個別保存となり $\\Delta E = (m_L + 2 m_S)\\mu_B B$ になることを述べよ。`,
    solution: `## (1) Zeeman ハミルトニアン
$$\\hat H_Z = -\\vec{\\mu}\\cdot\\vec{B} = \\frac{\\mu_B B}{\\hbar}(\\hat L_z + 2\\hat S_z) = \\mu_B B (m_L + 2 m_S)/\\hbar \\cdot \\hbar = \\mu_B B(m_L + 2 m_S)$$

## (2) 正常 Zeeman 効果（軌道のみ）
$\\hat S = 0$：$\\hat H_Z = \\mu_B B \\hat L_z/\\hbar$、固有値 $m_\\ell\\mu_B B$。

原子準位（例：$p$ 状態 $\\ell = 1$、$m_\\ell = -1, 0, +1$）は $B \\ne 0$ で 3 重に分裂：
$$\\Delta E_{m_\\ell} = m_\\ell\\mu_B B$$

分裂幅 $\\mu_B B \\approx 5.8\\times 10^{-5}\\,\\text{eV}/\\text{T}$。

## (3) 異常 Zeeman 効果
スピン含む現実の原子。弱磁場（$\\mu_B B \\ll$ LS 結合）では $\\hat J^2, \\hat J_z$ が近似的固有。$m_J$ が良量子数：
$$\\Delta E = g_J m_J \\mu_B B$$

$g_J$ は $L, S, J$ 依存（Landé の公式）。

**例**：水素 $2P$ 状態
- $^2P_{1/2}$（$L = 1, S = 1/2, J = 1/2$）：$g_J = 2/3$
- $^2P_{3/2}$（$J = 3/2$）：$g_J = 4/3$

$s$ 状態（$L = 0$）では $g_J = 2$（スピンのみ）、$p, d$ 状態では異常値。

## (4) Paschen-Back 効果
強磁場 $\\mu_B B \\gg$ LS 結合。$\\hat L_z, \\hat S_z$ が個別に保存（LS 結合が無視できる）：
$$\\Delta E = \\mu_B B(m_L + 2 m_S)$$

5 つの準位（$m_L = -1, 0, +1$、$m_S = \\pm 1/2$）が等間隔ではなく、スピン因子 $2$ が異なる寄与。

**物理的意味**：Zeeman 効果は原子構造解析の基本手段。星のスペクトル（太陽黒点の磁場測定 Hale 1908）、NMR の化学シフト、電子スピン共鳴（ESR/EPR）、原子時計の精密周波数同定、レーザー冷却（光ポンピング）で応用。異常・正常の区別は 20 世紀初頭の原子物理学の大成果（スピン発見 1925）。` },

  { id: "tohoku-2022-phys-4", universitySlug: "tohoku", year: 2022, subject: "物理学", problemNumber: 4,
    title: "Hall 効果と半導体特性", field: "electromagnetism", difficulty: "standard",
    tags: ["Hall 効果", "キャリア濃度", "半導体"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2022年度 物理学 問4

## 問題の設定
導体板（厚さ $d$、幅 $w$）に電流 $I$ を $x$ 方向に流し、$z$ 方向に磁場 $B$ を印加する。キャリア密度 $n$、電荷 $q$（正なら正孔、負なら電子）、ドリフト速度 $v_d$。

## 問われている内容
(1) Lorentz 力 $q\\vec{v}_d\\times\\vec{B}$ によりキャリアが $y$ 方向に寄り、定常状態で $y$ 方向電場 $E_H$（Hall 電場）が発生することを説明せよ。
(2) 定常状態（力の釣り合い）から Hall 電圧 $V_H$ を求めよ。Hall 係数 $R_H = E_H d/(IB) = 1/(nq)$ を示せ。
(3) 電子キャリア（$q = -e$）と正孔キャリア（$q = +e$）で Hall 係数の符号が反転することを述べよ。
(4) Hall 効果の応用（キャリア識別、磁場センサー、量子 Hall 効果）を簡潔に述べよ。`,
    solution: `## (1) Hall 電場発生
電流 $I = nqv_d(wd)$ で $v_d = I/(nqwd)$。Lorentz 力 $q\\vec{v}_d\\times\\vec{B} = qv_d B \\cdot (\\hat x\\times\\hat z) = -qv_d B\\hat y$：

キャリアが $-\\hat y$（$q > 0$）または $+\\hat y$（$q < 0$）方向に偏り、電荷分離 → $y$ 方向電場 $E_H$ が発生。定常では $qE_H = qv_d B$（力の釣り合い）。

## (2) Hall 電圧と Hall 係数
$$E_H = v_d B = \\frac{IB}{nq w d}$$

Hall 電圧 $V_H = E_H \\cdot w = IB/(nqd)$。Hall 係数定義：
$$\\boxed{R_H = \\frac{E_H d}{IB} = \\frac{1}{nq}}$$

**用途**：Hall 電圧測定から $n, q$ 両方を特定（$|R_H|$ から $n$、符号から $q$）。

## (3) キャリア符号判定
- 電子（$q = -e < 0$）：$R_H < 0$
- 正孔（$q = +e > 0$）：$R_H > 0$

$n$ 型 vs $p$ 型半導体の識別に使う。Hall 電圧の符号を見るだけ。

## (4) 応用
- **キャリア特定**：半導体評価の必須ツール
- **磁場センサー**：自動車速度計、位置センサー、電流計（Hall 素子で非接触電流検出）
- **量子 Hall 効果**（2 次元電子系、極低温・強磁場）：Hall 抵抗が正確に量子化 $R_{xy} = h/(\\nu e^2)$（$\\nu$ 整数 or 有理数）。von Klitzing 定数 $R_K = h/e^2 = 25812.807\\,\\Omega$ は電気抵抗の標準（SI の 2019 年改定前）。分数量子 Hall は強相関電子系、任意子（Anyon）、トポロジカル物質の発見につながる

**物理的意味**：Hall 効果（1879 年 Edwin Hall）は簡単な実験で半導体のキャリア種別判定。現代物質物理で量子 Hall、異常 Hall、スピン Hall と拡張される。トポロジカル絶縁体・量子情報技術の出発点。` },

  { id: "tohoku-2022-phys-5", universitySlug: "tohoku", year: 2022, subject: "物理学", problemNumber: 5,
    title: "Boltzmann の H 定理と不可逆性", field: "statistical", difficulty: "advanced",
    tags: ["H 定理", "Boltzmann 方程式", "不可逆性"],
    isFree: true,
    statement: `**対応問題**: 東北大学 2022年度 物理学 問5

## 問題の設定
希薄気体の 1 粒子分布関数 $f(\\vec{r}, \\vec{v}, t)$（位置 $\\vec{r}$、速度 $\\vec{v}$ での密度）。Boltzmann 方程式：
$$\\frac{\\partial f}{\\partial t} + \\vec{v}\\cdot\\nabla f = \\left(\\frac{\\partial f}{\\partial t}\\right)_{\\text{coll}}$$

## 問われている内容
(1) Boltzmann の H 関数 $H(t) = \\int f\\ln f\\, d^3r d^3v$ を導入し、H 定理 $dH/dt \\le 0$ を、衝突項の性質から述べよ。
(2) $H$ が減少することは、**エントロピー** $S = -k_B H$ が増大することと等価（$dS/dt \\ge 0$）。これが熱力学第 2 法則の統計力学的基礎であることを論ぜよ。
(3) 平衡分布（Maxwell-Boltzmann）が $dH/dt = 0$（等号成立）を満たすこと、すなわち平衡が H の最小点であることを述べよ。
(4) **Loschmidt のパラドックス**：可逆な微視的方程式（Newton 力学）からどうして非可逆（$dS/dt > 0$）が出るかを簡潔に論ぜよ。`,
    solution: `## (1) H 定理
衝突項を 2 体衝突モデル（詳細釣り合いを仮定）で評価：
$$dH/dt \\propto -\\int (f'_1 f'_2 - f_1 f_2)\\ln(f'_1 f'_2/f_1 f_2)\\,d\\Omega \\le 0$$

（$x\\ln x$ の凸性、$(A - B)\\ln(A/B) \\ge 0$ from $(A/B - 1)\\ln(A/B) \\ge 0$）。等号は $f_1 f_2 = f'_1 f'_2$（衝突で分布不変 = 平衡）のとき。

$$\\boxed{dH/dt \\le 0}$$

## (2) エントロピー増大則
$S(t) = -k_B H(t) + $ const（規格化項）。H 定理 $dH/dt \\le 0 \\Rightarrow dS/dt \\ge 0$：

**熱力学第 2 法則の微視的正当化**。Clausius の「孤立系のエントロピーは増大または一定」の統計力学的理解。

## (3) 平衡分布
Maxwell-Boltzmann：$f_{\\text{MB}}(\\vec{v}) \\propto e^{-mv^2/(2k_B T)}$ は $dH/dt = 0$ を満たす（衝突不変量：エネルギー $E = mv^2/2$、運動量保存、粒子数保存の組み合わせで $f_1 f_2 = f'_1 f'_2$）。

H の最小は平衡、そこからのずれは正の $H - H_{\\text{eq}}$ として測れる。

## (4) Loschmidt のパラドックス
Newton 力学は時間反転対称：速度反転 $\\vec{v} \\to -\\vec{v}$ で軌道も反転。Boltzmann 方程式は反転に対して $H$ が**減らない**微視的軌道を含むはず。しかし H 定理は $dH/dt \\le 0$ を主張。矛盾？

**解決**：
- Boltzmann 方程式は**分子カオス**（Stosszahlansatz）を仮定：異なる粒子の速度が相関しない。これは初期条件に対する「低い確率」仮定。
- 時間反転軌道は $H$ を増やすが、そういう特殊な初期条件（位相空間で測度ゼロ）は実際には実現しない。統計的（確率的）性質として $H$ は減少。

**深い意味**：エントロピー増大は初期条件の**ありふれ方**（typicality）の問題。宇宙の低エントロピー初期条件（ビッグバン、熱力学的矢）がマクロな時間の向きを決める。

**物理的意味**：Boltzmann H 定理は統計力学の基盤。非平衡熱力学（Onsager 関係、揺らぎ散逸定理）、輸送理論（熱伝導、粘性、電気伝導）、Fokker-Planck 方程式、量子系の緩和理論すべての起点。` },

  // ---- OSAKA 2022 (+5) ----
  { id: "osaka-2022-phys-2", universitySlug: "osaka", year: 2022, subject: "物理学", problemNumber: 2,
    title: "Foucault 振り子と Coriolis 効果", field: "mechanics", difficulty: "advanced",
    tags: ["Coriolis 力", "Foucault 振り子", "回転座標系"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2022年度 物理学 問2

## 問題の設定
北緯 $\\lambda$ の地点で、天井から長い糸で振り子を吊るす（Foucault 振り子）。地球の自転角速度 $\\Omega$。

## 問われている内容
(1) 地表の非慣性系における慣性力：遠心力と Coriolis 力 $-2m\\vec{\\Omega}\\times\\vec{v}$ を書け。
(2) 水平面内の Coriolis 力成分が振り子の振動面を回転させることを示せ。
(3) 振動面の回転角速度を $\\Omega_F = \\Omega\\sin\\lambda$ として、振動面が 1 周（$2\\pi$）する時間 $T_F$ を北緯 45° で計算（$\\Omega = 2\\pi/86400\\,\\text{s}^{-1}$）。
(4) 赤道（$\\lambda = 0$）で Foucault 効果が消失する理由を述べよ。`,
    solution: `## (1) 慣性力
回転系の見かけの力：
- **遠心力** $m\\vec{\\Omega}\\times(\\vec{\\Omega}\\times\\vec{r})$
- **Coriolis 力** $-2m\\vec{\\Omega}\\times\\vec{v}$（速度依存）

地球表面では遠心力は小さい（高度 9.78 m/s² vs 重力 9.81）、Coriolis はさらに小さいが振り子の長時間運動で累積効果。

## (2) 振動面回転
地球自転軸の地表成分：$\\vec{\\Omega} = \\Omega(\\cos\\lambda\\hat x_{\\text{北}} + \\sin\\lambda\\hat z_{\\text{天頂}})$（近似：東西 $\\hat y$、北 $\\hat x$、上 $\\hat z$）。

振り子は主に水平面内振動 $\\vec{v} = v_x\\hat x + v_y\\hat y$。Coriolis 水平成分：
$$\\vec{F}_{C,\\text{水平}} = -2m\\Omega\\sin\\lambda(\\hat z\\times\\vec{v}) = -2m\\Omega_F\\hat z\\times\\vec{v}$$

$\\Omega_F = \\Omega\\sin\\lambda$。これは回転座標系で「追加の垂直軸周り回転 $\\Omega_F$」と同じ効果。

## (3) 北緯 45° での $T_F$
$\\Omega_F = (2\\pi/86400)\\sin 45° = 2\\pi/86400 \\cdot (\\sqrt{2}/2)$
$$T_F = 2\\pi/\\Omega_F = 86400 \\cdot \\sqrt{2} \\approx 122\\,\\text{h} \\approx 5.1\\,\\text{日}$$

**Paris (北緯 48°48')**：$T_F \\approx 32$ 時間。Foucault の 1851 年実験（Panthéon）での公開実験で約 32 時間で地球自転を実証。

## (4) 赤道での効果消失
$\\lambda = 0$：$\\vec{\\Omega}$ が水平（北向き）、垂直成分 $\\sin\\lambda = 0$。振動面は変化せず。

**赤道付近の現象**：
- 水平軸周りの見かけの回転 $\\Omega\\cos\\lambda$ あり（振り子の $z$ 軸に対する運動だが、実効的な振動面回転は水平成分が絡むので寄与小）

**南半球**：$\\lambda < 0$ で $\\Omega_F < 0$、反対回り。

**物理的意味**：Foucault 振り子は地球自転の**地上での直接的証明**（1851 年以前は天文観測からのみ）。Coriolis 効果は気象学（北半球の高気圧が時計回り）、海洋学（洋流の蛇行）、弾道学（長距離射撃の偏差）、極低温原子実験（回転原子波束）など応用。` },

  { id: "osaka-2022-phys-3", universitySlug: "osaka", year: 2022, subject: "物理学", problemNumber: 3,
    title: "Fermi の黄金則と遷移確率", field: "quantum", difficulty: "advanced",
    tags: ["時間依存摂動", "遷移確率", "Fermi の黄金則"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2022年度 物理学 問3

## 問題の設定
時刻 $t = 0$ に時間依存摂動 $\\hat V(t) = \\hat V_0 e^{-i\\omega t} + $ h.c. を加える。初期状態 $|i\\rangle$（エネルギー $E_i$）から終状態 $|f\\rangle$（エネルギー $E_f$）への遷移を 1 次摂動で扱う。

## 問われている内容
(1) 相互作用表示での時間発展係数 $c_f^{(1)}(t)$ を、時間依存 1 次摂動から導出せよ。
(2) 遷移確率 $P_{i \\to f}(t) = |c_f(t)|^2$ を $t$ 長大時間極限で評価し、Fermi の黄金則
$$\\Gamma_{i \\to f} = \\frac{2\\pi}{\\hbar}|\\langle f|\\hat V_0|i\\rangle|^2 \\delta(E_f - E_i - \\hbar\\omega)$$
を導け。
(3) 終状態が連続スペクトル（状態密度 $\\rho(E_f)$）の場合の全遷移率 $\\Gamma = (2\\pi/\\hbar)|V_{fi}|^2\\rho(E_f)$ を示せ。
(4) 応用例：自然放出（原子の自発的光子放出）、光電効果、散乱問題への関連を述べよ。`,
    solution: `## (1) 1 次摂動係数
相互作用表示 $|\\psi_I\\rangle = \\sum_k c_k(t)|k\\rangle$。Schrödinger 方程式を 1 次で解いて：
$$c_f^{(1)}(t) = \\frac{1}{i\\hbar}\\int_0^t\\langle f|\\hat V(t')|i\\rangle e^{i(E_f - E_i)t'/\\hbar}\\,dt'$$

$\\hat V(t) = \\hat V_0 e^{-i\\omega t}$ の主要項：
$$c_f^{(1)}(t) = \\frac{V_{fi}}{i\\hbar}\\int_0^t e^{i(\\omega_{fi} - \\omega)t'}dt' = \\frac{V_{fi}}{i\\hbar}\\frac{e^{i(\\omega_{fi}-\\omega)t} - 1}{i(\\omega_{fi}-\\omega)}$$

$\\omega_{fi} = (E_f - E_i)/\\hbar$、$V_{fi} = \\langle f|\\hat V_0|i\\rangle$

## (2) 遷移確率と Fermi の黄金則
$|c_f|^2 = |V_{fi}|^2 \\cdot \\frac{4\\sin^2((\\omega_{fi} - \\omega)t/2)}{\\hbar^2(\\omega_{fi} - \\omega)^2}$

長時間極限：$\\sin^2(xt/2)/x^2 \\to (\\pi t/2)\\delta(x)$（$t \\to \\infty$、$x = \\omega_{fi} - \\omega$）：
$$|c_f|^2 \\to \\frac{2\\pi t}{\\hbar^2}|V_{fi}|^2\\delta(\\omega_{fi} - \\omega)$$

遷移率 $\\Gamma = d|c_f|^2/dt$：
$$\\boxed{\\Gamma_{i\\to f} = \\frac{2\\pi}{\\hbar}|V_{fi}|^2 \\delta(E_f - E_i - \\hbar\\omega)}$$

デルタ関数は**エネルギー保存**を意味（摂動の供給/吸収エネルギー $\\hbar\\omega$）。

## (3) 連続スペクトル
$\\delta$ 関数を状態密度で積分：
$$\\Gamma = \\frac{2\\pi}{\\hbar}|V_{fi}|^2\\rho(E_f = E_i + \\hbar\\omega)$$

## (4) 応用例
- **自然放出**：原子の励起状態 $|e\\rangle \\to |g\\rangle$ + 光子。終状態は真空電磁場モード（連続）。$\\rho \\propto \\omega^3$ で $\\Gamma \\propto \\omega^3 |d|^2$（Einstein $A$ 係数、Planck 放射の基礎）。
- **光電効果**：束縛電子 $\\to$ 自由電子。終状態 $\\rho \\propto \\sqrt{E_f}$、$\\Gamma$ は光子エネルギー閾値依存。
- **散乱**：初期「平面波」から最終「散乱波」の遷移、Born 近似の基礎。

**物理的意味**：Fermi の黄金則は量子多体系・散乱・輻射の遷移確率計算の標準公式。原子核反応（核崩壊率）、レーザー理論、輸送係数計算、凝縮系物理の線形応答（Kubo 公式の原型）、量子光学の $A, B$ 係数、すべてがこの公式から導出される。` },

  { id: "osaka-2022-phys-4", universitySlug: "osaka", year: 2022, subject: "物理学", problemNumber: 4,
    title: "Clausius の不等式と循環過程", field: "thermodynamics", difficulty: "standard",
    tags: ["Clausius の不等式", "熱効率", "可逆性"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2022年度 物理学 問4

## 問題の設定
熱機関が温度 $T_H, T_L$ の熱源の間で循環動作。1 サイクルあたり高温源から $Q_H$ 吸収、低温源へ $Q_L$ 放出、外部へ仕事 $W$ を取り出す。

## 問われている内容
(1) Clausius の不等式 $\\oint dQ/T \\le 0$（可逆で等号）の意味を述べよ。
(2) Carnot サイクル（可逆）での効率 $\\eta_{\\text{Carnot}} = 1 - T_L/T_H$ を導け。
(3) 現実の熱機関では $\\eta < \\eta_{\\text{Carnot}}$ となる不可逆性の起源（摩擦、有限温度差熱伝導など）を挙げよ。
(4) 冷凍機（熱ポンプを逆運転）の成績係数 $\\text{COP} = Q_L/W$ を Carnot 冷凍の場合に求めよ。`,
    solution: `## (1) Clausius の不等式
$$\\oint \\frac{dQ}{T} \\le 0$$

任意の循環過程で $dQ/T$ の周積分は非正。可逆で等号：$\\oint dQ/T_{\\text{rev}} = 0$（エントロピーは状態量）。

不可逆過程では $\\oint dQ/T < 0$：熱機関は熱源温度で $dQ$ を吸収・放出するが、実効的 $dQ/T$ の和が負（熱力学第 2 法則）。

## (2) Carnot 効率
可逆 Carnot（等温吸熱 $T_H$ + 断熱 + 等温放熱 $T_L$ + 断熱）：
$$\\oint dQ/T = Q_H/T_H - Q_L/T_L = 0 \\Rightarrow Q_L/Q_H = T_L/T_H$$

効率 $\\eta = W/Q_H = 1 - Q_L/Q_H = 1 - T_L/T_H$

$$\\boxed{\\eta_{\\text{Carnot}} = 1 - T_L/T_H}$$

## (3) 不可逆性の起源
実機関で $\\eta < \\eta_{\\text{Carnot}}$ の理由：
- **摩擦**：機械的エネルギー散逸
- **有限温度差熱伝導**：熱源と作業物質の温度差で熱流が生じる（Newton の冷却、熱流 $\\propto \\Delta T$）→ エントロピー増大
- **乱流・混合**：流体工程の非平衡
- **不完全燃焼**：化学反応の非理想性
- **放射損失**：外部への熱放射

実用機関の効率：火力発電 $\\sim 40\\%$（Carnot $T_H \\sim 800\\,\\text{K}$、$T_L \\sim 300\\,\\text{K}$ で 62.5%）、ガソリンエンジン $\\sim 25\\%$。

## (4) Carnot 冷凍機
エネルギー保存 $Q_H = Q_L + W$、可逆 $Q_L/Q_H = T_L/T_H$。
$$\\text{COP}_{\\text{cool}} = \\frac{Q_L}{W} = \\frac{Q_L}{Q_H - Q_L} = \\frac{T_L}{T_H - T_L}$$

**数値例**：室温 $T_H = 300\\,\\text{K}$、冷却目標 $T_L = 273\\,\\text{K}$：$\\text{COP} = 273/27 \\approx 10$（$1$ W 電力で $10$ W の熱を汲み出す）。実機はその 1/3〜1/2。

**物理的意味**：Clausius は第 2 法則の量的表現。エネルギー変換の絶対的効率限界、エントロピー概念の起源。現代では非平衡熱力学・生体エネルギー変換・情報熱力学（Landauer の原理）まで拡張。` },

  { id: "osaka-2022-math-1", universitySlug: "osaka", year: 2022, subject: "数学", problemNumber: 1,
    title: "Green 関数の基礎", field: "math", difficulty: "advanced",
    tags: ["Green 関数", "境界値問題", "応答関数"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2022年度 数学 問1

## 問われている内容
線形微分演算子 $\\hat L$ に対する Green 関数 $G(x, x')$ は $\\hat L G(x, x') = \\delta(x - x')$ で定義される。

(1) 1 次元調和振動子 $\\hat L = d^2/dx^2 + k^2$（境界 $x = 0, L$ で $G = 0$）の Green 関数を固有関数展開 $G(x, x') = \\sum_n \\phi_n(x)\\phi_n(x')/(\\lambda_n)$ で構成せよ（$\\lambda_n$：固有値）。
(2) 任意の非同次方程式 $\\hat L u = f$ の解が $u(x) = \\int G(x, x') f(x')\\, dx'$ で書けることを示せ。
(3) 物理的解釈：$G$ は点源に対する応答（インパルス応答、伝達関数）であることを述べよ。
(4) 応用：電磁気学の Coulomb ポテンシャル $G \\propto 1/|\\vec{r} - \\vec{r}'|$ が Laplace 演算子 $\\nabla^2$ の Green 関数となる例。`,
    solution: `## (1) 固有関数展開
$\\hat L\\phi_n = \\lambda_n\\phi_n$（Sturm-Liouville 問題、$\\phi_n$ が正規直交完備系）。
形式的に $\\hat L G = \\delta(x-x')$ で、$G = \\sum c_n(x')\\phi_n(x)$ と展開：
$$\\sum c_n\\lambda_n\\phi_n(x) = \\delta(x-x')$$

両辺に $\\phi_m$ を掛けて $x$ 積分：$c_m\\lambda_m = \\phi_m(x')$。
$$G(x, x') = \\sum_n \\frac{\\phi_n(x)\\phi_n(x')}{\\lambda_n}$$

**具体例**（$\\hat L = -d^2/dx^2$、$[0, L]$ 境界 0）：$\\phi_n = \\sqrt{2/L}\\sin(n\\pi x/L)$、$\\lambda_n = (n\\pi/L)^2$：
$$G(x, x') = \\frac{2}{L}\\sum_{n=1}^\\infty \\frac{\\sin(n\\pi x/L)\\sin(n\\pi x'/L)}{(n\\pi/L)^2}$$

## (2) 非同次方程式の解
$u(x) = \\int G(x, x') f(x')\\, dx'$。$\\hat L$ を作用：
$$\\hat L u = \\int [\\hat L G(x, x')] f(x')\\, dx' = \\int \\delta(x - x') f(x')\\, dx' = f(x)$$

境界条件は $G$ が満たす → $u$ も自動的に満たす。

## (3) 物理的解釈
- **インパルス応答**：$\\delta$-関数的点源に対する系の応答 $G$ を知れば、任意入力 $f$ は $\\delta$ の重ね合わせとして応答 $u$ を得る。
- **伝達関数**：周波数領域で $\\hat L \\to i\\omega$ 置換、Green 関数の Fourier 変換が伝達関数。
- **因果性**：時間領域 Green 関数は遅延 Green ($G(t) = 0$ for $t < 0$) が因果的応答を表す。

## (4) Coulomb ポテンシャル
$\\nabla^2\\phi = -\\rho/\\varepsilon_0$（Poisson 方程式）。Green 関数 $\\nabla^2 G = -\\delta^3(\\vec{r} - \\vec{r}')$：
$$G(\\vec{r}, \\vec{r}') = \\frac{1}{4\\pi|\\vec{r} - \\vec{r}'|}$$

解：
$$\\phi(\\vec{r}) = \\frac{1}{\\varepsilon_0}\\int\\frac{\\rho(\\vec{r}')}{4\\pi|\\vec{r} - \\vec{r}'|}d^3r'$$

点電荷 $\\rho = q\\delta^3(\\vec{r})$：$\\phi = q/(4\\pi\\varepsilon_0 r)$（Coulomb ポテンシャル）。

**物理的意味**：Green 関数は線形微分方程式の標準解法。電磁気学（Jackson の教科書）、量子力学（散乱 Green 関数、Feynman 伝播関数）、統計力学（相関関数）、量子場理論（伝播子 propagator）、弾性体・流体（Oseen テンソル）など幅広く出現。Green 関数の解析構造は物理的振る舞い（共鳴、因果律、分散関係）を反映。` },

  { id: "osaka-2022-math-2", universitySlug: "osaka", year: 2022, subject: "数学", problemNumber: 2,
    title: "テンソル解析と共変微分", field: "math", difficulty: "advanced",
    tags: ["テンソル", "共変微分", "Christoffel 記号"],
    isFree: true,
    statement: `**対応問題**: 大阪大学 2022年度 数学 問2

## 問われている内容
一般座標 $\\{x^\\mu\\}$（Einstein 記法：上付き添字は反変、下付きは共変）、計量 $g_{\\mu\\nu}$ が与えられる時空を考える。

(1) ベクトルの反変成分 $V^\\mu$ と共変成分 $V_\\mu = g_{\\mu\\nu}V^\\nu$ の関係を述べよ。
(2) 座標変換 $x^\\mu \\to x'^\\mu$ でベクトル $V^\\mu$ がどう変換するか（反変性）を示せ。
(3) Christoffel 記号 $\\Gamma^\\lambda_{\\mu\\nu} = (1/2)g^{\\lambda\\rho}(\\partial_\\mu g_{\\rho\\nu} + \\partial_\\nu g_{\\rho\\mu} - \\partial_\\rho g_{\\mu\\nu})$ を用いて、共変微分
$$\\nabla_\\mu V^\\nu = \\partial_\\mu V^\\nu + \\Gamma^\\nu_{\\mu\\lambda}V^\\lambda$$
を定義。これがテンソル（座標変換則を守る）となる理由を述べよ。
(4) 一般相対論での測地線方程式 $d^2x^\\mu/d\\tau^2 + \\Gamma^\\mu_{\\nu\\lambda}(dx^\\nu/d\\tau)(dx^\\lambda/d\\tau) = 0$ の物理的意味を述べよ。`,
    solution: `## (1) 反変と共変
$V^\\mu$ は座標基底 $\\vec{e}_\\mu = \\partial/\\partial x^\\mu$ に対する係数：$\\vec{V} = V^\\mu\\vec{e}_\\mu$。
$V_\\mu$ は双対基底 $\\vec{e}^\\mu = dx^\\mu$ に対する係数。
双対関係：$\\vec{e}^\\mu(\\vec{e}_\\nu) = \\delta^\\mu_\\nu$。

内積： $V\\cdot W = g_{\\mu\\nu}V^\\mu W^\\nu = V_\\mu W^\\mu$

$g_{\\mu\\nu}$ は添字上げ下げ：$V_\\mu = g_{\\mu\\nu}V^\\nu$、$V^\\mu = g^{\\mu\\nu}V_\\nu$（$g^{\\mu\\nu}$ は $g_{\\mu\\nu}$ の逆）。

## (2) 変換則
座標変換 $x'^\\mu = x'^\\mu(x)$。反変ベクトル：
$$V'^\\mu = \\frac{\\partial x'^\\mu}{\\partial x^\\nu}V^\\nu$$

（チェイン則で成分変換）。共変ベクトル：
$$V'_\\mu = \\frac{\\partial x^\\nu}{\\partial x'^\\mu}V_\\nu$$

逆 Jacobian。

## (3) 共変微分
単に $\\partial_\\mu V^\\nu$ は座標変換でテンソルにならない（基底 $\\vec{e}_\\mu$ が座標依存するため追加項が発生）。Christoffel 項がその補正：
$$\\nabla_\\mu V^\\nu = \\partial_\\mu V^\\nu + \\Gamma^\\nu_{\\mu\\lambda}V^\\lambda$$

変換則を確認すると、$\\partial_\\mu V^\\nu$ の非テンソル項と $\\Gamma$ の非テンソル項が相殺、$\\nabla_\\mu V^\\nu$ は $(1, 1)$ テンソルとして変換。

**幾何学的意味**：$\\nabla_\\mu V^\\nu$ は「ベクトル場 $V^\\nu$ の $x^\\mu$ 方向への**共変的変化率**」。平坦空間では $\\Gamma = 0$、通常微分に戻る。

## (4) 測地線方程式
**自由落下（重力のみ）粒子の軌道**：
$$\\frac{d^2x^\\mu}{d\\tau^2} + \\Gamma^\\mu_{\\nu\\lambda}\\frac{dx^\\nu}{d\\tau}\\frac{dx^\\lambda}{d\\tau} = 0$$

$\\tau$：固有時。第 2 項は「曲がった時空」でベクトルが平行移動する際の補正で、Newton 重力の役割を担う。

**応用**：
- 地球周回衛星：測地線 → GR 補正が GPS 精度に必須
- 水星の近日点移動：Newton では再現不可、GR で $43''$/世紀の補正（Einstein 1915）
- ブラックホール近傍の軌道：shadow, photon sphere, ISCO（EHT 観測 2019）

**物理的意味**：テンソル解析は一般相対論、連続体力学、弾性体、流体（応力テンソル）、古典場理論の必須言語。Einstein 場方程式 $G_{\\mu\\nu} = 8\\pi G T_{\\mu\\nu}/c^4$ はテンソル方程式で、どの座標系でも同じ形。現代物理の幾何学化の基礎。` },

  // ---- NAGOYA 2022 (+2) ----
  { id: "nagoya-2022-phys-3", universitySlug: "nagoya", year: 2022, subject: "物理学", problemNumber: 3,
    title: "交流電源と整流回路", field: "electromagnetism", difficulty: "basic",
    tags: ["整流", "ダイオード", "平滑コンデンサ"],
    isFree: true,
    statement: `**対応問題**: 名古屋大学 2022年度 物理学 問3

## 問題の設定
正弦波交流電源 $V(t) = V_0\\sin\\omega t$（振幅 $V_0$）を**半波整流**（理想ダイオード 1 個、負の半周期をカット）・**全波整流**（ブリッジ回路、絶対値）する。

## 問われている内容
(1) 半波整流後の電圧の時間平均 $\\bar V_{\\text{half}}$ を求めよ。
(2) 全波整流後の電圧の時間平均 $\\bar V_{\\text{full}}$ を求めよ。
(3) 出力側に平滑コンデンサ $C$ を並列に入れ、負荷抵抗 $R$ につなぐ場合、出力電圧リップル（変動幅）が $C, R, \\omega$ に依存することを定性的に述べよ。
(4) 家庭用 AC100V を DC 化する電源回路の概略（変圧器 + ブリッジ + 平滑コンデンサ + レギュレータ）を述べよ。`,
    solution: `## (1) 半波整流の平均
正の半周期 $V = V_0\\sin\\omega t$、負の半周期 $V = 0$。周期 $T = 2\\pi/\\omega$：
$$\\bar V_{\\text{half}} = \\frac{1}{T}\\int_0^{T/2}V_0\\sin\\omega t\\, dt = \\frac{V_0}{T}\\cdot\\frac{2}{\\omega} = \\frac{V_0}{\\pi}$$

## (2) 全波整流の平均
周期 $T/2$ ごとに同じ波形 $|V_0\\sin\\omega t|$：
$$\\bar V_{\\text{full}} = \\frac{1}{T/2}\\int_0^{T/2}V_0\\sin\\omega t\\, dt = \\frac{2V_0}{\\pi}$$

全波の方が半波の 2 倍（同じピーク時効率がいい）。

## (3) 平滑コンデンサとリップル
コンデンサ時定数 $\\tau = RC$。ダイオード導通期間でコンデンサ充電（$V_C \\to V_0$）、非導通期間で放電（指数減衰）。

リップル電圧振幅：$\\Delta V \\approx V_0/(RC\\omega_{\\text{ripple}})$（全波なら $\\omega_{\\text{ripple}} = 2\\omega$）。

**設計指針**：
- $RC\\omega \\gg 1$ → リップル小、ほぼ DC
- 負荷電流小 or $C$ 大 → リップル減

数値例：$R = 100\\,\\Omega$、$C = 1000\\,\\mu\\text{F}$、$\\omega = 2\\pi\\cdot 60$、$\\omega_{\\text{ripple}} = 2\\omega$：$\\Delta V/V_0 \\approx 1/(100\\cdot 10^{-3}\\cdot 754) \\approx 1\\%$。

## (4) 家庭用 AC → DC 変換
1. **変圧器**：AC 100V → AC 10V（例）に降圧
2. **ブリッジ整流**：4 ダイオードで全波整流 → 脈流 DC
3. **平滑コンデンサ**：大容量 C で脈流を平滑化
4. **レギュレータ**（3 端子 IC、例 7805）：12V → 5V 定電圧化、リップル除去

**応用**：PC 電源（今はスイッチング電源で高効率）、家電 AC アダプタ、LED 点灯回路、携帯充電器。すべての電子機器の入り口。

**物理的意味**：ダイオードの非対称性（P-N 接合の一方向性）が整流の本質。pn 接合での内蔵電位・少数キャリア拡散は半導体物理の中心テーマ。` },

  { id: "nagoya-2022-phys-4", universitySlug: "nagoya", year: 2022, subject: "物理学", problemNumber: 4,
    title: "弦の波の反射（自由端・固定端）", field: "mechanics", difficulty: "basic",
    tags: ["波の反射", "固定端", "自由端"],
    isFree: true,
    statement: `**対応問題**: 名古屋大学 2022年度 物理学 問4

## 問題の設定
張力 $T$、線密度 $\\rho$ の弦を伝わる横波（速度 $v = \\sqrt{T/\\rho}$）が、端点で反射される。

## 問われている内容
(1) 固定端（端が固定）での反射：入射波と反射波の位相関係を述べ、定常波の節ができる理由を説明せよ。
(2) 自由端（端が自由移動可）での反射：位相関係と腹ができる理由を述べよ。
(3) 長さ $L$ の両端固定弦の固有振動数 $f_n = nv/(2L)$（$n = 1, 2, \\ldots$）を導け。
(4) 片端固定・片端自由（開管楽器の類似）の固有振動数を求め、両端固定と比較せよ。`,
    solution: `## (1) 固定端反射
固定端：変位 $y = 0$ が常に成立。入射波 $y_i = A\\sin(kx - \\omega t)$、反射波 $y_r = A'\\sin(kx + \\omega t + \\phi)$。

$x = 0$ で $y_i + y_r = 0$ 常時 → $A' = A$、$\\phi = \\pi$（**位相 $\\pi$ 反転**）。

定常波：$y = 2A\\sin(kx)\\cos(\\omega t)$。節 $\\sin(kx) = 0 \\Rightarrow kx = n\\pi \\Rightarrow x = n\\lambda/2$（間隔 $\\lambda/2$）。

## (2) 自由端反射
自由端：$\\partial y/\\partial x = 0$（張力 $y$-成分なしで動ける）。位相は**不反転**（$\\phi = 0$）。

定常波：$y = 2A\\cos(kx)\\cos(\\omega t)$。腹（最大振幅）$\\cos(kx) = \\pm 1 \\Rightarrow x = n\\lambda/2$。

## (3) 両端固定の固有振動数
両端で節。長さ $L$ に $\\lambda_n/2$ の整数個が収まる：$L = n\\lambda_n/2 \\Rightarrow \\lambda_n = 2L/n$。

振動数：
$$\\boxed{f_n = v/\\lambda_n = \\frac{nv}{2L}}$$

$n = 1$ 基本振動、$n = 2, 3, \\ldots$ 倍音（全倍音、弦楽器の音色を決める）。

## (4) 片端固定・片端自由
固定端で節、自由端で腹。$L = (2m - 1)\\lambda/4$（奇数 $\\times \\lambda/4$）：
$$f_m = \\frac{(2m-1)v}{4L}$$

$m = 1, 2, \\ldots$：$f_1, 3f_1, 5f_1, \\ldots$（**奇数倍音のみ**）

**両端固定との差**：両端固定は全倍音（$f_1, 2f_1, 3f_1, \\ldots$）、片端自由は奇数倍音のみ。クラリネット（片端閉、片端開）は奇数倍音中心で特徴的な音色、フルート（両端開、両端腹）は全倍音。

**物理的意味**：境界条件が固有モードを決める原理は量子力学（無限井戸 $\\to$ 両端固定、境界で $\\psi = 0$）、導波管（電磁波）、光ファイバー、結晶中のフォノン、物性物理の Bloch 定理と同型の構造。` },

  // ---- KYUSHU 2022 (+2) ----
  { id: "kyushu-2022-phys-3", universitySlug: "kyushu", year: 2022, subject: "物理学", problemNumber: 3,
    title: "投射運動の軌跡", field: "mechanics", difficulty: "basic",
    tags: ["投射運動", "放物線", "最大射程"],
    isFree: true,
    statement: `**対応問題**: 九州大学 2022年度 物理学 問3

## 問題の設定
地表から初速 $v_0$、仰角 $\\theta$ で物体を投射する。重力加速度 $g$、空気抵抗無視。

## 問われている内容
(1) 時刻 $t$ での位置 $(x(t), y(t))$ を求めよ。
(2) 軌跡 $y(x)$ が放物線となることを示せ。
(3) 最大到達高 $h_{\\max}$ と水平射程 $R$ を $v_0, \\theta, g$ で表せ。
(4) $R$ を最大にする仰角 $\\theta^*$ を求めよ。`,
    solution: `## (1) 位置
初速成分：$v_{0x} = v_0\\cos\\theta$、$v_{0y} = v_0\\sin\\theta$。加速度：$a_x = 0$、$a_y = -g$。

$$x(t) = v_0\\cos\\theta\\cdot t, \\quad y(t) = v_0\\sin\\theta\\cdot t - \\tfrac{1}{2}g t^2$$

## (2) 軌跡（放物線）
$t = x/(v_0\\cos\\theta)$ を $y$ に代入：
$$y = x\\tan\\theta - \\frac{g x^2}{2 v_0^2\\cos^2\\theta}$$

下向きに開いた放物線。

## (3) 最大高と射程
**最大高**：$dy/dt = 0 \\Rightarrow t_{\\text{peak}} = v_0\\sin\\theta/g$：
$$h_{\\max} = v_0\\sin\\theta\\cdot t_{\\text{peak}} - (1/2)g t_{\\text{peak}}^2 = \\frac{v_0^2\\sin^2\\theta}{2g}$$

**射程**：$y = 0$ で $t = 0$（初期）または $t = 2v_0\\sin\\theta/g$（着地）：
$$R = v_0\\cos\\theta\\cdot\\frac{2v_0\\sin\\theta}{g} = \\frac{v_0^2\\sin(2\\theta)}{g}$$

## (4) 最大射程の仰角
$R \\propto \\sin(2\\theta)$ は $2\\theta = \\pi/2$ で最大：
$$\\theta^* = 45°, \\quad R_{\\max} = v_0^2/g$$

**物理的意味**：理想条件（空気抵抗無視、地表平坦、一様重力）の投射運動。実際の弾道：
- **空気抵抗**：最適仰角が 45° より小（野球の打球で $\\sim 35°$、ゴルフの飛距離で $\\sim 15°$）
- **地球曲率**：大射程（砲撃・ミサイル）で考慮必要
- **Coriolis**：超長距離射撃

スポーツ（砲丸投げ 41°、円盤投げ 38°）、弾道学、ロケット軌道の入門。` },

  { id: "kyushu-2022-phys-4", universitySlug: "kyushu", year: 2022, subject: "物理学", problemNumber: 4,
    title: "抵抗の合成と Joule 熱", field: "electromagnetism", difficulty: "basic",
    tags: ["抵抗合成", "Joule 熱", "電力"], isFree: true,
    statement: `**対応問題**: 九州大学 2022年度 物理学 問4

## 問題の設定
抵抗 $R_1, R_2$（値は後述）を (a) 直列、(b) 並列 に接続し、電圧 $V$ を印加する。

## 問われている内容
(1) (a) 直列合成抵抗 $R_{\\text{ser}} = R_1 + R_2$、(b) 並列合成抵抗 $R_{\\text{par}} = R_1 R_2/(R_1 + R_2)$ を導け。
(2) 両方の場合で、全消費電力 $P = V^2/R$ を計算せよ。同じ $V$ で直列と並列で消費電力がどう違うか。
(3) 各抵抗で発生する Joule 熱 $Q_i = I_i^2 R_i \\cdot t$ を比較せよ（直列・並列それぞれ）。
(4) 家庭の電気配線は基本的に並列（各家電が独立に動作）な理由を述べよ。`,
    solution: `## (1) 合成抵抗
**直列**：同じ電流 $I$ が両方を流れ、電圧分圧 $V = IR_1 + IR_2 = I(R_1 + R_2)$：$R_{\\text{ser}} = R_1 + R_2$

**並列**：同じ電圧 $V$ が両方に印加、電流分流 $I = V/R_1 + V/R_2 = V(1/R_1 + 1/R_2)$：
$$1/R_{\\text{par}} = 1/R_1 + 1/R_2 \\Rightarrow R_{\\text{par}} = R_1 R_2/(R_1 + R_2)$$

## (2) 全消費電力
**直列**：$P_{\\text{ser}} = V^2/(R_1 + R_2)$
**並列**：$P_{\\text{par}} = V^2(1/R_1 + 1/R_2) = V^2(R_1 + R_2)/(R_1 R_2)$

同じ $V$ で並列の方が大きい（$R_{\\text{par}} < R_{\\text{ser}}$）。

## (3) 各抵抗の Joule 熱
**直列**（同じ電流 $I = V/(R_1 + R_2)$）：$Q_i = I^2 R_i t$、$Q_1/Q_2 = R_1/R_2$ → 大きい抵抗で熱多い。

**並列**（同じ電圧 $V$）：$Q_i = V^2/R_i \\cdot t$、$Q_1/Q_2 = R_2/R_1$ → 小さい抵抗で熱多い（電流大）。

## (4) 家庭配線が並列の理由
- 各家電が独立して動作：1 台電源 OFF でも他は影響なし
- 各家電に設計電圧（100V）が常に加わる（直列だと合計電圧が分圧される）
- 1 台故障（断線）しても他は動く（直列だと全停）

ただし電流保護（ブレーカー）が必要：並列は全体電流が各家電の和 → 過負荷防止必要。

**物理的意味**：抵抗合成は回路解析の基本。実際の回路では熱設計（過熱防止）・分圧分流設計（分圧器、電流検出）・信号調整（LPF・HPF・RLC）が実用化要件。Joule 熱は Ohm の仕事 $P = VI = I^2 R = V^2/R$ として電気-熱エネルギー変換の基本。` },

  // ---- HOKKAIDO 2022 (+2) ----
  { id: "hokkaido-2022-phys-3", universitySlug: "hokkaido", year: 2022, subject: "物理学", problemNumber: 3,
    title: "クーロン則と電場", field: "electromagnetism", difficulty: "basic",
    tags: ["クーロン則", "電場", "重ね合わせ"],
    isFree: true,
    statement: `**対応問題**: 北海道大学 2022年度 物理学 問3

## 問題の設定
真空中の点電荷間のクーロン力、および電場 $\\vec{E}$ の概念。真空の誘電率 $\\varepsilon_0$、$k = 1/(4\\pi\\varepsilon_0)$。

## 問われている内容
(1) 2 電荷 $q_1, q_2$ が距離 $r$ 離れて受ける力の大きさと向きを書け。
(2) 電場 $\\vec{E}(\\vec{r}) = \\vec{F}/q$（試験電荷 $q$ への力から定義）を、点電荷 $Q$ が原点にあるときの一般式で与えよ。
(3) 重ね合わせの原理：電荷分布 $\\{q_i\\}$ の作る電場 $\\vec{E} = \\sum\\vec{E}_i$ を使い、2 電荷系の電場を計算する例を示せ（$+q$ を $+d\\hat x$、$-q$ を $-d\\hat x$ に配置、$y$ 軸上の点での電場）。
(4) クーロン則と Newton 万有引力の類似・相違を述べよ。`,
    solution: `## (1) クーロン力
$$F = k\\frac{|q_1 q_2|}{r^2}$$

**向き**：
- 同符号 ($q_1 q_2 > 0$)：反発（互いに離れる方向）
- 異符号：引力

ベクトル表記：$\\vec{F}_{12} = k q_1 q_2 (\\vec{r}_1 - \\vec{r}_2)/|\\vec{r}_1 - \\vec{r}_2|^3$

## (2) 電場
原点点電荷 $Q$ が距離 $r$ で作る電場：
$$\\vec{E}(\\vec{r}) = k\\frac{Q}{r^2}\\hat r = \\frac{Q}{4\\pi\\varepsilon_0 r^2}\\hat r$$

$Q > 0$：外向き、$Q < 0$：内向き。

## (3) 2 電荷系の重ね合わせ
$(+q)$ at $(+d, 0)$、$(-q)$ at $(-d, 0)$。$y$ 軸上 $(0, y)$ での電場：

各電荷からの距離 $r = \\sqrt{d^2 + y^2}$。$+q$ からの電場は $(0, y)$ から遠ざかる向き、$-q$ からは向かう向き。

対称性から $y$ 成分は打ち消し、$x$ 成分のみ残る。それぞれの電場の $x$ 成分：
$$E_x^{(+q)} = -k q \\cdot d/r^3, \\quad E_x^{(-q)} = -k q \\cdot d/r^3$$
（両方 $-\\hat x$ 方向）

合計：$E_x = -2kqd/r^3 = -2kqd/(d^2 + y^2)^{3/2}$

遠方 $y \\gg d$：$E_x \\approx -2kqd/y^3$（双極子的 $1/r^3$ 減衰、既出 tsukuba 2024）。

## (4) クーロン則 vs Newton 重力
| | クーロン | Newton 重力 |
|---|---|---|
| 源 | 電荷 $q$ | 質量 $m$ |
| 力 | $\\propto q_1 q_2/r^2$ | $\\propto m_1 m_2/r^2$ |
| 符号 | $\\pm$ | 常に正 |
| 相互作用 | 引力・斥力 | 引力のみ |
| 遮蔽 | 可能（導体） | ほぼ不可能 |
| 強さ | 電子-陽子：$\\sim 10^{39}$ 倍 | 弱い |

**物理的意味**：クーロン則は電磁気学の出発点（1785 Coulomb、ねじれ秤実験）。Gauss の法則へ一般化、$1/r^2$ 法則は空間次元 3 の帰結（Green 関数の構造）。Newton 重力との類似性が統一場理論の夢を駆動（Einstein 以降）、しかし電磁力はゲージ場、重力は時空幾何学と根本的に異なる。` },

  { id: "hokkaido-2022-phys-4", universitySlug: "hokkaido", year: 2022, subject: "物理学", problemNumber: 4,
    title: "Bohr の水素原子モデル", field: "quantum", difficulty: "basic",
    tags: ["Bohr モデル", "水素原子", "量子化条件"],
    isFree: true,
    statement: `**対応問題**: 北海道大学 2022年度 物理学 問4

## 問題の設定
Bohr の水素原子モデル：電子（質量 $m_e$、電荷 $-e$）が陽子まわりの円軌道を描く。軌道角運動量 $L = m_e v r = n\\hbar$（$n = 1, 2, \\ldots$）の量子化。

## 問われている内容
(1) Coulomb 力 = 向心力 の式とセットで Bohr の量子化条件から、軌道半径 $r_n$ を $n$ の関数として求めよ。$n = 1$ の値（Bohr 半径 $a_0$）を示せ。
(2) 全エネルギー $E_n = -ke^2/(2r_n)$ を導き、基底状態 $E_1$ を計算せよ（$-13.6\\,\\text{eV}$）。
(3) Bohr の振動数条件 $h\\nu = E_n - E_m$ から Lyman 系列（$m \\to n = 1$、紫外）、Balmer 系列（$m \\to 2$、可視）の波長を与えよ。
(4) Bohr モデルの限界と、Schrödinger 方程式の必要性を簡潔に述べよ。`,
    solution: `## (1) 軌道半径
Coulomb 引力 = 向心力：$ke^2/r^2 = m_e v^2/r \\Rightarrow v^2 = ke^2/(m_e r)$。

角運動量量子化：$m_e v r = n\\hbar \\Rightarrow v = n\\hbar/(m_e r)$。

2 式から $v$ を消去：$(n\\hbar)^2/(m_e^2 r^2) = ke^2/(m_e r)$：
$$r_n = \\frac{n^2\\hbar^2}{m_e k e^2} = n^2 a_0$$

$a_0 = \\hbar^2/(m_e ke^2) \\approx 5.29\\times 10^{-11}\\,\\text{m} \\approx 0.53\\,\\text{Å}$（Bohr 半径）

## (2) エネルギー準位
$E_n = K + U = (1/2)m_e v^2 - ke^2/r_n$。$v^2 = ke^2/(m_e r_n)$：
$$E_n = \\frac{ke^2}{2r_n} - \\frac{ke^2}{r_n} = -\\frac{ke^2}{2r_n} = -\\frac{m_e k^2 e^4}{2\\hbar^2 n^2}$$

$n = 1$：$E_1 = -m_e k^2 e^4/(2\\hbar^2) \\approx -13.6\\,\\text{eV}$（Rydberg エネルギー）

$$E_n = -13.6/n^2\\,\\text{eV}$$

## (3) Lyman と Balmer
振動数条件 $h\\nu = E_m - E_n$ (where $m > n$, 励起 $\\to$ 放出):
$$\\frac{1}{\\lambda} = \\frac{E_m - E_n}{hc} = R_\\infty\\left(\\frac{1}{n^2} - \\frac{1}{m^2}\\right)$$

$R_\\infty = m_e k^2 e^4/(4\\pi\\hbar^3 c) \\approx 1.097\\times 10^7\\,\\text{m}^{-1}$（Rydberg 定数）

- **Lyman** ($n = 1$)：$\\lambda \\sim 121\\,\\text{nm}$ ($m = 2$、Ly-$\\alpha$)、$\\lambda \\sim 102\\,\\text{nm}$ ($m = 3$)。紫外域。
- **Balmer** ($n = 2$)：$\\lambda \\sim 656\\,\\text{nm}$ ($m = 3$、H-$\\alpha$ 赤)、$\\lambda \\sim 486\\,\\text{nm}$ ($m = 4$、青緑)。可視域、星のスペクトルで観測可能。

## (4) Bohr モデルの限界と Schrödinger への移行
**成功**：水素の線スペクトルを定量的に説明（1913）。
**限界**：
- 多電子原子（He 以降）で量的予言が破綻
- 偏光・スペクトル強度・選択則を予言できない
- Stern-Gerlach 実験（スピン発見）を説明できない
- 波動粒子二重性を単純な円軌道で表現できない

**Schrödinger 方程式（1926）**：
- 波動関数 $\\psi(\\vec{r})$ で確率密度記述
- 角運動量量子化・エネルギー準位が自然に導出
- 多電子・スピン・摂動論拡張が可能
- 現代量子力学の基礎

**物理的意味**：Bohr モデルは新しい量子化概念の歴史的出発点。Schrödinger 方程式の教育的前駆として今も教えられる。半古典近似（WKB、Bohr-Sommerfeld）として量子化条件は生き続ける。` },

  // ---- YNU 2022 (+2) ----
  { id: "ynu-2022-phys-3", universitySlug: "ynu", year: 2022, subject: "物理学", problemNumber: 3,
    title: "コンデンサの充放電", field: "electromagnetism", difficulty: "basic",
    tags: ["RC 回路", "充放電", "時定数"],
    isFree: true,
    statement: `**対応問題**: 横浜国立大学 2022年度 物理学 問3

## 問題の設定
キャパシタンス $C$ のコンデンサ、抵抗 $R$、起電力 $V_0$ の電池、スイッチを直列接続。時刻 $t = 0$ にスイッチを閉じる。

## 問われている内容
(1) Kirchhoff の法則から、コンデンサの電圧 $V_C(t)$ の満たす微分方程式を書け。
(2) 初期条件 $V_C(0) = 0$ で解き、$V_C(t) = V_0(1 - e^{-t/\\tau})$（$\\tau = RC$）を導け。
(3) 十分に充電された後、電池を短絡に置き換えて放電する場合の $V_C(t)$ を求めよ。
(4) 充電中の抵抗での Joule 損失がコンデンサに蓄えられるエネルギー $CV_0^2/2$ と等しいことを示せ（エネルギー効率 50% の問題）。`,
    solution: `## (1) 微分方程式
Kirchhoff：$V_0 = V_R + V_C = R I + V_C$。電流 $I = C\\, dV_C/dt$：
$$V_0 = RC\\frac{dV_C}{dt} + V_C$$
$$\\frac{dV_C}{dt} = \\frac{V_0 - V_C}{RC}$$

## (2) 充電過程
変数分離 $dV_C/(V_0 - V_C) = dt/(RC)$、積分：$-\\ln(V_0 - V_C) = t/(RC) + $ const。

初期 $V_C(0) = 0$：$V_0 - V_C = V_0 e^{-t/RC}$：
$$\\boxed{V_C(t) = V_0(1 - e^{-t/\\tau}), \\quad \\tau = RC}$$

時定数 $\\tau$：$V_C$ が $V_0(1 - 1/e) \\approx 0.63 V_0$ に達する時間。$5\\tau$ で 99% 到達。

## (3) 放電過程
$V_0 = 0$ 置換。初期 $V_C(0) = V_0$：
$$V_C(t) = V_0 e^{-t/RC}$$

電流 $I = -C dV_C/dt = (V_0/R)e^{-t/RC}$（充電時の逆符号）。

## (4) エネルギー収支
充電中の Joule 損失：
$$W_R = \\int_0^\\infty I^2 R\\, dt = \\int_0^\\infty \\left(\\frac{V_0 e^{-t/\\tau}}{R}\\right)^2 R\\, dt = \\frac{V_0^2}{R}\\cdot\\frac{\\tau}{2} = \\frac{CV_0^2}{2}$$

コンデンサエネルギー：$W_C = (1/2)CV_C^2(\\infty) = CV_0^2/2$

電池がした仕事：$W_{\\text{batt}} = \\int I V_0 dt = V_0\\int(V_0/R)e^{-t/\\tau}dt = V_0^2 C$

収支：$W_{\\text{batt}} = W_C + W_R = CV_0^2/2 + CV_0^2/2 = CV_0^2$ ✅

**効率 50%**：電池エネルギーの半分がコンデンサに、半分が抵抗で熱として散逸。これは $R$ の値によらず普遍。

**物理的意味**：RC 回路は電子回路の基本要素。時定数測定、フィルター（ロー/ハイパス、カットオフ $1/\\tau$）、微分・積分回路、プログラム可能タイマー（555 IC、DRAM リフレッシュ）に応用。神経細胞の膜時定数（$\\sim$ ms）も類似の物理。` },

  { id: "ynu-2022-phys-4", universitySlug: "ynu", year: 2022, subject: "物理学", problemNumber: 4,
    title: "気体分子運動論", field: "statistical", difficulty: "basic",
    tags: ["気体分子運動論", "圧力", "等分配則"],
    isFree: true,
    statement: `**対応問題**: 横浜国立大学 2022年度 物理学 問4

## 問題の設定
体積 $V$ の箱に $N$ 個の理想気体分子（質量 $m$）。絶対温度 $T$、Boltzmann 定数 $k_B$。

## 問われている内容
(1) 1 個の分子が壁に及ぼす力を運動量変化から導き、分子運動論的な圧力の式 $P = (1/3)n m\\langle v^2\\rangle$（$n = N/V$ 分子密度）を導け。
(2) 理想気体の状態方程式 $PV = Nk_B T$ との比較から、$\\langle (1/2)mv^2\\rangle = (3/2)k_B T$（等分配則の 3 自由度版）を示せ。
(3) 根平均 2 乗速度 $v_{\\text{rms}} = \\sqrt{3k_B T/m}$ を求め、窒素 $N_2$（$m = 28\\,\\text{g/mol}$）の室温での $v_{\\text{rms}}$ を計算せよ。
(4) 2 原子分子（$N_2, O_2$ 等）の比熱 $C_V = (5/2)R$（並進 3 + 回転 2 自由度）となる等分配則を説明せよ。`,
    solution: `## (1) 圧力の導出
壁（$x = L$、$yz$ 平面）に衝突する分子：$x$ 方向速度 $v_x > 0$。1 回の衝突で運動量変化 $2m v_x$。衝突間隔 $2L/v_x$（行って帰る）。

1 分子の平均力 $F = 2m v_x/(2L/v_x) = m v_x^2/L$。全 $N$ 分子の平均：
$$P = \\frac{N\\langle F\\rangle}{A} = \\frac{N m\\langle v_x^2\\rangle}{LA} = \\frac{N m\\langle v_x^2\\rangle}{V}$$

等方性 $\\langle v_x^2\\rangle = \\langle v_y^2\\rangle = \\langle v_z^2\\rangle = \\langle v^2\\rangle/3$：
$$\\boxed{P = \\frac{N m\\langle v^2\\rangle}{3V} = \\frac{1}{3}n m\\langle v^2\\rangle}$$

## (2) 等分配則
$PV = Nk_B T$ と比較：
$$\\frac{1}{3}N m\\langle v^2\\rangle = Nk_B T$$
$$\\boxed{\\left\\langle\\frac{1}{2}mv^2\\right\\rangle = \\frac{3}{2}k_B T}$$

3 自由度（$x, y, z$）それぞれ $(1/2)k_B T$（等分配則）。

## (3) $v_{\\text{rms}}$ の計算
$v_{\\text{rms}} = \\sqrt{\\langle v^2\\rangle} = \\sqrt{3k_B T/m}$。

$N_2$：$m = 28\\times 10^{-3}/(6.02\\times 10^{23}) \\approx 4.65\\times 10^{-26}\\,\\text{kg}$、$T = 300\\,\\text{K}$：
$$v_{\\text{rms}} = \\sqrt{3\\times 1.38\\times 10^{-23}\\times 300/4.65\\times 10^{-26}} \\approx 517\\,\\text{m/s}$$

音速（$340\\,\\text{m/s}$）より速い。音は空気中で分子衝突を介して伝わる圧力波で、分子の平均速度と同程度のオーダー。

## (4) 2 原子分子の比熱
並進自由度 3、回転自由度 2（直線分子は 2 軸回転のみ、3 軸目は慣性モーメントゼロ）。振動は室温で凍結（エネルギー間隔 $\\gg k_B T$）。

等分配則：エネルギーは各自由度に $(1/2)k_B T$：
$$\\langle E\\rangle = (3/2)k_B T + (2/2)k_B T = (5/2)k_B T$$

$1$ モル：$U = (5/2)RT$、$C_V = dU/dT = (5/2)R \\approx 20.8\\,\\text{J/(mol K)}$。

実験値：$N_2, O_2$ 室温で $C_V \\approx 20.7$ ✅。高温（$T \\gg \\Theta_v$、振動温度）で振動励起、$C_V \\to (7/2)R$。

**物理的意味**：分子運動論は統計力学の入口。圧力・温度・エントロピーをすべて分子の運動から導出。Avogadro 数の測定（Einstein の Brown 運動理論 1905）、Boltzmann の Entropy $S = k_B\\ln W$ の実証（1909 Perrin）、現代では非平衡統計力学（molecular dynamics、DPD シミュレーション）まで拡張。` },

  // ---- TSUKUBA 2022 (+2) ----
  { id: "tsukuba-2022-phys-3", universitySlug: "tsukuba", year: 2022, subject: "物理学", problemNumber: 3,
    title: "光の偏光と Malus の法則", field: "optics", difficulty: "basic",
    tags: ["偏光", "Malus の法則", "偏光子"],
    isFree: true,
    statement: `**対応問題**: 筑波大学 2022年度 物理学 問3

## 問題の設定
直線偏光の光（強度 $I_0$）が、偏光子（透過軸が偏光方向と角度 $\\theta$）を通る。

## 問われている内容
(1) 電場ベクトルの分解から、偏光子通過後の電場振幅 $E' = E_0\\cos\\theta$ を導け。
(2) 通過後の強度（Malus の法則）$I(\\theta) = I_0\\cos^2\\theta$ を求めよ。
(3) 2 つの偏光子（透過軸が互いに 90° = 直交）を通過すると光は完全に止まる。間に第 3 の偏光子（45° 傾き）を挿入すると光が透過する理由を Malus の法則で説明せよ。
(4) 液晶ディスプレイの原理：偏光子 + 液晶 + 偏光子の組合せで画素の明暗を作ることを簡潔に述べよ。`,
    solution: `## (1) 電場分解
入射光の電場 $\\vec{E} = E_0\\hat{\\epsilon}_0$。偏光子透過軸 $\\hat{\\epsilon}_p$、$\\hat{\\epsilon}_0\\cdot\\hat{\\epsilon}_p = \\cos\\theta$。

偏光子は $\\hat{\\epsilon}_p$ 成分のみ通す：
$$E' = (\\vec{E}\\cdot\\hat{\\epsilon}_p) = E_0\\cos\\theta$$

## (2) Malus の法則
強度 $I \\propto |E|^2$：
$$\\boxed{I(\\theta) = I_0\\cos^2\\theta}$$

- $\\theta = 0°$：$I = I_0$ 全透過
- $\\theta = 45°$：$I = I_0/2$
- $\\theta = 90°$：$I = 0$ 完全遮光

## (3) 3 偏光子の実験
2 偏光子（0°, 90°）のみ：直交なので $I_2 = I_0\\cos^2(90°) = 0$。

3 つ目（45°）挿入：
- 偏光子 1（0°）通過後：$I_1 = I_0$（仮に無偏光 $\\to$ 直線偏光の場合は $I_1 = I_0/2$）、偏光方向 $0°$
- 偏光子 2（45°）通過：$I_2 = I_1\\cos^2(45°) = I_1/2$、偏光方向 $45°$
- 偏光子 3（90°）通過：$I_3 = I_2\\cos^2(45°) = I_1/4$

**結果**：中間の偏光子が入ると $I_3 = I_0/4 > 0$。量子力学的には「測定が状態を変える」の古典版。

## (4) 液晶ディスプレイの原理
- 2 偏光子（直交配置）：本来は完全遮光
- 間に**液晶**：電圧なしでは分子配列が偏光方向を 90° ひねる（螺旋配向）→ 光が透過 → **明**
- 電圧印加：液晶分子が再配列、ひねり無効化 → 光が遮られる → **暗**

各画素に電圧を ON/OFF することで明暗コントロール。カラーは RGB 3 色フィルターの組合せ。

**物理的意味**：Malus の法則（1809）は偏光の基礎。3D 映画（偏光メガネ）、LCD、光通信（偏光保持ファイバー）、天文観測（偏光で塵の方向特定）、偏光顕微鏡（生体試料の構造解析）、物質の複屈折（応力解析、分析化学）など応用多数。量子力学の 2 状態系（スピン、偏光）の古典対応としても教育的。` },

  { id: "tsukuba-2022-phys-4", universitySlug: "tsukuba", year: 2022, subject: "物理学", problemNumber: 4,
    title: "定常熱伝導と Fourier の法則", field: "thermodynamics", difficulty: "basic",
    tags: ["熱伝導", "熱抵抗", "多層壁"],
    isFree: true,
    statement: `**対応問題**: 筑波大学 2022年度 物理学 問4

## 問題の設定
厚さ $L_1, L_2$、熱伝導率 $\\kappa_1, \\kappa_2$ の 2 層壁。両面温度 $T_1, T_2$（$T_1 > T_2$）、面積 $A$。定常状態。

## 問われている内容
(1) 各層での熱流束 $q = Q/(At)$（単位面積当たり）を、内部温度 $T_m$（界面）を使って表せ。
(2) 定常条件（各層で熱流束が等しい）から $T_m$ を決定し、全熱抵抗を $L_1/\\kappa_1 + L_2/\\kappa_2$（直列合成）と書けることを示せ。
(3) 建物の窓ガラス（単板 vs ペアガラス）で、ペアガラスの断熱性能向上を定性的に述べよ。
(4) 熱伝導の代表的現象で、逆の温度勾配を生む（Peltier 効果、熱電変換）例を簡潔に述べよ。`,
    solution: `## (1) 各層熱流束
Fourier の法則 $q = -\\kappa dT/dx$。層 1 で $q_1 = \\kappa_1(T_1 - T_m)/L_1$。層 2 で $q_2 = \\kappa_2(T_m - T_2)/L_2$。

## (2) 界面温度と熱抵抗
定常で $q_1 = q_2 = q$：
$$\\kappa_1(T_1 - T_m)/L_1 = \\kappa_2(T_m - T_2)/L_2$$

両式から $T_m$ を消去：
$$q = \\frac{T_1 - T_2}{L_1/\\kappa_1 + L_2/\\kappa_2}$$

全熱抵抗 $R_{\\text{th,tot}} = L_1/\\kappa_1 + L_2/\\kappa_2$（**直列合成**、各層の熱抵抗の和）。電気回路の抵抗直列合成と同形。

## (3) ペアガラスの断熱性能
単板ガラス（厚さ $L = 5\\,\\text{mm}$、$\\kappa \\approx 1\\,\\text{W/(mK)}$）：$R_{\\text{th}} \\approx 0.005$

ペアガラス（ガラス 3mm + 空気 12mm + ガラス 3mm）：
- ガラス 2 層：$R = 2 \\times 0.003/1 = 0.006$
- 空気層（$\\kappa \\approx 0.025$）：$R = 0.012/0.025 = 0.48$
- 合計：$R \\approx 0.49$

→ ペアガラスの熱抵抗は単板の約 100 倍、熱流 1/100（断熱性能大幅向上）。

実際は対流・放射損失も寄与：真空断熱（$\\kappa \\to 0$ 理想）が最高性能。

## (4) Peltier 効果
半導体 $pn$ 接合や異種金属接合に電流を流すと、接合部で熱が吸収または放出される（Peltier 1834）。

**原理**：キャリアがエネルギー準位を乗り越える/下る際のエネルギーやり取り。電流方向で加熱/冷却が切り替わる。

**応用**：
- 熱電素子冷却（小型冷蔵庫、PC-CPU 冷却）
- 熱電発電（宇宙船の電源 RTG、地熱発電）
- Seebeck 効果（逆：温度差で電圧、温度計、熱電対センサー）

**物理的意味**：熱伝導は日常生活から宇宙物理（恒星内部の輻射輸送）、半導体デバイス設計（電力損失・放熱）、建築工学（U 値、熱貫流率）、気候シミュレーション（大気・海洋モデル）まで幅広い応用。多層壁は家屋断熱の基本。` },
];

export function getProblem(id: string): Problem | undefined {
  return problems.find((p) => p.id === id);
}

export function getProblemsByUniversity(slug: string): Problem[] {
  return problems.filter((p) => p.universitySlug === slug);
}

export function getProblemsByField(field: string): Problem[] {
  return problems.filter((p) => p.field === field);
}

export function getYears(universitySlug: string): number[] {
  const years = problems
    .filter((p) => p.universitySlug === universitySlug)
    .map((p) => p.year);
  return [...new Set(years)].sort((a, b) => b - a);
}

/** 科目名 → URL slug 変換（ASCII slug） */
export const SUBJECT_SLUG: Record<string, string> = {
  物理学: "phys",
  数学: "math",
};

export const SUBJECT_FROM_SLUG: Record<string, string> = {
  phys: "物理学",
  math: "数学",
};

export type Exam = {
  universitySlug: string;
  year: number;
  subject: string;
  subjectSlug: string;
  problems: Problem[];
};

/** 全試験（大学×年度×科目）の一覧。problemNumber 順にソート済み。 */
export function getExams(): Exam[] {
  const map = new Map<string, Problem[]>();
  for (const p of problems) {
    const key = `${p.universitySlug}__${p.year}__${p.subject}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(p);
  }
  const exams: Exam[] = [];
  for (const [key, ps] of map) {
    const [universitySlug, yearStr, subject] = key.split("__");
    const subjectSlug = SUBJECT_SLUG[subject] ?? subject;
    exams.push({
      universitySlug,
      year: Number(yearStr),
      subject,
      subjectSlug,
      problems: [...ps].sort((a, b) => a.problemNumber - b.problemNumber),
    });
  }
  return exams;
}

/** 特定の試験（大学・年度・科目スラッグ）の問題群を取得 */
export function getExamProblems(
  universitySlug: string,
  year: number,
  subjectSlug: string,
): Problem[] {
  const subject = SUBJECT_FROM_SLUG[subjectSlug];
  if (!subject) return [];
  return problems
    .filter(
      (p) =>
        p.universitySlug === universitySlug &&
        p.year === year &&
        p.subject === subject,
    )
    .sort((a, b) => a.problemNumber - b.problemNumber);
}

/** 大学・年度に対する科目スラッグ一覧 */
export function getSubjectSlugsForYear(
  universitySlug: string,
  year: number,
): string[] {
  const subjects = problems
    .filter((p) => p.universitySlug === universitySlug && p.year === year)
    .map((p) => SUBJECT_SLUG[p.subject] ?? p.subject);
  return [...new Set(subjects)];
}
