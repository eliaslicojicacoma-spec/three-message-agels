import { ImageResponse } from "next/og";
import { books } from "@/content/books/books";

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
  const book = books.find((item) => item.slug === slug);

  const title = book?.title || "Livro";
  const author = book?.author || "Biblioteca Digital";
  const description =
    book?.description ||
    "Obras espirituais fundamentais para crescimento na fé, compreensão profética e aprofundamento bíblico.";
  const category = book?.category || "Livros";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#222222",
          color: "#F8F8F8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at left top, rgba(184,160,122,0.2), transparent 26%)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "64px 72px",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 280,
              height: 420,
              borderRadius: 24,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.24)",
            }}
          />

          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
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

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{
                  display: "flex",
                  maxWidth: 680,
                  fontSize: 72,
                  lineHeight: 1,
                  fontFamily: "serif",
                }}
              >
                {title}
              </div>

              <div
                style={{
                  display: "flex",
                  fontSize: 28,
                  color: "rgba(248,248,248,0.82)",
                  fontFamily: "sans-serif",
                }}
              >
                {author}
              </div>

              <div
                style={{
                  display: "flex",
                  maxWidth: 720,
                  fontSize: 26,
                  lineHeight: 1.4,
                  color: "rgba(248,248,248,0.72)",
                  fontFamily: "sans-serif",
                }}
              >
                {description}
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
                  fontSize: 22,
                  color: "#F8F8F8",
                }}
              >
                Três Mensagens Angélicas
              </div>

              <div
                style={{
                  display: "flex",
                  padding: "14px 22px",
                  borderRadius: 999,
                  background: "#B8A07A",
                  color: "#222222",
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                /books/{slug}
              </div>
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
