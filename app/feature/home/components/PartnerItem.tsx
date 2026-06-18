import Image from "next/image";
import type { Partner } from "@/lib/data/shared.types";

interface PartnerItemProps {
  partner: Partner;
}

export const PartnerItem = ({ partner }: PartnerItemProps) => {
  return (
    <div className="group flex h-24 items-center justify-center p-6 transition-all duration-300">
      {partner.imagePath ? (
        <div className="relative h-full w-full opacity-60 transition-all duration-500 group-hover:opacity-100">
          <Image
            src={partner.imagePath}
            alt={partner.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100px, 150px"
          />
        </div>
      ) : (
        <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
          {partner.name}
        </span>
      )}
    </div>
  );
};