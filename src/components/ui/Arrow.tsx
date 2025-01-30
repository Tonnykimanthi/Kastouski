import Image from "next/image";

export const NextArrow = () => {
  return (
    <div>
      <Image width={10} height={10} src={"/next-arrow-black.svg"} alt="Next" />
    </div>
  );
};
export const PrevArrow = () => {
  return (
    <div>
      <Image width={10} height={10} src={"/prev-arrow-black.svg"} alt="Next" />
    </div>
  );
};

export default NextArrow;
