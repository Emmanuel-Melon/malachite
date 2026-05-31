import type { SiteData } from "./shared.types";

const siteData: SiteData = {
  mission:
    "Empowering individuals to reach their full potential through sustainable recovery and clinical innovation.",
  founderName: "Christina Angela Ntulo",
  founderRole: "Founder",
  founderQuote:
    "Empowering individuals to reach their full potential through sustainable recovery and clinical innovation.",
  phoneNumber: "+256757356691",
  ctaHeading: "Ready to start your journey?",
  ctaSubheading: "Get in touch with our specialist team today.",
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
    { name: "About", href: "/about", icon: "info" },
    { name: "Programs", href: "/programs", icon: "layers" },
    { name: "Contact", href: "/contact", icon: "mail" },
  ],
  navigation: [
    {
      title: "Company",
      links: [
        { label: "About us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
};

export async function getSiteData(): Promise<SiteData> {
  return siteData;
}
