import Image from "next/image";
// Components
import Navbar from "../layout/Navbar";
// Icons
import { GoArrowUpRight } from "react-icons/go";
import Title from "../ui/Title";

const HeroSection = () => {
  return (
    <div className="bg-mainGreen py-5 px-10 text-white">
      <Navbar />

      <h1 className="mt-10 max-md:text-center">
        <div className="flex items-center gap-x-5">
          <Title text="Лучший способ управлять" />
          <span className="p-2 bg-mainYellow rounded-full max-md:hidden">
            <GoArrowUpRight className="text-black w-10 h-10" />
          </span>
        </div>
        <div className="flex gap-x-5 items-center mt-2 max-md:flex-col-reverse max-md:mt-0 gap-y-5 max-md:items-center">
          <p className="max-w-lg font-light">
            Уже более 200 человек используют наше приложение. Удобный контроль
            за собственными доходами и расходами, которые помогут сохранить
            деньги.
          </p>
          <Title text="своими финансами" />
        </div>
      </h1>

      <div className="-mt-32 relative max-md:-mt-20 max-sm:-mt-10 flex flex-col items-center gap-y-2">
        <Image width={1000} height={1000} src={"phones.svg"} alt="Phones" />
        <button className="bg-white md:absolute w-fit bottom-24 max-lg:bottom-16 max-md:bottom-10 left-0 py-2 px-8 rounded-full text-black flex items-center gap-x-2">
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
