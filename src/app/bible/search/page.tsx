"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { searchBibleVerses } from "@/lib/bible";

export default function BibleSearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchBibleVerses(query).slice(0, 50);
  }, [query]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <section className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow-clean">Ferramenta bíblica</p>
          <h1 className="section-title mt-5">Pesquisa Bíblica</h1>
          <p className="mt-5 text-base leading-8 text-[var(--text-soft)]">
            Pesquisa palavras e expressões dentro dos versículos disponíveis no sistema.
          </p>
        </div>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Pesquisar palavra na Bíblia..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 outline-none"
          />

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <button onClick={() => setQuery("Deus")} className="button-ghost">Deus</button>
            <button onClick={() => setQuery("luz")} className="button-ghost">luz</button>
            <button onClick={() => setQuery("Senhor")} className="button-ghost">Senhor</button>
            <button onClick={() => setQuery("evangelho")} className="button-ghost">evangelho</button>
            <button onClick={() => setQuery("Cristo")} className="button-ghost">Cristo</button>
            <button onClick={() => setQuery("fé")} className="button-ghost">fé</button>
            <button onClick={() => setQuery("amor")} className="button-ghost">amor</button>
            <button onClick={() => setQuery("oração")} className="button-ghost">oração</button>
          </div>
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
            <p className="text-sm text-[var(--text-soft)]">
              {results.length} resultado{results.length > 1 ? "s" : ""} encontrado{results.length > 1 ? "s" : ""}
            </p>

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
