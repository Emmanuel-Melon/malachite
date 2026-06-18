import type { Partner } from "./shared.types";

const data: Partner[] = [
  // workplace
  { category: "workplace", id: "stanbic_group", name: "Stanbic Group", imagePath: "/stanbic.jpeg", sponsor: "minet" },
  { category: "workplace", id: "absa", name: "ABSA", imagePath: "/absa.jpg", sponsor: "minet" },
  { category: "workplace", id: "ncba", name: "NCBA", imagePath: "/ncba.png", sponsor: "minet" },
  { category: "workplace", id: "kcb", name: "KCB", imagePath: "/kcb.png", sponsor: "minet" },
  { category: "workplace", id: "idi", name: "IDI", imagePath: "/idi.webp", sponsor: "minet" },
  { category: "workplace", id: "epicenter", name: "Epicenter", imagePath: "/epicenter.png", sponsor: "minet" },
  { category: "workplace", id: "i_m_bank", name: "I&M Bank", imagePath: "/im.jpg" },
  { category: "workplace", id: "kpmg", name: "KPMG", imagePath: "/kpmg.jpg" },
  { category: "workplace", id: "baylor", name: "Baylor", imagePath: "/baylor.jpg" },
  { category: "workplace", id: "cfao", name: "CFAO", imagePath: "/cfao.jpg" },
  { category: "workplace", id: "total", name: "Total", imagePath: "/total.jpg" },
  { category: "workplace", id: "dtb", name: "DTB", imagePath: "/dtb.jpg" },
  {
    category: "workplace",
    id: "electricity_regulatory_authority",
    name: "Electricity Regulatory Authority",
  },
  { category: "workplace", id: "mkopa", name: "MKOPA" },
  { category: "workplace", id: "msf_suka", name: "MSF - SUKA" },
  { category: "workplace", id: "c_care", name: "C-CARE" },
  { category: "workplace", id: "eagle_air", name: "Eagle Air" },
  { category: "workplace", id: "future_options", name: "Future Options" },
  { category: "workplace", id: "nwsc", name: "NWSC" },
  { category: "workplace", id: "nssf", name: "NSSF" },
  // individual-groups
  { category: "individual-groups", id: "intentional_living", name: "Intentional Living" },
  { category: "individual-groups", id: "virtuous_woman_entebbe", name: "Virtuous Woman Entebbe" },
  // school
  { category: "school", id: "pine_international_school", name: "Pine International School", imagePath: "/pine.jpg" },
  { category: "school", id: "peak_primary_schools", name: "Peak Primary Schools", imagePath: "/peak.jpeg" },
  { category: "school", id: "lidri_international_schools", name: "LIDRI International Schools", imagePath: "/lidri.png" },
];

export async function getPartners(): Promise<Partner[]> {
  return data;
}
