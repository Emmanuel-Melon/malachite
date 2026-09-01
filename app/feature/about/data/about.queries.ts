import { sanityClient } from "@/lib/sanity";
import type { CultureItemData, FounderData, TeamMember } from "@/app/feature/about/about.types";

export async function getFounder(): Promise<FounderData> {
  const query = `
    *[_type == "founder"][0]{
      headerLabel,
      headerTitle,
      headerGradientText,
      statementLabel,
      statementText,
      "imageSrc": image.asset->url,
      imageAlt,
      founderRole,
      founderName
    }
  `;
  return sanityClient.fetch<FounderData>(query);
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const query = `
    *[_type == "teamMember"]{
      id,
      name,
      role,
      "image": image.asset->url
    }
  `;
  return sanityClient.fetch<TeamMember[]>(query);
}

export async function getCultureItems(): Promise<CultureItemData[]> {
  const query = `
    *[_type == "cultureItem"]{
      id,
      title,
      description,
      iconName,
      color,
      bg
    }
  `;
  return sanityClient.fetch<CultureItemData[]>(query);
}