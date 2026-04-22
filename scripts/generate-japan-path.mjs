/**
 * One-time script: load Japan topojson → simplify → project to SVG.
 *
 * Usage:
 *   node scripts/generate-japan-path.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { feature, merge } from "topojson-client";
import { presimplify, simplify } from "topojson-simplify";
import { geoMercator, geoPath } from "d3-geo";

const topoRaw = JSON.parse(readFileSync("./japan.topojson", "utf8"));

// Simplify: presimplify computes weights, simplify drops arcs below threshold
const topoPre = presimplify(topoRaw);
// Tune threshold for visual quality vs size
const topoSimple = simplify(topoPre, 0.0001);

// Merge all prefecture polygons into one (we only need the country outline)
const prefectures = topoSimple.objects.japan.geometries;
const merged = merge(topoSimple, prefectures);

// Projection: fit merged outline into 800 × 900
const projection = geoMercator().fitSize([800, 900], merged);

// Path generator with reduced precision
const pathGen = geoPath(projection);
let d = pathGen(merged);

// Reduce coordinate precision (1 decimal is plenty for 800-wide viewBox)
d = d.replace(/(\d+\.\d+)/g, (m) => Number(m).toFixed(1));

const scale = projection.scale();
const [tx, ty] = projection.translate();

const js = `// GENERATED FILE — do not edit by hand. Run scripts/generate-japan-path.mjs to regenerate.
// Accurate Japan outline (from dataofjapan/land topojson, simplified + Mercator projected to 800×900)
export const JAPAN_PATH_D = ${JSON.stringify(d)};

// Mercator projection parameters used to produce JAPAN_PATH_D.
export const PROJECTION = {
  scale: ${scale},
  translate: [${tx}, ${ty}],
};

/**
 * Given longitude/latitude, return SVG (x, y) using the same Mercator
 * projection as the outline.
 */
export function projectLonLat(lon: number, lat: number): { x: number; y: number } {
  const lambda = (lon * Math.PI) / 180;
  const phi = (lat * Math.PI) / 180;
  const k = PROJECTION.scale;
  const [tx, ty] = PROJECTION.translate;
  const x = lambda * k + tx;
  const y = -Math.log(Math.tan(Math.PI / 4 + phi / 2)) * k + ty;
  return { x, y };
}
`;

writeFileSync("src/data/japan-path.ts", js, "utf8");
console.log("Wrote src/data/japan-path.ts — path length:", d.length, "bytes");
console.log("Projection scale:", scale, "translate:", [tx, ty]);
