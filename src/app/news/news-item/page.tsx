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
      <div className="px-16 py-5 max-lg:px-10 max-md:px-5">
        <Header logo="/logo-black.svg" />
      </div>
      <main className="px-16 py-10 max-lg:px-10 max-md:px-5">
        <div className="flex items-center justify-between max-md:flex-col gap-5">
          <Breadcrumbs />
          <Search placeholder="Поиск" styles="relative" />
        </div>
        <div className="mt-10 flex gap-x-10 gap-y-5 max-md:flex-col-reverse max-md:items-center">
          <OtherNews />
          <Article />
        </div>
      </main>
      <Footer
        styles="bg-mainGreen text-white"
        logo="/logo.svg"
        socialIconsStyles="text-black hover:bg-transparent hover:border-black"
      />
    </div>
  );
};

export default page;
