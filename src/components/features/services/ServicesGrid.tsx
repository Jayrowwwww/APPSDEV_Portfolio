import { ServiceCard } from "./ServiceCard";
import { services } from "./servicesData";

export function ServicesGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} service={service} />
      ))}
    </section>
  );
}
