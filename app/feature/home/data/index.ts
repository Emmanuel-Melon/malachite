import { sanityClient } from "@/lib/sanity";
import type {
  CoreValue,
  Event,
  FocusArea,
  HeroData,
  HeroGridItem,
  HomePageData,
  HomeProgram,
  Objective,
  Testimonial,
} from "../home.types";
import { homePageQuery } from "./home.queries";

export async function getHomePageData(): Promise<HomePageData> {
  const data = await sanityClient.fetch<HomePageData>(homePageQuery);
  return data;
}

export async function getHeroGridItems(): Promise<HeroGridItem[]> {
  const data = await getHomePageData();
  return data.heroGridItems;
}


export async function getObjectives(): Promise<Objective[]> {
  const data = await getHomePageData();
  return data.objectives;
}

export async function getHeroData(): Promise<HeroData> {
  const data = await getHomePageData();
  return data.heroData;
}

export async function getFocusAreas(): Promise<FocusArea[]> {
  const data = await getHomePageData();
  return data.focusAreas;
}

export async function getHomePrograms(): Promise<HomeProgram[]> {
  const data = await getHomePageData();
  return data.homePrograms;
}

export async function getCoreValues(): Promise<CoreValue[]> {
  const data = await getHomePageData();
  return data.coreValues;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await getHomePageData();
  return data.testimonials;
}

export async function getEvents(): Promise<Event[]> {
  const data = await getHomePageData();
  return data.events;
}