type TextProps = {
  text: string;
};

const Title = ({ text }: TextProps) => {
  return (
    <h1 className="text-[68px] font-medium max-lg:text-4xl max-md:text-3xl 2xl:text-7xl w-fit uppercase">
      {text}
    </h1>
  );
};

export default Title;
