"use client";

import { useMemo, useState } from "react";
import { searchBible } from "@/services/bible/search";
import HighlightedVerse from "@/components/bible/highlighted-verse";
import Button from "@/components/ui/button";

type Verse = {
  book: string;
  chapter: number;
  verse: number;
  text: string;
};

export default function BibleSearchClient() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const results = useMemo<Verse[]>(() => {
    if (!submittedQuery.trim()) return [];
    return (searchBible(submittedQuery) || []) as Verse[];
  }, [submittedQuery]);

  function handleSearch() {
    setSubmittedQuery(query.trim());
  }

  const hasQuery = submittedQuery.trim().length > 0;
  const hasResults = results.length > 0;

  return (
    <div className="space-y-6 fade-in-up">
      <div className="surface-soft p-4 md:p-5">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Pesquisar Bíblia..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              className="w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
            />
          </div>

          <Button className="md:min-w-[140px]" onClick={handleSearch}>
            Pesquisar
          </Button>
        </div>

        <p className="mt-3 text-xs opacity-70 md:text-sm">
          Exemplos: João, amor, pastor, Romanos
        </p>
      </div>

      {hasQuery && (
        <div className="rounded-2xl border bg-white px-4 py-3 text-sm shadow-sm opacity-80">
          {hasResults
            ? `${results.length} resultado(s) para "${submittedQuery}"`
            : `Nenhum resultado para "${submittedQuery}"`}
        </div>
      )}

      {!hasQuery ? (
        <div className="rounded-3xl border border-dashed bg-white p-8 text-center shadow-sm">
          <p className="text-base font-semibold md:text-lg">
            Começa a tua pesquisa bíblica
          </p>
          <p className="mt-2 text-sm leading-7 opacity-70">
            Escreve uma palavra, expressão ou nome de livro para encontrar versículos.
          </p>
        </div>
      ) : !hasResults ? (
        <div className="rounded-3xl border border-dashed bg-white p-8 text-center shadow-sm">
          <p className="text-base font-semibold md:text-lg">
            Sem resultados encontrados
          </p>
          <p className="mt-2 text-sm leading-7 opacity-70">
            Tenta outra palavra ou pesquisa com um termo mais simples.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {results.map((item, index) => (
            <article
              key={index}
              className="card-premium p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
                  {item.book} {item.chapter}:{item.verse}
                </p>
              </div>

              <p className="mt-4 text-[15px] leading-8 md:text-base">
                <HighlightedVerse text={item.text} query={submittedQuery} />
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
