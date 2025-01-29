import Image from "next/image";
// Components
import Header from "@/components/layout/Header";
import SubTitle from "@/components/ui/SubTitle";
import Search from "@/components/ui/Search";
import NewsBlock from "./NewsBlock";
import HelpBlock from "./HelpBlock";
import Footer from "@/components/layout/Footer";

const page = () => {
  return (
    <div>
      <div className="px-16 py-5 max-lg:px-10 max-md:px-5">
        <Header logo="/logo-black.svg" />
      </div>
      <div className="px-16 py-5 max-lg:px-10 max-md:px-5">
        <SubTitle title="Новости" />
      </div>
      <div className="relative py-5">
        <Image
          width={500}
          height={500}
          src={"/illustration.svg"}
          alt="Illustration"
          className="w-auto"
        />
        <Search
          placeholder="Поиск"
          styles="w-3/4 max-w-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
      </div>

      <main className="p-16 max-lg:px-10 max-md:px-5">
        <NewsBlock />
        <hr className="mt-10 border-black" />
      </main>
      <div className="flex flex-col items-center px-16 pb-16 max-lg:px-10 max-md:px-5">
        <HelpBlock />
      </div>

      <Footer
        styles="bg-mainGreen text-white"
        logo="logo.svg"
        socialIconsStyles="text-black hover:bg-transparent hover:border-black"
      />
    </div>
  );
};

export default page;
