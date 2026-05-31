import { ComponentPropsWithoutRef } from "react";
import { Button } from "@/components/ui/button";

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
      className={`relative inline-flex h-12 appearance-none items-center justify-center rounded border-0 bg-[#FCFCFD] px-4 font-mono text-lg whitespace-nowrap text-[#36395A] shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#D6D6E7_0_-3px_0_inset] transition-all duration-150 select-none hover:-translate-y-0.5 hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#D6D6E7_0_-3px_0_inset] focus:shadow-[#D6D6E7_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#D6D6E7_0_-3px_0_inset] active:translate-y-0.5 active:shadow-[#D6D6E7_0_3px_7px_inset] ${className} `}
    >
      {isLink ? <a href={href}>{children}</a> : children}
    </Button>
  );
};
