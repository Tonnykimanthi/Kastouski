import Image from "next/image";

type GooglePlayBtnProps = {
  styles?: string;
};

const GooglePlayBtn = ({ styles }: GooglePlayBtnProps) => {
  return (
    <button
      className={`flex w-fit flex-shrink-0 items-center gap-x-4 rounded-full bg-white px-[50px] py-[25px] text-black transition hover:scale-x-105 hover:bg-white/95 max-md:px-5 max-md:py-2 2xl:px-16 2xl:py-7 ${styles}`}
    >
      <Image
        width={40}
        height={40}
        src={"/google-play.svg"}
        alt="Google Play"
        className="bg-transparent max-md:w-8"
      />
      <span className="flex flex-col items-start text-sm xl:text-base">
        <p className="text-[18px] max-md:text-sm">Скачать в</p>
        <p className="text-[21px] font-medium max-md:text-base">Google Play</p>
      </span>
    </button>
  );
};

export default GooglePlayBtn;
