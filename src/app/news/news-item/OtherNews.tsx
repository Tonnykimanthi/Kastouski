import { newsList } from "@/constants/newsList";
import Link from "next/link";

const OtherNews = () => {
  return (
    <div className="flex-[1] max-md:mt-5">
      <h2 className="font-medium">Другие новости</h2>
      <div className="mt-5 flex flex-col gap-y-2">
        {newsList.slice(2, 9).map((item, index) => (
          <Link
            key={index}
            href={"news-item"}
            className="rounded-md border p-4 transition hover:border-transparent hover:bg-mainGreen hover:text-white"
          >
            {item.title}
          </Link>
        ))}
        <button className="mx-auto mt-5 w-fit rounded-full border border-black px-5 py-2 transition hover:bg-black hover:text-white">
          Показать больше
        </button>
      </div>
    </div>
  );
};

export default OtherNews;
