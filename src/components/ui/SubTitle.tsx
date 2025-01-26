type SubTitleProps = {
  title: string;
  paragraph?: string;
  styles?: string;
};

const SubTitle = ({ title, paragraph }: SubTitleProps) => {
  return (
    <>
      <h2 className="text-3xl font-medium">{title}</h2>
      {paragraph ? <p className="font-light">{paragraph}</p> : ""}
    </>
  );
};

export default SubTitle;
