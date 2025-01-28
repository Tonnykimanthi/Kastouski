import Image from "next/image";

type GooglePlayBtnProps = {
  styles?: string;
};

const GooglePlayBtn = ({ styles }: GooglePlayBtnProps) => {
  return (
    <button
      className={`flex w-fit flex-shrink-0 items-center gap-x-4 rounded-full bg-white px-8 py-1 text-black transition hover:scale-x-105 hover:bg-white/95 ${styles}`}
    >
      <Image
        width={20}
        height={20}
        src={"/google-play.svg"}
        alt="Google Play"
        className="bg-transparent"
      />
      <span className="flex flex-col items-start text-sm">
        <p>Скачать в</p>
        <p>Google Play</p>
      </span>
    </button>
  );
};

export default GooglePlayBtn;
