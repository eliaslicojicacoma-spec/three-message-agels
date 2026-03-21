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
    description: "A batalha entre o bem e o mal ao longo da história.",
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
    description: "Da criação até o reinado de Davi sob uma visão espiritual.",
    image: "/images/content/bible.svg",
    category: "História Bíblica",
    series: "Conflito dos Séculos",
    year: "1890",
    featured: true,
    downloadUrl: "/downloads/books/patriarcas-e-profetas.pdf",
  },
  {
    slug: "profetas-e-reis",
    title: "Profetas e Reis",
    author: "Ellen G. White",
    description: "História dos reis de Israel e o papel dos profetas.",
    image: "/images/content/study.svg",
    category: "História Bíblica",
    series: "Conflito dos Séculos",
    year: "1917",
    downloadUrl: "/downloads/books/profetas-e-reis.pdf",
  },
  {
    slug: "o-desejado-de-todas-as-nacoes",
    title: "O Desejado de Todas as Nações",
    author: "Ellen G. White",
    description: "A vida de Jesus Cristo apresentada com profundidade espiritual.",
    image: "/images/content/grace.svg",
    category: "Cristo",
    series: "Conflito dos Séculos",
    year: "1898",
    featured: true,
    downloadUrl: "/downloads/books/o-desejado-de-todas-as-nacoes.pdf",
  },
  {
    slug: "atos-dos-apostolos",
    title: "Atos dos Apóstolos",
    author: "Ellen G. White",
    description: "A história da igreja primitiva e a expansão do evangelho.",
    image: "/images/content/faith.svg",
    category: "Igreja",
    series: "Conflito dos Séculos",
    year: "1911",
    downloadUrl: "/downloads/books/atos-dos-apostolos.pdf",
  },
  {
    slug: "educacao",
    title: "Educação",
    author: "Ellen G. White",
    description: "Princípios cristãos para formação do caráter e da mente.",
    image: "/images/content/study.svg",
    category: "Educação",
    year: "1903",
    downloadUrl: "/downloads/books/educacao.pdf",
  },
  {
    slug: "conselhos-sobre-saude",
    title: "Conselhos Sobre Saúde",
    author: "Ellen G. White",
    description: "Orientações práticas para saúde física, mental e espiritual.",
    image: "/images/content/grace.svg",
    category: "Saúde",
    year: "1923",
    downloadUrl: "/downloads/books/conselhos-sobre-saude.pdf",
  },
  {
    slug: "lar-adventista",
    title: "O Lar Adventista",
    author: "Ellen G. White",
    description: "Princípios para uma família cristã equilibrada e feliz.",
    image: "/images/content/bible.svg",
    category: "Família",
    year: "1952",
    downloadUrl: "/downloads/books/lar-adventista.pdf",
  },
  {
    slug: "mensagens-aos-jovens",
    title: "Mensagens aos Jovens",
    author: "Ellen G. White",
    description: "Conselhos espirituais e práticos para a juventude cristã.",
    image: "/images/content/faith.svg",
    category: "Juventude",
    year: "1930",
    downloadUrl: "/downloads/books/mensagens-aos-jovens.pdf",
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
