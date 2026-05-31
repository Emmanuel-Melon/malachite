import { type LucideIcon } from "lucide-react";
import { IconContainer } from "@/components/atoms/IconContainer";
import { MyCard } from "@/components/atoms/card";
import { CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ApproachCardProps {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  index: number;
}

export const ApproachCard = ({ icon: Icon, tag, title, description, index }: ApproachCardProps) => {
  return (
    <MyCard>
      <CardContent className="flex flex-col items-center gap-8 md:flex-row">
        <div className="relative shrink-0">
          <IconContainer
            icon={Icon}
            className="h-20 w-20 rounded-[2rem]"
            iconClassName="w-10 h-10 stroke-[1.5px]"
          />
          <div className="border-border text-muted-foreground absolute -top-2 -left-2 flex h-7 w-7 items-center justify-center rounded-full border bg-white font-mono text-[9px] font-bold shadow-sm">
            {index + 1}
          </div>
        </div>

        <div className="flex-grow space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <span className={cn("text-[10px] font-bold tracking-[.3em] uppercase opacity-80")}>
              {tag.replace("STEP", "Focus")}
            </span>
          </div>
          <h3 className="text-2xl font-medium tracking-tighter md:text-3xl">
            {title.toLowerCase()}
          </h3>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </MyCard>
  );
};
