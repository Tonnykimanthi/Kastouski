"use client";

// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
// Components
import SubTitle from "@/components/ui/SubTitle";
import Feedback from "@/components/ui/Feedback";
// Constants
import { feedbacksList } from "@/constants/feedbacksList";
// Icons
import { GoArrowUpRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const FeedbackBlock = () => {
  return (
    <section className="bg-mainGreen p-16">
      <div className="flex items-center justify-between gap-5 text-white max-sm:justify-center max-sm:text-center">
        <SubTitle title="Что говорят пользователи нашего приложения" />
        <button className="flex shrink-0 items-center gap-x-2 rounded-full border border-white px-3 py-1 transition duration-300 hover:bg-white hover:text-black active:scale-95 max-sm:hidden">
          Оставить отзыв
          <GoArrowUpRight className="h-7 w-7" />
        </button>
      </div>

      <main className="relative mx-auto mt-5 w-full">
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
            {feedbacksList.map((feedback, index) => (
              <SplideSlide key={index}>
                <Feedback {...feedback} />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows absolute top-1/2 -mt-7 w-full -translate-y-1/2 text-white">
            <button className="splide__arrow splide__arrow--prev absolute -left-12">
              <GoChevronLeft className="h-10 w-10" />
            </button>
            <button className="splide__arrow splide__arrow--next absolute -right-12">
              <GoChevronRight className="h-10 w-10" />
            </button>
          </div>
        </Splide>
        <button className="mx-auto mt-5 flex shrink-0 items-center gap-x-2 rounded-full border border-white px-3 py-1 text-white transition duration-300 hover:bg-white hover:text-black active:scale-95 sm:hidden">
          Оставить отзыв
          <GoArrowUpRight className="h-7 w-7" />
        </button>
      </main>
    </section>
  );
};

export default FeedbackBlock;
