import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Statement } from "@/components/molecules/Statement";
import type { TeamMember } from "../about.types";
import { TeamMemberItem } from "./TeamMember";

interface TeamSectionProps {
  members: TeamMember[];
}

export const TeamSection = ({ members }: TeamSectionProps) => {
  return (
    <section>
      <div className="mb-24 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <SectionHeader
            label="OUR LEADERSHIP"
            title="Guided by world class"
            gradientText="specialists."
          />
        </div>
        <Statement
          text="our board brings decades of collective experience in clinical governance, strategic growth, and mental health advocacy."
          label="Board of Directors"
          className="lg:mb-2"
        />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {members.map((member, index) => (
          <TeamMemberItem key={index} name={member.name} role={member.role} image={member.image} />
        ))}
      </div>
    </section>
  );
};
