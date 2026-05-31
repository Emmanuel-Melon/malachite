import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Statement } from "@/components/molecules/Statement";
import { getEvents } from "../data";
import { EventCard } from "./EventCard";

export const UpcomingEvents = async () => {
  const events = await getEvents();

  return (
    <section className="bg-background relative overflow-hidden py-24 font-sans">
      <div className="container mx-auto px-4">
        <div className="mb-20 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
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
            className="max-w-xl lg:mb-2"
          />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};
