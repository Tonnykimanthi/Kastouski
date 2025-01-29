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
      <div className="flex h-52 justify-center border-b bg-gradient-to-br from-mintWhite/50 to-mintGreen/50">
        <Image
          width={150}
          height={150}
          src={img}
          alt="Wallet with credit card"
        />
      </div>

      <div className="bg-white p-2">
        <p className="font-light">
          <span>Обновление</span> | <span>{date}</span>
        </p>
        <h5 className="my-2">{title}</h5>
        <p className="font-light">{paragraph}</p>
      </div>

      <button className="group flex w-full gap-x-2 border-t bg-white px-2 py-3">
        Читать далее
        <GoArrowUpRight className="h-7 w-7 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default NewsCard;
