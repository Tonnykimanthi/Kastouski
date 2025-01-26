// Components
import HeroSection from "@/app/landingPage/HeroSection";
import FeaturesBlock from "./landingPage/FeaturesBlock";
import NewsBlock from "./landingPage/NewsBlock";
import AdvantagesBlock from "./landingPage/AdvantagesBlock";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10 pb-10">
      <HeroSection />
      <FeaturesBlock />
      <NewsBlock />
      <AdvantagesBlock />
    </div>
  );
}
