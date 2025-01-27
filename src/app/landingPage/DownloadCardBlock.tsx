// Components
import SubTitle from "@/components/ui/SubTitle";
import Image from "next/image";

const DownloadCardBlock = () => {
  return (
    <section className="bg-mainGreen p-16 text-white">
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
