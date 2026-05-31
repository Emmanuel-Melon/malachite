"use client";
import { TestimonialCard } from "./TestimonialCard";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Statement } from "@/components/molecules/Statement";
import { PaginationControls } from "@/components/molecules/PaginationControls";
import { usePagination } from "@/hooks/use-pagination";

interface TestimonialData {
  quote: string;
  author: string;
  role: string;
}

const PAGE_SIZE = 4;

interface TestimonialsProps {
  testimonials: TestimonialData[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const { page, paged, totalPages, next, prev } = usePagination(testimonials, PAGE_SIZE);
  const left = paged.filter((_, i) => i % 2 === 0);
  const right = paged.filter((_, i) => i % 2 === 1);

  return (
    <section className="py-24 bg-background relative overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-32">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="space-y-6">
                {left.map((t, i) => <TestimonialCard key={i} {...t} />)}
              </div>
              <div className="space-y-6 md:pt-12">
                {right.map((t, i) => <TestimonialCard key={i} {...t} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};