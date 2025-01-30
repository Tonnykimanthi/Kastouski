import Image from "next/image";

const Title = () => {
  return (
    <div className="mx-auto mt-10 w-fit max-w-[150rem] max-2xl:mt-20 2xl:mt-32">
      <div className="flex items-center gap-x-[60px] max-md:hidden">
        <h2 className="whitespace-nowrap text-3xl font-medium uppercase md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl min-[2160px]:text-8xl">
          Лучший способ управлять
        </h2>
        <div>
          <Image
            width={100}
            height={100}
            src={"/yellow-arrow-up-right.svg"}
            alt="Yellow arrow up right"
            className="w-14 md:w-16 lg:w-20 2xl:w-[102px] min-[2160px]:w-32"
          />
        </div>
      </div>
      <div className="mt-2 flex items-center gap-x-5 gap-y-5 max-md:hidden">
        <p className="text-xs font-light leading-tight lg:text-base 2xl:flex-[1] min-[2160px]:text-xl">
          Уже более 200 человек используют наше приложение. Удобный контроль за
          собственными доходами и расходами, которые помогут сохранить деньги.
        </p>
        <h2 className="whitespace-nowrap text-3xl font-medium uppercase md:text-4xl lg:text-5xl xl:text-6xl 2xl:flex-[2] 2xl:text-7xl min-[2160px]:text-8xl">
          своими финансами
        </h2>
      </div>

      {/* Title for Mobile */}
      <div className="text-center md:hidden">
        <h2 className="text-2xl font-medium uppercase md:text-3xl">
          Лучший способ управлять своими финансами
        </h2>
        <p className="font-light md:text-lg">
          Уже более 200 человек используют наше приложение. Удобный контроль за
          собственными доходами и расходами, которые помогут сохранить деньги.
        </p>
      </div>
    </div>
  );
};

export default Title;
