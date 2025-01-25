"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Assets
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between">
      <Link href={"Главная"}>
        <Image width={150} height={100} src={"logo.svg"} alt="Logo" />
      </Link>
      <nav
        className={`left-0 right-0 top-0 z-20 origin-top-right transition max-md:absolute max-md:scale-0 max-md:bg-black max-md:p-20 ${
          navIsOpen ? "max-md:scale-100" : "max-md:scale-0"
        }`}
      >
        <button
          className="absolute right-8 top-8 md:hidden"
          onClick={() => setNavIsOpen(false)}
        >
          <IoMdClose className="h-7 w-7 transition hover:scale-105" />
        </button>
        <ul className="flex items-center gap-x-5 text-lg max-md:flex-col max-md:gap-y-5">
          <li className="transition hover:text-mainYellow">
            <Link href={"#"}>Главная</Link>
          </li>
          <li className="transition hover:text-mainYellow">
            <Link href={"#"}>Новости</Link>
          </li>
          <li className="transition hover:text-mainYellow">
            <Link href={"#"}>Возможности</Link>
          </li>
          <li className="transition hover:text-mainYellow">
            <Link href={"#"}>Преимущества</Link>
          </li>
          <li className="transition hover:text-mainYellow">
            <Link href={"#"}>FAQs</Link>
          </li>
        </ul>
      </nav>
      <button className="md:hidden" onClick={() => setNavIsOpen(true)}>
        <FiMenu className="h-7 w-7" />
      </button>
    </header>
  );
};

export default Navbar;
