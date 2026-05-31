import type { Partner } from "@/lib/data/shared.types";

interface PartnerItemProps {
  partner: Partner;
}

export const PartnerItem = ({ partner }: PartnerItemProps) => {
  return (
    <div className="group border-border/30 hover:bg-accent/30 flex h-auto min-h-24 items-center justify-center border-t border-l bg-transparent p-4 transition-colors duration-300">
      <span className="from-foreground via-primary to-foreground animate-gradient-x bg-gradient-to-r bg-[length:200%_auto] bg-clip-text text-center text-sm leading-snug font-medium tracking-wide text-transparent transition-all duration-300 group-hover:scale-102 sm:text-base md:text-lg">
        {partner.name}
      </span>
    </div>
  );
};
