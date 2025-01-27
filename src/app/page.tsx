// Components
import HeroSection from "@/app/landingPage/HeroSection";
import FeaturesBlock from "./landingPage/FeaturesBlock";
import NewsBlock from "./landingPage/NewsBlock";
import AdvantagesBlock from "./landingPage/AdvantagesBlock";
import DownloadCardBlock from "./landingPage/DownloadCardBlock";

export default function Home() {
  return (
    <div className="pb-10">
      <HeroSection />
      <FeaturesBlock />
      <NewsBlock />
      <AdvantagesBlock />
      <DownloadCardBlock />
    </div>
  );
}
