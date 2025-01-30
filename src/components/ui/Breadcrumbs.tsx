"use client";

import Link from "next/link";
// Components
import { breadcrumbsData } from "@/constants/breadcrumbsData";
// Icons
import NextArrow from "./Arrow";

const Breadcrumbs = () => {
  return (
    <ul className="flex gap-x-4">
      {breadcrumbsData.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-x-4 text-lg font-light"
        >
          {index === breadcrumbsData.length - 1 ? (
            item.label
          ) : (
            <>
              <Link href={item.path}>{item.label}</Link>
              <NextArrow />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
