"use client";
import { useEffect, useState } from "react";
import {
  Instagram,
  Linkedin,
  type LucideIcon,
  MessageSquare,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";
import { IconContainer } from "@/components/atoms/IconContainer";
import { SocialLink as SocialLinkComponent } from "@/components/atoms/SocialLink";
import { MyButton } from "@/components/atoms/button";
import { MyCard } from "@/components/atoms/card";
import type { SiteData } from "@/lib/data/shared.types";
import { cn } from "@/lib/utils";
import type { HeroData, HeroGridItem } from "../home.types";
import { HeroGrid } from "./HeroGrid";

const socialIconMap: Record<string, LucideIcon> = {
  "message-square": MessageSquare,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

interface HeroProps extends HeroData {
  founder: Pick<SiteData, "founderName" | "founderRole" | "founderQuote">;
  gridItems: HeroGridItem[];
  socials: SiteData["socials"];
}

export const Hero = ({ subtitles, description, founder, gridItems, socials }: HeroProps) => {
  const [activeSubtitle, setActiveSubtitle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSubtitle((current) => (current + 1) % subtitles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [subtitles.length]);

  return (
    <section className="relative overflow-hidden font-sans">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary/5 absolute top-0 right-0 h-[40%] w-[40%] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-[-10%] h-[30%] w-[30%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-20 grid items-start gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <div className="space-y-6">
              <div className="relative h-6 overflow-hidden">
                {subtitles.map((text, i) => (
                  <h3
                    key={i}
                    className={cn(
                      "absolute top-0 left-0 text-sm font-bold tracking-[.4em] whitespace-nowrap transition-all duration-700 ease-in-out md:text-xl",
                      activeSubtitle === i
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0",
                    )}
                  >
                    {text}
                  </h3>
                ))}
              </div>

              <h1 className="text-foreground text-5xl leading-[0.8] tracking-tighter md:text-8xl lg:text-[110px]">
                hope, healing, <br />
                <span className="from-primary to-primary animate-gradient-x bg-gradient-to-r via-orange-500 bg-[length:200%_auto] bg-clip-text text-transparent italic">
                  and restoration.
                </span>
              </h1>
            </div>

            <div className="space-y-10">
              <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed lowercase md:text-2xl">
                {description}
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <div className="flex flex-wrap gap-4">
                  <MyButton variant="default" size="lg" className="px-8">
                    view programs
                  </MyButton>
                </div>
                <div className="border-border/60 flex hidden items-center gap-4 border-l pl-8 md:flex">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {socials.map((social, index) => {
                      const ResolvedIcon = socialIconMap[social.icon] || MessageSquare;
                      return (
                        <SocialLinkComponent key={index} href={social.href} icon={ResolvedIcon} />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-4 lg:pt-12">
            <div className="bg-secondary/40 absolute inset-0 -z-20 translate-y-2 scale-95 rotate-6 rounded-3xl" />
            <div className="bg-secondary/90 absolute inset-0 -z-10 translate-y-1 scale-[0.98] rotate-3 rounded-3xl" />

            <MyCard className="bg-foreground text-background relative z-10 border-none p-8 shadow-2xl md:p-10">
              <div className="space-y-8">
                <p className="text-2xl leading-tight font-medium tracking-tight italic md:text-3xl">
                  &ldquo;{founder.founderQuote}&rdquo;
                </p>
                <div className="border-background/10 flex items-center gap-4 border-t pt-6">
                  <IconContainer
                    icon={Users}
                    variant="ghost"
                    className="bg-background/10 rounded-xl"
                    iconClassName="text-background"
                  />
                  <div>
                    <p className="text-[10px] font-bold tracking-[.3em] uppercase opacity-60">
                      {founder.founderRole}
                    </p>
                    <p className="text-lg tracking-tight">{founder.founderName}</p>
                  </div>
                </div>
              </div>
            </MyCard>
          </div>
        </div>

        <div className="relative mt-24 hidden md:block">
          <HeroGrid items={gridItems} />
        </div>
      </div>
    </section>
  );
};
