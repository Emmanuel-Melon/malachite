import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarCheck,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { IconContainer } from "@/components/atoms/IconContainer";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";

const individualPathways = [
  {
    title: "Therapy",
    description: "One-on-one sessions tailored to personal mental health needs.",
    icon: Compass,
  },
  {
    title: "Coaching",
    description: "Goal-oriented guidance for personal growth and resilience.",
    icon: Sparkles,
  },
  {
    title: "Assessments",
    description: "Comprehensive diagnostic evaluations by certified specialists.",
    icon: ShieldCheck,
  },
];

const corporatePathways = [
  {
    title: "Employee Assistance Programmes",
    description: "Confidential, 24/7 mental health support for your teams.",
    icon: HeartHandshake,
  },
  {
    title: "Workplace Mental Health",
    description: "Proactive strategies to foster healthy organizational cultures.",
    icon: Building2,
  },
  {
    title: "Executive Wellness",
    description: "Tailored well-being support for business leaders.",
    icon: Briefcase,
  },
  {
    title: "Leadership & Coaching",
    description: "Empower managers to lead with empathy and psychological safety.",
    icon: Users,
  },
];

export const SupportPathways = () => {
  return (
    <Section>
      <div className="space-y-16">
        <SectionHeader
          label="Tailored Solutions"
          title="Choose your path"
          gradientText="to wellness."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Column 1: Individuals */}
          <div className="bg-slate-50/50 border-border/30 flex flex-col justify-between rounded-[2.5rem] border p-8 md:p-10">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <IconContainer
                  icon={User}
                  className="h-14 w-14 rounded-2xl bg-amber-500/10 text-amber-600"
                  iconClassName="w-7 h-7"
                />
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.3em] opacity-70 uppercase">
                    Pathway 01
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    Individuals & Families
                  </h3>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                {individualPathways.map((item) => (
                  <InfoBlock
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>

            <div className="pt-10">
              <MyButton size="lg" className="w-full" asChild>
                <Link href="/request-support">
                  Request Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </MyButton>
            </div>
          </div>

          {/* Column 2: Organizations */}
          <div className="bg-slate-50/50 border-border/30 flex flex-col justify-between rounded-[2.5rem] border p-8 md:p-10">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <IconContainer
                  icon={Building2}
                  className="h-14 w-14 rounded-2xl bg-amber-500/10 text-amber-600"
                  iconClassName="w-7 h-7"
                />
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.3em] opacity-70 uppercase">
                    Pathway 02
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    For Organizations
                  </h3>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                {corporatePathways.map((item) => (
                  <InfoBlock
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>

            <div className="pt-10">
              <MyButton size="lg" variant="outline" className="w-full" asChild>
                <Link href="/corporate-consultation">
                  Request a Corporate Consultation
                  <CalendarCheck className="ml-2 h-4 w-4" />
                </Link>
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};