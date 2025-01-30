"use client";

import { useState } from "react";
import ReactPaginate from "react-paginate";
// Constants
import { newsList } from "@/constants/newsList";
// Components
import SubTitle from "@/components/ui/SubTitle";
import NewsItem from "@/components/ui/NewsItem";
import NextArrow, { PrevArrow } from "@/components/ui/Arrow";

const NewsBlock = () => {
  const itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = newsList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(newsList.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % newsList.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="text-center">
        <SubTitle title="Последние обновления" styles="!text-[35px]" />
      </div>
      <div>
        <div className="mt-[50px] flex flex-col gap-y-10 pb-[30px] xl:gap-y-[70px]">
          {currentItems.map((news, index) => (
            <NewsItem key={index} {...news} />
          ))}
        </div>
        <div className="mt-[60px]">
          <ReactPaginate
            breakLabel="..."
            nextLabel=<NextArrow />
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel=<PrevArrow />
            containerClassName="flex items-center justify-center mt-5 gap-x-2"
            pageClassName="rounded-lg px-3 py-1 hover:bg-mainGreen hover:text-white cursor-pointer"
            activeClassName="bg-mainGreen text-white"
            previousClassName="rounded-lg px-3 py-1.5 hover:bg-gray-300 cursor-pointer"
            nextClassName="rounded-lg px-3 py-1.5 hover:bg-gray-300 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default NewsBlock;
