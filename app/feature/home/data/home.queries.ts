import type {
  CoreValue,
  FocusArea,
  HeroData,
  HeroGridItem,
  HomeProgram,
  Objective,
  Testimonial,
} from "@/app/feature/home/home.types";
import { sanityClient } from "@/lib/sanity";

export async function getHeroData(): Promise<HeroData> {
  const query = `*[_type == "hero"][0]{ description, subtitles }`;
  return sanityClient.fetch<HeroData>(query);
}

export async function getFocusAreas(): Promise<FocusArea[]> {
  const query = `*[_type == "focusArea"]{ id, title, description, iconName, tag }`;
  return sanityClient.fetch<FocusArea[]>(query);
}

export async function getHomePrograms(): Promise<HomeProgram[]> {
  const query = `*[_type == "homeProgram"]{ id, title, description, iconName }`;
  return sanityClient.fetch<HomeProgram[]>(query);
}

export async function getObjectives(): Promise<Objective[]> {
  const query = `*[_type == "objective"]{ id, title, description, iconName }`;
  return sanityClient.fetch<Objective[]>(query);
}

export async function getEvents(): Promise<Event[]> {
  const query = `*[_type == "event"]{ id, title, description, day, month, time, location, tag }`;
  return sanityClient.fetch<Event[]>(query);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial"]{ id, author, role, quote }`;
  return sanityClient.fetch<Testimonial[]>(query);
}

export async function getHeroGridItems(): Promise<HeroGridItem[]> {
  const query = `
    *[_type == "heroGridItem"]{
      id,
      label,
      alt,
      "src": image.asset->url,
      aspect,
      colSpan,
      containerClass,
      gradientOpacity,
      rotate,
      zIndex,
      bottomPadding
    }
  `;
  return sanityClient.fetch<HeroGridItem[]>(query);
}

export async function getCoreValues(): Promise<CoreValue[]> {
  const query = `*[_type == "coreValue"]{ id, title, description, iconName }`;
  return sanityClient.fetch<CoreValue[]>(query);
}
