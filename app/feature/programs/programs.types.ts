import type { LucideIcon } from "lucide-react";
import type { Partner } from "@/lib/data/shared.types";

export interface ProgramPoint {
  title: string;
  desc: string;
}

export interface ProgramSection {
  id: string;
  title: string;
  icon: string; // The string identifier used in static mock files/databases
  color: string;
  bg: string;
  points: ProgramPoint[];
}

export interface Program {
  label: string;
  title: string;
  gradientText: string;
  image: string;
  description: string;
  quote: string;
  partners: Partner[];
  sections: ProgramSection[];
}

export interface ProgramSummaryItem {
  icon: string;
  title: string;
  description: string;
  key: string;
}

export type ProgramsRegistry = Record<string, Program>;

export interface ProgramContentProps {
  program: Program;
}

export interface ProgramSectionData {
  title: string;
  icon: LucideIcon | string; // Resolves directly to the actual Lucide Icon Component inside the UI
  color: string;
  bg: string;
  points: ProgramPoint[];
}
