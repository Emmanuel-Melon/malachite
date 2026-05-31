import Link from "next/link";
import { MyButton } from "@/components/atoms/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-muted-foreground text-sm font-bold tracking-widest uppercase">404</p>
      <h1 className="text-5xl font-medium tracking-tighter md:text-7xl">page not found.</h1>
      <p className="text-muted-foreground max-w-sm leading-relaxed lowercase italic">
        the page you're looking for doesn't exist or has been moved.
      </p>
      <MyButton asChild>
        <Link href="/">go home</Link>
      </MyButton>
    </div>
  );
}
