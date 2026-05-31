import { Statement } from "@/components/atoms/Statement";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import type { Program } from "../programs.types";
import { ProgramSection } from "./ProgramSection";

interface ProgramContentProps {
  program: Program;
}

export const ProgramContent = ({ program }: ProgramContentProps) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 space-y-16 duration-700 md:space-y-20 lg:col-span-12">
      <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <SectionHeader
            label={program.label}
            title={program.title}
            gradientText={program.gradientText}
          />
        </div>

        <div className="lg:col-span-5 lg:pt-8">
          <Statement text={program.description} label="Overview" />
        </div>
      </div>

      <div className="grid gap-16 lg:grid-cols-12">
        <div className="space-y-16 lg:col-span-8">
          {program.sections.map((section) => (
            <ProgramSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};
