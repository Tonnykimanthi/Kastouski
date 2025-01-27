import Image from "next/image";
// Components
import Header from "../../components/layout/Header";
import Title from "../../components/ui/Title";
// Icons
import { GoArrowUpRight } from "react-icons/go";
import GooglePlayBtn from "@/components/ui/GooglePlayBtn";

const HeroSection = () => {
  return (
    <section className="bg-mainGreen px-16 py-5 text-white">
      <Header />

      <h1 className="mt-10 max-md:text-center">
        <div className="flex items-center gap-x-5">
          <Title text="Лучший способ управлять" />
          <span className="rounded-full bg-mainYellow p-2 max-md:hidden">
            <GoArrowUpRight className="h-10 w-10 text-black" />
          </span>
        </div>
        <div className="mt-2 flex items-center gap-x-5 gap-y-5 max-md:mt-0 max-md:flex-col-reverse max-md:items-center">
          <p className="max-w-lg font-light">
            Уже более 200 человек используют наше приложение. Удобный контроль
            за собственными доходами и расходами, которые помогут сохранить
            деньги.
          </p>
          <Title text="своими финансами" />
        </div>
      </h1>

      <div className="relative -mt-32 flex flex-col items-center gap-y-2 max-md:-mt-20 max-sm:-mt-10">
        <Image width={1000} height={1000} src={"phones.svg"} alt="Phones" />
        <div className="bottom-24 left-0 max-lg:bottom-16 max-md:bottom-10 md:absolute">
          <GooglePlayBtn />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
