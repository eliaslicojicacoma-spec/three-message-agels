"use client";

import { useMemo, useState } from "react";
import { searchBible } from "@/services/bible/search";

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
    setSubmittedQuery(query);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border p-4 md:p-5">
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            placeholder="Pesquisar por palavra, expressão ou livro..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="rounded-xl bg-black px-5 py-3 text-white"
          >
            Pesquisar
          </button>
        </div>

        <p className="mt-3 text-sm opacity-70">
          Exemplos: João, amor, pastor, Romanos
        </p>
      </div>

      {submittedQuery.trim() && (
        <div className="text-sm opacity-70">
          {results.length > 0
            ? `${results.length} resultado(s) para "${submittedQuery}"`
            : `Nenhum resultado para "${submittedQuery}"`}
        </div>
      )}

      <div className="space-y-4">
        {!submittedQuery.trim() ? (
          <div className="rounded-2xl border p-6 text-sm opacity-70">
            Faz uma pesquisa para veres os versículos.
          </div>
        ) : results.length === 0 ? (
          <div className="rounded-2xl border p-6 text-sm opacity-70">
            Não encontrámos resultados. Tenta outra palavra.
          </div>
        ) : (
          results.map((item, index) => (
            <article key={index} className="rounded-2xl border p-5">
              <p className="text-sm font-semibold opacity-70">
                {item.book} {item.chapter}:{item.verse}
              </p>
              <p className="mt-3 leading-8">{item.text}</p>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
