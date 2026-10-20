"use client";
import { type LucideIcon, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
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
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
              <p className="text-foreground font-medium mb-2">
                For individual therapy and coaching enquiries, please use our request form.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfVqk3Ytl8is-Oxk0AVqUx3v0sOEqgQ-L21OSNMnOPc4Yp14Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Therapy &amp; Coaching Support Request Form
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            {contactMethods.map((method) => {
              let detail = method.detail;
              // Replace any old email with new one
              if (method.iconName === "mail") {
                detail = "admin@malachitecenter.org";
              }
              return (
                <ContactInfoCard
                  key={method.id}
                  detail={detail}
                  icon={iconMap[method.iconName]}
                  subDetail={method.subDetail === "We respond within 24 business hours" || method.subDetail === "we respond within 24 business hours"
                    ? "We will get back to you within 24 hours on weekdays."
                    : method.subDetail}
                  title={method.title}
                />
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </section>
  );
};
