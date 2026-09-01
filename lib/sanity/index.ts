import { createClient } from "@sanity/client";
import { SiteData } from "../data/shared.types";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-03-01",
  useCdn: true,
});
