import { getPartners } from "@/lib/data/partners";
import { sanityClient } from "@/lib/sanity";
import type { Program, ProgramSummaryItem, ProgramsRegistry } from "../programs.types";
import { programsPageQuery } from "./programs.queries";

export async function getProgramsData(): Promise<ProgramsRegistry> {
  const [allPartners, data] = await Promise.all([
    getPartners(),
    sanityClient.fetch<{ programs: Array<Program & { key: string; image?: any }> }>(
      programsPageQuery,
    ),
  ]);

  const rawPrograms = data?.programs || [];
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
  const data = await sanityClient.fetch<{ programList: ProgramSummaryItem[] }>(programsPageQuery);
  return data?.programList || [];
}
