import Image from "next/image";
// Components
import Navbar from "../layout/Navbar";
// Icons
import { GoArrowUpRight } from "react-icons/go";
import Title from "../ui/Title";

const HeroSection = () => {
  return (
    <div className="bg-mainGreen px-10 py-5 text-white">
      <Navbar />

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
        <button className="bottom-24 left-0 flex w-fit items-center gap-x-2 rounded-full bg-white px-8 py-2 text-black max-lg:bottom-16 max-md:bottom-10 md:absolute">
          <Image
            width={25}
            height={25}
            src={"google-play.svg"}
            alt="Google Play"
            className="bg-transparent"
          />
          <span className="max-sm:text-sm">
            <p>Скачать в</p>
            <p>Google Play</p>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
