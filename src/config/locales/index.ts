import type { Locale } from "@/types/common";

export type LocaleConfig = {
  code: Locale;
  label: string;
  htmlLang: string;
};

export const locales: LocaleConfig[] = [
  {
    code: "pt",
    label: "Português",
    htmlLang: "pt-AO",
  },
  {
    code: "en",
    label: "English",
    htmlLang: "en-US",
  },
];

export const defaultLocale: Locale = "pt";

export function getLocaleConfig(locale: Locale) {
  return locales.find((l) => l.code === locale) || locales[0];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.some((l) => l.code === locale);
}
