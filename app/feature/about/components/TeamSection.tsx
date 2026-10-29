"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Statement } from "@/components/atoms/Statement";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { staggerContainer } from "@/lib/motion";
import type { TeamMember } from "../about.types";
import { TeamMemberItem } from "./TeamMember";

interface TeamSectionProps {
  members: TeamMember[];
}

export const TeamSection = ({ members }: TeamSectionProps) => {
  const animationProps = useScrollAnimation();

  return (
    <Section>
      <motion.div className="space-y-12" variants={staggerContainer} {...animationProps}>
        <motion.div
          className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end"
          variants={staggerContainer}
        >
          <div className="max-w-2xl">
            <SectionHeader
              label="Our Leadership"
              title="Guided by world class"
              gradientText="specialists."
            />
          </div>
          <Statement
            text="Our board brings decades of collective experience in clinical governance, strategic growth, and mental health advocacy."
            label="Board of Directors"
            className="lg:mb-2"
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
        >
          {members.map((member) => (
            <TeamMemberItem key={member.id} member={member} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};
