"use client";

import { usePagination } from "@/hooks/use-pagination";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Statement } from "@/components/atoms/Statement";
import { PaginationControls } from "@/components/molecules/PaginationControls";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { Testimonial } from "../home.types";
import { TestimonialCard } from "./TestimonialCard";

const PAGE_SIZE = 4;

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const { page, paged, totalPages, next, prev } = usePagination(testimonials, PAGE_SIZE);
  const animationProps = useScrollAnimation();
  const left = paged.filter((_, i) => i % 2 === 0);
  const right = paged.filter((_, i) => i % 2 === 1);

  return (
    <Section>
      <motion.div
        className="grid items-start gap-16 lg:grid-cols-12"
        variants={staggerContainer}
        {...animationProps}
      >
        <motion.div
          className="space-y-8 lg:sticky lg:top-32 lg:col-span-4"
          variants={staggerContainer}
        >
          <SectionHeader label="Testimonials" title="Voices of" gradientText="real change." />
          <Statement
            text="read personal reflections and direct feedback from the corporate partners, schools, and individuals we support."
            label="Our Impact"
          />
          <motion.div variants={fadeUp}>
            <PaginationControls
              page={page}
              totalPages={totalPages}
              onNext={next}
              onPrev={prev}
              prevLabel="Previous testimonials"
              nextLabel="Next testimonials"
            />
          </motion.div>
        </motion.div>
        <motion.div className="lg:col-span-8" variants={staggerContainer}>
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
            <motion.div className="space-y-6" variants={staggerContainer}>
              {left.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </motion.div>
            <motion.div className="space-y-6 md:pt-12" variants={staggerContainer}>
              {right.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
