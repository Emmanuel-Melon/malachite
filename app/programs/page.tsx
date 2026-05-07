"use client";
import { useState } from 'react';
import { TabNavigation } from "@/components/programs/TabNavigation";
import { ProgramContent } from "@/components/programs/ProgramContent";
import { PROGRAMS_DATA } from "@/lib/programs";
import { ProgramOverview } from "@/components/programs/ProgramsOverview";
import { Separator } from '@/components/molecules/separator';

export default function ProgramExplorer() {
    const [activeTab, setActiveTab] = useState<keyof typeof PROGRAMS_DATA>('workplace');
    const program = PROGRAMS_DATA[activeTab];

    return (
        <div className="space-y-24 md:space-y-0">
            <ProgramOverview />
            <Separator />
            <TabNavigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
                tabs={Object.keys(PROGRAMS_DATA) as (keyof typeof PROGRAMS_DATA)[]}
            />

            <section className="py-12 md:py-0">
              <ProgramContent program={program} />
            </section>
        </div>
    );
}