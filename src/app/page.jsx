import Image from "next/image";
import HeroSection from "./Components/home/HeroSection";
import MissionSection from "./Components/home/MissionSection";
import MetricsSection from "./Components/home/MetricsSection";
import ServicesSection from "./Components/home/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <MissionSection></MissionSection>
      <MetricsSection></MetricsSection>
      <ServicesSection></ServicesSection>
    </div>
  );
}
