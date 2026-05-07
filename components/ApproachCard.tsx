import { LucideIcon } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { MyCard } from "@/components/atoms/card";
import { IconContainer } from "@/components/atoms/IconContainer";
import { cn } from "@/lib/utils";

interface ApproachCardProps {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  index: number;
}

export const ApproachCard = ({ 
  icon: Icon, 
  tag, 
  title, 
  description, 
  index 
}: ApproachCardProps) => {
  return (
    <MyCard>
      <CardContent className="flex flex-col md:flex-row items-center gap-8">
        
        <div className="relative shrink-0">
          <IconContainer 
            icon={Icon}
            className="w-20 h-20 rounded-[2rem]"
            iconClassName="w-10 h-10 stroke-[1.5px]"
          />
          <div className="absolute -top-2 -left-2 w-7 h-7 bg-white border border-border flex items-center justify-center rounded-full text-[9px] font-mono font-bold text-muted-foreground shadow-sm">
            {index + 1}
          </div>
        </div>

        <div className="flex-grow space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className={cn("text-[10px] tracking-[.3em] font-bold uppercase opacity-80")}>
              {tag.replace("STEP", "Focus")}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl tracking-tighter font-medium">
            {title.toLowerCase()}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-xl">
            {description}
          </p>
        </div>

      </CardContent>
    </MyCard>
  );
};