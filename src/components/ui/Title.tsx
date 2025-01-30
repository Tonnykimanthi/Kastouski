import Image from "next/image";

const Title = () => {
  return (
    <div className="mx-auto mt-10 w-fit max-w-[150rem] max-2xl:mt-20 max-sm:text-center 2xl:mt-32">
      <div className="flex items-center gap-x-5">
        <h2 className="whitespace-nowrap text-3xl md:text-5xl lg:text-6xl xl:text-[68px] 2xl:text-8xl min-[2160px]:text-9xl">
          Лучший способ управлять
        </h2>
        <div className="max-sm:hidden">
          <Image
            width={100}
            height={100}
            src={"/yellow-arrow-up-right.svg"}
            alt="Yellow arrow up right"
            className="w-14 md:w-16 lg:w-20 2xl:w-[102px] min-[2160px]:w-32"
          />
        </div>
      </div>
      <div className="mt-2 flex gap-x-5 gap-y-5 max-sm:flex-col-reverse">
        <p className="text-[18px] font-light xl:text-3xl 2xl:text-4xl min-[2160px]:text-5xl">
          Уже более 200 человек используют наше приложение. Удобный контроль за
          собственными доходами и расходами, которые помогут сохранить деньги.
        </p>
        <h2 className="whitespace-nowrap text-3xl md:text-5xl lg:text-6xl xl:text-[68px] 2xl:text-8xl min-[2160px]:text-9xl">
          своими финансами
        </h2>
      </div>
    </div>
  );
};

export default Title;
