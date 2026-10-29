"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Crown, Dumbbell, Search } from "lucide-react";
import { Statement } from "@/components/atoms/Statement";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { FocusArea } from "../home.types";
import { ApproachCard } from "./ApproachCard";

interface ApproachContentProps {
  focusAreas: FocusArea[];
}

export const ApproachContent = ({ focusAreas }: ApproachContentProps) => {
  const animationProps = useScrollAnimation();

  return (
    <Section>
      <div className="grid items-start gap-16 lg:grid-cols-12">
        <motion.div
          className="space-y-10 lg:col-span-5"
          variants={staggerContainer}
          {...animationProps}
        >
          <SectionHeader
            label="Our Approach"
            title="Three crucial"
            gradientText="areas of focus."
          />

          <div className="space-y-6">
            <Statement
              text="Our approach involves three crucial areas of focus designed to empower individuals to live independent lives."
              label="The Approach"
            />

            <motion.div className="space-y-4 pt-4" variants={fadeUp}>
              <div className="text-foreground/80 flex items-center gap-4 text-sm font-medium tracking-widest">
                <div className="flex -space-x-2">
                  <div className="border-background flex h-8 w-8 items-center justify-center rounded-full border-2 bg-blue-500/20">
                    <Search className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="border-background flex h-8 w-8 items-center justify-center rounded-full border-2 bg-amber-500/20">
                    <Crown className="h-4 w-4 text-amber-500" />
                  </div>
                  <div className="bg-primary/20 border-background flex h-8 w-8 items-center justify-center rounded-full border-2">
                    <Dumbbell className="text-primary h-4 w-4" />
                  </div>
                </div>
                <span>Insight • Strategy • Recovery</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 lg:col-span-7"
          variants={staggerContainer}
          {...animationProps}
        >
          {focusAreas.map((item, index) => (
            <ApproachCard key={index} area={item} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
