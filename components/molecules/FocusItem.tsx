import type { LucideIcon } from "lucide-react";
import { IconContainer } from "@/components/atoms/IconContainer";
import { Indicator } from "@/components/atoms/Indicator";

type FocusItemProps = {
  description: string;
  icon: LucideIcon;
  showIndicator?: boolean;
  title: string;
};

export const FocusItem = ({ description, icon, showIndicator = false, title }: FocusItemProps) => {
  return (
    <div className="group flex flex-col items-start gap-6 text-left sm:flex-row">
      <IconContainer
        className="h-14 w-14 shrink-0 rounded-2xl"
        icon={icon}
        iconClassName="w-7 h-7"
        variant="ghost"
      />
      <div className="w-full space-y-3">
        <div className="flex items-center gap-3">
          {showIndicator && <Indicator className="opacity-60" variant="secondary" />}
          <h3 className="text-xl font-medium tracking-tight lowercase italic">{title}</h3>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed lowercase">{description}</p>
      </div>
    </div>
  );
};
