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
  {
    id: "2",
    slug: "atos-dos-apostolos",
    title: "Atos dos Apóstolos",
    author: "Ellen G. White",
    description:
      "Uma obra essencial sobre o avanço da igreja cristã primitiva, o testemunho apostólico e o poder do Espírito Santo na missão.",
    category: "História Bíblica",
    year: "1911",
    series: "Conflito dos Séculos",
    downloadUrl: "/books/atos-dos-apostolos.pdf",
    featured: true,
  },
  {
    id: "3",
    slug: "o-desejado-de-todas-as-nacoes",
    title: "O Desejado de Todas as Nações",
    author: "Ellen G. White",
    description:
      "Uma das obras mais amadas sobre a vida de Jesus Cristo, Seu ministério, sacrifício, amor e plano de salvação para a humanidade.",
    category: "Vida de Cristo",
    year: "1898",
    series: "Conflito dos Séculos",
    downloadUrl: "/books/o-desejado-de-todas-as-nacoes.pdf",
    featured: true,
  },
  {
    id: "4",
    slug: "o-grande-conflito",
    title: "O Grande Conflito",
    author: "Ellen G. White",
    description:
      "Uma exposição profunda do conflito entre o bem e o mal ao longo da história, com foco especial na profecia, reforma e tempo do fim.",
    category: "Profecia",
    year: "1888",
    series: "Conflito dos Séculos",
    downloadUrl: "/books/o-grande-conflito.pdf",
    featured: true,
  },
  {
    id: "5",
    slug: "patriarcas-e-profetas",
    title: "Patriarcas e Profetas",
    author: "Ellen G. White",
    description:
      "Apresenta a história desde a queda de Lúcifer até ao reinado de Davi, revelando lições espirituais profundas do Antigo Testamento.",
    category: "Antigo Testamento",
    year: "1890",
    series: "Conflito dos Séculos",
    downloadUrl: "/books/patriarcas-e-profetas.pdf",
    featured: false,
  },
  {
    id: "6",
    slug: "profetas-e-reis",
    title: "Profetas e Reis",
    author: "Ellen G. White",
    description:
      "Relata a história dos reis de Israel e Judá, mostrando a fidelidade de Deus, a voz profética e as consequências da obediência ou rebelião.",
    category: "Antigo Testamento",
    year: "1917",
    series: "Conflito dos Séculos",
    downloadUrl: "/books/profetas-e-reis.pdf",
    featured: false,
  },
];
