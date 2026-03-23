import { notFound } from "next/navigation";
import Link from "next/link";
import { getStudies } from "@/content/studies";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getStudies().map((study) => ({
    slug: study.slug,
  }));
}

export default async function StudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getStudies().find((item) => item.slug === slug);

  if (!study) return notFound();

  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white/78 shadow-[0_14px_40px_rgba(17,17,17,0.06)] backdrop-blur-sm">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop"
            alt={study.title}
            className="h-[300px] w-full object-cover md:h-[420px]"
          />

          <div className="mx-auto max-w-4xl px-5 py-8 md:px-10 md:py-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b08d57]">
              {study.category}
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#151515] md:text-6xl">
              {study.title}
            </h1>

            <p className="mt-8 text-lg leading-9 text-[#5f584f]">
              {study.description}
            </p>

            <div className="mt-10 rounded-[1.4rem] border border-black/6 bg-[#fbf8f2] p-5">
              <h2 className="text-xl font-semibold text-[#151515]">
                Introdução ao estudo
              </h2>

              <div className="mt-4 space-y-4 text-[1rem] leading-8 text-[#5f584f]">
                <p>
                  Este estudo foi organizado para aprofundar a compreensão bíblica e
                  oferecer base sólida para reflexão, ensino e crescimento espiritual.
                </p>
                <p>
                  O objetivo não é apenas apresentar informação, mas ajudar o leitor
                  a conectar doutrina, prática cristã e esperança profética.
                </p>
              </div>
            </div>

            <article className="mt-10">
              <div className="space-y-6 text-[1.02rem] leading-9 text-[#4f4941]">
                <p>
                  Ao estudar este tema, o ideal é avançar com espírito de oração,
                  atenção às Escrituras e disposição para aplicar a verdade à vida.
                </p>
                <p>
                  O crescimento espiritual não acontece apenas por contacto com conteúdo,
                  mas pela resposta sincera à luz recebida. Por isso, cada estudo aqui
                  deve servir como convite à transformação e não apenas à leitura.
                </p>
                <p>
                  Com o tempo, esta página poderá incluir referências bíblicas, secções
                  temáticas, perguntas de revisão e recursos complementares para estudo individual
                  e em grupo.
                </p>
              </div>
            </article>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/studies"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#151515] px-6 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Voltar aos estudos
              </Link>

              <Link
                href="/blog"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-[#151515] transition hover:bg-[#f9f6f0]"
              >
                Ler artigos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
