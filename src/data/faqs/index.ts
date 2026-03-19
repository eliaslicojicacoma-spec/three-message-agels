export type FAQItem = {
  question: string;
  answer: string;
  category?: "general" | "bible" | "mission" | "support";
};

export const faqs: FAQItem[] = [
  {
    question: "O que é o Three Angels Message?",
    answer:
      "É uma plataforma missionária digital criada para organizar Bíblia, pesquisa, estudos, livros e recursos cristãos numa experiência moderna e útil.",
    category: "general",
  },
  {
    question: "A Bíblia disponível no site já está completa?",
    answer:
      "A estrutura bíblica está preparada e em expansão. O projeto está a ser desenvolvido de forma progressiva para oferecer leitura, pesquisa e recursos cada vez mais completos.",
    category: "bible",
  },
  {
    question: "O objetivo principal deste projeto é qual?",
    answer:
      "O objetivo é proclamar a verdade bíblica, fortalecer a fé e disponibilizar recursos digitais que ajudem no estudo, na meditação e na missão.",
    category: "mission",
  },
  {
    question: "Como posso apoiar este projeto?",
    answer:
      "Podes apoiar divulgando o site, partilhando os conteúdos e também contribuindo financeiramente para ajudar a manter e expandir esta missão digital.",
    category: "support",
  },
  {
    question: "Quem pode usar esta plataforma?",
    answer:
      "Qualquer pessoa que queira ler a Bíblia, pesquisar versículos, estudar temas cristãos e aceder a recursos organizados para crescimento espiritual.",
    category: "general",
  },
  {
    question: "O site foi pensado para telemóvel?",
    answer:
      "Sim. A experiência mobile é uma prioridade do projeto, com navegação adaptada, pesquisa rápida e acesso simples às áreas principais.",
    category: "general",
  },
];

export function getFaqs() {
  return faqs;
}

export function getFaqsByCategory(category: FAQItem["category"]) {
  return faqs.filter((item) => item.category === category);
}
