"use client";
import { MyButton } from "@/components/atoms/button";

interface ErrorStateProps {
  message?: string;
  reset?: () => void;
}

export const ErrorState = ({ message = "something went wrong.", reset }: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="text-muted-foreground text-sm font-bold tracking-widest">error</p>
      <p className="text-muted-foreground max-w-sm leading-relaxed">{message}</p>
      {reset && (
        <MyButton variant="outline" onClick={reset}>
          try again
        </MyButton>
      )}
    </div>
  );
};
