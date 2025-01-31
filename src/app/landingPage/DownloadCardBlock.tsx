import Image from "next/image";
// Components
import BgLines from "@/components/ui/BgLines";
import SubTitle from "@/components/ui/SubTitle";
import GooglePlayBtn from "@/components/ui/GooglePlayBtn";

const DownloadCardBlock = () => {
  return (
    <section className="relative bg-mainGreen p-16 text-white max-lg:px-10 max-md:px-5">
      <BgLines path="/lines3.svg" styles="!top-56 !max-md:top-56" />
      <div className="mx-auto text-center 2xl:max-w-[80vw]">
        <SubTitle
          title="Скачайте мобильное приложение FinFlow"
          paragraph="Скачайте FinFlow прямо сейчас и с лёгкостью управляйте своими финансами. Получите доступ к персонализированной аналитической информации, управляйте бюджетами, и многое другое - все это в одном надежном месте."
        />
      </div>
      <div className="relative mx-auto mt-10 flex h-80 flex-col items-center overflow-hidden rounded-xl bg-white pt-5 md:h-[30rem] lg:h-[40rem] lg:px-10 lg:pt-7 xl:h-[45rem] 2xl:h-[60rem] 2xl:max-w-[80vw] 2xl:px-32 2xl:pt-[50px]">
        <GooglePlayBtn styles="border border-black md:self-start ml-5" />
        <div className="z-20 mt-auto w-full">
          <Image
            width={500}
            height={500}
            src={"/download-cards.svg"}
            alt="Download Cards"
            className="w-full"
          />
        </div>
        <Image
          width={500}
          height={500}
          src={"/yellow-rectangle.svg"}
          alt="Yellow Rectangle"
          className="absolute -left-4 top-20 w-24 sm:w-40 md:top-36 md:w-52 lg:w-72 xl:w-80 2xl:left-0 2xl:top-52 2xl:w-96"
        />
        <Image
          width={500}
          height={500}
          src={"/black-rectangle.svg"}
          alt="Black Rectangle"
          className="absolute -right-4 top-0 w-24 sm:w-40 md:w-52 lg:w-72 xl:w-80 2xl:w-96"
        />
      </div>
    </section>
  );
};

export default DownloadCardBlock;
