import * as LucideIcons from "lucide-react";
import { FocusItem } from "@/components/molecules/FocusItem";
import type { ProgramSummaryItem } from "../programs.types";

interface ProgramsSummaryProps {
  items: ProgramSummaryItem[];
}

export const ProgramsSummary = ({ items }: ProgramsSummaryProps) => {
  return (
    <section className="bg-background overflow-hidden font-sans">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
          {items.map((program, index) => {
            const IconComponent =
              (LucideIcons as Record<string, any>)[program.icon] || LucideIcons.HelpCircle;

            return (
              <FocusItem
                key={index}
                icon={IconComponent}
                title={program.title}
                description={program.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
