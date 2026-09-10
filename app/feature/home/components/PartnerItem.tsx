import Image from "next/image";
import type { Partner } from "@/lib/data/shared.types";

interface PartnerItemProps {
  partner: Partner;
}

export const PartnerItem = ({ partner }: PartnerItemProps) => {
  return (
    // Increased height (h-32) and added a subtle hover-lift effect
    <div className="group border-border/30 flex h-full min-h-32 items-center justify-center border-r border-b p-8">
      {partner.imagePath ? (
        <div className="relative h-full w-full opacity-80">
          <Image
            src={partner.imagePath}
            alt={partner.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 150px, 250px"
          />
        </div>
      ) : (
        // Made text larger and more prominent for better visual balance
        <span className="text-foreground/70 group-hover:text-primary text-base font-semibold transition-colors">
          {partner.name}
        </span>
      )}
    </div>
  );
};
