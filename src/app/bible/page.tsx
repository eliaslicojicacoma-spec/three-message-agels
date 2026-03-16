import Link from "next/link";
import type { Metadata } from "next";
import { featuredBibleBooks } from "@/content/bible";

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
    title: "Genesis 1",
    href: "/bible/genesis/1",
    description: "Começa pelo início da criação.",
  },
  {
    title: "Matthew 1",
    href: "/bible/matthew/1",
    description: "Entra na narrativa do nascimento de Cristo.",
  },
  {
    title: "John 1",
    href: "/bible/john/1",
    description: "Lê um dos capítulos mais profundos do evangelho.",
  },
];

export default function BibleHomePage() {
  const oldTestament = featuredBibleBooks.filter((book) => book.testament === "Old");
  const newTestament = featuredBibleBooks.filter((book) => book.testament === "New");

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Centro bíblico</p>
          <h1 className="section-title mt-5 text-4xl font-bold md:text-5xl">Bíblia Sagrada</h1>
          <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
            Explora a Palavra de Deus por livros, capítulos e versículos. Esta área foi
            preparada para servir como uma Bíblia digital organizada, rápida e pronta
            para crescer dentro do projeto missionário.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/bible/books" className="premium-button-primary">
              Ver todos os livros
            </Link>

            <Link href="/bible/genesis/1" className="premium-button-secondary">
              Começar em Genesis 1
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--muted)]">Acesso rápido</p>
          <h2 className="section-title gold-line mt-2 text-3xl font-bold">Começa por aqui</h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quickSections.map((item) => (
            <Link key={item.href} href={item.href} className="premium-card">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-[var(--brand)]">Abrir seção</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="section-shell">
          <h2 className="text-2xl font-semibold">Antigo Testamento em destaque</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {oldTestament.map((book) => (
              <Link key={book.slug} href={`/bible/${book.slug}/1`} className="premium-card">
                <h3 className="text-lg font-semibold">{book.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {book.chapters} capítulo{book.chapters > 1 ? "s" : ""}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="section-shell">
          <h2 className="text-2xl font-semibold">Novo Testamento em destaque</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {newTestament.map((book) => (
              <Link key={book.slug} href={`/bible/${book.slug}/1`} className="premium-card">
                <h3 className="text-lg font-semibold">{book.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {book.chapters} capítulo{book.chapters > 1 ? "s" : ""}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
