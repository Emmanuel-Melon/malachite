"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Briefcase, HelpCircle, type LucideIcon, Megaphone, School, Users2 } from "lucide-react";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { Section } from "@/components/organisms/section";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { ProgramSummaryItem } from "../programs.types";

const iconMap: Record<string, LucideIcon> = {
  Briefcase: Briefcase,
  School: School,
  Users2: Users2,
  Megaphone: Megaphone,
};

interface ProgramsSummaryProps {
  items: ProgramSummaryItem[];
}

export const ProgramsSummary = ({ items }: ProgramsSummaryProps) => {
  const animationProps = useScrollAnimation();

  return (
    <Section>
      <motion.div
        className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2"
        variants={staggerContainer}
        {...animationProps}
      >
        {items.map((program) => {
          const IconComponent = iconMap[program.icon] || HelpCircle;

          return (
            <motion.div key={program.id} variants={fadeUp}>
              <InfoBlock
                icon={IconComponent}
                title={program.title}
                description={program.description}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};
