import { ImageResponse } from "next/og";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  let title = "Blog Post";
  let excerpt = "";

  try {
    const post = await prisma.post.findUnique({
      where: { slug: params.slug },
      select: { title: true, excerpt: true },
    });
    if (post) {
      title = post.title;
      excerpt = post.excerpt || "";
    }
  } catch {
    // Use defaults if database unavailable
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1a1a1a",
          padding: 60,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              color: "#fcba70",
              marginBottom: 20,
              fontFamily: "monospace",
            }}
          >
            $ cat blog/{params.slug}.md
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              maxWidth: "90%",
            }}
          >
            {title.length > 60 ? title.substring(0, 60) + "..." : title}
          </div>
          {excerpt && (
            <div
              style={{
                fontSize: 24,
                color: "#888888",
                marginTop: 20,
                maxWidth: "80%",
              }}
            >
              {excerpt.length > 120 ? excerpt.substring(0, 120) + "..." : excerpt}
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "#fcba70",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: 700,
                color: "#1a1a1a",
              }}
            >
              M
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 20, color: "#ffffff", fontWeight: 600 }}>
                Marco Braun
              </span>
              <span style={{ fontSize: 16, color: "#666666" }}>
                ML Engineer @ OVHcloud
              </span>
            </div>
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#666666",
              fontFamily: "monospace",
            }}
          >
            browniebytes.me
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
