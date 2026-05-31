"use client";
import { useState } from 'react';
import { TabNavigation } from "@/components/programs/TabNavigation";
import { ProgramContent } from "@/components/programs/ProgramContent";
import { PROGRAMS_DATA } from "@/lib/programs";
import { PageHeader } from "@/components/molecules/PageHeader";
import { Separator } from '@/components/molecules/separator';
import { Partners } from '@/components/partners';
import { ProgramOverview } from '@/components/programs/ProgramsOverview';
import { Briefcase, School, Users2, Megaphone } from "lucide-react";

const programTeasers = [
    {
        icon: Briefcase,
        title: "workplace mental health",
        description: "targeted solutions for corporate environments, focusing on productivity and employee well-being."
    },
    {
        icon: School,
        title: "school-based services",
        description: "supporting adolescent development through emotional literacy and school-wide mental health advocacy."
    },
    {
        icon: Users2,
        title: "individuals & groups",
        description: "tailored therapeutic interventions for depression, anxiety, and complex recovery journeys."
    },
    {
        icon: Megaphone,
        title: "awareness & outreach",
        description: "utilizing digital media and community series to bridge the gap in mental health literacy."
    }
];

export default function ProgramsPage() {
    const [activeTab, setActiveTab] = useState<keyof typeof PROGRAMS_DATA>('workplace');
    const program = PROGRAMS_DATA[activeTab];

    return (
        <div className="space-y-8 md:space-y-0">
            <PageHeader
                label="Malachite's Programs"
                title="Tailored mental"
                gradientText="health programs."
                statement="We provide evidence-based services designed for specific environments—from the boardroom to the classroom."
            />
            <ProgramOverview teasers={programTeasers} />
            <Separator />
            <TabNavigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
                tabs={Object.keys(PROGRAMS_DATA) as (keyof typeof PROGRAMS_DATA)[]}
            />
            <div className='mt-8'>
                {program.partners && program.partners.length > 0 && (
                    <Partners
                        items={program.partners}
                        label="Program Trust"
                        title="Trusted by premium"
                        gradientText={activeTab === 'workplace' ? "corporate teams." : "educational communities."}
                        description={
                            activeTab === 'workplace'
                                ? "we run tailored workplace wellness systems across east africa's top operational environments."
                                : "we support youth development and educational leadership tracks across leading local schools."
                        }
                    />
                )}
            </div>
            <section className="py-12 md:py-0">
                <ProgramContent program={program} />
            </section>
        </div>
    );
}