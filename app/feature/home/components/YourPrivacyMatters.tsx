import Link from "next/link";
import {
  ArrowUpRight,
  Database,
  Lock,
  Mail,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { IconContainer } from "@/components/atoms/IconContainer";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";

const privacyPillars = [
  {
    title: "Your sessions are your sessions.",
    description:
      "If you access Malachite through your employer or an Employee Assistance Programme (EAP), we do not share the content of your sessions with your employer. Where organizations require programme reporting, information is provided strictly in aggregated or de-identified form.",
    icon: UserCheck,
  },
  {
    title: "We only collect what we need.",
    description:
      "Personal and health information is handled carefully, accessed only by authorized persons, protected with appropriate safeguards, and retained only for as long as needed. Guided by Uganda's Data Protection and Privacy Act, we enforce strict data minimisation and security measures.",
    icon: Database,
  },
  {
    title: "There are limited exceptions to confidentiality.",
    description:
      "Information is only shared with your explicit permission, where required by law, or to protect you or another person from serious harm. Uganda's Mental Health Act protects client dignity and privacy while allowing necessary safety disclosures.",
    icon: Scale,
  },
];

export const YourPrivacyMatters = () => {
  return (
    <Section>
      <div className="w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            label="Confidentiality & Privacy"
            title="Your privacy"
            gradientText="matters."
          />

          <MyButton variant="outline" size="sm" asChild className="rounded-full">
            <Link href="/privacy-policy">
              Read Full Privacy Policy
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Link>
          </MyButton>
        </div>

        {/* Main Soft Card Container */}
        <div className="bg-slate-50/60 border-border/40 relative overflow-hidden rounded-[2.5rem] border p-8 md:p-12">
          {/* Main Statement */}
          <div className="border-border/30 max-w-3xl border-b pb-8">
            <p className="text-foreground text-xl font-medium leading-relaxed md:text-2xl">
              Mental-health support requires trust. What you share with your therapist, counsellor, or coach is treated as private and confidential.
            </p>
          </div>

          {/* Privacy Pillars List */}
          <div className="grid gap-8 pt-8">
            {privacyPillars.map((item) => (
              <InfoBlock
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* Regulatory Commitment & Contact Box */}
          <div className="bg-amber-500/10 border-amber-500/20 mt-10 rounded-2xl border p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <IconContainer
                  icon={ShieldCheck}
                  className="h-11 w-11 bg-amber-500/20 text-amber-600 shrink-0 rounded-xl"
                  iconClassName="w-5 h-5"
                />
                <div className="space-y-1">
                  <h4 className="font-medium text-foreground text-base">
                    Our Legal & Ethical Commitment
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                    Our approach is guided by Uganda’s Data Protection and Privacy Act (2019), the Data Protection and Privacy Regulations (2021), the Mental Health Act (2018), and applicable professional ethical standards.
                  </p>
                </div>
              </div>

              <div className="shrink-0 border-t border-amber-500/20 pt-4 md:border-t-0 md:pt-0">
                <a
                  href="mailto:admin@malachitecenter.org"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-amber-600"
                >
                  <Mail className="h-4 w-4 text-amber-600" />
                  admin@malachitecenter.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};