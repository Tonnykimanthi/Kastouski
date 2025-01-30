"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Assets
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

type HeaderProps = {
  logo: string;
};

const Header = ({ logo }: HeaderProps) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between gap-x-12 max-w-[150rem] mx-auto">
      <Link href={"/"}>
        <Image
          width={185}
          height={185}
          src={logo}
          alt="Logo"
          className="w-[185px] xl:w-64 2xl:w-80"
        />
      </Link>
      <nav
        className={`left-0 right-0 top-0 z-20 origin-top-right transition max-md:absolute max-md:scale-0 max-md:bg-black max-md:p-20 max-md:text-white ${
          navIsOpen ? "max-md:scale-100" : "max-md:scale-0"
        }`}
      >
        <button
          className="absolute right-8 top-8 md:hidden"
          onClick={() => setNavIsOpen(false)}
        >
          <IoMdClose className="h-7 w-7 transition hover:scale-105" />
        </button>
        <ul className="flex items-center gap-x-8 text-base max-md:flex-col max-md:gap-y-5 xl:text-xl 2xl:text-2xl">
          <li className="transition hover:text-mainYellow">
            <Link href={"#"}>Главная</Link>
          </li>
          <li className="transition hover:text-mainYellow">
            <Link href={"#news"}>Новости</Link>
          </li>
          <li className="transition hover:text-mainYellow">
            <Link href={"#possibilities"}>Возможности</Link>
          </li>
          <li className="transition hover:text-mainYellow">
            <Link href={"#advantages"}>Преимущества</Link>
          </li>
          <li className="transition hover:text-mainYellow">
            <Link href={"#faqs"}>FAQs</Link>
          </li>
        </ul>
      </nav>
      <button className="md:hidden" onClick={() => setNavIsOpen(true)}>
        <FiMenu className="h-7 w-7" />
      </button>
    </header>
  );
};

export default Header;
