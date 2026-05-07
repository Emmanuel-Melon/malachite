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
    <div className="w-full space-y-12 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/40 pb-12">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl tracking-tighter leading-[0.8] font-medium">
            Our <br />
            <span className="text-muted-foreground/40 italic">Programs.</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-6">
        {tabs.map((key, index) => {
          const isActive = activeTab === key;
          const displayNum = index + 1 < 10 ? `0${index + 1}` : index + 1;
          
          return (
            <MyButton
              key={key}
              onClick={() => onTabChange(key)}
              className={cn(
                "h-auto py-4 px-6 flex items-center gap-4 transition-all duration-300",
                isActive 
                  ? "ring-2 ring-primary ring-offset-2 scale-105" 
                  : "opacity-70 hover:opacity-100"
              )}
            >
              <span className={cn(
                "text-[10px] font-mono transition-colors duration-300",
                isActive ? "text-primary" : "text-muted-foreground/40"
              )}>
                {displayNum}
              </span>
              <span className="text-sm font-bold tracking-widest uppercase">
                {key.replace('_', ' ')}
              </span>
            </MyButton>
          );
        })}
      </div>
    </div>
  );
};