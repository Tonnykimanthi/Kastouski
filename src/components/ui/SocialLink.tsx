import Image from "next/image";
import Link from "next/link";

type SocialLinksProps = {
  url: string;
  icon: string;
  styles?: string;
};

const SocialLinks = ({ url, icon, styles }: SocialLinksProps) => {
  return (
    <Link href={url}>
      <button
        className={`flex size-[62px] items-center justify-center rounded-full border border-transparent bg-mainYellow p-3 transition duration-300 ${styles}`}
      >
        <Image
          width={100}
          height={100}
          src={icon}
          alt="Social Link Icon"
          className="h-full w-full"
        />
      </button>
    </Link>
  );
};

export default SocialLinks;
