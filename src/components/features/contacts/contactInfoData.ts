import { Mail, MapPin, Phone } from "lucide-react";
import type { ComponentType } from "react";

export type ContactInfoItem = {
  label: string;
  value: string;
  Icon: ComponentType<{ size?: number }>;
  iconClassName: string;
};

export const contactInfoItems: ContactInfoItem[] = [
  {
    label: "Email",
    value: "salerajerrehromer@gmail.com",
    Icon: Mail,
    iconClassName: "text-primary",
  },
  {
    label: "Phone",
    value: "+63 956 325 4090",
    Icon: Phone,
    iconClassName: "text-secondary",
  },
  {
    label: "Location",
    value: "Cebu, Philippines",
    Icon: MapPin,
    iconClassName: "text-primary",
  },
];
