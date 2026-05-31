import type { Partner } from "./shared.types";

const data: Partner[] = [
  // workplace
  { category: "workplace", id: "stanbic_group", name: "Stanbic Group" },
  { category: "workplace", id: "absa", name: "ABSA" },
  { category: "workplace", id: "ncba", name: "NCBA" },
  { category: "workplace", id: "kcb", name: "KCB" },
  { category: "workplace", id: "idi", name: "IDI" },
  { category: "workplace", id: "epicenter", name: "Epicenter" },
  { category: "workplace", id: "i_m_bank", name: "I&M Bank" },
  { category: "workplace", id: "kpmg", name: "KPMG" },
  { category: "workplace", id: "baylor", name: "Baylor" },
  { category: "workplace", id: "cfao", name: "CFAO" },
  { category: "workplace", id: "total", name: "Total" },
  { category: "workplace", id: "dtb", name: "DTB" },
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
  { category: "school", id: "pine_international_school", name: "Pine International School" },
  { category: "school", id: "peak_primary_schools", name: "Peak Primary Schools" },
  { category: "school", id: "lidri_international_schools", name: "LIDRI International Schools" },
];

export async function getPartners(): Promise<Partner[]> {
  return data;
}
