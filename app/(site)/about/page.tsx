import type { Metadata } from "next";
import { getAboutPageData } from "@/app/feature/about/data";
import { AboutView } from "@/app/feature/about/views/AboutView";

export const metadata: Metadata = {
  description: "Learn about our founding story, clinical team, and organizational ethos.",
  title: "About — Malachite Center for Mental Health",
};

export default async function AboutPage() {
  const { founder, teamMembers, cultureItems } = await getAboutPageData();

  return <AboutView cultureItems={cultureItems} founder={founder} teamMembers={teamMembers} />;
}
