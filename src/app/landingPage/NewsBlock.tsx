"use client";

// @ts-expect-error Splide types are missing or incorrect
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
// Components
import SubTitle from "@/components/ui/SubTitle";
import NewsCard from "@/components/ui/NewsCard";
import BgLines from "@/components/ui/BgLines";
// Constants
import { newsCardsList } from "@/constants/newsCardsList";
// Icons
import { GoArrowUpRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const NewsBlock = () => {
  return (
    <section className="relative bg-mainGreen p-16 max-lg:px-10 max-md:px-5">
      <BgLines path="/lines2.svg" />
      <div className="z-[2] mx-auto flex items-center justify-between text-white max-sm:justify-center max-sm:text-center 2xl:max-w-[100rem]">
        <SubTitle title="Новости" />
        <button className="flex items-center gap-x-2 rounded-full border border-white px-3 py-1 uppercase transition duration-300 hover:bg-white hover:text-black active:scale-95 max-sm:hidden 2xl:px-6 2xl:py-2 2xl:text-2xl">
          Все новости
          <GoArrowUpRight className="h-7 w-7" />
        </button>
      </div>

      <main className="relative mx-auto mt-5 w-full 2xl:max-w-[150rem]">
        <Splide
          aria-label="News Slider"
          hasTrack={false}
          options={{
            rewind: true,
            perPage: 3,
            gap: "3rem",
            pagination: true,
            breakpoints: {
              1536: { gap: "1rem" },
              1024: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
        >
          <SplideTrack>
            {newsCardsList.map((card, index) => (
              <SplideSlide key={index}>
                <NewsCard {...card} />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows absolute top-1/2 w-full -translate-y-1/2 text-white">
            <button className="splide__arrow splide__arrow--prev absolute -left-9 2xl:-left-20">
              <GoChevronLeft className="size-10 2xl:size-20" />
            </button>
            <button className="splide__arrow splide__arrow--next absolute -right-9 2xl:-right-20">
              <GoChevronRight className="size-10 2xl:size-20" />
            </button>
          </div>
        </Splide>
        <button className="mx-auto mt-5 flex shrink-0 items-center gap-x-2 rounded-full border border-white px-3 py-1 text-white transition duration-300 hover:bg-white hover:text-black active:scale-95 sm:hidden">
          Все новости
          <GoArrowUpRight className="size-7" />
        </button>
      </main>
    </section>
  );
};

export default NewsBlock;
