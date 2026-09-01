import { sanityClient } from "@/lib/sanity";
import type { ContactMethodData, ContactPageData, ContactPageHeaderData } from "../contact.types";
import { contactPageQuery } from "./contact.queries";

export async function getContactPageData(): Promise<ContactPageData> {
  const data = await sanityClient.fetch<{
    contactMethods: ContactMethodData[];
    pageHeader: ContactPageHeaderData;
  }>(contactPageQuery);

  return {
    contactMethods: data.contactMethods,
    pageHeader: data.pageHeader,
  };
}
