import Image from "next/image";
// Components
import Header from "@/components/layout/Header";
import SubTitle from "@/components/ui/SubTitle";
import Search from "@/components/ui/Search";

const page = () => {
  return (
    <div>
      <div className="px-16 py-5 max-lg:px-10 max-md:px-5">
        <Header logo="/logo-black.svg" />
      </div>
      <div className="px-16 py-5 max-lg:px-10 max-md:px-5">
        <SubTitle title="Новости" />
      </div>
      <div className="relative border px-16 py-5 max-lg:px-10 max-md:px-5">
        <Image
          width={500}
          height={500}
          src={"/illustration.svg"}
          alt="Illustration"
          className="w-auto"
        />
        <Search
          placeholder="Поиск"
          styles="w-3/4 max-w-md absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default page;
