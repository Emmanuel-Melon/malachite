import type { Metadata } from "next";
import { getProgramList, getProgramsData } from "@/app/feature/programs/data";
import { ProgramsView } from "@/app/feature/programs/views/ProgramsView";

export const metadata: Metadata = {
  description: "Explore our targeted therapeutic interventions and corporate wellness solutions.",
  title: "Programs — Malachite Center for Mental Health",
};

export default async function ProgramsPage() {
  const [programs, programList] = await Promise.all([getProgramsData(), getProgramList()]);

  return <ProgramsView programList={programList} programs={programs} />;
}
