import { sanityClient } from "@/lib/sanity";
import { getPartners } from "@/lib/data/partners";
import type { ProgramSummaryItem, ProgramsRegistry, Program } from "@/app/feature/programs/programs.types";


export async function getProgramsData(): Promise<ProgramsRegistry> {
  const allPartners = await getPartners();

  const rawPrograms = await sanityClient.fetch<Array<Program & { key: string; image?: any }>>(
    `*[_type == "program"]{
      key,
      label,
      title,
      gradientText,
      description,
      quote,
      "image": image.asset->url,
      sections[]{
        id,
        title,
        icon,
        color,
        bg,
        points[]{
          id,
          title,
          desc
        }
      }
    }`
  );

  const registry: Partial<ProgramsRegistry> = {};

  rawPrograms.forEach((p) => {
    const categoryKey = p.key === "individual_groups" ? "individual-groups" : p.key;
    registry[p.key as keyof ProgramsRegistry] = {
      ...p,
      partners: allPartners.filter((partner) => partner.category === categoryKey),
    };
  });

  return registry as ProgramsRegistry;
}

export async function getProgramList(): Promise<ProgramSummaryItem[]> {
  const query = `
    *[_type == "programSummary"]{
      id,
      description,
      icon,
      key,
      title
    }
  `;
  return sanityClient.fetch<ProgramSummaryItem[]>(query);
}