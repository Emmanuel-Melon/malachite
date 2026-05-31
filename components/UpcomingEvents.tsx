"use client";
import React from 'react';
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Statement } from "@/components/molecules/Statement";
import { EventCard } from "./EventCard";

const EVENTS = [
  {
    day: "18",
    month: "Jun",
    tag: "Workplace",
    title: "Mental Health Leadership Summit",
    description: "equipping corporate managers with psychological safety frameworks, resilient team building blueprints, and stress reduction models.",
    time: "09:00 AM - 04:00 PM EAT",
    location: "Kampala Serena Hotel & Online",
  },
  {
    day: "05",
    month: "Jul",
    tag: "Community",
    title: "Intentional Living Workshop",
    description: "a practical therapy intensive detailing emotional regulation strategies, mindfulness systems, and peer accountability frameworks.",
    time: "02:00 PM - 06:00 PM EAT",
    location: "Malachite Center Main Hall",
  },
  {
    day: "22",
    month: "Jul",
    tag: "Education",
    title: "Youth Emotional Literacy Forum",
    description: "tailored mental health panels designed exclusively for educators, youth counselors, and school community administrators.",
    time: "10:00 AM - 01:00 PM EAT",
    location: "Virtual (Zoom Session)",
  }
];

export const UpcomingEvents = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
          <div className="max-w-xl">
            <SectionHeader
              label="Upcoming Events"
              title="Join our upcoming"
              gradientText="community events."
            />
          </div>

          <Statement
            text="participate in clinical symposiums, corporate wellbeing summits, and strategic training sessions curated to foster sustainable recovery."
            label="Get Involved"
            className="lg:mb-2 max-w-xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.map((event, index) => (
            <EventCard
              key={index}
              day={event.day}
              month={event.month}
              tag={event.tag}
              title={event.title}
              description={event.description}
              time={event.time}
              location={event.location}
            />
          ))}
        </div>

      </div>
    </section>
  );
};