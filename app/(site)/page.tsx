import type { Metadata } from "next";
import { getEvents, getHeroData, getHeroGridItems, getTestimonials } from "@/app/feature/home/data";
import { HomeView } from "@/app/feature/home/views/HomeView";
import { getPartners } from "@/lib/data/partners";
import { getSiteData } from "@/lib/data/site";

export const metadata: Metadata = {
  description:
    "Redefine your path to sustained well-being with personalized recovery and integrated community support.",
  title: "Home — Malachite Center for Mental Health",
};

export default async function HomePage() {
  const [hero, site, partners, testimonials, gridItems, events] = await Promise.all([
    getHeroData(),
    getSiteData(),
    getPartners(),
    getTestimonials(),
    getHeroGridItems(),
    getEvents(),
  ]);

  return (
    <HomeView
      hero={hero}
      partners={partners}
      site={site}
      testimonials={testimonials}
      gridItems={gridItems}
      events={events}
    />
  );
}
