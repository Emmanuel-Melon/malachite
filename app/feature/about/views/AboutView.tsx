import { Separator } from "@/components/molecules/separator";
import type { CultureItemData, FounderData, TeamMember } from "../about.types";
import { AboutHeader } from "../components/AboutHeader";
import { CorporateCulture } from "../components/Culture";
import { TeamSection } from "../components/TeamSection";

interface AboutViewProps {
  cultureItems: CultureItemData[];
  founder: FounderData;
  teamMembers: TeamMember[];
}

export const AboutView = ({ cultureItems, founder, teamMembers }: AboutViewProps) => {
  return (
    <section>
      <AboutHeader {...founder} />
      <Separator />
      <TeamSection members={teamMembers} />
      <Separator />
      <CorporateCulture cultureItems={cultureItems} />
    </section>
  );
};
