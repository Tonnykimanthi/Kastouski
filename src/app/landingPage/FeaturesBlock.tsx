import Image from "next/image";
// Constants
import { featuresList } from "@/constants/FeaturesList";
// Components
import SubTitle from "@/components/ui/SubTitle";

const FeaturesBlock = () => {
  return (
    <section id="possibilities" className="p-16 max-lg:px-10 max-md:px-5">
      <div className="text-center">
        <SubTitle
          title="Возможности"
          paragraph="FinFlow обладает простыми и разнообразными функциями."
        />
      </div>

      <div className="relative mx-auto mt-10 flex max-w-[150rem] flex-col items-center max-md:mt-5 2xl:mt-36">
        <Image
          width={400}
          height={400}
          src={"phone.svg"}
          alt="Phone"
          className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 max-lg:hidden 2xl:w-auto"
        />
        <Image
          width={400}
          height={400}
          src={"phone.svg"}
          alt="Phone"
          className="w-auto lg:hidden"
        />
        <main className="grid grid-cols-2 gap-x-64 gap-y-10 border max-lg:gap-x-16 max-lg:gap-y-5 max-md:gap-x-14 max-sm:grid-cols-1 xl:mt-6 2xl:gap-x-[30rem]">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className={`group flex w-fit cursor-pointer items-center gap-x-5 max-sm:flex-row-reverse max-sm:justify-self-start 2xl:max-w-md ${index % 2 !== 0 ? "flex-row-reverse justify-self-start" : "justify-self-end"}`}
            >
              <div
                className={`${index % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}
              >
                <h5 className="font-medium 2xl:text-[21px]">{feature.title}</h5>
                <p className="font-light 2xl:text-[18px]">
                  {feature.paragraph}
                </p>
              </div>
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-black p-2.5 transition duration-300 group-hover:border-transparent group-hover:bg-mainYellow 2xl:size-20">
                <Image
                  width={25}
                  height={25}
                  src={feature.icon}
                  alt="Icon"
                  className="w-auto"
                />
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default FeaturesBlock;
