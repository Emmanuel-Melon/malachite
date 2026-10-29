"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { OverlappingImages } from "@/components/molecules/OverlappingImages";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { Objective, ObjectiveIconName } from "../home.types";

const iconMap: Record<ObjectiveIconName, LucideIcon> = {
  "bar-chart-3": BarChart3,
  "flask-conical": FlaskConical,
  "graduation-cap": GraduationCap,
  "heart-handshake": HeartHandshake,
};

interface ObjectivesContentProps {
  objectives: Objective[];
}

export const ObjectivesContent = ({ objectives }: ObjectivesContentProps) => {
  const animationProps = useScrollAnimation();

  return (
    <Section>
      <motion.div
        className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24"
        variants={staggerContainer}
        {...animationProps}
      >
        <motion.div
          className="order-2 w-full space-y-8 lg:order-1 lg:w-1/2"
          variants={staggerContainer}
        >
          <SectionHeader label="Our Objectives" title="Our focus" gradientText="with purpose." />
          <motion.p className="text-muted-foreground text-lg leading-relaxed" variants={fadeUp}>
            We strive to bridge the gap in mental health care through a four-pillared approach to
            treatment, training, and documentation.
          </motion.p>
          <div className="grid gap-8">
            {objectives.map((obj) => (
              <motion.div key={obj.id} variants={fadeUp}>
                <InfoBlock
                  icon={iconMap[obj.iconName]}
                  title={obj.title}
                  description={obj.description}
                />
              </motion.div>
            ))}
          </div>
          <motion.div className="flex items-center gap-8" variants={fadeUp}>
            <MyButton size="lg" asChild>
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </MyButton>
          </motion.div>
        </motion.div>

        <motion.div className="order-1 w-full lg:order-2 lg:w-1/2" variants={staggerContainer}>
          <OverlappingImages
            backImage="/family.jpg"
            backAlt="Our Mission"
            frontImage="/painter.jpg"
            frontAlt="Making Impact"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
};
