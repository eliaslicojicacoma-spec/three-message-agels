import type { NavItem } from "@/types/common";

export type NavigationConfig = {
  main: NavItem[];
  mobile: NavItem[];
  footer: NavItem[];
  quickAccess: NavItem[];
};

export const navigationConfig: NavigationConfig = {
  main: [
    { label: "Início", href: "/" },
    { label: "Bíblia", href: "/bible" },
    { label: "Pesquisa", href: "/bible/search" },
    { label: "Estudos", href: "/studies" },
    { label: "Livros", href: "/books" },
    { label: "Versículo do Dia", href: "/verse-of-day" },
  ],
  mobile: [
    { label: "Início", href: "/" },
    { label: "Bíblia", href: "/bible" },
    { label: "Pesquisa", href: "/bible/search" },
    { label: "Favoritos", href: "/bible/verse-favorites" },
    { label: "Livros", href: "/books" },
    { label: "Dia", href: "/verse-of-day" },
  ],
  footer: [
    { label: "Bíblia", href: "/bible" },
    { label: "Estudos", href: "/studies" },
    { label: "Livros", href: "/books" },
    { label: "Downloads", href: "/downloads" },
    { label: "Privacidade", href: "/privacy" },
    { label: "Termos", href: "/terms" },
  ],
  quickAccess: [
    { label: "Abrir Bíblia", href: "/bible" },
    { label: "Pesquisar Bíblia", href: "/bible/search" },
    { label: "Versículo do Dia", href: "/verse-of-day" },
    { label: "Meus Favoritos", href: "/bible/verse-favorites" },
  ],
};
