import Image from "next/image";
import type { Partner } from "@/lib/data/shared.types";

interface PartnerItemProps {
  partner: Partner;
}

export const PartnerItem = ({ partner }: PartnerItemProps) => {
  return (
    // Increased height (h-32) and added a subtle hover-lift effect
    <div className="group flex h-32 items-center justify-center p-8 transition-all duration-300 hover:-translate-y-1">
      {partner.imagePath ? (
        <div className="relative h-full w-full opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:drop-shadow-lg">
          <Image
            src={partner.imagePath}
            alt={partner.name}
            fill
            className="object-contain"
            // Increased size hints to help the browser prioritize higher resolution rendering
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
