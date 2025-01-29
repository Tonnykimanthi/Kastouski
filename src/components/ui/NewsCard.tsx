import Image from "next/image";
// Icons
import { GoArrowUpRight } from "react-icons/go";

type NewsCardProps = {
  date: string;
  title: string;
  paragraph: string;
  img: string;
};

const NewsCard = ({ date, title, paragraph, img }: NewsCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl 2xl:text-3xl">
      <div className="flex h-52 justify-center border-b border-b-black bg-gradient-to-br from-mintWhite/50 to-mintGreen/50">
        <Image
          width={150}
          height={150}
          src={img}
          alt="Wallet with credit card"
          className="w-[169px]"
        />
      </div>

      <div className="border-b border-b-black bg-white p-[25px] 2xl:p-8">
        <p className="text-base">
          <span>Обновление</span> | <span>{date}</span>
        </p>
        <h5 className="my-[10px] text-[22px] font-medium">{title}</h5>
        <p className="text-[18px] font-light">{paragraph}</p>
      </div>

      <button className="group flex w-full gap-x-2 border-t bg-white px-2 py-3 text-[18px] uppercase 2xl:px-8">
        Читать далее
        <GoArrowUpRight className="h-7 w-7 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default NewsCard;
