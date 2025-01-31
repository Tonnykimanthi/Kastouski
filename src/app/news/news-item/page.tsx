// Components
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Search from "@/components/ui/Search";
import OtherNews from "./OtherNews";
import Article from "./Article";

const page = () => {
  return (
    <div>
      <div className="mx-auto px-16 py-5 max-lg:px-10 max-md:px-5 2xl:max-w-[80vw]">
        <Header logo="/logo-black.svg" />
      </div>
      <main className="mx-auto px-16 py-10 max-lg:px-10 max-md:px-5 2xl:max-w-[80vw]">
        <div className="flex items-center justify-between gap-5 max-md:flex-col">
          <Breadcrumbs />
          <Search placeholder="Поиск" styles="relative" />
        </div>
        <div className="mt-[50px] flex gap-x-10 gap-y-5 max-lg:flex-col-reverse max-md:items-center 2xl:gap-x-[150px]">
          <OtherNews />
          <Article />
        </div>
      </main>
      <Footer
        styles="bg-lightMainGreen text-white"
        logo="/logo.svg"
        socialIconsStyles="text-black hover:bg-transparent hover:border-black"
      />
    </div>
  );
};

export default page;
