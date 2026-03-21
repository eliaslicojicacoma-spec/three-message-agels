export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
};

export const articles: BlogArticle[] = [
  {
    slug: "por-que-deus-permite-o-sofrimento",
    title: "Por que Deus permite o sofrimento?",
    excerpt: "Uma reflexão bíblica sobre dor, propósito e esperança.",
    content: "O sofrimento é uma das maiores questões da humanidade...",
    category: "Reflexão",
    image: "/images/content/grace.svg",
    date: "2026-03-21",
  },
  {
    slug: "como-orar-corretamente",
    title: "Como orar corretamente?",
    excerpt: "Princípios simples para uma oração sincera e eficaz.",
    content: "A oração é mais do que palavras...",
    category: "Devocional",
    image: "/images/content/faith.svg",
    date: "2026-03-21",
  },
  {
    slug: "sinais-do-fim-dos-tempos",
    title: "Sinais do fim dos tempos",
    excerpt: "O que a Bíblia diz sobre os últimos dias.",
    content: "A Bíblia apresenta sinais claros...",
    category: "Profecia",
    image: "/images/content/bible.svg",
    date: "2026-03-21",
  },
];

export function getArticles() {
  return articles;
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug) || null;
}
