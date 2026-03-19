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
    <div className="space-y-6">
      <div className="rounded-2xl border bg-white p-4 shadow-sm md:p-5">
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            placeholder="Pesquisar Bíblia..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
          />

          <Button onClick={handleSearch}>
            Pesquisar
          </Button>
        </div>

        <p className="mt-3 text-sm opacity-70">
          Exemplos: João, amor, pastor, Romanos
        </p>
      </div>

      {hasQuery && (
        <div className="rounded-xl border px-4 py-3 text-sm opacity-80">
          {hasResults
            ? `${results.length} resultado(s) para "${submittedQuery}"`
            : `Nenhum resultado para "${submittedQuery}"`}
        </div>
      )}

      {!hasQuery ? (
        <div className="rounded-2xl border border-dashed p-8 text-center shadow-sm">
          <p className="text-base font-medium">Começa a tua pesquisa bíblica</p>
          <p className="mt-2 text-sm opacity-70">
            Escreve uma palavra, expressão ou nome de livro para encontrar versículos.
          </p>
        </div>
      ) : !hasResults ? (
        <div className="rounded-2xl border border-dashed p-8 text-center shadow-sm">
          <p className="text-base font-medium">Sem resultados encontrados</p>
          <p className="mt-2 text-sm opacity-70">
            Tenta outra palavra ou pesquisa com um termo mais simples.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {results.map((item, index) => (
            <article
              key={index}
              className="rounded-2xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-sm font-semibold opacity-70">
                {item.book} {item.chapter}:{item.verse}
              </p>

              <p className="mt-3 leading-8">
                <HighlightedVerse text={item.text} query={submittedQuery} />
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
