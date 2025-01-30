import Image from "next/image";
// Components
import Header from "../../components/layout/Header";
import Title from "../../components/ui/Title";
import BgLines from "@/components/ui/BgLines";
import GooglePlayBtn from "@/components/ui/GooglePlayBtn";
// Icons
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <section className="relative bg-mainGreen px-16 py-5 text-white max-lg:px-10 max-md:px-5">
      <BgLines path="/lines.svg" />
      <Header logo="/logo.svg" />

      <Title />

      <div className="relative mx-auto -mt-32 flex max-w-[150rem] flex-col items-center gap-y-2 max-md:-mt-20 max-sm:-mt-10">
        <Image width={2000} height={2000} src={"phones.svg"} alt="Phones" />
        <div className="bottom-14 left-0 w-auto max-lg:bottom-10 max-md:bottom-10 md:absolute">
          <GooglePlayBtn />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
