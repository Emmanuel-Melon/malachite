import type { CultureItemData, FounderData, TeamMember } from "../about.types";

const founderData: FounderData = {
  headerLabel: "Our Story",
  headerTitle: "pioneering the future of",
  headerGradientText: "mental wellness.",
  statementLabel: "The Vision",
  statementText:
    "Founded in 2026, malachite medical centre was born from a vision to bridge the gap between clinical excellence and compassionate community support. our mission is to provide accessible, evidence-based mental health services that empower individuals to achieve sustainable recovery and independence.",
  imageSrc: "/tina.png",
  imageAlt: "Christina Angela Ntulo",
  founderRole: "Founder & CEO",
  founderName: "Christina Angela Ntulo",
};

const teamMembers: TeamMember[] = [
  {
    id: "member-christine-mukasa",
    name: "Christine Mukasa Mugerwa",
    role: "Board Member",
    image: "/christine.png",
  },
  {
    id: "member-katherine-sempebwa",
    name: "Katherine Sempebwa Turinawe",
    role: "Board Member",
    image: "/katherine.png",
  },
  {
    id: "member-leonard-businge",
    name: "Leonard Businge",
    role: "Board Member",
    image: "/leonard.png",
  },
  {
    id: "member-waweru-njenga",
    name: "Waweuru Njenga",
    role: "Board Chairman",
    image: "/waweru.png",
  },
];

const cultureItems: CultureItemData[] = [
  {
    id: "culture-client-uniqueness",
    title: "Client Uniqueness",
    description:
      "We believe that while human experiences may share similarities, each individual is uniquely designed, endowed with purpose, and enriched for relationships and community.",
    iconName: "users",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: "culture-sustained-healing",
    title: "Sustained Healing",
    description:
      "We encourage both our team and clients to explore the optimal path to sustained healing and recovery, recognizing that this journey varies for each individual based on their resources and circumstances.",
    iconName: "sparkles",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    id: "culture-excellence-service",
    title: "Excellence in Service",
    description:
      "Our commitment is to consistently deliver an exceptional experience, bringing our A-game at all times. We consider it an honor to serve our clients and express gratitude.",
    iconName: "shield-check",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: "culture-collaboration",
    title: "Collaboration",
    description:
      "Embracing the belief in the strength of collaboration, we actively engage with like-minded individuals and organizations to enhance our clients' experiences.",
    iconName: "handshake",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export async function getCultureItems(): Promise<CultureItemData[]> {
  return cultureItems;
}

export async function getFounder(): Promise<FounderData> {
  return founderData;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return teamMembers;
}
