export interface HeroData {
  subtitles: string[];
  description: string;
}

export interface FocusArea {
  iconName: "search" | "crown" | "dumbbell";
  tag: string;
  title: string;
  description: string;
}

export interface HomeProgram {
  id: string;
  iconName: "building-2" | "graduation-cap";
  title: string;
  description: string;
}

export type ObjectiveIconName =
  | "flask-conical"
  | "heart-handshake"
  | "graduation-cap"
  | "bar-chart-3";

export interface Objective {
  description: string;
  id: number;
  iconName: ObjectiveIconName;
  title: string;
}

export interface Event {
  day: string;
  month: string;
  tag: string;
  title: string;
  description: string;
  time: string;
  location: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface HeroGridItem {
  alt: string;
  aspect: string;
  bottomPadding: string;
  colSpan: string;
  containerClass: string;
  gradientOpacity: string;
  label: string;
  rotate: string;
  src: string;
  zIndex: string;
}
