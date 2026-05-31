import type { Metadata } from "next";
import { getContactMethods } from "@/app/feature/contact/data";
import { ContactView } from "@/app/feature/contact/views/ContactView";

export const metadata: Metadata = {
  description:
    "Get in touch with our specialist clinical team today for a confidential mental health consultation.",
  title: "Contact Us — Malachite Center for Mental Health",
};

export default async function ContactPage() {
  const contactMethods = await getContactMethods();

  return <ContactView contactMethods={contactMethods} />;
}
