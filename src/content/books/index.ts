export type BookItem = {
  slug: string;
  title: string;
  author: string;
  description: string;
};

export const books: BookItem[] = [
  {
    slug: "caminho-a-cristo",
    title: "Caminho a Cristo",
    author: "Ellen G. White",
    description: "Uma obra clássica sobre arrependimento, fé, oração e vida cristã.",
  },
  {
    slug: "o-grande-conflito",
    title: "O Grande Conflito",
    author: "Ellen G. White",
    description: "Um panorama da batalha entre Cristo e Satanás ao longo da história.",
  },
  {
    slug: "patriarcas-e-profetas",
    title: "Patriarcas e Profetas",
    author: "Ellen G. White",
    description: "Das origens do mundo até o reinado de David, sob luz bíblica e espiritual.",
  },
];

export function getBooks() {
  return books;
}

export function getBookBySlug(slug: string) {
  return books.find((book) => book.slug === slug) || null;
}
