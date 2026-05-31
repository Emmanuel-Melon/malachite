import { Crown, Dumbbell, type LucideIcon, Search } from "lucide-react";
import { IconContainer } from "@/components/atoms/IconContainer";
import { MyCard } from "@/components/atoms/card";
import { CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { FocusArea } from "../home.types";

interface ApproachCardProps {
  area: FocusArea;
}

const iconMap: Record<FocusArea["iconName"], LucideIcon> = {
  search: Search,
  crown: Crown,
  dumbbell: Dumbbell,
};

export const ApproachCard = ({ area }: ApproachCardProps) => {
  return (
    <MyCard>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="relative shrink-0">
          <IconContainer
            icon={iconMap[area.iconName]}
            className="h-20 w-20 rounded-[2rem]"
            iconClassName="w-10 h-10 stroke-[1.5px]"
          />
          <div className="border-border text-muted-foreground absolute -top-2 -left-2 flex h-7 w-7 items-center justify-center rounded-full border bg-white font-mono text-[9px] font-bold shadow-sm">
            {area.id}
          </div>
        </div>

        <div className="flex-grow space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <span className={cn("text-[10px] font-bold tracking-[.3em] opacity-80")}>
              {area.tag.replace("STEP", "Focus")}
            </span>
          </div>
          <h3 className="text-2xl font-medium tracking-tighter md:text-3xl">{area.title}</h3>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            {area.description}
          </p>
        </div>
      </div>
    </MyCard>
  );
};
