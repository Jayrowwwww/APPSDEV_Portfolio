import { ArrowUpRight, Code, Monitor, PenTool, Star } from "lucide-react";
import type { ComponentType } from "react";

const services: Array<{
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string; size?: number }>;
}> = [
  {
    title: "Web Design",
    description:
      "Custom websites that are beautiful, functional and conversion-focused.",
    Icon: Monitor,
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive interfaces and seamless experiences that users love to interact with.",
    Icon: PenTool,
  },
  {
    title: "Branding",
    description: "Strong visual identities that make your brand unforgettable.",
    Icon: Star,
  },
  {
    title: "Development",
    description:
      "Clean, scalable and fast websites built with the latest technologies.",
    Icon: Code,
  },
];

export function HomeServicesSection() {
  return (
    <section className="py-24 border-b border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 bg-primary text-white p-12 flex flex-col justify-between aspect-square lg:aspect-auto h-full relative">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase self-start mt-auto">
            Services
          </h2>
          <ArrowUpRight
            size={48}
            className="absolute top-12 right-12 opacity-50"
          />
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-8">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="p-8 border border-gray-200 hover:border-dark transition-colors"
            >
              <Icon className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-black uppercase mb-4">{title}</h3>
              <p className="text-sm text-gray-500 font-medium">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
