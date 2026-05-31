"use client";

import { usePagination } from "@/hooks/use-pagination";
import { Statement } from "@/components/atoms/Statement";
import { PaginationControls } from "@/components/molecules/PaginationControls";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import type { Testimonial } from "../home.types";
import { TestimonialCard } from "./TestimonialCard";

const PAGE_SIZE = 4;

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const { page, paged, totalPages, next, prev } = usePagination(testimonials, PAGE_SIZE);
  const left = paged.filter((_, i) => i % 2 === 0);
  const right = paged.filter((_, i) => i % 2 === 1);

  return (
    <Section>
      <div className="grid items-start gap-16 lg:grid-cols-12">
        <div className="space-y-8 lg:sticky lg:top-32 lg:col-span-4">
          <SectionHeader label="Testimonials" title="Voices of" gradientText="real change." />
          <Statement
            text="read personal reflections and direct feedback from the corporate partners, schools, and individuals we support."
            label="Our Impact"
          />
          <PaginationControls
            page={page}
            totalPages={totalPages}
            onNext={next}
            onPrev={prev}
            prevLabel="Previous testimonials"
            nextLabel="Next testimonials"
          />
        </div>
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
            <div className="space-y-6">
              {left.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
            <div className="space-y-6 md:pt-12">
              {right.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
