export interface FounderData {
  headerLabel: string;
  headerTitle: string;
  headerGradientText: string;
  statementLabel: string;
  statementText: string;
  imageSrc: string;
  imageAlt: string;
  founderRole: string;
  founderName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface CultureItemData {
  id: string;
  title: string;
  description: string;
  iconName: "users" | "sparkles" | "shield-check" | "handshake";
  color: string;
  bg: string;
}

export interface AboutPageData {
  founder: FounderData;
  teamMembers: TeamMember[];
  cultureItems: CultureItemData[];
}
