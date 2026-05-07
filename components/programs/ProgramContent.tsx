import { SectionHeader } from '@/components/molecules/SectionHeader';
import { ProgramSection } from "./ProgramSection";
import { Statement } from "@/components/molecules/Statement"; 

interface ProgramContentProps {
  program: any; 
}

export const ProgramContent = ({ program }: ProgramContentProps) => {
  return (
    <div className="lg:col-span-12 space-y-16 md:space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-7">
          <SectionHeader 
            label={program.label}
            title={program.title}
            gradientText={program.gradientText}
          />
        </div>
        
        <div className="lg:col-span-5 lg:pt-8">
           <Statement 
             text={program.statement} 
             label="Overview" 
           />
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-16">
          {program.sections.map((section: any, idx: number) => (
            <ProgramSection key={idx} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};