// Components
import HeroSection from "@/app/landingPage/HeroSection";
import FeaturesBlock from "./landingPage/FeaturesBlock";
import NewsBlock from "./landingPage/NewsBlock";
import AdvantagesBlock from "./landingPage/AdvantagesBlock";
import DownloadCardBlock from "./landingPage/DownloadCardBlock";
import QuestionBlock from "./landingPage/QuestionBlock";
import FeedbackBlock from "./landingPage/FeedbackBlock";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesBlock />
      <NewsBlock />
      <AdvantagesBlock />
      <DownloadCardBlock />
      <QuestionBlock />
      <FeedbackBlock />
      <Footer logo="logo-black.svg" googlePlayBtnStyles="border border-black"  socialIconsStyles="hover:border-black hover:bg-transparent"/>
    </div>
  );
}
