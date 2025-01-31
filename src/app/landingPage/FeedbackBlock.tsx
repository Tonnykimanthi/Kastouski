"use client";

// @ts-expect-error Splide types are missing or incorrect
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
// Components
import SubTitle from "@/components/ui/SubTitle";
import Feedback from "@/components/ui/Feedback";
import BgLines from "@/components/ui/BgLines";
// Constants
import { feedbacksList } from "@/constants/feedbacksList";
// Icons
import { GoArrowUpRight } from "react-icons/go";

const FeedbackBlock = () => {
  return (
    <section className="relative overflow-y-hidden bg-mainGreen p-16 max-lg:px-10 max-md:px-5">
      <BgLines path="/lines4.svg" styles="!-top-2 !max-md:-top-10" />
      <div className="mx-auto flex items-center justify-between gap-5 text-white max-sm:justify-center max-sm:text-center 2xl:max-w-[80vw]">
        <SubTitle title="Что говорят пользователи нашего приложения" />
        <button className="flex shrink-0 items-center gap-x-2 rounded-full border border-white px-3 py-1 uppercase transition duration-300 hover:bg-white/20 active:scale-95 max-sm:hidden 2xl:px-6 2xl:py-2 2xl:text-2xl">
          Оставить отзыв
          <Image
            width={50}
            height={50}
            src={"/arrow-up-right.svg"}
            alt="Arrow up right"
            className="w-4"
          />
        </button>
      </div>

      <main className="relative mx-auto mt-10 w-full 2xl:max-w-[80vw]">
        <Splide
          aria-label="News Slider"
          hasTrack={false}
          options={{
            rewind: true,
            perPage: 3,
            gap: "1rem",
            pagination: true,
            breakpoints: {
              1024: { perPage: 2 },
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
          <div className="splide__arrows absolute top-1/2 -mt-6 w-full -translate-y-1/2 text-white max-md:hidden">
            <button className="splide__arrow splide__arrow--prev absolute -left-10 max-md:-left-8">
              <Image
                width={50}
                height={50}
                src={"/arrow-left.svg"}
                alt="Arrow left"
                className="w-5"
              />
            </button>
            <button className="splide__arrow splide__arrow--next absolute -right-10 max-md:-right-8">
              <Image
                width={50}
                height={50}
                src={"/arrow-right.svg"}
                alt="Arrow right"
                className="w-5"
              />
            </button>
          </div>
        </Splide>
        <button className="mx-auto !mt-10 flex shrink-0 items-center gap-x-2 rounded-full border border-white px-3 py-1 text-white transition duration-300 hover:bg-white hover:text-black active:scale-95 sm:hidden">
          Оставить отзыв
          <GoArrowUpRight className="h-7 w-7" />
        </button>
      </main>
    </section>
  );
};

export default FeedbackBlock;
