import { MyButton } from "@/components/atoms/button";
import { cn } from "@/lib/utils";

interface TabNavigationProps<T extends string> {
  activeTab: T;
  onTabChange: (tab: T) => void;
  tabs: T[];
}

export const TabNavigation = <T extends string>({
  activeTab,
  onTabChange,
  tabs,
}: TabNavigationProps<T>) => {
  return (
    <div className="w-full">
      <div className="flex flex-col-reverse justify-between gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="relative -mx-4 px-4 lg:mx-0 lg:max-w-3xl lg:px-0">
          <div className="no-scrollbar flex items-center gap-3 overflow-x-auto pt-2 pb-2 md:gap-4 lg:flex-wrap lg:justify-start">
            {tabs.map((key, index) => {
              const isActive = activeTab === key;
              const displayNum = index + 1 < 10 ? `0${index + 1}` : index + 1;

              return (
                <MyButton
                  key={key}
                  onClick={() => onTabChange(key)}
                  variant="ghost"
                  className={cn(
                    "group flex shrink-0 items-center gap-3 border transition-all duration-500",
                    isActive
                      ? "bg-foreground text-background border-foreground shadow-foreground/10 -translate-y-1 shadow-xl"
                      : "border-border/60 text-foreground hover:bg-foreground hover:text-background hover:border-foreground bg-transparent hover:-translate-y-1",
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-[10px] transition-colors duration-500",
                      isActive
                        ? "text-background/50"
                        : "text-muted-foreground/40 group-hover:text-background/50",
                    )}
                  >
                    {displayNum}
                  </span>
                  <span className="tracking-wider">{key.replace("_", " ")}</span>
                </MyButton>
              );
            })}
          </div>
          <div className="from-background pointer-events-none absolute top-2 right-0 bottom-4 w-12 bg-gradient-to-l to-transparent lg:hidden" />
        </div>

        <div className="lg:text-right">
          <h2 className="text-2xl leading-none font-medium tracking-tighter sm:text-3xl md:text-4xl">
            Explore Our Programs
          </h2>
        </div>
      </div>
    </div>
  );
};
