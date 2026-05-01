import { ImageResponse } from "next/og";

/**
 * Apple touch icon (iOS home screen / bookmark): editorial 院 seal.
 * Larger than the favicon, so the secondary inset frame is preserved.
 */

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f6f3ec",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          fontFamily: "'Noto Serif JP', 'Yu Mincho', serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "5px solid #0d0d0d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 8,
              border: "1px solid #0d0d0d",
              opacity: 0.45,
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: 130,
              fontWeight: 700,
              color: "#0d0d0d",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              display: "flex",
              position: "relative",
            }}
          >
            院
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
