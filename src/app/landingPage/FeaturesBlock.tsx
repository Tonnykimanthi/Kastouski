// Components
import SubTitle from "@/components/ui/SubTitle";
import { featuresList } from "@/constants/FeaturesList";
import Image from "next/image";
// Icons
import { CiMail } from "react-icons/ci";

const FeaturesBlock = () => {
  return (
    <section className="px-10">
      <div className="text-center">
        <SubTitle
          title="Возможности"
          paragraph="FinFlow обладает простыми и разнообразными функциями."
        />
      </div>

      <div className="relative mt-10 flex flex-col items-center max-md:mt-5">
        <Image
          width={400}
          height={400}
          src={"phone.svg"}
          alt="Phone"
          className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 max-md:hidden"
        />
        <Image
          width={400}
          height={400}
          src={"phone.svg"}
          alt="Phone"
          className="md:hidden"
        />
        <div className="grid grid-cols-2 gap-x-72 gap-y-10 max-lg:gap-x-56 max-lg:gap-y-5 max-md:gap-x-16 max-sm:grid-cols-1">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className={`group flex cursor-pointer items-center gap-x-5 max-sm:flex-row-reverse max-sm:justify-self-start ${index % 2 !== 0 ? "flex-row-reverse justify-self-start" : "flex-row justify-self-end"}`}
            >
              <span>
                <h5 className="text-lg font-medium">{feature.title}</h5>
                <p className="text-sm font-light">{feature.paragraph}</p>
              </span>
              <span className="h-12 w-12 shrink-0 rounded-full border border-black p-2.5 transition duration-300 group-hover:border-transparent group-hover:bg-mainYellow">
                <Image
                  width={25}
                  height={25}
                  src={feature.icon}
                  alt="Icon"
                  className="w-full"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBlock;
