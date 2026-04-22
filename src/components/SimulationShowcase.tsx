"use client";

import { Pendulum } from "./Pendulum";
import { WaveSim } from "./simulations/WaveSim";
import { FieldLinesSim } from "./simulations/FieldLinesSim";
import { OrbitSim } from "./simulations/OrbitSim";
import { QuantumSim } from "./simulations/QuantumSim";

const SIMS = [
  { title: "振り子", subtitle: "剛体振り子 / RK4", field: "力学", component: Pendulum, hue: "260" },
  { title: "軌道", subtitle: "ケプラー運動", field: "力学", component: OrbitSim, hue: "330" },
  { title: "電場", subtitle: "双極子のフロー", field: "電磁気", component: FieldLinesSim, hue: "30" },
  { title: "波動", subtitle: "2波の重ね合わせ", field: "統計", component: WaveSim, hue: "200" },
  { title: "量子", subtitle: "調和振動子", field: "量子", component: QuantumSim, hue: "180" },
];

export function SimulationShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {SIMS.map((sim) => {
        const Comp = sim.component;
        return (
          <div
            key={sim.title}
            className="group relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style={
              {
                "--glow": `oklch(0.6 0.2 ${sim.hue})`,
              } as React.CSSProperties
            }
          >
            {/* Glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
              style={{
                background: `radial-gradient(circle at 50% 50%, var(--glow), transparent 70%)`,
              }}
            />

            {/* Label */}
            <div className="relative p-4 border-b flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {sim.field}
                </p>
                <h3 className="text-sm font-bold mt-0.5">{sim.title}</h3>
              </div>
              <div
                className="size-6 rounded-md flex items-center justify-center"
                style={{ background: `oklch(0.6 0.2 ${sim.hue} / 0.15)`, color: `oklch(0.5 0.2 ${sim.hue})` }}
              >
                <div className="size-1.5 rounded-full animate-pulse" style={{ background: "currentColor" }} />
              </div>
            </div>

            {/* Sim */}
            <div className="p-3 text-foreground">
              <Comp className="w-full h-32 mx-auto" />
            </div>

            <div className="px-4 pb-3 text-[11px] text-muted-foreground">
              {sim.subtitle}
            </div>
          </div>
        );
      })}
    </div>
  );
}
