import type { Partner } from "./shared.types";

const data: Partner[] = [
  // workplace
  {
    category: "workplace",
    id: "stanbic_group",
    name: "Stanbic Group",
    imagePath: "/stanbic.jpeg",
    sponsor: "minet",
  },
  { category: "workplace", id: "absa", name: "ABSA", imagePath: "/absa.jpg", sponsor: "minet" },
  { category: "workplace", id: "ncba", name: "NCBA", imagePath: "/ncba.png", sponsor: "minet" },
  { category: "workplace", id: "kcb", name: "KCB", imagePath: "/kcb.png", sponsor: "minet" },
  { category: "workplace", id: "idi", name: "IDI", imagePath: "/idi.webp", sponsor: "minet" },
  {
    category: "workplace",
    id: "epicenter",
    name: "Epicenter",
    imagePath: "/epicenter.png",
    sponsor: "minet",
  },
  {
    category: "workplace",
    id: "i_m_bank",
    name: "I&M Bank",
    imagePath: "/img.jpg",
    sponsor: "minet",
  },
  { category: "workplace", id: "kpmg", name: "KPMG", imagePath: "/kpmg.webp", sponsor: "minet" },
  {
    category: "workplace",
    id: "baylor",
    name: "Baylor",
    imagePath: "/baylor.jpeg",
    sponsor: "minet",
  },
  { category: "workplace", id: "cfao", name: "CFAO", imagePath: "/cfao.png", sponsor: "minet" },
  { category: "workplace", id: "total", name: "Total", imagePath: "/total.webp", sponsor: "minet" },
  { category: "workplace", id: "dtb", name: "DTB", imagePath: "/dtb.png", sponsor: "minet" },
  {
    category: "workplace",
    id: "electricity_regulatory_authority",
    name: "Electricity Regulatory Authority",
    imagePath: "/era.png",
  },
  { category: "workplace", id: "mkopa", name: "MKOPA", imagePath: "/mkopa.png" },
  { category: "workplace", id: "msf_suka", name: "MSF - SUKA", imagePath: "/msfa.jpeg" },
  { category: "workplace", id: "c_care", name: "C-CARE", imagePath: "/care.jpeg" },
  { category: "workplace", id: "eagle_air", name: "Eagle Air", imagePath: "/eagle.png" },
  { category: "workplace", id: "future_options", name: "Future Options", imagePath: "/future.png" },
  { category: "workplace", id: "nwsc", name: "NWSC", imagePath: "/nwsc.jpeg" },
  { category: "workplace", id: "nssf", name: "NSSF", imagePath: "/nssf.png" },
  // individual-groups
  { category: "individual-groups", id: "intentional_living", name: "Intentional Living" },
  {
    category: "individual-groups",
    id: "virtuous_woman_entebbe",
    name: "Virtuous Woman Entebbe",
    imagePath: "/virtuous-woman.jpeg",
  },
  // school
  {
    category: "school",
    id: "pine_international_school",
    name: "Pine International School",
    imagePath: "/pine.jpg",
  },
  {
    category: "school",
    id: "peak_primary_schools",
    name: "Peak Primary Schools",
    imagePath: "/peak.jpeg",
  },
  {
    category: "school",
    id: "lidri_international_schools",
    name: "LIDRI International Schools",
    imagePath: "/lidri.png",
  },
];

export async function getPartners(): Promise<Partner[]> {
  return data;
}
