import { Code, Layout, Smartphone } from "lucide-react";
import type { ComponentType } from "react";

export type Service = {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string; size?: number }>;
  iconClassName: string;
};

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Building responsive, fast, and secure web applications using modern frameworks.",
    Icon: Code,
    iconClassName: "text-primary",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that provide an exceptional user experience.",
    Icon: Layout,
    iconClassName: "text-secondary",
  },
  {
    title: "Mobile Optimization",
    description:
      "Ensuring your applications look and perform flawlessly across all devices and screen sizes.",
    Icon: Smartphone,
    iconClassName: "text-primary",
  },
];
