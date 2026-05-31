"use client";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { cn } from '@/lib/utils';
import { PaginationControls } from "@/components/molecules/PaginationControls";
import { usePagination } from "@/hooks/use-pagination";
import { PartnerItem } from "./PartnerItem";

interface PartnerData {
  name: string;
}

interface PartnersProps {
  items: PartnerData[];
  title?: string;
  gradientText?: string;
  label?: string;
  description?: string;
}

const ITEMS_PER_PAGE = 6;

export const Partners = ({
  items,
  title = "Partnering with",
  gradientText = "leading institutions.",
  label = "Trust & Impact",
  description = "we are proud to support the mental wellbeing of students, educators, and professionals across east africa's premier organizations."
}: PartnersProps) => {
  const { page, paged, totalPages, next, prev } = usePagination(items, ITEMS_PER_PAGE);

  if (items.length === 0) return null;

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <SectionHeader title={title} gradientText={gradientText} label={label} />
              <p className="text-muted-foreground text-lg leading-relaxed lowercase italic">
                {description}
              </p>
            </div>
            <PaginationControls
              page={page}
              totalPages={totalPages}
              onNext={next}
              onPrev={prev}
              prevLabel="Previous partners"
              nextLabel="Next partners"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {paged.map((partner, index) => (
                <PartnerItem key={index} name={partner.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
