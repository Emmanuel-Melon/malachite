"use client";
export default function AboutError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      Something went wrong. <button onClick={reset}>Retry</button>
    </div>
  );
}
