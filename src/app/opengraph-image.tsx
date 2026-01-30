import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Marco Braun | Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: 20,
            }}
          >
            Marco Braun
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#fcba70",
              fontWeight: 500,
            }}
          >
            Machine Learning Engineer
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#666666",
              marginTop: 20,
            }}
          >
            Go · Rust · Kubernetes · AI Infrastructure
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#fcba70",
            }}
          />
          <span style={{ fontSize: 20, color: "#999999" }}>
            browniebytes.me
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
