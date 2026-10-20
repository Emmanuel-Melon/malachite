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
  ArrowRight,
  HeartHandshake,
} from "lucide-react";
import { GradientHeading } from "@/components/atoms/GradientHeading";
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

interface HeroProps extends Omit<HeroData, "subtitles"> {
  founder: Pick<SiteData, "founderName" | "founderRole" | "founderQuote">;
  gridItems: HeroGridItem[];
  socials: SiteData["socials"];
}

const rotatingTaglines = [
  "We are committed to support your journey to mental well-being",
  "We offer you a safe space to explore and learn",
  "Discover a path to mental well-being",
];

export const Hero = ({ description, founder, gridItems, socials }: HeroProps) => {
  const [activeSubtitle, setActiveSubtitle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSubtitle((current) => (current + 1) % rotatingTaglines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden font-sans">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary/5 absolute top-0 right-0 h-[40%] w-[40%] rounded-full blur-[120px]" />
        <div className="bg-accent/5 absolute top-1/2 left-[-10%] h-[30%] w-[30%] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-20 grid items-start gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <div className="space-y-6">
              <div className="grid w-full grid-cols-1 grid-rows-1 overflow-hidden">
                {rotatingTaglines.map((text, i) => (
                  <h3
                    key={i}
                    className={cn(
                      "col-start-1 row-start-1 w-full pr-4 text-sm tracking-[.25em] text-balance transition-all duration-700 ease-in-out md:text-xl md:tracking-[.4em]",
                      activeSubtitle === i
                        ? "visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible translate-y-4 opacity-0",
                    )}
                  >
                    {text}
                  </h3>
                ))}
              </div>

              <GradientHeading
                as="h1"
                size="xl"
                title="Hope, healing,"
                gradientText="and restoration."
              />
              <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                We are committed to restoring mental well being with evidence based conventional and
                biblical approaches.
              </p>
            </div>

            <div className="space-y-10">
              <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed md:text-2xl">
                {description}
              </p>

              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <MyButton variant="outline" size="lg" className="px-8">
                    View Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </MyButton>
                  <MyButton
                    variant="default"
                    size="lg"
                    className="px-8"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfVqk3Ytl8is-Oxk0AVqUx3v0sOEqgQ-L21OSNMnOPc4Yp14Q/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HeartHandshake className="mr-2 h-4 w-4" />
                    Request Therapy or Coaching Support
                  </MyButton>
                </div>
                <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
                  Complete our confidential support request form and a member of our team will get back to you.
                </p>
                <div className="border-border/60 flex items-center gap-4 border-l pl-8">
                  <div className="flex flex-wrap items-center gap-4">
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
                <p className="text-2xl leading-tight font-medium tracking-tight md:text-3xl">
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
                    <p className="text-[10px] tracking-[.3em] opacity-60">{founder.founderRole}</p>
                    <p className="text-lg tracking-tight">{founder.founderName}</p>
                  </div>
                </div>
              </div>
            </MyCard>
          </div>
        </div>

      </div>

      <div className="relative mt-24 hidden w-full md:block">
        <HeroGrid items={gridItems} />
      </div>
    </section>
  );
};
