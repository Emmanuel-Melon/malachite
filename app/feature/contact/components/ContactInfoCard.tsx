import type { LucideIcon } from "lucide-react";
import { FocusItem } from "@/components/molecules/FocusItem";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  detail: string;
  subDetail: string;
}

export const ContactInfoCard = ({ icon, title, detail, subDetail }: ContactInfoCardProps) => {
  return (
    <div className="py-2 transition-transform duration-300 hover:translate-x-1">
      <FocusItem icon={icon} title={title} description={`${detail} — ${subDetail}`} />
    </div>
  );
};
