import Link from "next/link";
import Image from "next/image";
// Constants
import { headerColsList } from "@/constants/headerCols";
// Components
import GooglePlayBtn from "../ui/GooglePlayBtn";
import SubTitle from "../ui/SubTitle";
import SocialLink from "../ui/SocialLink";
import { socialLinksList } from "@/constants/SocialLinksList";

const Footer = () => {
  return (
    <footer className="p-16">
      <div className="flex items-center justify-between gap-5 max-sm:flex-col max-sm:text-center">
        <SubTitle title="Управляйте финансами с лёгкостью" />
        <GooglePlayBtn styles="border border-black"/>
      </div>

      <main className="mt-5 flex justify-between gap-5 max-md:flex-col-reverse max-md:items-center">
        <Link href={"#"}>
          <Image width={150} height={100} src={"/logo-black.svg"} alt="Logo" />
        </Link>
        <div className="grid grid-cols-2 gap-5">
          {headerColsList.map((col, index) => (
            <div key={index}>
              <h5 className="mb-2 font-medium">{col.heading}</h5>
              {col.list.map((item, i) => (
                <p
                  key={i}
                  className="cursor-pointer font-light transition hover:scale-y-110"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </main>

      <div className="mt-5 flex items-center justify-between gap-5 max-sm:flex-col">
        <p>2024 © Все права защищены</p>
        <div className="flex gap-5">
          {socialLinksList.map((item, index) => (
            <SocialLink key={index} {...item} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
