"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Handshake, type LucideIcon, ShieldCheck, Sparkles, Users } from "lucide-react";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { OverlappingImages } from "@/components/molecules/OverlappingImages";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { fadeUp, staggerContainer } from "@/lib/motion";
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
  const animationProps = useScrollAnimation();

  return (
    <Section>
      <motion.div
        className="flex flex-col items-center gap-16 lg:flex-row"
        variants={staggerContainer}
        {...animationProps}
      >
        <motion.div className="w-full space-y-8 lg:w-1/2" variants={staggerContainer}>
          <SectionHeader label="Our Ethos" title="Corporate Culture" gradientText="& Values." />

          <div className="space-y-4">
            {cultureItems.map((item, index) => (
              <motion.div key={index} variants={fadeUp}>
                <InfoBlock
                  icon={iconMap[item.iconName]}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="w-full lg:w-1/2" variants={staggerContainer}>
          <OverlappingImages
            backImage="/package.jpg"
            backAlt="Our Culture"
            frontImage="/engineer.jpg"
            frontAlt="Team Collaboration"
            className="h-[500px] md:h-[700px]"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
};
