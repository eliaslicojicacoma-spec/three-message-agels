export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  description: string;
  category: string;
  year?: string;
  series?: string;
  downloadUrl: string;
  featured?: boolean;
};

export const books: Book[] = [
  {
    id: "1",
    slug: "caminho-a-cristo",
    title: "Caminho a Cristo",
    author: "Ellen G. White",
    description:
      "Uma das obras mais conhecidas sobre a vida cristã, mostrando o caminho da fé, arrependimento e relacionamento com Jesus.",
    category: "Vida Cristã",
    year: "1892",
    series: "Espiritual",
    downloadUrl: "/books/caminho-a-cristo.pdf",
    featured: true,
  },
];
