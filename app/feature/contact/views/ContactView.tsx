"use client";
import { type LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/molecules/layout/PageHeader";
import { VIEW_LAYOUT_CLASS } from "@/lib/styles";
import { ContactForm } from "../components/ContactForm";
import { ContactInfoCard } from "../components/ContactInfoCard";
import type { ContactMethodData, ContactPageHeaderData } from "../contact.types";

const iconMap: Record<ContactMethodData["iconName"], LucideIcon> = {
  mail: Mail,
  "map-pin": MapPin,
  phone: Phone,
};

export interface ContactViewProps {
  contactMethods: ContactMethodData[];
  pageHeader?: ContactPageHeaderData;
}

export const ContactView = ({ contactMethods, pageHeader }: ContactViewProps) => {
  return (
    <section className={VIEW_LAYOUT_CLASS}>
      <PageHeader
        gradientText={pageHeader?.gradientText ?? "restoration."}
        label={pageHeader?.label ?? "Get in Touch"}
        statement={
          pageHeader?.statement ??
          "Our specialist team is ready to provide the support and guidance you need. Reach out today for a confidential consultation."
        }
        title={pageHeader?.title ?? "Start your journey to"}
      />
      <section>
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="space-y-8 lg:col-span-5">
            {contactMethods.map((method) => (
              <ContactInfoCard
                key={method.id}
                detail={method.detail}
                icon={iconMap[method.iconName]}
                subDetail={method.subDetail}
                title={method.title}
              />
            ))}
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </section>
  );
};
