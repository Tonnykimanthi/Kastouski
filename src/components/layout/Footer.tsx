import Link from "next/link";
import Image from "next/image";
// Constants
import { footerLinksList } from "@/constants/footerLinksList";
// Components
import GooglePlayBtn from "../ui/GooglePlayBtn";
import SubTitle from "../ui/SubTitle";
import SocialLink from "../ui/SocialLink";
import { socialLinksList } from "@/constants/SocialLinksList";

type FooterProps = {
  styles?: string;
  logo?: string;
  socialIconsStyles?: string;
  googlePlayBtnStyles?: string;
  colsListStyles?: string;
};

const Footer = ({
  styles,
  logo,
  socialIconsStyles,
  googlePlayBtnStyles,
  colsListStyles,
}: FooterProps) => {
  return (
    <footer className={`p-16 ${styles}`}>
      <div className="mx-auto flex max-w-[150rem] items-center justify-between gap-5 max-sm:flex-col max-sm:text-center">
        <SubTitle
          title="Управляйте финансами с лёгкостью"
          styles="!font-normal"
        />
        <GooglePlayBtn styles={googlePlayBtnStyles} />
      </div>

      <main className="mx-auto mt-5 flex max-w-[150rem] gap-24 max-md:flex-col-reverse max-md:items-center xl:gap-x-72">
        <Link href={"#"}>
          <Image
            width={185}
            height={185}
            src={`${logo}`}
            alt="Logo"
            className="w-[185px]"
          />
        </Link>
        <div className="grid grid-cols-2 gap-5">
          {footerLinksList.map((col, index) => (
            <div key={index}>
              <h5 className="mb-[20px]">{col.heading}</h5>
              {col.lists.map((item, i) => (
                <Link key={i} href={item.path}>
                  <p
                    className={`transition hover:text-black ${colsListStyles}`}
                  >
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </main>

      <div className="mx-auto mt-5 flex max-w-[150rem] items-center justify-between gap-5 max-sm:flex-col">
        <p className={`${colsListStyles}`}>2024 © Все права защищены</p>
        <div className="flex gap-5">
          {socialLinksList.map((item, index) => (
            <SocialLink key={index} {...item} styles={socialIconsStyles} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
