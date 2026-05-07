import { Indicator } from "@/components/atoms/Indicator";

interface SectionHeaderProps {
  label: string;
  title: string;
  gradientText: string;
}

export const SectionHeader = ({ label, title, gradientText }: SectionHeaderProps) => {
  return (
    <div className="space-y-8">
      <div className="inline-flex items-center gap-3">
        <Indicator size="xl"/>
        
        <span className="
          relative
          px-4 py-1
          font-bold tracking-[0.4em] uppercase
          after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary/20
        ">
          {label}
        </span>
      </div>

      <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.85] text-foreground">
        {title} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-orange-600">
          {gradientText}
        </span>
      </h2>
    </div>
  );
};