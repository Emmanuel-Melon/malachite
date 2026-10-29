"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Database, Scale, UserCheck } from "lucide-react";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { fadeUp, staggerContainer } from "@/lib/motion";

const privacyPillars = [
  {
    title: "Your sessions are your sessions.",
    description:
      "If you access Malachite through your employer or an Employee Assistance Programme (EAP), we do not share the content of your sessions with your employer. Where organizations require programme reporting, information is provided strictly in aggregated or de-identified form.",
    icon: UserCheck,
  },
  {
    title: "We only collect what we need.",
    description:
      "Personal and health information is handled carefully, accessed only by authorized persons, protected with appropriate safeguards, and retained only for as long as needed. Guided by Uganda's Data Protection and Privacy Act, we enforce strict data minimisation and security measures.",
    icon: Database,
  },
  {
    title: "There are limited exceptions to confidentiality.",
    description:
      "Information is only shared with your explicit permission, where required by law, or to protect you or another person from serious harm. Uganda's Mental Health Act protects client dignity and privacy while allowing necessary safety disclosures.",
    icon: Scale,
  },
];

export const YourPrivacyMatters = () => {
  const animationProps = useScrollAnimation();

  return (
    <Section>
      <motion.div className="w-full space-y-12" variants={staggerContainer} {...animationProps}>
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            label="Confidentiality & Privacy"
            title="Your privacy"
            gradientText="matters."
          />
        </div>

        {/* Main Soft Card Container */}
        <motion.div
          className="border-border/40 relative overflow-hidden rounded-[2.5rem] border bg-slate-50/60 p-8 md:p-12"
          variants={staggerContainer}
        >
          {/* Main Statement */}
          <div className="border-border/30 max-w-3xl border-b pb-8">
            <motion.p
              className="text-foreground text-xl leading-relaxed font-medium md:text-2xl"
              variants={fadeUp}
            >
              Mental-health support requires trust. What you share with your therapist, counsellor,
              or coach is treated as private and confidential.
            </motion.p>
          </div>

          {/* Privacy Pillars List */}
          <div className="grid gap-8 pt-8">
            {privacyPillars.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <InfoBlock icon={item.icon} title={item.title} description={item.description} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
