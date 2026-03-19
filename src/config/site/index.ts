import type { Locale } from "@/types/common";

export type SiteConfig = {
  name: string;
  shortName: string;
  title: string;
  description: string;
  url: string;
  defaultLocale: Locale;
  locales: Locale[];
  brand: {
    projectName: string;
    tagline: string;
    mission: string;
  };
  contact: {
    email: string;
    whatsapp?: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
  monetization: {
    paypal: string;
    pix: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Three Angels Message",
  shortName: "TAM",
  title: "Three Angels Message",
  description:
    "Uma plataforma missionária digital para proclamar a verdade bíblica com Bíblia, pesquisa, estudos, livros e recursos cristãos.",
  url: "https://three-angels-message.vercel.app",
  defaultLocale: "pt",
  locales: ["pt", "en"],
  brand: {
    projectName: "Three Angels Message",
    tagline: "Verdade bíblica para este tempo",
    mission:
      "Proclamar a mensagem bíblica com clareza, beleza, fidelidade e acesso digital organizado.",
  },
  contact: {
    email: "eliaslicojicacoma@gmail.com",
    whatsapp: "+244933522616",
  },
  social: {
    facebook: "https://www.facebook.com/share/1DeT9sjHyp/",
    instagram: "https://www.instagram.com/eliascacoma",
    youtube: "https://youtube.com/@eliaslicojicacoma",
  },
  monetization: {
    paypal: "eliaslicojicacoma@gmail.com",
    pix: "elias-licoji-cacoma-273@jim.com",
  },
};
