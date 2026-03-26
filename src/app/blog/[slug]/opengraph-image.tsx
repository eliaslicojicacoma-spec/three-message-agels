import { ImageResponse } from "next/og";
import { getArticle } from "@/content/blog/articles";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  const title = article?.title || "Artigo";
  const category = article?.category || "Artigos";
  const excerpt =
    article?.excerpt ||
    "Reflexões, estudos e análises bíblicas para fortalecer a fé e compreender os tempos.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          background: "#F8F8F8",
          color: "#222222",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(184,160,122,0.16), transparent 30%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-120px",
            width: 360,
            height: 360,
            borderRadius: 999,
            background: "rgba(184,160,122,0.16)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 72px",
            border: "1px solid rgba(34,34,34,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#B8A07A",
                fontFamily: "sans-serif",
              }}
            >
              {category}
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "#4A4A4A",
                fontFamily: "sans-serif",
              }}
            >
              Três Mensagens Angélicas
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                display: "flex",
                maxWidth: 930,
                fontSize: 72,
                lineHeight: 1,
                color: "#222222",
                fontFamily: "serif",
              }}
            >
              {title}
            </div>

            <div
              style={{
                display: "flex",
                maxWidth: 880,
                fontSize: 28,
                lineHeight: 1.4,
                color: "#4A4A4A",
                fontFamily: "sans-serif",
              }}
            >
              {excerpt}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "sans-serif",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 180,
                height: 2,
                background: "#B8A07A",
              }}
            />

            <div
              style={{
                display: "flex",
                padding: "14px 22px",
                borderRadius: 999,
                background: "#222222",
                color: "#F8F8F8",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              /blog/{slug}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
