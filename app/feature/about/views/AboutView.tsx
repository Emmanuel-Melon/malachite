import { Separator } from "@/components/atoms/separator";
import { VIEW_LAYOUT_CLASS } from "@/lib/styles";
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
    <div className={VIEW_LAYOUT_CLASS}>
      <AboutHeader {...founder} />
      <Separator />
      <TeamSection members={teamMembers} />
      <Separator />
      <CorporateCulture cultureItems={cultureItems} />
    </div>
  );
};
