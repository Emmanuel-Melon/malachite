export interface ContactMethodData {
  id: string;
  iconName: "map-pin" | "mail" | "phone";
  title: string;
  detail: string;
  subDetail: string;
}

export interface ContactViewProps {
  contactMethods: ContactMethodData[];
}
