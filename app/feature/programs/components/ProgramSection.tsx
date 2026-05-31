import { type LucideIcon, School, TrendingUp, UserCircle, Users } from "lucide-react";
import { IconContainer } from "@/components/atoms/IconContainer";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import type { ProgramSectionData } from "../programs.types";

// Explicitly map the string keys coming from your JSON data to Lucide Components
const iconMap: Record<string, LucideIcon> = {
  School: School,
  TrendingUp: TrendingUp,
  UserCircle: UserCircle,
  Users: Users,
};

interface ProgramSectionProps {
  section: ProgramSectionData;
}

export const ProgramSection = ({ section }: ProgramSectionProps) => {
  const ResolvedIcon = iconMap[section.icon as string] || Users;

  return (
    <div className="space-y-10">
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
        {/* Pass the fully resolved component object reference */}
        <IconContainer className={section.bg} icon={ResolvedIcon} iconClassName={section.color} />

        <div className="space-y-1">
          <h2 className="text-3xl leading-tight tracking-tighter">{section.title.toLowerCase()}</h2>
        </div>

        <div className="via-border absolute top-0 bottom-0 -left-4 hidden w-[1px] bg-gradient-to-b from-transparent to-transparent md:block" />
      </div>

      <div className="relative grid gap-6 pl-2 md:pl-20">
        <div className="bg-border/40 absolute top-0 bottom-0 left-6 w-[1px] md:left-[2.25rem]" />
        {section.points.map((point, pIdx) => (
          <InfoBlock
            key={pIdx}
            description={point.desc.toLowerCase()}
            title={point.title.toLowerCase()}
          />
        ))}
      </div>
    </div>
  );
};
