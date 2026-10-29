"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { InfoBlock } from "@/components/molecules/InfoBlock";
import { fadeUp } from "@/lib/motion";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  detail: string;
  subDetail: string;
}

export const ContactInfoCard = ({ icon, title, detail, subDetail }: ContactInfoCardProps) => {
  return (
    <motion.div
      className="py-2 transition-transform duration-300 hover:translate-x-1"
      variants={fadeUp}
    >
      <InfoBlock icon={icon} title={title} description={`${detail} — ${subDetail}`} />
    </motion.div>
  );
};
