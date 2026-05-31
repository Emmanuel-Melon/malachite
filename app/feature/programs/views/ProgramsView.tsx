"use client";
import { useState } from "react";
import { Partners } from "@/app/feature/home/components/partners";
import { ProgramContent } from "@/app/feature/programs/components/ProgramContent";
import { ProgramsSummary } from "@/app/feature/programs/components/ProgramsSummary";
import { TabNavigation } from "@/app/feature/programs/components/TabNavigation";
import { PageHeader } from "@/components/molecules/layout/PageHeader";
import { Separator } from "@/components/molecules/separator";
import type { ProgramSummaryItem, ProgramsRegistry } from "../programs.types";

interface ProgramsViewProps {
  programs: ProgramsRegistry;
  programList: ProgramSummaryItem[];
}

export const ProgramsView = ({ programs, programList }: ProgramsViewProps) => {
  const [activeTab, setActiveTab] = useState<keyof typeof programs>("workplace");
  const program = programs[activeTab];

  return (
    <section className="space-y-8">
      <PageHeader
        gradientText="health programs."
        label="Malachite's Programs"
        statement="We provide evidence-based services designed for specific environments—from the boardroom to the classroom."
        title="Tailored mental"
      />
      <ProgramsSummary items={programList} />
      <Separator />
      <TabNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={Object.keys(programs) as (keyof typeof programs)[]}
      />
      <div className="mt-8">
        {program.partners && program.partners.length > 0 && (
          <Partners
            description={
              activeTab === "workplace"
                ? "we run tailored workplace wellness systems across east africa's top operational environments."
                : "we support youth development and educational leadership tracks across leading local schools."
            }
            gradientText={
              activeTab === "workplace" ? "corporate teams." : "educational communities."
            }
            items={program.partners}
            label="Program Trust"
            title="Trusted by premium"
          />
        )}
      </div>
      <section className="py-12 md:py-0">
        <ProgramContent program={program} />
      </section>
    </section>
  );
};
