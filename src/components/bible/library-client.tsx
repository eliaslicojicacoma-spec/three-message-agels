"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getBibleFavorites,
  getBibleHistory,
  type BibleFavoriteItem,
  type BibleHistoryItem,
} from "@/lib/storage/bible-progress";

export default function BibleLibraryClient() {
  const [favorites, setFavorites] = useState<BibleFavoriteItem[]>([]);
  const [history, setHistory] = useState<BibleHistoryItem[]>([]);

  useEffect(() => {
    setFavorites(getBibleFavorites());
    setHistory(getBibleHistory());
  }, []);

  return (
    <div className="space-y-12">
      <section>
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--text-soft)]">Favoritos</p>
          <h2 className="section-title mt-2 text-3xl">Capítulos guardados</h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {favorites.length === 0 ? (
            <div className="card-clean p-6">
              <p className="text-[var(--text-soft)]">
                Ainda não guardaste nenhum capítulo nos favoritos.
              </p>
            </div>
          ) : (
            favorites.map((item) => (
              <Link
                key={`${item.slug}-${item.chapter}`}
                href={`/bible/${item.slug}/${item.chapter}`}
                className="card-clean p-6"
              >
                <h3 className="text-xl font-semibold">
                  {item.bookName} {item.chapter}
                </h3>
                <p className="mt-3 text-sm text-[var(--text-soft)]">
                  Guardado em {new Date(item.savedAt).toLocaleString()}
                </p>
              </Link>
            ))
          )}
        </div>
      </section>

      <section>
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--text-soft)]">Histórico</p>
          <h2 className="section-title mt-2 text-3xl">Leituras recentes</h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {history.length === 0 ? (
            <div className="card-clean p-6">
              <p className="text-[var(--text-soft)]">
                Ainda não há histórico de leitura.
              </p>
            </div>
          ) : (
            history.map((item) => (
              <Link
                key={`${item.slug}-${item.chapter}-${item.lastReadAt}`}
                href={`/bible/${item.slug}/${item.chapter}`}
                className="card-clean p-6"
              >
                <h3 className="text-xl font-semibold">
                  {item.bookName} {item.chapter}
                </h3>
                <p className="mt-3 text-sm text-[var(--text-soft)]">
                  Lido em {new Date(item.lastReadAt).toLocaleString()}
                </p>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
