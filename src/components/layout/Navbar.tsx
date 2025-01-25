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
    <header className="flex justify-between items-center">
      <Link href={"Главная"}>
        <Image width={150} height={100} src={"logo.svg"} alt="Logo" />
      </Link>
      <nav
        className={`max-md:absolute top-0 z-20 left-0 right-0 max-md:bg-black max-md:p-20 max-md:scale-0 transition origin-top-right ${
          navIsOpen ? "max-md:scale-100" : "max-md:scale-0"
        }`}
      >
        <button
          className="absolute top-8 right-8 md:hidden"
          onClick={() => setNavIsOpen(false)}
        >
          <IoMdClose className="w-7 h-7 hover:scale-105 transition" />
        </button>
        <ul className="flex items-center gap-x-5 text-lg max-md:flex-col max-md:gap-y-5">
          <li className="hover:text-mainYellow transition">
            <Link href={"Главная"}>Главная</Link>
          </li>
          <li className="hover:text-mainYellow transition">
            <Link href={"Новости"}>Новости</Link>
          </li>
          <li className="hover:text-mainYellow transition">
            <Link href={"Возможности"}>Возможности</Link>
          </li>
          <li className="hover:text-mainYellow transition">
            <Link href={"Преимущества"}>Преимущества</Link>
          </li>
          <li className="hover:text-mainYellow transition">
            <Link href={"FAQs"}>FAQs</Link>
          </li>
        </ul>
      </nav>
      <button className="md:hidden" onClick={() => setNavIsOpen(true)}>
        <FiMenu className="w-7 h-7" />
      </button>
    </header>
  );
};

export default Navbar;
