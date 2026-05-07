import { Button } from "@/components/ui/button";
import { ComponentPropsWithoutRef } from "react";

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
      className={`
        h-12 px-4 rounded font-mono text-lg
        bg-[#FCFCFD] text-[#36395A]
        shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#D6D6E7_0_-3px_0_inset]
        hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#D6D6E7_0_-3px_0_inset]
        hover:-translate-y-0.5
        active:shadow-[#D6D6E7_0_3px_7px_inset]
        active:translate-y-0.5
        focus:shadow-[#D6D6E7_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#D6D6E7_0_-3px_0_inset]
        transition-all duration-150
        items-center justify-center inline-flex relative
        whitespace-nowrap select-none appearance-none border-0
        ${className}
      `}
    >
      {isLink ? <a href={href}>{children}</a> : children}
    </Button>
  );
};
