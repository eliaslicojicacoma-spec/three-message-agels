import Link from "next/link";
import type { Metadata } from "next";
import { libraryContent } from "@/content/library";

export const metadata: Metadata = {
  title: "Livros",
  description:
    "Explore uma biblioteca cristã e adventista com livros para leitura, estudo e crescimento espiritual.",
};

export default function BooksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Biblioteca adventista</p>
          <h1 className="section-title mt-5 text-4xl font-bold md:text-5xl">Livros</h1>
          <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
            Biblioteca inicial com obras cristãs e adventistas organizadas por tema,
            autor, idioma e formato, pronta para crescer com novos títulos.
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {libraryContent.map((item) => (
          <Link key={item.slug} href={`/books/${item.slug}`} className="premium-card">
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-[var(--stroke)] px-3 py-1">
                {item.category}
              </span>
              <span className="rounded-full border border-[var(--stroke)] px-3 py-1">
                {item.language}
              </span>
              <span className="rounded-full border border-[var(--stroke)] px-3 py-1">
                {item.format}
              </span>
            </div>

            <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm font-medium">{item.author}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {item.description}
            </p>
            <p className="mt-4 text-sm font-semibold text-[var(--brand)]">Abrir livro</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
