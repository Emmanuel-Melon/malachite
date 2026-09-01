import { GradientHeading } from "@/components/atoms/GradientHeading";
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
        <Indicator size="xl" className="md:scale-125" layout="grid" />
        <span className="after:bg-primary/20 relative px-4 py-1 text-xs tracking-[0.3em] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full md:text-sm md:tracking-[0.4em]">
          {label}
        </span>
      </div>

      <GradientHeading as="h2" size="lg" title={title} gradientText={gradientText} />
    </div>
  );
};
