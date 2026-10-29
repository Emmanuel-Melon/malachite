"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { type LucideIcon, School, TrendingUp, UserCircle, Users } from "lucide-react";
import { IconContainer } from "@/components/atoms/IconContainer";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { ProgramSectionData } from "../programs.types";

const iconMap: Record<string, LucideIcon> = {
  School: School,
  TrendingUp: TrendingUp,
  UserCircle: UserCircle,
  Users: Users,
};

interface ProgramSectionProps {
  section: ProgramSectionData;
}

export const ProgramSection = ({ section }: ProgramSectionProps) => {
  const ResolvedIcon = iconMap[section.icon as string] || Users;
  const animationProps = useScrollAnimation();

  return (
    <motion.div className="space-y-8" variants={staggerContainer} {...animationProps}>
      <motion.div
        className="relative flex flex-col gap-6 md:flex-row md:items-center"
        variants={fadeUp}
      >
        <IconContainer className={section.bg} icon={ResolvedIcon} iconClassName={section.color} />

        <div className="space-y-1">
          <h2 className="text-3xl leading-tight tracking-tighter">{section.title}</h2>
        </div>

        <div className="via-border absolute top-0 bottom-0 -left-4 hidden w-[1px] bg-gradient-to-b from-transparent to-transparent md:block" />
      </motion.div>

      <motion.div className="relative grid gap-6 pl-2 md:pl-20" variants={staggerContainer}>
        <div className="bg-border/40 absolute top-0 bottom-0 left-6 w-[1px] md:left-[2.25rem]" />
        {section.points.map((point) => (
          <motion.div key={point.id} variants={fadeUp}>
            <InfoBlock description={point.desc} title={point.title} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
