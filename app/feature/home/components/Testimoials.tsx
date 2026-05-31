"use client";
import { usePagination } from "@/hooks/use-pagination";
import { PaginationControls } from "@/components/molecules/PaginationControls";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Statement } from "@/components/molecules/Statement";
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
    <section className="bg-background relative overflow-hidden py-24 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <div className="space-y-10 lg:sticky lg:top-32 lg:col-span-4">
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
                {left.map((t, i) => (
                  <TestimonialCard key={i} {...t} />
                ))}
              </div>
              <div className="space-y-6 md:pt-12">
                {right.map((t, i) => (
                  <TestimonialCard key={i} {...t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
