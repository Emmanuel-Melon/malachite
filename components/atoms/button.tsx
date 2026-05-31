import { ComponentPropsWithoutRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MyButtonProps extends ComponentPropsWithoutRef<typeof Button> {
  href?: string;
}

export const MyButton = ({
  children,
  asChild = false,
  href,
  className = "",
  ...props
}: MyButtonProps) => {
  const isLink = !!href;

  return (
    <Button
      {...props}
      asChild={asChild || isLink}
      className={cn(
        "relative inline-flex h-12 appearance-none items-center justify-center rounded border-0 px-4 text-lg whitespace-nowrap transition-all duration-150 select-none",
        "bg-card text-foreground",
        "shadow-[0_2px_4px_var(--border),0_7px_13px_-3px_var(--border),inset_0_-3px_0_var(--border)]",
        "hover:-translate-y-0.5 hover:shadow-[0_4px_8px_var(--border),0_7px_13px_-3px_var(--border),inset_0_-3px_0_var(--border)]",
        "focus:shadow-[inset_0_0_0_1.5px_var(--border),0_2px_4px_var(--border),0_7px_13px_-3px_var(--border),inset_0_-3px_0_var(--border)]",
        "active:translate-y-0.5 active:shadow-[inset_0_3px_7px_var(--border)]",
        className,
      )}
    >
      {isLink ? <a href={href}>{children}</a> : children}
    </Button>
  );
};
