import { Briefcase, HelpCircle, type LucideIcon, Megaphone, School, Users2 } from "lucide-react";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { Section } from "@/components/organisms/section";
import type { ProgramSummaryItem } from "../programs.types";

const iconMap: Record<string, LucideIcon> = {
  Briefcase: Briefcase,
  School: School,
  Users2: Users2,
  Megaphone: Megaphone,
};

interface ProgramsSummaryProps {
  items: ProgramSummaryItem[];
}

export const ProgramsSummary = ({ items }: ProgramsSummaryProps) => {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
        {items.map((program) => {
          const IconComponent = iconMap[program.icon] || HelpCircle;

          return (
            <InfoBlock
              key={program.id}
              icon={IconComponent}
              title={program.title}
              description={program.description}
            />
          );
        })}
      </div>
    </Section>
  );
};
