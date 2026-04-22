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
