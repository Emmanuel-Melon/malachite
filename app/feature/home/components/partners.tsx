"use client";

import { useMemo, useState } from "react";
import { usePagination } from "@/hooks/use-pagination";
import { PaginationControls } from "@/components/molecules/PaginationControls";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import type { Partner, PartnerSponsor } from "@/lib/data/shared.types";
import { cn } from "@/lib/utils";
import { PartnerItem } from "./PartnerItem";

interface PartnersProps {
  items: Partner[];
  title?: string;
  gradientText?: string;
  label?: string;
  description?: string;
  groupedBySponsor?: boolean;
}

const ITEMS_PER_PAGE = 8;

const sponsorLabels: Record<PartnerSponsor, string> = {
  minet: "Minet",
  precision: "Precision HR",
  others: "Others",
};

const sponsorHeadings: Record<PartnerSponsor, string> = {
  minet: "Organizations supported through our EAP partnership with Minet",
  precision: "Organizations supported through our partnership with Precision HR",
  others: "Other partner organizations",
};

const sponsorDescriptions: Record<PartnerSponsor, string> = {
  minet: "",
  precision: "",
  others: "",
};

const sponsorOrder: PartnerSponsor[] = ["minet", "precision", "others"];

function normalizeSponsor(raw?: string): PartnerSponsor {
  const lower = raw?.toLowerCase().trim();
  if (lower === "minet") return "minet";
  if (lower === "precision") return "precision";
  return "others";
}

const PartnerGrid = ({ items }: { items: Partner[] }) => {
  const { page, paged, totalPages, next, prev } = usePagination(items, ITEMS_PER_PAGE);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {paged.map((partner) => (
          <PartnerItem key={partner.id} partner={partner} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-6">
          <PaginationControls
            page={page}
            totalPages={totalPages}
            onNext={next}
            onPrev={prev}
            prevLabel="Previous partners"
            nextLabel="Next partners"
          />
        </div>
      )}
    </div>
  );
};

export const Partners = ({
  items,
  title = "Partnering with",
  gradientText = "leading institutions.",
  label = "Trust & Impact",
  description = "We are proud to support the mental wellbeing of students, educators, and professionals across east africa's premier organizations.",
  groupedBySponsor = false,
}: PartnersProps) => {
  const grouped = useMemo(() => {
    if (!groupedBySponsor) return null;

    const groups = new Map<PartnerSponsor, Partner[]>();
    for (const item of items) {
      const sponsor = normalizeSponsor(item.sponsor);
      if (!groups.has(sponsor)) groups.set(sponsor, []);
      groups.get(sponsor)!.push(item);
    }

    return sponsorOrder
      .filter((s) => groups.has(s) && groups.get(s)!.length > 0)
      .map((s) => ({
        sponsor: s,
        label: sponsorLabels[s],
        heading: sponsorHeadings[s],
        description: sponsorDescriptions[s],
        items: groups.get(s)!,
      }));
  }, [items, groupedBySponsor]);

  const [activeTab, setActiveTab] = useState<PartnerSponsor | null>(
    grouped && grouped.length > 0 ? grouped[0].sponsor : null,
  );

  const activeGroup = grouped?.find((g) => g.sponsor === activeTab);

  const { page, paged, totalPages, next, prev } = usePagination(items, ITEMS_PER_PAGE);

  if (items.length === 0) return null;

  if (!groupedBySponsor) {
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
          <PartnerGrid items={paged} />
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="border-border/50 relative overflow-hidden rounded-[4.5rem] border bg-[#F9F7F4] p-8 md:p-12 lg:p-24">
        <div className="bg-primary/5 pointer-events-none absolute top-0 right-0 h-[50%] w-[50%] rounded-full blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-[40%] rounded-full bg-orange-200/20 blur-[100px]" />

        <div className="relative z-10 space-y-12">
          <SectionHeader title={title} gradientText={gradientText} label={label} />
          <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>

          {grouped && grouped.length > 1 && (
            <div className="border-border/40 flex gap-1 border-b">
              {grouped.map((group) => (
                <button
                  key={group.sponsor}
                  onClick={() => setActiveTab(group.sponsor)}
                  className={cn(
                    "relative px-6 py-3 text-sm font-medium tracking-wide transition-colors",
                    activeTab === group.sponsor
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground/70",
                  )}
                >
                  {group.label}
                  {activeTab === group.sponsor && (
                    <span className="bg-primary absolute right-0 -bottom-px left-0 h-0.5" />
                  )}
                </button>
              ))}
            </div>
          )}

          {activeGroup && (
            <div className="space-y-6">
              {activeGroup.heading && (
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold md:text-2xl">{activeGroup.heading}</h3>
                  {activeGroup.description && (
                    <p className="text-muted-foreground text-lg leading-relaxed">{activeGroup.description}</p>
                  )}
                </div>
              )}
              <PartnerGrid items={activeGroup.items} />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
