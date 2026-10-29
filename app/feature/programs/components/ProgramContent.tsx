"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Statement } from "@/components/atoms/Statement";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { staggerContainer } from "@/lib/motion";
import type { Program } from "../programs.types";
import { ProgramSection } from "./ProgramSection";

interface ProgramContentProps {
  program: Program;
}

export const ProgramContent = ({ program }: ProgramContentProps) => {
  const animationProps = useScrollAnimation();

  return (
    <motion.div
      className="space-y-16 md:space-y-20 lg:col-span-12"
      variants={staggerContainer}
      {...animationProps}
    >
      <motion.div
        className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12"
        variants={staggerContainer}
      >
        <div className="lg:col-span-7">
          <SectionHeader
            label={program.label}
            title={program.title}
            gradientText={program.gradientText}
          />
        </div>

        <div className="lg:col-span-5 lg:pt-8">
          <Statement text={program.description} label="Overview" />
        </div>
      </motion.div>

      <div className="grid gap-16 lg:grid-cols-12">
        <motion.div className="space-y-16 lg:col-span-8" variants={staggerContainer}>
          {program.sections.map((section) => (
            <ProgramSection key={section.id} section={section} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
