import { ImageResponse } from "next/og";

export const alt = "Toronto AI Consulting | AI Consulting for Toronto Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow orb top-right */}
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-80px",
            width: "480px",
            height: "480px",
            background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />

        {/* Glow orb bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-140px",
            left: "-60px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(167,139,250,0.22) 0%, transparent 70%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />

        {/* Top content */}
        <div style={{ display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(16,185,129,0.15)",
              border: "1px solid rgba(16,185,129,0.45)",
              borderRadius: "100px",
              padding: "6px 18px",
              marginBottom: "28px",
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#10B981",
                borderRadius: "50%",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                color: "#10B981",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Toronto AI Consulting
            </span>
          </div>

          {/* Headline — two lines for satori compatibility */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
              gap: "0px",
            }}
          >
            <span
              style={{
                fontSize: "68px",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-2.5px",
                color: "white",
              }}
            >
              Build Your AI
            </span>
            <span
              style={{
                fontSize: "68px",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-2.5px",
                color: "#a78bfa",
              }}
            >
              Operations Stack
            </span>
          </div>

          {/* Subheadline */}
          <span
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.70)",
              lineHeight: 1.5,
              maxWidth: "700px",
            }}
          >
            Hands-on AI implementation for Toronto SMBs. MCP connectors, Claude Code workflows, and custom agents — shipped fast.
          </span>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Feature dots */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            {(
              [
                { color: "#818cf8", label: "MCP + API Connectors" },
                { color: "#a78bfa", label: "Claude Code Workflows" },
                { color: "#c084fc", label: "Custom AI Agents" },
              ] as const
            ).map(({ color, label }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    background: color,
                    borderRadius: "50%",
                    display: "flex",
                  }}
                />
                <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.62)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Domain */}
          <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.38)" }}>
            torontoaiconsulting.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
