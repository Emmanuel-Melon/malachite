import { sanityClient } from "@/lib/sanity";
import { SiteData } from "./shared.types";

const siteDataQuery = `
  *[_type == "siteSettings"][0]{
    mission,
    founderName,
    founderRole,
    founderQuote,
    phoneNumber,
    ctaHeading,
    ctaSubheading,
    contact[]{ icon, value },
    socials[]{ href, icon, label },
    navLinks[]{ name, href, icon },
    navigation[]{
      title,
      links[]{ label, href }
    }
  }
`;

export async function getSiteData(): Promise<SiteData> {
  const data = await sanityClient.fetch<SiteData>(siteDataQuery);
  return data;
}