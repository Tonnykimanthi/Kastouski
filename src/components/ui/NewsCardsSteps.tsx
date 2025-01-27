type StepsProps = {
  current: number;
  setCurrent: (value: number) => void;
};

const NewsCardsSteps = ({ current, setCurrent }: StepsProps) => {
  return <div className="mt-5 flex items-center justify-center gap-x-2"></div>;
};

export default NewsCardsSteps;
