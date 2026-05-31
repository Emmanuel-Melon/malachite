import { Handshake, type LucideIcon, ShieldCheck, Sparkles, Users } from "lucide-react";
import { FocusItem } from "@/components/molecules/FocusItem";
import { OverlappingImages } from "@/components/molecules/OverlappingImages";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import type { CultureItemData } from "../about.types";

const iconMap: Record<CultureItemData["iconName"], LucideIcon> = {
  users: Users,
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
  handshake: Handshake,
};

export interface CorporateCultureProps {
  cultureItems: CultureItemData[];
}

export const CorporateCulture = ({ cultureItems }: CorporateCultureProps) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <div className="w-full space-y-12 lg:w-1/2">
          <SectionHeader label="OUR ETHOS" title="Corporate Culture" gradientText="& Values." />

          <div className="space-y-8">
            {cultureItems.map((item, index) => (
              <FocusItem
                key={index}
                icon={iconMap[item.iconName]}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <OverlappingImages
            backImage="/couple.jpg"
            backAlt="Our Culture"
            frontImage="/image.webp"
            frontAlt="Team Collaboration"
            className="h-[500px] md:h-[700px]"
          />
        </div>
      </div>
    </section>
  );
};
