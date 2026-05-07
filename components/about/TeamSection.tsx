import { TeamMember } from "./TeamMember";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Statement } from "@/components/molecules/Statement";

interface TeamMemberData {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMemberData[] = [
  {
    name: "Christine Mukasa Mugerwa",
    role: "Board Member",
    image: "/christine.png"
  },
  {
    name: "Katherine Sempebwa Turinawe",
    role: "Board Member",
    image: "/katherine.png"
  },
  {
    name: "Leonard Businge",
    role: "Board Member",
    image: "/leonard.png"
  },
  {
    name: "Waweuru Njenga",
    role: "Board Chairman",
    image: "/waweru.png"
  }
];

export const TeamSection = () => {

  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};