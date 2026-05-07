import React from 'react';
import { cn } from "@/lib/utils";
import { MyButton } from "@/components/atoms/button";

interface TabNavigationProps<T extends string> {
  activeTab: T;
  onTabChange: (tab: T) => void;
  tabs: T[];
}

export const TabNavigation = <T extends string>({ 
  activeTab, 
  onTabChange, 
  tabs 
}: TabNavigationProps<T>) => {
  return (
    <div className="w-full">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-8 lg:gap-16 border-b border-border/40 pb-10">
        
        <div className="relative -mx-4 px-4 lg:mx-0 lg:px-0 lg:max-w-3xl">
          <div className="flex overflow-x-auto lg:flex-wrap lg:justify-start gap-3 md:gap-4 pt-2 pb-2 no-scrollbar items-center">
            {tabs.map((key, index) => {
              const isActive = activeTab === key;
              const displayNum = index + 1 < 10 ? `0${index + 1}` : index + 1;
              
              return (
                <MyButton
                  key={key}
                  onClick={() => onTabChange(key)}
                  variant="ghost"
                  className={cn(
                    "flex items-center gap-3 transition-all duration-500 shrink-0 border group",
                    isActive 
                      ? "bg-foreground text-background border-foreground shadow-xl shadow-foreground/10 -translate-y-1" 
                      : "bg-transparent border-border/60 text-foreground hover:bg-foreground hover:text-background hover:border-foreground hover:-translate-y-1"
                  )}
                >
                  <span className={cn(
                    "text-[10px] font-mono transition-colors duration-500",
                    isActive 
                      ? "text-background/50" 
                      : "text-muted-foreground/40 group-hover:text-background/50"
                  )}>
                    {displayNum}
                  </span>
                  <span className="text-xs font-bold tracking-widest uppercase">
                    {key.replace('_', ' ')}
                  </span>
                </MyButton>
              );
            })}
          </div>
          <div className="absolute right-0 top-2 bottom-4 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none lg:hidden" />
        </div>

        <div className="lg:text-right">
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tighter leading-none font-medium">
            Explore Our Programs
          </h2>
        </div>

      </div>
    </div>
  );
};