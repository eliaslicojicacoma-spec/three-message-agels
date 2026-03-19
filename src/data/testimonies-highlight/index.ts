export type TestimonyHighlightItem = {
  name: string;
  role?: string;
  title: string;
  excerpt: string;
  location?: string;
  featured?: boolean;
};

export const testimoniesHighlight: TestimonyHighlightItem[] = [
  {
    name: "Leitor em Angola",
    role: "Utilizador da plataforma",
    title: "A Bíblia ficou mais acessível para mim",
    excerpt:
      "Ter uma experiência bíblica organizada no telemóvel ajudou-me a ler mais, pesquisar melhor e guardar versículos importantes para rever depois.",
    location: "Angola",
    featured: true,
  },
  {
    name: "Jovem cristão",
    role: "Estudante bíblico",
    title: "A pesquisa rápida facilitou o meu estudo",
    excerpt:
      "A pesquisa bíblica tornou-se uma ferramenta muito útil para encontrar palavras e versículos sem perder tempo, principalmente no estudo pessoal.",
    location: "África",
    featured: true,
  },
  {
    name: "Leitora devocional",
    role: "Utilizadora mobile",
    title: "O site ajudou-me a manter o hábito devocional",
    excerpt:
      "Com o versículo do dia e os favoritos, senti mais motivação para voltar à Palavra e guardar textos que falam diretamente ao coração.",
    location: "Online",
    featured: false,
  },
];

export function getTestimoniesHighlight() {
  return testimoniesHighlight;
}

export function getFeaturedTestimonies() {
  return testimoniesHighlight.filter((item) => item.featured);
}
