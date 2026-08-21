import {
  AboutSkillsSection,
  HeroSection,
  HomeServicesSection,
  SelectedWorkSection,
  StatsSection,
} from "@/components/features/home";

export default function Home() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <HeroSection />
        <StatsSection />
        <SelectedWorkSection />
        <HomeServicesSection />
        <AboutSkillsSection />
      </div>
    </div>
  );
}
