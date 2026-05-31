import type { SiteData } from "./shared.types";

const siteData: SiteData = {
  mission:
    "empowering individuals to reach their full potential through sustainable recovery and clinical innovation.",
  founderName: "Christina Angela Ntulo",
  founderRole: "Founder",
  founderQuote:
    "empowering individuals to reach their full potential through sustainable recovery and clinical innovation.",
  phoneNumber: "+256757356691",
  ctaHeading: "ready to start your journey?",
  ctaSubheading: "get in touch with our specialist team today.",
  contact: [
    { icon: "map-pin", value: "672 Wamala Rd, Kampala" },
    { icon: "phone", value: "+256757356691" },
  ],
  socials: [
    { href: "https://wa.me/256703349394", icon: "message-square", label: "256 703 349394" },
    { href: "https://x.com/malachitecenter", icon: "twitter", label: "malachitecenter" },
    { href: "https://instagram.com/malachitecenter", icon: "instagram", label: "malachitecenter" },
    {
      href: "https://linkedin.com/company/malachite-center",
      icon: "linkedin",
      label: "Malachite Center",
    },
    { href: "https://youtube.com/@MalachiteMediaUg", icon: "youtube", label: "@MalachiteMediaUg" },
  ],
  navLinks: [
    { name: "about", href: "/about", icon: "info" },
    { name: "programs", href: "/programs", icon: "layers" },
    { name: "contact", href: "/contact", icon: "mail" },
  ],
  navigation: [
    {
      title: "Company",
      links: [
        { label: "about us", href: "/about" },
        { label: "contact", href: "/contact" },
      ],
    },
  ],
};

export async function getSiteData(): Promise<SiteData> {
  return siteData;
}
