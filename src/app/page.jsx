import Image from "next/image";
import HeroSection from "./Components/home/HeroSection";
import MissionSection from "./Components/home/MissionSection";
import MetricsSection from "./Components/home/MetricsSection";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <MissionSection></MissionSection>
      <MetricsSection></MetricsSection>
    </div>
  );
}
