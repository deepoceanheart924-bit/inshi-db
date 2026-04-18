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
    statement: `質量 $m$ の質点が、長さ $l$ の軽い剛体棒の先端に取り付けられ、鉛直面内で自由に回転できるようになっている。
棒の他端は滑らかな軸に固定されている。

(1) 最下点を通過するときの角速度を $\\omega_0$ とする。質点が最下点から角度 $\\theta$ の位置にあるとき、
運動方程式を立てよ。

(2) 質点が一回転するための $\\omega_0$ の条件を求めよ。

(3) 微小振動の周期 $T$ を求めよ。`,
    solution: `## (1) 運動方程式

最下点から角度 $\\theta$ の位置において、質点に作用する力は重力 $mg$ と棒の張力 $S$ である。

接線方向の運動方程式は：

$$ml\\ddot{\\theta} = -mg\\sin\\theta$$

したがって：

$$\\ddot{\\theta} = -\\frac{g}{l}\\sin\\theta$$

## (2) 一回転の条件

エネルギー保存則より、角度 $\\theta$ における角速度 $\\omega$ は：

$$\\frac{1}{2}ml^2\\omega^2 = \\frac{1}{2}ml^2\\omega_0^2 - mgl(1-\\cos\\theta)$$

最高点（$\\theta = \\pi$）で $\\omega^2 \\geq 0$ であることが必要。さらに、最高点で棒が圧縮力を受けないためには
（棒は剛体なので引張・圧縮いずれも可能だが、質点が棒から離れない条件として）：

$$\\frac{1}{2}ml^2\\omega_0^2 \\geq mgl \\cdot 2$$

$$\\omega_0 \\geq \\sqrt{\\frac{4g}{l}}$$

**注意**：これは剛体棒の場合の条件である。糸の場合は最高点で向心力の条件から $\\omega_0 \\geq \\sqrt{5g/l}$ となる。

## (3) 微小振動の周期

$\\theta \\ll 1$ のとき $\\sin\\theta \\approx \\theta$ より：

$$\\ddot{\\theta} = -\\frac{g}{l}\\theta$$

これは角振動数 $\\omega = \\sqrt{g/l}$ の単振動であるから：

$$T = 2\\pi\\sqrt{\\frac{l}{g}}$$`,
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
    statement: `真空中に半径 $a$ の導体球が置かれ、全電荷 $Q$ を与えられている。

(1) 導体球の表面における電場の大きさを求めよ。

(2) 導体球の電位 $V$ を求めよ。ただし、無限遠で $V=0$ とする。

(3) この導体球から距離 $d \\gg a$ の位置に点電荷 $q$ を置いた。
導体球上に誘起される電荷分布の概形を説明し、
導体球と点電荷の間に働く力を最低次の近似で求めよ。`,
    solution: `## (1) 表面の電場

導体球は球対称であるから、電荷は表面に一様に分布する。ガウスの法則を半径 $r>a$ の球面に適用すると：

$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q}{\\varepsilon_0}$$

$$4\\pi r^2 E = \\frac{Q}{\\varepsilon_0}$$

表面（$r=a$）では：

$$E = \\frac{Q}{4\\pi\\varepsilon_0 a^2}$$

## (2) 電位

無限遠を基準として：

$$V = -\\int_{\\infty}^{a} \\vec{E} \\cdot d\\vec{r} = \\int_{a}^{\\infty} \\frac{Q}{4\\pi\\varepsilon_0 r^2} dr = \\frac{Q}{4\\pi\\varepsilon_0 a}$$

## (3) 誘起電荷と力

点電荷 $q$ に近い側に $-$ の電荷、遠い側に $+$ の電荷が誘起される。

$d \\gg a$ の場合、導体球は電気双極子として振る舞う。一様電場 $E_0 = q/(4\\pi\\varepsilon_0 d^2)$ 中の導体球には
双極子モーメント $\\vec{p} = 4\\pi\\varepsilon_0 a^3 \\vec{E}_0$ が誘起される。

さらに導体球は電荷 $Q$ を持つので、最低次近似では：

$$F \\approx \\frac{qQ}{4\\pi\\varepsilon_0 d^2}$$

$Q=0$ の場合は、誘起双極子による引力が支配的で：

$$F \\approx -\\frac{q^2 a^3}{4\\pi\\varepsilon_0} \\cdot \\frac{1}{2d^5} \\cdot 4\\pi\\varepsilon_0 \\cdot 2 = -\\frac{q^2 a^3}{2\\pi\\varepsilon_0 d^5}$$`,
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
    isFree: false,
    statement: `質量 $m$、角振動数 $\\omega$ の一次元調和振動子を考える。ハミルトニアンは
$$\\hat{H} = \\frac{\\hat{p}^2}{2m} + \\frac{1}{2}m\\omega^2\\hat{x}^2$$
で与えられる。

(1) 消滅演算子 $\\hat{a} = \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat{x} + \\frac{i}{\\sqrt{2m\\omega\\hbar}}\\hat{p}$ を用いて
ハミルトニアンを書き直せ。

(2) 基底状態の波動関数 $\\psi_0(x)$ を求めよ。

(3) 第一励起状態の波動関数 $\\psi_1(x)$ を求め、$\\langle 1|\\hat{x}|0\\rangle$ を計算せよ。`,
    solution: `## (1) ハミルトニアンの書き換え

交換関係 $[\\hat{a}, \\hat{a}^\\dagger] = 1$ を用いると：

$$\\hat{H} = \\hbar\\omega\\left(\\hat{a}^\\dagger\\hat{a} + \\frac{1}{2}\\right) = \\hbar\\omega\\left(\\hat{N} + \\frac{1}{2}\\right)$$

ここで $\\hat{N} = \\hat{a}^\\dagger\\hat{a}$ は数演算子である。

## (2) 基底状態の波動関数

基底状態は $\\hat{a}|0\\rangle = 0$ を満たす。座標表示では：

$$\\left(\\sqrt{\\frac{m\\omega}{2\\hbar}}x + \\frac{\\hbar}{\\sqrt{2m\\omega\\hbar}}\\frac{d}{dx}\\right)\\psi_0(x) = 0$$

$$\\frac{d\\psi_0}{dx} = -\\frac{m\\omega}{\\hbar}x\\,\\psi_0$$

これを解くと：

$$\\psi_0(x) = \\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4} \\exp\\left(-\\frac{m\\omega}{2\\hbar}x^2\\right)$$

## (3) 第一励起状態と行列要素

$$\\psi_1(x) = \\hat{a}^\\dagger|0\\rangle \\quad \\Rightarrow \\quad \\psi_1(x) = \\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4} \\sqrt{\\frac{2m\\omega}{\\hbar}}\\, x \\exp\\left(-\\frac{m\\omega}{2\\hbar}x^2\\right)$$

行列要素は：

$$\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat{a} + \\hat{a}^\\dagger)$$

$$\\langle 1|\\hat{x}|0\\rangle = \\sqrt{\\frac{\\hbar}{2m\\omega}}\\langle 1|(\\hat{a} + \\hat{a}^\\dagger)|0\\rangle = \\sqrt{\\frac{\\hbar}{2m\\omega}}\\langle 1|1\\rangle = \\sqrt{\\frac{\\hbar}{2m\\omega}}$$`,
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
    statement: `質量 $m$ の粒子が中心力 $F(r) = -\\frac{k}{r^2}$（$k>0$）を受けて運動している。

(1) 極座標 $(r,\\theta)$ における運動方程式を $r$ 成分と $\\theta$ 成分に分けて書き下せ。

(2) 角運動量 $L$ が保存されることを示し、有効ポテンシャル $V_{\\text{eff}}(r)$ を求めよ。

(3) 円軌道の半径と、その安定性を議論せよ。`,
    solution: `## (1) 運動方程式

極座標における加速度の各成分を用いると：

$$m(\\ddot{r} - r\\dot{\\theta}^2) = -\\frac{k}{r^2} \\quad \\text{（$r$成分）}$$

$$m(r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta}) = 0 \\quad \\text{（$\\theta$成分）}$$

## (2) 角運動量保存と有効ポテンシャル

$\\theta$ 成分の方程式から：

$$\\frac{d}{dt}(mr^2\\dot{\\theta}) = 0$$

したがって角運動量 $L = mr^2\\dot{\\theta}$ は保存される。

$\\dot{\\theta} = L/(mr^2)$ を $r$ 成分に代入し、エネルギーの形に整理すると：

$$E = \\frac{1}{2}m\\dot{r}^2 + V_{\\text{eff}}(r)$$

$$V_{\\text{eff}}(r) = -\\frac{k}{r} + \\frac{L^2}{2mr^2}$$

## (3) 円軌道とその安定性

円軌道は $\\dot{r}=0,\\, \\ddot{r}=0$ の条件から $dV_{\\text{eff}}/dr = 0$ を満たす：

$$\\frac{k}{r_0^2} - \\frac{L^2}{mr_0^3} = 0 \\quad \\Rightarrow \\quad r_0 = \\frac{L^2}{mk}$$

安定性は $d^2V_{\\text{eff}}/dr^2|_{r=r_0}$ の符号で判定する：

$$\\frac{d^2V_{\\text{eff}}}{dr^2} = -\\frac{2k}{r^3} + \\frac{3L^2}{mr^4}$$

$r=r_0$ を代入すると：

$$\\left.\\frac{d^2V_{\\text{eff}}}{dr^2}\\right|_{r_0} = \\frac{m^3k^4}{L^6} > 0$$

正であるから、**円軌道は安定**である。`,
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
    statement: `温度 $T$ の熱浴と接した $N$ 個の粒子系を正準集団で扱う。

(1) 分配関数 $Z$ を用いて、系の平均エネルギー $\\langle E \\rangle$ を表せ。

(2) エネルギーの分散 $\\langle (\\Delta E)^2 \\rangle = \\langle E^2 \\rangle - \\langle E \\rangle^2$ を
$Z$ の微分を用いて表し、比熱 $C_V$ との関係を導け。

(3) $N$ 粒子の理想気体（単原子分子）の場合について、
エネルギーの相対揺らぎ $\\sqrt{\\langle (\\Delta E)^2 \\rangle}/\\langle E \\rangle$ を求めよ。`,
    solution: `## (1) 平均エネルギー

分配関数は $Z = \\sum_i e^{-\\beta E_i}$（$\\beta = 1/k_BT$）。平均エネルギーは：

$$\\langle E \\rangle = \\frac{\\sum_i E_i e^{-\\beta E_i}}{Z} = -\\frac{1}{Z}\\frac{\\partial Z}{\\partial \\beta} = -\\frac{\\partial \\ln Z}{\\partial \\beta}$$

## (2) エネルギーの分散

$$\\langle E^2 \\rangle = \\frac{1}{Z}\\frac{\\partial^2 Z}{\\partial \\beta^2}$$

$$\\langle (\\Delta E)^2 \\rangle = \\frac{\\partial^2 \\ln Z}{\\partial \\beta^2} = -\\frac{\\partial \\langle E \\rangle}{\\partial \\beta}$$

ここで $\\beta = 1/(k_BT)$ より $\\partial\\beta = -\\partial T/(k_BT^2)$ であるから：

$$\\langle (\\Delta E)^2 \\rangle = k_BT^2 \\frac{\\partial \\langle E \\rangle}{\\partial T} = k_BT^2 C_V$$

**エネルギーの揺らぎは比熱に比例する**。これは揺動散逸定理の一つの表れである。

## (3) 理想気体の相対揺らぎ

単原子理想気体では：

$$\\langle E \\rangle = \\frac{3}{2}Nk_BT, \\quad C_V = \\frac{3}{2}Nk_B$$

$$\\langle (\\Delta E)^2 \\rangle = k_BT^2 \\cdot \\frac{3}{2}Nk_B = \\frac{3}{2}Nk_B^2T^2$$

相対揺らぎは：

$$\\frac{\\sqrt{\\langle (\\Delta E)^2 \\rangle}}{\\langle E \\rangle} = \\frac{\\sqrt{\\frac{3}{2}N}\\,k_BT}{\\frac{3}{2}Nk_BT} = \\sqrt{\\frac{2}{3N}}$$

$N \\sim 10^{23}$ では $\\sim 10^{-12}$ となり、**マクロ系ではエネルギーの揺らぎは無視できる**。`,
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
    statement: `真空中から屈折率 $n$ の誘電体の平面境界に、入射角 $\\theta_i$ で平面電磁波が入射する場合を考える。

(1) スネルの法則を導け。

(2) p偏光（入射面内に電場が振動する偏光）に対するフレネルの反射係数を求めよ。

(3) ブリュースター角 $\\theta_B$ を求め、その物理的意味を説明せよ。`,
    solution: `## (1) スネルの法則

境界面で電磁波の位相が連続であることから、境界に平行な波数成分が一致する：

$$k_1 \\sin\\theta_i = k_2 \\sin\\theta_t$$

$k = n\\omega/c$ を用いて：

$$\\sin\\theta_i = n\\sin\\theta_t$$

## (2) フレネルの反射係数（p偏光）

境界条件は電場の接線成分と磁場の接線成分の連続性：

$$E_i\\cos\\theta_i + E_r\\cos\\theta_i = E_t\\cos\\theta_t$$
$$\\frac{E_i}{\\mu_0 c} - \\frac{E_r}{\\mu_0 c} = \\frac{nE_t}{\\mu_0 c}$$

これらを連立すると、p偏光の反射係数は：

$$r_p = \\frac{E_r}{E_i} = \\frac{n\\cos\\theta_i - \\cos\\theta_t}{n\\cos\\theta_i + \\cos\\theta_t}$$

スネルの法則を用いて $\\cos\\theta_t = \\sqrt{1-\\sin^2\\theta_i/n^2}$ を代入すれば $\\theta_i$ のみの関数として表せる：

$$r_p = \\frac{n^2\\cos\\theta_i - \\sqrt{n^2 - \\sin^2\\theta_i}}{n^2\\cos\\theta_i + \\sqrt{n^2 - \\sin^2\\theta_i}}$$

## (3) ブリュースター角

$r_p = 0$ となる条件は $n\\cos\\theta_i = \\cos\\theta_t$ 。
スネルの法則と合わせると $\\theta_i + \\theta_t = \\pi/2$ が得られ：

$$\\tan\\theta_B = n$$

**物理的意味**：ブリュースター角では、反射光方向と屈折光方向が直交する。
誘電体中の分極した電子が双極子放射する際、双極子軸方向には放射しないため、
p偏光の反射波が消滅する。この現象を利用して偏光子を作ることができる。`,
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
    isFree: false,
    statement: `水素原子のエネルギー固有値は $E_n = -13.6/n^2$ [eV] で与えられる。

(1) $n=2$ から $n=1$ への遷移で放出される光子の波長を求めよ。

(2) 電気双極子遷移の選択則 $\\Delta l = \\pm 1$ を、行列要素 $\\langle n'l'm'|\\hat{z}|nlm\\rangle$ の
パリティの議論から導け。

(3) $n=2$ の準位に一様な電場 $\\vec{E} = E_0\\hat{z}$ を印加したとき（シュタルク効果）、
$2s$ と $2p_0$ 状態の間のエネルギー分裂を一次摂動論で求めよ。`,
    solution: `## (1) 光子の波長

$$\\Delta E = E_2 - E_1 = -\\frac{13.6}{4} + 13.6 = 10.2 \\text{ eV}$$

$$\\lambda = \\frac{hc}{\\Delta E} = \\frac{1240 \\text{ eV·nm}}{10.2 \\text{ eV}} \\approx 121.5 \\text{ nm}$$

これはライマン系列の $L_\\alpha$ 線で、紫外線領域にある。

## (2) 選択則の導出

パリティ変換 $\\hat{P}$ のもとで：
- 球面調和関数は $\\hat{P}Y_l^m = (-1)^l Y_l^m$
- $\\hat{z}$ はパリティ奇（$\\hat{P}\\hat{z}\\hat{P}^{-1} = -\\hat{z}$）

行列要素は：

$$\\langle n'l'm'|\\hat{z}|nlm\\rangle$$

パリティの性質から、この行列要素が非零であるためには：

$$(-1)^{l'} \\cdot (-1) \\cdot (-1)^l = 1 \\quad \\Rightarrow \\quad (-1)^{l'+l+1} = 1$$

すなわち $l' + l$ = 奇数、つまり $\\Delta l = \\pm 1, \\pm 3, \\ldots$

さらに $\\hat{z} \\propto r Y_1^0$ であることから、角運動量の合成則により $\\Delta l = \\pm 1$ のみが許される。

## (3) シュタルク効果

摂動ハミルトニアンは $\\hat{H}' = eE_0\\hat{z}$。

$n=2$ の縮退した部分空間で、非零の行列要素は $|2s\\rangle$ と $|2p_0\\rangle$ の間のみ：

$$\\langle 2s|eE_0\\hat{z}|2p_0\\rangle = eE_0 \\int \\psi_{200}^* \\, z \\, \\psi_{210} \\, d^3r = -3eE_0 a_0$$

ここで $a_0$ はボーア半径。2×2行列を対角化すると、エネルギー分裂は：

$$\\Delta E = 2 \\times 3eE_0 a_0 = 6eE_0 a_0$$

これは**電場に比例する一次のシュタルク効果**であり、$n=2$ の準位に縮退があることに起因する。`,
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
    statement: `2つの同じばね定数 $k$ のばねで壁と質点をつなぎ、さらに質点間をばね定数 $k'$ のばねでつないだ系を考える。
2つの質点の質量はいずれも $m$ である。

(1) 各質点の変位を $x_1, x_2$ として運動方程式を立てよ。

(2) 基準モードの固有振動数を求めよ。

(3) 初期条件 $x_1(0) = A,\\, x_2(0) = 0,\\, \\dot{x}_1(0) = \\dot{x}_2(0) = 0$ のとき、
$x_1(t)$ と $x_2(t)$ を求め、うなり現象を説明せよ。`,
    solution: `## (1) 運動方程式

$$m\\ddot{x}_1 = -kx_1 - k'(x_1 - x_2) = -(k+k')x_1 + k'x_2$$
$$m\\ddot{x}_2 = -kx_2 - k'(x_2 - x_1) = k'x_1 - (k+k')x_2$$

## (2) 基準モード

$x_1 = A e^{i\\omega t}$, $x_2 = B e^{i\\omega t}$ を代入して：

$$\\begin{pmatrix} k+k'-m\\omega^2 & -k' \\\\ -k' & k+k'-m\\omega^2 \\end{pmatrix} \\begin{pmatrix} A \\\\ B \\end{pmatrix} = 0$$

行列式 $= 0$ より：

$$(k+k'-m\\omega^2)^2 - k'^2 = 0$$

**対称モード**（$A = B$）：
$$\\omega_1 = \\sqrt{\\frac{k}{m}}$$

**反対称モード**（$A = -B$）：
$$\\omega_2 = \\sqrt{\\frac{k+2k'}{m}}$$

## (3) うなり

一般解を基準座標 $q_\\pm = x_1 \\pm x_2$ で書くと：

$$q_+ = A\\cos\\omega_1 t, \\quad q_- = A\\cos\\omega_2 t$$

もとの座標に戻すと：

$$x_1(t) = \\frac{A}{2}(\\cos\\omega_1 t + \\cos\\omega_2 t) = A\\cos\\left(\\frac{\\omega_2-\\omega_1}{2}t\\right)\\cos\\left(\\frac{\\omega_1+\\omega_2}{2}t\\right)$$

$$x_2(t) = \\frac{A}{2}(\\cos\\omega_1 t - \\cos\\omega_2 t) = A\\sin\\left(\\frac{\\omega_2-\\omega_1}{2}t\\right)\\sin\\left(\\frac{\\omega_1+\\omega_2}{2}t\\right)$$

$k' \\ll k$ のとき $\\omega_1 \\approx \\omega_2$ となり、振動数 $(\\omega_1+\\omega_2)/2$ の速い振動に対し、
振幅が振動数 $(\\omega_2-\\omega_1)/2$ でゆっくり変調される**うなり現象**が生じる。
エネルギーが2つの質点間を周期 $T_{\\text{beat}} = 2\\pi/(\\omega_2-\\omega_1)$ で往復する。`,
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
    isFree: false,
    statement: `$N$ 個のスピン $1/2$ のフェルミ粒子が体積 $V$ の箱に閉じ込められている。

(1) 一粒子状態密度 $D(\\varepsilon)$ を求めよ。

(2) 絶対零度でのフェルミエネルギー $\\varepsilon_F$ を粒子数密度 $n = N/V$ で表せ。

(3) 絶対零度での全エネルギーと圧力を求めよ。`,
    solution: `## (1) 状態密度

波数空間で、波数 $k$ から $k+dk$ の間にある状態数は（スピン2重縮退を含めて）：

$$dN = 2 \\cdot \\frac{V}{(2\\pi)^3} \\cdot 4\\pi k^2 dk$$

$\\varepsilon = \\hbar^2 k^2/(2m)$ より $k = \\sqrt{2m\\varepsilon}/\\hbar$, $dk = \\sqrt{m/(2\\varepsilon\\hbar^2)}\\,d\\varepsilon$ を代入すると：

$$D(\\varepsilon) = \\frac{V}{2\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2} \\sqrt{\\varepsilon}$$

## (2) フェルミエネルギー

$T=0$ でフェルミ分布はステップ関数となるので：

$$N = \\int_0^{\\varepsilon_F} D(\\varepsilon)\\,d\\varepsilon = \\frac{V}{2\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2} \\cdot \\frac{2}{3}\\varepsilon_F^{3/2}$$

これより：

$$\\varepsilon_F = \\frac{\\hbar^2}{2m}(3\\pi^2 n)^{2/3}$$

## (3) 全エネルギーと圧力

$$E = \\int_0^{\\varepsilon_F} \\varepsilon\\,D(\\varepsilon)\\,d\\varepsilon = \\frac{V}{2\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2} \\cdot \\frac{2}{5}\\varepsilon_F^{5/2} = \\frac{3}{5}N\\varepsilon_F$$

圧力は自由エネルギーの体積微分から：

$$P = -\\frac{\\partial E}{\\partial V}\\bigg|_N = \\frac{2E}{3V} = \\frac{2}{5}n\\varepsilon_F = \\frac{\\hbar^2}{5m}(3\\pi^2)^{2/3}n^{5/3}$$

**絶対零度でも圧力が非零**であり、これが**フェルミ圧**（縮退圧）と呼ばれる。
白色矮星や中性子星が重力崩壊しないのはこのフェルミ圧のおかげである。`,
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
    statement: `行列 $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$ について以下の問いに答えよ。

(1) $A$ の固有値と固有ベクトルを求めよ。

(2) $A$ を対角化せよ。

(3) 行列指数関数 $e^{At}$ を求め、連立微分方程式
$$\\frac{d}{dt}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = A \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$
の一般解を求めよ。`,
    solution: `## (1) 固有値と固有ベクトル

特性方程式 $\\det(A-\\lambda I) = 0$：

$$(2-\\lambda)(3-\\lambda) = 0 \\quad \\Rightarrow \\quad \\lambda_1 = 2,\\; \\lambda_2 = 3$$

$\\lambda_1=2$ に対する固有ベクトル：

$$(A-2I)\\vec{v} = \\begin{pmatrix} 0 & 1 \\\\ 0 & 1 \\end{pmatrix}\\vec{v} = 0 \\quad \\Rightarrow \\quad \\vec{v}_1 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$$

$\\lambda_2=3$ に対する固有ベクトル：

$$(A-3I)\\vec{v} = \\begin{pmatrix} -1 & 1 \\\\ 0 & 0 \\end{pmatrix}\\vec{v} = 0 \\quad \\Rightarrow \\quad \\vec{v}_2 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$$

## (2) 対角化

$P = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ とすると：

$$P^{-1}AP = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix} = D$$

## (3) 行列指数関数

$$e^{At} = Pe^{Dt}P^{-1} = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} e^{2t} & 0 \\\\ 0 & e^{3t} \\end{pmatrix}\\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix}$$

$$= \\begin{pmatrix} e^{2t} & e^{3t}-e^{2t} \\\\ 0 & e^{3t} \\end{pmatrix}$$

一般解は：

$$\\begin{pmatrix} x(t) \\\\ y(t) \\end{pmatrix} = c_1 e^{2t}\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} + c_2 e^{3t}\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$$

すなわち $x(t) = c_1 e^{2t} + c_2 e^{3t}$, $y(t) = c_2 e^{3t}$。`,
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
    isFree: false,
    statement: `以下の積分を複素積分の手法を用いて計算せよ。

(1) $\\displaystyle I_1 = \\int_0^{2\\pi} \\frac{d\\theta}{2+\\cos\\theta}$

(2) $\\displaystyle I_2 = \\int_{-\\infty}^{\\infty} \\frac{x^2}{(x^2+1)(x^2+4)} dx$

(3) 関数 $f(z) = \\frac{e^{iz}}{z^2+1}$ の $z=i$ における留数を求め、
$\\displaystyle \\int_{-\\infty}^{\\infty} \\frac{\\cos x}{x^2+1}dx$ を計算せよ。`,
    solution: `## (1) 三角関数の積分

$z = e^{i\\theta}$ と置換すると $\\cos\\theta = (z+z^{-1})/2$, $d\\theta = dz/(iz)$：

$$I_1 = \\oint_{|z|=1} \\frac{1}{2+(z+z^{-1})/2} \\cdot \\frac{dz}{iz} = \\oint \\frac{2}{iz(4+z+z^{-1})} dz = \\oint \\frac{2}{i(z^2+4z+1)} dz$$

$z^2+4z+1=0$ の解は $z = -2\\pm\\sqrt{3}$。$|z|<1$ にある極は $z_0 = -2+\\sqrt{3}$。

留数は：

$$\\text{Res}_{z_0} = \\frac{2}{i \\cdot 2z_0+4} = \\frac{2}{i \\cdot 2\\sqrt{3}} = \\frac{1}{i\\sqrt{3}}$$

$$I_1 = 2\\pi i \\cdot \\frac{1}{i\\sqrt{3}} = \\frac{2\\pi}{\\sqrt{3}}$$

## (2) 有理関数の積分

部分分数分解すると：

$$\\frac{x^2}{(x^2+1)(x^2+4)} = \\frac{1}{3}\\left(\\frac{-1}{x^2+1} + \\frac{4}{x^2+4}\\right)$$

上半面の極 $z=i$ と $z=2i$ での留数を用いて：

$$I_2 = \\frac{1}{3}\\left(-\\pi + 2\\pi\\right) = \\frac{\\pi}{3}$$

## (3) 留数とフーリエ型積分

$f(z) = e^{iz}/((z-i)(z+i))$ の $z=i$ における留数は：

$$\\text{Res}_{z=i} = \\frac{e^{i \\cdot i}}{i+i} = \\frac{e^{-1}}{2i}$$

上半面に閉じた経路で留数定理を適用（$e^{iz}$ は上半面で $|z|\\to\\infty$ で $0$ に収束するのでジョルダンの補題が使える）：

$$\\int_{-\\infty}^{\\infty} \\frac{e^{ix}}{x^2+1}dx = 2\\pi i \\cdot \\frac{e^{-1}}{2i} = \\frac{\\pi}{e}$$

実部を取ると：

$$\\int_{-\\infty}^{\\infty} \\frac{\\cos x}{x^2+1}dx = \\frac{\\pi}{e}$$`,
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
