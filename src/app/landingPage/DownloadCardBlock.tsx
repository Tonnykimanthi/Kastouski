import Image from "next/image";
// Components
import BgLines from "@/components/ui/BgLines";
import SubTitle from "@/components/ui/SubTitle";

const DownloadCardBlock = () => {
  return (
    <section className="bg-mainGreen relative p-16 text-white max-lg:px-10 max-md:px-5">
      <BgLines path="/lines3.svg"/>
      <div className="text-center">
        <SubTitle
          title="Скачайте мобильное приложение FinFlow"
          paragraph="Скачайте FinFlow прямо сейчас и с лёгкостью управляйте своими финансами. Получите доступ к персонализированной аналитической информации, управляйте бюджетами, и многое другое - все это в одном надежном месте."
        />
      </div>
      <div className="mt-5 flex justify-center">
        <Image
          width={500}
          height={500}
          src={"/download-cards.svg"}
          alt="Download Cards"
          className="w-auto"
        />
      </div>
    </section>
  );
};

export default DownloadCardBlock;
