import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "院試DB — 大学院入試 過去問データベース";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          padding: 80,
        }}
      >
        {/* Decorative orbs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
            padding: "10px 28px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "white",
              color: "#1e1b4b",
              borderRadius: 10,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            院
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: "0.05em", display: "flex" }}>
            院試DB
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 100,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>院試過去問</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            データベース
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            marginTop: 40,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.02em",
            display: "flex",
          }}
        >
          物理学・数学の院試対策を、もっとオープンに
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.1em",
            display: "flex",
          }}
        >
          inshi-db.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
