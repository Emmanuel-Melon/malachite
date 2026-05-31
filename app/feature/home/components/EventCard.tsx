import { Clock, MapPin } from "lucide-react";
import { MyCard } from "@/components/atoms/card";
import { CardContent } from "@/components/ui/card";
import type { Event } from "../home.types";

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <MyCard className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="flex flex-col gap-6 pt-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-primary tracking-[0.25em]">{event.tag}</span>
            <span className="text-muted-foreground/30 text-xs">•</span>
            <span className="text-muted-foreground tracking-wider">{event.month}</span>
          </div>

          <h3 className="text-foreground text-xl font-medium tracking-tighter transition-colors duration-300 group-hover:text-orange-500 md:text-2xl">
            {event.title}
          </h3>

          <p className="text-muted-foreground text-base leading-relaxed">{event.description}</p>
        </div>

        <div className="border-border flex flex-col gap-3 border-t pt-5">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 group-hover:bg-primary/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors duration-300">
              <Clock className="text-primary h-3.5 w-3.5" />
            </div>
            <p className="text-foreground text-sm font-medium tracking-tight">{event.time}</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 transition-colors duration-300 group-hover:bg-orange-500/20">
              <MapPin className="h-3.5 w-3.5 text-orange-600" />
            </div>
            <p className="text-muted-foreground text-sm tracking-tight">{event.location}</p>
          </div>
        </div>
      </CardContent>
    </MyCard>
  );
};
