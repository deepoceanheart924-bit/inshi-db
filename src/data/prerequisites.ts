import { Field } from "./types";

export type Prerequisite = {
  term: string;
  desc: string;
  field: Field | "general";
};

/**
 * Map of field → list of prerequisites for that area.
 * Each problem page will show the subset relevant to its field.
 */
export const PREREQUISITES: Record<Field, Prerequisite[]> = {
  mechanics: [
    { field: "mechanics", term: "ニュートンの第2法則", desc: "F = ma" },
    { field: "mechanics", term: "極座標の加速度", desc: "r, θ 成分への分解" },
    { field: "mechanics", term: "エネルギー保存則", desc: "運動＋ポテンシャルの和が一定" },
    { field: "mechanics", term: "角運動量", desc: "L = mr²θ̇（中心力で保存）" },
    { field: "mechanics", term: "単振動", desc: "θ̈ = -ω²θ, 周期 T = 2π/ω" },
  ],
  electromagnetism: [
    { field: "electromagnetism", term: "ガウスの法則", desc: "∮E·dA = Q/ε₀" },
    { field: "electromagnetism", term: "導体内の性質", desc: "電場ゼロ、電荷は表面" },
    { field: "electromagnetism", term: "電位の定義", desc: "V = -∫E·dr" },
    { field: "electromagnetism", term: "双極子モーメント", desc: "p = qd（極性電荷）" },
    { field: "electromagnetism", term: "フレネル係数", desc: "反射・透過の振幅比" },
  ],
  quantum: [
    { field: "quantum", term: "波動関数の規格化", desc: "∫|ψ|² = 1" },
    { field: "quantum", term: "エルミート演算子", desc: "物理量の演算子表現" },
    { field: "quantum", term: "生成消滅演算子", desc: "â|n⟩ = √n|n-1⟩" },
    { field: "quantum", term: "摂動論", desc: "小さな補正の1次・2次展開" },
    { field: "quantum", term: "選択則", desc: "行列要素の非ゼロ条件" },
  ],
  statistical: [
    { field: "statistical", term: "分配関数", desc: "Z = Σexp(-βE_i)" },
    { field: "statistical", term: "ボルツマン分布", desc: "P_i ∝ exp(-βE_i)" },
    { field: "statistical", term: "フェルミ分布", desc: "f(ε) = 1/(e^((ε-μ)/kT)+1)" },
    { field: "statistical", term: "状態密度", desc: "D(ε)dε: 単位エネルギー当たりの状態数" },
    { field: "statistical", term: "熱力学量", desc: "F, S, C_V を Z から導出" },
  ],
  math: [
    { field: "math", term: "固有値問題", desc: "det(A - λI) = 0" },
    { field: "math", term: "対角化", desc: "P⁻¹AP = D（D は対角）" },
    { field: "math", term: "行列指数関数", desc: "e^{At} = P·e^{Dt}·P⁻¹" },
    { field: "math", term: "留数定理", desc: "∮f(z)dz = 2πi·Σ Res" },
    { field: "math", term: "ジョルダンの補題", desc: "上半面閉路で $e^{iaz}$ が消える条件" },
  ],
  optics: [
    { field: "optics", term: "スネルの法則", desc: "n₁sinθ₁ = n₂sinθ₂" },
    { field: "optics", term: "ブリュースター角", desc: "tanθ_B = n（p偏光無反射）" },
  ],
  thermodynamics: [
    { field: "thermodynamics", term: "熱力学第1法則", desc: "dU = δQ + δW" },
    { field: "thermodynamics", term: "エントロピー", desc: "dS = δQ/T" },
  ],
  relativity: [
    { field: "relativity", term: "ローレンツ変換", desc: "4元ベクトルの時空回転" },
    { field: "relativity", term: "計量テンソル", desc: "g_μν（時空の幾何）" },
  ],
};
