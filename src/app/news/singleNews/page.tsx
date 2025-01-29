// Components
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const page = () => {
  return (
    <div>
      <div className="px-16 py-5 max-lg:px-10 max-md:px-5">
        <Header logo="/logo-black.svg" />
      </div>

      <Footer
        styles="bg-mainGreen text-white"
        logo="/logo.svg"
        socialIconsStyles="text-black hover:bg-transparent hover:border-black"
      />
    </div>
  );
};

export default page;
