export const locales = ["pt", "en"] as const;
export type AppLocale = (typeof locales)[number];
export const defaultLocale: AppLocale = "pt";
