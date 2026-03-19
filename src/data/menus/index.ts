import { navigationConfig } from "@/config/navigation";
import type { NavItem } from "@/types/common";

export type MenuGroup = {
  label: string;
  items: NavItem[];
};

export const mainMenu: NavItem[] = navigationConfig.main;

export const mobileMenu: NavItem[] = navigationConfig.mobile;

export const footerMenu: MenuGroup[] = [
  {
    label: "Navegação",
    items: navigationConfig.footer,
  },
  {
    label: "Acesso rápido",
    items: navigationConfig.quickAccess,
  },
];

export const headerQuickActions: NavItem[] = [
  {
    label: "Pesquisar",
    href: "/bible/search",
  },
  {
    label: "Favoritos",
    href: "/bible/verse-favorites",
  },
];
