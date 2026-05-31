import { getSiteData } from "@/lib/data/site";
import type { ContactMethodData } from "../contact.types";

export async function getContactMethods(): Promise<ContactMethodData[]> {
  const siteData = await getSiteData();

  const address =
    siteData.contact.find((c) => c.icon === "map-pin")?.value || "672 Wamala Rd, Kampala";
  const phone = siteData.phoneNumber || "+256757356691";

  return [
    {
      iconName: "map-pin",
      title: "our location",
      detail: address,
      subDetail: "available for in-person consultations",
    },
    {
      iconName: "mail",
      title: "email us",
      detail: "care@malachitemedical.com",
      subDetail: "we respond within 24 business hours",
    },
    {
      iconName: "phone",
      title: "call support",
      detail: phone,
      subDetail: "mon - fri: 8am to 6pm",
    },
  ];
}
