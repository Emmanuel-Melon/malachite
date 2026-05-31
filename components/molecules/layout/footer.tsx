import Link from "next/link";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  type LucideIcon,
  MapPin,
  MessageSquare,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { IconContainer } from "@/components/atoms/IconContainer";
import { SocialLink } from "@/components/atoms/SocialLink";
import { MyButton } from "@/components/atoms/button";
import { MyCard } from "@/components/atoms/card";
import { Statement } from "@/components/molecules/Statement";
import type { ContactItem, FooterNavGroup } from "@/lib/data/shared.types";
import { getSiteData } from "@/lib/data/site";

const contactIconMap: Record<string, LucideIcon> = {
  "map-pin": MapPin,
  phone: Phone,
};

const socialIconMap: Record<string, LucideIcon> = {
  "message-square": MessageSquare,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

const ContactInfo = ({ items }: { items: ContactItem[] }) => (
  <div className="space-y-8">
    {items.map((item, index) => {
      const ResolvedIcon = contactIconMap[item.icon] || MapPin;
      return (
        <div key={index} className="group relative flex flex-row items-center gap-6">
          <IconContainer
            icon={ResolvedIcon}
            variant="ghost"
            className="h-12 w-12 shrink-0 rounded-xl"
            iconClassName="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
          />
          <h2 className="text-muted-foreground group-hover:text-foreground text-lg leading-tight tracking-tighter transition-colors">
            {item.value}
          </h2>
        </div>
      );
    })}
  </div>
);

const FooterNav = ({ groups }: { groups: FooterNavGroup[] }) => (
  <>
    {groups.map((group) => (
      <div key={group.title} className="space-y-8">
        <div className="inline-flex items-center gap-3">
          <h3 className="text-xs font-bold tracking-[.4em]">{group.title}</h3>
        </div>
        <ul className="space-y-4">
          {group.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="group text-muted-foreground hover:text-foreground flex items-center gap-0 text-lg italic transition-all duration-300 hover:gap-3"
              >
                <ArrowRight className="text-primary h-5 w-0 opacity-0 transition-all group-hover:w-5 group-hover:opacity-100" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </>
);

export const Footer = async () => {
  const { contact, socials, navigation, ctaHeading, ctaSubheading } = await getSiteData();

  return (
    <footer className="bg-background border-border/40 relative overflow-hidden border-t font-sans">
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="mb-20 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="space-y-10 lg:col-span-6">
            <div className="space-y-6">
              <Link href="/" className="group inline-block">
                <h2 className="text-4xl leading-[0.9] tracking-tighter">
                  Malachite Center <br />
                  <span className="from-primary bg-gradient-to-r to-orange-600 bg-clip-text text-transparent italic">
                    for Mental Health
                  </span>
                </h2>
              </Link>
              <Statement
                text={
                  <>
                    empowering individuals to reach their full potential through{" "}
                    <span className="text-primary">sustainable recovery</span> and clinical
                    innovation.
                  </>
                }
                label="Our Mission"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              {socials.map((social) => {
                const ResolvedIcon = socialIconMap[social.icon] || MessageSquare;
                return <SocialLink key={social.href} href={social.href} icon={ResolvedIcon} />;
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:col-span-6">
            <div className="pt-2">
              <ContactInfo items={contact} />
            </div>
            <FooterNav groups={navigation} />
            <div className="pt-8 md:col-span-2">
              <MyCard className="bg-foreground text-background flex flex-col items-center justify-between gap-8 rounded-[2rem] border-none p-8 md:flex-row">
                <div className="space-y-1 text-center md:text-left">
                  <p className="text-2xl tracking-tighter">{ctaHeading}</p>
                  <p className="text-sm opacity-60">{ctaSubheading}</p>
                </div>
                <MyButton
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 rounded-full px-8"
                >
                  contact us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </MyButton>
              </MyCard>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary/5 absolute right-[-5%] bottom-[-10%] -z-10 h-96 w-96 rounded-full blur-[100px]" />
    </footer>
  );
};
