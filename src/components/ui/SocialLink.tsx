import Link from "next/link";
import { IconType } from "react-icons";

type SocialLinksProps = {
  url: string;
  icon: IconType;
  styles?: string;
};

const SocialLinks = ({ url, icon: Icon, styles }: SocialLinksProps) => {
  return (
    <Link href={url}>
      <button
        className={`rounded-full border border-transparent bg-mainYellow p-3 transition duration-300 xl:p-[25px] ${styles}`}
      >
        <Icon className="h-7 w-7" />
      </button>
    </Link>
  );
};

export default SocialLinks;
