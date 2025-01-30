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
        className={`flex size-[62px] items-center justify-center rounded-full border border-transparent bg-mainYellow p-3 transition duration-300 xl:p-[25px] ${styles}`}
      >
        <Image
          width={25}
          height={25}
          src={icon}
          alt={`${icon} icon`}
          className="w-auto"
        />
      </button>
    </Link>
  );
};

export default SocialLinks;
