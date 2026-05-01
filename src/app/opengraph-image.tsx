import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "院試DB — 物理系大学院 過去問データベース";

/* Editorial OG: cream paper, hairline frame, serif masthead, square seal. */
export default async function OGImage() {
  const ink = "#0d0d0d";
  const paper = "#f6f3ec";
  const muted = "#5a5852";
  const rule = "#bcb6a8";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: paper,
          color: ink,
          display: "flex",
          flexDirection: "column",
          padding: 64,
          fontFamily: "'Noto Serif JP', 'Yu Mincho', serif",
          position: "relative",
        }}
      >
        {/* Hairline page frame */}
        <div
          style={{
            position: "absolute",
            inset: 32,
            border: `1px solid ${rule}`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 38,
            border: `1px solid ${rule}`,
            opacity: 0.45,
            display: "flex",
          }}
        />

        {/* Top rule with edition micro-caps */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 24,
            paddingBottom: 16,
            borderBottom: `1.5px solid ${ink}`,
            color: muted,
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: 14,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
          }}
        >
          <span>VOL. III</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>No. 04 · April 2026</span>
          <span style={{ opacity: 0.4, flex: 1, textAlign: "center" }}>
            Physics · Graduate · Archive
          </span>
          <span>JPY 0</span>
        </div>

        {/* Main body — asymmetric grid */}
        <div
          style={{
            position: "relative",
            flex: 1,
            display: "flex",
            paddingTop: 56,
            gap: 48,
          }}
        >
          {/* Square seal */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 16,
              width: 180,
            }}
          >
            <div
              style={{
                width: 130,
                height: 130,
                border: `1.5px solid ${ink}`,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 6,
                  border: `0.5px solid ${ink}`,
                  opacity: 0.45,
                  display: "flex",
                }}
              />
              <span style={{ fontSize: 92, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em", display: "flex" }}>
                院
              </span>
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: 11,
                color: muted,
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                display: "flex",
              }}
            >
              EST. 2026
            </div>
          </div>

          {/* Hero text */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontStyle: "italic",
                color: muted,
                fontSize: 22,
                marginBottom: 24,
                display: "flex",
              }}
            >
              An open archive of past examinations <br />
              for Japanese physics graduate programs.
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontWeight: 700,
                fontSize: 128,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
              }}
            >
              <span style={{ display: "flex" }}>院試を、</span>
              <span style={{ display: "flex", marginTop: -8 }}>オープンに。</span>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            position: "relative",
            paddingTop: 18,
            borderTop: `1px solid ${ink}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            color: muted,
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: 14,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            inshi-db.vercel.app
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: 14,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: ink,
              display: "flex",
            }}
          >
            INSHI · DB
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
