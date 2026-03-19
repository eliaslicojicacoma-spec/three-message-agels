export type BaseEntity = {
  id?: string;
  slug?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Locale = "pt" | "en";

export type Status = "draft" | "published" | "archived";

export type SeoImage = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type SeoMeta = {
  title: string;
  description: string;
  canonical?: string;
  image?: SeoImage;
  noindex?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  disabled?: boolean;
};

export type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type SectionIntro = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export type PageParams<T extends Record<string, string> = Record<string, string>> = {
  params: Promise<T>;
};

export type SearchResult<TType extends string = string> = {
  id: string;
  type: TType;
  title: string;
  excerpt?: string;
  href: string;
};

export type Nullable<T> = T | null;
export type Maybe<T> = T | null | undefined;
