"use client";

import { useMemo, useState } from "react";
import { searchBible } from "@/services/bible/search";
import HighlightedVerse from "@/components/bible/highlighted-verse";
import Button from "@/components/ui/button";
import FavoriteButton from "@/components/bible/favorite-button";

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
          <input
            type="text"
            placeholder="Pesquisar Bíblia..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="w-full rounded-2xl border px-4 py-3 text-sm outline-none"
          />

          <Button onClick={handleSearch}>
            Pesquisar
          </Button>
        </div>
      </div>

      {hasQuery && (
        <div className="text-sm opacity-80">
          {hasResults
            ? `${results.length} resultado(s)`
            : "Nenhum resultado"}
        </div>
      )}

      {hasResults && (
        <div className="space-y-4">
          {results.map((item, index) => (
            <article key={index} className="card-premium p-5">
              <p className="text-xs font-semibold opacity-60">
                {item.book} {item.chapter}:{item.verse}
              </p>

              <p className="mt-3 text-reading">
                <HighlightedVerse text={item.text} query={submittedQuery} />
              </p>

              <FavoriteButton verse={item} />
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
