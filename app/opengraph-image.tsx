import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#06060a",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(124,92,255,0.5), transparent 45%), radial-gradient(circle at 85% 80%, rgba(63,182,255,0.4), transparent 45%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#9a9aa6", letterSpacing: 2 }}>
          {site.role.toUpperCase()}
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            marginTop: 16,
            lineHeight: 1.05,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#c7c7d1",
            marginTop: 24,
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 40,
            fontSize: 26,
            color: "#9a9aa6",
          }}
        >
          LLMs · RAG · Agentic AI · Production ML
        </div>
      </div>
    ),
    { ...size }
  );
}
