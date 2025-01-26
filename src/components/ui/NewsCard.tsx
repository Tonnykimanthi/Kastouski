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
    <div className="w-1/3 flex-shrink-0 px-2 max-md:w-1/2 max-sm:w-full">
      <div className="rounded-xl border">
        <div className="from-mintWhite/50 to-mintGreen/50 flex h-52 justify-center overflow-hidden rounded-t-xl border-b bg-gradient-to-br">
          <Image
            width={150}
            height={150}
            src={img}
            alt="Wallet with credit card"
          />
        </div>

        <div className="bg-white p-2">
          <p className="font-light">
            <span>Обновление</span> <span>|</span> <span>{date}</span>
          </p>
          <h5 className="my-2">{title}</h5>
          <p className="font-light">{paragraph}</p>
        </div>

        <button className="group flex w-full gap-x-2 rounded-b-xl border-t bg-white px-2 py-3">
          Читать далее
          <GoArrowUpRight className="h-7 w-7 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
