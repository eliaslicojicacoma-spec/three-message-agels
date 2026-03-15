"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { bibleVerses } from "@/content/bible-search";

export default function BibleSearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return [];

    return bibleVerses.filter((verse) =>
      verse.text.toLowerCase().includes(value) ||
      verse.book.toLowerCase().includes(value)
    );
  }, [query]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <section className="max-w-3xl">
        <p className="text-sm text-[var(--muted)]">Ferramenta bíblica</p>
        <h1 className="mt-2 text-4xl font-bold">Pesquisa Bíblica</h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          Pesquisa palavras e expressões dentro dos versículos disponíveis no sistema.
        </p>
      </section>

      <section className="mt-8 rounded-3xl border border-[var(--stroke)] bg-white/70 p-6 shadow-sm">
        <input
          type="text"
          placeholder="Pesquisar palavra na Bíblia..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-2xl border border-[var(--stroke)] px-4 py-3 outline-none"
        />

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <button onClick={() => setQuery("Deus")} className="rounded-full border border-[var(--stroke)] px-3 py-1.5">Deus</button>
          <button onClick={() => setQuery("luz")} className="rounded-full border border-[var(--stroke)] px-3 py-1.5">luz</button>
          <button onClick={() => setQuery("Jesus")} className="rounded-full border border-[var(--stroke)] px-3 py-1.5">Jesus</button>
          <button onClick={() => setQuery("mundo")} className="rounded-full border border-[var(--stroke)] px-3 py-1.5">mundo</button>
          <button onClick={() => setQuery("nascer")} className="rounded-full border border-[var(--stroke)] px-3 py-1.5">nascer</button>
        </div>
      </section>

      <section className="mt-8">
        {query.trim() === "" ? (
          <div className="rounded-3xl border border-[var(--stroke)] bg-white/70 p-6 shadow-sm">
            <p className="text-[var(--muted)]">
              Escreve uma palavra para começar a pesquisar.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="rounded-3xl border border-[var(--stroke)] bg-white/70 p-6 shadow-sm">
            <p className="text-[var(--muted)]">
              Nenhum resultado encontrado para <strong>{query}</strong>.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-[var(--muted)]">
              {results.length} resultado{results.length > 1 ? "s" : ""} encontrado{results.length > 1 ? "s" : ""}
            </p>

            {results.map((verse, index) => (
              <div
                key={`${verse.slug}-${verse.chapter}-${verse.verse}-${index}`}
                className="rounded-3xl border border-[var(--stroke)] bg-white/70 p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold">
                    {verse.book} {verse.chapter}:{verse.verse}
                  </p>

                  <Link
                    href={`/bible/${verse.slug}/${verse.chapter}`}
                    className="rounded-full border border-[var(--stroke)] px-3 py-1.5 text-sm"
                  >
                    Abrir capítulo
                  </Link>
                </div>

                <p className="mt-3 leading-7 text-[var(--muted)]">{verse.text}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
