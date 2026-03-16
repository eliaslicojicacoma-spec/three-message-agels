"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { bibleBooks } from "@/content/bible";
import { searchBibleVerses } from "@/lib/bible";

type TestamentFilter = "all" | "Old" | "New";

export default function BibleSearchPage() {
  const [query, setQuery] = useState("");
  const [testament, setTestament] = useState<TestamentFilter>("all");
  const [bookSlug, setBookSlug] = useState("all");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    return searchBibleVerses(query)
      .filter((verse) => {
        if (testament !== "all" && verse.testament !== testament) return false;
        if (bookSlug !== "all" && verse.slug !== bookSlug) return false;
        return true;
      })
      .slice(0, 100);
  }, [query, testament, bookSlug]);

  const filteredBooks = useMemo(() => {
    if (testament === "all") return bibleBooks;
    return bibleBooks.filter((book) => book.testament === testament);
  }, [testament]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <section className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow-clean">Ferramenta bíblica</p>
          <h1 className="section-title mt-5">Pesquisa Bíblica</h1>
          <p className="mt-5 text-base leading-8 text-[var(--text-soft)]">
            Pesquisa palavras e expressões dentro dos versículos disponíveis no sistema,
            com filtros por testamento e livro.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="Pesquisar palavra na Bíblia..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 outline-none"
          />

          <select
            value={testament}
            onChange={(e) => {
              const value = e.target.value as TestamentFilter;
              setTestament(value);
              setBookSlug("all");
            }}
            className="w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 outline-none"
          >
            <option value="all">Todo o cânon</option>
            <option value="Old">Antigo Testamento</option>
            <option value="New">Novo Testamento</option>
          </select>

          <select
            value={bookSlug}
            onChange={(e) => setBookSlug(e.target.value)}
            className="w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 outline-none"
          >
            <option value="all">Todos os livros</option>
            {filteredBooks.map((book) => (
              <option key={book.slug} value={book.slug}>
                {book.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <button onClick={() => setQuery("Deus")} className="button-ghost">Deus</button>
          <button onClick={() => setQuery("Senhor")} className="button-ghost">Senhor</button>
          <button onClick={() => setQuery("fé")} className="button-ghost">fé</button>
          <button onClick={() => setQuery("amor")} className="button-ghost">amor</button>
          <button onClick={() => setQuery("oração")} className="button-ghost">oração</button>
          <button onClick={() => setQuery("evangelho")} className="button-ghost">evangelho</button>
          <button onClick={() => setQuery("Cristo")} className="button-ghost">Cristo</button>
          <button onClick={() => setQuery("não temas")} className="button-ghost">não temas</button>
        </div>
      </section>

      <section className="mt-8">
        {query.trim() === "" ? (
          <div className="card-clean p-6">
            <p className="text-[var(--text-soft)]">
              Escreve uma palavra para começar a pesquisar.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="card-clean p-6">
            <p className="text-[var(--text-soft)]">
              Nenhum resultado encontrado para <strong>{query}</strong>.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-[var(--text-soft)]">
                {results.length} resultado{results.length > 1 ? "s" : ""} encontrado{results.length > 1 ? "s" : ""}
              </p>

              <p className="text-sm text-[var(--text-soft)]">
                Filtro:{" "}
                <strong>
                  {testament === "all"
                    ? "Todo o cânon"
                    : testament === "Old"
                    ? "Antigo Testamento"
                    : "Novo Testamento"}
                </strong>
                {bookSlug !== "all" && (
                  <>
                    {" · "}
                    <strong>
                      {bibleBooks.find((book) => book.slug === bookSlug)?.name ?? bookSlug}
                    </strong>
                  </>
                )}
              </p>
            </div>

            {results.map((verse, index) => (
              <div
                key={`${verse.slug}-${verse.chapter}-${verse.verse}-${index}`}
                className="card-clean p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">
                      {verse.book} {verse.chapter}:{verse.verse}
                    </p>
                    <p className="mt-1 text-xs text-[var(--text-soft)]">
                      {verse.testament === "Old" ? "Antigo Testamento" : "Novo Testamento"}
                    </p>
                  </div>

                  <Link
                    href={`/bible/${verse.slug}/${verse.chapter}#verse-${verse.verse}`}
                    className="button-ghost"
                  >
                    Abrir versículo
                  </Link>
                </div>

                <p className="mt-3 leading-8 text-[var(--text-soft)]">{verse.text}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
