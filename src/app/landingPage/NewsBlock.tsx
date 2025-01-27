"use client";

// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
// Components
import SubTitle from "@/components/ui/SubTitle";
import NewsCard from "@/components/ui/NewsCard";
// Constants
import { newsCardsList } from "@/constants/newsCardsList";
// Icons
import { GoArrowUpRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const NewsBlock = () => {
  return (
    <section className="bg-mainGreen p-16">
      <div className="flex items-center justify-between text-white">
        <SubTitle title="Новости" />
        <button className="flex items-center gap-x-2 rounded-full border border-white px-3 py-1 transition duration-300 hover:bg-white hover:text-black active:scale-95">
          Все новости
          <GoArrowUpRight className="h-7 w-7" />
        </button>
      </div>

      <div className="relative mx-auto mt-5 w-full">
        <Splide
          aria-label="News Slider"
          hasTrack={false}
          options={{
            rewind: true,
            perPage: 3,
            gap: "1rem",
            pagination: true,
            breakpoints: {
              768: { perPage: 2 },
              640: { perPage: 1 },
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
            <button className="splide__arrow splide__arrow--prev absolute -left-12">
              <GoChevronLeft className="h-10 w-10" />
            </button>
            <button className="splide__arrow splide__arrow--next absolute -right-12">
              <GoChevronRight className="h-10 w-10" />
            </button>
          </div>
        </Splide>
      </div>
    </section>
  );
};

export default NewsBlock;
