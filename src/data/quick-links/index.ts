export type QuickLinkItem = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  category?: "bible" | "study" | "library" | "mission";
};

export const quickLinks: QuickLinkItem[] = [
  {
    label: "Abrir Bíblia",
    href: "/bible",
    description: "Entra diretamente na leitura bíblica.",
    icon: "✦",
    category: "bible",
  },
  {
    label: "Pesquisar Bíblia",
    href: "/bible/search",
    description: "Procura palavras, expressões e referências.",
    icon: "⌕",
    category: "bible",
  },
  {
    label: "Versículo do Dia",
    href: "/verse-of-day",
    description: "Recebe uma mensagem bíblica para reflexão diária.",
    icon: "☼",
    category: "study",
  },
  {
    label: "Meus Favoritos",
    href: "/bible/verse-favorites",
    description: "Acede aos versículos guardados.",
    icon: "✓",
    category: "library",
  },
  {
    label: "Estudos Bíblicos",
    href: "/studies",
    description: "Explora temas de fé, doutrina e profecia.",
    icon: "◫",
    category: "study",
  },
  {
    label: "Livros",
    href: "/books",
    description: "Vê leituras cristãs e materiais recomendados.",
    icon: "☰",
    category: "mission",
  },
];

export function getQuickLinks() {
  return quickLinks;
}

export function getQuickLinksByCategory(category: QuickLinkItem["category"]) {
  return quickLinks.filter((item) => item.category === category);
}
