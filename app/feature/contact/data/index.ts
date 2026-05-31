import { getSiteData } from "@/lib/data/site";
import type { ContactMethodData } from "../contact.types";

export async function getContactMethods(): Promise<ContactMethodData[]> {
  const siteData = await getSiteData();

  const address =
    siteData.contact.find((c) => c.icon === "map-pin")?.value || "672 Wamala Rd, Kampala";
  const phone = siteData.phoneNumber || "+256757356691";

  return [
    {
      id: "contact-method-location",
      iconName: "map-pin",
      title: "Our Location",
      detail: address,
      subDetail: "Available for in-person consultations",
    },
    {
      id: "contact-method-email",
      iconName: "mail",
      title: "Email Us",
      detail: "care@malachitemedical.com",
      subDetail: "We respond within 24 business hours",
    },
    {
      id: "contact-method-phone",
      iconName: "phone",
      title: "Call Support",
      detail: phone,
      subDetail: "Mon - Fri: 8am to 6pm",
    },
  ];
}
