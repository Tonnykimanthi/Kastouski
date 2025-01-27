// Components
import HeroSection from "@/app/landingPage/HeroSection";
import FeaturesBlock from "./landingPage/FeaturesBlock";
import NewsBlock from "./landingPage/NewsBlock";
import AdvantagesBlock from "./landingPage/AdvantagesBlock";
import DownloadCardBlock from "./landingPage/DownloadCardBlock";
import QuestionBlock from "./landingPage/QuestionBlock";
import FeedbackBlock from "./landingPage/FeedbackBlock";

export default function Home() {
  return (
    <div className="pb-10">
      <HeroSection />
      <FeaturesBlock />
      <NewsBlock />
      <AdvantagesBlock />
      <DownloadCardBlock />
      <QuestionBlock />
      <FeedbackBlock />
    </div>
  );
}
