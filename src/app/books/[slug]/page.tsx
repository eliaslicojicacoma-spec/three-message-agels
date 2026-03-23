import { notFound } from "next/navigation";
import Link from "next/link";
import { getBook, getBooks } from "@/content/books";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getBooks().map((book) => ({
    slug: book.slug,
  }));
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = getBook(slug);

  if (!book) return notFound();

  return (
    <main className="bg-[var(--tam-bg)] text-[var(--tam-text)]">
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white/78 shadow-[0_14px_40px_rgba(17,17,17,0.06)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[420px_1fr]">
            <div className="bg-[#191919] p-6 md:p-8">
              <div className="overflow-hidden rounded-[1.5rem] shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
                  alt={book.title}
                  className="h-[520px] w-full object-cover"
                />
              </div>
            </div>

            <div className="p-6 md:p-10 lg:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b08d57]">
                Biblioteca Digital
              </p>

              <h1 className="mt-4 text-3xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#151515] md:text-6xl">
                {book.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9e9588]">
                <span>{book.author}</span>
                {book.year ? <span>{book.year}</span> : null}
                {book.category ? <span>{book.category}</span> : null}
              </div>

              <p className="mt-8 text-lg leading-9 text-[#5f584f]">
                {book.description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a
                  href={book.downloadUrl || "#"}
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#151515] px-6 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Baixar livro
                </a>

                <Link
                  href="/books"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-[#151515] transition hover:bg-[#f9f6f0]"
                >
                  Voltar à biblioteca
                </Link>
              </div>

              <div className="mt-10 rounded-[1.4rem] border border-black/6 bg-[#fbf8f2] p-5">
                <h2 className="text-xl font-semibold text-[#151515]">
                  Sobre esta obra
                </h2>

                <div className="mt-4 space-y-4 text-[1rem] leading-8 text-[#5f584f]">
                  <p>
                    Esta obra faz parte do acervo digital do portal e foi organizada
                    para leitura, formação cristã e aprofundamento espiritual.
                  </p>
                  <p>
                    O objetivo não é apenas disponibilizar conteúdo, mas apresentar
                    materiais que fortaleçam convicções, ampliem compreensão bíblica
                    e incentivem uma vida de fé mais consistente.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[1.4rem] border border-black/6 bg-white p-5">
                <h2 className="text-xl font-semibold text-[#151515]">
                  Detalhes rápidos
                </h2>

                <div className="mt-4 grid gap-3 text-sm text-[#5f584f] sm:grid-cols-2">
                  <p><strong className="text-[#151515]">Autor:</strong> {book.author}</p>
                  <p><strong className="text-[#151515]">Categoria:</strong> {book.category || "Geral"}</p>
                  <p><strong className="text-[#151515]">Ano:</strong> {book.year || "Não informado"}</p>
                  <p><strong className="text-[#151515]">Formato:</strong> PDF / Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
