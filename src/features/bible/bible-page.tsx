import Link from "next/link";
import { getBibleOverview } from "@/services/bible/overview";

export default function BiblePageFeature() {
  const { stats, totalBooks } = getBibleOverview();

  const loadedBooksCount =
    (stats as any)?.loadedBooksCount ??
    (stats as any)?.loadedBooks ??
    totalBooks;

  const loadedChaptersCount =
    (stats as any)?.loadedChaptersCount ??
    (stats as any)?.loadedChapters ??
    0;

  const loadedVersesCount =
    (stats as any)?.loadedVersesCount ??
    (stats as any)?.loadedVerses ??
    0;

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow-clean">Centro bíblico</p>
          <h1 className="section-title mt-5">Bíblia Sagrada</h1>
          <p className="mt-5 text-base leading-8 text-[var(--text-soft)]">
            Explora a Palavra de Deus por livros, capítulos e versículos. Esta área foi criada
            com uma base bíblica modular, preparada para leitura, pesquisa e expansão.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-clean p-6">
            <p className="text-sm font-semibold text-[var(--primary)]">Livros carregados</p>
            <p className="mt-2 text-3xl font-bold">{loadedBooksCount}</p>
            <p className="mt-2 text-sm text-[var(--text-soft)]">
              Livros disponíveis na estrutura atual da Bíblia.
            </p>
          </div>

          <div className="card-clean p-6">
            <p className="text-sm font-semibold text-[var(--primary)]">Capítulos</p>
            <p className="mt-2 text-3xl font-bold">{loadedChaptersCount}</p>
            <p className="mt-2 text-sm text-[var(--text-soft)]">
              Capítulos atualmente disponíveis para leitura.
            </p>
          </div>

          <div className="card-clean p-6">
            <p className="text-sm font-semibold text-[var(--primary)]">Versículos indexados</p>
            <p className="mt-2 text-3xl font-bold">{loadedVersesCount}</p>
            <p className="mt-2 text-sm text-[var(--text-soft)]">
              Versículos prontos para leitura e busca.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-clean p-6">
            <h2 className="text-2xl font-semibold">Leitura</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              Entra diretamente na experiência de leitura, pesquisa e navegação entre livros.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/bible/books" className="button-primary">
                Ver livros
              </Link>
              <Link href="/bible/search" className="button-dark">
                Pesquisar
              </Link>
            </div>
          </div>

          <div className="card-clean p-6">
            <h2 className="text-2xl font-semibold">Biblioteca pessoal</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              Acompanha favoritos, histórico e áreas pessoais de estudo bíblico.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/bible/library" className="button-primary">
                Minha biblioteca
              </Link>
              <Link href="/bible/verse-favorites" className="button-outline">
                Versículos favoritos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
