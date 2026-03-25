import Link from "next/link";

const studies = [
  {
    slug: "profecias-de-daniel",
    title: "Profecias de Daniel",
    description:
      "Estudos introdutórios sobre os grandes temas proféticos do livro de Daniel e sua relevância para os últimos dias.",
    category: "Profecia",
    image:
      "https://static.wixstatic.com/media/c87fc3_8852073a61fb474daffbeb20512cd02a~mv2.png?originWidth=1152&originHeight=896",
  },
  {
    slug: "apocalipse-e-esperanca",
    title: "Apocalipse e Esperança",
    description:
      "Uma leitura clara e reverente das mensagens centrais do Apocalipse, com foco em Cristo, verdade e esperança.",
    category: "Apocalipse",
    image:
      "https://static.wixstatic.com/media/c87fc3_fa69aebd39ac4c32b3f1c20d27887dda~mv2.png?originWidth=1152&originHeight=896",
  },
  {
    slug: "fundamentos-da-fe",
    title: "Fundamentos da Fé",
    description:
      "Estudos essenciais para fortalecer a base espiritual, compreender a Bíblia e crescer na caminhada cristã.",
    category: "Doutrina",
    image:
      "https://static.wixstatic.com/media/c87fc3_3af72e5dad0f4c7593cb5d7a39acdd83~mv2.png?originWidth=1920&originHeight=1024",
  },
];

export default function StudiesPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8] text-[#333333]">
      <section className="section-wrap py-20 text-center">
        <span className="eyebrow">Estudos</span>

        <h1 className="title-display mt-4 text-5xl md:text-7xl">
          Estudos Bíblicos
        </h1>

        <p className="copy-muted mx-auto mt-6 max-w-2xl">
          Conteúdos preparados para aprofundar a compreensão das Escrituras,
          fortalecer a fé e conduzir o coração à verdade presente.
        </p>
      </section>

      <section className="section-wrap py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {studies.map((study) => (
            <article key={study.slug} className="premium-card group">
              <div className="overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="premium-cover"
                />
              </div>

              <div className="p-6">
                <span className="eyebrow text-xs">
                  {study.category}
                </span>

                <h2
                  className="mt-3 text-3xl leading-tight text-[#222222] transition-colors group-hover:text-[var(--gold)]"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  {study.title}
                </h2>

                <p className="copy-muted mt-4 line-3">
                  {study.description}
                </p>

                <div className="mt-6">
                  <Link
                    href={`/studies/${study.slug}`}
                    className="inline-flex items-center text-sm text-[var(--gold)] hover:opacity-80"
                  >
                    Ler estudo →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
