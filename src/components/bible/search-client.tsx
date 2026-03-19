"use client";

import { useState } from "react";
import { searchBible } from "@/services/bible/search";

type Verse = {
  book: string;
  chapter: number;
  verse: number;
  text: string;
};

export default function BibleSearchClient() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Verse[]>([]);

  function handleSearch() {
    const res = searchBible(query) || [];
    setResults(res as Verse[]);
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Pesquisar na Bíblia..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border px-4 py-2"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Buscar
        </button>
      </div>

      <div className="space-y-4">
        {results.length === 0 ? (
          <p className="text-sm opacity-60">Sem resultados...</p>
        ) : (
          results.map((item, index) => (
            <div key={index} className="rounded-lg border p-4">
              <p className="text-sm font-bold">
                {item.book} {item.chapter}:{item.verse}
              </p>
              <p className="mt-2">{item.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
