export interface ContactItem {
  icon: "map-pin" | "phone";
  value: string;
}

export interface SocialItem {
  href: string;
  icon: "message-square" | "twitter" | "instagram" | "linkedin" | "youtube";
  label: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: "info" | "layers" | "mail";
}

export interface FooterNavLink {
  label: string;
  href: string;
}

export interface FooterNavGroup {
  title: string;
  links: FooterNavLink[];
}

export interface SiteData {
  mission: string;
  founderName: string;
  founderRole: string;
  founderQuote: string;
  phoneNumber: string;
  contact: ContactItem[];
  socials: SocialItem[];
  navLinks: NavLink[];
  navigation: FooterNavGroup[];
  ctaHeading: string;
  ctaSubheading: string;
}

export type PartnerCategory = "workplace" | "individual-groups" | "school";

export type PartnerSponsor = 
  | "minet" 
  | "direct" 
  | "precision-hr";

export interface Partner {
  category: PartnerCategory;
  id: string;
  name: string;
  imagePath?: string;
  sponsor?: PartnerSponsor;
}
