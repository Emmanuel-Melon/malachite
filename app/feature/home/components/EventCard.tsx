import { Clock, MapPin } from "lucide-react";
import { Indicator } from "@/components/atoms/Indicator";
import { MyCard } from "@/components/atoms/card";
import { CardContent } from "@/components/ui/card";
import type { Event } from "../home.types";

interface EventCardProps extends Event {}

export const EventCard = ({
  day,
  month,
  title,
  description,
  time,
  location,
  tag,
}: EventCardProps) => {
  return (
    <MyCard className="group">
      <CardContent className="flex flex-col gap-8 pt-6">
        <div className="flex items-center justify-between">
          <div className="border-border/60 bg-secondary/10 flex min-w-[64px] shrink-0 flex-col items-center justify-center rounded-xl border px-4 py-2">
            <span className="text-foreground text-2xl font-bold tracking-tighter">{day}</span>
            <span className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
              {month}
            </span>
          </div>
          <Indicator isAnimating={false} />
        </div>

        <div className="space-y-2">
          <p className="text-primary text-[10px] font-bold tracking-[0.25em] uppercase">{tag}</p>
          <h3 className="text-foreground text-xl font-semibold tracking-tighter md:text-2xl">
            {title}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed lowercase">{description}</p>
        </div>

        <div className="border-border flex items-center gap-4 border-t pt-4">
          <div className="bg-primary/10 group-hover:bg-primary/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300">
            <Clock className="text-primary h-4 w-4" />
          </div>
          <div>
            <p className="text-foreground text-sm font-semibold tracking-tight">{time}</p>
            <p className="text-muted-foreground mt-0.5 flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase">
              <MapPin className="h-3 w-3" />
              {location}
            </p>
          </div>
        </div>
      </CardContent>
    </MyCard>
  );
};
