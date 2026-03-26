import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          background: "#222222",
          color: "#F8F8F8",
          overflow: "hidden",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 20%, rgba(184,160,122,0.24), transparent 28%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 72px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#B8A07A",
            }}
          >
            Voz Profética Global
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                fontSize: 88,
                lineHeight: 0.95,
                color: "#F8F8F8",
              }}
            >
              Três Mensagens
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 88,
                lineHeight: 0.95,
                color: "#B8A07A",
                fontStyle: "italic",
              }}
            >
              Angélicas
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 820,
                fontSize: 28,
                lineHeight: 1.4,
                color: "rgba(248,248,248,0.82)",
                fontFamily: "sans-serif",
              }}
            >
              Estudos bíblicos, livros e reflexão espiritual para fortalecer a fé e preparar um povo para o breve retorno de Cristo.
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
                fontSize: 24,
                color: "#F8F8F8",
              }}
            >
              three-angels-message.vercel.app
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
              Evangelho Eterno
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
