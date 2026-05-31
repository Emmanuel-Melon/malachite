"use client";

import { usePagination } from "@/hooks/use-pagination";
import { PaginationControls } from "@/components/molecules/PaginationControls";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import type { Partner } from "@/lib/data/shared.types";
import { PartnerItem } from "./PartnerItem";

interface PartnersProps {
  items: Partner[];
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
  description = "We are proud to support the mental wellbeing of students, educators, and professionals across east africa's premier organizations.",
}: PartnersProps) => {
  const { page, paged, totalPages, next, prev } = usePagination(items, ITEMS_PER_PAGE);

  if (items.length === 0) return null;

  return (
    <Section>
      <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-24">
        <div className="space-y-8 lg:col-span-5">
          <div className="space-y-6">
            <SectionHeader title={title} gradientText={gradientText} label={label} />
            <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
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
          <div className="w-full py-12">
            <div className="border-border/30 grid grid-cols-2 overflow-hidden border-r border-b sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {paged.map((partner) => (
                <PartnerItem key={partner.id} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
