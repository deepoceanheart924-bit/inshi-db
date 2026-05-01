import { ImageResponse } from "next/og";

/**
 * Editorial favicon: cream paper + ink seal "院".
 * Generated via next/og at request time, cached as PNG.
 */

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f6f3ec",
          color: "#0d0d0d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "3px solid #0d0d0d",
          fontFamily: "'Noto Serif JP', 'Yu Mincho', serif",
          fontSize: 44,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        院
      </div>
    ),
    { ...size }
  );
}
