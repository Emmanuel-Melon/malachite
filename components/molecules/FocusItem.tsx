import type { LucideIcon } from "lucide-react";
import { Indicator } from "@/components/atoms/Indicator";
import { IconContainer } from "@/components/atoms/IconContainer";

type FocusItemProps = {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const FocusItem = ({ icon, title, description }: FocusItemProps) => {
    return (
        <div className="group flex flex-col sm:flex-row gap-6 items-start sm:items-start text-left">
            <IconContainer
                icon={icon}
                className="w-14 h-14 shrink-0 rounded-2xl"
                iconClassName="w-7 h-7"
                variant="ghost"
            />
            <div className="space-y-3 w-full">
                <div className="flex items-center gap-3">
                    <Indicator className="opacity-60" variant='secondary' activeDot="right" />
                    <h3 className="text-xl tracking-tight font-medium lowercase italic">
                        {title}
                    </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg lowercase">
                    {description}
                </p>
            </div>
        </div>
    )
}