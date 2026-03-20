export type StudyItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
};

export const studies: StudyItem[] = [
  // 1–30 (mantidos)

  // 👇 NOVOS 31–40
  {
    slug: "a-luz-do-mundo",
    title: "A Luz do Mundo",
    description: "Cristo como a verdadeira luz que ilumina o caminho espiritual.",
    category: "Cristo",
    image: "/images/content/light.svg",
  },
  {
    slug: "o-caminho-estreito",
    title: "O Caminho Estreito",
    description: "A jornada cristã marcada por escolhas firmes e fidelidade.",
    category: "Vida Cristã",
    image: "/images/content/study.svg",
  },
  {
    slug: "o-perigo-da-indiferenca",
    title: "O Perigo da Indiferença",
    description: "Como a falta de zelo espiritual pode afastar da verdade.",
    category: "Advertência",
    image: "/images/content/bible.svg",
  },
  {
    slug: "a-graca-transformadora",
    title: "A Graça Transformadora",
    description: "A graça que não apenas perdoa, mas também transforma.",
    category: "Graça",
    image: "/images/content/grace.svg",
  },
  {
    slug: "a-importancia-da-vigilancia",
    title: "A Importância da Vigilância",
    description: "Estar atento espiritualmente em tempos de provação.",
    category: "Profecia",
    image: "/images/content/faith.svg",
  },
  {
    slug: "o-chamado-a-santidade",
    title: "O Chamado à Santidade",
    description: "Separação do pecado e dedicação total a Deus.",
    category: "Vida Cristã",
    image: "/images/content/study.svg",
  },
  {
    slug: "o-exemplo-de-cristo",
    title: "O Exemplo de Cristo",
    description: "Vida, caráter e missão como modelo para o crente.",
    category: "Cristo",
    image: "/images/content/bible.svg",
  },
  {
    slug: "a-verdade-que-liberta",
    title: "A Verdade que Liberta",
    description: "A verdade bíblica como caminho para liberdade espiritual.",
    category: "Bíblia",
    image: "/images/content/light.svg",
  },
  {
    slug: "o-tempo-do-fim",
    title: "O Tempo do Fim",
    description: "Sinais, profecias e preparação para os últimos dias.",
    category: "Profecia",
    image: "/images/content/faith.svg",
  },
  {
    slug: "a-confiança-em-deus",
    title: "A Confiança em Deus",
    description: "Aprender a descansar nas promessas divinas.",
    category: "Esperança",
    image: "/images/content/grace.svg",
  },
];

export function getStudies() {
  return studies;
}

export function getStudyBySlug(slug: string) {
  return studies.find((study) => study.slug === slug) || null;
}
