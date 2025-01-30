"use client";

import Link from "next/link";
// Components
import { breadcrumbsData } from "@/constants/breadcrumbsData";
// Icons
import { GoChevronRight } from "react-icons/go";

const Breadcrumbs = () => {
  return (
    <ul className="flex gap-x-2">
      {breadcrumbsData.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-x-2 text-lg font-light"
        >
          {index === breadcrumbsData.length - 1 ? (
            item.label
          ) : (
            <>
              <Link href={item.path}>{item.label}</Link>
              <GoChevronRight className="h-7 w-7" />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
