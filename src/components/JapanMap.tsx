"use client";

import Link from "next/link";
import { useState } from "react";
import { universities } from "@/data/universities";
import { problems } from "@/data/problems";
import { JAPAN_PATH_D, projectLonLat } from "@/data/japan-path";

/**
 * Japan map with geographically accurate outline.
 * The outline is pre-generated from dataofjapan/land topojson via
 * scripts/generate-japan-path.mjs, simplified and Mercator-projected.
 * University pins use the same Mercator projection for consistency.
 */

const CITIES: Record<string, { lat: number; lon: number; city: string }> = {
  hokkaido: { lat: 43.07, lon: 141.35, city: "札幌" },
  tohoku: { lat: 38.27, lon: 140.87, city: "仙台" },
  tsukuba: { lat: 36.08, lon: 140.11, city: "つくば" },
  todai: { lat: 35.71, lon: 139.76, city: "東京（本郷）" },
  titech: { lat: 35.61, lon: 139.68, city: "東京（大岡山）" },
  ynu: { lat: 35.47, lon: 139.61, city: "横浜" },
  nagoya: { lat: 35.15, lon: 136.97, city: "名古屋" },
  kyodai: { lat: 35.03, lon: 135.78, city: "京都" },
  osaka: { lat: 34.82, lon: 135.52, city: "大阪（豊中）" },
  kyushu: { lat: 33.63, lon: 130.43, city: "福岡" },
};

export function JapanMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative mx-auto max-w-3xl">
      <svg
        viewBox="0 0 800 900"
        className="w-full h-auto"
        aria-label="大学位置マップ"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="jp-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.15 260)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="oklch(0.55 0.15 260)" stopOpacity="0.08" />
          </linearGradient>
          <filter id="pin-shadow">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Accurate Japan outline */}
        <path
          d={JAPAN_PATH_D}
          fill="url(#jp-fill)"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* University pins */}
        {universities.map((uni) => {
          const city = CITIES[uni.slug];
          if (!city) return null;
          const { x, y } = projectLonLat(city.lon, city.lat);
          const count = problems.filter((p) => p.universitySlug === uni.slug).length;
          const isHovered = hovered === uni.slug;
          return (
            <Link key={uni.slug} href={`/universities/${uni.slug}`}>
              <g
                onMouseEnter={() => setHovered(uni.slug)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
              >
                {/* Glow */}
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 28 : 16}
                  fill="oklch(0.55 0.2 260)"
                  opacity={isHovered ? 0.35 : 0.2}
                  filter="url(#pin-shadow)"
                  className="transition-all duration-200"
                />
                {/* Pin base */}
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 11 : 9}
                  fill="oklch(0.5 0.22 260)"
                  stroke="white"
                  strokeWidth={2}
                  className="transition-all duration-200"
                />
                {/* Inner dot */}
                <circle cx={x} cy={y} r={2.2} fill="white" />
                {/* Count badge */}
                <circle
                  cx={x + 14}
                  cy={y - 12}
                  r={10}
                  fill="oklch(0.6 0.22 330)"
                  stroke="white"
                  strokeWidth={1.5}
                />
                <text
                  x={x + 14}
                  y={y - 8}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight="bold"
                  fill="white"
                >
                  {count}
                </text>
                {/* Label with outline for readability */}
                <text
                  x={x}
                  y={y + 28}
                  textAnchor="middle"
                  fontSize={isHovered ? 15 : 13}
                  fontWeight={isHovered ? 700 : 500}
                  fill="currentColor"
                  opacity={isHovered ? 1 : 0.8}
                  className="transition-all duration-200 pointer-events-none"
                  stroke="var(--background)"
                  strokeWidth={3}
                  paintOrder="stroke"
                >
                  {uni.shortName}
                </text>
              </g>
            </Link>
          );
        })}

        {/* Compass */}
        <g transform="translate(740, 60)" opacity="0.4">
          <circle cx="0" cy="0" r="22" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 0 -18 L 4 0 L 0 18 L -4 0 Z" fill="currentColor" />
          <text x="0" y="-26" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">
            N
          </text>
        </g>

        {/* Scale bar (rough — 200 km in central Japan) */}
        <g transform="translate(50, 830)" opacity="0.4">
          <line x1="0" y1="0" x2="60" y2="0" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="-4" x2="60" y2="4" stroke="currentColor" strokeWidth="1" />
          <text x="30" y="15" textAnchor="middle" fontSize="9" fill="currentColor">
            ≈ 200 km
          </text>
        </g>
      </svg>

      {/* Hover info card */}
      {hovered &&
        (() => {
          const uni = universities.find((u) => u.slug === hovered);
          const city = CITIES[hovered];
          if (!uni || !city) return null;
          const { x, y } = projectLonLat(city.lon, city.lat);
          const count = problems.filter((p) => p.universitySlug === hovered).length;
          return (
            <div
              className="absolute pointer-events-none rounded-xl border bg-popover shadow-xl p-3.5 text-xs z-10"
              style={{
                left: `${(x / 800) * 100}%`,
                top: `${(y / 900) * 100}%`,
                transform: "translate(-50%, calc(-100% - 30px))",
                minWidth: 200,
              }}
            >
              <div className="font-bold">{uni.name}</div>
              <div className="text-muted-foreground mt-0.5">{uni.department}</div>
              <div className="text-muted-foreground/70 mt-1 text-[10px]">
                📍 {city.city}（{city.lat.toFixed(2)}°N, {city.lon.toFixed(2)}°E）
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-primary font-semibold">{count} 問収録</span>
                <span className="text-[10px] text-muted-foreground">クリックで開く</span>
              </div>
            </div>
          );
        })()}
    </div>
  );
}
