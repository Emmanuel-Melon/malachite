import { SectionHeader } from '@/components/molecules/SectionHeader';
import { ProgramSection } from "./ProgramSection";

interface ProgramContentProps {
  program: any; // Using any for brevity, keep your ProgramData interface
}

export const ProgramContent = ({ program }: ProgramContentProps) => {
  return (
    <div className="lg:col-span-12 space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <SectionHeader 
            label={program.label}
            title={program.title}
            gradientText={program.gradientText}
          />
        </div>
        
        <div className="lg:col-span-5 lg:pt-16">
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-6">
              {program.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-20">
          {program.sections.map((section: any, idx: number) => (
            <ProgramSection key={idx} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};