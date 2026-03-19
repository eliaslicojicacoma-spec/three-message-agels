import { siteConfig } from "@/config/site";

export type SocialPlatform = {
  label: string;
  href: string;
  handle?: string;
  active?: boolean;
};

export type SocialConfig = {
  facebook: SocialPlatform;
  instagram: SocialPlatform;
  youtube: SocialPlatform;
  whatsapp: SocialPlatform;
  email: SocialPlatform;
};

export const socialConfig: SocialConfig = {
  facebook: {
    label: "Facebook",
    href: siteConfig.social.facebook || "",
    active: Boolean(siteConfig.social.facebook),
  },
  instagram: {
    label: "Instagram",
    href: siteConfig.social.instagram || "",
    handle: "@eliascacoma",
    active: Boolean(siteConfig.social.instagram),
  },
  youtube: {
    label: "YouTube",
    href: siteConfig.social.youtube || "",
    handle: "@eliaslicojicacoma",
    active: Boolean(siteConfig.social.youtube),
  },
  whatsapp: {
    label: "WhatsApp",
    href: `https://wa.me/244933522616`,
    handle: "+244933522616",
    active: true,
  },
  email: {
    label: "Email",
    href: `mailto:${siteConfig.contact.email}`,
    handle: siteConfig.contact.email,
    active: true,
  },
};

export const socialLinks = Object.values(socialConfig).filter(
  (item) => item.active
);
