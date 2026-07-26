import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#07111f",
          backgroundImage:
            "linear-gradient(to right, #16263a 1px, transparent 1px), linear-gradient(to bottom, #16263a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
            <path
              d="M4 20.5C7.2 17.5 11.3 15.8 16 15.8s8.8 1.7 12 4.7"
              stroke="#3487f7"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M4 24.5C7.6 21.1 11.6 19.3 16 19.3s8.4 1.8 12 5.2"
              stroke="#47c6d9"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.7"
            />
            <circle cx="16" cy="11.5" r="1.8" fill="#3487f7" />
          </svg>
          <span
            style={{
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "#f5f7fa",
            }}
          >
            MOONAR
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 54,
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#f5f7fa",
            maxWidth: 900,
          }}
        >
          Engineering Intelligence for Tyre Development
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 24,
            color: "#aab4c3",
            maxWidth: 780,
          }}
        >
          AI-powered engineering software for tyre design, mould automation
          and performance prediction.
        </div>
      </div>
    ),
    { ...size },
  );
}
