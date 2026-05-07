import React from 'react';
import { cn } from "@/lib/utils";

interface ContactInfoCardProps {
  icon: any;
  title: string;
  detail: string;
  subDetail: string;
}

export const ContactInfoCard = ({ icon: Icon, title, detail, subDetail }: ContactInfoCardProps) => {
  return (
    <div className="space-y-10">
      <div className="relative flex flex-col md:flex-row md:items-center gap-6">
        <div className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:rotate-3",
          "bg-primary/5",
          "text-primary",
          "shadow-[rgba(45,35,66,0.2)_0_2px_4px,rgba(45,35,66,0.1)_0_7px_13px_-3px,#fcfcfd_0_-3px_0_inset]"
        )}>
          <Icon className="w-8 h-8" />
        </div>
        
        <div className="space-y-1">
          <h2 className="text-3xl tracking-tighter leading-tight">
            {title.toLowerCase()}
          </h2>
        </div>

        <div className="hidden md:block absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>
      
      <div className="grid gap-6 pl-2 md:pl-20 relative">
        <div className="absolute left-6 md:left-[2.25rem] top-0 bottom-0 w-[1px] bg-border/40" />
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-primary" />
            <h3 className="text-xl tracking-tight">{detail}</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed pl-16 text-sm italic">
            {subDetail}
          </p>
        </div>
      </div>
    </div>
  );
};
