// Components
import SubTitle from "@/components/ui/SubTitle";
import Image from "next/image";

const AdvantagesBlock = () => {
  return (
    <section
      id="advantages"
      className="overflow-y-hidden p-16 max-lg:px-10 max-md:px-5"
    >
      <div className="mx-auto text-center 2xl:max-w-[80vw]">
        <SubTitle
          title="Получите наилучшие впечатления"
          paragraph="Совершите плавный переход к финансовому мастерству с помощью интуитивно понятных инструментов, персонализированной информации и безопасных транзакций."
        />
      </div>
      <main className="mx-auto mt-10 grid grid-cols-2 gap-5 max-sm:grid-cols-1 2xl:max-w-[80vw]">
        <Image
          width={500}
          height={500}
          src={"/graphic-card.svg"}
          alt="Graphic Card"
          className="w-full"
        />
        <div className="grid gap-5">
          <Image
            width={500}
            height={500}
            src={"/nn-card.svg"}
            alt="NN Card"
            className="w-full"
          />
          <div className="grid grid-cols-2 gap-5">
            <Image
              width={500}
              height={500}
              src={"/currency-card.svg"}
              alt="Currency Card"
              className="w-full"
            />
            <Image
              width={500}
              height={500}
              src={"/loyalty-card.svg"}
              alt="Loyalty Card"
              className="w-full"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default AdvantagesBlock;
