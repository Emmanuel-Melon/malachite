"use client";
import { useState } from 'react';
import { TabNavigation } from "@/components/programs/TabNavigation";
import { ProgramContent } from "@/components/programs/ProgramContent";
import { PROGRAMS_DATA } from "@/lib/programs";

export default function ProgramExplorer() {
    const [activeTab, setActiveTab] = useState<keyof typeof PROGRAMS_DATA>('workplace');
    const program = PROGRAMS_DATA[activeTab];

    return (
        <section className="bg-background font-sans overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="space-y-12">
                    <TabNavigation
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                        tabs={Object.keys(PROGRAMS_DATA) as (keyof typeof PROGRAMS_DATA)[]}
                    />
                </div>

                <div>
                    <ProgramContent program={program} />
                </div>
            </div>
        </section>
    );
}