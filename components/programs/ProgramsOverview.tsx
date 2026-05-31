import { Briefcase, School, Users2, Megaphone } from "lucide-react";
import { FocusItem } from "@/components/molecules/FocusItem";
import { LucideIcon } from "lucide-react";

interface ProgramTeaser {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProgramOverviewProps {
  teasers: ProgramTeaser[];
}

export const ProgramOverview = ({ teasers }: ProgramOverviewProps) => {
  return (
    <section className="bg-background font-sans overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
          {teasers.map((program, index) => (
            <FocusItem
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};