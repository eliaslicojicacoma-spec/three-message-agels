export type BibleConfig = {
  version: string;
  abbreviation: string;
  language: string;
  reading: {
    defaultBookSlug: string;
    defaultChapter: number;
  };
  search: {
    minQueryLength: number;
    maxResults: number;
  };
  favorites: {
    storageKey: string;
  };
  labels: {
    oldTestament: string;
    newTestament: string;
    verseOfDay: string;
    favorites: string;
    search: string;
  };
};

export const bibleConfig: BibleConfig = {
  version: "Almeida Corrigida Fiel",
  abbreviation: "ACF",
  language: "pt",
  reading: {
    defaultBookSlug: "joao",
    defaultChapter: 3,
  },
  search: {
    minQueryLength: 1,
    maxResults: 20,
  },
  favorites: {
    storageKey: "tam_favorites",
  },
  labels: {
    oldTestament: "Antigo Testamento",
    newTestament: "Novo Testamento",
    verseOfDay: "Versículo do Dia",
    favorites: "Favoritos",
    search: "Pesquisa Bíblica",
  },
};
