"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { ArrowRight, Building2, GraduationCap, type LucideIcon } from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { OverlappingImages } from "@/components/molecules/OverlappingImages";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { HomeProgram } from "../home.types";

const iconMap: Record<HomeProgram["iconName"], LucideIcon> = {
  "building-2": Building2,
  "graduation-cap": GraduationCap,
};

interface ProgramsContentProps {
  programs: HomeProgram[];
}

export const ProgramsContent = ({ programs }: ProgramsContentProps) => {
  const animationProps = useScrollAnimation();

  return (
    <Section>
      <motion.div
        className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24"
        variants={staggerContainer}
        {...animationProps}
      >
        <motion.div
          className="order-2 w-full space-y-10 lg:order-1 lg:w-1/2"
          variants={staggerContainer}
        >
          <SectionHeader
            label="Malachite's Programs"
            title="Support for every"
            gradientText="environment."
          />

          <div className="grid gap-8">
            {programs.map((program) => (
              <motion.div key={program.id} variants={fadeUp}>
                <InfoBlock
                  description={program.description}
                  icon={iconMap[program.iconName]}
                  title={program.title}
                />
              </motion.div>
            ))}
          </div>

          <motion.div className="flex items-center gap-8" variants={fadeUp}>
            <MyButton asChild size="lg">
              <Link href="/programs">
                explore programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </MyButton>
          </motion.div>
        </motion.div>

        <motion.div className="order-1 w-full lg:order-2 lg:w-1/2" variants={staggerContainer}>
          <OverlappingImages
            backAlt="Community Support"
            backImage="/corporate.jpg"
            className="h-[500px] md:h-[700px]"
            frontAlt="Mental Health Coaching"
            frontImage="/teacher.jpg"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
};
