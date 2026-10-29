"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { IconContainer } from "@/components/atoms/IconContainer";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { fadeUp, staggerContainer } from "@/lib/motion";

const individualPathways = [
  {
    title: "Therapy",
    description: "One-on-one sessions tailored to personal mental health needs.",
    icon: Compass,
  },
  {
    title: "Coaching",
    description: "Goal-oriented guidance for personal growth and resilience.",
    icon: Sparkles,
  },
  {
    title: "Assessments",
    description: "Comprehensive diagnostic evaluations by certified specialists.",
    icon: ShieldCheck,
  },
];

const corporatePathways = [
  {
    title: "Employee Assistance Programmes",
    description: "Confidential, 24/7 mental health support for your teams.",
    icon: HeartHandshake,
  },
  {
    title: "Workplace Mental Health",
    description: "Proactive strategies to foster healthy organizational cultures.",
    icon: Building2,
  },
  {
    title: "Executive Wellness",
    description: "Tailored well-being support for business leaders.",
    icon: Briefcase,
  },
  {
    title: "Leadership & Coaching",
    description: "Empower managers to lead with empathy and psychological safety.",
    icon: Users,
  },
];

export const SupportPathways = () => {
  const animationProps = useScrollAnimation();

  return (
    <Section>
      <motion.div className="space-y-16" variants={staggerContainer} {...animationProps}>
        <SectionHeader
          label="Tailored Solutions"
          title="Choose your path"
          gradientText="to wellness."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Column 1: Individuals */}
          <motion.div
            className="border-border/30 flex flex-col justify-between rounded-[2.5rem] border bg-slate-50/50 p-8 md:p-10"
            variants={staggerContainer}
          >
            <div className="space-y-8">
              <motion.div className="flex items-center gap-4" variants={fadeUp}>
                <IconContainer
                  icon={User}
                  className="h-14 w-14 rounded-2xl bg-amber-500/10 text-amber-600"
                  iconClassName="w-7 h-7"
                />
                <div>
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    Individuals & Families
                  </h3>
                </div>
              </motion.div>

              <div className="space-y-6 pt-4">
                {individualPathways.map((item) => (
                  <motion.div key={item.title} variants={fadeUp}>
                    <InfoBlock icon={item.icon} title={item.title} description={item.description} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Organizations */}
          <motion.div
            className="border-border/30 flex flex-col justify-between rounded-[2.5rem] border bg-slate-50/50 p-8 md:p-10"
            variants={staggerContainer}
          >
            <div className="space-y-8">
              <motion.div className="flex items-center gap-4" variants={fadeUp}>
                <IconContainer
                  icon={Building2}
                  className="h-14 w-14 rounded-2xl bg-amber-500/10 text-amber-600"
                  iconClassName="w-7 h-7"
                />
                <div>
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    For Organizations
                  </h3>
                </div>
              </motion.div>

              <div className="space-y-6 pt-4">
                {corporatePathways.map((item) => (
                  <motion.div key={item.title} variants={fadeUp}>
                    <InfoBlock icon={item.icon} title={item.title} description={item.description} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};
