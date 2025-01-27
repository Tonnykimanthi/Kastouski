import Link from "next/link";
import { IconType } from "react-icons";

type SocialLinksProps = {
  url: string;
  icon: IconType;
};

const SocialLinks = ({ url, icon: Icon }: SocialLinksProps) => {
  return (
    <Link href={url}>
      <button className="rounded-full border border-transparent bg-mainYellow p-2 duration-300 hover:border-black hover:bg-transparent">
        <Icon className="h-7 w-7" />
      </button>
    </Link>
  );
};

export default SocialLinks;
