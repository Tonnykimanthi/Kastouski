type StepsProps = {
  current: number;
  setCurrent: (value: number) => void;
};

const Steps = ({ current, setCurrent }: StepsProps) => {
  const handleInitialStep = () => {
    setCurrent(0);
  };
  const handleFirstStep = () => {
    setCurrent(1);
  };
  const handleSecondStep = () => {
    setCurrent(2);
  };
  const handleThirdStep = () => {
    setCurrent(3);
  };
  const handleFourthStep = () => {
    setCurrent(4);
  };

  return (
    <div className="mt-5 flex items-center justify-center gap-x-2">
      <span
        className={`block h-4 w-4 rounded-full border border-white ${current === 0 ? "bg-white" : ""}`}
        onClick={handleInitialStep}
      ></span>
      <span
        className={`block h-4 w-4 rounded-full border border-white ${current === 1 ? "bg-white" : ""}`}
        onClick={handleFirstStep}
      ></span>
    </div>
  );
};

export default Steps;
