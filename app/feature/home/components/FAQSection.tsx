"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is counselling confidential?",
    answer:
      "Yes. What you discuss with your therapist is confidential, except where disclosure is required for safety, legal reasons, or with your consent.",
  },
  {
    question: "Will my employer know that I attended counselling?",
    answer:
      "In most cases, no. If your employer referred you, required coaching or therapy as part of a performance process, or you are participating in an organization-wide programme, they may know that you are attending. Any agreed reporting requirements will be explained to you in writing before services begin.",
  },
  {
    question: "What happens during the first session?",
    answer:
      "Your first session is a chance for us to understand what brings you to therapy or coaching, what you would like support with, and agree on the best way forward.",
  },
  {
    question: "How do I request therapy or coaching?",
    answer:
      "Complete our confidential support request form and a member of the Malachite team will contact you to help you get started.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes. We offer both in-person and virtual sessions, depending on your needs and circumstances.",
  },
  {
    question: "How quickly will somebody contact me?",
    answer: "We aim to get back to you within 24 hours on weekdays.",
  },
  {
    question: "What is the difference between therapy and coaching?",
    answer:
      "Therapy focuses more on emotional, psychological and relational difficulties. Coaching is usually more future-focused, helping you develop, make decisions, improve performance and achieve specific goals.",
  },
  {
    question: "Can organizations engage Malachite for EAP or staff programmes?",
    answer:
      "Yes. We work with organizations to provide Employee Assistance Programmes, workplace mental-health services, executive wellness, coaching, training and tailored staff-support programmes.",
  },
  {
    question: "What happens during a mental-health emergency?",
    answer:
      "Malachite is not an emergency service. If you or someone else is at immediate risk of harm, please seek urgent help from the nearest hospital or emergency service and involve a trusted person who can stay with you.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default
  const animationProps = useScrollAnimation();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <motion.div className="w-full space-y-12" variants={staggerContainer} {...animationProps}>
        {/* Section Header */}
        <div className="text-center md:text-left">
          <SectionHeader
            label="Common Questions"
            title="Everything you need"
            gradientText="to know."
          />
        </div>

        {/* Outer Rounded Surface */}
        <motion.div
          className="border-border/30 rounded-[2.5rem] border bg-slate-50/50 p-6 md:p-10"
          variants={staggerContainer}
        >
          <div className="divide-border/40 divide-y">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div key={index} className="py-5 first:pt-0 last:pb-0" variants={fadeUp}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-4 text-left transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-foreground text-lg font-medium tracking-tight md:text-xl">
                      {faq.question}
                    </h3>
                    <div
                      className={cn(
                        "border-border/50 bg-background flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300",
                        isOpen && "rotate-180 border-amber-500/20 bg-amber-500/10 text-amber-600",
                      )}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </div>
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] pt-4 opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
