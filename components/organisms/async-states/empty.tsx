import type { LucideIcon } from "lucide-react";
import { IconContainer } from "@/components/atoms/IconContainer";
import { MyCard } from "@/components/atoms/card";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: LucideIcon;
  stepNumber?: string | number;
  tag?: string;
  message?: string;
  description?: string;
  className?: string;
}

export const EmptyState = ({
  icon: Icon,
  stepNumber,
  tag = "Notice",
  message = "no data found.",
  description,
  className,
}: EmptyStateProps) => {
  return (
    <MyCard className={className}>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        {Icon && (
          <div className="relative shrink-0">
            <IconContainer
              icon={Icon}
              className="h-20 w-20 rounded-[2rem]"
              iconClassName="w-10 h-10 stroke-[1.5px]"
            />
            {stepNumber !== undefined && (
              <div className="border-border text-muted-foreground absolute -top-2 -left-2 flex h-7 w-7 items-center justify-center rounded-full border text-[9px] shadow-sm">
                {stepNumber}
              </div>
            )}
          </div>
        )}

        <div className="flex-grow space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <span className={cn("text-[10px] tracking-[.3em] uppercase opacity-80")}>{tag}</span>
          </div>
          <h3 className="text-2xl font-medium tracking-tighter capitalize md:text-3xl">
            {message}
          </h3>
          {description && (
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </MyCard>
  );
};
