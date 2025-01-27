import Image from "next/image";

type GooglePlayBtnProps = {
  styles?: string;
};

const GooglePlayBtn = ({ styles }: GooglePlayBtnProps) => {
  return (
    <button
      className={`flex w-fit flex-shrink-0 items-center gap-x-2 rounded-full bg-white px-8 py-2 text-black transition hover:scale-x-105 hover:bg-white/95 ${styles}`}
    >
      <Image
        width={25}
        height={25}
        src={"/google-play.svg"}
        alt="Google Play"
        className="bg-transparent"
      />
      <span className="flex flex-col items-start max-sm:text-sm">
        <p>Скачать в</p>
        <p>Google Play</p>
      </span>
    </button>
  );
};

export default GooglePlayBtn;
