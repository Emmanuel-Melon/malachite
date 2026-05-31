import { cn } from '@/lib/utils';

interface PartnerItemProps {
  name: string;
}

export const PartnerItem = ({ name }: PartnerItemProps) => {
  const standardShadow = "shadow-[0_0_0.25em_rgba(67,71,85,0.27),0_0.25em_1em_rgba(90,125,188,0.05)]";
  const hoverShadow = "hover:shadow-[0_0_0.4em_rgba(67,71,85,0.3),0_0.3em_1.2em_rgba(90,125,188,0.08)]";

  return (
    <div
      className={cn(
        "group relative h-24 md:h-28 flex items-center justify-center p-5",
        "rounded-2xl bg-[#FCFCFD] border border-border/40",
        "transition-all duration-150 ease-out",
        "hover:-translate-y-0.5 hover:rotate-1",
        "active:translate-y-0.5",
        standardShadow,
        hoverShadow
      )}
    >
      <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center uppercase px-2">
        {name}
      </span>
    </div>
  );
};