"use client";

import { useState } from "react";
// Constants
import { newsList } from "@/constants/newsList";
// Components
import SubTitle from "@/components/ui/SubTitle";
import NewsItem from "@/components/ui/NewsItem";
import Pagination from "@/components/ui/Pagination";

const NewsBlock = () => {


  


  return (
    <>
      <div>
        <SubTitle title="Последние обновления" />
      </div>
      <div>
        <div className="mt-5 flex flex-col gap-y-5">
          {newsList.map((news, index) => (
            <NewsItem key={index} {...news} />
          ))}
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default NewsBlock;
