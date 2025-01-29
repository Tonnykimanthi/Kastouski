type TextProps = {
  text: string;
};

const Title = ({ text }: TextProps) => {
  return (
    <h1 className="text-6xl font-medium max-lg:text-5xl max-md:text-4xl 2xl:text-8xl w-fit">
      {text}
    </h1>
  );
};

export default Title;
