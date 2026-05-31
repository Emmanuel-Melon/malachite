import { Indicator } from "@/components/atoms/Indicator";

export const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <Indicator size="lg" isAnimating />
      <p className="text-muted-foreground text-sm font-bold tracking-widest">loading</p>
    </div>
  );
};
