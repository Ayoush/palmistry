import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PalmAI — AI palm reader · 6 traditions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(ellipse at top, #1a1a1f 0%, #0b0b0d 60%)",
          padding: 80,
          color: "#f5efe2",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#c5a059",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          ✦ Six Traditions · One Palm
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 50,
            fontSize: 110,
            lineHeight: 1,
            fontWeight: 600,
          }}
        >
          <span>Read your palm</span>
          <span
            style={{
              backgroundImage:
                "linear-gradient(135deg, #f3dbab 0%, #e9c176 50%, #9d7be0 100%)",
              backgroundClip: "text",
              color: "transparent",
              fontStyle: "italic",
            }}
          >
            like the ancients did.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#b9ad97",
            fontSize: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ color: "#e9c176", fontSize: 36, fontWeight: 600 }}>
              PalmAI
            </span>
            <span>Hindu · Western · Chinese · Tibetan · Tarot · Kabbalistic</span>
          </div>
          <div style={{ color: "#e9c176", fontSize: 26 }}>getpalmai.app</div>
        </div>
      </div>
    ),
    size,
  );
}
