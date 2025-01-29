import Image from "next/image";

type BgLinesProps = {
  path: string;
};

const BgLines = ({ path }: BgLinesProps) => {
  return (
    <Image
      width={500}
      height={500}
      src={path}
      alt="Lines"
      className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 w-full max-md:top-12"
    />
  );
};

export default BgLines;
