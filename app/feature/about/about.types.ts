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
  name: string;
  role: string;
  image: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface CultureItemData {
  title: string;
  description: string;
  iconName: "users" | "sparkles" | "shield-check" | "handshake";
  color: string;
  bg: string;
}
