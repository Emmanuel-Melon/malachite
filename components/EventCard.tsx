import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { MyCard } from "@/components/atoms/card";
import { CardContent } from "@/components/ui/card";
import { MyButton } from "@/components/atoms/button";

interface EventCardProps {
  day: string;
  month: string;
  title: string;
  description: string;
  time: string;
  location: string;
  tag: string;
}

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
    <MyCard className="group h-full flex flex-col justify-between transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
      <CardContent className="p-6 md:p-8 space-y-6">
        
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col items-center justify-center border border-border/60 rounded-xl px-4 py-2 bg-secondary/10 shrink-0 min-w-[70px]">
            <span className="text-2xl font-bold tracking-tighter text-foreground">
              {day}
            </span>
            <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
              {month}
            </span>
          </div>
          
          <span className="text-[9px] font-bold tracking-[0.25em] text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">
            {tag}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl tracking-tighter font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed lowercase">
            {description}
          </p>
        </div>

        <div className="pt-4 border-t border-border/40 space-y-2 text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-primary/60" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-primary/60" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        <div className="pt-2">
          <MyButton variant="ghost" className="w-full justify-between px-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 rounded-xl">
            <span>Register & Reserve Spot</span>
            <ArrowRight className="w-4 h-4" />
          </MyButton>
        </div>

      </CardContent>
    </MyCard>
  );
};