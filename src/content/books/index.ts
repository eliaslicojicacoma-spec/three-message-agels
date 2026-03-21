export type BookItem = {
  slug: string;
  title: string;
  author: string;
  description: string;
  image: string;
  category: string;
  series?: string;
  year?: string;
  featured?: boolean;
  downloadUrl?: string;
};

export const books: BookItem[] = [
  {
    slug: "caminho-a-cristo",
    title: "Caminho a Cristo",
    author: "Ellen G. White",
    description: "Uma obra clássica sobre arrependimento, fé, oração e vida cristã.",
    image: "/images/content/grace.svg",
    category: "Vida Cristã",
    series: "Clássicos Cristãos",
    year: "1892",
    featured: true,
    downloadUrl: "/downloads/books/caminho-a-cristo.pdf",
  },
  {
    slug: "o-grande-conflito",
    title: "O Grande Conflito",
    author: "Ellen G. White",
    description: "Um panorama da batalha entre Cristo e Satanás ao longo da história.",
    image: "/images/content/faith.svg",
    category: "Profecia",
    series: "Conflito dos Séculos",
    year: "1888",
    featured: true,
    downloadUrl: "/downloads/books/o-grande-conflito.pdf",
  },
  {
    slug: "patriarcas-e-profetas",
    title: "Patriarcas e Profetas",
    author: "Ellen G. White",
    description: "Das origens do mundo até o reinado de Davi, sob luz bíblica e espiritual.",
    image: "/images/content/bible.svg",
    category: "História Bíblica",
    series: "Conflito dos Séculos",
    year: "1890",
    featured: true,
    downloadUrl: "/downloads/books/patriarcas-e-profetas.pdf",
  },
];

export function getBooks() {
  return books;
}

export function getBookBySlug(slug: string) {
  return books.find((book) => book.slug === slug) || null;
}

export function getFeaturedBooks() {
  return books.filter((book) => book.featured);
}

export function getBooksByCategory(category: string) {
  return books.filter((book) => book.category === category);
}

export function getBooksBySeries(series: string) {
  return books.filter((book) => book.series === series);
}
