"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { IconContainer } from "@/components/atoms/IconContainer";
import { MyButton } from "@/components/atoms/button";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { fadeUp, staggerContainer } from "@/lib/motion";

const THERAPY_FORM_URL = "https://forms.gle/D6jVb43tda9oj4cB9";
const COACHING_FORM_URL = "https://forms.gle/n5ALfkFeEgmqq79H7";

const therapyAreas = [
  "stress",
  "anxiety",
  "low mood",
  "burnout",
  "grief",
  "trauma",
  "relationship difficulties",
  "life transitions",
  "emotional regulation",
  "neurodiversity-related challenges",
];

const coachingAreas = [
  "executive coaching",
  "leadership development",
  "emotional intelligence",
  "neurodiversity coaching",
  "personal development",
  "21st-century career planning and guidance",
];

export const TherapyCoaching = () => {
  const animationProps = useScrollAnimation();

  return (
    <Section>
      <motion.div className="space-y-12" variants={staggerContainer} {...animationProps}>
        <SectionHeader
          label="Individual Support"
          title="Support for"
          gradientText="you and your family."
        />

        <motion.article
          className="border-border/30 space-y-6 rounded-[2.5rem] border bg-slate-50/50 p-8 md:p-10"
          variants={staggerContainer}
        >
          <motion.div className="flex items-start gap-4" variants={fadeUp}>
            <IconContainer
              icon={Compass}
              className="h-12 w-12 shrink-0 rounded-2xl bg-amber-500/10 text-amber-600"
              iconClassName="h-6 w-6"
            />
            <div className="space-y-1">
              <p className="text-muted-foreground text-[10px] tracking-[.3em]">Therapy</p>
              <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                A safe place to talk, understand and move forward.
              </h3>
            </div>
          </motion.div>

          <motion.p className="text-muted-foreground text-lg leading-relaxed" variants={fadeUp}>
            Therapy can help when life feels overwhelming, something keeps repeating, or you simply
            need a safe space to make sense of what you are carrying. You do not need a diagnosis or
            to know exactly what help you need before reaching out.
          </motion.p>

          <motion.p className="text-muted-foreground text-lg leading-relaxed" variants={fadeUp}>
            We support concerns such as {therapyAreas.join(", ")}.
          </motion.p>

          <motion.div className="space-y-2" variants={fadeUp}>
            <h4 className="text-lg font-medium tracking-tight">What to expect</h4>
            <ul className="text-muted-foreground space-y-2 text-lg leading-relaxed">
              <li>Complete our confidential support form.</li>
              <li>A Malachite team member contacts you within 24 hours on weekdays.</li>
              <li>We help connect you with the most appropriate therapist or service.</li>
              <li>Therapy is available in person in Kampala and virtually, where appropriate.</li>
            </ul>
          </motion.div>

          <motion.p className="text-muted-foreground text-lg leading-relaxed" variants={fadeUp}>
            What you share in therapy is confidential. If you access support through your employer,
            they do not receive details of your sessions. Where psychiatric or medical support may
            help, we discuss it with you and support an appropriate referral.
          </motion.p>

          <motion.div variants={fadeUp}>
            <MyButton
              className="group"
              href={THERAPY_FORM_URL}
              rel="noopener noreferrer"
              size="lg"
              target="_blank"
            >
              Register for Therapy
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MyButton>
          </motion.div>
        </motion.article>

        <motion.article
          className="border-border/30 space-y-6 rounded-[2.5rem] border bg-slate-50/50 p-8 md:p-10"
          variants={staggerContainer}
        >
          <motion.div className="flex items-start gap-4" variants={fadeUp}>
            <IconContainer
              icon={Sparkles}
              className="h-12 w-12 shrink-0 rounded-2xl bg-amber-500/10 text-amber-600"
              iconClassName="h-6 w-6"
            />
            <div className="space-y-1">
              <p className="text-muted-foreground text-[10px] tracking-[.3em]">Coaching</p>
              <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                Clarity. Growth. Better decisions.
              </h3>
            </div>
          </motion.div>

          <motion.p className="text-muted-foreground text-lg leading-relaxed" variants={fadeUp}>
            Coaching is for people who want to grow, lead more effectively, make clearer decisions,
            or navigate change with greater confidence.
          </motion.p>

          <motion.p className="text-muted-foreground text-lg leading-relaxed" variants={fadeUp}>
            Coaching may include {coachingAreas.join(", ")}.
          </motion.p>

          <motion.p className="text-muted-foreground text-lg leading-relaxed" variants={fadeUp}>
            Coaching is practical and forward-focused. Together, we identify where you are, where
            you want to go, and the thinking, habits, or skills that may help you get there.
          </motion.p>

          <motion.div className="space-y-2" variants={fadeUp}>
            <h4 className="text-lg font-medium tracking-tight">Coaching or therapy?</h4>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Therapy helps you understand and work through emotional, psychological, or relational
              difficulties. Coaching focuses more on growth, performance, development, and future
              goals. Sometimes the two overlap; if you are unsure, reach out and we will help you
              identify the right pathway.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <MyButton
              className="group"
              href={COACHING_FORM_URL}
              rel="noopener noreferrer"
              size="lg"
              target="_blank"
            >
              Request Therapy or Coaching Support
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MyButton>
          </motion.div>
        </motion.article>

        <motion.p
          className="text-muted-foreground text-center text-lg leading-relaxed"
          variants={fadeUp}
        >
          Not sure where to begin? Start by telling us what is going on. We will help you with the
          next step.
        </motion.p>
      </motion.div>
    </Section>
  );
};
