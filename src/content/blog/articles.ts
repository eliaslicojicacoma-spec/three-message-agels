export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image?: string;
  date: string;
}

// 🔥 lista de covers disponíveis
const covers = Array.from({ length: 20 }, (_, i) => 
  `/images/blog/cover-${i + 1}.jpg`
);

// 🔥 função automática
function getCover(index: number) {
  return covers[index % covers.length];
}

const articles: Article[] = [
  {
    slug: "por-que-deus-permite-o-sofrimento",
    title: "Por que Deus permite o sofrimento?",
    excerpt: "Uma reflexão bíblica sobre dor, propósito e esperança.",
    content: "Conteúdo...",
    category: "Reflexão",
    date: "2026-03-21",
  },
  {
    slug: "como-orar-corretamente",
    title: "Como orar corretamente?",
    excerpt: "Princípios simples para uma oração sincera e eficaz.",
    content: "Conteúdo...",
    category: "Devocional",
    date: "2026-03-21",
  },
  {
    slug: "sinais-do-fim-dos-tempos",
    title: "Sinais do fim dos tempos",
    excerpt: "O que a Bíblia diz sobre os últimos dias.",
    content: "Conteúdo...",
    category: "Profecia",
    date: "2026-03-21",
  },
  {
    slug: "como-estudar-a-biblia",
    title: "Como estudar a Bíblia sozinho",
    excerpt: "Um caminho simples para leitura bíblica com profundidade.",
    content: "Conteúdo...",
    category: "Bíblia",
    date: "2026-03-21",
  },
  {
    slug: "ansiedade-na-biblia",
    title: "O que a Bíblia diz sobre ansiedade?",
    excerpt: "Consolo bíblico para dias de pressão, medo e incerteza.",
    content: "Conteúdo...",
    category: "Vida Cristã",
    date: "2026-03-21",
  },
];

// 🔥 aplicar covers automaticamente
export function getArticles() {
  return articles.map((article, index) => ({
    ...article,
    cover: getCover(index),
  }));
}

export function getArticle(slug: string) {
  const list = getArticles();
  return list.find((a) => a.slug === slug) || null;
}
