import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { IconContainer } from "@/components/atoms/IconContainer";
import { Indicator } from "@/components/atoms/Indicator";
import { cn } from "@/lib/utils";

interface InfoBlockProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  showIndicator?: boolean;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const InfoBlock = ({
  title,
  description,
  icon: Icon,
  showIndicator = false,
  className,
  titleClassName,
  descriptionClassName,
}: InfoBlockProps) => {
  return (
    <div
      className={cn(
        "group flex flex-col items-start gap-6 text-left transition-all duration-300 sm:flex-row",
        className,
      )}
    >
      {Icon && (
        <IconContainer
          className="h-14 w-14 shrink-0 rounded-2xl"
          icon={Icon}
          iconClassName="w-7 h-7"
          variant="ghost"
        />
      )}

      <div className="w-full space-y-4">
        <div className="flex items-center gap-3">
          {showIndicator && (
            <Indicator className={cn(Icon ? "opacity-60" : "")} variant="secondary" />
          )}
          <h3 className={cn("text-xl font-medium tracking-tight", titleClassName)}>{title}</h3>
        </div>
        <p className={cn("text-muted-foreground text-lg leading-relaxed", descriptionClassName)}>
          {description}
        </p>
      </div>
    </div>
  );
};
