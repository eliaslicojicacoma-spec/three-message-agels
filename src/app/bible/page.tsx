import Link from "next/link";
import type { Metadata } from "next";
import {
  getBibleChaptersCount,
  getBibleDataBooksCount,
  getBibleFeaturedLoadedBooks,
  getBiblePendingBooksMeta,
  getBibleVersesCount,
} from "@/lib/bible";
import BibleSmartActions from "@/components/bible/bible-smart-actions";

export const metadata: Metadata = {
  title: "Bíblia Sagrada",
  description:
    "Leia a Bíblia por livros, capítulos e versículos numa estrutura digital organizada e pronta para crescer.",
};

const quickSections = [
  {
    title: "Todos os livros",
    href: "/bible/books",
    description: "Lista completa dos livros da Bíblia.",
  },
  {
    title: "Pesquisa bíblica",
    href: "/bible/search",
    description: "Procura palavras e expressões nos versículos disponíveis.",
  },
  {
    title: "Genesis 1",
    href: "/bible/genesis/1",
    description: "Começa pelo princípio da criação.",
  },
  {
    title: "Revelation 14",
    href: "/bible/revelation/14",
    description: "Lê um capítulo central para a mensagem profética.",
  },
  {
    title: "Importação bíblica",
    href: "/bible/import",
    description: "Vê a base preparada para expansão e importação em escala.",
  },
  {
    title: "Minha biblioteca",
    href: "/bible/library",
    description: "Acede aos teus favoritos e histórico de leitura bíblica.",
  },
  {
    title: "Versículo do dia",
    href: "/verse-of-day",
    description: "Lê a palavra devocional diária e partilha facilmente.",
  },
  {
    title: "Versículos favoritos",
    href: "/bible/verse-favorites",
    description: "Acede aos versículos que guardaste para meditação e partilha.",
  },
];

export default function BibleHomePage() {
  const featuredBooks = getBibleFeaturedLoadedBooks();
  const pendingBooks = getBiblePendingBooksMeta().slice(0, 12);

  const loadedBooksCount = getBibleDataBooksCount();
  const loadedChaptersCount = getBibleChaptersCount();
  const loadedVersesCount = getBibleVersesCount();

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="section-shell">
        <div className="max-w-4xl">
          <p className="eyebrow-clean">Centro bíblico</p>
          <h1 className="section-title mt-5">Bíblia Sagrada</h1>
          <p className="mt-5 text-base leading-8 text-[var(--text-soft)] md:text-lg">
            Explora a Palavra de Deus por livros, capítulos e versículos. Esta área está
            a crescer com uma base bíblica modular, preparada para leitura, pesquisa e
            expansão até à Bíblia completa.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/bible/books" className="button-main">
              Ver todos os livros
            </Link>

            <Link href="/bible/search" className="button-ghost">
              Abrir pesquisa bíblica
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="card-clean p-6">
            <p className="text-sm font-semibold text-[var(--primary)]">Livros carregados</p>
            <p className="mt-3 text-3xl font-bold">{loadedBooksCount}</p>
            <p className="mt-2 text-sm text-[var(--text-soft)]">
              Livros já ligados à nova base bíblica.
            </p>
          </div>

          <div className="card-clean p-6">
            <p className="text-sm font-semibold text-[var(--primary)]">Capítulos disponíveis</p>
            <p className="mt-3 text-3xl font-bold">{loadedChaptersCount}</p>
            <p className="mt-2 text-sm text-[var(--text-soft)]">
              Capítulos atualmente disponíveis na leitura.
            </p>
          </div>

          <div className="card-clean p-6">
            <p className="text-sm font-semibold text-[var(--primary)]">Versículos indexados</p>
            <p className="mt-3 text-3xl font-bold">{loadedVersesCount}</p>
            <p className="mt-2 text-sm text-[var(--text-soft)]">
              Versículos já prontos para leitura e busca.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--text-soft)]">Ações rápidas</p>
          <h2 className="section-title mt-2 text-3xl">Leitura inteligente</h2>
        </div>

        <div className="mt-8">
          <BibleSmartActions />
        </div>
      </section>

      <section className="mt-14">
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--text-soft)]">Acesso rápido</p>
          <h2 className="section-title mt-2 text-3xl">Começa por aqui</h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quickSections.map((item) => (
            <Link key={item.href} href={item.href} className="card-clean p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                {item.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-[var(--primary)]">
                Abrir seção
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--text-soft)]">Leitura com dados reais</p>
          <h2 className="section-title mt-2 text-3xl">Livros já carregados</h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredBooks.map((book) => (
            <Link key={book.slug} href={`/bible/${book.slug}`} className="card-clean p-6">
              <p className="text-sm text-[var(--text-soft)]">
                {book.testament === "Old" ? "Antigo Testamento" : "Novo Testamento"}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{book.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                Explora capítulos já ligados à nova base bíblica.
              </p>
              <p className="mt-4 text-sm font-semibold text-[var(--primary)]">Abrir livro</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--text-soft)]">Expansão da base</p>
          <h2 className="section-title mt-2 text-3xl">Livros em preparação</h2>
          <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">
            Estes livros já fazem parte da estrutura e serão ligados progressivamente à nova
            base de dados da Bíblia completa.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pendingBooks.map((book) => (
            <div key={book.slug} className="card-clean p-5">
              <h3 className="text-lg font-semibold">{book.name}</h3>
              <p className="mt-2 text-sm text-[var(--text-soft)]">
                {book.chapters} capítulo{book.chapters > 1 ? "s" : ""}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
