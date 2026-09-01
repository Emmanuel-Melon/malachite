import { sanityClient } from "@/lib/sanity";
import type { Partner } from "./shared.types";

const partnersQuery = `
  *[_type == "partner"]{
    category,
    id,
    name,
    "imagePath": image.asset->url,
    sponsor
  }
`;

export async function getPartners(): Promise<Partner[]> {
  const partners = await sanityClient.fetch<Partner[]>(partnersQuery);
  return partners;
}
