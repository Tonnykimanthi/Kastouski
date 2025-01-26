type StepsProps = {
  current: number;
  setCurrent: (value: number) => void;
};

const NewsCardsSteps = ({ current, setCurrent }: StepsProps) => {
  return (
    <div className="mt-5 flex items-center justify-center gap-x-2">
      <span
        className={`block h-4 w-4 rounded-full border border-white ${current === 0 ? "bg-white" : ""}`}
        onClick={() => setCurrent(0)}
      ></span>
      <span
        className={`block h-4 w-4 rounded-full border border-white ${current === 1 ? "bg-white" : ""}`}
        onClick={() => setCurrent(1)}
      ></span>
      <span
        className={`block h-4 w-4 rounded-full border border-white md:hidden ${current === 2 ? "bg-white" : ""}`}
        onClick={() => setCurrent(2)}
      ></span>
      <span
        className={`block h-4 w-4 rounded-full border border-white sm:hidden ${current === 3 ? "bg-white" : ""}`}
        onClick={() => setCurrent(3)}
      ></span>
      <span
        className={`block h-4 w-4 rounded-full border border-white sm:hidden ${current === 4 ? "bg-white" : ""}`}
        onClick={() => setCurrent(4)}
      ></span>
      <span
        className={`block h-4 w-4 rounded-full border border-white sm:hidden ${current === 5 ? "bg-white" : ""}`}
        onClick={() => setCurrent(5)}
      ></span>
    </div>
  );
};

export default NewsCardsSteps;
