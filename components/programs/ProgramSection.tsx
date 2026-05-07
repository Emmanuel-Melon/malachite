import { InfoBlock } from "@/components/molecules/InfoBlock";
import { IconContainer } from "@/components/atoms/IconContainer";

interface ProgramPoint {
  title: string;
  desc: string;
}

interface ProgramSectionData {
  title: string;
  icon: any;
  color: string;
  bg: string;
  points: ProgramPoint[];
}

interface ProgramSectionProps {
  section: ProgramSectionData;
}

export const ProgramSection = ({ section }: ProgramSectionProps) => {
  return (
    <div className="space-y-10">
      <div className="relative flex flex-col md:flex-row md:items-center gap-6">
        <IconContainer
          icon={section.icon}
          className={section.bg}
          iconClassName={section.color}
        />

        <div className="space-y-1">
          <div className="inline-flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            </div>

            <span className="text-[10px] font-bold tracking-[.4em] text-muted-foreground uppercase">
              specialized track
            </span>
          </div>
          <h2 className="text-3xl tracking-tighter leading-tight">
            {section.title.toLowerCase()}
          </h2>
        </div>

        <div className="hidden md:block absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="grid gap-6 pl-2 md:pl-20 relative">
        <div className="absolute left-6 md:left-[2.25rem] top-0 bottom-0 w-[1px] bg-border/40" />
        {section.points.map((point, pIdx) => (
          <InfoBlock
            key={pIdx}
            title={point.title.toLowerCase()}
            description={point.desc.toLowerCase()}
          />
        ))}
      </div>
    </div>
  );
};