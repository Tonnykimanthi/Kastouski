import Image from "next/image";
// Components
import Navbar from "../layout/Navbar";
// Icons
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className="bg-mainGreen py-5 px-10 text-white">
      <Navbar />

      <h1 className="mt-10">
        <div className="flex items-center gap-x-5">
          <h2 className="text-6xl font-medium">Лучший способ управлять</h2>
          <span className="p-2 bg-mainYellow rounded-full">
            <GoArrowUpRight className="text-black w-10 h-10" />
          </span>
        </div>
        <div className="flex gap-x-5 items-center mt-2">
          <p className="max-w-lg font-light">
            Уже более 200 человек используют наше приложение. Удобный контроль
            за собственными доходами и расходами, которые помогут сохранить
            деньги.
          </p>
          <h2 className="text-6xl font-medium">своими финансами</h2>
        </div>
      </h1>

      <div className="-mt-32 relative">
        <Image width={1000} height={1000} src={"phones.svg"} alt="Phones" />
        <button className="bg-white absolute bottom-24 left-0 py-2 px-8 rounded-full text-black flex items-center gap-x-2">
          <Image
            width={25}
            height={25}
            src={"google-play.svg"}
            alt="Google Play"
            className="bg-transparent"
          />
          <span>
            <p>Скачать в</p>
            <p>Google Play</p>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
