export type SearchSection =
  | "bible"
  | "studies"
  | "books"
  | "blog"
  | "downloads";

export type SearchConfig = {
  placeholder: string;
  minQueryLength: number;
  maxResultsPerSection: number;
  sections: SearchSection[];
  suggestions: string[];
};

export const searchConfig: SearchConfig = {
  placeholder: "Pesquisar Bíblia, estudos, livros ou temas...",
  minQueryLength: 1,
  maxResultsPerSection: 12,
  sections: ["bible", "studies", "books", "blog", "downloads"],
  suggestions: [
    "João",
    "amor",
    "pastor",
    "Romanos",
    "sábado",
    "profecia",
    "salvação",
  ],
};
