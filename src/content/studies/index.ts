export type StudyItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
};

export const studies: StudyItem[] = [
  {
    slug: "plano-da-salvacao",
    title: "O Plano da Salvação",
    description: "Uma visão clara e bíblica sobre redenção, graça e esperança em Cristo.",
    category: "Doutrina",
    image: "/images/content/bible.svg",
  },
  {
    slug: "as-tres-mensagens-angelicas",
    title: "As Três Mensagens Angélicas",
    description: "Entende o significado profético e missionário de Apocalipse 14.",
    category: "Profecia",
    image: "/images/content/faith.svg",
  },
  {
    slug: "o-sabado-na-biblia",
    title: "O Sábado na Bíblia",
    description: "Estudo sobre criação, mandamento, adoração e fidelidade.",
    category: "Mandamentos",
    image: "/images/content/study.svg",
  },
  {
    slug: "a-fe-de-jesus",
    title: "A Fé de Jesus",
    description: "Uma reflexão bíblica sobre confiança, obediência e perseverança em Cristo.",
    category: "Vida Cristã",
    image: "/images/content/faith.svg",
  },
  {
    slug: "a-segunda-vinda-de-cristo",
    title: "A Segunda Vinda de Cristo",
    description: "Promessas, sinais e esperança ligadas ao retorno visível de Jesus.",
    category: "Esperança",
    image: "/images/content/bible.svg",
  },
  {
    slug: "o-santuario-e-sua-mensagem",
    title: "O Santuário e Sua Mensagem",
    description: "Compreende a ligação entre o santuário, Cristo e o plano da redenção.",
    category: "Doutrina",
    image: "/images/content/study.svg",
  },
  {
    slug: "lei-e-graca",
    title: "Lei e Graça",
    description: "Como a lei de Deus e a graça de Cristo se harmonizam na experiência cristã.",
    category: "Doutrina",
    image: "/images/content/grace.svg",
  },
  {
    slug: "mordomia-crista",
    title: "Mordomia Cristã",
    description: "Princípios bíblicos sobre tempo, dons, recursos e fidelidade.",
    category: "Vida Cristã",
    image: "/images/content/faith.svg",
  },
  {
    slug: "a-oracao-que-transforma",
    title: "A Oração que Transforma",
    description: "Estudo sobre comunhão, dependência de Deus e poder espiritual na oração.",
    category: "Devocional",
    image: "/images/content/grace.svg",
  },
  {
    slug: "a-biblia-como-regra-de-fe",
    title: "A Bíblia como Regra de Fé",
    description: "Por que a Escritura deve ocupar o centro da crença e da prática cristã.",
    category: "Bíblia",
    image: "/images/content/bible.svg",
  },
  {
    slug: "o-espirito-santo-na-vida-do-crente",
    title: "O Espírito Santo na Vida do Crente",
    description: "A presença, a obra e a direção do Espírito Santo na vida cristã.",
    category: "Doutrina",
    image: "/images/content/faith.svg",
  },
  {
    slug: "a-justificacao-pela-fe",
    title: "A Justificação pela Fé",
    description: "A salvação em Cristo recebida pela fé, e não por méritos humanos.",
    category: "Graça",
    image: "/images/content/grace.svg",
  },
  {
    slug: "o-batismo-na-biblia",
    title: "O Batismo na Bíblia",
    description: "O significado do batismo como aliança, compromisso e novo começo.",
    category: "Doutrina",
    image: "/images/content/bible.svg",
  },
  {
    slug: "a-igreja-como-corpo-de-cristo",
    title: "A Igreja como Corpo de Cristo",
    description: "Unidade, missão e serviço no contexto da comunidade dos crentes.",
    category: "Igreja",
    image: "/images/content/study.svg",
  },
  {
    slug: "a-esperanca-da-ressurreicao",
    title: "A Esperança da Ressurreição",
    description: "A vitória sobre a morte à luz das promessas de Deus.",
    category: "Esperança",
    image: "/images/content/faith.svg",
  },
  {
    slug: "o-juizo-investigativo",
    title: "O Juízo Investigativo",
    description: "Uma abordagem bíblica e profética sobre juízo, intercessão e esperança.",
    category: "Profecia",
    image: "/images/content/bible.svg",
  },
  {
    slug: "o-poder-da-palavra",
    title: "O Poder da Palavra",
    description: "Como a Escritura transforma mente, coração e conduta.",
    category: "Bíblia",
    image: "/images/content/grace.svg",
  },
  {
    slug: "jejum-e-consagracao",
    title: "Jejum e Consagração",
    description: "Princípios espirituais ligados à humildade, oração e busca sincera.",
    category: "Devocional",
    image: "/images/content/study.svg",
  },
  {
    slug: "o-amor-como-marca-do-discipulo",
    title: "O Amor como Marca do Discípulo",
    description: "A evidência prática do evangelho na forma como tratamos os outros.",
    category: "Vida Cristã",
    image: "/images/content/grace.svg",
  },
  {
    slug: "a-vitoria-sobre-a-tentacao",
    title: "A Vitória sobre a Tentação",
    description: "Como resistir, vigiar e depender de Cristo nas lutas espirituais.",
    category: "Vida Cristã",
    image: "/images/content/faith.svg",
  },
];

export function getStudies() {
  return studies;
}

export function getStudyBySlug(slug: string) {
  return studies.find((study) => study.slug === slug) || null;
}
