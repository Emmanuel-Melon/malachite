"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Statement } from "@/components/atoms/Statement";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { staggerContainer } from "@/lib/motion";

interface PageHeaderProps {
  label: string;
  title: string;
  gradientText: string;
  statement?: string;
}

export const PageHeader = ({ label, title, gradientText, statement }: PageHeaderProps) => {
  const animationProps = useScrollAnimation();

  return (
    <section className="relative overflow-hidden md:pb-24">
      <div className="relative z-10 container mx-auto px-6">
        <motion.div className="max-w-4xl space-y-4" variants={staggerContainer} {...animationProps}>
          <SectionHeader label={label} title={title} gradientText={gradientText} />
          {statement && <Statement text={statement} />}
        </motion.div>
      </div>
    </section>
  );
};
