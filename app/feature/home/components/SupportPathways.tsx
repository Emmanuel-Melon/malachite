"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Compass,
  HeartHandshake,
  type LucideIcon,
  ShieldCheck,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { IconContainer } from "@/components/atoms/IconContainer";
import { MyButton } from "@/components/atoms/button";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { fadeUp, staggerContainer } from "@/lib/motion";

const SUPPORT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfVqk3Ytl8is-Oxk0AVqUx3v0sOEqgQ-L21OSNMnOPc4Yp14Q/viewform";

interface PathwayItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Pathway {
  title: string;
  icon: LucideIcon;
  items: PathwayItem[];
  cta: {
    label: string;
    href: string;
    external?: boolean;
  };
}

const pathways: Pathway[] = [
  {
    title: "I am looking for support for myself or my family",
    icon: User,
    items: [
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
    ],
    cta: {
      label: "Request Support",
      href: SUPPORT_FORM_URL,
      external: true,
    },
  },
  {
    title: "I represent an organization",
    icon: Building2,
    items: [
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
    ],
    cta: {
      label: "Request a Corporate Consultation",
      href: "/contact",
    },
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
          {pathways.map((pathway) => {
            const Icon = pathway.icon;

            return (
              <motion.div
                key={pathway.title}
                className="border-border/30 flex flex-col rounded-[2.5rem] border bg-slate-50/50 p-8 md:p-10"
                variants={staggerContainer}
              >
                <div className="space-y-8">
                  <motion.div className="flex items-start gap-4" variants={fadeUp}>
                    <IconContainer
                      icon={Icon}
                      className="h-14 w-14 shrink-0 rounded-2xl bg-amber-500/10 text-amber-600"
                      iconClassName="h-7 w-7"
                    />
                    <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                      {pathway.title}
                    </h3>
                  </motion.div>

                  <motion.div className="flex flex-wrap gap-3" variants={fadeUp}>
                    {pathway.items.map((item) => (
                      <span
                        key={item.title}
                        className="border-border/50 bg-background text-foreground/80 rounded-full border px-4 py-2 text-sm"
                      >
                        {item.title}
                      </span>
                    ))}
                  </motion.div>

                  <div className="space-y-6 pt-2">
                    {pathway.items.map((item) => (
                      <motion.div key={item.title} variants={fadeUp}>
                        <InfoBlock
                          icon={item.icon}
                          title={item.title}
                          description={item.description}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div className="mt-auto pt-10" variants={fadeUp}>
                  {pathway.cta.external ? (
                    <MyButton
                      className="group"
                      href={pathway.cta.href}
                      rel="noopener noreferrer"
                      size="lg"
                      target="_blank"
                    >
                      {pathway.cta.label}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </MyButton>
                  ) : (
                    <MyButton asChild className="group" size="lg">
                      <Link href={pathway.cta.href}>
                        {pathway.cta.label}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </MyButton>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};
