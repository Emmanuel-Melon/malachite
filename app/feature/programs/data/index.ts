import { getPartners } from "@/lib/data/partners";
import type { ProgramSummaryItem, ProgramsRegistry } from "../programs.types";
import { awareness } from "./awareness";
import { individualGroups } from "./individual-groups";
import { school } from "./school";
import { workplace } from "./workplace";

const programList: ProgramSummaryItem[] = [
  {
    id: "program-summary-workplace",
    description:
      "Targeted solutions for corporate environments, focusing on productivity and employee well-being.",
    icon: "Briefcase",
    key: "workplace",
    title: "Workplace Mental Health",
  },
  {
    id: "program-summary-school",
    description:
      "Supporting adolescent development through emotional literacy and school-wide mental health advocacy.",
    icon: "School",
    key: "school",
    title: "School-Based Services",
  },
  {
    id: "program-summary-individual",
    description:
      "Tailored therapeutic interventions for depression, anxiety, and complex recovery journeys.",
    icon: "Users2",
    key: "individual_groups",
    title: "Individuals & Groups",
  },
  {
    id: "program-summary-awareness",
    description:
      "Utilizing digital media and community series to bridge the gap in mental health literacy.",
    icon: "Megaphone",
    key: "awareness",
    title: "Awareness & Outreach",
  },
];

export async function getProgramsData(): Promise<ProgramsRegistry> {
  const allPartners = await getPartners();

  return {
    awareness: {
      ...awareness,
      partners: [],
    },
    individual_groups: {
      ...individualGroups,
      partners: allPartners.filter((partner) => partner.category === "individual-groups"),
    },
    school: {
      ...school,
      partners: allPartners.filter((partner) => partner.category === "school"),
    },
    workplace: {
      ...workplace,
      partners: allPartners.filter((partner) => partner.category === "workplace"),
    },
  };
}

export async function getProgramList(): Promise<ProgramSummaryItem[]> {
  return programList;
}
