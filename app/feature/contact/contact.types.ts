export interface ContactMethodData {
  iconName: "map-pin" | "mail" | "phone";
  title: string;
  detail: string;
  subDetail: string;
}

export interface ContactViewProps {
  contactMethods: ContactMethodData[];
}
