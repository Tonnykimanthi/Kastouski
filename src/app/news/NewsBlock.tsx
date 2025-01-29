"use client";

import { useState } from "react";
import ReactPaginate from "react-paginate";
// Constants
import { newsList } from "@/constants/newsList";
// Components
import SubTitle from "@/components/ui/SubTitle";
import NewsItem from "@/components/ui/NewsItem";

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
      <div>
        <SubTitle title="Последние обновления" />
      </div>
      <div>
        <div className="mt-5 flex flex-col gap-y-5">
          {currentItems.map((news, index) => (
            <NewsItem key={index} {...news} />
          ))}
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          containerClassName="flex items-center justify-center mt-5 gap-x-2"
          pageClassName="rounded-lg px-3 py-1 hover:bg-mainGreen hover:text-white cursor-pointer"
          activeClassName="bg-mainGreen text-white"
          previousClassName="rounded-lg px-3 py-1 hover:bg-gray-300 cursor-pointer"
          nextClassName="rounded-lg px-3 py-1 hover:bg-gray-300 cursor-pointer"
        />
      </div>
    </>
  );
};

export default NewsBlock;
