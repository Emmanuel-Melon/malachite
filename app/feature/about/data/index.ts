import type {
  AboutPageData,
  CultureItemData,
  FounderData,
  TeamMember,
} from "@/app/feature/about/about.types";
import { sanityClient } from "@/lib/sanity";
import { aboutPageQuery } from "./about.queries";

export async function getAboutPageData(): Promise<AboutPageData> {
  const data = await sanityClient.fetch<AboutPageData>(aboutPageQuery);

  return {
    founder: data.founder,
    teamMembers: data.teamMembers,
    cultureItems: data.cultureItems,
  };
}

export async function getFounder(): Promise<FounderData> {
  const data = await getAboutPageData();
  return data.founder;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const data = await getAboutPageData();
  return data.teamMembers;
}

export async function getCultureItems(): Promise<CultureItemData[]> {
  const data = await getAboutPageData();
  return data.cultureItems;
}
