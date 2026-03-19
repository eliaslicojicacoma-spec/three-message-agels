import { siteConfig } from "@/config/site";

export type SEOConfig = {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultLocale: string;
  siteUrl: string;
  defaultImage: string;
  keywords: string[];
  openGraph: {
    type: string;
    locale: string;
    siteName: string;
  };
  twitter: {
    card: "summary_large_image" | "summary";
    creator?: string;
  };
};

export const seoConfig: SEOConfig = {
  defaultTitle: siteConfig.title,
  titleTemplate: `%s | ${siteConfig.title}`,
  defaultDescription: siteConfig.description,
  defaultLocale: siteConfig.defaultLocale,
  siteUrl: siteConfig.url,
  defaultImage: `${siteConfig.url}/preview.jpg`,
  keywords: [
    "Bíblia",
    "Pesquisa Bíblica",
    "Versículo do Dia",
    "Estudos Bíblicos",
    "Livros Cristãos",
    "Mensagem dos Três Anjos",
    "Three Angels Message",
    "Evangelho",
    "Profecia",
    "Fé Cristã",
  ],
  openGraph: {
    type: "website",
    locale: "pt_AO",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@eliascacoma",
  },
};
