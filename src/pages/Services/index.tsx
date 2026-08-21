import { ServicesGrid, ServicesHeader } from "@/components/features/services";

export default function Services() {
  return (
    <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </div>
  );
}
