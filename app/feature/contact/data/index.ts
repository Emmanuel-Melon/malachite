import { sanityClient } from "@/lib/sanity";
import type { ContactMethodData, ContactPageHeaderData } from "../contact.types";
import { contactPageQuery } from "./contact.queries";

export interface ContactPageData {
  contactMethods: ContactMethodData[];
  pageHeader: ContactPageHeaderData;
}

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