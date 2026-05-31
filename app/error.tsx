"use client";
import { ErrorState } from "@/components/molecules/async-states/error";

export default function SiteError({ error, reset }: { error: Error; reset: () => void }) {
  return <ErrorState message={error.message} reset={reset} />;
}
