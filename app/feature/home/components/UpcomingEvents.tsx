import { Statement } from "@/components/atoms/Statement";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { Section } from "@/components/organisms/section";
import { getEvents } from "../data";
import { EventCard } from "./EventCard";

export const UpcomingEvents = async () => {
  const events = await getEvents();

  return (
    <Section containerClassName="space-y-12 md:space-y-16">
      <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
        <div className="max-w-xl">
          <SectionHeader
            label="Upcoming Events"
            title="Join our upcoming"
            gradientText="community events."
          />
        </div>
        <Statement
          text="Participate in clinical symposiums, corporate wellbeing summits, and strategic training sessions curated to foster sustainable recovery."
          label="Get Involved"
          className="max-w-xl lg:mb-2"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </Section>
  );
};
