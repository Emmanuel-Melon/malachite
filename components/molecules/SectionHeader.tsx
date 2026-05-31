import { Indicator } from "@/components/atoms/Indicator";

interface SectionHeaderProps {
  label: string;
  title: string;
  gradientText: string;
}

export const SectionHeader = ({ label, title, gradientText }: SectionHeaderProps) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="inline-flex items-center gap-3">
        <Indicator size="xl" className="md:scale-125" />

        <span className="after:bg-primary/20 relative px-4 py-1 text-xs font-bold tracking-[0.3em] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full md:text-sm md:tracking-[0.4em]">
          {label}
        </span>
      </div>

      <h2 className="text-foreground text-4xl leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl md:leading-[0.85] lg:text-7xl">
        {title} <br />
        <span className="from-primary bg-gradient-to-r via-orange-500 to-orange-600 bg-clip-text text-transparent">
          {gradientText}
        </span>
      </h2>
    </div>
  );
};
