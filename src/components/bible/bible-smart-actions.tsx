"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getBibleHistory } from "@/lib/storage/bible-progress";

type SmartChapter = {
  slug: string;
  bookName: string;
  chapter: number;
};

const fallbackChapters: SmartChapter[] = [
  { slug: "genesis", bookName: "Genesis", chapter: 1 },
  { slug: "psalms", bookName: "Psalms", chapter: 23 },
  { slug: "john", bookName: "John", chapter: 3 },
  { slug: "revelation", bookName: "Revelation", chapter: 14 },
  { slug: "romans", bookName: "Romans", chapter: 8 },
  { slug: "philippians", bookName: "Philippians", chapter: 4 },
];

export default function BibleSmartActions() {
  const [lastRead, setLastRead] = useState<SmartChapter | null>(null);
  const [randomChapter, setRandomChapter] = useState<SmartChapter | null>(null);

  useEffect(() => {
    const history = getBibleHistory();
    if (history.length > 0) {
      setLastRead({
        slug: history[0].slug,
        bookName: history[0].bookName,
        chapter: history[0].chapter,
      });
    }

    const selected =
      fallbackChapters[Math.floor(Math.random() * fallbackChapters.length)];
    setRandomChapter(selected);
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="card-clean p-6">
        <p className="text-sm font-semibold text-[var(--primary)]">Continuar leitura</p>

        {lastRead ? (
          <>
            <h3 className="mt-3 text-2xl font-semibold">
              {lastRead.bookName} {lastRead.chapter}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              Retoma a tua leitura a partir do último capítulo que abriste.
            </p>
            <div className="mt-5">
              <Link href={`/bible/${lastRead.slug}/${lastRead.chapter}`} className="button-main">
                Continuar
              </Link>
            </div>
          </>
        ) : (
          <>
            <h3 className="mt-3 text-2xl font-semibold">Ainda sem histórico</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              Quando começares a ler capítulos, esta área vai mostrar o teu último ponto de leitura.
            </p>
          </>
        )}
      </div>

      <div className="card-clean p-6">
        <p className="text-sm font-semibold text-[var(--primary)]">Capítulo aleatório</p>

        {randomChapter && (
          <>
            <h3 className="mt-3 text-2xl font-semibold">
              {randomChapter.bookName} {randomChapter.chapter}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              Abre um capítulo aleatório para devocional, leitura rápida ou inspiração.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`/bible/${randomChapter.slug}/${randomChapter.chapter}`}
                className="button-main"
              >
                Abrir capítulo
              </Link>

              <button
                type="button"
                onClick={() => {
                  const selected =
                    fallbackChapters[Math.floor(Math.random() * fallbackChapters.length)];
                  setRandomChapter(selected);
                }}
                className="button-ghost"
              >
                Outro capítulo
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
