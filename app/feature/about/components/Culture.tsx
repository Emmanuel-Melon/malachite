import { Handshake, type LucideIcon, ShieldCheck, Sparkles, Users } from "lucide-react";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { OverlappingImages } from "@/components/molecules/OverlappingImages";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
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
    <Section>
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <div className="w-full space-y-8 lg:w-1/2">
          <SectionHeader label="Our Ethos" title="Corporate Culture" gradientText="& Values." />

          <div className="space-y-4">
            {cultureItems.map((item, index) => (
              <InfoBlock
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
            backImage="/package.jpg"
            backAlt="Our Culture"
            frontImage="/engineer.jpg"
            frontAlt="Team Collaboration"
            className="h-[500px] md:h-[700px]"
          />
        </div>
      </div>
    </Section>
  );
};
