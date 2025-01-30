import { newsList } from "@/constants/newsList";
import Link from "next/link";

const OtherNews = () => {
  return (
    <div className="flex-[1] max-md:mt-5">
      <h2 className="text-[22px] font-medium">Другие новости</h2>
      <div className="mt-[30px] flex flex-col gap-y-[20px]">
        {newsList.slice(2, 9).map((item, index) => (
          <Link
            key={index}
            href={"news-item"}
            className="rounded-md border p-[15px] text-[18px] font-light transition hover:border-transparent hover:bg-mainGreen hover:text-white"
          >
            {item.title}
          </Link>
        ))}
        <button className="mx-auto mt-10 w-fit rounded-full border border-black px-[15px] py-2.5 transition hover:bg-black hover:text-white">
          Показать больше
        </button>
      </div>
    </div>
  );
};

export default OtherNews;
