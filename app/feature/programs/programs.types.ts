import type { LucideIcon } from "lucide-react";
import type { Partner } from "@/lib/data/shared.types";

export interface ProgramPoint {
  id: string;
  title: string;
  desc: string;
}

export interface ProgramSection {
  id: string;
  title: string;
  icon: string;
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
  id: string;
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
  id: string;
  title: string;
  icon: LucideIcon | string;
  color: string;
  bg: string;
  points: ProgramPoint[];
}
