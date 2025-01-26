"use client";

import { useEffect, useState } from "react";
// Components
import SubTitle from "@/components/ui/SubTitle";
import NewsCard from "@/components/ui/NewsCard";
import NewsCardsSteps from "@/components/ui/NewsCardsSteps";
// Constants
import { newsCardsList } from "@/constants/newsCardsList";
// Icons
import { GoArrowUpRight } from "react-icons/go";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

const NewsBlock = () => {
  const [current, setCurrent] = useState(0);
  const [steps, setSteps] = useState(1);

  const handlePrevSlide = () => {
    if (current === 0) {
      setCurrent(steps);
      return;
    }
    setCurrent(current - 1);
  };
  const handleNextSlide = () => {
    if (current === steps) {
      setCurrent(0);
      return;
    }
    setCurrent(current + 1);
  };

  useEffect(() => {
    const updateSteps = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setSteps(5);
      } else if (window.matchMedia("(max-width: 769px)").matches) {
        setSteps(2);
      } else {
        setSteps(1);
      }
    };

    updateSteps();

    window.addEventListener("resize", updateSteps);

    return () => window.removeEventListener("resize", updateSteps);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurrent(0);
    });
  }, []);

  return (
    <section className="relative bg-mainGreen p-16">
      <div className="flex items-center justify-between text-white">
        <SubTitle title="Новости" />
        <button className="flex items-center gap-x-2 rounded-full border border-white px-3 py-1 transition duration-300 hover:bg-white hover:text-black active:scale-95">
          Все новости
          <GoArrowUpRight className="h-7 w-7" />
        </button>
      </div>

      <div className="mx-auto mt-5 w-full overflow-hidden">
        <div
          style={{ transform: `translateX(-${current * 100}%)` }}
          className="flex w-full items-center transition duration-500"
        >
          {newsCardsList.map((card, index) => (
            <NewsCard key={index} {...card} />
          ))}
        </div>

        <NewsCardsSteps current={current} setCurrent={setCurrent} />
      </div>
      <button
        className="absolute left-5 top-1/2 -translate-y-1/2"
        onClick={handlePrevSlide}
      >
        <IoChevronBack className="h-8 w-8 text-white" />
      </button>
      <button
        className="absolute right-5 top-1/2 -translate-y-1/2"
        onClick={handleNextSlide}
      >
        <IoChevronForwardOutline className="h-8 w-8 text-white" />
      </button>
    </section>
  );
};

export default NewsBlock;
