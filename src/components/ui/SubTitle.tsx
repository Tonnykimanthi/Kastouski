type SubTitleProps = {
  title: string;
  paragraph?: string;
  styles?: string;
};

const SubTitle = ({ title, paragraph }: SubTitleProps) => {
  return (
    <>
      <h2 className="text-[48px] font-medium max-lg:text-3xl max-sm:text-2xl 2xl:text-7xl">
        {title}
      </h2>
      {paragraph ? (
        <p className="mt-[10px] text-[18px] font-light 2xl:text-3xl">
          {paragraph}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default SubTitle;
