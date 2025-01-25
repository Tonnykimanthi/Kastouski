type TextProps = {
  text: string;
};

const Title = ({ text }: TextProps) => {
  return (
    <h1 className="w-full text-6xl font-medium max-lg:text-5xl max-md:text-4xl">
      {text}
    </h1>
  );
};

export default Title;
