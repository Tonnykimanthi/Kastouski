import Image from "next/image";

const Title = () => {
  return (
    <div className="mx-auto mt-10 w-fit max-w-[110rem] max-2xl:mt-20 max-sm:text-center 2xl:mt-32">
      <div className="flex items-center gap-x-5">
        <h1 className="w-full text-[68px] font-medium uppercase max-xl:text-5xl max-lg:text-4xl max-md:text-3xl 2xl:text-9xl">
          Лучший способ управлять
        </h1>
        <div className="max-sm:hidden">
          <Image
            width={100}
            height={100}
            src={"/yellow-arrow-up-right.svg"}
            alt="Yellow arrow up right"
            className="w-[102px] max-lg:w-20 max-md:w-16 2xl:w-64"
          />
        </div>
      </div>
      <div className="mt-2 flex items-center gap-x-5 gap-y-5 max-sm:flex-col-reverse">
        <p className="text-[18px] font-light xl:text-3xl 2xl:text-4xl">
          Уже более 200 человек используют наше приложение. Удобный контроль за
          собственными доходами и расходами, которые помогут сохранить деньги.
        </p>
        <h1 className="w-fit text-[68px] font-medium uppercase max-xl:text-5xl max-lg:text-4xl max-md:text-3xl 2xl:text-9xl">
          своими финансами
        </h1>
      </div>
    </div>
  );
};

export default Title;
