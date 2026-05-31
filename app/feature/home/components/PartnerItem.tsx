import type { Partner } from "@/lib/data/shared.types";
import { cn } from "@/lib/utils";

interface PartnerItemProps {
  partner: Partner;
}

export const PartnerItem = ({ partner }: PartnerItemProps) => {
  return (
    <div className="group border-border/30 flex h-24 items-center justify-center border-t border-l bg-transparent p-6 transition-colors duration-300 hover:bg-[#F9F7F4]/50">
      <span className="text-muted-foreground/70 group-hover:text-foreground text-center text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 group-hover:tracking-[0.3em]">
        {partner.name}
      </span>
    </div>
  );
};
