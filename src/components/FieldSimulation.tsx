import { Field } from "@/data/types";
import { Pendulum } from "./Pendulum";
import { WaveSim } from "./simulations/WaveSim";
import { FieldLinesSim } from "./simulations/FieldLinesSim";
import { OrbitSim } from "./simulations/OrbitSim";
import { QuantumSim } from "./simulations/QuantumSim";

/**
 * Pick a field-appropriate physics simulation for visual context.
 * Some fields share visuals (e.g., math, thermodynamics default to a neutral one).
 */
export function FieldSimulation({ field, className = "" }: { field: Field; className?: string }) {
  switch (field) {
    case "mechanics":
      // Choose orbit for anything about central force, pendulum otherwise.
      // For simplicity use orbit here (more visually interesting); pendulum is used on LP.
      return <OrbitSim className={className} />;
    case "electromagnetism":
    case "optics":
      return <FieldLinesSim className={className} />;
    case "quantum":
      return <QuantumSim className={className} />;
    case "statistical":
    case "thermodynamics":
      return <WaveSim className={className} />;
    case "math":
    case "relativity":
      return <OrbitSim className={className} />;
    default:
      return <Pendulum className={className} />;
  }
}
