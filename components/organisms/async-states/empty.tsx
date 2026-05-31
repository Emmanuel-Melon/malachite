interface EmptyStateProps {
  message?: string;
}

export const EmptyState = ({ message = "no data found." }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="text-muted-foreground text-sm font-bold tracking-widest">empty</p>
      <p className="text-muted-foreground max-w-sm leading-relaxed">{message}</p>
    </div>
  );
};
