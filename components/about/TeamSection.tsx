import React from 'react';
import { ArrowRight } from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { TeamMember } from "./TeamMember";

interface TeamMemberData {
  name: string;
  role: string;
  image: string;
}

export const TeamSection = () => {
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

  return (
    <section className="border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <SectionHeader 
              label="the team"
              title="guided by world class"
              gradientText="specialists."
            />
          </div>
          <MyButton variant="outline" className="rounded-full px-8 h-12 border-2">
            join our team
            <ArrowRight className="ml-2 w-4 h-4" />
          </MyButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
